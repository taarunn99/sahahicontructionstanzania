/**
 * Open Graph cards, one 1200x630 PNG per built route.
 *
 *   next build                      # the cards read each page's <title>
 *   node scripts/build-og-cards.mjs # all routes -> public/og/*.png
 *                                   #            + src/config/og-manifest.json
 *
 * Flags:
 *   --force              re-render a route whose PNG is newer than its HTML
 *   --only /a,/b         only these routes (comma separated, leading slash)
 *   --out <dir>          write the PNGs and a manifest there instead of
 *                        public/og and src/config (a dry run for review)
 *
 * Runs by hand in Node after `next build`, never inside the build, like the
 * other asset scripts (`npm run assets:og` once the lead adds the script).
 * Idempotent: a route is skipped when its PNG is newer than its HTML.
 *
 * What a card is (DESIGN-CONCEPT, owner palette "Bahari Solid"): a solid
 * brand-colour ground (Ink for the core pages), a Chalk panel with the page
 * title in Montserrat ExtraBold and the line "Sahihi Construction Chemicals ·
 * Dar es Salaam", and, where the page has one, its picture on the right: the
 * manufacturer's cut-out pack shot, the tool's catalogue photograph, the
 * post's 3D poster or the hub photograph. Nothing is generated here: every
 * picture already exists in the repo (docs/IMAGE-PROVENANCE.md).
 *
 * Swahili pages share their English twin's card: /sw -> /, /sw/mapei ->
 * /mapei, /sw/mapei/<line> -> /mapei/<line>. _not-found and _global-error
 * get no card.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";

// ---- Arguments ----------------------------------------------------------------

const argv = process.argv.slice(2);
const FORCE = argv.includes("--force");
const only = readFlag("--only");
const ONLY = only ? new Set(only.split(",").map((r) => normaliseRoute(r))) : null;
const OUT_DIR = readFlag("--out");
const PNG_DIR = OUT_DIR ?? "public/og";
const MANIFEST = OUT_DIR
  ? path.join(OUT_DIR, "og-manifest.json")
  : "src/config/og-manifest.json";

function readFlag(name) {
  const at = argv.indexOf(name);
  return at >= 0 ? argv[at + 1] : undefined;
}

// ---- Constants ----------------------------------------------------------------

const APP = ".next/server/app";
const FONT = "assets/fonts/Montserrat-ExtraBold.ttf";
const WIDTH = 1200;
const HEIGHT = 630;

/** Tokens from src/app/globals.css. Hex is allowed here: this is an asset
 *  script, not a component. */
const INK = "#0c2a36";
const CHALK = "#fafbf8";
const YELLOW = "#fdf70b";
const GROUND = {
  core: INK,
  mapei: "#0078a8", // Sahihi Blue, Mapei keeps Sahihi's palette
  "oriental-yuhong": "#d7000f",
  "x-calibur": "#c43a31",
  cmci: "#0d7f3a",
  bihui: "#007785",
  vasa: "#b5161c",
};

const BOTTOM_LINE = "Sahihi Construction Chemicals · Dar es Salaam";
const ALT_MAX = 124;

/** A picture under this many pixels on its long side is not worth showing. */
const MIN_PICTURE = 300;

// ---- Routes -------------------------------------------------------------------

function normaliseRoute(route) {
  const r = route.startsWith("/") ? route : `/${route}`;
  return r.length > 1 ? r.replace(/\/$/, "") : r;
}

/** Every page HTML under .next/server/app, as "/route" -> file path. */
function collectRoutes() {
  const routes = new Map();
  (function walk(dir) {
    for (const name of readdirSync(dir)) {
      const file = path.join(dir, name);
      if (statSync(file).isDirectory()) {
        walk(file);
      } else if (name.endsWith(".html")) {
        const rel = path.relative(APP, file).replace(/\.html$/, "");
        const route = rel === "index" ? "/" : `/${rel.split(path.sep).join("/")}`;
        routes.set(route, file);
      }
    }
  })(APP);
  return routes;
}

/** The English twin whose card a Swahili page shares, or null. */
function swTwin(route) {
  if (route === "/sw") return "/";
  if (route.startsWith("/sw/")) return route.slice(3);
  return null;
}

function skipRoute(route) {
  return route.startsWith("/_not-found") || route.startsWith("/_global-error");
}

function pngName(route) {
  return route === "/" ? "home.png" : `${route.slice(1).replace(/\//g, "__")}.png`;
}

// ---- Title --------------------------------------------------------------------

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

