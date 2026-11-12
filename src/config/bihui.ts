import { composeItemTitle, seoDescription } from "@/lib/seo";

import catalogue from "./bihui-catalogue.json";
import folded from "./bihui-folded.json";
import models from "./bihui-models.json";
import uses from "./bihui-uses.json";
import { bihuiSeo, type BihuiSlug } from "./seo/bihui";

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

/**
 * Folded families (2026-11-12, src/config/bihui-folded.json): every row is
 * doubtful, so the page could say nothing but a code and "Ask us". They stay
 * in the catalogue and on the hub, without a page of their own; their old
 * URL redirects to the category (next.config.ts).
 */
const FOLDED = new Set<string>(folded.folded);

export const bihuiIsFolded = (family: BihuiFamily) => FOLDED.has(family.slug);

/** The families that have a page of their own. */
export const bihuiPages = bihuiFamilies.filter(
  (family) => !bihuiIsFolded(family),
);

export const bihuiCategoryId = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** A folded family's link is its place on the hub. */
export const bihuiHref = (family: BihuiFamily) =>
  bihuiIsFolded(family)
    ? `/bihui#${bihuiCategoryId(family.category)}`
    : `/bihui/${family.slug}`;

/** Categories in catalogue order, each with its families. */
export const bihuiCategories = [
  ...new Set(bihuiFamilies.map((family) => family.category)),
].map((name) => ({
  name,
  id: bihuiCategoryId(name),
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

/**
 * What each tool is for (2026-11-12, src/config/bihui-uses.json): two or
 * three sentences of trade use written for this site, the product pages the
 * tool is used with, and the guides it belongs to. Not catalogue facts: no
 * measurement or feature in a note goes beyond the family's rows. Written
 * after Search Console left half the tool pages out of the index for having
 * nothing of their own to say (docs/seo/2026-11-12/gsc-indexing.md).
 */
export type BihuiUse = { use: string; with: string[]; posts: string[] };

const USES = uses as Record<string, BihuiUse>;

export const bihuiUse = (family: BihuiFamily): BihuiUse | null =>
  USES[family.slug] ?? null;

/** The tools used with a product page, for "Tools for this job". */
export const bihuiToolsForProduct = (route: string) =>
  bihuiPages.filter((family) => USES[family.slug]?.with.includes(route));

/** The tools a guide covers, for "Tools in this guide". */
export const bihuiToolsForPost = (slug: string) =>
  bihuiPages.filter((family) => USES[family.slug]?.posts.includes(slug));

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

/** The page's registry row (src/config/seo/bihui.ts), if written. */
const bihuiSeoRow = (family: BihuiFamily) =>
  bihuiSeo[family.slug as BihuiSlug];

/**
 * SERP title (metadata pass, 2026-11-12): the registry's `titleOverride`
 * where the catalogue name carries a typo or will not fit, otherwise the
 * one item pattern. "Tanzania" only where the row says a local query exists.
 */
export const bihuiItemTitle = (family: BihuiFamily) => {
  const row = bihuiSeoRow(family);
  return (
    row?.titleOverride ??
    composeItemTitle(bihuiName(family), "BIHUI", row?.typeWords, {
      geo: row?.geo ?? false,
    })
  );
};

/** Meta description: the hand-written row, else the catalogue summary. */
export const bihuiItemDescription = (family: BihuiFamily) =>
  bihuiSeoRow(family)?.description ??
  seoDescription(
    `BIHUI ${bihuiName(family)}: ${family.summary}`,
    "From Sahihi in Dar es Salaam.",
    "Codes and sizes from the catalogue.",
    "Ask for a quotation in Tanzania.",
  );
