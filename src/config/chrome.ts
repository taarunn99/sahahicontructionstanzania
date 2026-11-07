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
    "fireproofing fire protection",
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
    "Oriental Yuhong in Tanzania",
    "Waterproofing coatings, joint sealant, waterplug",
    "/oriental-yuhong",
    "Pages",
    "oyh yuhong",
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
