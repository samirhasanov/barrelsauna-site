// Post-build QA: broken internal links, one <h1>, title/description length, canonical, hreflang, img alt.
// Usage: npm run build && npm run check
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && !/google[0-9a-f]+\.html$/.test(p) && files.push(p); });
walk(DIST);

const exists = (url) => {
  const p = decodeURI(url.split('#')[0].split('?')[0]);
  if (p === '/' || p === '') return true;
  return existsSync(join(DIST, p)) || existsSync(join(DIST, p, 'index.html'));
};

let problems = 0;
const warn = (f, m) => { problems++; console.log(`✗ ${f.replace(DIST, '/')}: ${m}`); };
const titles = new Map();

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const is404 = f.endsWith('404.html');
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) warn(f, `${h1} <h1> elements`);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  if (!title) warn(f, 'missing <title>');
  else if (title.length > 70) warn(f, `title ${title.length} chars: ${title}`);
  if (titles.has(title)) warn(f, `duplicate title with ${titles.get(title)}`); else titles.set(title, f.replace(DIST, '/'));
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (desc.length < 70 || desc.length > 175) warn(f, `description ${desc.length} chars`);
  if (!is404 && !/<link rel="canonical"/.test(html)) warn(f, 'missing canonical');
  if (!is404 && !/hreflang="x-default"/.test(html)) warn(f, 'missing hreflang x-default');
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="[^"]+"/.test(m[0]) && !/\salt=""/.test(m[0])) warn(f, `img without alt: ${m[0].slice(0, 80)}`);
  for (const m of html.matchAll(/\shref="(\/[^"]*)"/g)) {
    const u = m[1].replace(/&amp;/g, '&');
    if (u.startsWith('//')) continue;
    if (!exists(u)) warn(f, `broken link ${u}`);
  }
}
console.log(`\nChecked ${files.length} pages — ${problems ? problems + ' problem(s)' : 'no problems'}.`);
process.exit(problems ? 1 : 0);
