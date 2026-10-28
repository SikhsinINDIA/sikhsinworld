/*
 * Cloudflare Worker in front of sikhsinworld.com.
 *
 * sikhsinworld.com is sikhsinindia.com with two differences:
 *   - section 4, Gurudwaras (/04-gurudwaras/…), is sikhsinworld.com's own: the world
 *     map, the eight regions, countries and Gurdwara directories;
 *   - the logo (and the site name in the title) is Sikhs in World.
 * Every other page (home, Gurus, Nitnem, Hukamnama, Hindi, Punjabi…) is the real
 * sikhsinindia.com page, fetched live, so it exists once, in the SikhsinINDIA
 * repository, and is never copied.
 *
 * For each request:
 *   - section 4 and sikhsinworld.com's own files (its styles, logo, Gurdwara photos, sitemap…):
 *     sikhsinworld.com's own site (GitHub Pages) first, sikhsinindia.com if it
 *     doesn't have it (e.g. India's state Gurdwara pages);
 *   - everything else: sikhsinindia.com first, sikhsinworld.com if India doesn't
 *     have it (e.g. its 404 page, which forwards old addresses).
 * Pages from sikhsinindia.com are changed on the way through:
 *   - the Sikhs in India logo becomes the Sikhs in World logo;
 *   - SikhsInIndia.com in the <title> becomes SikhsInWorld.com;
 *   - the home page's Gurudwaras card shows the world icon (pictures/gurudwaras-in-world.svg);
 *   - India's "Sikhs in World" buttons become "Sikhs in India", leading to the same page there;
 *   - links to India's Gurudwaras map open the world map instead (except inside
 *     India's own Gurdwara pages, so their back links stay in India's map);
 *   - pictures, scripts and styles load straight from sikhsinindia.com, so they
 *     don't pass through (and count against) this Worker;
 *   - the push-notification script, which only works on sikhsinindia.com, is left out.
 * Their canonical links still point to sikhsinindia.com, so search engines treat
 * India as their home and see no duplicates.
 */
const INDIA = 'https://sikhsinindia.com';
const WORLD_LOGO = '/pictures/sikhsinworld-logo.png';
const WORLD_MAP = '/04-gurudwaras/04-gurudwaras-in-world.html';
const INDIA_GURDWARAS_ICON = '/pictures/00-index/web/03-gurudwaras.webp';
const WORLD_GURDWARAS_ICON = '/pictures/gurudwaras-in-world.svg';
const INDIA_LOGOS = /(^|\/)(sikhsinindia\.png|sikhsinindia\.webp|sikhsinindia-logo\.png)$/;
const INDIA_MAP = /^\/((hi|pa)\/)?04-gurudwaras\/04-gurudwaras-in-india\.html$/;
const INDIA_GURDWARAS = /^\/((hi|pa)\/)?04-gurudwaras\//;
// sikhsinworld.com's own: section 4 and the files its pages use
const WORLD_FIRST = /^\/(04-gurudwaras\/|css\/(style|gurdwara)\.css$|js\/gurdwara-gallery\.js$|pictures\/sikhsinworld|pictures\/gurudwaras-in-world\.svg$|pictures\/04-gurudwaras\/0[1-8]-(south-asia|middle-east|europe|north-america|south-america|africa|east-southeast-asia|australia-nz)\/|sitemap\.xml$|robots\.txt$|cloudflare-worker\/)/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== 'GET' && request.method !== 'HEAD') return fetch(request);
    const fromWorld = () => fetch(new Request((env.WORLD_ORIGIN || url.origin) + url.pathname + url.search, request), { redirect: 'manual' });

    if (WORLD_FIRST.test(url.pathname)) {
      const world = await fromWorld();
      if (world.status !== 404) return world;
      return (await fromIndia(url, request)) || world;
    }
    return (await fromIndia(url, request)) || fromWorld();
  }
};

