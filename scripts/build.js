/* ──────────────────────────────────────────────────────────────
   Builds every page of sikhsinworld.com from scripts/data.js
     node scripts/build.js
   Writes: index.html, <region>/index.html, <region>/<country>/index.html,
   404.html, sitemap.xml. Pages are plain static HTML for GitHub Pages.
   ────────────────────────────────────────────────────────────── */
const fs = require('fs');
const path = require('path');
const { REGIONS, COUNTRIES, INDIA, UAE } = require('./data');
const buildGurdwaras = require('./build-gurdwaras');

// Full Gurdwara directories, by country (one page per Gurdwara)
const DIRECTORIES = { 'Canada': require('./gurdwaras-canada'), 'Australia': require('./gurdwaras-australia'), 'New Zealand': require('./gurdwaras-new-zealand') };
const PHOTOS = { 'Canada': require('./gurdwara-photos-canada.json'), 'Australia': require('./gurdwara-photos-australia.json'), 'New Zealand': require('./gurdwara-photos-new-zealand.json') };

const ROOT = path.join(__dirname, '..');
const SITE = 'https://sikhsinworld.com';
const NAME = 'Sikhs in World';

const slug = s => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Links into the Sikhi library on sikhsinindia.com (written once there, never copied here)
const LIBRARY = [
  ['Sikh Gurus', INDIA + '01-about-sikhism/01-01-sikh-gurus/01-01-sikh-gurus.html'],
  ['Nitnem', INDIA + '03-nitnem/03-nitnem-path.html'],
  ['Daily Hukamnama', INDIA + 'hukamnama.html'],
  ['Sikh calendar', INDIA + '02-sikh-heritage/02-02-discover-culture/02-02-04-sikh-calendar.html'],
  ['Sikh festivals', INDIA + '02-sikh-heritage/02-02-discover-culture/02-02-01-sikh-festivals/02-02-01-sikh-festivals.html'],
  ['Sikh history', INDIA + 'sikh-history.html']
];


function page({ url, title, description, crumbs = [], body }) {
  const canonical = SITE + url;
  const crumbHtml = crumbs.length
    ? `<nav class="crumbs" aria-label="Breadcrumb"><a href="/">World</a>${crumbs.map(([t, h]) => ` › ${h ? `<a href="${h}">${esc(t)}</a>` : `<span>${esc(t)}</span>`}`).join('')}</nav>`
    : '';
  const ld = crumbs.length ? `\n<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [['World', '/'], ...crumbs].map(([t, h], i) => ({ '@type': 'ListItem', position: i + 1, name: t, item: SITE + (h || url) }))
  })}</script>` : `\n<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Organization', name: NAME, url: SITE + '/',
    logo: SITE + '/pictures/sikhsinworld-logo.png', email: 'sikhsinindia@gmail.com', sameAs: [INDIA, UAE]
  })}</script>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${NAME}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE}/pictures/sikhsinworld-share.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE}/pictures/sikhsinworld-share.jpg">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">${ld}
</head>
<body>
<header class="top">
  <div class="wrap top-in">
    <a class="brand" href="/"><img src="/pictures/sikhsinworld-logo.png" width="105" height="130" alt="Sikhs in World – sikhsinworld.com"></a>
    <nav class="family" aria-label="Sikhs in family of sites">
      <a href="/" class="on">World</a>
      <a href="${INDIA}">India</a>
      <a href="${UAE}">UAE</a>
      <a href="${LIBRARY[0][1]}">Gurus</a>
      <a href="${LIBRARY[1][1]}">Nitnem</a>
      <a href="${LIBRARY[2][1]}">Hukamnama</a>
    </nav>
  </div>
</header>
<main>
${crumbHtml ? `<div class="wrap">${crumbHtml}</div>\n` : ''}${body}
</main>
<footer class="foot">
  <div class="wrap foot-in">
    <div>
      <p class="foot-title">Our family of sites</p>
      <p><a href="/">Sikhs in World</a> · <a href="${INDIA}">Sikhs in India</a> · <a href="${UAE}">Sikhs in UAE</a></p>
    </div>
    <div>
      <p class="foot-title">Sikhi library</p>
      <p>${LIBRARY.map(([t, h]) => `<a href="${h}">${t}</a>`).join(' · ')}</p>
    </div>
    <div>
      <p class="foot-title">Get in touch</p>
      <p><a href="mailto:sikhsinindia@gmail.com">sikhsinindia@gmail.com</a></p>
    </div>
  </div>
  <p class="wrap copy">© ${new Date().getFullYear()} Sikhs in World · Preserving Heritage, Inspiring Future</p>
</footer>
</body>
</html>
`;
}

