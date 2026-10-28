/* ──────────────────────────────────────────────────────────────
   Every country with a Gurdwara directory, used by build.js and
   add-gurdwara-photos.js.
   Each directory is the hand-written list (scripts/gurdwaras-<country>.js)
   plus the Gurdwaras found on OpenStreetMap (scripts/gurdwaras-osm.json),
   which are added to the same provinces, or make up the whole directory
   for countries without a hand-written list.
   Photos: pictures/04-gurudwaras/… (see photoDir in build-gurdwaras.js)
   ────────────────────────────────────────────────────────────── */
const { REGIONS } = require('./data');

const HAND = [
  ['canada', 'north-america'], ['united-states', 'north-america'],
  ['australia', 'australia-nz'], ['new-zealand', 'australia-nz'],
  ['thailand', 'east-southeast-asia'], ['singapore', 'east-southeast-asia'], ['hong-kong', 'east-southeast-asia'], ['japan', 'east-southeast-asia'],
  ['argentina', 'south-america'], ['peru', 'south-america'],
  ['mauritius', 'africa'],
  ['united-kingdom', 'europe'], ['ireland', 'europe'], ['netherlands', 'europe'], ['spain', 'europe'], ['france', 'europe'], ['italy', 'europe']
];
const OSM = require('./gurdwaras-osm.json');

// Hand-written list + OpenStreetMap additions, province by province
function merge(dir, extra) {
  if (!extra) return dir;
  const provinces = dir.provinces.map(p => ({ ...p, list: [...p.list] }));
  for (const ep of extra.provinces) {
    const p = provinces.find(x => x.name === ep.name);
    if (p) p.list.push(...ep.list);
    else provinces.push({ ...ep });
  }
  return { ...dir, provinces };
}

const directories = [];
for (const [file, region] of HAND) {
  const dir = require(`./gurdwaras-${file}`);
  directories.push({ data: merge(dir, OSM[dir.country]), region });
}
for (const [country, d] of Object.entries(OSM)) {
  if (directories.some(x => x.data.country === country)) continue;
  const { region, ...dir } = d;
  directories.push({ data: dir, region });
}
// The region's folder, numbered in the order of REGIONS, e.g. 04-gurudwaras/03-europe
const regionDir = slug => `04-gurudwaras/${String(REGIONS.findIndex(r => r.slug === slug) + 1).padStart(2, '0')}-${slug}`;

module.exports = { directories, regionDir };