// The same address on sikhsinindia.com, or null if India doesn't have it
async function fromIndia(url, request) {
  const indiaUrl = INDIA + url.pathname + url.search;
  // Not the browser's "has it changed?" headers: they refer to a rewritten copy, not to India's page
  const headers = new Headers(request.headers);
  for (const h of ['If-None-Match', 'If-Modified-Since', 'If-Match', 'If-Unmodified-Since', 'If-Range']) headers.delete(h);
  const india = await fetch(indiaUrl, { headers, redirect: 'manual' });
  if (india.status === 404) return null;
  if ([301, 302, 303, 307, 308].includes(india.status) && india.headers.get('Location')) {
    // keep redirects on this site, e.g. /hi → /hi/
    const to = new URL(india.headers.get('Location'), indiaUrl);
    if (to.origin === INDIA) return Response.redirect(url.origin + to.pathname + to.search, india.status);
    return india;
  }
  // "Not modified" (the browser's cached copy is current) has no page to rewrite
  if (india.status !== 200 || !(india.headers.get('Content-Type') || '').includes('text/html')) return india;
  return rewrite(india, indiaUrl, url.pathname);
}

// The rewritten page is not the page sikhsinindia.com's ETag / Last-Modified describe, so they are
// dropped: otherwise a browser keeps an old rewritten copy (e.g. with an old icon) until India changes.
function withoutValidators(response) {
  const headers = new Headers(response.headers);
  headers.delete('ETag');
  headers.delete('Last-Modified');
  headers.set('Cache-Control', 'public, max-age=600');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function rewrite(response, pageUrl, path) {
  const fromIndia = attr => ({
    element(el) {
      const v = el.getAttribute(attr);
      if (!v || /^(https?:|data:|\/\/|#)/.test(v)) return;
      el.setAttribute(attr, new URL(v, pageUrl).href);
    }
  });
  const inIndiaGurdwaras = INDIA_GURDWARAS.test(path);
  return new HTMLRewriter()
    .on('img', {
      element(el) {
        const src = el.getAttribute('src') || '';
        const at = new URL(src, pageUrl).pathname;
        if (INDIA_LOGOS.test(at)) {
          el.setAttribute('src', WORLD_LOGO);
          el.setAttribute('alt', 'Sikhs in World logo');
          el.removeAttribute('srcset');
        } else if (!inIndiaGurdwaras && at === INDIA_GURDWARAS_ICON) {
          // the home page's Gurudwaras card opens the world map, so it shows the world icon
          el.setAttribute('src', WORLD_GURDWARAS_ICON);
          el.setAttribute('alt', 'Gurudwaras in the World');
          el.removeAttribute('srcset');
        } else if (src && !/^(https?:|data:|\/\/)/.test(src)) {
          el.setAttribute('src', new URL(src, pageUrl).href);
        }
      }
    })
    .on('a[href]', {
      element(el) {
        if (inIndiaGurdwaras) return;
        const to = new URL(el.getAttribute('href'), pageUrl);
        if (to.origin === INDIA && INDIA_MAP.test(to.pathname)) el.setAttribute('href', WORLD_MAP);
      }
    })
    .on('a[href="https://sikhsinworld.com/"]', {
      // India's "Sikhs in World" buttons point here; on this site they lead to the same page in India
      element(el) {
        el.setAttribute('href', pageUrl);
        if (el.getAttribute('title')) el.setAttribute('title', 'Sikhs in India: this page on sikhsinindia.com');
        el.setInnerContent('Sikhs in India &#8599;', { html: true });
      }
    })
    .on('source[srcset]', fromIndia('srcset'))
    .on('script[src]', {
      element(el) {
        if (/\/js\/push\.js/.test(el.getAttribute('src'))) { el.remove(); return; }
        fromIndia('src').element(el);
      }
    })
    .on('link[rel="stylesheet"]', fromIndia('href'))
    .on('link[rel="manifest"]', fromIndia('href'))
    .on('a[href*="04-gurudwaras-in-india.html"]', {
      // the link now opens the world map, so its label says so
      text(t) { if (!inIndiaGurdwaras && /Gurud?waras (of|in) India/i.test(t.text)) t.replace(t.text.replace(/Gurud?waras (of|in) India/gi, 'Gurudwaras in the World'), { html: true }); }
    })
    .on('title', {
      text(t) {
        if (/Sikhs ?In ?India/i.test(t.text)) t.replace(t.text.replace(/Sikhs ?In ?India\.com/gi, 'SikhsInWorld.com').replace(/Sikhs in India/gi, 'Sikhs in World'), { html: true });
      }
    })
    .transform(withoutValidators(response));
}
