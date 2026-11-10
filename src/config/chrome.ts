import { SYSTEMS as SPORTS_SYSTEMS } from "@/config/oyh-sports-systems";
import { brands } from "@/config/brands";
import {
  lineHref,
  lines,
  productHref,
  products,
  productsInLine,
} from "@/config/catalogue";
import { bihuiFamilies, bihuiHref, bihuiName } from "@/config/bihui";
import { cmciHref, cmciProducts } from "@/config/cmci";
import { searchEntry, type SearchEntry } from "@/lib/search";

/**
 * Everything the header and footer need from the catalogue, computed once
 * on the server and passed to the client chrome as plain props. The
 * catalogue itself never enters the client bundle, and counts in the menus
 * can never drift from the data.
 */
export type ChromeLink = { label: string; href: string; sub: string };

export type ChromeNav = {
  /** The lead brand and its lines (left column of the mega panel). */
  lead: { label: string; href: string; lines: ChromeLink[] };
  /** The other brands (right column of the mega panel). */
  brands: ChromeLink[];
  /** Footer brand list. */
  footerBrands: { label: string; href: string }[];
  /** Every product line, in catalogue order (mobile menu, footer list). */
  all: ChromeLink[];
  /** System pages that are not a product line: menus on desktop and phone, footer. */
  systems: ChromeLink[];
};

const count = (n: number) => `${n} ${n === 1 ? "product" : "products"}`;

const lineLink = (line: (typeof lines)[number]): ChromeLink => ({
  label: line.label,
  href: lineHref(line),
  sub: count(productsInLine(line.slug).length),
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

const [leadBrand, ...otherBrands] = brands;

export const chromeNav: ChromeNav = {
  lead: {
    label: `${leadBrand.name} - ${leadBrand.authorization.toLowerCase()}`,
    href: brandHref(leadBrand.slug),
    lines: lines.filter((line) => line.brand === leadBrand.slug).map(lineLink),
  },
  brands: otherBrands.map((brand) => ({
    label: brand.name,
    href: brandHref(brand.slug),
    sub:
      brand.slug === "bihui"
        ? `${bihuiFamilies.length} tools`
        : brand.slug === "vasa"
          ? "SPC, LVT, wall panels"
          : brand.slug === "cmci"
            ? count(cmciProducts.length)
            : brand.catalogued
              ? count(products.filter((p) => p.brand === brand.slug).length)
              : "Range on request",
  })),
  footerBrands: brands.map((brand) => ({
    label: brand.name,
    href: brandHref(brand.slug),
  })),
  all: lines.map(lineLink),
  systems: [
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
  ],
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
  ...cmciProducts.map((product) =>
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
