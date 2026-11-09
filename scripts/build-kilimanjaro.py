"""
Splits the owner's Kilimanjaro photograph (assets/source/contact/kilimanjaro-moon.jpg,
supplied 2026-11-09) into the layers the contact page's moonrise uses:

  public/images/contact/kilimanjaro-base.webp   the photo with the moon painted out
  public/images/contact/kilimanjaro-moon.webp   the moon alone, with alpha
  src/config/kilimanjaro.json                   moon box and the ridge (sky) polygon,
                                                in percent of the frame

The moon is painted out row by row: each row is a straight blend between the
sky just left and just right of the moon, with the photo's own grain added
back, so the sky stays smooth. The ridge is the first pixel, scanning down,
that is no longer sky (darker rock or bright snow), smoothed and thinned.

Run: python3 -I scripts/build-kilimanjaro.py
"""

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets/source/contact/kilimanjaro-moon.jpg"
OUT = ROOT / "public/images/contact"
OUT.mkdir(parents=True, exist_ok=True)

img = Image.open(SRC).convert("RGB")
W, H = img.size
px = np.asarray(img).astype(np.float32)
R, G, B = px[..., 0], px[..., 1], px[..., 2]

# The moon: warm and bright, in the upper half only.
moon = (R > 150) & (R - B > 50) & (G > 100)
moon[H // 2 :, :] = False
ys, xs = np.nonzero(moon)
cx = (xs.min() + xs.max()) / 2
r = (xs.max() - xs.min()) / 2
cy = ys.min() + r

# The ridge: per column, the first row below the sky that is rock or snow.
lum = 0.299 * R + 0.587 * G + 0.114 * B
ridge = np.zeros(W)
for x in range(W):
    y0 = 245
    for y in range(y0, int(H * 0.7)):
        if moon[y, x]:
            continue
        if lum[y, x] < 115 or lum[y, x] > 172:
            ridge[x] = y
            break
    else:
        ridge[x] = H * 0.7
# Columns crossing the moon: the snow edge just under it.
kernel = np.ones(9) / 9
ridge = np.convolve(np.pad(ridge, 4, mode="edge"), kernel, mode="valid")

# Paint the moon out (with a 4 px halo for the soft edge).
yy, xx = np.mgrid[0:H, 0:W]
disc = (xx - cx) ** 2 + (yy - cy) ** 2 <= (r + 4) ** 2
above = yy < ridge[None, :] - 1
paint = disc & above
base = px.copy()
left = int(max(cx - r - 10, 0))
right = int(min(cx + r + 10, W - 1))
rng = np.random.default_rng(7)
for y in range(int(cy - r - 6), int(cy + r + 6)):
    row = paint[y]
    if not row.any():
        continue
    a = px[y, max(left - 6, 0) : left].mean(axis=0)
    b = px[y, right : right + 6].mean(axis=0)
    for x in np.nonzero(row)[0]:
        t = (x - left) / (right - left)
        base[y, x] = a * (1 - t) + b * t + rng.normal(0, 1.6, 3)
Image.fromarray(np.clip(base, 0, 255).astype(np.uint8)).save(
    OUT / "kilimanjaro-base.webp", quality=84, method=6
)

# The moon on its own, antialiased edge.
pad = 4
x0, y0 = int(cx - r - pad), int(cy - r - pad)
size = int(2 * (r + pad))
crop = img.crop((x0, y0, x0 + size, y0 + size)).convert("RGBA")
alpha = Image.new("L", (size * 4, size * 4), 0)
from PIL import ImageDraw  # noqa: E402

ImageDraw.Draw(alpha).ellipse(
    (pad * 4, pad * 4, (size - pad) * 4, (size - pad) * 4), fill=255
)
alpha = alpha.resize((size, size), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.6))
crop.putalpha(alpha)
crop.save(OUT / "kilimanjaro-moon.webp", quality=90, method=6)

# Sky polygon in percent, about 90 points.
step = max(W // 90, 1)
points = [(0.0, 0.0), (100.0, 0.0)]
cols = list(range(W - 1, -1, -step))
if cols[-1] != 0:
    cols.append(0)
for x in cols:
    points.append((round(x / (W - 1) * 100, 2), round(ridge[x] / H * 100, 2)))
polygon = "polygon(" + ", ".join(f"{x}% {y}%" for x, y in points) + ")"

meta = {
    "width": W,
    "height": H,
    "moon": {
        "left": round(x0 / W * 100, 3),
        "top": round(y0 / H * 100, 3),
        "width": round(size / W * 100, 3),
        "pixels": size,
    },
    "summit": {"x": round(cx / W * 100, 2), "y": round(ridge[int(cx)] / H * 100, 2)},
    "sky": polygon,
}
(ROOT / "src/config/kilimanjaro.json").write_text(json.dumps(meta, indent=2) + "\n")
print(json.dumps({k: v for k, v in meta.items() if k != "sky"}))
print("polygon points:", len(points))
