/* ──────────────────────────────────────────────────────────────
   Add Gurdwara photos from a folder (usually Downloads) to the site.
     node scripts/add-gurdwara-photos.js [folder] [--replace]

   Photos must be named "<Gurdwara name>-<n>.jpg", using either the
   Gurdwara's name on worldgurudwaras.com or its page name here, e.g.
   "Gur Sikh Temple-Abbotsford-1.jpg" or "Nanaksar Gurudwara Edmonton-2.jpg".

   Each photo is resized to 1200px wide, uploaded with rclone to Google Drive
     gdrive:SikhsinWorld/01-world-gurudwaras/<continent>/<country>/<city>/<gurdwara>/
   and its Drive ID saved in scripts/gurdwara-photos-<country>.json.
   Gurdwaras that already have photos are skipped unless --replace is given.
   Then run: node scripts/build.js
   ────────────────────────────────────────────────────────────── */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { photoFolder, gurdwaraSlug, photoKey } = require('./build-gurdwaras');

const RCLONE = process.env.RCLONE || 'C:/Users/Hp/Downloads/rclone-v1.74.4-windows-amd64/rclone.exe';
const DRIVE = 'gdrive:SikhsinWorld/01-world-gurudwaras/';
const COUNTRIES = [
  { data: require('./gurdwaras-canada'), region: 'north-america', photos: 'gurdwara-photos-canada.json' },
  { data: require('./gurdwaras-australia'), region: 'australia-nz', photos: 'gurdwara-photos-australia.json' },
  { data: require('./gurdwaras-new-zealand'), region: 'australia-nz', photos: 'gurdwara-photos-new-zealand.json' },
  { data: require('./gurdwaras-thailand'), region: 'east-southeast-asia', photos: 'gurdwara-photos-thailand.json' },
  { data: require('./gurdwaras-singapore'), region: 'east-southeast-asia', photos: 'gurdwara-photos-singapore.json' }
];

const args = process.argv.slice(2);
const replace = args.includes('--replace');
const dir = args.find(a => !a.startsWith('--')) || path.join(os.homedir(), 'Downloads');
const slugify = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const rclone = (...a) => execFileSync(RCLONE, a, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
// Forgive spelling variants: Gurudwara/Gurdwara/Gurduara, Sahab/Sahib, a trailing "Inc"
const norm = s => slugify(s).replace(/\bgur(u|d)?(d)?(w|u)ara\b/g, 'gurdwara').replace(/\bsahab\b/g, 'sahib').replace(/-inc$/, '');
const keysOf = g => [g.wg, gurdwaraSlug(g), slugify(g.n), slugify(`${g.n} ${g.c}`), g.aka && slugify(g.aka)].filter(Boolean).map(norm);

(async () => {
  // Group the photos in the folder by Gurdwara name
  const groups = {};
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(/^(.*)-(\d+)\.(jpe?g|png|webp)$/i);
    if (m) (groups[norm(m[1])] = groups[norm(m[1])] || []).push([+m[2], f]);
  }

  for (const c of COUNTRIES) {
    const file = path.join(__dirname, c.photos);
    const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const g of c.data.provinces.flatMap(p => p.list)) {
      const key = keysOf(g).find(k => groups[k]);
      const files = key && groups[key];
      if (!files) continue;
      if ((manifest[photoKey(g)] || []).length && !replace) { console.log(`skip  ${g.n} (already has photos)`); continue; }

      // Resize into a temporary copy of the Drive folder, then upload
      const folder = photoFolder(c.region, c.data.country, g);
      const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gurdwara-'));
      const names = [];
      for (const [, f] of files.sort((a, b) => a[0] - b[0])) {
        const img = await loadImage(fs.readFileSync(path.join(dir, f)));
        const w = Math.min(1200, img.width), h = Math.round(img.height * w / img.width);
        const cv = createCanvas(w, h), x = cv.getContext('2d');
        x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.drawImage(img, 0, 0, w, h);
        const name = `${gurdwaraSlug(g)}-${String(names.length + 1).padStart(2, '0')}.jpg`;
        fs.writeFileSync(path.join(tmp, name), cv.toBuffer('image/jpeg', 82));
        names.push(name);
      }
      rclone('sync', tmp, DRIVE + folder);
      fs.rmSync(tmp, { recursive: true, force: true });
      const ids = Object.fromEntries(JSON.parse(rclone('lsjson', '--files-only', DRIVE + folder)).map(e => [e.Name, e.ID]));
      manifest[photoKey(g)] = names.map(n => ({ file: n, drive: ids[n] }));
      console.log(`added ${g.n}, ${g.c}: ${names.length} photos → ${folder}`);
    }
    fs.writeFileSync(file, JSON.stringify(manifest, null, 1));
  }
  const used = new Set(COUNTRIES.flatMap(c => c.data.provinces.flatMap(p => p.list.flatMap(keysOf))));
  for (const k of Object.keys(groups)) if (!used.has(k)) console.log(`no Gurdwara matches "${k}"`);
})();
