import { SYSTEMS as SPORTS_SYSTEMS } from "@/config/oyh-sports-systems";
import { brands } from "@/config/brands";
import {
  lineHref,
  lines,
  productHref,
  products,
  productsInLine,
} from "@/config/catalogue";
import {
  bihuiCategories,
  bihuiFamilies,
  bihuiHref,
  bihuiName,
} from "@/config/bihui";
import { cmciAll, cmciHref } from "@/config/cmci";
import { searchEntry, type SearchEntry } from "@/lib/search";

/**
 * Everything the header and footer need from the catalogue, computed once
 * on the server and passed to the client chrome as plain props. The
 * catalogue itself never enters the client bundle, and counts in the menus
 * can never drift from the data.
 */
export type ChromeLink = {
  label: string;
  href: string;
  sub: string;
  /** The live count alone ("12"), for the compact Products menu. */
  count?: string;
};

/**
 * One row of the Products menu tree. A row with children gets an arrow that
 * opens them in place (owner, 2026-11-10: "an arrow which would be a
 * dropdown"), so every brand, line, product, system and tool page can be
 * reached from the menu.
 */
export type MenuNode = {
  label: string;
  href: string;
  /** The live count alone ("12"). */
  count?: string;
  /** A short grey note after the label ("authorized distributor"). */
  note?: string;
  /** A tag at the row's end in place of a count (the brand of a system). */
  tag?: string;
  children?: MenuNode[];
};

export type ChromeNav = {
  /** Every brand, with its lines, products, systems or tools beneath it. */
  brandTree: MenuNode[];
  /** Footer brand list. */
  footerBrands: { label: string; href: string }[];
  /** Every product line, in catalogue order (mobile menu, footer list). */
  all: ChromeLink[];
  /** The selectors and the specifier pack: "Find by job" in the menus. */
  jobTree: MenuNode[];
  /** A brand's system pages (sports, HDPE, fire, Vasa): "Systems" in the menus. */
  systemTree: MenuNode[];
  /** jobs then brandSystems: the footer's Systems list. */
  systems: ChromeLink[];
};

const count = (n: number) => `${n} ${n === 1 ? "product" : "products"}`;

const lineLink = (line: (typeof lines)[number]): ChromeLink => ({
  label: line.label,
  href: lineHref(line),
  sub: count(productsInLine(line.slug).length),
  count: String(productsInLine(line.slug).length),
});

/** Brand hubs that exist; the rest are anchors on /products for now. */
const HUBS = new Set([
  "mapei",
  "x-calibur",
  "oriental-yuhong",
  "bihui",
  "cmci",
  "vasa",
]);
const brandHref = (slug: string) =>
  HUBS.has(slug) ? `/${slug}` : `/products#${slug}`;

const JOBS: ChromeLink[] = [
  {
    label: "Waterproofing selector",
    href: "/solutions/waterproofing",
    sub: "By part of the building",
  },
  {
    label: "Concrete repair selector",
    href: "/solutions/concrete-repair",
    sub: "By the damage",
  },
  {
    label: "Tile installation selector",
    href: "/solutions/tile-installation",
    sub: "Adhesive, grout and care by job",
  },
  {
    label: "Specifier pack",
    href: "/specifier-pack",
    sub: "BOQ clauses for consultants and QS",
  },
];

const BRAND_SYSTEMS: ChromeLink[] = [
  {
    label: "Sports flooring",
    href: "/oriental-yuhong/sports-flooring",
    sub: `Oriental Yuhong · ${SPORTS_SYSTEMS.length} systems`,
  },
  {
    label: "HDPE waterproofing",
    href: "/oriental-yuhong/hdpe-waterproofing",
    sub: "Oriental Yuhong",
  },
  {
    label: "Fire rated cement",
    href: "/cmci/fire-rated-cement",
    sub: "CMCI",
  },
  { label: "SPC flooring", href: "/vasa/spc-flooring", sub: "Vasa" },
  { label: "LVT flooring", href: "/vasa/lvt-flooring", sub: "Vasa" },
  { label: "Wall panels", href: "/vasa/wall-panels", sub: "Vasa" },
];

const productNodes = (brand: string): MenuNode[] =>
  products
    .filter((product) => product.brand === brand)
    .map((product) => ({ label: product.name, href: productHref(product) }));

const withCount = (node: MenuNode): MenuNode => ({
  ...node,
  count: node.children ? String(node.children.length) : node.count,
});

