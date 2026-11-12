// GSC indexing audit: compute content, linking and structure metrics for every
// sitemap page from the built HTML in .next/server/app, then compare the
// INDEXED / CNI / UNKNOWN sets. Node built-ins only (no cheerio in node_modules).
//
//   node scripts/audit-indexing.mjs <dir with sitemap.txt, indexed.txt,
//                                    cni-pages.txt, unknown-pages.txt> [out dir]
//
// The lists are one route per line (relative to the site). First run
// 2026-11-12 from Search Console's exports: docs/seo/2026-11-12/gsc-exports,
// results in docs/seo/2026-11-12/gsc-audit-pages.csv and gsc-audit-raw.md.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const REPO = process.cwd();
const APP = path.join(REPO, ".next/server/app");
const GSC = process.argv[2] ?? "docs/seo/2026-11-12/gsc-exports";
const OUT = process.argv[3] ?? path.join(GSC, "audit");

const lines = (f) =>
  fs.readFileSync(path.join(GSC, f), "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
const isHtmlRoute = (r) => !/\.(pdf|txt|xml|png|jpg|webp)$/i.test(r);

const sitemap = lines("sitemap.txt").filter(isHtmlRoute);
const INDEXED = new Set(lines("indexed.txt").filter(isHtmlRoute));
const CNI = new Set(lines("cni-pages.txt"));
const UNKNOWN = new Set(lines("unknown-pages.txt"));
const setOf = (r) => (INDEXED.has(r) ? "INDEXED" : CNI.has(r) ? "CNI" : UNKNOWN.has(r) ? "UNKNOWN" : "NONE");

const fileFor = (r) => path.join(APP, r === "/" ? "index.html" : `${r.replace(/^\//, "")}.html`);
const familyOf = (r) => (r === "/" ? "home" : r.split("/")[1]);
const depthOf = (r) => (r === "/" ? 0 : r.split("/").length - 1);

// ---------- HTML helpers (regex based; the pages are server-rendered) ----------
const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
const stripBlocks = (h) =>
  h.replace(/<(script|style|noscript|svg|template)\b[^>]*>[\s\S]*?<\/\1>/gi, " ").replace(/<!--[\s\S]*?-->/g, " ");
const toText = (h) => decode(stripBlocks(h).replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const words = (t) => t.toLowerCase().match(/[\p{L}\p{N}][\p{L}\p{N}'’\-\.]*/gu) ?? [];
const sentences = (t) =>
  t
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim().toLowerCase())
    .filter((s) => words(s).length >= 5);

const mainOf = (h) => {
  const a = h.indexOf("<main");
  const b = h.lastIndexOf("</main>");
  return a >= 0 && b > a ? h.slice(h.indexOf(">", a) + 1, b) : null;
};
const bodyOf = (h) => {
  const a = h.indexOf("<body");
  const b = h.lastIndexOf("</body>");
  return a >= 0 && b > a ? h.slice(h.indexOf(">", a) + 1, b) : h;
};
const headOf = (h) => {
  const a = h.indexOf("<head");
  const b = h.indexOf("</head>");
  return a >= 0 && b > a ? h.slice(a, b) : h;
};
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"));
  return m ? decode(m[1]) : null;
};
const metaContent = (head, selector) => {
  const re = /<meta\b[^>]*>/gi;
  let m;
  while ((m = re.exec(head))) {
    const tag = m[0];
    if (selector(tag)) return attr(tag, "content");
  }
  return null;
};
const ldTypes = (h) => {
  const types = new Set();
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(h))) {
    const walk = (o) => {
      if (Array.isArray(o)) return o.forEach(walk);
      if (o && typeof o === "object") {
        if (o["@type"]) (Array.isArray(o["@type"]) ? o["@type"] : [o["@type"]]).forEach((t) => types.add(t));
        Object.values(o).forEach(walk);
      }
    };
    try {
      walk(JSON.parse(decode(m[1])));
    } catch {
      for (const t of m[1].matchAll(/"@type":"(\w+)"/g)) types.add(t[1]);
    }
  }
  return types;
};
const hrefs = (h) => {
  const out = [];
  const re = /\shref="([^"]*)"/g;
  let m;
  while ((m = re.exec(h))) out.push(decode(m[1]));
  return out;
};
const normRoute = (href) => {
  let r = href.split("#")[0].split("?")[0];
  if (r.startsWith("https://www.sahihicc.com")) r = r.slice("https://www.sahihicc.com".length) || "/";
  if (!r.startsWith("/")) return null;
  if (r.length > 1 && r.endsWith("/")) r = r.slice(0, -1);
  return r;
};

