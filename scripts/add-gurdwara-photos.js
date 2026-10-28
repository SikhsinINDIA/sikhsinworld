/* ──────────────────────────────────────────────────────────────
   Add Gurdwara photos from a folder (usually Downloads) to the site.
     node scripts/add-gurdwara-photos.js [folder] [--replace] [--no-backup]

   Photos must be named "<Gurdwara name>-<n>.jpg", using the Gurdwara's
   name as on its page (or its worldgurudwaras.com name), e.g.
   "Gur Sikh Temple-Abbotsford-1.jpg" or "Nanaksar Gurudwara Edmonton-2.jpg".

   Each photo is resized to 1200px wide, saved as WebP in the Gurdwara's folder
     pictures/04-gurudwaras/<NN-region>/<country>/<province>/<gurdwara>/<gurdwara>-01.webp
   and the original is backed up with rclone to the same path in Google Drive
     gdrive:SikhsinWorld/01-world-gurudwaras/website/…
   Gurdwaras that already have photos are skipped unless --replace is given.
   Photos that need a credit (e.g. from Wikimedia Commons) are listed in <folder>/credits.json:
     { "<file name>": { "by": author, "license": "CC BY-SA 4.0", "licenseUrl": …, "page": source page } }
   and the credit is kept in the Gurdwara folder's credit.json.
   Then run: node scripts/build.js
   ────────────────────────────────────────────────────────────── */
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { photoDir, gurdwaraSlug } = require('./build-gurdwaras');
const { directories, regionDir } = require('./directories');

const RCLONE = process.env.RCLONE || 'C:/Users/Hp/Downloads/rclone-v1.74.4-windows-amd64/rclone.exe';
const DRIVE = 'gdrive:SikhsinWorld/01-world-gurudwaras/website/';
const ROOT = path.join(__dirname, '..');

const args = process.argv.slice(2);
const replace = args.includes('--replace'), backup = !args.includes('--no-backup');
const dir = args.find(a => !a.startsWith('--')) || path.join(os.homedir(), 'Downloads');
const creditsFile = path.join(dir, 'credits.json');
const credits = fs.existsSync(creditsFile) ? JSON.parse(fs.readFileSync(creditsFile, 'utf8')) : {};
const slugify = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
// Forgive spelling variants: Gurudwara/Gurdwara/Gurduara, Sahab/Sahib, a trailing "Inc"
const norm = s => slugify(s).replace(/\bgur(u|d)?(d)?(w|u)ara\b/g, 'gurdwara').replace(/\bsahab\b/g, 'sahib').replace(/-inc$/, '');
const keysOf = g => [g.wg, gurdwaraSlug(g), slugify(g.n), slugify(`${g.n} ${g.c}`), g.aka && slugify(g.aka)].filter(Boolean).map(norm);
const IMAGE = /\.(webp|jpe?g|png)$/i;

(async () => {
  // Group the photos in the folder by Gurdwara name
  const groups = {};
  for (const f of fs.readdirSync(dir)) {
    const m = f.match(/^(.*)-(\d+)\.(jpe?g|png|webp)$/i);
    if (m) (groups[norm(m[1])] = groups[norm(m[1])] || []).push([+m[2], f]);
  }
  const all = directories.flatMap(c => c.data.provinces.flatMap(p => p.list.map(g => ({ c, p, g }))));

  // A photo name that fits more than one Gurdwara (e.g. "Gurdwara Nanaksar") is left alone:
  // rename it with the city, e.g. "Gurdwara Nanaksar Brampton-1.jpg"
  const fits = {};
  for (const { c, g } of all) {
    const key = keysOf(g).find(k => groups[k]);
    if (key) (fits[key] = fits[key] || []).push(`${g.n}, ${g.c} (${c.data.country})`);
  }
  for (const [key, list] of Object.entries(fits)) if (list.length > 1) {
    console.log(`AMBIGUOUS "${key}" fits ${list.join('; ')} — add the city to the file names`);
    delete groups[key];
  }

  for (const { c, p, g } of all) {
    const key = keysOf(g).find(k => groups[k]);
    const files = key && groups[key];
    if (!files) continue;
    const rel = photoDir(regionDir(c.region), c.data.country, p.name, g);
    const to = path.join(ROOT, rel);
    const existing = fs.existsSync(to) ? fs.readdirSync(to).filter(f => IMAGE.test(f)) : [];
    if (existing.length && !replace) { console.log(`skip  ${g.n} (already has photos)`); continue; }
    fs.rmSync(to, { recursive: true, force: true });
    fs.mkdirSync(to, { recursive: true });

    const credit = {};
    let n = 0;
    for (const [, f] of files.sort((a, b) => a[0] - b[0])) {
      const img = await loadImage(fs.readFileSync(path.join(dir, f)));
      const w = Math.min(1200, img.width), h = Math.round(img.height * w / img.width);
      const cv = createCanvas(w, h), x = cv.getContext('2d');
      x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.drawImage(img, 0, 0, w, h);
      const name = `${gurdwaraSlug(g)}-${String(++n).padStart(2, '0')}.webp`;
      fs.writeFileSync(path.join(to, name), await cv.encode('webp', 80));
      if (credits[f]) credit[name] = credits[f];
      if (backup) execFileSync(RCLONE, ['copyto', path.join(dir, f), `${DRIVE}${rel.replace(/^pictures\//, '')}/${name.replace(/\.webp$/, path.extname(f).toLowerCase())}`], { stdio: 'ignore' });
    }
    if (Object.keys(credit).length) fs.writeFileSync(path.join(to, 'credit.json'), JSON.stringify(credit, null, 1));
    console.log(`added ${g.n}, ${g.c}: ${n} photos → ${rel}/`);
  }
  const used = new Set(all.flatMap(({ g }) => keysOf(g)));
  for (const k of Object.keys(groups)) if (!used.has(k)) console.log(`no Gurdwara matches "${k}"`);
})();
