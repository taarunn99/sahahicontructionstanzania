/**
 * SEO registry gate (metadata pass, 2026-11-12). Exits 1 on any offender.
 * `npm run check` runs it after the copy audit; `npm run verify:seo` runs it
 * alone. It needs no build: it reads the registry maps in src/config/seo/
 * straight from the TypeScript source (Node strips the types).
 *
 *  1. Every key in a family map is in that family's const slug list (or,
 *     for Mapei, the catalogue: product slugs, "mapei", "line/<l>", "sw",
 *     "sw/mapei", "sw/line/<l>").
 *  2. Every slug in the const list has a row (completeness).
 *  3. No two rows, in any family, own the same query.
 *  4. Descriptions are 120-160 characters, title overrides 35-60.
 *  5. No string carries an em or en dash, a currency amount or a banned
 *     phrase (the same lists as scripts/audit-copy.mjs).
 *
 * scripts/audit-metadata.mjs imports the loader from here, so the two gates
 * read the registry the same way. Run with plain `node`: the script relaunches
 * itself with type stripping on (and its warnings off) when needed.
 */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { register } from "node:module";
import { join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const SITE = "https://www.sahihicc.com";

/** The voice rules' banned phrases (GOVERNANCE 7, scripts/audit-copy.mjs). */
export const BANNED = [
  "premium quality",
  "wide range",
  "best in class",
  "one-stop",
  "world-class",
  "in today's world",
  "when it comes to",
];
export const LONG_DASH = /[–—]/;
/** A currency amount: TSH 25,000 / 25,000 TZS / 25,000/= / USD 12. */
export const CURRENCY =
  /\b(TSH|TZS|TSh|Tsh|USD|KES|UGX)\s?\d[\d,.]*|\d[\d,.]*\s?(TSH|TZS|TSh|Tsh|USD|KES|UGX|\/=)/;

export const DESC_MIN = 120;
export const DESC_MAX = 160;
export const TITLE_MIN = 35;
export const TITLE_MAX = 60;
export const STOCK_VALUES = new Set(["held", "order", "enquire"]);

const SEO_DIR = "src/config/seo";

/**
 * The registry families: the file each one lives in, the map export, and
 * the rule that turns a key into the route it describes.
 */
export const FAMILIES = [
  {
    name: "mapei",
    file: `${SEO_DIR}/mapei.ts`,
    map: "mapeiSeo",
    route(key, ctx) {
      if (key === "mapei") return "/mapei";
      if (key === "sw") return "/sw";
      if (key === "sw/mapei") return "/sw/mapei";
      let m = /^sw\/line\/(.+)$/.exec(key);
      if (m) return `/sw/mapei/${m[1]}`;
      m = /^line\/(.+)$/.exec(key);
      if (m) return `/mapei/${m[1]}`;
      const line = ctx.mapeiLineOf.get(key);
      return line ? `/mapei/${line}/${key}` : undefined;
    },
  },
  {
    name: "x-calibur",
    file: `${SEO_DIR}/x-calibur.ts`,
    map: "xcaliburSeo",
    route: (key) => (key === "x-calibur" ? "/x-calibur" : `/x-calibur/${key}`),
  },
  {
    name: "cmci",
    file: `${SEO_DIR}/cmci.ts`,
    map: "cmciSeo",
    route: (key) => (key === "cmci" ? "/cmci" : `/cmci/${key}`),
  },
  {
    name: "oyh",
    file: `${SEO_DIR}/oyh.ts`,
    map: "oyhSeo",
    route(key) {
      if (key === "oriental-yuhong") return "/oriental-yuhong";
      const m = /^sports\/(.+)$/.exec(key);
      if (m) return `/oriental-yuhong/sports-flooring/${m[1]}`;
      return `/oriental-yuhong/${key}`;
    },
  },
  {
    name: "vasa",
    file: `${SEO_DIR}/vasa.ts`,
    map: "vasaSeo",
    route: (key) => (key === "vasa" ? "/vasa" : `/vasa/${key}`),
  },
  {
    name: "bihui",
    file: `${SEO_DIR}/bihui.ts`,
    map: "bihuiSeo",
    route: (key) => (key === "bihui" ? "/bihui" : `/bihui/${key}`),
  },
  {
    name: "blog",
    file: `${SEO_DIR}/blog.ts`,
    map: "blogSeo",
    route(key) {
      if (key === "blog") return "/blog";
      const m = /^category\/(.+)$/.exec(key);
      if (m) return `/blog/category/${m[1]}`;
      return `/blog/${key}`;
    },
  },
  {
    name: "core",
    file: `${SEO_DIR}/core.ts`,
    map: "coreSeo",
    route: (key) => key,
  },
];

/**
 * Relaunch under flags that strip TypeScript types quietly. Node 23.6+
 * strips by default but still prints an ExperimentalWarning, and the
 * registry files sit under a package.json with no "type", which earns a
 * second warning. Older Nodes need the flag itself. Call it before any
 * output.
 */
export function relaunchWithTypeStripping() {
  const want = [
    "--disable-warning=ExperimentalWarning",
    "--disable-warning=MODULE_TYPELESS_PACKAGE_JSON",
  ];
  if (!process.features.typescript) want.unshift("--experimental-strip-types");
  const missing = want.filter((flag) => !process.execArgv.includes(flag));
  if (missing.length === 0) return;
  const child = spawnSync(
    process.execPath,
    [...process.execArgv, ...missing, ...process.argv.slice(1)],
    { stdio: "inherit" },
  );
  process.exit(child.status ?? 1);
}

/** Resolve "@/x" to src/x(.ts) so a registry's own imports load. */
function registerAliasHook() {
  const base = pathToFileURL(join(process.cwd(), "src")).href + "/";
  const hook = `
    import { access } from "node:fs/promises";
    import { fileURLToPath } from "node:url";
    const base = ${JSON.stringify(base)};
    export async function resolve(specifier, context, next) {
      if (specifier.startsWith("@/")) {
        const rel = specifier.slice(2);
        for (const ext of ["", ".ts", ".tsx", "/index.ts"]) {
          const url = new URL(rel + ext, base);
          try {
            await access(fileURLToPath(url));
            return { url: url.href, shortCircuit: true };
          } catch {}
        }
      }
      return next(specifier, context);
    }`;
  register(`data:text/javascript,${encodeURIComponent(hook)}`);
}

/** Catalogue facts the Mapei routes need: product slug -> line slug. */
export function readMapeiCatalogue() {
  const source = readFileSync("src/config/catalogue.ts", "utf8");
  const lineOf = new Map();
  const lines = new Set();
  for (const m of source.matchAll(
    /slug:\s*"([^"]+)",\s*brand:\s*"([^"]+)",\s*line:\s*"([^"]+)"/g,
  )) {
    if (m[2] === "mapei") {
      lineOf.set(m[1], m[3]);
      lines.add(m[3]);
    }
  }
  return { mapeiLineOf: lineOf, mapeiLines: [...lines] };
}

