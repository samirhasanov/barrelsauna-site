# Deploying the barrelsauna.az clone

The site is **100% static** (HTML/CSS/JS/images). No Node, no build, no database.
Anything that serves files works. Everything lives in `site/` (and a zipped copy is `barrelsauna-site.zip`).

Local files:
- `site/` — the deployable site (this is your web root / `public_html`)
- `dist/` — same as `site/` plus a tuned `.htaccess` (use this for Apache/cPanel hosts)
- `barrelsauna-site.zip` — zip of `dist/`, ready to upload + extract

The home page is `index.html`; each section page is `<name>/index.html`, so clean URLs
like `/barrel-sauna` work automatically on every host below.

---

## Option A — online.az shared hosting (domain + DNS + host in one place)
Best if your online.az plan includes **web hosting** (cPanel / File Manager / FTP), not just the domain.

1. Log into the online.az hosting control panel → **File Manager** (or connect via FTP).
2. Go to the web root: usually `public_html/` (or `www/`).
3. Upload `barrelsauna-site.zip` there and **Extract** it (so `index.html` sits directly in `public_html`).
4. In the panel, make sure the domain `barrelsauna.az` is **assigned/pointed to this hosting**
   (same provider = usually automatic once DNS for the re-registered domain is active).
5. Done — visiting https://barrelsauna.az serves the new site. Enable free SSL (Let's Encrypt) in the panel.

> If your online.az plan is **domain-only** (no hosting), use Option B instead — no need to buy hosting.

---

## Option B — Coolify (your existing VPS, no extra cost)
Best if you only registered the domain at online.az and want to reuse the server you already pay for.

1. In Coolify: **New Resource → Static Site** (or a Dockerfile service serving `/site` with nginx).
2. Point it at this folder (git push the repo, or upload). Web root = the `site/` contents.
3. Set the domain to `barrelsauna.az` in Coolify (it provisions SSL automatically).
4. At **online.az DNS**, add an **A record**: `barrelsauna.az → <your VPS IP>` (and `www` too, or a CNAME).
5. Wait for DNS to propagate; site is live with HTTPS.

Minimal nginx Dockerfile (if using the Dockerfile route):
```
FROM nginx:alpine
COPY site/ /usr/share/nginx/html/
```

---

## After the domain is live — verify
- Open each page: `/`, `/barrel-sauna`, `/dasinabilen-sauna`, `/jakuzi-vanna`,
  `/konteyner-sauna-jakuzi`, `/kub-sauna`, `/sauna-tikintisi`.
- Confirm images load, the mobile menu opens, sliders work.
- SEO is preserved: titles, meta descriptions, Open Graph/Twitter, JSON-LD, `canonical`,
  `robots.txt`, and `sitemap.xml` all already point to https://barrelsauna.az.
- (Optional) Resubmit `sitemap.xml` in Google Search Console after go-live.

## Then cancel Dorik
Once barrelsauna.az serves this site correctly, you can stop paying Dorik.
```