// ---------- BIHUI catalogue (same rule as src/config/bihui.ts) ----------
const catalogue = JSON.parse(fs.readFileSync(path.join(REPO, "src/config/bihui-catalogue.json"), "utf8"));
const DOUBTFUL_CODES = new Set(["MM1500", "LFMC5", "LLG05", "BLSE100"]);
const isDoubtfulRow = (row) =>
  DOUBTFUL_CODES.has(row.sku) ||
  (Boolean(row.flag) &&
    /contradict|swapped|identical|does not fit|two different|plausible|copied|reads as|under a code|differs/i.test(row.flag ?? ""));
const bihuiBySlug = Object.fromEntries(catalogue.map((f) => [f.slug, f]));

// ---------- git: template file and its last change ----------
const pageTemplates = execSync("find src/app -name page.tsx", { cwd: REPO, encoding: "utf8" }).trim().split("\n");
const templateFor = (route) => {
  const segs = route === "/" ? [] : route.slice(1).split("/");
  let best = null;
  for (const t of pageTemplates) {
    const tsegs = t.replace(/^src\/app\/?/, "").replace(/\/?page\.tsx$/, "").split("/").filter(Boolean);
    if (tsegs.length !== segs.length) continue;
    let ok = true, dyn = 0;
    for (let i = 0; i < segs.length; i++) {
      if (tsegs[i].startsWith("[")) dyn++;
      else if (tsegs[i] !== segs[i]) { ok = false; break; }
    }
    if (ok && (!best || dyn < best.dyn)) best = { t, dyn };
  }
  return best?.t ?? null;
};
const contentFileFor = (route) => {
  const segs = route.slice(1).split("/");
  const cands = [];
  if (segs[0] === "mapei" && segs.length === 3) cands.push(`src/content/mapei/${segs[2]}.json`);
  if (segs[0] === "cmci" && segs.length === 2) cands.push(`src/content/cmci/${segs[1]}.json`);
  if (segs[0] === "x-calibur" && segs.length === 2) cands.push(`src/content/x-calibur/${segs[1]}.json`);
  if (segs[0] === "oriental-yuhong" && segs.length === 2) cands.push(`src/content/oriental-yuhong/${segs[1]}.json`);
  if (segs[0] === "blog" && segs.length === 2) cands.push(`src/content/blog/${segs[1]}.ts`, `src/content/blog/${segs[1]}.tsx`);
  if (segs[0] === "bihui" && segs.length === 2) cands.push("src/config/bihui-catalogue.json");
  if (segs[0] === "oriental-yuhong" && segs[1] === "sports-flooring" && segs.length === 3) cands.push("src/config/oyh-sports-systems.ts");
  if (segs[0] === "vasa") cands.push("src/config/vasa.ts");
  if (segs[0] === "sw") cands.push("src/config/sw.ts");
  return cands.find((c) => fs.existsSync(path.join(REPO, c))) ?? null;
};
const gitCache = new Map();
const gitDates = (file) => {
  if (!file) return { first: "", last: "", since9: 0 };
  if (gitCache.has(file)) return gitCache.get(file);
  const log = execSync(`git log --follow --date=short --pretty=format:%ad -- "${file}"`, { cwd: REPO, encoding: "utf8" })
    .trim().split("\n").filter(Boolean);
  const r = { first: log[log.length - 1] ?? "", last: log[0] ?? "", since9: log.filter((d) => d >= "2026-11-09").length };
  gitCache.set(file, r);
  return r;
};

