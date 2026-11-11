/**
 * Metadata gate on the built HTML (metadata pass, 2026-11-12). Exits 1 on
 * any offender. `npm run check` runs it last, after the build and the copy
 * audit; `npm run audit:metadata` runs it alone against the last build.
 *
 *   npm run build && node scripts/audit-metadata.mjs [--no-csv] [--no-strict] [--quiet] [--since <csv>]
 *
 * Reads every .next/server/app/**\/*.html and, per page, the title, meta
 * description, canonical, Open Graph tags, hreflang links, <html lang>,
 * every <h1> and the JSON-LD types. Fails on duplicate or out-of-budget
 * titles and descriptions, dangling or cut endings, bad canonicals, OG tags
 * that disagree with the page, OG images that do not exist, more or fewer
 * than one <h1>, long dashes, banned phrases, prices, superlatives,
 * authorization wording the brand is not entitled to (src/config/brands.ts),
 * a geo or brand word twice in a title, templated description tails, broken
 * hreflang on the seven Swahili twins, a sitemap that disagrees with the
 * HTML, and every mismatch between a page and its registry row in
 * src/config/seo/*.ts (no row, no page, duplicate query, query words
 * missing from the title or the body, and "held" / "stocked" / "in stock"
 * where the row says stock: "enquire": in the metadata of any page, in the
 * body of a brand's own pages).
 *
 * Writes docs/metadata-inventory-<date>.csv and prints the routes whose
 * title or description changed since the previous inventory (the lead uses
 * the list for sitemap lastModified).
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join, relative } from "node:path";

import {
  BANNED,
  CURRENCY,
  DESC_MAX,
  DESC_MIN,
  LONG_DASH,
  SITE,
  TITLE_MAX,
  TITLE_MIN,
  checkRegistry,
  loadRegistry,
  normaliseQuery,
  queryTokens,
  tokenIn,
  readSwTwins,
  relaunchWithTypeStripping,
} from "./verify-seo-registry.mjs";

relaunchWithTypeStripping();

// ---------------------------------------------------------------- options
const argv = process.argv.slice(2);
const flag = (name) => argv.includes(name);
const writeCsv = !flag("--no-csv");
const strict = !flag("--no-strict");
const quiet = flag("--quiet");
const sinceIndex = argv.indexOf("--since");
const sinceFile = sinceIndex >= 0 ? argv[sinceIndex + 1] : undefined;
const info = (...args) => {
  if (!quiet) console.log(...args);
};

// METADATA_APP_DIR points the audit at another build output (tests only).
const APP = process.env.METADATA_APP_DIR ?? join(process.cwd(), ".next/server/app");
const EXCLUDED = new Set(["/_not-found", "/_global-error"]);
const OG_EXEMPT = new Set(["/", "/sw"]); // og:title may differ from the title
const STOP_WORDS = /\b(and|or|with|for|of|to|the|a|in|on)\s*[.!?]?$/i;
const SUPERLATIVES = [
  /\bsole\b/i,
  /\bexclusive\b/i,
  /\bofficial distributor\b/i,
  /\bofficial dealer\b/i,
  /#1(?!\d)/,
  /\bnumber one\b/i,
  /\bleading\b/i,
  /\blargest\b/i,
  /\bbest\b/i,
];
const GEO_WORDS = ["Tanzania", "Dar es Salaam"];
const BRAND_WORDS = [
  "Mapei",
  "BIHUI",
  "CMCI",
  "X-Calibur",
  "Vasa",
  "OYH",
  "Oriental Yuhong",
];
const TAIL_LENGTH = 60;
const TAIL_LIMIT = 8;

if (!existsSync(APP)) {
  console.error(`audit-metadata: ${APP} not found. Run \`npm run build\` first.`);
  process.exit(1);
}

// ---------------------------------------------------------------- helpers
const NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ndash: "–",
  mdash: "—",
  hellip: "…",
  copy: "©",
  reg: "®",
  trade: "™",
  deg: "°",
  sup2: "²",
  sup3: "³",
};
function decode(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z0-9]+);/gi, (m, name) => NAMED_ENTITIES[name.toLowerCase()] ?? m);
}
const collapse = (text) => text.replace(/\s+/g, " ").trim();
const stripTags = (html) =>
  collapse(
    decode(
      html
        .replace(/<(script|style|svg|noscript|template)\b[\s\S]*?<\/\1>/gi, " ")
        .replace(/<[^>]+>/g, " "),
    ),
  );

/** One attribute of one tag, decoded. Attribute names match case-free. */
function attr(tag, name) {
  const m = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i").exec(tag);
  return m ? decode(m[1]) : undefined;
}
function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((m) => m[0]);
}
/** All <meta> contents whose name= or property= equals `key`. */
function metas(html, key) {
  return tags(html, "meta")
    .filter((tag) => {
      const name = attr(tag, "name") ?? attr(tag, "property");
      return name?.toLowerCase() === key;
    })
    .map((tag) => collapse(attr(tag, "content") ?? ""));
}
function links(html, rel) {
  return tags(html, "link").filter((tag) => attr(tag, "rel")?.toLowerCase() === rel);
}
const urlPath = (url) => {
  try {
    const u = new URL(url, SITE);
    return { host: u.host, path: u.pathname, origin: u.origin };
  } catch {
    return undefined;
  }
};
const routeUrl = (route) => (route === "/" ? SITE : `${SITE}${route}`);
/** Whole-word occurrences of `word` (letters, digits, spaces, hyphens). */
const count = (text, word) =>
  (text.match(new RegExp(`(?<![\\p{L}\\p{N}])${word}(?![\\p{L}\\p{N}])`, "giu")) ?? [])
    .length;
