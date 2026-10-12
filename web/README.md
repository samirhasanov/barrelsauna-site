# barrelsauna.az — yeni sayt (v2)

Astro 7 ilə qurulmuş statik, 3 dilli sayt (AZ əsas `/`, EN `/en`, RU `/ru`).
Server tələb etmir: `npm run build` → `dist/` qovluğu nginx ilə servis olunur.

## Lokal işə salmaq

```bash
cd /Users/samirhasanov/barrelsauna-site/web
npm install          # yalnız ilk dəfə
npm run dev          # http://localhost:4321 — redaktə edərkən canlı yenilənir
```

Production nəticəsini lokal yoxlamaq (real sayt kimi):

```bash
npm run build && npm run check && npm run preview   # http://localhost:4321
```

`npm run check` — bütün səhifələrdə qırıq link, `<h1>` sayı, title/description uzunluğu, canonical, hreflang və şəkil alt-larını yoxlayır.

## .env

| Fayl | Nə üçün |
|---|---|
| `.env.production` | Build zamanı istifadə olunan **real** dəyərlər (commit olunur — hamısı public-dir, HTML-ə düşür) |
| `.env` | Lokal override (git-ə düşmür). `.env.example`-dan kopyalanıb |

Dəyişənlər: `PUBLIC_SITE_URL`, `PUBLIC_WHATSAPP` (yalnız rəqəm), `PUBLIC_PHONE`, `PUBLIC_EMAIL`,
`PUBLIC_GA_ID` (köhnə saytın GA4-ü: `G-J9LEK5H5FD` — statistika kəsilmir), `PUBLIC_META_PIXEL_ID` (boşdursa söndürülür),
`PUBLIC_GSC_VERIFICATION` (Google Search Console meta-teq tokeni, istəyə görə).

## Məzmunu harada dəyişmək olar

| Nə | Fayl |
|---|---|
| Telefon, ünvan, iş saatları, sosial linklər | `src/data/site.ts` |
| Çöl sauna modelləri (mətn, tutum, **qiymət**, şəkillər, FAQ) | `src/data/models.ts` |
| Daxili sauna ağac növləri | `src/data/indoor.ts` |
| Layihələr (Qəbələ, İlisu, İsmayıllı, Sea Breeze) | `src/data/projects.ts` |
| Soba və aksesuar kataloqu (61 məhsul, **qiymətsiz**) | `src/data/products.json` (+ şəkillər `src/assets/products/`) |
| TikTok / Instagram videoları | `src/data/social.ts` (+ şəkillər `src/assets/social/`) |
| Menyu, düymə, form mətnləri (3 dil) | `src/i18n/ui.ts` |
| URL-lər (hər dil üçün) | `src/data/routes.ts` — **köhnə URL-ləri dəyişməyin** |
| Səhifə mətnləri | `src/views/*.astro` |
| Bloq yazıları | `src/content/blog/{az,en,ru}/*.md` |
| Rənglər, şriftlər | `src/styles/global.css` (`:root` tokenləri) |

### Yeni bloq yazısı

`src/content/blog/az/yeni-yazi.md` yaradın (EN/RU versiyaları eyni `translationKey` ilə):

```markdown
---
title: "Başlıq (≤ 60 simvol)"
description: "Meta təsvir (140–160 simvol)"
pubDate: 2026-11-01
lang: az
translationKey: "c1"
tags: ["sauna", "..."]
cover: "barrel-3"            # src/assets/photos/ içindəki şəklin adı (uzantısız)
coverAlt: "Şəklin təsviri"
---
Mətn... (## H2, ### H3; H1 yazmayın — başlıq avtomatik H1 olur)
```

Sitemap, hreflang, Article/FAQ schema avtomatik yaranır.

### Yeni şəkil

`src/assets/photos/<ad>.webp` (və ya jpg/png) qoyun, sonra kodda `name="<ad>"` ilə istifadə edin — ölçülər/WebP avtomatik optimallaşdırılır.

## SEO qorunması (vacib)

- Köhnə URL-lər eynidir və 200 qaytarır: `/`, `/barrel-sauna`, `/kub-sauna`, `/konteyner-sauna-jakuzi`, `/jakuzi-vanna`, `/dasinabilen-sauna`, `/sauna-tikintisi`.
- Trailing slash yoxdur; `/x/` və `/x/index.html` → 301 `/x`; `www` → 301 apex (`nginx.conf`).
- Hər səhifədə: canonical, hreflang (az/en/ru + x-default=az), OG, JSON-LD (LocalBusiness, Product, FAQPage, BreadcrumbList, BlogPosting).
- `/sitemap.xml` hreflang alternativləri ilə avtomatik yaranır; `/robots.txt` ona işarə edir.
