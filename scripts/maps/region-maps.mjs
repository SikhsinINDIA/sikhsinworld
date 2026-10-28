// Makes scripts/region-maps.json (one map per region).
// One-off tool: npm i --no-save world-atlas@2.0.2 topojson-client@3.1.0 topojson-simplify@3.0.3 d3-geo@3.1.1
//   node scripts/maps/region-maps.mjs scripts/region-maps.json "$(node -e "const {REGIONS}=require('./scripts/data');console.log(JSON.stringify(Object.fromEntries(REGIONS.map(r=>[r.slug,r.countries.map(c=>c[0])]))))")"
// One map per region → SikhsinWORLD/scripts/region-maps.json
// Natural Earth 1:50m countries (world-atlas, public domain), simplified, each region
// drawn in an equal-area projection centred on it and cut to the frame.
import fs from 'fs';
import { createRequire } from 'module';
import { geoAzimuthalEqualArea, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { presimplify, simplify, quantile } from 'topojson-simplify';
const require = createRequire(import.meta.url);
let topo = require('world-atlas/countries-50m.json');
topo = presimplify(topo);
topo = simplify(topo, quantile(topo, 0.45));

const ALIAS = { 'United States': 'United States of America' };
// The part of the world each region's map shows: [west, south, east, north]
const BOX = {
  'south-asia': [60, 5, 98, 38], 'middle-east': [32, 11, 63, 38], 'europe': [-24, 34, 42, 71],
  'north-america': [-168, 6, -52, 72], 'south-america': [-90, -56, -32, 13], 'africa': [-19, -36, 58, 37],
  'east-southeast-asia': [91, -11, 147, 47], 'australia-nz': [112, -48, 180, -2]
};
const W = 1000, H = 640;
const all = feature(topo, topo.objects.countries).features.filter(f => f.properties.name !== 'Antarctica');
const regions = JSON.parse(process.argv[3]);   // { slug: [country names] }
const out = {};
for (const [slug, [w, s, e, n]] of Object.entries(BOX)) {
  const box = { type: 'Polygon', coordinates: [[[w, s], [w, n], [e, n], [e, s], [w, s]]] };
  const proj = geoAzimuthalEqualArea().rotate([-(w + e) / 2, -(s + n) / 2]).fitExtent([[10, 10], [W - 10, H - 10]], box).clipAngle(80).clipExtent([[0, 0], [W, H]]);
  const path = geoPath(proj).digits(1);
  const mine = regions[slug].map(n => ALIAS[n] || n);
  const countries = [], grey = [];
  for (const f of all) {
    const d = path(f);
    if (!d) continue;
    const own = mine.includes(f.properties.name);
    if (own) {
      const area = path.area(f);
      countries.push({ name: Object.keys(ALIAS).find(k => ALIAS[k] === f.properties.name) || f.properties.name, d, at: path.centroid(f).map(v => Math.round(v)), area: Math.round(area) });
    } else grey.push(d);
  }
  // Countries too small to click on get a dot
  for (const c of countries) c.dot = c.area < 400;
  for (const n of regions[slug]) if (!countries.some(c => c.name === n)) console.log(`  ${slug}: ${n} not on the map`);
  out[slug] = { viewBox: `0 0 ${W} ${H}`, countries, grey: grey.join('') };
  console.log(slug, 'countries', countries.length, 'bytes', JSON.stringify(out[slug]).length);
}
fs.writeFileSync(process.argv[2], JSON.stringify(out));
