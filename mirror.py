#!/usr/bin/env python3
"""Mirror barrelsauna.az (Dorik/dcms.site) into a self-contained static site.

- Downloads all pages (already in raw/), JS/CSS bundles, images, fonts, vendor CSS.
- Rewrites URLs to local root-relative paths.
- Keeps SEO-critical tags absolute on the real domain (canonical, og:url, og:image, twitter:image).
"""
import os, re, sys, urllib.request, urllib.parse, ssl

ROOT   = "/Users/samirhasanov/barrelsauna-site"
RAW    = os.path.join(ROOT, "raw")
SITE   = os.path.join(ROOT, "site")
SRC    = "https://slow-dolorita-rzli9hxa.dcms.site"
REAL   = "https://barrelsauna.az"
CMSFLY_PREFIX = "https://cdn.cmsfly.com/67f53b9698466b0012f3e16f/"  # project asset root
FONTS_BASE    = "https://fonts.cmsfly.com/"

PAGES = {
    "index": "/",
    "barrel-sauna": "/barrel-sauna",
    "dasinabilen-sauna": "/dasinabilen-sauna",
    "jakuzi-vanna": "/jakuzi-vanna",
    "konteyner-sauna-jakuzi": "/konteyner-sauna-jakuzi",
    "kub-sauna": "/kub-sauna",
    "sauna-tikintisi": "/sauna-tikintisi",
}
PAGE_SLUGS = [v.strip("/") for v in PAGES.values() if v != "/"]

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

def fetch(url, binary=True):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, context=ctx, timeout=60) as r:
        data = r.read()
    return data if binary else data.decode("utf-8", "replace")

def save(relpath, data):
    p = os.path.join(SITE, relpath.lstrip("/"))
    os.makedirs(os.path.dirname(p), exist_ok=True)
    mode = "wb" if isinstance(data, (bytes, bytearray)) else "w"
    with open(p, mode) as f:
        f.write(data)
    return p

downloaded, failed = [], []
def dl(url, relpath):
    try:
        save(relpath, fetch(url))
        downloaded.append((url, relpath))
        return True
    except Exception as e:
        failed.append((url, relpath, str(e)))
        print("  FAIL", url, "->", e)
        return False

# ---------- 1. collect asset URLs from all raw HTML ----------
html_files = {name: open(os.path.join(RAW, name + ".html"), encoding="utf-8", errors="replace").read()
              for name in PAGES}
allhtml = "\n".join(html_files.values())

cmsfly = set(re.findall(r'https://cdn\.cmsfly\.com/[^\s"\')]+', allhtml))
next_assets = set(re.findall(r'/_next/static/[^\s"\')]+', allhtml))
other_root = set(re.findall(r'/(?:css/main\.css|cdn-cgi/scripts/[^\s"\')]+)', allhtml))

print(f"Found: {len(cmsfly)} cmsfly, {len(next_assets)} _next, {len(other_root)} other root assets")

# ---------- 2. download cmsfly images ----------
print("Downloading cmsfly images...")
for url in sorted(cmsfly):
    u = url.replace("&amp;", "&").split("?")[0]
    if u.startswith(CMSFLY_PREFIX):
        rel = "/assets/cmsfly/" + u[len(CMSFLY_PREFIX):]
    else:
        rel = "/assets/cmsfly/" + u.split("cdn.cmsfly.com/")[-1]
    dl(u, rel)

# ---------- 3. download _next static + other root assets ----------
print("Downloading _next + root assets...")
for path in sorted(next_assets | other_root):
    p = urllib.parse.unquote(path.replace("&amp;", "&"))
    dl(SRC + p, p)

# ---------- 4. vendor CSS/JS ----------
print("Downloading vendor assets...")
vendors = {
    "https://assets.dorik.io/shared/aos.css": "/assets/dorik/aos.css",
    "https://assets.dorik.io/shared/aos.js":  "/assets/dorik/aos.js",
    "https://cdn.dorik.com/common/css/splide.min.css": "/assets/dorik/splide.min.css",
    "https://aptimesi.cmsfly.com/script.js": "/assets/aptimesi/script.js",
}
for url, rel in vendors.items():
    dl(url, rel)

# ---------- 5. fonts ----------
print("Downloading fonts...")
font_css = fetch("https://fonts.cmsfly.com/css?family=Gentium+Book+Basic:700,400|Lato:400&display=swap", binary=False)
font_urls = re.findall(r'url\((file/[^)]+)\)', font_css)
for fu in set(font_urls):
    dl(FONTS_BASE + fu, "/assets/fonts/" + fu)