function decodeEntities(text) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, code) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : whole;
    }
    return ENTITIES[code.toLowerCase()] ?? whole;
  });
}

function readTitle(htmlFile) {
  const html = readFileSync(htmlFile, "utf8");
  const match = html.match(/<title>([^<]*)<\/title>/i);
  if (!match) throw new Error(`${htmlFile}: no <title>`);
  return decodeEntities(match[1]).replace(/\s+/g, " ").trim();
}

/** "<title>, Sahihi Construction Chemicals", hyphens only, under 125. */
function altFor(title) {
  let base = title
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\s*\|\s*Sahihi$/i, "")
    .replace(/\s*-\s*Sahihi Construction Chemicals$/i, "")
    .replace(/\s*\|\s*/g, ", ")
    .trim();
  const tail = ", Sahihi Construction Chemicals";
  if (base.length + tail.length > ALT_MAX) {
    const cut = base.slice(0, ALT_MAX - tail.length);
    base = cut.slice(0, Math.max(cut.lastIndexOf(" "), 1)).replace(/[\s,;:.-]+$/, "");
  }
  return `${base}${tail}`;
}

// ---- Pictures -----------------------------------------------------------------

/** A photograph, cropped to the slot; `position` is sharp's crop anchor. */
const photo = (name, position = "centre") => ({
  file: `public/images/${name}.webp`,
  mode: "photo",
  position,
});
const cutout = (file) => ({ file, mode: "cutout" });

/** Blog posts: slug -> poster, parsed from src/config/blog.ts `entries`. */
const blogPosters = (() => {
  const source = readFileSync("src/config/blog.ts", "utf8");
  const from = source.indexOf("const entries");
  const text = from >= 0 ? source.slice(from) : source;
  const map = new Map();
  const re =
    /slug: "([^"]+)"[\s\S]*?hero: (?:(?:madeModel|toolModel)\(\s*"([^"]+)"|\{ kind: "(floor|stack)" \}|\{\s*kind: "image",\s*src: "([^"]+)")/g;
  for (const m of text.matchAll(re)) {
    const [, slug, model, kind, image] = m;
    if (model) map.set(slug, { file: `public/models/blog/${model}.webp`, mode: "box" });
    else if (kind === "floor") map.set(slug, photo("lines/tile-adhesives-grouts"));
    else if (kind === "stack") map.set(slug, photo("lines/waterproofing"));
    else if (image) map.set(slug, { file: `public${image}`, mode: "photo" });
  }
  return map;
})();

const CATEGORY_PHOTO = {
  waterproofing: "lines/waterproofing",
  tiling: "lines/tile-adhesives-grouts",
  flooring: "lines/resin-flooring",
  "concrete-repair": "lines/concrete-repair",
  "tools-and-technique": "materials/adhesive-ridges",
  "building-in-tanzania": "hero/home",
};

const SPORTS_PHOTO = {
  "acrylic-court": "acrylic",
  "all-plastic-track": "full-pu",
  "artificial-turf": "turf",
  "breathable-track": "permeable",
  "epdm-walking-track": "walking",
  "hybrid-track": "hybrid",
  "silicon-pu-court": "court",
};

const VASA_ROOM = {
  "/vasa": "spc5",
  "/vasa/spc-flooring": "spc8",
  "/vasa/lvt-flooring": "lvt",
  "/vasa/wall-panels": "film",
};

/** Which brand ground a route sits on. */
function familyFor(route) {
  const head = route.split("/")[1] ?? "";
  return head in GROUND ? head : "core";
}