const csvCell = (value) => {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const [header, ...body] = rows;
  return body
    .filter((cells) => cells.length > 1)
    .map((cells) => Object.fromEntries(header.map((h, i) => [h, cells[i] ?? ""])));
}

// ---------------------------------------------------------------- brands
/** Brand slug -> allowed authorization wording, from src/config/brands.ts. */
function readBrandWording() {
  const source = readFileSync("src/config/brands.ts", "utf8");
  const out = new Map();
  for (const m of source.matchAll(
    /slug:\s*"([^"]+)",[\s\S]*?authorization:\s*"([^"]+)"/g,
  ))
    out.set(m[1], m[2].toLowerCase());
  return out;
}
const brandWording = readBrandWording();
/** The brand a route speaks for, by its first path segment. */
function brandOfRoute(route) {
  const first = route.split("/")[1];
  if (brandWording.has(first)) return first;
  if (route.startsWith("/sw/mapei")) return "mapei";
  return undefined;
}

// ---------------------------------------------------------------- scan
function* htmlFiles(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

function extract(file) {
  const html = readFileSync(file, "utf8");
  const route =
    "/" +
    relative(APP, file)
      .replace(/\.html$/, "")
      .replace(/(^|\/)index$/, "");
  const titleTags = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map(
    (m) => collapse(decode(m[1])),
  );
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    stripTags(m[1]),
  );
  const ldTypes = [];
  const ldErrors = [];
  for (const m of html.matchAll(
    /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const data = JSON.parse(m[1]);
      const nodes = Array.isArray(data) ? data : data["@graph"] ?? [data];
      for (const node of nodes)
        ldTypes.push(...[].concat(node?.["@type"] ?? []));
    } catch (error) {
      ldErrors.push(error.message);
    }
  }
  const mainStart = html.search(/<main\b/i);
  const mainEnd = html.lastIndexOf("</main>");
  const main =
    mainStart >= 0 && mainEnd > mainStart
      ? html.slice(mainStart, mainEnd)
      : html.replace(/^[\s\S]*?<body\b/i, "");
  const robots = metas(html, "robots");
  return {
    route,
    titles: titleTags,
    title: titleTags[0] ?? "",
    descriptions: metas(html, "description"),
    description: metas(html, "description")[0] ?? "",
    canonicals: links(html, "canonical").map((tag) => attr(tag, "href") ?? ""),
    ogTitle: metas(html, "og:title")[0],
    ogDescription: metas(html, "og:description")[0],
    ogUrl: metas(html, "og:url")[0],
    ogImage: metas(html, "og:image")[0],
    ogImageAlt: metas(html, "og:image:alt")[0],
    twitterCard: metas(html, "twitter:card")[0],
    robots,
    alternates: links(html, "alternate")
      .filter((tag) => attr(tag, "hreflang"))
      .map((tag) => ({ lang: attr(tag, "hreflang"), href: attr(tag, "href") ?? "" })),
    htmlLang: attr(tags(html, "html")[0] ?? "", "lang"),
    mainLang: attr(tags(html, "main")[0] ?? "", "lang"),
    headerLang: attr(tags(html, "header")[0] ?? "", "lang"),
    h1s,
    ldTypes,
    ldErrors,
    bodyText: stripTags(main).toLowerCase(),
  };
}

