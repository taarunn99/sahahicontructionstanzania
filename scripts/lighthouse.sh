#!/usr/bin/env bash
# Mobile Lighthouse gate against the PRODUCTION build (never `next dev`).
#   npm run build && scripts/lighthouse.sh [/ /products /about /contact]
# Prints the four category scores and the lab vitals per route. The gate
# (GOVERNANCE.md section 4): performance >= 95, SEO 100, accessibility 100.
#
# Throttling is APPLIED (devtools), not simulated. On localhost every script
# arrives before first paint, and the default simulator then assumes those
# scripts block LCP, reporting ~3 s for a headline that really paints with
# the first frame (measured 2026-11-05: observed LCP = observed FCP).
# Set LH_THROTTLE=simulate to see the simulator's figure.
# This is a metric check, not a visual check - visuals are reviewed by the
# owner, never by a screenshot loop.
set -euo pipefail
PORT="${PORT:-4317}"
OUT="${LH_OUT:-.lighthouse}"
ROUTES=("$@"); [ ${#ROUTES[@]} -eq 0 ] && ROUTES=(/ /products /about /contact)
mkdir -p "$OUT"
npx next start -p "$PORT" >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT
for _ in $(seq 1 20); do curl -s -o /dev/null "http://localhost:$PORT/" && break; sleep 0.5; done
for route in "${ROUTES[@]}"; do
  name=$(echo "$route" | sed 's#^/$#home#; s#^/##; s#/#-#g')
  npx --yes lighthouse@12 "http://localhost:$PORT$route" --quiet \
    --chrome-flags="--headless=new --no-sandbox" \
    --throttling-method="${LH_THROTTLE:-devtools}" \
    --only-categories=performance,accessibility,seo,best-practices \
    --output=json --output-path="$OUT/$name.json" >/dev/null 2>&1 || true
  node -e '
    const j = require(process.argv[1]); const a = j.audits; const c = j.categories;
    const s = (k) => Math.round(c[k].score * 100);
    console.log(process.argv[2].padEnd(12),
      "perf", s("performance"), "a11y", s("accessibility"), "bp", s("best-practices"), "seo", s("seo"),
      "| LCP", a["largest-contentful-paint"].displayValue, "TBT", a["total-blocking-time"].displayValue,
      "CLS", a["cumulative-layout-shift"].displayValue, "| weight", a["total-byte-weight"].displayValue.replace("Total size was ", ""));
  ' "$(pwd)/$OUT/$name.json" "$route"
done