// ---------- pass 1: parse every page ----------
const sitemapSet = new Set(sitemap);
const pages_has = (r) => sitemapSet.has(r);
const pages = new Map();
for (const route of sitemap) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) { console.error("MISSING BUILD FILE", route); continue; }
  const html = fs.readFileSync(file, "utf8");
  const head = headOf(html);
  const main = mainOf(html);
  const body = bodyOf(html);
  const mainText = main ? toText(main) : "";
  const bodyText = toText(body);
  const title = decode((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) ?? [, ""])[1]).trim();
  const desc = metaContent(head, (t) => /\sname="description"/i.test(t)) ?? "";
  const robots = metaContent(head, (t) => /\sname="robots"/i.test(t)) ?? "";
  const canonical = attr((head.match(/<link[^>]*rel="canonical"[^>]*>/i) ?? [""])[0], "href") ?? "";
  const allHrefs = hrefs(html).map(normRoute).filter(Boolean);
  const mainHrefs = (main ? hrefs(main) : []).map(normRoute).filter(Boolean);
  const mainNoScripts = main ? stripBlocks(main) : "";
  const bodyNoScripts = stripBlocks(body);
  const b = route.startsWith("/bihui/") ? bihuiBySlug[route.slice("/bihui/".length)] : null;
  const template = templateFor(route);
  const content = contentFileFor(route);
  pages.set(route, {
    route,
    set: setOf(route),
    family: familyOf(route),
    depth: depthOf(route),
    html_kb: Math.round(html.length / 1024),
    has_main: Boolean(main),
    main_words: words(mainText).length,
    body_words: words(bodyText).length,
    mainText,
    mainWordSet: new Set(words(mainText)),
    mainSentences: sentences(mainText),
    title,
    title_len: title.length,
    desc,
    desc_len: desc.length,
    robots,
    canonical_ok: canonical === `https://www.sahihicc.com${route === "/" ? "" : route}` || (route === "/" && /sahihicc\.com\/?$/.test(canonical)),
    h1_count: (mainNoScripts.match(/<h1\b/gi) ?? []).length,
    h2_count: (mainNoScripts.match(/<h2\b/gi) ?? []).length,
    img_main: (mainNoScripts.match(/<img\b/gi) ?? []).length,
    img_body: (bodyNoScripts.match(/<img\b/gi) ?? []).length,
    canvas: (mainNoScripts.match(/<canvas\b/gi) ?? []).length,
    viewer3d: /3D model|Turn it in 3D|aria-label="[^"]*3D/i.test(mainNoScripts) || /<canvas\b/i.test(mainNoScripts),
    table: (mainNoScripts.match(/<table\b/gi) ?? []).length,
    ld: ldTypes(html),
    out_internal_all: new Set(allHrefs.filter((r) => r !== route && pages_has(r))).size,
    out_internal_main: new Set(mainHrefs.filter((r) => r !== route && pages_has(r))).size,
    out_hrefs_all: new Set(allHrefs),
    template,
    content_file: content,
    // BIHUI
    bihui_summary_words: b ? words(b.summary ?? "").length : "",
    bihui_summary_chars: b ? (b.summary ?? "").length : "",
    bihui_features: b ? b.features.length : "",
    bihui_feature_words: b ? words(b.features.join(" ")).length : "",
    bihui_skus: b ? b.skus.length : "",
    bihui_sized_rows: b ? b.skus.filter((r) => r.size && !isDoubtfulRow(r)).length : "",
    bihui_doubtful_rows: b ? b.skus.filter(isDoubtfulRow).length : "",
    bihui_code_only: b ? (b.skus.filter((r) => r.size && !isDoubtfulRow(r)).length === 0 ? "yes" : "no") : "",
    bihui_askus_in_html: b ? (mainNoScripts.match(/>Ask us</g) ?? []).length : "",
    bihui_picture: b ? (b.image && !["concrete-grinder-working-stand", "water-cooling-parts"].includes(b.slug) ? "yes" : "no") : "",
  });
}

