/*
 * Cloudflare Worker in front of sikhsinworld.com.
 *
 * sikhsinworld.com shows its own pages (home, the world map, regions, countries,
 * Gurdwara directories) and, for everything else, the real sikhsinindia.com
 * page, so each Sikhi page (Gurus, Nitnem, Hukamnama, Hindi, Punjabi…) exists
 * once, in the SikhsinINDIA repository, and is never copied.
 *
 * For each request:
 *   1. ask sikhsinworld.com's own site (GitHub Pages); if it has the page, serve it;
 *   2. otherwise fetch the same address from sikhsinindia.com and, on HTML pages,
 *      on the way through:
 *        - swap the Sikhs in India logo for the Sikhs in World logo;
 *        - say SikhsInWorld.com instead of SikhsInIndia.com in the <title>;
 *        - load pictures, scripts and styles straight from sikhsinindia.com,
 *          so they don't pass through (and count against) this Worker;
 *        - leave out the push-notification script, which only works on
 *          sikhsinindia.com.
 *      The page's canonical link still points to sikhsinindia.com, so search
 *      engines treat India as the page's home and see no duplicates.
 *   3. if neither site has it, show sikhsinworld.com's 404 page.
 */
const INDIA = 'https://sikhsinindia.com';
const WORLD_LOGO = '/pictures/sikhsinworld-logo.png';
const INDIA_LOGOS = /(^|\/)(sikhsinindia\.png|sikhsinindia\.webp|sikhsinindia-logo\.png)$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== 'GET' && request.method !== 'HEAD') return fetch(request);
    const worldOrigin = env.WORLD_ORIGIN || url.origin;

    // 1. sikhsinworld.com's own pages
    const world = await fetch(new Request(worldOrigin + url.pathname + url.search, request), { redirect: 'manual' });
    if (world.status !== 404) return world;

    // 2. the same page on sikhsinindia.com
    const indiaUrl = INDIA + url.pathname + url.search;
    const india = await fetch(indiaUrl, { headers: request.headers, redirect: 'manual' });
    if (india.status === 404) return world;
    if (india.status >= 300 && india.status < 400) {
      // keep redirects on this site, e.g. /hi → /hi/
      const to = new URL(india.headers.get('Location'), indiaUrl);
      if (to.origin === INDIA) return Response.redirect(url.origin + to.pathname + to.search, india.status);
      return india;
    }
    if (!(india.headers.get('Content-Type') || '').includes('text/html')) return india;
    return rewrite(india, indiaUrl);
  }
};

function rewrite(response, pageUrl) {
  const fromIndia = attr => ({
    element(el) {
      const v = el.getAttribute(attr);
      if (!v || /^(https?:|data:|\/\/|#)/.test(v)) return;
      el.setAttribute(attr, new URL(v, pageUrl).href);
    }
  });
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
    .on('source[srcset]', fromIndia('srcset'))
    .on('script[src]', {
      element(el) {
        if (/\/js\/push\.js/.test(el.getAttribute('src'))) { el.remove(); return; }
        fromIndia('src').element(el);
      }
    })
    .on('link[rel="stylesheet"]', fromIndia('href'))
    .on('link[rel="manifest"]', fromIndia('href'))
    .on('title', {
      text(t) { if (/SikhsInIndia\.com|Sikhs ?in ?India\.com/i.test(t.text)) t.replace(t.text.replace(/Sikhs ?In ?India\.com/gi, 'SikhsInWorld.com'), { html: true }); }
    })
    .transform(response);
}
