/* ──────────────────────────────────────────────────────────────
   The Gurudwara maps, in the design of sikhsinindia.com's 04-gurudwaras-in-india.html:
     /04-gurudwaras/04-gurudwaras-in-world.html   the world in eight regions; a region
                                                  opens its own map
     /04-gurudwaras/<NN-region>/                  one map per region; a country opens
                                                  its Gurdwara directory (or its page)
   The maps (scripts/world-regions.json, scripts/region-maps.json) are made from
   Natural Earth country shapes (public domain).
   ────────────────────────────────────────────────────────────── */
const worldMap = require('./world-regions.json');
const regionMaps = require('./region-maps.json');
const { posterPage } = require('./build-gurdwaras');

const URL = '/04-gurudwaras/04-gurudwaras-in-world.html';
// One soft colour per region, in the spirit of the India state map
const FILL = {
  'south-asia': '#ffdfba', 'middle-east': '#ffffba', 'europe': '#bae1ff', 'north-america': '#baffc9',
  'south-america': '#ffc8dd', 'africa': '#fbe7c6', 'east-southeast-asia': '#d5baff', 'australia-nz': '#c0ffee'
};
// Country labels that would sit on top of a neighbour's, moved [x, y] in map units
const LABEL_NUDGE = {
  'Netherlands': [-6, -10], 'Belgium': [-16, 4], 'Switzerland': [24, 10], 'Austria': [8, 0], 'Slovakia': [10, -4],
  'Ireland': [-34, 10], 'United Kingdom': [44, -14], 'France': [-34, 6], 'Chile': [-34, 0], 'Argentina': [14, 0],
  'Uganda': [-24, 0], 'Kenya': [22, 0], 'Qatar': [0, -10], 'Bahrain': [-14, -8], 'Kuwait': [0, -8],
  'Singapore': [10, 14], 'Hong Kong': [16, 0], 'Panama': [0, 14]
};

