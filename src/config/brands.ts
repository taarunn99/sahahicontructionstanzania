/**
 * The brands Sahihi distributes. Order = display order everywhere.
 *
 * FACT LAW: authorization wording follows the owner's documents exactly.
 * The company introduction letter says: "We are an authorized distributor of
 * leading international construction chemical brands" and names Mapei,
 * Oriental Yuhong and Xcalibur. CMCI and BIHUI appear only as logos on the
 * director's business card, so their `authorization` stays neutral until the
 * owner supplies the appointment letters (docs/OPEN-QUESTIONS.md Q2).
 *
 * Logos are the vector art from the business card, in ORIGINAL colours
 * (trademark respect - the one sanctioned palette exception).
 */
export type BrandSlug =
  "mapei" | "oriental-yuhong" | "x-calibur" | "cmci" | "bihui";

export type Brand = {
  slug: BrandSlug;
  /** Brand name exactly as the brand writes it. */
  name: string;
  /** Short form used on packs and logos, when different. */
  shortName?: string;
  origin: string;
  /** Verbatim-safe one-liner. From the intro letter where one exists. */
  blurb: string;
  /** Exact relationship wording allowed in copy, titles and schema. */
  authorization: string;
  /** Source of the authorization wording. */
  authorizationSource: string;
  /** true once a product list for this brand is in the catalogue. */
  catalogued: boolean;
  logo: { src: string; width: number; height: number; display: number };
};

export const brands: Brand[] = [
  {
    slug: "mapei",
    name: "Mapei",
    origin: "Italy",
    blurb:
      "A globally recognized manufacturer of construction chemical products and systems.",
    authorization: "Authorized distributor",
    authorizationSource: "Company introduction letter, Our Global Partners",
    catalogued: true,
    logo: { src: "/brands/mapei.svg", width: 279, height: 69, display: 30 },
  },
  {
    slug: "oriental-yuhong",
    name: "Oriental Yuhong",
    shortName: "OYH",
    origin: "China",
    blurb:
      "A leading provider of waterproofing and building materials solutions.",
    authorization: "Authorized distributor",
    authorizationSource: "Company introduction letter, Our Global Partners",
    catalogued: true,
    logo: { src: "/brands/oyh.svg", width: 288, height: 67, display: 30 },
  },
  {
    slug: "x-calibur",
    name: "X-Calibur",
    origin: "UAE",
    blurb:
      "A construction solutions brand offering specialized products for the building and infrastructure sector.",
    authorization: "Authorized distributor",
    authorizationSource: "Company introduction letter, Our Global Partners",
    catalogued: true,
    logo: { src: "/brands/x-calibur.svg", width: 327, height: 59, display: 28 },
  },
  {
    slug: "cmci",
    name: "CMCI",
    origin: "Saudi Arabia",
    blurb: "Cementitious fireproofing for plant, buildings and tunnels.",
    authorization: "Brand partner",
    authorizationSource:
      "Director's business card; range finalised by the owner, 2026-11-07",
    catalogued: true,
    logo: { src: "/brands/cmci.svg", width: 229, height: 84, display: 38 },
  },
  {
    slug: "bihui",
    name: "BIHUI",
    origin: "",
    blurb: "Professional tiling tools.",
    authorization: "Brand partner",
    authorizationSource: "Director's business card (logo only)",
    catalogued: false,
    logo: { src: "/brands/bihui.svg", width: 297, height: 65, display: 28 },
  },
];

export const brandBySlug = Object.fromEntries(
  brands.map((brand) => [brand.slug, brand]),
) as Record<BrandSlug, Brand>;
