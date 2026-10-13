// Ping Bing / Yandex / Seznam etc. via IndexNow with every URL in the live sitemap.
// Usage (after deploy): node scripts/indexnow.mjs [https://barrelsauna.az]
const BASE = (process.argv[2] || 'https://barrelsauna.az').replace(/\/$/, '');
const KEY = '3c89764e76f5605bf55a752e12cc8fd1';
const xml = await (await fetch(BASE + '/sitemap.xml')).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const body = { host: new URL(BASE).host, key: KEY, keyLocation: BASE + '/' + KEY + '.txt', urlList };
// api.indexnow.org shares the submission with every IndexNow engine (Bing, Yandex, Seznam, Naver…)
for (const ep of ['https://api.indexnow.org/indexnow', 'https://yandex.com/indexnow']) {
  try {
    const r = await fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) });
    console.log(ep, r.status, urlList.length, 'urls');
  } catch (e) {
    console.log(ep, 'failed:', e.cause?.code || e.message);
  }
}