// ── Shared look and behaviour of the map pages ───────────────────
const STYLE = `  <style>
    .map-wrapper { background: var(--cream); padding: 22px 20px 10px; position: relative; }
    .map-wrapper svg.atlas { width: 100%; max-width: 1000px; height: auto; display: block; margin: 0 auto; }
    .atlas .region { stroke: #fff; stroke-width: 0.8; cursor: pointer; transition: filter 0.2s ease; }
    .atlas .other { fill: #e6e1d6; stroke: #fff; stroke-width: 0.8; }
    .atlas .soon { fill: #ebe6dc; stroke: #fff; stroke-width: 0.8; cursor: default; }
    .atlas .borders { fill: none; stroke: rgba(255,255,255,0.75); stroke-width: 0.4; pointer-events: none; }
    .atlas .dot { stroke: #e8830a; stroke-width: 1.5; cursor: pointer; }
    .atlas .region-label { font: 700 13px Lato, sans-serif; fill: #1a2340; text-anchor: middle; pointer-events: none;
      paint-order: stroke; stroke: rgba(255,255,255,0.85); stroke-width: 3px; }
    .atlas .region-label.muted { fill: #8a8577; font-weight: 400; }
    #region-map .region-label { font-size: 19px; }
    .atlas a:hover .region, .atlas a:active .region, .atlas a:focus .region, .atlas .region.demo-hover {
      stroke: var(--gold); stroke-width: 2.4;
      filter: brightness(1.12) saturate(1.6) drop-shadow(0 0 5px rgba(247,148,29,0.85));
    }
    .tooltip { position: absolute; background: rgba(0,0,0,0.75); color: #fff; padding: 4px 8px; border-radius: 4px;
      font-size: 13px; pointer-events: none; display: none; white-space: nowrap; z-index: 6; }
    .tap-hint-overlay { position: absolute; top: 46%; left: 50%; transform: translate(-50%, -50%); width: 92px; height: 92px;
      display: flex; align-items: center; justify-content: center; pointer-events: none; z-index: 5; opacity: 1; transition: opacity 0.5s ease; }
    .tap-hint-overlay.tap-hint-hidden { opacity: 0; }
    .tap-hint-ripple { position: absolute; inset: 0; border-radius: 50%; border: 2px solid var(--gold); opacity: 0; animation: tapHintRipple 1.8s ease-out infinite; }
    .tap-hint-ripple.tap-hint-ripple-delay { animation-delay: 0.6s; }
    .tap-hint-hand-bg { position: absolute; top: 50%; left: 50%; width: 46px; height: 46px; margin: -23px 0 0 -23px; background: var(--gold);
      border-radius: 50%; box-shadow: 0 3px 10px rgba(0,0,0,0.3); animation: tapHintPress 1.8s ease-in-out infinite; }
    .tap-hint-hand { position: relative; width: 24px; height: 24px; color: var(--navy); animation: tapHintPress 1.8s ease-in-out infinite; }
    @keyframes tapHintRipple { 0% { transform: scale(0.55); opacity: 0.65; } 100% { transform: scale(2); opacity: 0; } }
    @keyframes tapHintPress { 0%, 100% { transform: scale(1) translateY(0); } 40% { transform: scale(0.86) translateY(2px); } 55% { transform: scale(1.05) translateY(-1px); } }
    .map-hint { display: flex; align-items: center; justify-content: center; gap: 7px; font-size: 10.5px; letter-spacing: 1.5px;
      text-transform: uppercase; color: var(--gold); font-weight: 800; margin-top: 10px; animation: mapHintPulse 2.2s ease-in-out infinite; }
    .map-hint svg { width: 13px; height: 13px; flex-shrink: 0; }
    @keyframes mapHintPulse { 0%, 100% { opacity: 0.7; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-2px); } }
    @media (prefers-reduced-motion: reduce) { .tap-hint-ripple, .tap-hint-hand-bg, .tap-hint-hand, .map-hint { animation: none; } }
    .notice-strip { background: var(--navy); border-top: 3px solid var(--gold); padding: 10px 0; }
    .notice-strip marquee { color: var(--gold); font-size: 13px; font-weight: 700; letter-spacing: 0.2px; }
    .seo-links { max-width: 1100px; margin: 24px auto 8px; padding: 0 16px; }
    .seo-links h2 { font-size: 18px; margin: 18px 0 10px; color: #002B6D; }
    .seo-links ul { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 6px 18px; }
    .seo-links a { display: block; padding: 8px 0; color: #002B6D; text-decoration: none; border-bottom: 1px solid rgba(0,43,109,.12); font-size: 14px; }
    .seo-links a:hover { color: #e8830a; }
    .seo-links small, .seo-links .soon-note { color: #777; }
    .seo-links .soon-note { font-size: 13px; margin: 12px 0 0; }
    .map-back { text-align: center; margin: 22px 0 6px; }
    .map-back a { display: inline-block; border: 2px solid var(--navy); color: var(--navy); font-weight: 700; text-decoration: none; padding: 10px 20px; border-radius: 8px; }
    .map-back a:hover { background: var(--gold); border-color: var(--gold); }
    @media (max-width: 600px) { .map-wrapper { padding: 14px 6px 6px; } .map-hint { font-size: 9px; letter-spacing: 1px; } .atlas .region-label { font-size: 15px; } #region-map .region-label { font-size: 24px; } }
  </style>`;
const TAP_HINT = `    <div class="tap-hint-overlay" id="tapHintOverlay" aria-hidden="true">
      <div class="tap-hint-ripple"></div>
      <div class="tap-hint-ripple tap-hint-ripple-delay"></div>
      <div class="tap-hint-hand-bg"></div>
      <svg class="tap-hint-hand" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3a1.5 1.5 0 0 1 3 0v7h.5V5a1.5 1.5 0 0 1 3 0v5h.5V6.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.2c-1.9 0-3.1-.7-4.3-2.2l-2.8-3.5a1.4 1.4 0 0 1 2.1-1.8L9 15.5V3z"/>
      </svg>
    </div>`;