// ---------- pass 2: inbound links ----------
const HUBS = ["/", "/products", "/blog", "/bihui", "/mapei", "/cmci", "/oriental-yuhong", "/x-calibur", "/vasa", "/sw", "/sale", "/about", "/contact", "/projects", "/specifier-pack"];
for (const p of pages.values()) {
  const linkers = [];
  for (const q of pages.values()) {
    if (q.route === p.route) continue;
    if (q.out_hrefs_all.has(p.route)) linkers.push(q.route);
  }
  p.inbound = linkers.length;
  p.inbound_routes = linkers;
  p.inbound_hubs = HUBS.filter((h) => linkers.includes(h));
  p.inbound_from_home = linkers.includes("/") ? 1 : 0;
  p.inbound_from_products = linkers.includes("/products") ? 1 : 0;
  const famHub = p.family === "home" ? null : `/${p.family}`;
  p.inbound_from_family_hub = famHub && famHub !== p.route && linkers.includes(famHub) ? 1 : famHub === p.route ? "" : 0;
  p.inbound_same_family = linkers.filter((r) => familyOf(r) === p.family).length;
  p.inbound_other_family = linkers.length - p.inbound_same_family;
  // is the only inbound source the footer/nav (i.e. linked from every page)?
  p.inbound_share = +(linkers.length / (pages.size - 1)).toFixed(2);
}

// ---------- pass 3: uniqueness within family ----------
const byFamily = new Map();
for (const p of pages.values()) {
  if (!byFamily.has(p.family)) byFamily.set(p.family, []);
  byFamily.get(p.family).push(p);
}
for (const list of byFamily.values()) {
  // word doc-frequency
  const wordDf = new Map();
  const sentDf = new Map();
  for (const p of list) {
    for (const w of p.mainWordSet) wordDf.set(w, (wordDf.get(w) ?? 0) + 1);
    for (const s of new Set(p.mainSentences)) sentDf.set(s, (sentDf.get(s) ?? 0) + 1);
  }
  for (const p of list) {
    p.family_size = list.length;
    const uniq = [...p.mainWordSet].filter((w) => wordDf.get(w) === 1);
    p.unique_words = list.length > 1 ? uniq.length : "";
    p.unique_ratio = list.length > 1 && p.mainWordSet.size ? +(uniq.length / p.mainWordSet.size).toFixed(2) : "";
    const sents = p.mainSentences;
    p.sentences = sents.length;
    // boilerplate: sentence appears verbatim in at least 3 OTHER pages of the family
    const boiler = sents.filter((s) => (sentDf.get(s) ?? 0) - 1 >= 3).length;
    p.boilerplate_ratio = sents.length && list.length >= 4 ? +(boiler / sents.length).toFixed(2) : "";
    p.distinct_sentences = sents.length ? sents.length - boiler : 0;
    // approximate "own words": words in main text whose sentences are not boilerplate
    p.nonboiler_words = words(sents.filter((s) => (sentDf.get(s) ?? 0) - 1 < 3).join(" ")).length;
  }
}
// Site-wide unique words (not in any other page at all) for a second view
const siteDf = new Map();
for (const p of pages.values()) for (const w of p.mainWordSet) siteDf.set(w, (siteDf.get(w) ?? 0) + 1);
for (const p of pages.values()) p.unique_words_site = [...p.mainWordSet].filter((w) => siteDf.get(w) === 1).length;

// ---------- pass 4: git ----------
for (const p of pages.values()) {
  const t = gitDates(p.template);
  const c = gitDates(p.content_file);
  p.template_first = t.first; p.template_last = t.last; p.template_commits_since_1109 = t.since9;
  p.content_first = c.first; p.content_last = c.last; p.content_commits_since_1109 = c.since9;
}