const pages = [...htmlFiles(APP)].map(extract).sort((a, b) =>
  a.route.localeCompare(b.route),
);
const indexable = pages.filter((p) => !EXCLUDED.has(p.route));
const routeSet = new Set(indexable.map((p) => p.route));

// ---------------------------------------------------------------- checks
const problems = [];
const problem = (route, message) => problems.push(`${route}  ${message}`);

// _not-found carries noindex.
const notFound = pages.find((p) => p.route === "/_not-found");
if (!notFound) problem("/_not-found", "page missing from the build");
else if (!notFound.robots.some((r) => /\bnoindex\b/i.test(r)))
  problem("/_not-found", "robots meta lacks noindex");
else if (notFound.robots.some((r) => /(^|,)\s*index\b/i.test(r)))
  info(`note: /_not-found carries both noindex and "index, follow" robots tags`);

const metaText = (p) =>
  [p.title, p.description, p.ogTitle, p.ogDescription, p.ogImageAlt]
    .filter(Boolean)
    .join("\n");

for (const p of indexable) {
  const { route, title, description } = p;
  const canonical = p.canonicals[0];

  // Title.
  if (p.titles.length !== 1) problem(route, `${p.titles.length} <title> tags`);
  if (!title) problem(route, "missing title");
  else {
    if (title.length > TITLE_MAX)
      problem(route, `title ${title.length} chars (max ${TITLE_MAX}): "${title}"`);
    if (title.length < TITLE_MIN)
      problem(route, `title ${title.length} chars (min ${TITLE_MIN}): "${title}"`);
    if (/( -| \||-)$/.test(title)) problem(route, `title ends dangling: "${title}"`);
    else if (!/[\p{L}\p{N})\]"'.!?]$/u.test(title))
      problem(route, `title ends on a cut word or symbol: "${title}"`);
    for (const word of [...GEO_WORDS, ...BRAND_WORDS])
      if (count(title, word) > 1) problem(route, `"${word}" twice in title: "${title}"`);
  }

  // Description.
  if (p.descriptions.length !== 1)
    problem(route, `${p.descriptions.length} meta description tags`);
  if (description) {
    if (description.length > DESC_MAX)
      problem(route, `description ${description.length} chars (max ${DESC_MAX})`);
    if (description.length < DESC_MIN)
      problem(route, `description ${description.length} chars (min ${DESC_MIN})`);
    const stop = STOP_WORDS.exec(description.trim());
    if (stop) problem(route, `description ends on a stop word ("${stop[1]}")`);
  }

  // Canonical.
  if (p.canonicals.length !== 1)
    problem(route, `${p.canonicals.length} canonical tags`);
  if (canonical) {
    const parsed = urlPath(canonical);
    if (!/^https?:\/\//.test(canonical)) problem(route, `canonical not absolute: ${canonical}`);
    else if (parsed?.host !== "www.sahihicc.com")
      problem(route, `canonical not on the www host: ${canonical}`);
    else if (canonical !== routeUrl(route))
      problem(route, `canonical not self-referencing: ${canonical}`);
  }

  // Open Graph.
  if (p.ogTitle === undefined) problem(route, "missing og:title");
  else if (!OG_EXEMPT.has(route) && p.ogTitle !== title)
    problem(route, `og:title differs from title: "${p.ogTitle}"`);
  if (p.ogDescription === undefined) problem(route, "missing og:description");
  else if (!OG_EXEMPT.has(route) && p.ogDescription !== description)
    problem(route, "og:description differs from description");
  if (p.ogUrl === undefined) problem(route, "missing og:url");
  else if (canonical && p.ogUrl !== canonical)
    problem(route, `og:url differs from canonical: ${p.ogUrl}`);
  if (!p.ogImage) problem(route, "missing og:image");
  else {
    const image = urlPath(p.ogImage);
    const path = image?.path ?? "";
    const isCard = path.startsWith("/og/");
    if (image && image.origin === SITE && !path.startsWith("/_next/")) {
      const onDisk =
        existsSync(join("public", path)) ||
        (path === "/opengraph-image.jpg" && existsSync("src/app/opengraph-image.jpg"));
      if (!onDisk) problem(route, `og:image file missing: ${path}`);
    }
    if (isCard && !p.ogImageAlt?.trim()) problem(route, "og:image:alt missing on an /og/ card");
  }
  if (!p.twitterCard) problem(route, "missing twitter:card");

  // Headings and structured data.
  if (p.h1s.length !== 1) problem(route, `${p.h1s.length} <h1> tags`);
  for (const error of p.ldErrors) problem(route, `JSON-LD does not parse: ${error}`);

  // Language marks.
  const isSw = route === "/sw" || route.startsWith("/sw/");
  if (isSw) {
    if (p.htmlLang !== "sw" && p.mainLang !== "sw")
      problem(route, `Swahili page without lang="sw" on <html> or <main>`);
    if (p.htmlLang !== "sw" && p.headerLang !== "sw")
      problem(route, `Swahili page without lang="sw" on <header>`);
  } else if (p.htmlLang !== "en") problem(route, `<html lang="${p.htmlLang}">, want "en"`);

  // Copy rules on the metadata.
  const text = metaText(p);
  if (LONG_DASH.test(text)) problem(route, "long dash in title, description or og tags");
  const lower = text.toLowerCase();
  for (const phrase of BANNED)
    if (lower.includes(phrase)) problem(route, `banned phrase "${phrase}" in metadata`);
  if (CURRENCY.test(text)) problem(route, "currency amount in metadata (no prices)");
  const headline = `${title}\n${description}`;
  for (const rule of SUPERLATIVES) {
    const hit = rule.exec(headline);
    if (hit) problem(route, `superlative "${hit[0]}" in title or description`);
  }

  // Authorization wording per brand.
  const brand = brandOfRoute(route);
  if (brand) {
    const allowed = brandWording.get(brand);
    const says = /authori[sz]ed\s+(distributor|dealer|partner)|authori[sz]ed/i.exec(text);
    if (says) {
      const claim = says[0].toLowerCase().replace(/authorised/, "authorized");
      if (allowed === "brand partner")
        problem(route, `says "${says[0]}"; ${brand} is "${allowed}"`);
      else if (
        says[1] &&
        claim !== allowed &&
        !allowed.startsWith(claim)
      )
        problem(route, `says "${says[0]}"; ${brand} is "${allowed}"`);
    }
  }
}

// Uniqueness across the site.
function duplicates(label, pick) {
  const groups = new Map();
  for (const p of indexable) {
    const value = pick(p);
    if (!value) continue;
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(p.route);
  }
  for (const [value, routes] of groups)
    if (routes.length > 1)
      problems.push(`duplicate ${label} "${value}": ${routes.join(", ")}`);
}
duplicates("title", (p) => p.title);
duplicates("description", (p) => p.description);
{
  const tails = new Map();
  for (const p of indexable) {
    const tail = p.description.trim().slice(-TAIL_LENGTH);
    if (!tail) continue;
    if (!tails.has(tail)) tails.set(tail, []);
    tails.get(tail).push(p.route);
  }
  for (const [tail, routes] of tails)
    if (routes.length > TAIL_LIMIT)
      problems.push(
        `${routes.length} descriptions share the tail "...${tail}" (max ${TAIL_LIMIT}): ${routes.slice(0, 4).join(", ")} ...`,
      );
}

// hreflang on the Swahili twins; nothing stray elsewhere.
const twins = readSwTwins();
const twinOf = new Map([...twins, ...twins.map(([en, sw]) => [sw, en])]);
const byRoute = new Map(indexable.map((p) => [p.route, p]));
for (const [en, sw] of twins) {
  for (const [route, side] of [
    [en, "en"],
    [sw, "sw"],
  ]) {
    const p = byRoute.get(route);
    if (!p) {
      problem(route, `twin page missing from the build (${side} side of ${en} / ${sw})`);
      continue;
    }
    const want = { en: routeUrl(en), sw: routeUrl(sw), "x-default": routeUrl(en) };
    for (const [lang, href] of Object.entries(want)) {
      const found = p.alternates.filter((a) => a.lang.toLowerCase() === lang);
      if (found.length !== 1) problem(route, `hreflang ${lang}: ${found.length} links (want 1)`);
      else if (found[0].href !== href)
        problem(route, `hreflang ${lang} points at ${found[0].href}, want ${href}`);
    }
  }
}
for (const p of indexable) {
  if (twinOf.has(p.route)) continue;
  for (const a of p.alternates) {
    const lang = a.lang.toLowerCase();
    if (lang === "sw") problem(p.route, `hreflang sw on a page with no Swahili twin: ${a.href}`);
    else if ((lang === "en" || lang === "x-default") && a.href !== routeUrl(p.route))
      problem(p.route, `hreflang ${lang} points away from the page: ${a.href}`);
  }
}

// Sitemap agrees with the HTML.
{
  const sitemapFile = ["sitemap.xml.body", "sitemap.xml"]
    .map((name) => join(APP, name))
    .find((file) => existsSync(file));
  if (!sitemapFile) problems.push("sitemap  .next/server/app/sitemap.xml(.body) not found");
  else {
    const listed = new Set(
      [...readFileSync(sitemapFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
        const loc = decode(m[1]).trim();
        const path = loc.startsWith(SITE) ? loc.slice(SITE.length) : loc;
        return path === "" ? "/" : path.replace(/\/$/, "") || "/";
      }),
    );
    for (const route of routeSet)
      if (!listed.has(route)) problem(route, "not in the sitemap");
    for (const route of listed)
      if (!routeSet.has(route)) problem(route, "in the sitemap but has no HTML page");
  }
}

// ---------------------------------------------------------------- registry
const registry = await loadRegistry();
const registryCheck = checkRegistry(registry);
for (const message of registryCheck.problems)
  if (!/no row \(incomplete\)|duplicate query/.test(message))
    problems.push(`registry  ${message}`);
{
  const queries = new Map();
  for (const [route, { family, key, row }] of registry.routes) {
    const q = normaliseQuery(row?.query);
    if (q) {
      if (!queries.has(q)) queries.set(q, []);
      queries.get(q).push(route);
    }
    if (!routeSet.has(route)) problem(route, `registry row ${family}:${key} has no HTML page`);
  }
  for (const [q, routes] of queries)
    if (routes.length > 1) problems.push(`duplicate query "${q}": ${routes.join(", ")}`);
  const unregistered = indexable.filter((p) => !registry.routes.has(p.route));
  for (const p of unregistered) problem(p.route, "no registry row in src/config/seo/");

  for (const p of indexable) {
    const entry = registry.routes.get(p.route);
    if (!entry?.row) continue;
    const tokens = queryTokens(entry.row.query);
    const title = p.title.toLowerCase();
    const missingInTitle = tokens.filter((t) => !tokenIn(title, t));
    if (missingInTitle.length)
      problem(p.route, `title lacks query words: ${missingInTitle.join(", ")} (query "${entry.row.query}")`);
    const missingInBody = tokens.filter((t) => !tokenIn(p.bodyText, t));
    if (missingInBody.length)
      problem(p.route, `body never says the query words: ${missingInBody.join(", ")}`);
    if (entry.row.stock === "enquire") {
      const wording = /\b(held|stocked|in stock)\b/i;
      const inMeta = wording.exec(metaText(p));
      if (inMeta) problem(p.route, `stock is "enquire" but metadata says "${inMeta[0]}"`);
      // The body rule is for the brand's own pages: a blog post or a core
      // page may truthfully say a Mapei product is stocked.
      const inBody = brandOfRoute(p.route) ? wording.exec(p.bodyText) : null;
      if (inBody) problem(p.route, `stock is "enquire" but the page body says "${inBody[0]}"`);
    }
  }
}

// ---------------------------------------------------------------- inventory
if (writeCsv) {
  const today = new Date().toLocaleDateString("sv-SE"); // YYYY-MM-DD, local time
  const target = `docs/metadata-inventory-${today}.csv`;
  const previous =
    sinceFile ??
    readdirSync("docs")
      .filter((name) => /^metadata-inventory-.*\.csv$/.test(name) && name !== basename(target))
      .sort()
      .map((name) => join("docs", name))
      .at(-1);
  const header = [
    "route",
    "title",
    "title_len",
    "description",
    "desc_len",
    "canonical",
    "og_image",
    "h1",
    "query",
    "stock",
  ];
  const lines = [header.join(",")];
  for (const p of indexable) {
    const row = registry.routes.get(p.route)?.row;
    lines.push(
      [
        p.route,
        p.title,
        p.title.length,
        p.description,
        p.description.length,
        p.canonicals[0] ?? "",
        p.ogImage ?? "",
        p.h1s.join(" / "),
        row?.query ?? "",
        row?.stock ?? "",
      ]
        .map(csvCell)
        .join(","),
    );
  }
  writeFileSync(target, lines.join("\n") + "\n");
  info(`inventory written: ${target}`);

  if (previous && existsSync(previous)) {
    const before = new Map(
      parseCsv(readFileSync(previous, "utf8")).map((r) => [r.route === "" ? "/" : r.route, r]),
    );
    const changed = [];
    const added = [];
    for (const p of indexable) {
      const old = before.get(p.route);
      if (!old) added.push(p.route);
      else if (old.title !== p.title || old.description !== p.description) changed.push(p.route);
    }
    const removed = [...before.keys()].filter((route) => !routeSet.has(route));
    info(
      `since ${previous}: ${changed.length} changed, ${added.length} new, ${removed.length} gone`,
    );
    if (changed.length) info("  changed (title or description):\n    " + changed.join("\n    "));
    if (added.length) info("  new routes:\n    " + added.join("\n    "));
    if (removed.length) info("  routes no longer built:\n    " + removed.join("\n    "));
  }
}

// ---------------------------------------------------------------- report
if (problems.length) {
  const sorted = [...problems].sort((a, b) => a.localeCompare(b));
  console.error(
    `audit-metadata: ${indexable.length} pages, ${problems.length} problem(s)\n` +
      sorted.map((p) => `  ${p}`).join("\n"),
  );
  process.exit(strict ? 1 : 0);
}
console.log(`audit-metadata: ${indexable.length} pages, 0 problems`);