/** What opens under each brand's arrow. */
const BRAND_CHILDREN: Record<string, () => MenuNode[]> = {
  mapei: () =>
    lines
      .filter((line) => line.brand === "mapei")
      .map((line) => ({
        label: line.label,
        href: lineHref(line),
        count: String(productsInLine(line.slug).length),
        children: productsInLine(line.slug).map((product) => ({
          label: product.name,
          href: productHref(product),
        })),
      })),
  "oriental-yuhong": () => [
    withCount({
      label: "Sports flooring",
      href: "/oriental-yuhong/sports-flooring",
      children: SPORTS_SYSTEMS.map((system) => ({
        label: system.name,
        href: `/oriental-yuhong/sports-flooring/${system.slug}`,
      })),
    }),
    { label: "HDPE waterproofing", href: "/oriental-yuhong/hdpe-waterproofing" },
    ...productNodes("oriental-yuhong"),
  ],
  vasa: () => [
    { label: "SPC flooring", href: "/vasa/spc-flooring" },
    { label: "LVT flooring", href: "/vasa/lvt-flooring" },
    { label: "Wall panels", href: "/vasa/wall-panels" },
  ],
  "x-calibur": () => productNodes("x-calibur"),
  cmci: () => [
    { label: "Fire rated cement", href: "/cmci/fire-rated-cement" },
    ...cmciAll.map((product) => ({
      label: product.name,
      href: cmciHref(product),
    })),
  ],
  bihui: () =>
    bihuiCategories.map((category) => ({
      label: category.name,
      href: `/bihui#${category.id}`,
      count: String(category.families.length),
      children: category.families.map((family) => ({
        label: bihuiName(family),
        href: bihuiHref(family),
      })),
    })),
};

/** How many products a brand row counts (pages, not menu rows). */
const BRAND_COUNT: Record<string, number> = {
  mapei: products.filter((p) => p.brand === "mapei").length,
  "oriental-yuhong": products.filter((p) => p.brand === "oriental-yuhong")
    .length,
  "x-calibur": products.filter((p) => p.brand === "x-calibur").length,
  cmci: cmciAll.length,
  bihui: bihuiFamilies.length,
};

export const chromeNav: ChromeNav = {
  brandTree: brands.map((brand, index) => ({
    label: brand.name,
    href: brandHref(brand.slug),
    note: index === 0 ? brand.authorization.toLowerCase() : undefined,
    count:
      brand.slug in BRAND_COUNT ? String(BRAND_COUNT[brand.slug]) : undefined,
    children: BRAND_CHILDREN[brand.slug]?.(),
  })),
  footerBrands: brands.map((brand) => ({
    label: brand.name,
    href: brandHref(brand.slug),
  })),
  all: lines.map(lineLink),
  jobTree: JOBS.map((job) => ({
    label: job.label.replace(/ selector$/, ""),
    href: job.href,
  })),
  systemTree: BRAND_SYSTEMS.map((system) => ({
    label: system.label,
    href: system.href,
    tag: system.sub.split(" · ")[0].replace("Oriental Yuhong", "OYH"),
    children:
      system.href === "/oriental-yuhong/sports-flooring"
        ? SPORTS_SYSTEMS.map((sports) => ({
            label: sports.name,
            href: `/oriental-yuhong/sports-flooring/${sports.slug}`,
          }))
        : undefined,
  })),
  systems: [...JOBS, ...BRAND_SYSTEMS],
};

/**
 * The site search index: every page, brand, line and product. Served as a
 * static JSON file (/search-index.json) and fetched the first time the
 * search box opens, so it costs nothing on pages where nobody searches.
 */