// ---------- CSV ----------
const cols = [
  "route", "set", "family", "depth", "html_kb", "has_main", "main_words", "body_words", "unique_words", "unique_ratio", "unique_words_site",
  "sentences", "boilerplate_ratio", "distinct_sentences", "nonboiler_words", "family_size",
  "inbound", "inbound_same_family", "inbound_other_family", "inbound_share", "inbound_from_home", "inbound_from_products", "inbound_from_family_hub", "inbound_hubs",
  "out_internal_all", "out_internal_main", "h1_count", "h2_count", "img_main", "img_body", "canvas", "viewer3d", "table",
  "ld_FAQPage", "ld_Product", "ld_BreadcrumbList", "ld_Article", "ld_types",
  "title_len", "desc_len", "robots", "canonical_ok", "title", "desc",
  "bihui_summary_words", "bihui_summary_chars", "bihui_features", "bihui_feature_words", "bihui_skus", "bihui_sized_rows", "bihui_doubtful_rows", "bihui_code_only", "bihui_askus_in_html", "bihui_picture",
  "template", "template_first", "template_last", "template_commits_since_1109", "content_file", "content_first", "content_last", "content_commits_since_1109",
];
const csvCell = (v) => {
  if (v === undefined || v === null) return "";
  if (v instanceof Set) v = [...v].join("|");
  if (Array.isArray(v)) v = v.join("|");
  v = String(v);
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
};
const rows = [...pages.values()].map((p) => ({
  ...p,
  ld_FAQPage: p.ld.has("FAQPage") ? 1 : 0,
  ld_Product: p.ld.has("Product") ? 1 : 0,
  ld_BreadcrumbList: p.ld.has("BreadcrumbList") ? 1 : 0,
  ld_Article: p.ld.has("Article") || p.ld.has("BlogPosting") || p.ld.has("TechArticle") ? 1 : 0,
  ld_types: [...p.ld].sort(),
  viewer3d: p.viewer3d ? 1 : 0,
  has_main: p.has_main ? 1 : 0,
  canonical_ok: p.canonical_ok ? 1 : 0,
}));
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "pages.csv"), [cols.join(","), ...rows.map((r) => cols.map((c) => csvCell(r[c])).join(","))].join("\n") + "\n");

// ---------- stats ----------
const num = (v) => (typeof v === "number" && Number.isFinite(v) ? v : null);
const stats = (arr) => {
  const a = arr.map(num).filter((v) => v !== null).sort((x, y) => x - y);
  if (!a.length) return { n: 0, mean: "", median: "", min: "", max: "" };
  const mean = a.reduce((s, v) => s + v, 0) / a.length;
  const median = a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
  return { n: a.length, mean: +mean.toFixed(1), median: +median.toFixed(1), min: a[0], max: a[a.length - 1] };
};
const METRICS = [
  "main_words", "body_words", "unique_words", "unique_ratio", "unique_words_site", "nonboiler_words", "boilerplate_ratio", "sentences",
  "inbound", "inbound_same_family", "inbound_other_family", "out_internal_all", "out_internal_main", "h2_count", "img_main", "canvas", "viewer3d",
  "ld_FAQPage", "ld_Product", "ld_BreadcrumbList", "title_len", "desc_len", "html_kb", "depth",
  "bihui_summary_words", "bihui_feature_words", "bihui_skus", "bihui_sized_rows", "bihui_doubtful_rows",
];
const SETS = ["INDEXED", "CNI", "UNKNOWN"];
const md = [];
md.push("# GSC indexing audit: what separates indexed pages from the rest\n");
md.push(`Built HTML: \`.next/server/app\` (${pages.size} sitemap HTML pages, all present). Sets: INDEXED ${rows.filter((r) => r.set === "INDEXED").length}, CNI ${rows.filter((r) => r.set === "CNI").length}, UNKNOWN ${rows.filter((r) => r.set === "UNKNOWN").length}, not in any list ${rows.filter((r) => r.set === "NONE").length}.\n`);
md.push("Definitions: main_words = words in `<main>` with script/style/noscript/svg removed; unique_words = words of this page's main text found in no other page of the same family (first path segment); boilerplate_ratio = share of main-text sentences (5+ words) that appear verbatim in at least 3 other pages of the family; inbound = number of other sitemap pages whose HTML contains `href=\"<route>\"`; out_internal_all = distinct sitemap routes linked from anywhere on the page (header, menu and footer included), out_internal_main = from `<main>` only.\n");

