// Makes scripts/world-regions.json (the world map in eight regions).
// One-off tool: npm i --no-save world-atlas@2.0.2 topojson-client@3.1.0 d3-geo@3.1.1
//   node scripts/maps/world-map.mjs scripts/world-regions.json
// World map in the site's eight regions → SikhsinWORLD/scripts/world-regions.json
// Natural Earth 1:110m countries (1:50m for the small-country dots) (world-atlas, public domain), merged per region.
import fs from 'fs';
import { createRequire } from 'module';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature, merge, mesh } from 'topojson-client';
const require = createRequire(import.meta.url);
const topo = require('world-atlas/countries-110m.json');
const topo50 = require('world-atlas/countries-50m.json');

const R = {
  'south-asia': ['India', 'Pakistan', 'Afghanistan', 'Nepal', 'Bangladesh', 'Sri Lanka', 'Bhutan', 'Maldives', 'Siachen Glacier', 'Br. Indian Ocean Ter.'],
  'middle-east': ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain', 'Iran', 'Iraq', 'Israel', 'Palestine', 'Jordan', 'Lebanon', 'Syria', 'Yemen', 'Turkey'],
  'east-southeast-asia': ['China', 'Taiwan', 'Hong Kong', 'Macao', 'Japan', 'South Korea', 'North Korea', 'Mongolia', 'Malaysia', 'Singapore', 'Thailand', 'Vietnam', 'Laos', 'Cambodia', 'Myanmar', 'Philippines', 'Indonesia', 'Brunei', 'Timor-Leste'],
  'australia-nz': ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Solomon Is.', 'Vanuatu', 'New Caledonia', 'Samoa', 'Tonga', 'Kiribati', 'Micronesia', 'Marshall Is.', 'Palau', 'Nauru', 'Fr. Polynesia', 'Cook Is.', 'Niue', 'American Samoa', 'Wallis and Futuna Is.', 'Norfolk Island', 'Ashmore and Cartier Is.', 'Pitcairn Is.', 'Guam', 'N. Mariana Is.'],
  'north-america': ['Canada', 'United States of America', 'Mexico', 'Greenland', 'St. Pierre and Miquelon', 'Bermuda', 'Guatemala', 'Belize', 'Honduras', 'El Salvador', 'Nicaragua', 'Costa Rica', 'Panama', 'Cuba', 'Jamaica', 'Haiti', 'Dominican Rep.', 'Puerto Rico', 'Bahamas', 'Turks and Caicos Is.', 'Cayman Is.', 'Antigua and Barb.', 'Anguilla', 'Aruba', 'Barbados', 'British Virgin Is.', 'U.S. Virgin Is.', 'Curaçao', 'Dominica', 'Grenada', 'Montserrat', 'Saint Lucia', 'St. Kitts and Nevis', 'St. Vin. and Gren.', 'Sint Maarten', 'St-Martin', 'St-Barthélemy'],
  'south-america': ['Argentina', 'Peru', 'Brazil', 'Chile', 'Colombia', 'Venezuela', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay', 'Guyana', 'Suriname', 'Falkland Is.', 'Trinidad and Tobago', 'S. Geo. and the Is.'],
  'africa': ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cameroon', 'Central African Rep.', 'Chad', 'Comoros', 'Congo', 'Dem. Rep. Congo', 'Djibouti', 'Egypt', 'Eq. Guinea', 'Eritrea', 'eSwatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', "Côte d'Ivoire", 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'São Tomé and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'Somaliland', 'South Africa', 'S. Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'W. Sahara', 'Zambia', 'Zimbabwe', 'Saint Helena', 'Indian Ocean Ter.']
};
const EUROPE_EXTRA = ['Russia'];
const NOT = ['Antarctica', 'Fr. S. Antarctic Lands', 'Heard I. and McDonald Is.'];
const OTHER = ['Kazakhstan', 'Kyrgyzstan', 'Tajikistan', 'Turkmenistan', 'Uzbekistan', 'Georgia', 'Armenia', 'Azerbaijan'];

const geoms = topo.objects.countries.geometries;
const regionOf = name => {
  for (const [r, l] of Object.entries(R)) if (l.includes(name)) return r;
  if (NOT.includes(name)) return null;
  if (OTHER.includes(name)) return 'other';
  return 'europe'; // everything left is European
};
const W = 1000, H = 520;
const land = feature(topo, { type: 'GeometryCollection', geometries: geoms.filter(g => !NOT.includes(g.properties.name)) });
const proj = geoNaturalEarth1().fitExtent([[4, 4], [W - 4, H - 4]], land);
const path = geoPath(proj).digits(1);

const out = { viewBox: `0 0 ${W} ${H}`, regions: {} };
for (const r of [...Object.keys(R), 'europe', 'other']) {
  const gs = geoms.filter(g => regionOf(g.properties.name) === r);
  const shape = merge(topo, gs);
  out.regions[r] = { d: path(shape), centroid: path.centroid(shape).map(Math.round) };
}
// Faint country borders inside each region
out.borders = path(mesh(topo, topo.objects.countries, (a, b) => a !== b && regionOf(a.properties.name) && regionOf(b.properties.name)));
// Small countries that disappear at this size: a dot each (Singapore, Hong Kong, Mauritius, Bahrain, Fiji…)
out.dots = ['Singapore', 'Hong Kong', 'Mauritius', 'Bahrain', 'Qatar', 'Fiji', 'Trinidad and Tobago'].map(n => {
  const g = topo50.objects.countries.geometries.find(x => x.properties.name === n);
  return { name: n, region: regionOf(n), at: path.centroid(feature(topo50, g)).map(v => Math.round(v * 10) / 10) };
});
fs.writeFileSync(process.argv[2], JSON.stringify(out));
console.log('bytes', JSON.stringify(out).length, Object.fromEntries(Object.entries(out.regions).map(([k, v]) => [k, v.centroid])));
// Label positions (longitude, latitude) for each region's name on the map
const LABELS = { 'south-asia': [79, 21], 'middle-east': [46, 27], 'east-southeast-asia': [108, 24], 'australia-nz': [134, -25], 'north-america': [-100, 47], 'south-america': [-59, -14], 'africa': [20, 4], 'europe': [18, 54] };
const map = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
for (const [r, ll] of Object.entries(LABELS)) map.regions[r].label = proj(ll).map(Math.round);
fs.writeFileSync(process.argv[2], JSON.stringify(map));
