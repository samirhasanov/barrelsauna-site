import { SITE, type Lang } from '../data/site';
import { ROUTES, blogPostPath } from '../data/routes';
import { postsFor, slugOf } from './blog';

const esc = (s: string) => s.replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c]!);

export async function rss(lang: Lang) {
  const posts = await postsFor(lang);
  const title = { az: 'Barrel Sauna — Bloq', en: 'Barrel Sauna — Blog', ru: 'Barrel Sauna — Блог' }[lang];
  const items = posts.map((p) => {
    const url = SITE.url + blogPostPath(lang, slugOf(p));
    return `<item><title>${esc(p.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${p.data.pubDate.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(title)}</title><link>${SITE.url}${ROUTES.blog[lang]}</link><description>${esc(title)}</description><language>${lang}</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
