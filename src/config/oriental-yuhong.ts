import fs from "node:fs";
import path from "node:path";

import type { ProductContent } from "@/components/sections/product/product-detail";
import { products, type Product } from "@/config/catalogue";
import tdsManifest from "@/config/oriental-yuhong-tds.json";
import { oyhSeo, type OyhSlug } from "@/config/seo/oyh";
import type { CoverageModel } from "@/lib/coverage";
import { composeItemTitle, seoDescription } from "@/lib/seo";

/**
 * Everything the Oriental Yuhong pages need beyond the catalogue.
 * SERVER ONLY (reads the content files from disk at build time).
 *
 * Content: src/content/oriental-yuhong/<slug>.json, built from the five
 * OYH technical data sheets the owner supplied on 2026-11-06; every string
 * was checked to be in its PDF (scripts/verify-brand-content.mjs).
 * What is stocked and in which pack is the owner's "OYH RETAIL PRICE LIST
 * TZ". Where the two disagree the data sheet is published and the
 * difference is noted in src/config/catalogue.ts.
 */

export const oyhProducts = products.filter(
  (product) => product.brand === "oriental-yuhong",
);

export const oyhProductBySlug = Object.fromEntries(
  oyhProducts.map((product) => [product.slug, product]),
) as Record<string, Product>;

const CONTENT_DIR = path.join(process.cwd(), "src/content/oriental-yuhong");

export function oyhContent(slug: string): ProductContent | null {
  const file = path.join(CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as ProductContent;
}

export const oyhTds = tdsManifest as Record<
  string,
  {
    file: string;
    title: string;
    pages: number;
    bytes: number;
    fetched: string;
    edition?: string;
  }
>;

/** OYH's own application photograph from each data sheet, where it has one. */
export const oyhInUse: Record<string, { src: string; alt: string }> = {
  "yhcoat-1000": {
    src: "/images/oyh/yhcoat-1000.webp",
    alt: "A grey cementitious waterproofing slurry being rolled onto a wall",
  },
  "yhcoat-2060": {
    src: "/images/oyh/yhcoat-2060.webp",
    alt: "A flat roof coated edge to edge in a blue waterproofing coating",
  },
  "yhcolorwall-5300": {
    src: "/images/oyh/yhcolorwall-5300.webp",
    alt: "A white waterproofing coating being sprayed onto a profiled steel roof",
  },
  "yhrepair-2516": {
    src: "/images/oyh/yhrepair-2516.webp",
    alt: "Grey repair mortar packed around the foot of a pipe where it passes through a floor",
  },
};

/** Names the product is asked for by, where the list and the maker differ. */
export const oyhAlsoKnownAs: Record<string, string> = {
  "pmh-3080-plus": "HDPE membrane, pre-applied membrane, PMH 3080, PMH3080",
  "yhcoat-1000": "YH Coat 1000",
  "yhcoat-2060": "YH Coat 2060",
  "yhcolorwall-5300": "YH ColorWall 5300, Color Wall 5300",
  "yhpuseal-2925": "YHPUSeal, YH PU Seal",
  "yhrepair-2516": "YH Repair 2516, waterplug",
};

/**
 * Coverage models. Each `source` is the data sheet's own wording
 * (scripts/verify-brand-content.mjs checks it is in the PDF).
 */
export const oyhCoverage: Record<string, CoverageModel> = {
  "yhcoat-1000": {
    kind: "area",
    unit: "kg",
    rates: [
      { label: "Wet areas, 2 coats", min: 2, max: 2 },
      { label: "Other areas, 2 to 3 coats", min: 3, max: 3 },
    ],
    packs: [{ label: "26 kg set (A 6 kg + B 20 kg)", size: 26 }],
    source: "by 2coat in wet area",
    note: "The two parts are mixed A : B = 3 : 10 by weight, which is one 6 kg pail to one 20 kg bag.",
  },
  "yhcoat-2060": {
    kind: "area-coats",
    unit: "kg",
    rates: [{ label: "Per coat", min: 1, max: 1 }],
    coats: { min: 2, max: 3, initial: 2 },
    packs: [{ label: "15 kg pail", size: 15 }],
    source: "apply a 3rd coat at 1.0 kg/m²",
    note: "OYH's figure is a 1.0 mm dry film in 2 coats at 1.0 kg/m² per coat, with a third coat where water ingress is high. We stock the 15 kg pail; the data sheet lists a 25 kg pail.",
  },
  "yhcolorwall-5300": {
    kind: "area",
    unit: "kg",
    rates: [
      { label: "Walls", min: 2, max: 2 },
      { label: "Roofs", min: 3, max: 3 },
    ],
    packs: [{ label: "20 kg pail", size: 20 }],
    source: "for roof: 3kg/ m²",
  },
  "yhpuseal-2925": {
    kind: "joint",
    unit: "ml",
    packs: [{ label: "600 ml sausage", size: 600 }],
    source: "In all cases joints must be at least 8 mm deep",
    note: "The quantity is the joint's width times its depth times its length. OYH gives 8 to 40 mm as the width of a movement joint.",
  },
};

const oyhSeoRow = (product: Product) => oyhSeo[product.slug as OyhSlug];

/**
 * Item title from the registry row (src/config/seo/oyh.ts): the override
 * when the row has one, otherwise the one item pattern with the brand word
 * "OYH" ("Oriental Yuhong" rarely fits the 60-character budget) and the
 * row's buyer type words (the catalogue type is the fallback).
 */
export function oyhItemTitle(product: Product) {
  const row = oyhSeoRow(product);
  return (
    row?.titleOverride ??
    composeItemTitle(
      product.name,
      "OYH",
      row?.typeWords ?? product.type.toLowerCase(),
      { geo: row?.geo },
    )
  );
}

/** Item description: the hand-written row, else the composed fallback. */
export function oyhItemDescription(product: Product) {
  return (
    oyhSeoRow(product)?.description ??
    seoDescription(
      `${product.name}: ${product.summary}`,
      "Oriental Yuhong, stocked by Sahihi in Dar es Salaam.",
      "Data sheet, pack size and coverage.",
      "Authorized distributor in Tanzania.",
    )
  );
}
