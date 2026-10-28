/* ──────────────────────────────────────────────────────────────
   Gurdwara directory pages, in the same poster design as the
   Gurdwara pages on sikhsinindia.com (css/gurdwara.css).
   Called from build.js:
     <region>/<country>/gurdwaras/                       all provinces
     <region>/<country>/gurdwaras/<province>/            every Gurdwara in a province
     <region>/<country>/gurdwaras/<province>/<gurdwara>/ one page per Gurdwara
   ────────────────────────────────────────────────────────────── */
const slugify = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const cityOf = g => (g.c || '').replace(/\s*\(.*\)$/, '').replace(/ area$/, '').replace(/^near /, '');
const gurdwaraSlug = g => {
  const name = slugify(g.n), city = slugify(cityOf(g));
  return city && !name.includes(city) ? `${name}-${city}` : name;
};
// Photos are kept in Google Drive (SikhsinWorld/01-world-gurudwaras), one folder per Gurdwara,
// in the same kind of tree as the Gurdwara pictures on sikhsinindia.com:
//   <continent>/<country>/<city>/<gurdwara>/<gurdwara>-01.jpg
// The photo list (scripts/gurdwara-photos-<country>.json) holds each file's Drive ID.
const photoFolder = (regionSlug, country, g) =>
  `${regionSlug}/${slugify(country)}/${slugify(cityOf(g)) || 'other'}/${gurdwaraSlug(g)}/`;
// Photos are listed under the Gurdwara’s worldgurudwaras.com slug where it has one, else its page slug
const photoKey = g => g.wg || gurdwaraSlug(g);
const driveImage = id => `https://lh3.googleusercontent.com/d/${id}=w1200`;

