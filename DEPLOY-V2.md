# barrelsauna.az v2 — buraxılış (deploy) təlimatı

Yeni sayt `redesign` branch-ındadır (`web/` qovluğu). `main` hələ də köhnə saytdır — canlı sayta heç nə toxunulmayıb.

## 1. Lokal baxış

```bash
cd /Users/samirhasanov/barrelsauna-site/web && npm install && npm run dev
```
Brauzerdə: http://localhost:4321 (EN: /en, RU: /ru)

Production nəticəsi ilə eyni (nginx + redirect-lər) yoxlamaq istəsəniz:
```bash
cd /Users/samirhasanov/barrelsauna-site && docker build -t barrelsauna-web . && docker run --rm -p 8089:80 barrelsauna-web
```
→ http://localhost:8089

## 2. Canlıya çıxarmaq (hazır olanda)

```bash
cd /Users/samirhasanov/barrelsauna-site
git checkout main && git merge --no-ff redesign -m "Launch v2 redesign" && git push origin main
```

Sonra Coolify-da deploy (manual, SSH ilə — app uuid `ok8ow8kc4s0kkgwo8s8swokw`):
```bash
ssh -i ~/.ssh/coolify_claude root@c.samir.fyi 'docker exec -i coolify php artisan tinker' <<'PHP'
$app = \App\Models\Application::where('uuid','ok8ow8kc4s0kkgwo8s8swokw')->first();
queue_application_deployment(application:$app, deployment_uuid:(string)new \Visus\Cuid2\Cuid2(), commit:'HEAD', force_rebuild:true, no_questions_asked:true);
PHP
```
(Build ~2–4 dəq çəkir: Dockerfile `web/`-i build edib nginx ilə servis edir.)

## 3. Yoxlama

```bash
bash /Users/samirhasanov/barrelsauna-site/web/scripts/verify-live.sh
```
Bütün köhnə URL-lər 200, `/x/` → 301 `/x`, `www` → 301 apex, 404 düzgün olmalıdır.

## 4. Geri qaytarma (rollback)

```bash
cd /Users/samirhasanov/barrelsauna-site && git checkout main && git revert -m 1 HEAD --no-edit && git push origin main
```
və 2-ci addımdakı Coolify deploy əmrini yenidən işlədin — köhnə sayt qayıdır.

## 5. Buraxılışdan sonra SEO (ilk həftə)

1. **Google Search Console** → barrelsauna.az (Domain property) → Sitemaps → `https://barrelsauna.az/sitemap.xml` göndərin.
2. URL Inspection → "Request indexing": `/`, `/sauna-tikintisi` (hazırda indekslənməyib!), `/barrel-sauna`, `/kub-sauna`, `/konteyner-sauna-jakuzi`, `/en`, `/ru`.
3. **Bing Webmaster Tools** → GSC-dən import → sitemap.
4. **Google Business Profile**: adı sadəcə "Barrel Sauna" edin (açar sözlə doldurulmuş ad bloklanma riskidir), ünvan/iş saatlarını saytla eyniləşdirin (Əhməd Rəcəbli 1/25; B.e.–Şənbə 10–19, Bazar 10–17), vebsayt: `https://barrelsauna.az/?utm_source=google&utm_medium=organic&utm_campaign=gbp`, müştərilərdən rəy toplayın (hazırda 0).
5. **Instagram / TikTok bio**: saytı əlavə edin — `https://barrelsauna.az/?utm_source=instagram&utm_medium=social&utm_campaign=bio` (TikTok üçün `utm_source=tiktok`). Bütün yerlərdə eyni nömrə: +994 10 101 06 36.
6. 2–6 həftə ərzində kiçik sıralama tərəddüdü normaldır. GSC → Pages hesabatında 404 və ya "Duplicate" xətası görünsə, xəbər verin.
7. (İstəyə görə) Coolify proxy http→https yönləndirməsi hazırda 307-dir; 301/308 daha yaxşıdır — təcili deyil.