/** The Swahili twins, as src/config/sw-routes.ts builds them. */
export function readSwTwins() {
  const source = readFileSync("src/config/sw-routes.ts", "utf8");
  const block = /const LINES = \[([\s\S]*?)\] as const/.exec(source)?.[1] ?? "";
  const lines = [...block.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  return [
    ["/", "/sw"],
    ["/mapei", "/sw/mapei"],
    ...lines.map((line) => [`/mapei/${line}`, `/sw/mapei/${line}`]),
  ];
}

/** One query, as the uniqueness rule sees it. */
export const normaliseQuery = (query) =>
  String(query ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

/** Words a query may carry that no title has to repeat. */
const QUERY_STOP = new Set([
  "and", "the", "for", "with", "from", "into", "onto", "per", "your",
  // Swahili connectives
  "ya", "wa", "za", "na", "kwa", "la", "cha", "vya",
]);

/** British and American spellings count as one word. */
const SPELLING = [
  [/levelling/g, "leveling"],
  [/aluminium/g, "aluminum"],
  [/fibreglass/g, "fiberglass"],
  [/fibre/g, "fiber"],
  [/colour/g, "color"],
  [/metre/g, "meter"],
  [/mould/g, "mold"],
];
export const normaliseSpelling = (text) =>
  SPELLING.reduce((out, [from, to]) => out.replace(from, to), text);

/** Tokens of three or more letters or digits, lower case, stop words out. */
export const queryTokens = (query) =>
  [...String(query ?? "").matchAll(/[\p{L}\p{N}]+/gu)]
    .map((m) => normaliseSpelling(m[0].toLowerCase()))
    .filter((token) => token.length >= 3 && !QUERY_STOP.has(token));

/**
 * Does the text carry the token? Plurals and simple stems count ("tiles"
 * for "tile", "pliers" for "plier", "bubble" for "bubbles", "grouting" for
 * "grout"). `text` must already be lower case.
 */
export const tokenIn = (text, token) => {
  const haystack = normaliseSpelling(text);
  const stems = new Set([token]);
  if (token.endsWith("ies")) stems.add(`${token.slice(0, -3)}y`);
  if (token.endsWith("es")) stems.add(token.slice(0, -2));
  if (token.endsWith("s")) stems.add(token.slice(0, -1));
  if (token.endsWith("ing")) stems.add(token.slice(0, -3));
  if (token.endsWith("ed")) stems.add(token.slice(0, -2));
  return [...stems].some((stem) => stem.length >= 3 && haystack.includes(stem));
};

/** Long dash, price and banned-phrase problems in one string. */
export function textProblems(text, label) {
  const out = [];
  if (text == null) return out;
  const value = String(text);
  if (LONG_DASH.test(value)) out.push(`${label}: long dash`);
  if (CURRENCY.test(value)) out.push(`${label}: currency amount (no prices)`);
  const lower = value.toLowerCase();
  for (const phrase of BANNED)
    if (lower.includes(phrase)) out.push(`${label}: banned phrase "${phrase}"`);
  return out;
}

/**
 * Load every family map. Returns
 *   families: [{ name, file, rows: Map key -> row, allowed: Set, expected: Set }]
 *   routes:   Map route -> { family, key, row }
 *   ctx:      the catalogue facts
 * `allowed` is every key the family may carry; `expected` is every key it
 * must carry (the const lists, plus the Mapei hub, line and Swahili keys).
 */
export async function loadRegistry() {
  registerAliasHook();
  const ctx = readMapeiCatalogue();
  const families = [];
  const routes = new Map();
  const problems = [];
  for (const family of FAMILIES) {
    if (!existsSync(family.file)) {
      problems.push(`${family.file}: file missing`);
      continue;
    }
    const mod = await import(pathToFileURL(resolve(family.file)).href);
    const map = mod[family.map];
    if (!map || typeof map !== "object") {
      problems.push(`${family.file}: no "${family.map}" export`);
      continue;
    }
    const listed = new Set();
    for (const [name, value] of Object.entries(mod)) {
      // The Mapei line slugs are keyed "line/<slug>" and "sw/line/<slug>"
      // in the map (added below), not bare.
      if (
        name !== family.map &&
        name !== "MAPEI_LINE_SLUGS" &&
        Array.isArray(value) &&
        value.every((item) => typeof item === "string")
      )
        value.forEach((item) => listed.add(item));
    }
    const expected = new Set(listed);
    if (family.name === "mapei") {
      for (const key of ["mapei", "sw", "sw/mapei"]) expected.add(key);
      for (const line of ctx.mapeiLines) {
        expected.add(`line/${line}`);
        expected.add(`sw/line/${line}`);
      }
      for (const slug of ctx.mapeiLineOf.keys()) expected.add(slug);
    }
    const allowed = new Set(expected);
    const rows = new Map(Object.entries(map));
    families.push({ ...family, rows, allowed, expected });
    for (const [key, row] of rows) {
      const route = family.route(key, ctx);
      if (!route) continue;
      const clash = routes.get(route);
      if (clash)
        problems.push(
          `${route}: described twice (${clash.family}:${clash.key} and ${family.name}:${key})`,
        );
      else routes.set(route, { family: family.name, key, row });
    }
  }
  return { families, routes, ctx, problems };
}

/** The registry-only checks. Returns the problem list. */
export function checkRegistry({ families, problems }) {
  const out = [...problems];
  const queries = new Map(); // normalised query -> [family:key]
  let rowCount = 0;
  for (const family of families) {
    const tag = (key) => `${family.name}:${key}`;
    for (const key of family.expected)
      if (!family.rows.has(key)) out.push(`${tag(key)}: no row (incomplete)`);
    for (const [key, row] of family.rows) {
      rowCount++;
      if (!family.allowed.has(key))
        out.push(`${tag(key)}: key not in the family's slug list`);
      if (!row || typeof row !== "object") {
        out.push(`${tag(key)}: row is not an object`);
        continue;
      }
      const query = normaliseQuery(row.query);
      if (!query) out.push(`${tag(key)}: empty query`);
      else {
        if (!queries.has(query)) queries.set(query, []);
        queries.get(query).push(tag(key));
      }
      if (typeof row.description !== "string" || !row.description.trim())
        out.push(`${tag(key)}: missing description`);
      else if (
        row.description.length < DESC_MIN ||
        row.description.length > DESC_MAX
      )
        out.push(
          `${tag(key)}: description ${row.description.length} chars (want ${DESC_MIN}-${DESC_MAX})`,
        );
      if (
        row.titleOverride != null &&
        (row.titleOverride.length < TITLE_MIN ||
          row.titleOverride.length > TITLE_MAX)
      )
        out.push(
          `${tag(key)}: titleOverride ${row.titleOverride.length} chars (want ${TITLE_MIN}-${TITLE_MAX})`,
        );
      if (!STOCK_VALUES.has(row.stock))
        out.push(`${tag(key)}: stock "${row.stock}" is not held/order/enquire`);
      for (const field of ["query", "typeWords", "description", "titleOverride"])
        out.push(
          ...textProblems(row[field], `${tag(key)} ${field}`),
        );
    }
  }
  for (const [query, owners] of queries)
    if (owners.length > 1)
      out.push(`duplicate query "${query}": ${owners.join(", ")}`);
  return { problems: out, rowCount };
}

const isMain =
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  relaunchWithTypeStripping();
  const registry = await loadRegistry();
  const { problems, rowCount } = checkRegistry(registry);
  if (problems.length) {
    console.error(
      `verify-seo-registry: ${problems.length} problem(s)\n` +
        problems.map((p) => `  ${p}`).join("\n"),
    );
    process.exit(1);
  }
  console.log(`verify-seo-registry: ${rowCount} rows, 0 problems`);
}