module.exports = function buildGurdwaras({ dir, region, write, urls, SITE, slug, esc, photos = {} }) {
  const country = dir.country;
  const photosOf = g => (photos[photoKey(g)] || []).map(p => driveImage(p.drive));
  // Photos from Wikimedia Commons carry a credit (author, licence, source page), shown wherever the photo is
  const creditsOf = g => (photos[photoKey(g)] || []).map(p => p.credit);
  const creditHtml = c => c ? `<a href="${esc(c.page)}" target="_blank" rel="noopener">${esc(c.by || 'Unknown author')}</a>, ${c.licenseUrl ? `<a href="${esc(c.licenseUrl)}" target="_blank" rel="noopener">${esc(c.license)}</a>` : esc(c.license)}, via Wikimedia Commons` : '';
  const CREDIT_STYLE = 'font-size:12px;opacity:.75;margin-top:6px;line-height:1.5';
  // Gurdwaras taken from OpenStreetMap (g.osm, e.g. "node/123") need its licence credit
  const OSM_CREDIT = 'Some addresses come from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a>, available under the Open Database Licence.';
  const usesOsm = dir.provinces.some(p => p.list.some(g => g.osm));
  const base = `/${region.slug}/${slug(country)}/gurdwaras/`;
  const total = dir.provinces.reduce((t, p) => t + p.list.length, 0);
  const gurdwaras = n => `${n} Gurdwara${n === 1 ? '' : 's'}`, gurudwaras = n => `${n} Gurudwara${n === 1 ? '' : 's'}`;
  // Words for the country’s divisions, e.g. Province / provinces and territories, State / states and territories
  const Div = dir.division || 'Province', div = Div.toLowerCase(), divs = dir.divisions || `${div}s`;

  const ICON = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3 L16 8" stroke="#F7941D" stroke-width="2" stroke-linecap="round"/>
            <circle cx="16" cy="10.5" r="2.5" fill="#F7941D"/>
            <path d="M7 27 L7 19 C7 14 11 12 16 12 C21 12 25 14 25 19 L25 27 Z" stroke="#F7941D" stroke-width="2" fill="rgba(247,148,29,0.25)" stroke-linejoin="round"/>
            <rect x="5" y="27" width="22" height="3" rx="1" fill="#F7941D"/>
          </svg>`;
  const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  const BACK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>`;

  // "GURDWARA DUKH NIVARAN SAHIB" → white first part, saffron second part (as on sikhsinindia.com)
  const heroTitle = text => {
    const w = text.toUpperCase().split(' ');
    const cut = w.length <= 2 ? 1 : 2;
    return `${esc(w.slice(0, cut).join(' '))} <span>${esc(w.slice(cut).join(' '))}</span>`;
  };
  // Phone link: a number written with + keeps its own code, a local one gets the country’s (+1 by default)
  const telOf = ph => ph.trim().startsWith('+') ? `+${ph.replace(/\D/g, '')}` : `+${dir.dial || '1'}${ph.replace(/\D/g, '').replace(/^0/, '')}`;
  const firstSentence = p => (p.match(/^.*?[.!?](\s|$)/) || [p])[0].trim();
  const fullAddress = (g, prov) => [g.a, g.c && g.c.replace(/\s*\(.*\)$/, '').replace(/ area$/, ''), [prov.abbr, g.pc].filter(Boolean).join(' ')].filter(Boolean).join(', ');
  const place = (g, prov) => [g.c, prov.name].filter(Boolean).join(', ');
  const gSlug = gurdwaraSlug;
  const mapsUrl = (g, prov) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.n + ', ' + fullAddress(g, prov) + ', ' + country)}`;

  function poster({ url, title, description, eyebrow = 'Sikh Heritage &amp; Holy Places', hero, subtitle, banner, body, back, related, footLeft, ld, image, gallery }) {
    const hasPhotos = body.includes('lh3.googleusercontent.com');
    const canonical = SITE + url;
    const share = encodeURIComponent(canonical);
    const ogImage = image || `${SITE}/pictures/sikhsinworld-share.jpg`;
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Sikhs in World">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">${image ? '' : `
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">`}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${ogImage}">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/gurdwara.css">${image || hasPhotos ? `
  <link rel="preconnect" href="https://lh3.googleusercontent.com">` : ''}
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="world-pill" href="/" title="Sikhs in World home">&#127757; Sikhs in World</a>
<div class="poster">
  <!-- ── HEADER ── -->
  <div class="header">
    <a class="logo-wrap" href="/">
      <img class="logo-img" src="/pictures/sikhsinworld-logo.png" width="73" height="90" alt="Sikhs in World logo">
    </a>
    <div class="hero">
      <div class="hero-eyebrow">${eyebrow}</div>
      <h1 class="hero-title">${hero}</h1>
      <div class="hero-subtitle">${esc(subtitle)}</div>
      <div class="gold-rule"><div class="gold-rule-diamond"></div></div>
      <div class="hero-tagline">Faith &nbsp;·&nbsp; Seva &nbsp;·&nbsp; Sangat &nbsp;·&nbsp; Heritage</div>
    </div>
  </div>
  <!-- ── INTRO BANNER ── -->
  <div class="intro-banner">
    <p>${esc(banner)}</p>
  </div>
${body}
  <!-- ── QUOTE ── -->
  <div class="quote-panel">
    <div class="quote-mark">"</div>
    <div class="quote-text">Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh &mdash; the Khalsa belongs to the Almighty, and victory too is His.</div>
    <div class="quote-attr">&mdash; Sikh Salutation</div>
  </div>
  <!-- ── SOCIAL SHARE BAR ── -->
  <div class="gsb-share-container">
    <div class="gsb-share-title">Share This Page</div>
    <div class="gsb-share-buttons">
      <a class="gsb-share-btn gsb-btn-whatsapp" href="https://wa.me/?text=${encodeURIComponent(title + ' ')}${share}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
        WhatsApp
      </a>
      <a class="gsb-share-btn gsb-btn-facebook" href="https://www.facebook.com/sharer/sharer.php?u=${share}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Facebook
      </a>
      <button class="gsb-share-btn gsb-btn-instagram" type="button" onclick="navigator.clipboard&&navigator.clipboard.writeText(location.href).then(function(){alert('Link copied. Paste it in your Instagram story or bio.')})">
        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        Instagram
      </button>
    </div>
  </div>
  <!-- ── EXPLORE NEARBY ── -->
  <nav class="seo-related" aria-labelledby="seo-related-h">
    <h2 id="seo-related-h">Explore nearby</h2>
    <ul>
${related.main.map(([t, h]) => `      <li><a href="${h}">${esc(t)}</a></li>`).join('\n')}
    </ul>${related.more && related.more.length ? `
    <h3>${esc(related.moreTitle)}</h3>
    <ul>
