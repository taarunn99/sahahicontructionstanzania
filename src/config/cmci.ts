import type { Product } from "@/config/catalogue";
import tdsManifest from "@/config/cmci-tds.json";

/**
 * CMCI: cementitious fireproofing. The owner finalised this range on
 * 2026-11-07: three lines and the products inside them, nothing else.
 *
 * Page wording never presents CMCI as a product's maker, and names no other
 * company in that role (GOVERNANCE.md). Values come from each product's data
 * sheet; `npm test` checks src/content/cmci against those sheets, published
 * unaltered in public/tds/cmci (owner, 2026-11-07).
 */

export type CmciLineSlug = "petrochemical" | "commercial" | "tunnels";

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
];

export const cmciProductBySlug = Object.fromEntries(
  cmciProducts.map((product) => [product.slug, product]),
) as Record<string, CmciProduct>;

export const cmciTds = tdsManifest as Record<
  string,
  { file: string; pages: number; bytes: number }
>;

export const cmciHref = (product: { slug: string }) => `/cmci/${product.slug}`;

export const cmciInLine = (line: CmciLineSlug) =>
  cmciProducts.filter((product) => product.lines.includes(line));

/** Longest candidate that fits the 60-character title budget. */
export function cmciItemTitle(product: Product) {
  const candidates = [
    `${product.name} Tanzania - CMCI Fireproofing | Sahihi`,
    `${product.name} Tanzania - CMCI Fireproofing`,
    `${product.name} Fireproofing Tanzania`,
  ];
  return candidates.find((title) => title.length <= 60) ?? candidates[2];
}