/** The picture a route gets, or null for a type card. Only files that exist. */
function pictureFor(route) {
  const parts = route.split("/").filter(Boolean);
  const [head, second, third] = parts;
  let pick = null;

  if (route === "/") pick = photo("hero/home");
  else if (route === "/about") pick = photo("company/supply");
  else if (route === "/contact") pick = photo("contact/kilimanjaro-moon");
  else if (route === "/products") pick = photo("materials/adhesive-ridges");
  else if (route === "/projects") pick = photo("projects/tanzanite-bridge");
  else if (route === "/solutions/waterproofing") pick = photo("solutions/swimming-pool");
  else if (route === "/solutions/tile-installation") pick = photo("lines/tile-adhesives-grouts");
  else if (route === "/solutions/concrete-repair") pick = photo("lines/concrete-repair");
  else if (head === "blog" && second === "category" && third) {
    pick = CATEGORY_PHOTO[third] ? photo(CATEGORY_PHOTO[third]) : null;
  } else if (head === "blog" && second) pick = blogPosters.get(second) ?? null;
  else if (head === "mapei") {
    if (!second) pick = photo("hero/mapei");
    else if (!third) pick = photo(`lines/${second}`);
    else pick = cutout(`public/products/mapei/cutout/${third}.webp`);
  } else if (head === "oriental-yuhong") {
    if (!second) pick = photo("oriental-yuhong/hdpe/roll");
    else if (second === "hdpe-waterproofing") pick = photo("oriental-yuhong/hdpe/roll-square");
    else if (second === "pmh-3080-plus") pick = photo("oriental-yuhong/hdpe/roll");
    else if (second === "sports-flooring") {
      pick = photo(`oriental-yuhong/sports/${third ? SPORTS_PHOTO[third] ?? "court" : "court"}`);
    } else pick = cutout(`public/products/oriental-yuhong/cutout/${second}.webp`);
  } else if (head === "cmci") {
    if (!second) pick = photo("fire/spraying");
    else if (second === "fire-rated-cement") pick = photo("fire/coated-frame");
  } else if (head === "vasa") {
    // Room shots: the floor is the subject, so crop from the bottom.
    pick = VASA_ROOM[route] ? photo(`vasa/rooms/${VASA_ROOM[route]}`, "south") : null;
  } else if (head === "bihui" && second) {
    pick = { file: `public/products/bihui/${second}.webp`, mode: "box" };
  }

  return pick && existsSync(pick.file) ? pick : null;
}

/**
 * The picture as a PNG data URL Satori can draw (it reads PNG, JPEG and SVG,
 * not webp), scaled to the box it will fill. Returns null when the source is
 * too small to show.
 */
async function loadPicture(pick, box) {
  const image = sharp(pick.file);
  const meta = await image.metadata();
  if (Math.max(meta.width, meta.height) < MIN_PICTURE) return null;
  const fit = pick.mode === "photo" ? "cover" : "inside";
  const buffer = await image
    .resize(box.width, box.height, {
      fit,
      position: pick.position ?? "centre",
      withoutEnlargement: pick.mode !== "photo",
    })
    .png()
    .toBuffer();
  const sized = await sharp(buffer).metadata();
  return {
    src: `data:image/png;base64,${buffer.toString("base64")}`,
    width: sized.width,
    height: sized.height,
  };
}

// ---- Layout -------------------------------------------------------------------

const h = (type, style, children) => ({
  type,
  props: { style, children },
});

/**
 * A font size that lets the title fit its column: the largest size whose
 * greedy word-wrap (Montserrat ExtraBold averages about 0.66em a glyph)
 * stays inside the column height. Satori does the real wrapping.
 */
function fitTitle(title, columnWidth, columnHeight) {
  const sizes = [76, 68, 60, 54, 48, 42, 38, 34, 30];
  const words = title.split(" ");
  for (const size of sizes) {
    const glyph = size * 0.66;
    const perLine = Math.max(1, Math.floor(columnWidth / glyph));
    if (words.some((w) => w.length > perLine)) continue;
    let lines = 1;
    let used = 0;
    for (const word of words) {
      const need = (used ? 1 : 0) + word.length;
      if (used + need > perLine) {
        lines += 1;
        used = word.length;
      } else used += need;
    }
    if (lines * size * 1.08 <= columnHeight) return size;
  }
  return 30;
}

/** The title as drawn: the bottom line already says Sahihi, so the SERP
 *  suffix " | Sahihi" comes off the card (the alt text keeps the title). */
function cardTitle(title) {
  return title.replace(/\s*\|\s*Sahihi$/i, "").trim();
}

