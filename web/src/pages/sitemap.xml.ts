import type { APIRoute } from 'astro';
import { SITE, LANGS, HTML_LANG, type L } from '../data/site';
import { ROUTES, type RouteKey } from '../data/routes';
import { allPosts, alternatesFor } from '../lib/blog';

const abs = (p: string) => SITE.url + (p === '/' ? '/' : p);

function entry(loc: string, alts: Partial<L>, lastmod: string, priority: string) {
  const links = LANGS.filter((l) => alts[l])
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${abs(alts[l]!)}"/>`)
    .concat(alts.az ? [`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(alts.az)}"/>`] : [])
    .join('\n');
  return `  <url>\n    <loc>${abs(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n${links}\n  </url>`;
}

const PRIORITY: Partial<Record<RouteKey, string>> = { home: '1.0', outdoor: '0.9', barrel: '0.9', cube: '0.9', construction: '0.9', indoor: '0.9', container: '0.8' };

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls: string[] = [];
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    for (const lang of LANGS) urls.push(entry(ROUTES[key][lang], ROUTES[key], today, PRIORITY[key] ?? '0.7'));
  }
  for (const post of await allPosts()) {
    const alts = await alternatesFor(post);
    urls.push(entry(alts[post.data.lang]!, alts, (post.data.updatedDate ?? post.data.pubDate).toISOString().slice(0, 10), '0.6'));
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