${related.more.map(([t, h]) => `      <li><a href="${h}">${esc(t)}</a></li>`).join('\n')}
    </ul>` : ''}
  </nav>
  <!-- ── FOOTER / BACK BUTTON ── -->
  <div class="footer">
    <div class="footer-content">
      <a class="btn-back" href="${back}">
        ${BACK}
        Back
      </a>
      <div class="footer-left">${footLeft ? esc(footLeft) + '<br>' : ''}&copy; ${new Date().getFullYear()} <a href="/" style="color:inherit">Sikhs in World</a> &middot; sikhsinworld.com</div>
      <div class="footer-right">Waheguru Ji Ka Khalsa &middot; Waheguru Ji Ki Fateh</div>
    </div>
  </div>
</div>${gallery ? `
<!-- ── LIGHTBOX ── -->
<div class="lightbox" id="lightbox">
  <button class="lb-close" onclick="closeLightbox()">✕ &nbsp;Close</button>
  <img id="lightbox-img" src="" alt="Enlarged view of the selected picture">
  <button class="lb-download" onclick="downloadCurrentImage()">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 5v10M7 15l5 5 5-5"/><rect x="3" y="19" width="18" height="2" rx="1"/></svg>
    Download Image
  </button>
</div>
<script src="/js/gurdwara-gallery.js"></script>` : ''}
</body>
</html>
`;
  }

  const crumbLd = items => ({
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: items.map(([t, h], i) => ({ '@type': 'ListItem', position: i + 1, name: t, item: SITE + h }))
  });
  const crumbsTo = [['World', '/'], [region.name, `/${region.slug}/`], [country, `/${region.slug}/${slug(country)}/`], [`Gurudwaras in ${country}`, base]];
  const countryLinks = [
    [`Gurudwaras in ${country}`, base],
    [`Sikhs in ${country}`, `/${region.slug}/${slug(country)}/`],
    [`Sikhs in ${region.name}`, `/${region.slug}/`]
  ];

  // ── Country page: every province ──────────────────────────────
  urls.push(base);
  write(`${base.slice(1)}index.html`, poster({
    url: base,
    title: `Gurudwaras in ${country} – ${gurdwaras(total)} by ${Div} | Sikhs in World`,
    description: `Directory of ${gurudwaras(total)} in ${country}, ${div} by ${div}, with addresses, maps and a short introduction to each Gurdwara.`,
    hero: heroTitle(`Gurudwaras in ${country}`),
    subtitle: `${gurudwaras(total)} across ${dir.provinces.length} ${dir.provinces.length === 1 ? div : divs}`,
    banner: dir.banner,
    body: `  <!-- ── ${Div.toUpperCase()}S ── -->
  <div class="cities-wrapper">
    <div class="section-heading">Choose a <span>${Div}</span></div>
    <div class="section-sub">Tap a ${div} to see its Gurudwaras</div>
    <div class="city-grid">
${dir.provinces.map(p => `      <a class="city-card" href="${base}${slug(p.name)}/">
        <div class="city-icon">
          ${ICON}
        </div>
        <div class="city-body">
          <div class="city-name">${esc(p.name)}</div>
          <div class="city-note">${p.list.length} Gurudwara${p.list.length > 1 ? 's' : ''}</div>
        </div>
        <div class="city-arrow">${ARROW}</div>
      </a>`).join('\n')}
    </div>
    <div class="legend">Addresses come from public listings and the Gurdwaras’ own websites. Know a Gurdwara we have missed, or spotted a change? Write to <b><a href="mailto:sikhsinindia@gmail.com" style="color:inherit">sikhsinindia@gmail.com</a></b>.${usesOsm ? ' ' + OSM_CREDIT : ''}</div>
  </div>`,
    back: `/${region.slug}/${slug(country)}/`,
    related: { main: countryLinks.slice(1).concat([['Sikhs in World home', '/']]) },
    ld: crumbLd(crumbsTo)
  }));

  // ── Province pages and Gurdwara pages ─────────────────────────
  for (const prov of dir.provinces) {
    const pUrl = `${base}${slug(prov.name)}/`;
    urls.push(pUrl);
    const cities = [];
    for (const g of prov.list) {
      const key = (g.c || 'Other').replace(/\s*\(.*\)$/, '');
      let c = cities.find(x => x.name === key);
      if (!c) cities.push(c = { name: key, list: [] });
      c.list.push(g);
    }
    let i = 0;
    write(`${pUrl.slice(1)}index.html`, poster({
      url: pUrl,
      title: `Gurudwaras in ${prov.name}, ${country} – Addresses and Details | Sikhs in World`,
      description: `${prov.list.length} Gurudwara${prov.list.length > 1 ? 's' : ''} in ${prov.name}, ${country}${cities.length > 1 ? ` across ${cities.map(c => c.name).slice(0, 6).join(', ')}${cities.length > 6 ? ' and more' : ''}` : ''}, with addresses, maps and an introduction to each.`,
      hero: heroTitle(`Gurudwaras in ${prov.name}`),
      subtitle: country,
      banner: prov.intro,
      body: `  <!-- ── GURUDWARAS ── -->
  <div class="gurus-wrapper">
${cities.map(c => `${cities.length > 1 ? `    <h2 class="city-heading">${esc(c.name)}</h2>\n` : ''}${c.list.map(g => {
      const pic = photosOf(g)[0], credit = creditsOf(g)[0];
      return `    <div class="guru-section${pic && i++ % 2 ? ' reverse' : ''}">${pic ? `
      <div class="guru-image-wrap">
        <a href="${pUrl}${gSlug(g)}/"><img loading="lazy" class="guru-image" src="${pic}" alt="${esc(g.n)}, ${esc(g.c || prov.name)}"></a>${credit ? `
        <div style="${CREDIT_STYLE}">Photo: ${creditHtml(credit)}</div>` : ''}
      </div>` : ''}
      <div class="guru-text">
        <div class="guru-name-heading"><span>${esc(g.n)}</span><br>${esc(g.c || prov.name)}</div>
        <div class="guru-attribute">Location: ${esc(fullAddress(g, prov))}</div>
        <div class="guru-description">
          <p>${esc(firstSentence(g.p))}</p>
        </div>
        <a class="btn-detailed" href="${pUrl}${gSlug(g)}/">
          Visit Page
          ${ARROW}
        </a>
      </div>
    </div>`;
    }).join('\n')}`).join('\n')}${prov.list.some(g => g.osm) ? `
    <p style="${CREDIT_STYLE}">${OSM_CREDIT}</p>` : ''}
  </div>`,
      back: base,
      related: { main: countryLinks, moreTitle: `Gurudwaras in other ${div === 'state' ? 'states and territories' : divs.split(' ')[0]}`, more: dir.provinces.filter(p => p !== prov).map(p => [`Gurudwaras in ${p.name}`, `${base}${slug(p.name)}/`]) },
      ld: crumbLd([...crumbsTo, [prov.name, pUrl]])
    }));

    for (const g of prov.list) {
      const gUrl = `${pUrl}${gSlug(g)}/`;
      urls.push(gUrl);
      const addr = fullAddress(g, prov);
      const pics = photosOf(g);
      const credits = creditsOf(g).slice(0, 4).filter(Boolean);
      const label = `${g.n}, ${g.c || prov.name}`;
      const gallery = pics.length ? `  <!-- ── GALLERY ── -->
  <div class="gallery-wrapper">
    <img id="galleryMain" class="gallery-main" src="${pics[0]}" alt="${esc(label)}" onclick="openLightbox(this.src, '${esc(label).replace(/'/g, '&#39;')}')">${pics.length > 1 ? `
    <div class="gallery-thumbs">
${pics.slice(0, 4).map((p, n) => `      <img loading="lazy" class="gallery-thumb${n ? '' : ' active'}" src="${p}" alt="${esc(label)} — view ${n + 1}" onclick="selectSlide(${n})">`).join('\n')}
    </div>` : ''}
    <div class="gallery-hint">Tap any photo to enlarge</div>${credits.length ? `
    <div style="${CREDIT_STYLE}">Photo${credits.length > 1 ? 's' : ''}: ${credits.map(creditHtml).join('; ')}</div>` : ''}
  </div>
` : '';
      const sameCity = prov.list.filter(x => x !== g && x.c && g.c && x.c.replace(/\s*\(.*\)$/, '') === g.c.replace(/\s*\(.*\)$/, ''));
      const nearby = (sameCity.length ? sameCity : prov.list.filter(x => x !== g)).slice(0, 9);
      const facts = [
        ['Address', esc(addr + ', ' + country)],
        ['City', esc(g.c || 'See address')],
        [Div, esc(prov.name)],
        g.y && ['Established', esc(g.y)],
        g.ph && ['Phone', `<a href="tel:${telOf(g.ph)}">${esc(g.ph)}</a>`],
        g.w && ['Website', `<a href="${esc(g.w)}" target="_blank" rel="noopener">${esc(g.w.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))}</a>`]
      ].filter(Boolean);
      write(`${gUrl.slice(1)}index.html`, poster({
        url: gUrl,
        title: `${g.n}, ${place(g, prov)} – Address and Details | Sikhs in World`,
        description: `${firstSentence(g.p)} Address: ${addr}.`.slice(0, 300),
        hero: heroTitle(g.n),
        subtitle: `${place(g, prov)} — ${country}`,
        banner: firstSentence(g.p),
        image: pics[0],
        gallery: pics.length > 0,
        body: `${gallery}  <!-- ── DETAIL ── -->
  <div class="detail-wrapper">
    <div class="guru-section" style="display:block; border-bottom:none; padding:4px 0 0;">
      <div class="guru-name-heading"><span>${esc(g.n)}</span><br>${esc(g.c || prov.name)}</div>
      <div class="guru-attribute">${esc(addr)} &nbsp;·&nbsp; ${esc(country)}</div>
      <div class="guru-description">
        <p>${esc(g.p)}</p>
      </div>
      <div class="facts">
${facts.map(([l, v]) => `        <div class="fact">
          <div class="fact-label">${l}</div>
          <div class="fact-value">${v}</div>
        </div>`).join('\n')}
      </div>
      <div class="detail-actions">
        <a class="btn-detailed" href="${esc(mapsUrl(g, prov))}" target="_blank" rel="noopener">Open in Google Maps ${ARROW}</a>
      </div>
      <p class="check-note">Diwan and langar times can change, so please check with the Gurdwara before you travel. Spotted something out of date? Write to <a href="mailto:sikhsinindia@gmail.com">sikhsinindia@gmail.com</a>.${g.osm ? ` Address from <a href="https://www.openstreetmap.org/${esc(g.osm)}" target="_blank" rel="noopener">OpenStreetMap</a> (© OpenStreetMap contributors, Open Database Licence).` : ''}</p>
    </div>
  </div>`,
        back: pUrl,
        footLeft: `Address: ${addr}`,
        related: {
          main: [[`Gurudwaras in ${prov.name}`, pUrl], ...countryLinks.slice(0, 2)],
          moreTitle: sameCity.length ? `More Gurudwaras in ${g.c.replace(/\s*\(.*\)$/, '')}` : `More Gurudwaras in ${prov.name}`,
          more: nearby.map(x => [`${x.n}, ${x.c || prov.name}`, `${pUrl}${gSlug(x)}/`])
        },
        ld: [crumbLd([...crumbsTo, [prov.name, pUrl], [g.n, gUrl]]), {
          '@context': 'https://schema.org', '@type': 'PlaceOfWorship', name: g.n, url: SITE + gUrl, description: g.p,
          address: { '@type': 'PostalAddress', streetAddress: g.a, addressLocality: (g.c || '').replace(/\s*\(.*\)$/, '') || undefined, addressRegion: prov.abbr, postalCode: g.pc, addressCountry: dir.code },
          telephone: g.ph, sameAs: g.w, foundingDate: g.y && /^\d{4}$/.test(g.y) ? g.y : undefined
        }]
      }));
    }
  }
  return { url: base, total };
};

module.exports.photoFolder = photoFolder;
module.exports.gurdwaraSlug = gurdwaraSlug;
module.exports.photoKey = photoKey;