// set composition by family
md.push("## 1. Set composition by family\n");
const fams = [...byFamily.keys()].sort();
md.push("| family | pages | INDEXED | CNI | UNKNOWN |\n|---|---|---|---|---|");
for (const f of fams) {
  const l = rows.filter((r) => r.family === f);
  md.push(`| ${f} | ${l.length} | ${l.filter((r) => r.set === "INDEXED").length} | ${l.filter((r) => r.set === "CNI").length} | ${l.filter((r) => r.set === "UNKNOWN").length} |`);
}
md.push("");

// medians per set
md.push("## 2. Per-set medians (mean in brackets), all pages\n");
md.push("| metric | INDEXED | CNI | UNKNOWN |\n|---|---|---|---|");
const sep = [];
for (const m of METRICS) {
  const cells = SETS.map((s) => stats(rows.filter((r) => r.set === s).map((r) => r[m])));
  if (cells.every((c) => c.n === 0)) continue;
  md.push(`| ${m} | ${cells.map((c) => (c.n ? `${c.median} (${c.mean}) n=${c.n}` : "-")).join(" | ")} |`);
  const i = cells[0], c = cells[1];
  if (i.n && c.n && (i.median || c.median)) {
    const base = Math.max(Math.abs(i.median), Math.abs(c.median));
    sep.push({ m, scope: "all", idx: i.median, cni: c.median, rel: base ? +(Math.abs(i.median - c.median) / base).toFixed(2) : 0 });
  }
}
md.push("");

// per family within each set
md.push("## 3. Per-family medians, INDEXED vs CNI vs UNKNOWN\n");
const FAM_METRICS = ["main_words", "unique_words", "nonboiler_words", "boilerplate_ratio", "inbound", "inbound_other_family", "out_internal_main", "h2_count", "img_main", "viewer3d", "ld_Product", "ld_FAQPage", "title_len", "desc_len"];
for (const f of fams) {
  const l = rows.filter((r) => r.family === f);
  const present = SETS.filter((s) => l.some((r) => r.set === s));
  if (present.length < 2) continue;
  md.push(`### ${f} (${l.length} pages)\n`);
  md.push(`| metric | ${present.map((s) => `${s} (n=${l.filter((r) => r.set === s).length})`).join(" | ")} |\n|---|${present.map(() => "---").join("|")}|`);
  for (const m of FAM_METRICS) {
    const cells = present.map((s) => stats(l.filter((r) => r.set === s).map((r) => r[m])));
    if (cells.every((c) => c.n === 0)) continue;
    md.push(`| ${m} | ${cells.map((c) => (c.n ? `${c.median} (${c.mean})` : "-")).join(" | ")} |`);
    if (present.includes("INDEXED") && present.includes("CNI")) {
      const i = cells[present.indexOf("INDEXED")], c = cells[present.indexOf("CNI")];
      const base = Math.max(Math.abs(i.median), Math.abs(c.median));
      if (i.n >= 3 && c.n >= 3 && base) sep.push({ m, scope: f, idx: i.median, cni: c.median, rel: +(Math.abs(i.median - c.median) / base).toFixed(2), ni: i.n, nc: c.n });
    }
  }
  md.push("");
}

// ranking of separation
md.push("## 4. Metrics ranked by relative gap of medians (INDEXED vs CNI)\n");
md.push("rel = |median(INDEXED) - median(CNI)| / max of the two. Only groups with at least 3 pages on each side.\n");
md.push("| scope | metric | INDEXED median | CNI median | rel gap |\n|---|---|---|---|---|");
for (const s of sep.filter((x) => x.scope === "all" || (x.ni >= 3 && x.nc >= 3)).sort((a, b) => b.rel - a.rel).slice(0, 40)) {
  md.push(`| ${s.scope} | ${s.m} | ${s.idx} | ${s.cni} | ${s.rel} |`);
}
md.push("");

