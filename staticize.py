#!/usr/bin/env python3
"""Convert the URL-rewritten Dorik pages in site/ into fully static pages:
   - strip the Next.js runtime (it is domain-bound and 404s off Dorik),
   - keep pre-rendered HTML, SEO (LD+JSON, meta), analytics (gtag, aptimesi),
   - re-init the interactive widgets (AOS animations, Splide sliders, mobile menu).
"""
import os, re, glob

SITE = "/Users/samirhasanov/barrelsauna-site/site"

INIT = """
<script defer src="/assets/dorik/splide.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
  try { if (window.AOS) AOS.init({ once: true, duration: 600, easing: 'ease-out' }); } catch (e) {}
  try {
    if (window.Splide) {
      document.querySelectorAll('.splide').forEach(function (el) {
        try { new Splide(el).mount(); } catch (e) {}
      });
    }
  } catch (e) {}
  // mobile navbar toggle (Bootstrap-style .collapse -> .show)
  document.querySelectorAll('.dorik-navbar--toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sel = btn.getAttribute('data-target');
      var panel = sel ? document.querySelector(sel) : null;
      if (panel) panel.classList.toggle('show');
    });
  });
});
</script>
"""

def staticize(html):
    # 1. remove every Next.js runtime script (all /_next/static/* src scripts)
    html = re.sub(r'<script[^>]*\bsrc="/_next/static/[^"]*"[^>]*>\s*</script>', '', html)
    # 2. remove the __NEXT_DATA__ payload
    html = re.sub(r'<script id="__NEXT_DATA__"[^>]*>.*?</script>', '', html, flags=re.S)
    # 3. remove the Cloudflare rocket-loader / cv beacon inline script
    html = re.sub(r'<script>\(function\(\)\{[^<]*__CF\$cv\$params.*?</script>', '', html, flags=re.S)
    # 4. inject interactive init just before </body>
    html = html.replace('</body>', INIT + '</body>', 1)
    return html

count = 0
for f in [os.path.join(SITE, 'index.html')] + glob.glob(os.path.join(SITE, '*/index.html')):
    t = open(f, encoding='utf-8', errors='replace').read()
    nt = staticize(t)
    open(f, 'w', encoding='utf-8').write(nt)
    remaining = len(re.findall(r'src="/_next/static/', nt))
    has_nextdata = '__NEXT_DATA__' in nt
    print(f"{f.replace(SITE+'/','')}: next-scripts-left={remaining} nextdata={has_nextdata} aos={'AOS.init' in nt} splide-init={'new Splide' in nt}")
    count += 1
print("Processed", count, "pages")