const mapHint = text => `    <div class="map-hint">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 11.5V6a1.5 1.5 0 0 1 3 0v4M12 10V4.5a1.5 1.5 0 0 1 3 0V10M15 10.5V6a1.5 1.5 0 0 1 3 0v6.5"/>
        <path d="M18 11.5V10a1.5 1.5 0 0 1 3 0v5c0 3.5-2.5 6.5-6 6.5h-2c-2.2 0-3.6-.8-5-2.5l-3.3-4a1.4 1.4 0 0 1 2.1-1.8L9 15.5"/>
      </svg>
      ${text}
    </div>`;
const NOTICE = `  <!-- ── SANGAT NOTICE ── -->
  <div class="notice-strip">
    <marquee behavior="scroll" direction="left" scrollamount="8" loop="infinite"><b>We humbly request Sangat to share details of Gurudwaras (Name, City, Address &amp; Photographs) that are not yet listed on the website. Please email information to sikhsinindia@gmail.com. Your contributions will be well appreciated.</b></marquee>
  </div>`;
// Tooltips, a short demo lighting up a few areas in turn, and the tap hint fading after the first touch
const script = (svgId, demoIds) => `  <script>
    (function () {
      var tooltip = document.getElementById('tooltip'), wrap = tooltip.parentNode;
      document.querySelectorAll('#${svgId} [data-name]').forEach(function (el) {
        el.addEventListener('mousemove', function (e) {
          var box = wrap.getBoundingClientRect();
          tooltip.textContent = el.getAttribute('data-name');
          tooltip.style.left = (e.clientX - box.left + 12) + 'px';
          tooltip.style.top = (e.clientY - box.top + 12) + 'px';
          tooltip.style.display = 'block';
        });
        el.addEventListener('mouseleave', function () { tooltip.style.display = 'none'; });
      });
      if (!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
        window.addEventListener('load', function () {
          var ids = ${JSON.stringify(demoIds)}, i = 0;
          setTimeout(function () {
            var t = setInterval(function () {
              var prev = document.getElementById(ids[i - 1]); if (prev) prev.classList.remove('demo-hover');
              if (i >= ids.length) { clearInterval(t); return; }
              document.getElementById(ids[i++]).classList.add('demo-hover');
            }, 650);
          }, 900);
        });
      }
      var overlay = document.getElementById('tapHintOverlay'), done = false;
      function dismiss() { if (done) return; done = true; overlay.classList.add('tap-hint-hidden'); setTimeout(function () { overlay.remove(); }, 550); }
      document.getElementById('${svgId}').addEventListener('pointerdown', dismiss, { once: true });
      setTimeout(dismiss, 7000);
    })();
  </script>`;
const crumbs = (SITE, items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([t, h], i) => ({ '@type': 'ListItem', position: i + 1, name: t, item: SITE + h }))
});