// BIHUI specific
md.push("## 5. BIHUI pages\n");
const bi = rows.filter((r) => r.family === "bihui" && r.depth === 2);
md.push(`${bi.length} tool pages. Code-only pages (no row with a usable size): ${bi.filter((r) => r.bihui_code_only === "yes").length}; pages with at least one doubtful row (shown as "Ask us"): ${bi.filter((r) => r.bihui_doubtful_rows > 0).length}; pages without a picture: ${bi.filter((r) => r.bihui_picture === "no").length}.\n`);
md.push("| set | n | median summary words | median feature words | median skus | code-only | with doubtful row | with 3D | median main_words | median unique_words | median inbound |\n|---|---|---|---|---|---|---|---|---|---|---|");
for (const s of SETS) {
  const l = bi.filter((r) => r.set === s);
  if (!l.length) continue;
  md.push(`| ${s} | ${l.length} | ${stats(l.map((r) => r.bihui_summary_words)).median} | ${stats(l.map((r) => r.bihui_feature_words)).median} | ${stats(l.map((r) => r.bihui_skus)).median} | ${l.filter((r) => r.bihui_code_only === "yes").length} | ${l.filter((r) => r.bihui_doubtful_rows > 0).length} | ${l.filter((r) => r.viewer3d).length} | ${stats(l.map((r) => r.main_words)).median} | ${stats(l.map((r) => r.unique_words)).median} | ${stats(l.map((r) => r.inbound)).median} |`);
}
md.push("");
md.push("Doubtful-row and code-only BIHUI pages:\n");
md.push("| route | set | skus | sized rows | doubtful rows | code-only | main_words | unique_words | inbound |\n|---|---|---|---|---|---|---|---|---|");
for (const r of bi.filter((r) => r.bihui_doubtful_rows > 0 || r.bihui_code_only === "yes").sort((a, b) => a.route.localeCompare(b.route))) {
  md.push(`| ${r.route} | ${r.set} | ${r.bihui_skus} | ${r.bihui_sized_rows} | ${r.bihui_doubtful_rows} | ${r.bihui_code_only} | ${r.main_words} | ${r.unique_words} | ${r.inbound} |`);
}
md.push("");

// thinnest and least linked
const tbl = (list, cols) => {
  md.push(`| ${cols.join(" | ")} |\n|${cols.map(() => "---").join("|")}|`);
  for (const r of list) md.push(`| ${cols.map((c) => csvCell(r[c]).replace(/\|/g, "/")).join(" | ")} |`);
  md.push("");
};
md.push("## 6. The 15 thinnest pages (by main_words)\n");
tbl([...rows].sort((a, b) => a.main_words - b.main_words).slice(0, 15), ["route", "set", "main_words", "unique_words", "nonboiler_words", "boilerplate_ratio", "inbound", "h2_count", "img_main"]);
md.push("## 6b. The 15 pages with fewest non-boilerplate words (own sentences, family view)\n");
tbl([...rows].filter((r) => r.family_size >= 4).sort((a, b) => a.nonboiler_words - b.nonboiler_words).slice(0, 15), ["route", "set", "main_words", "unique_words", "nonboiler_words", "boilerplate_ratio", "inbound"]);
md.push("## 7. The 15 least-linked pages (by inbound)\n");
tbl([...rows].sort((a, b) => a.inbound - b.inbound || a.inbound_other_family - b.inbound_other_family).slice(0, 15), ["route", "set", "inbound", "inbound_same_family", "inbound_other_family", "inbound_hubs", "main_words"]);
md.push("## 7b. Least-linked from OTHER families (no cross-family inbound at all)\n");
tbl([...rows].filter((r) => r.inbound_other_family === 0).sort((a, b) => a.inbound - b.inbound), ["route", "set", "inbound", "inbound_same_family", "inbound_hubs"]);