export const searchIndex: SearchEntry[] = [
  searchEntry(
    "Mapei in Tanzania",
    "Authorized distributor: the Mapei hub",
    "/mapei",
    "Pages",
  ),
  searchEntry(
    "X-Calibur in Tanzania",
    "Epoxy floors, waterproofing, joint sealants",
    "/x-calibur",
    "Pages",
    "xcalibur x calibur",
  ),
  searchEntry(
    "CMCI in Tanzania",
    "Cementitious fireproofing: petrochemical, commercial, tunnels",
    "/cmci",
    "Pages",
    "fireproofing fire protection authorized dealer",
  ),
  searchEntry(
    "Fire rated cement in Tanzania",
    "Cementitious fireproofing for structural steel",
    "/cmci/fire-rated-cement",
    "Pages",
    "fire resistant cement fireproof cement fire proofing",
  ),
  searchEntry(
    "Vasa authorized dealer in Tanzania",
    "SPC flooring, LVT flooring and wall panels",
    "/vasa",
    "Pages",
    "vasa floor vinyl",
  ),
  searchEntry(
    "SPC flooring in Tanzania",
    "Vasa rigid core click flooring, 5 mm and 8 mm",
    "/vasa/spc-flooring",
    "Pages",
    "stone plastic composite vinyl click floor",
  ),
  searchEntry(
    "LVT flooring in Tanzania",
    "Vasa luxury vinyl tile, wood, stone and carpet looks",
    "/vasa/lvt-flooring",
    "Pages",
    "luxury vinyl tile plank",
  ),
  searchEntry(
    "Vasa wall panels in Tanzania",
    "Colored film and digital wall panels",
    "/vasa/wall-panels",
    "Pages",
    "spc wpc wall panel",
  ),
  searchEntry(
    "Waterproofing in Tanzania",
    "Which product for roofs, wet rooms, basements, tanks, pools",
    "/solutions/waterproofing",
    "Pages",
    "waterproof roof bathroom basement water tank swimming pool leak kuzuia maji",
  ),
  searchEntry(
    "Concrete repair in Tanzania",
    "Which product for spalling, cracks, structure, floors, anchoring",
    "/solutions/concrete-repair",
    "Pages",
    "repair spalling crack injection anchor grout manhole screed bonding",
  ),
  searchEntry(
    "Tile adhesive in Tanzania",
    "Which adhesive, grout, primer for which tiling job",
    "/solutions/tile-installation",
    "Pages",
    "tile adhesive grout porcelain ceramic marble pool tile on tile gypsum",
  ),
  searchEntry(
    "Specifier pack",
    "Every BOQ clause, standard and data sheet in one spreadsheet",
    "/specifier-pack",
    "Pages",
    "boq clause specification consultant quantity surveyor qs excel csv tender",
  ),
  searchEntry(
    "HDPE waterproofing in Tanzania",
    "OYH pre-applied membrane for basements and tunnels",
    "/oriental-yuhong/hdpe-waterproofing",
    "Pages",
    "pmh 3080 pre-applied membrane basement",
  ),
  searchEntry(
    "Sports flooring in Tanzania",
    "OYH running tracks, sports courts and synthetic turf",
    "/oriental-yuhong/sports-flooring",
    "Pages",
    "rubber track epdm silicon pu court artificial grass",
  ),
  ...SPORTS_SYSTEMS.map((system) =>
    searchEntry(
      `${system.name}, Oriental Yuhong`,
      "Sports flooring in Tanzania",
      `/oriental-yuhong/sports-flooring/${system.slug}`,
      "Pages",
      `${system.aka ?? ""} sports flooring`,
    ),
  ),
  ...cmciAll.map((product) =>
    searchEntry(
      product.name,
      product.type,
      cmciHref(product),
      "CMCI",
      product.alsoKnownAs,
    ),
  ),
  searchEntry(
    "OYH East Africa: Oriental Yuhong",
    "HDPE, waterproofing coatings, sealant, sports flooring",
    "/oriental-yuhong",
    "Pages",
    "oyh yuhong east africa tanzania kenya uganda",
  ),
  searchEntry(
    "BIHUI in Tanzania",
    "Tiling tools: levelling, trowels, mixers, cutters",
    "/bihui",
    "Pages",
    "bihui tools tiling",
  ),
  ...bihuiFamilies.map((family) =>
    searchEntry(
      bihuiName(family),
      `BIHUI · ${family.category}`,
      bihuiHref(family),
      "BIHUI",
      family.skus.map((row) => row.sku).join(" "),
    ),
  ),
  searchEntry(
    "Blog",
    "Guides for building in Tanzania",
    "/blog",
    "Pages",
    "journal articles guides how to",
  ),
  searchEntry("Products", "Every line we stock", "/products", "Pages"),
  searchEntry(
    "Projects",
    "Sites supplied with Mapei products",
    "/projects",
    "Pages",
    "references clients sites portfolio",
  ),
  searchEntry("About", "The company and its commitments", "/about", "Pages"),
  searchEntry(
    "Contact",
    "WhatsApp, phone, email, directions",
    "/contact",
    "Pages",
    "quote price enquiry location address",
  ),
  ...brands.map((brand) =>
    searchEntry(
      brand.name,
      brand.authorization,
      brandHref(brand.slug),
      "Brands",
      `${brand.shortName ?? ""} ${brand.origin}`,
    ),
  ),
  ...lines.map((line) =>
    searchEntry(line.label, line.blurb, lineHref(line), "Lines"),
  ),
  ...products.map((product) =>
    searchEntry(
      product.name,
      product.type,
      productHref(product),
      "Products",
      `${product.summary} ${product.classification ?? ""} ${product.brand}`,
    ),
  ),
];
