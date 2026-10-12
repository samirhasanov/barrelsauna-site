#!/usr/bin/env bash
# After deploy: checks that every legacy URL still returns 200 and redirects are 301.
# Usage: bash web/scripts/verify-live.sh [https://barrelsauna.az]
BASE="${1:-https://barrelsauna.az}"
ok=0; bad=0
check() { # url expected_code [expected_location]
  read -r code loc < <(curl -s -o /dev/null -w "%{http_code} %{redirect_url}" "$1")
  if [[ "$code" == "$2" && ( -z "$3" || "$loc" == "$3" ) ]]; then echo "✓ $code $1 ${loc}"; ok=$((ok+1)); else echo "✗ $code $1 ${loc} (expected $2 $3)"; bad=$((bad+1)); fi
}
for p in / /barrel-sauna /kub-sauna /konteyner-sauna-jakuzi /jakuzi-vanna /dasinabilen-sauna /sauna-tikintisi \
         /col-saunalari /daxili-saunalar /sobalar /aksesuarlar /layiheler /blog /elaqe /en /ru /sitemap.xml /robots.txt; do
  check "$BASE$p" 200
done
check "$BASE/barrel-sauna/" 301 "$BASE/barrel-sauna"
check "$BASE/barrel-sauna/index.html" 301 "$BASE/barrel-sauna"
check "${BASE/https:\/\//https://www.}/kub-sauna" 301 "$BASE/kub-sauna"
check "$BASE/bu-sehife-yoxdur" 404
curl -s "$BASE/barrel-sauna" | grep -o '<link rel="canonical"[^>]*>' 
echo "— $ok ok, $bad problem(s)"