font_css_local = re.sub(r'url\((file/[^)]+)\)', lambda m: f'url(/assets/fonts/{m.group(1)})', font_css)
save("/assets/fonts/fonts.css", font_css_local)

# ---------- 6. URL-rewrite helper for text assets (CSS/JS) ----------
def rewrite_text_asset(text):
    text = text.replace(CMSFLY_PREFIX, "/assets/cmsfly/")
    text = re.sub(r'https://cdn\.cmsfly\.com/[0-9a-f]+/', "/assets/cmsfly/", text)
    text = text.replace("https://assets.dorik.io/shared/", "/assets/dorik/")
    text = text.replace("https://cdn.dorik.com/common/css/", "/assets/dorik/")
    text = text.replace("https://aptimesi.cmsfly.com/", "/assets/aptimesi/")
    return text

print("Rewriting downloaded CSS/JS assets...")
for _, rel in list(downloaded):
    if rel.endswith((".css", ".js")):
        fp = os.path.join(SITE, rel.lstrip("/"))
        try:
            t = open(fp, encoding="utf-8", errors="replace").read()
            nt = rewrite_text_asset(t)
            if nt != t:
                open(fp, "w", encoding="utf-8").write(nt)
        except Exception as e:
            print("  css/js rewrite skip", rel, e)

# ---------- 7. rewrite + write HTML pages ----------
def rewrite_html(html):
    # 7a. SEO image meta -> absolute on real domain
    def meta_img(m):
        return m.group(1) + REAL + "/assets/cmsfly/" + m.group(2) + m.group(3)
    html = re.sub(r'(content=")' + re.escape(CMSFLY_PREFIX) + r'([^"]+)(")', meta_img, html)
    # 7b. protect canonical (must stay absolute on real domain)
    canon = re.search(r'<link rel="canonical"[^>]*>', html)
    if canon:
        html = html.replace(canon.group(0), "__CANONICAL__")
    # 7c. all remaining cmsfly -> root-relative local
    html = html.replace(CMSFLY_PREFIX, "/assets/cmsfly/")
    html = re.sub(r'https://cdn\.cmsfly\.com/[0-9a-f]+/', "/assets/cmsfly/", html)
    # 7d. fonts css link
    html = re.sub(r'https://fonts\.cmsfly\.com/css\?[^"\']*', "/assets/fonts/fonts.css", html)
    # 7e. vendor
    html = html.replace("https://assets.dorik.io/shared/", "/assets/dorik/")
    html = html.replace("https://cdn.dorik.com/common/css/", "/assets/dorik/")
    html = html.replace("https://aptimesi.cmsfly.com/", "/assets/aptimesi/")
    # 7f. internal nav links (href) -> root-relative; leave og:url(content=) & social alone
    def navrep(m):
        path = m.group(2) or "/"
        return 'href="' + (path if path else "/") + '"'
    html = re.sub(r'href="https?://(?:www\.)?barrelsauna\.az(/[^"]*)?"',
                  lambda m: 'href="' + (m.group(1) or "/") + '"', html)
    # 7g. restore canonical
    if canon:
        html = html.replace("__CANONICAL__", canon.group(0))
    return html

print("Writing rewritten pages...")
for name, route in PAGES.items():
    out = rewrite_html(html_files[name])
    rel = "index.html" if route == "/" else route.strip("/") + "/index.html"
    save("/" + rel, out)

# ---------- 8. SEO files ----------
robots = "User-agent: *\nAllow: /\nSitemap: %s/sitemap.xml\n" % REAL
save("/robots.txt", robots)
# rebuild sitemap.xml with real-domain page URLs
lastmods = dict(re.findall(r'/([a-z-]+)\n\s*</loc>\s*<lastmod>\s*([0-9-]+)',
               open(os.path.join(RAW, "sitemap-pages.xml")).read()))
sm = ['<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for name, route in PAGES.items():
    loc = REAL + ("/" if route == "/" else route)
    sm.append("  <url><loc>%s</loc></url>" % loc)
sm.append("</urlset>")
save("/sitemap.xml", "\n".join(sm) + "\n")

print("\n==== SUMMARY ====")
print("Downloaded:", len(downloaded), " Failed:", len(failed))
for u, r, e in failed:
    print("  FAIL:", u)
