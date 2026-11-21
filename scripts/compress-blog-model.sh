#!/bin/zsh
# Compress a Tripo GLB for a blog hero, to the size of the first thirteen
# (about 30,000 triangles, 1024 px WebP textures, meshopt, 200-450 KB).
# Tripo H3.1 now returns about 1.5 million triangles, so the ratio is low.
#   scripts/compress-blog-model.sh <name> [ratio]
#   reads assets/source/blog-3d/<name>.glb, writes public/models/blog/<name>.glb
set -e
name=$1
ratio=${2:-0.022}
npx gltf-transform optimize "assets/source/blog-3d/$name.glb" "public/models/blog/$name.glb" \
  --compress meshopt --texture-compress webp --texture-size 1024 \
  --simplify-ratio "$ratio" --simplify-error 0.002 >/dev/null
tris=$(npx gltf-transform inspect "public/models/blog/$name.glb" --format md 2>/dev/null | grep -E "^\| 0 +\| tripo_mesh" | awk -F'|' '{print $6}')
echo "$name: $(stat -f%z public/models/blog/$name.glb) bytes, triangles$tris"
