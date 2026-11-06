#!/usr/bin/env bash
# Port one or more files from the gcbuae reference repo, renaming its legacy
# token and brand identifiers to this repo's role names.
#   scripts/port-from-gcbuae.sh src/components/sections/timeline.tsx [dest]
# Token map (gcbuae -> sahihicc):
#   warm-black, midnight -> deep      (dark ground + all text on light)
#   ink, limestone       -> chalk     (light ground + text on dark)
#   bronze               -> accent    travertine -> surface   verde -> line
#   theme-forest -> theme-light   *-gcb -> *-sh   GcbButton -> BrandButton
# After porting: rewrite every brand string and all copy by hand. Never ship
# gcbuae copy (handoff 12.9: no content copying between domains).
set -euo pipefail
SRC="${GCBUAE_DIR:-$HOME/dev/gcbuae}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
rel="$1"; dest="${2:-$1}"
mkdir -p "$ROOT/$(dirname "$dest")"
sed -E \
  -e 's/warm-black/deep/g' -e 's/midnight/deep/g' \
  -e 's/([-" :(`{])ink([-" /)`};])/\1chalk\2/g' -e 's/--ink\b/--chalk/g' \
  -e 's/limestone/chalk/g' -e 's/bronze/accent/g' \
  -e 's/travertine/surface/g' -e 's/verde/line/g' \
  -e 's/theme-forest/theme-light/g' \
  -e 's/(chip|container|label|grain|marquee)-gcb/\1-sh/g' \
  -e 's/text-outline-gcb/text-outline-deep/g' -e 's/text-outline-ink/text-outline-chalk/g' \
  -e 's/gcb-(out|in-out|reveal)/sh-\1/g' \
  -e 's/gcb-button/brand-button/g' -e 's/GcbButton/BrandButton/g' \
  "$SRC/$rel" > "$ROOT/$dest"
echo "ported $rel -> $dest"
