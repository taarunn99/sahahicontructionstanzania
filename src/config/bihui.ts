import catalogue from "./bihui-catalogue.json";
import models from "./bihui-models.json";

/**
 * BIHUI: tiling tools. The only source is the catalogue the owner supplied
 * (extraction report: docs/BIHUI-EXTRACTION.md). Availability, from the owner
 * on 2026-11-06: anything can be arranged, 4 days after confirmation.
 * FACT LAW:
 *  - No prices: the catalogue prints none and none are added.
 *  - A row whose printed size contradicts its own code shows the code alone,
 *    with "ask us": see isDoubtfulRow. Nothing is silently corrected.
 *  - Pictures listed in WITHHELD are not published. One carries another
 *    company's watermark, the other is too small to confirm what it shows.
 *  - The 3D models are generated from the catalogue photograph; the far side
 *    is an estimate and the caption says so.
 */

export type BihuiSku = {
  sr?: number;
  sku: string;
  description: string;
  size?: string;
  flag?: string;
};

export type BihuiFamily = {
  slug: string;
  name: string;
  nameClean?: string;
  category: string;
  summary: string;
  features: string[];
  page: number;
  skus: BihuiSku[];
  image: string | null;
};

const WITHHELD = new Set([
  "concrete-grinder-working-stand",
  "water-cooling-parts",
]);

export const bihuiFamilies = catalogue as unknown as BihuiFamily[];

export const bihuiFamilyBySlug = Object.fromEntries(
  bihuiFamilies.map((family) => [family.slug, family]),
) as Record<string, BihuiFamily>;

export const bihuiName = (family: BihuiFamily) =>
  family.nameClean ?? family.name;

export const bihuiHref = (family: BihuiFamily) => `/bihui/${family.slug}`;

/** Categories in catalogue order, each with its families. */
export const bihuiCategories = [
  ...new Set(bihuiFamilies.map((family) => family.category)),
].map((name) => ({
  name,
  id: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
  families: bihuiFamilies.filter((family) => family.category === name),
}));

export const bihuiSkuCount = new Set(
  bihuiFamilies.flatMap((family) => family.skus.map((row) => row.sku)),
).size;

export const bihuiPicture = (family: BihuiFamily) =>
  family.image && !WITHHELD.has(family.slug)
    ? { src: `/products/bihui/${family.slug}.webp`, width: 700, height: 700 }
    : null;

const modelPaths = models as Record<string, string>;

export const bihuiModel = (family: BihuiFamily): string | null =>
  modelPaths[family.slug] ?? null;

export const bihuiModelCount = Object.keys(modelPaths).length;

/** Rows the extraction report questions in the family's notes, not the row's. */
const DOUBTFUL_CODES = new Set(["MM1500", "LFMC5", "LLG05", "BLSE100"]);

/** A row whose printed text contradicts itself. Duplicate serial numbers and
 *  typesetting slips are harmless: they do not change what the tool is. */
export const isDoubtfulRow = (row: BihuiSku) =>
  DOUBTFUL_CODES.has(row.sku) ||
  (Boolean(row.flag) &&
    /contradict|swapped|identical|does not fit|two different|plausible|copied|reads as|under a code|differs/i.test(
      row.flag ?? "",
    ));

export const bihuiItemTitle = (family: BihuiFamily) => {
  const name = bihuiName(family);
  const long = `${name} - BIHUI Tanzania | Sahihi`;
  if (long.length <= 60) return long;
  const mid = `${name} - BIHUI Tanzania`;
  if (mid.length <= 60) return mid;
  return `${name} - BIHUI`.slice(0, 60);
};