// inbound distribution by set: how many pages are linked only by their family?
md.push("## 8. Link structure by set\n");
md.push("| set | n | median inbound | linked from / | linked from /products | linked from family hub | zero cross-family inbound | inbound <= 3 |\n|---|---|---|---|---|---|---|---|");
for (const s of SETS) {
  const l = rows.filter((r) => r.set === s);
  md.push(`| ${s} | ${l.length} | ${stats(l.map((r) => r.inbound)).median} | ${l.filter((r) => r.inbound_from_home).length} | ${l.filter((r) => r.inbound_from_products).length} | ${l.filter((r) => r.inbound_from_family_hub === 1).length} of ${l.filter((r) => r.inbound_from_family_hub !== "").length} | ${l.filter((r) => r.inbound_other_family === 0).length} | ${l.filter((r) => r.inbound <= 3).length} |`);
}
md.push("");

// structure flags by set
md.push("## 9. Structural flags by set (count of pages)\n");
md.push("| set | n | no `<main>` | h2 = 0 | img_main = 0 | 3D/canvas | FAQPage | Product | BreadcrumbList | title > 60 | desc > 160 | desc < 70 | robots not index | canonical mismatch |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");
for (const s of SETS) {
  const l = rows.filter((r) => r.set === s);
  md.push(`| ${s} | ${l.length} | ${l.filter((r) => !r.has_main).length} | ${l.filter((r) => r.h2_count === 0).length} | ${l.filter((r) => r.img_main === 0).length} | ${l.filter((r) => r.viewer3d).length} | ${l.filter((r) => r.ld_FAQPage).length} | ${l.filter((r) => r.ld_Product).length} | ${l.filter((r) => r.ld_BreadcrumbList).length} | ${l.filter((r) => r.title_len > 60).length} | ${l.filter((r) => r.desc_len > 160).length} | ${l.filter((r) => r.desc_len < 70).length} | ${l.filter((r) => !/index/.test(r.robots) || /noindex/.test(r.robots)).length} | ${l.filter((r) => !r.canonical_ok).length} |`);
}
md.push("");

// git recency
md.push("## 10. Recency (git)\n");
md.push("Template = the `page.tsx` that renders the route; content = the data file for the route where one exists. Dates are the first and last commit touching that file; `since 11-09` counts commits from 2026-11-09 on. The 2026-11-11 commit 1b9dcb9 (metadata pass) touched almost every template.\n");
md.push("| set | n | template first-commit dates | content last-commit dates | median template commits since 11-09 |\n|---|---|---|---|---|");
const hist = (vals) => {
  const m = new Map();
  for (const v of vals) m.set(v || "n/a", (m.get(v || "n/a") ?? 0) + 1);
  return [...m].sort().map(([k, v]) => `${k}: ${v}`).join(", ");
};
for (const s of SETS) {
  const l = rows.filter((r) => r.set === s);
  md.push(`| ${s} | ${l.length} | ${hist(l.map((r) => r.template_first))} | ${hist(l.map((r) => r.content_last))} | ${stats(l.map((r) => r.template_commits_since_1109)).median} |`);
}
md.push("");
md.push("Template first-commit date by set and family:\n");
md.push("| family | INDEXED | CNI | UNKNOWN |\n|---|---|---|---|");
for (const f of fams) {
  const l = rows.filter((r) => r.family === f);
  md.push(`| ${f} | ${SETS.map((s) => hist(l.filter((r) => r.set === s).map((r) => r.template_first)) || "-").join(" | ")} |`);
}
md.push("");

// full CNI / UNKNOWN lists
md.push("## 11. Every CNI and UNKNOWN page with its numbers\n");
tbl(rows.filter((r) => r.set !== "INDEXED").sort((a, b) => a.set.localeCompare(b.set) || a.route.localeCompare(b.route)),
  ["route", "set", "main_words", "unique_words", "nonboiler_words", "boilerplate_ratio", "inbound", "inbound_other_family", "inbound_hubs", "h2_count", "img_main", "viewer3d", "ld_Product", "title_len", "desc_len"]);

fs.writeFileSync(path.join(OUT, "summary-raw.md"), md.join("\n"));
console.log(md.join("\n"));
