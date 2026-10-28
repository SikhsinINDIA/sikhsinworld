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
 *   - section 4 and sikhsinworld.com's own files (its styles, logo, sitemap…):
 *     sikhsinworld.com's own site (GitHub Pages) first, sikhsinindia.com if it
 *     doesn't have it (e.g. India's state Gurdwara pages);
 *   - everything else: sikhsinindia.com first, sikhsinworld.com if India doesn't
 *     have it (e.g. its 404 page, which forwards old addresses).
 * Pages from sikhsinindia.com are changed on the way through:
 *   - the Sikhs in India logo becomes the Sikhs in World logo;
 *   - SikhsInIndia.com in the <title> becomes SikhsInWorld.com;
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
const INDIA_LOGOS = /(^|\/)(sikhsinindia\.png|sikhsinindia\.webp|sikhsinindia-logo\.png)$/;
const INDIA_MAP = /^\/((hi|pa)\/)?04-gurudwaras\/04-gurudwaras-in-india\.html$/;
const INDIA_GURDWARAS = /^\/((hi|pa)\/)?04-gurudwaras\//;
// sikhsinworld.com's own: section 4 and the files its pages use
const WORLD_FIRST = /^\/(04-gurudwaras\/|css\/(style|gurdwara)\.css$|js\/gurdwara-gallery\.js$|pictures\/sikhsinworld|sitemap\.xml$|robots\.txt$|cloudflare-worker\/)/;

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
  const india = await fetch(indiaUrl, { headers: request.headers, redirect: 'manual' });
  if (india.status === 404) return null;
  if (india.status >= 300 && india.status < 400) {
    // keep redirects on this site, e.g. /hi → /hi/
    const to = new URL(india.headers.get('Location'), indiaUrl);
    if (to.origin === INDIA) return Response.redirect(url.origin + to.pathname + to.search, india.status);
    return india;
  }
  if (!(india.headers.get('Content-Type') || '').includes('text/html')) return india;
  return rewrite(india, indiaUrl, url.pathname);
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
        if (INDIA_LOGOS.test(new URL(src, pageUrl).pathname)) {
          el.setAttribute('src', WORLD_LOGO);
          el.setAttribute('alt', 'Sikhs in World logo');
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
    .transform(response);
}
