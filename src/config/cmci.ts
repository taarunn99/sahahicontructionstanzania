import type { Product } from "@/config/catalogue";
import tdsManifest from "@/config/cmci-tds.json";
import { cmciSeo, type CmciSlug } from "@/config/seo/cmci";
import { composeItemTitle, seoDescription } from "@/lib/seo";

/**
 * CMCI: cementitious fireproofing. The owner finalised this range on
 * 2026-11-07: three lines and the products inside them, nothing else.
 *
 * Page wording never presents CMCI as a product's maker, and names no other
 * company in that role (GOVERNANCE.md). Values come from each product's data
 * sheet; `npm test` checks src/content/cmci against those sheets, published
 * unaltered in public/tds/cmci (owner, 2026-11-07).
 */

export type CmciLineSlug =
  | "petrochemical"
  | "commercial"
  | "tunnels"
  | "accessories";

export type CmciProduct = Product & {
  lines: CmciLineSlug[];
  /** Minimum or nominal dry density as the data sheet prints it, kg/m3. */
  density: number;
  oneLine: string;
  alsoKnownAs?: string;
};

const fireproofing = (
  entry: Pick<
    CmciProduct,
    | "slug"
    | "name"
    | "type"
    | "summary"
    | "packs"
    | "lines"
    | "density"
    | "oneLine"
    | "alsoKnownAs"
    | "ref"
  >,
): CmciProduct => ({
  ...entry,
  brand: "cmci",
  line: "cmci",
  sourceName: entry.name,
});

export const cmciProducts: CmciProduct[] = [
  fireproofing({
    slug: "avikote-av-800",
    name: "Avikote AV 800",
    type: "Petrochemical grade fireproofing",
    summary:
      "Portland cement-based fireproofing for petrochemical and refinery facilities, sprayed or trowelled.",
    oneLine: "High density fireproofing for petrochemical plant.",
    packs: ["22.3 kg bag"],
    lines: ["petrochemical", "tunnels"],
    density: 800,
    alsoKnownAs: "Avikote AV800, AV-800",
    ref: "C1",
  }),
  fireproofing({
    slug: "avikote-av-650",
    name: "Avikote AV 650",
    type: "Petrochemical grade fireproofing",
    summary:
      "Portland cement-based fireproofing with corrosion inhibitors, for petrochemical and refinery facilities.",
    oneLine: "Fireproofing with corrosion inhibitors for petrochemical plant.",
    packs: ["22.27 kg bag"],
    lines: ["petrochemical", "tunnels"],
    density: 640,
    alsoKnownAs: "Avikote AV650, AV-650",
    ref: "C2",
  }),
  fireproofing({
    slug: "monokote-z-156",
    name: "Monokote Z-156T",
    type: "Ultra high density fireproofing",
    summary:
      "Ultra high density cementitious fireproofing for severe environmental exposure.",
    oneLine: "Ultra high density fireproofing for severe exposure.",
    packs: ["Bag"],
    lines: ["commercial"],
    density: 800,
    alsoKnownAs: "Monokote Z156, Z-156",
    ref: "C3",
  }),
  fireproofing({
    slug: "monokote-z-146",
    name: "Monokote Z-146",
    type: "High density fireproofing",
    summary:
      "High density cementitious fireproofing for parking garages, exterior exposure and clean rooms.",
    oneLine: "High density fireproofing for hard-wearing areas.",
    packs: ["Bag"],
    lines: ["commercial"],
    density: 640,
    alsoKnownAs: "Monokote Z146",
    ref: "C4",
  }),
  fireproofing({
    slug: "monokote-z-106-hy",
    name: "Monokote Z-106/HY",
    type: "Medium density fireproofing",
    summary:
      "Medium density Portland cement-based fireproofing, hard and moisture resistant, for interior areas.",
    oneLine: "Medium density fireproofing with a quick set.",
    packs: ["Bag"],
    lines: ["commercial"],
    density: 352,
    alsoKnownAs: "Monokote Z106HY, Z-106HY",
    ref: "C5",
  }),
  fireproofing({
    slug: "monokote-z-106",
    name: "Monokote Z-106",
    type: "Medium density fireproofing",
    summary:
      "Medium density fireproofing, spray applied to structural steel and steel decking.",
    oneLine: "Medium density fireproofing for steel and decking.",
    packs: ["Bag"],
    lines: ["commercial"],
    density: 352,
    alsoKnownAs: "Monokote Z106",
    ref: "C6",
  }),
  fireproofing({
    slug: "monokote-mk-6-hy",
    name: "Monokote MK-6/HY",
    type: "Standard density fireproofing",
    summary:
      "Single component fireproofing plaster for steel columns, beams, joists, trusses and decking.",
    oneLine: "Pumpable fireproofing plaster for structural steel.",
    packs: ["Bag"],
    lines: ["commercial"],
    density: 240,
    alsoKnownAs: "Monokote MK6HY, MK-6HY",
    ref: "C7",
  }),
  fireproofing({
    slug: "monokote-mk-6s",
    name: "Monokote MK-6s",
    type: "Standard density fireproofing",
    summary:
      "Gypsum based fireproofing, spray applied to structural steel and decking on small projects.",
    oneLine: "Gypsum based fireproofing for smaller projects.",
    packs: ["Bag"],
    lines: ["commercial"],
    density: 305,
    alsoKnownAs: "Monokote MK6S, MK-6S",
    ref: "C8",
  }),
];

