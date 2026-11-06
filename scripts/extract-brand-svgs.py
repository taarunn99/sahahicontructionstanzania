#!/usr/bin/env python3
"""Extract the Sahihi logo and the partner-brand logos as clean SVGs.

Source of truth: the director's business card PDF (Canva export, pure vector).
    pdftocairo -svg -f 2 -l 2 assets/source/owner-supplied/sahihi-business-card-anil-sankaran.pdf \
        assets/source/brand/card-back.svg
    python3 scripts/extract-brand-svgs.py

Nothing is redrawn: every path is copied byte-for-byte from the card. Only the
wrapper (viewBox, colour notation) is rewritten. Outputs go to public/brand
(Sahihi) and public/brands (partners, original colours - trademark respect).
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = (ROOT / "assets/source/brand/card-back.svg").read_text()
NUM = r"-?\d+(?:\.\d+)?"


def hexify(markup: str) -> str:
    def rep(m):
        vals = [round(float(v) * 2.55) for v in m.groups()]
        return "#%02x%02x%02x" % tuple(max(0, min(255, v)) for v in vals)

    return re.sub(rf"rgb\(({NUM})%, ({NUM})%, ({NUM})%\)", rep, markup)


def slim(tag: str, places: int = 2) -> str:
    """Round path coordinates to 2 decimals (0.01 unit is under a quarter of
    a pixel when the 168-unit logo is rendered 4000px wide)."""

    def d_rep(m):
        return ' d="' + re.sub(NUM, lambda n: f"{float(n.group(0)):.{places}f}".rstrip("0").rstrip("."), m.group(1)) + '"'

    return re.sub(r' d="([^"]*)"', d_rep, tag)


def group(gid: str) -> str:
    """Inner markup of <g id=gid>, with nested clip groups unwrapped."""
    start = SRC.index(f'<g id="{gid}"')
    start = SRC.index(">", start) + 1
    depth, i = 1, start
    while depth:
        nxt_open, nxt_close = SRC.find("<g", i), SRC.find("</g>", i)
        if nxt_open != -1 and nxt_open < nxt_close:
            depth, i = depth + 1, nxt_open + 2
        else:
            depth, i = depth - 1, nxt_close + 4
    inner = SRC[start : i - 4]
    inner = re.sub(r"<g clip-path=[^>]*>|</g>", "", inner)
    return inner


def paths(markup: str) -> list[str]:
    return re.findall(r"<path\b[^>]*/>", markup)


def bbox(path_tags: list[str]):
    xs, ys = [], []
    for tag in path_tags:
        d = re.search(r' d="([^"]*)"', tag).group(1)
        nums = [float(n) for n in re.findall(NUM, d)]
        pts = list(zip(nums[0::2], nums[1::2]))
        tr = re.search(r'transform="matrix\(([^)]*)\)"', tag)
        sw = re.search(r'stroke-width="([^"]*)"', tag)
        pad = 0.0
        if tr:
            a, b, c, dd, e, f = [float(v) for v in tr.group(1).split(",")]
            pts = [(a * x + c * y + e, b * x + dd * y + f) for x, y in pts]
            pad = (float(sw.group(1)) * a / 2) if sw else 0.0
        elif sw:
            pad = float(sw.group(1)) / 2
        xs += [x - pad for x, _ in pts] + [x + pad for x, _ in pts]
        ys += [y - pad for _, y in pts] + [y + pad for _, y in pts]
    return min(xs), min(ys), max(xs), max(ys)


def write(dest: Path, path_tags: list[str], title: str, pad: float = 0.0, places: int = 2):
    x0, y0, x1, y1 = bbox(path_tags)
    x0, y0, x1, y1 = x0 - pad, y0 - pad, x1 + pad, y1 + pad
    vb = f"{x0:.3f} {y0:.3f} {x1 - x0:.3f} {y1 - y0:.3f}"
    body = "\n".join(slim(hexify(p), places) for p in path_tags)
    body = body.replace(' fill-opacity="1"', "").replace(' stroke-opacity="1"', "")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" role="img" '
        f'aria-label="{title}"><title>{title}</title>\n{body}\n</svg>\n'
    )
    print(f"{dest.relative_to(ROOT)}  viewBox {vb}  {dest.stat().st_size} bytes")


# ---- Sahihi -----------------------------------------------------------------
sahihi = paths(group("source-8"))
# order on the card: [0] white card ground, [1] yellow arrows, [2] green ring,
# [3] yellow disc, [4] white tick halo, [5] green tick, [6] SAHIHI wordmark,
# [7] "CONSTRUCTION CHEMICALS LIMITED", [8] "ENHANCE YOUR BUILDING LIFE"
assert len(sahihi) == 9, len(sahihi)
mark, wordmark, descriptor, tagline = sahihi[1:6], sahihi[6], sahihi[7], sahihi[8]
brand = ROOT / "public/brand"
NAME = "Sahihi Construction Chemicals Limited"
write(brand / "sahihi-logo.svg", mark + [wordmark, descriptor, tagline], NAME, pad=0.5)
write(brand / "sahihi-logo-no-tagline.svg", mark + [wordmark, descriptor], NAME, pad=0.5)
write(brand / "sahihi-mark.svg", mark, "Sahihi", pad=0.5)
write(brand / "sahihi-wordmark.svg", [wordmark], "Sahihi", pad=0.3)
# On dark grounds the charcoal descriptor disappears: lift it to the light ground colour.
light = descriptor.replace("rgb(19.999695%, 19.999695%, 19.999695%)", "rgb(96%, 97%, 98%)")
assert light != descriptor
write(brand / "sahihi-logo-on-dark.svg", mark + [wordmark, light, tagline], NAME, pad=0.5)
write(brand / "sahihi-logo-no-tagline-on-dark.svg", mark + [wordmark, light], NAME, pad=0.5)

# Sprite for the site chrome: one cached file, referenced with <use>. The
# descriptor line is currentColor so the header can flip it with its state.
cc = descriptor.replace('fill="rgb(19.999695%, 19.999695%, 19.999695%)"', 'fill="currentColor"')
assert cc != descriptor
x0, y0, x1, y1 = bbox(mark + [wordmark, descriptor])
mx0, my0, mx1, my1 = bbox(mark)
fx0, fy0, fx1, fy1 = bbox(mark + [wordmark, descriptor, tagline])


def sym(sid, tags, box):
    a, b, c, d = box
    vb = f"{a - 0.5:.3f} {b - 0.5:.3f} {c - a + 1:.3f} {d - b + 1:.3f}"
    body = "\n".join(slim(hexify(t)) for t in tags).replace(' fill-opacity="1"', "").replace(' stroke-opacity="1"', "")
    return f'<symbol id="{sid}" viewBox="{vb}">\n{body}\n</symbol>'


sprite = (
    '<svg xmlns="http://www.w3.org/2000/svg">\n'
    + sym("logo", mark + [wordmark, cc], (x0, y0, x1, y1))
    + "\n"
    + sym("mark", mark, (mx0, my0, mx1, my1))
    + "\n</svg>\n"
)
(brand / "sahihi-sprite.svg").write_text(sprite)
print("public/brand/sahihi-sprite.svg", len(sprite), "bytes",
      "| logo ratio", round((x1 - x0 + 1) / (y1 - y0 + 1), 4),
      "| full ratio", round((fx1 - fx0 + 1) / (fy1 - fy0 + 1), 4))

# ---- Partner brands (original colours, never recoloured) ---------------------
partners = {
    "source-11": ("mapei", "Mapei"),
    "source-14": ("cmci", "CMCI - Construction Material Chemical Industries"),
    "source-17": ("x-calibur", "X-Calibur Construction Chemistry"),
    "source-20": ("oyh", "OYH - Oriental Yuhong"),
    "source-23": ("bihui", "BIHUI"),
}
for gid, (slug, title) in partners.items():
    write(ROOT / "public/brands" / f"{slug}.svg", paths(group(gid)), title, pad=0.15, places=3)