function countryLink(region, [name, kind, href]) {
  if (kind === 'external') return `<a class="chip ext" href="${href}">${esc(name)} <span>↗ own site</span></a>`;
  if (kind === 'page') return `<a class="chip" href="/${region.slug}/${slug(name)}/">${esc(name)}</a>`;
  return `<span class="chip soon" title="Page coming soon">${esc(name)} <span>soon</span></span>`;
}

function write(rel, html) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, html);
}

const urls = ['/'];

// ── Home ─────────────────────────────────────────────────────
write('index.html', page({
  url: '/',
  title: 'Sikhs in World – Sikh Communities, Gurdwaras and Heritage Worldwide',
  description: 'Sikhs in World brings together Sikh communities across every continent: their history, Gurdwaras, Gurpurab events and sangat, region by region and country by country.',
  body: `<section class="hero">
  <div class="wrap hero-in">
    <img class="hero-logo" src="/pictures/sikhsinworld-logo.png" width="200" height="248" alt="Sikhs in World logo">
    <div>
    <p class="ik">ੴ There is only one God</p>
    <h1>Sikhs in World</h1>
    <p class="lead">One Panth, every continent. Discover the history, Gurdwaras and sangat of Sikh communities around the globe, region by region and country by country.</p>
    <p class="hero-links"><a class="btn" href="#regions">Explore the regions</a> <a class="btn ghost" href="${INDIA}">Visit Sikhs in India</a></p>
    </div>
  </div>
</section>
<section class="wrap" id="regions">
  <h2>Explore by region</h2>
  <div class="grid">
${REGIONS.map(r => `    <a class="card" href="/${r.slug}/">
      <h3>${esc(r.name)}</h3>
      <p>${esc(r.countries.map(c => c[0]).join(' · '))}</p>
    </a>`).join('\n')}
  </div>
</section>
<section class="wrap">
  <h2>Our family of sites</h2>
  <div class="grid three">
    <a class="card family-card" href="${INDIA}"><h3>Sikhs in India</h3><p>Gurus, Nitnem, daily Hukamnama, Gurpurabs and Gurdwaras across India.</p></a>
    <a class="card family-card" href="${UAE}"><h3>Sikhs in UAE</h3><p>Gurdwaras and the Sikh community of the United Arab Emirates.</p></a>
    <a class="card family-card" href="/"><h3>Sikhs in World</h3><p>Sikh communities in every other country, all in one place.</p></a>
  </div>
</section>`
}));