module.exports = function buildMaps({ REGIONS, DIRECTORIES, INDIA, write, urls, SITE, slug, esc }) {
  const count = name => DIRECTORIES[name] ? DIRECTORIES[name].provinces.reduce((t, p) => t + p.list.length, 0) : 0;
  const gurudwaras = n => `${n} Gurudwara${n === 1 ? '' : 's'}`;
  const regions = REGIONS.map(r => {
    const withDir = r.countries.filter(([n]) => DIRECTORIES[n]);
    return { ...r, total: withDir.reduce((t, [n]) => t + count(n), 0), withDir };
  });

  // ── The world map ──────────────────────────────────────────────
  const tip = r => `${r.name}${r.total ? ` · ${gurudwaras(r.total)}` : ''}`;
  const countries = regions.reduce((t, r) => t + r.withDir.length, 0);
  const dots = worldMap.dots.filter(d => DIRECTORIES[d.name]);
  const allTotal = regions.reduce((t, r) => t + r.total, 0);
  urls.push(URL);
  write(URL.slice(1), posterPage({
    url: URL,
    title: `Gurudwaras in the World – ${allTotal} Gurdwaras in Eight Regions | Sikhs in World`,
    description: `A clickable world map of Gurudwaras: browse ${allTotal} Gurdwaras in ${countries} countries across eight regions, from Southall to Singapore, with addresses, maps and photos.`,
    hero: 'GURUDWARAS <span>IN WORLD</span>',
    subtitle: 'Explore Every Region of the World',
    banner: 'Click on the map below to explore Gurudwaras across the eight regions of the world.',
    body: `${STYLE}
  <!-- ── WORLD MAP ── -->
  <div class="map-wrapper">
    <div id="tooltip" class="tooltip"></div>
    <svg viewBox="${worldMap.viewBox}" xmlns="http://www.w3.org/2000/svg" id="world-map" class="atlas" role="img" aria-label="Map of the world in eight regions">
      <path class="other" d="${worldMap.regions.other.d}"/>
${regions.map(r => `      <a href="/${r.dir}/" aria-label="${esc(tip(r))}"><path id="r-${r.slug}" class="region" data-name="${esc(tip(r))}" fill="${FILL[r.slug]}" d="${worldMap.regions[r.slug].d}"/></a>`).join('\n')}
      <path class="borders" d="${worldMap.borders}"/>
${dots.map(d => { const r = regions.find(x => x.slug === d.region); return `      <a href="/${r.dir}/${slug(d.name)}/gurdwaras/" aria-label="Gurudwaras in ${esc(d.name)}"><circle class="dot region" data-name="${esc(d.name)} · ${gurudwaras(count(d.name))}" cx="${d.at[0]}" cy="${d.at[1]}" r="4" fill="${FILL[r.slug]}"/></a>`; }).join('\n')}
${regions.map(r => { const [x, y] = worldMap.regions[r.slug].label; return `      <text class="region-label" x="${x}" y="${y}">${esc(r.name)}</text>`; }).join('\n')}
    </svg>
${TAP_HINT}
${mapHint('Tap or click a region to explore its Gurudwaras')}
  </div>
${NOTICE}
  <!-- ── TEXT LINKS ── -->
  <nav class="seo-links" aria-labelledby="seo-regions-h">
    <h2 id="seo-regions-h">All regions</h2>
    <ul>
${regions.map(r => `      <li><a href="/${r.dir}/">Sikhs in ${esc(r.name)}${r.total ? ` <small>· ${gurudwaras(r.total)}</small>` : ''}</a></li>`).join('\n')}
    </ul>
  </nav>
${script('world-map', ['r-europe', 'r-north-america', 'r-east-southeast-asia'])}`,
    back: '/',
    related: { main: [['Gurudwaras in India (Sikhs in India)', 'https://sikhsinindia.com/04-gurudwaras/04-gurudwaras-in-india.html'], ['Sikhs in World home', '/']] },
    ld: crumbs(SITE, [['World', '/'], ['Gurudwaras in the World', URL]])
  }, { esc, SITE }));

  // ── One map per region ─────────────────────────────────────────
  for (const r of regions) {
    const map = regionMaps[r.slug];
    const url = `/${r.dir}/`;
    // Where each country leads: its Gurdwara directory, else its page; India's map and the UAE are their own sites
    const target = ([name, kind, ext]) => {
      if (DIRECTORIES[name]) return { href: `${url}${slug(name)}/gurdwaras/`, tip: `${name} · ${gurudwaras(count(name))}` };
      if (name === 'India') return { href: '/04-gurudwaras/04-gurudwaras-in-india.html', tip: 'India · Gurudwaras of India' };
      if (kind === 'external') return { href: ext, tip: `${name} · on its own site` };
      if (kind === 'page') return { href: `${url}${slug(name)}/`, tip: `Sikhs in ${name}` };
      return null; // coming soon
    };
    const shapes = r.countries.map(c => ({ c, t: target(c), shape: map.countries.find(m => m.name === c[0]) })).filter(x => x.shape);
    const id = name => `c-${slug(name)}`;
    const label = ({ c, t, shape }) => {
      const [dx, dy] = LABEL_NUDGE[c[0]] || [0, 0];
      const [x, y] = shape.at;
      return `      <text class="region-label${t ? '' : ' muted'}" x="${x + dx}" y="${y + dy + (shape.dot ? -9 : 4)}">${esc(c[0])}</text>`;
    };
    const live = r.countries.filter(c => target(c));
    const soon = r.countries.filter(c => !target(c)).map(c => c[0]);
    urls.push(url);
    write(`${r.dir}/index.html`, posterPage({
      url,
      title: `Gurudwaras in ${r.name} – Map of Countries | Sikhs in World`,
      description: `A clickable map of ${r.name}: ${r.countries.map(c => c[0]).join(', ')}.${r.total ? ` Browse ${gurudwaras(r.total)} with addresses, maps and photos.` : ''}`,
      hero: `SIKHS IN <span>${esc(r.name.toUpperCase())}</span>`,
      subtitle: r.total ? `${gurudwaras(r.total)} across ${r.withDir.length} ${r.withDir.length === 1 ? 'country' : 'countries'}` : 'Explore every country',
      banner: r.intro,
      body: `${STYLE}
  <!-- ── ${r.name.toUpperCase()} MAP ── -->
  <div class="map-wrapper">
    <div id="tooltip" class="tooltip"></div>
    <svg viewBox="${map.viewBox}" xmlns="http://www.w3.org/2000/svg" id="region-map" class="atlas" role="img" aria-label="Map of the countries of ${esc(r.name)}">
      <path class="other" d="${map.grey}"/>
${shapes.map(({ c, t, shape }) => t
    ? `      <a href="${esc(t.href)}" aria-label="${esc(t.tip)}"><path id="${id(c[0])}" class="region" data-name="${esc(t.tip)}" fill="${FILL[r.slug]}" d="${shape.d}"/>${shape.dot ? `<circle class="dot region" data-name="${esc(t.tip)}" cx="${shape.at[0]}" cy="${shape.at[1]}" r="6" fill="${FILL[r.slug]}"/>` : ''}</a>`
    : `      <path class="soon" data-name="${esc(c[0])} · coming soon" d="${shape.d}"/>${shape.dot ? `<circle class="soon" data-name="${esc(c[0])} · coming soon" cx="${shape.at[0]}" cy="${shape.at[1]}" r="5"/>` : ''}`).join('\n')}
${shapes.map(label).join('\n')}
    </svg>
${TAP_HINT}
${mapHint('Tap or click a country to explore its Gurudwaras')}
  </div>
${NOTICE}
  <!-- ── TEXT LINKS ── -->
  <nav class="seo-links" aria-labelledby="seo-countries-h">
    <h2 id="seo-countries-h">Countries in ${esc(r.name)}</h2>
    <ul>
${live.map(c => { const t = target(c); return `      <li><a href="${esc(t.href)}">${DIRECTORIES[c[0]] ? `Gurudwaras in ${esc(c[0])} <small>· ${count(c[0])}</small>` : esc(t.tip.replace(' · ', ' – '))}</a></li>`; }).join('\n')}
    </ul>${soon.length ? `
    <p class="soon-note">Coming soon: ${esc(soon.join(', '))}. Know a Gurdwara there? Write to <a href="mailto:sikhsinindia@gmail.com" style="display:inline;padding:0;border:0">sikhsinindia@gmail.com</a>.</p>` : ''}
    <p class="map-back"><a href="${URL}">← Back to the world map</a></p>
  </nav>
${script('region-map', live.filter(c => shapes.some(s => s.c === c)).slice(0, 3).map(c => id(c[0])))}`,
      back: URL,
      related: { main: [['World map of Gurudwaras', URL], ['Sikhs in World home', '/']] },
      ld: crumbs(SITE, [['World', '/'], ['Gurudwaras in the World', URL], [r.name, url]])
    }, { esc, SITE }));
  }
  return { url: URL, total: allTotal };
};