/**
 * Accessories for the fireproofing (owner's folder, 2026-11-11, "Proposed
 * accessories system"): a protective topcoat, a setting accelerator and a
 * bonding agent. Not fireproofing, so no density. Kept out of
 * `cmciProducts`, which stays the fireproofing range (the density ladder
 * and the fire rated cement page list only fireproofing).
 */
export type CmciAccessory = Omit<CmciProduct, "density"> & { density?: never };

const accessory = (
  entry: Pick<
    CmciAccessory,
    "slug" | "name" | "type" | "summary" | "packs" | "oneLine" | "ref"
  >,
): CmciAccessory => ({
  ...entry,
  brand: "cmci",
  line: "cmci",
  sourceName: entry.name,
  lines: ["accessories"],
});

export const cmciAccessories: CmciAccessory[] = [
  accessory({
    slug: "aquakote",
    name: "Aquakote",
    type: "Elastomeric anti-carbonation topcoat",
    summary:
      "Single component acrylic topcoat that protects cementitious fireproofing from carbon dioxide, chloride ions and weather, and lets moisture vapour pass.",
    oneLine: "Protective topcoat over cementitious fireproofing.",
    packs: ["Pail"],
    ref: "C9",
  }),
  accessory({
    slug: "monokote-accelerator",
    name: "Monokote Accelerator",
    type: "Setting accelerator",
    summary:
      "Aluminium sulphate granules that increase the yield and speed the set of Monokote MK-6/HY sprayed with Monokote injection machines.",
    oneLine: "Faster set and more yield from Monokote MK-6/HY.",
    packs: ["27.2 kg bag"],
    ref: "C10",
  }),
  accessory({
    slug: "fr-bonding-agent",
    name: "FR Bonding Agent",
    type: "Bonding agent and surface sealer",
    summary:
      "Water based styrene acrylic emulsion, used as a bonding agent under cementitious fireproofing or as a surface sealer over it.",
    oneLine: "Bonding agent and sealer for fireproofing.",
    packs: ["On request"],
    ref: "C11",
  }),
];

/** Every CMCI page: the fireproofing range, then the accessories. */
export const cmciAll: (CmciProduct | CmciAccessory)[] = [
  ...cmciProducts,
  ...cmciAccessories,
];

export const cmciLines: {
  slug: CmciLineSlug;
  label: string;
  line: string;
  picture: { src: string; width: number; height: number };
  alt: string;
  stage: string;
}[] = [
  {
    slug: "petrochemical",
    label: "Petrochemical",
    line: "Cementitious fireproofing for refineries, gas processing and chemical plant.",
    picture: {
      src: "/images/cmci/petrochemical.webp",
      width: 1074,
      height: 743,
    },
    alt: "Steel pipe racks at a processing plant",
    stage: "bg-surface",
  },
  {
    slug: "commercial",
    label: "Commercial",
    line: "Standard, medium and high density fireproofing for structural steel in buildings.",
    picture: { src: "/images/cmci/commercial.webp", width: 1200, height: 735 },
    alt: "An applicator spraying fireproofing onto a steel column",
    stage: "bg-accent",
  },
  {
    slug: "tunnels",
    label: "Tunnels",
    line: "Cementitious fireproofing for tunnels and severe exposure.",
    picture: { src: "/images/cmci/tunnels.webp", width: 1024, height: 688 },
    alt: "A road tunnel with a sprayed grey lining",
    stage: "bg-line",
  },
  {
    slug: "accessories",
    label: "Accessories",
    line: "A protective topcoat, a setting accelerator and a bonding agent for the fireproofing.",
    picture: { src: "/images/cmci/commercial.webp", width: 1200, height: 735 },
    alt: "An applicator spraying fireproofing onto a steel column",
    stage: "bg-surface",
  },
];

export const cmciProductBySlug = Object.fromEntries(
  cmciAll.map((product) => [product.slug, product]),
) as Record<string, CmciProduct | CmciAccessory>;

export const cmciTds = tdsManifest as Record<
  string,
  { file: string; pages: number; bytes: number }
>;

export const cmciHref = (product: { slug: string }) => `/cmci/${product.slug}`;

export const cmciInLine = (line: CmciLineSlug) =>
  cmciAll.filter((product) => product.lines.includes(line));

const cmciSeoRow = (product: Product) => cmciSeo[product.slug as CmciSlug];

/**
 * Item title from the registry row (src/config/seo/cmci.ts): the override
 * when the row has one, otherwise the one item pattern with the row's buyer
 * type words ("fireproofing" is the fallback).
 */
export function cmciItemTitle(product: Product) {
  const row = cmciSeoRow(product);
  return (
    row?.titleOverride ??
    composeItemTitle(product.name, "CMCI", row?.typeWords ?? "fireproofing", {
      geo: row?.geo,
    })
  );
}

/** Item description: the hand-written row, else the composed fallback. */
export function cmciItemDescription(product: Product) {
  return (
    cmciSeoRow(product)?.description ??
    seoDescription(
      `${product.name}: ${product.summary}`,
      "Supplied by Sahihi in Dar es Salaam.",
      "Technical values and data sheet to download.",
    )
  );
}