// ── Regions and countries ────────────────────────────────────
for (const r of REGIONS) {
  urls.push(`/${r.slug}/`);
  const built = r.countries.filter(c => c[1] !== 'soon').length;
  write(`${r.slug}/index.html`, page({
    url: `/${r.slug}/`,
    title: `Sikhs in ${r.name} – Sikh Communities and Gurdwaras | Sikhs in World`,
    description: `Sikh communities in ${r.name}: ${r.countries.map(c => c[0]).join(', ')}. History, Gurdwaras and sangat country by country.`,
    crumbs: [[r.name]],
    body: `<section class="wrap">
  <h1>Sikhs in ${esc(r.name)}</h1>
  <p class="lead">${esc(r.intro)}</p>
  <h2>Countries</h2>
  <div class="chips">
${r.countries.map(c => '    ' + countryLink(r, c)).join('\n')}
  </div>
  ${built < r.countries.length ? `<p class="note">Countries marked <b>soon</b> are being written. Would you like to help with your country? Write to <a href="mailto:sikhsinindia@gmail.com">sikhsinindia@gmail.com</a>.</p>` : ''}
</section>`
  }));

  for (const [name, kind] of r.countries) {
    if (kind !== 'page') continue;
    const c = COUNTRIES[name];
    if (!c) throw new Error('No country data for ' + name);
    const url = `/${r.slug}/${slug(name)}/`;
    urls.push(url);
    const directory = DIRECTORIES[name] && buildGurdwaras({ dir: DIRECTORIES[name], region: r, write, urls, SITE, slug, esc, photos: PHOTOS[name] });
    write(`${r.slug}/${slug(name)}/index.html`, page({
      url,
      title: `Sikhs in ${name} – History, Gurdwaras and Community | Sikhs in World`,
      description: `${c.story[0].slice(0, 150).replace(/\s+\S*$/, '')}…`,
      crumbs: [[r.name, `/${r.slug}/`], [name]],
      body: `<section class="wrap">
  <h1>Sikhs in ${esc(name)}</h1>
  <nav class="toc" aria-label="On this page"><a href="#story">How Sikhs arrived</a><a href="#gurdwaras">Gurdwaras</a><a href="#events">Events</a><a href="#community">Community</a><a href="#library">Sikhi library</a></nav>

  <h2 id="story">How Sikhs arrived</h2>
${c.story.map(p => `  <p>${esc(p)}</p>`).join('\n')}

  <h2 id="gurdwaras">Gurdwaras in ${esc(name)}</h2>
  <div class="grid">
${c.gurdwaras.map(([g, place, note]) => `    <div class="card plain"><h3>${esc(g)}</h3><p class="place">${esc(place)}</p><p>${esc(note)}</p><p><a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(g + ' ' + place)}">Open in Google Maps</a></p></div>`).join('\n')}
  </div>
  ${directory
    ? `<p><a class="btn" href="${directory.url}">See all ${directory.total} Gurdwaras in ${esc(name)} →</a></p>`
    : `<p class="note">A full directory of Gurdwaras in ${esc(name)}, with addresses and diwan times, is coming soon.</p>`}

  <h2 id="events">Events and Gurpurabs</h2>
  <p class="note">Gurpurab dates and local events for ${esc(name)}, shown in local time, are coming soon. Until then, see the <a href="${LIBRARY[3][1]}">Sikh calendar</a> on Sikhs in India.</p>

  <h2 id="community">Community</h2>
  <p class="note">Sikh organisations, Punjabi schools, Gatka academies and youth groups in ${esc(name)} will be listed here. Know one we should add? Write to <a href="mailto:sikhsinindia@gmail.com">sikhsinindia@gmail.com</a>.</p>

  <h2 id="library">Sikhi library</h2>
  <div class="chips">
${LIBRARY.map(([t, h]) => `    <a class="chip" href="${h}">${t}</a>`).join('\n')}
  </div>
</section>`
    }));
  }
}

// ── 404, sitemap ─────────────────────────────────────────────
write('404.html', page({
  url: '/404.html',
  title: 'Page not found | Sikhs in World',
  description: 'This page could not be found on Sikhs in World.',
  body: `<section class="wrap"><h1>Page not found</h1><p class="lead">This page may have moved. Start again from the <a href="/">Sikhs in World home page</a> or explore a region below.</p>
  <div class="chips">${REGIONS.map(r => `<a class="chip" href="/${r.slug}/">${esc(r.name)}</a>`).join('')}</div></section>`
}).replace('<meta name="description"', '<meta name="robots" content="noindex">\n<meta name="description"'));

const today = new Date().toISOString().slice(0, 10);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${SITE}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);

console.log(`Built ${urls.length} pages + 404 + sitemap.xml`);