function card({ title, ground, picture, pictureMode }) {
  const pad = 44;
  const panelInset = 48;
  const hasPicture = Boolean(picture);
  const panelWidth = hasPicture ? 660 : WIDTH - pad * 2;
  const columnWidth = panelWidth - panelInset * 2;
  const columnHeight = HEIGHT - pad * 2 - panelInset * 2 - 110;
  const size = fitTitle(title, columnWidth, columnHeight);

  const panel = h(
    "div",
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: panelWidth,
      height: HEIGHT - pad * 2,
      padding: panelInset,
      backgroundColor: CHALK,
      borderRadius: 28,
      color: INK,
    },
    [
      h("div", { display: "flex", flexDirection: "column" }, [
        h("div", { width: 72, height: 12, backgroundColor: YELLOW, borderRadius: 6 }),
        h(
          "div",
          {
            display: "flex",
            marginTop: 30,
            fontSize: size,
            lineHeight: 1.08,
            letterSpacing: -0.5,
            fontWeight: 800,
          },
          title,
        ),
      ]),
      h(
        "div",
        {
          display: "flex",
          fontSize: 19,
          letterSpacing: 0.6,
          fontWeight: 800,
          opacity: 0.8,
          whiteSpace: "nowrap",
        },
        BOTTOM_LINE,
      ),
    ],
  );

  const children = [panel];
  if (hasPicture) {
    const slotWidth = WIDTH - pad * 2 - panelWidth - 28;
    const slotHeight = HEIGHT - pad * 2;
    let art;
    if (pictureMode === "photo") {
      art = h("img", {
        width: slotWidth,
        height: slotHeight,
        objectFit: "cover",
        borderRadius: 28,
      });
      art.props.src = picture.src;
    } else if (pictureMode === "box") {
      // A catalogue photograph on its own white ground: a white card.
      art = h(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: slotWidth,
          height: slotHeight,
          backgroundColor: "#ffffff",
          borderRadius: 28,
        },
        [{ type: "img", props: { src: picture.src, width: picture.width, height: picture.height } }],
      );
    } else {
      // A transparent cut-out straight on the colour ground.
      art = h(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: slotWidth,
          height: slotHeight,
        },
        [{ type: "img", props: { src: picture.src, width: picture.width, height: picture.height } }],
      );
    }
    children.push(art);
  }

  return h(
    "div",
    {
      display: "flex",
      justifyContent: "space-between",
      width: WIDTH,
      height: HEIGHT,
      padding: pad,
      backgroundColor: ground,
      fontFamily: "Montserrat",
    },
    children,
  );
}

/** The box a picture is scaled into before it reaches Satori. */
function pictureBox(mode) {
  const slotWidth = WIDTH - 44 * 2 - 660 - 28; // 424
  const slotHeight = HEIGHT - 44 * 2; // 542
  if (mode === "photo") return { width: slotWidth, height: slotHeight };
  if (mode === "box") return { width: slotWidth - 48, height: slotHeight - 48 };
  return { width: slotWidth - 16, height: slotHeight - 40 };
}

// ---- Render -------------------------------------------------------------------

const fontData = readFileSync(FONT);
const fonts = [
  {
    name: "Montserrat",
    data: fontData.buffer.slice(fontData.byteOffset, fontData.byteOffset + fontData.byteLength),
    weight: 800,
    style: "normal",
  },
];

async function render(route, title) {
  const ground = GROUND[familyFor(route)];
  const pick = pictureFor(route);
  const picture = pick ? await loadPicture(pick, pictureBox(pick.mode)) : null;
  const element = card({
    title: cardTitle(title),
    ground,
    picture,
    pictureMode: pick?.mode,
  });
  const response = new ImageResponse(element, { width: WIDTH, height: HEIGHT, fonts });
  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  if (!existsSync(APP)) {
    console.error(`No ${APP}: run \`next build\` first.`);
    process.exit(1);
  }
  mkdirSync(PNG_DIR, { recursive: true });

  const routes = collectRoutes();
  const manifest = {};
  let rendered = 0;
  let skipped = 0;

  // A full run rebuilds the manifest from the build; a partial `--only` run
  // keeps the entries it did not touch.
  if (ONLY && !OUT_DIR && existsSync(MANIFEST)) {
    Object.assign(manifest, JSON.parse(readFileSync(MANIFEST, "utf8")));
  }

  const own = [...routes.keys()]
    .filter((route) => !skipRoute(route) && !swTwin(route))
    .filter((route) => !ONLY || ONLY.has(route))
    .sort();

  for (const route of own) {
    const htmlFile = routes.get(route);
    const title = readTitle(htmlFile);
    const file = pngName(route);
    const target = path.join(PNG_DIR, file);
    const fresh =
      !FORCE && existsSync(target) && statSync(target).mtimeMs >= statSync(htmlFile).mtimeMs;
    if (fresh) {
      skipped += 1;
    } else {
      writeFileSync(target, await render(route, title));
      rendered += 1;
      console.log(`${route}  ->  ${target}`);
    }
    manifest[route] = { url: `/og/${file}`, alt: altFor(title) };
  }

  // Swahili pages share the English twin's card.
  for (const route of routes.keys()) {
    const twin = swTwin(route);
    if (!twin || (ONLY && !ONLY.has(twin) && !ONLY.has(route))) continue;
    if (manifest[twin]) manifest[route] = manifest[twin];
  }

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(MANIFEST, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(
    `${rendered} rendered, ${skipped} up to date, ${Object.keys(sorted).length} routes in ${MANIFEST}`,
  );
}

await main();
