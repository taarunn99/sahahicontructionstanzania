import fs from "node:fs";
import path from "node:path";

import { products, type Product } from "@/config/catalogue";
import tdsManifest from "@/config/x-calibur-tds.json";
import type { ProductContent } from "@/components/sections/product/product-detail";
import type { CoverageModel } from "@/lib/coverage";

/**
 * Everything the X-Calibur pages need beyond the catalogue.
 * SERVER ONLY (reads the content files from disk at build time).
 *
 * Content: src/content/x-calibur/<slug>.json, built from X-Calibur's own
 * technical data sheets (x-calibur.us); every string was checked to be in
 * the PDF. Identity notes are in docs/research/06-xcalibur-cmci.md:
 *  - "X-Seal PG" on the owner's list is not an official name. It matches
 *    X-Seal PS800, pouring grade, on three points; the page carries that
 *    data sheet and says so. The owner should confirm from the can.
 *  - "X-Seal Primer" is matched to X-Seal PS800 Primer the same way.
 *  - "X-Tech Bond" has no official data sheet: it is on request.
 */

export const xcaliburProducts = products.filter(
  (product) => product.brand === "x-calibur",
);

export const xcaliburProductBySlug = Object.fromEntries(
  xcaliburProducts.map((product) => [product.slug, product]),
) as Record<string, Product>;

const CONTENT_DIR = path.join(process.cwd(), "src/content/x-calibur");

export function xcaliburContent(slug: string): ProductContent | null {
  const file = path.join(CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as ProductContent;
}

export const xcaliburTds = tdsManifest as Record<
  string,
  { file: string; title: string; pages: number; bytes: number; fetched: string }
>;

/** Names the product is asked for by, where the list and the maker differ. */
export const xcaliburAlsoKnownAs: Record<string, string> = {
  "x-tech-epoxyfloor-sl1":
    "X-Tech EpoxyFloor SL (grade SL1, 1 to 1.5 mm), X Tech SL1",
  "x-seal-pg": "X-Seal PS800 pouring grade, X Seal PG",
  "x-seal-primer": "X-Seal PS800 Primer",
  "x-tech-bond": "Xtech Bond",
};

/**
 * Coverage models. Each `source` is the data sheet's own sentence
 * (scripts/verify-brand-content.mjs checks it is in the PDF).
 */
export const xcaliburCoverage: Record<string, CoverageModel> = {
  "x-tech-epoxyfloor-sl1": {
    kind: "area",
    unit: "litres",
    rates: [{ label: "Grade SL1 at 1 mm", min: 1, max: 1 }],
    packs: [{ label: "17 litre pack", size: 17 }],
    source: "X-Tech EpoxyFloor SL1: 17m2 per 17L pack at 1mm",
    note: "Grade SL1 is laid at 1 to 1.5 mm. The figure is for 1 mm.",
  },
  "x-prime-gp": {
    kind: "area-per-unit",
    unit: "litres",
    rates: [
      { label: "100 microns wet film", min: 10, max: 10 },
      { label: "200 microns wet film", min: 5, max: 5 },
    ],
    packs: [{ label: "18 litre pack", size: 18 }],
    source: "5m² per liter at 200 microns",
  },
  "x-shield-flexpruf": {
    kind: "area-coats",
    unit: "kg",
    rates: [{ label: "Per coat", min: 1.7, max: 1.7 }],
    coats: { min: 1, max: 3, initial: 2 },
    packs: [{ label: "22 kg kit", size: 22 }],
    source: "1L (1.7kg) per m²per coat",
    note: "Normal applications require 2 coats.",
  },
  "x-seal-pg": {
    kind: "joint",
    unit: "ml",
    packs: [{ label: "4 litre pack", size: 4000 }],
    source: "Litres per metre run",
    note: "X-Calibur's guide to quantities is the joint's width times its depth: a 25 x 15 mm joint takes 0.37 litres per metre run.",
  },
  "x-seal-primer": {
    kind: "area-per-unit",
    unit: "litres",
    rates: [{ label: "Joint faces primed", min: 15, max: 15 }],
    packs: [{ label: "1 litre can", size: 1 }],
    source: "X-Seal PS800 Primer - 15m² per liter.",
  },
};

/** Longest candidate that fits the 60-character title budget. */
export function xcaliburItemTitle(product: Product) {
  const type = product.type.replace(/\b[a-z]/g, (l) => l.toUpperCase());
  const candidates = [
    `${product.name} Tanzania - X-Calibur ${type} | Sahihi`,
    `${product.name} Tanzania - X-Calibur ${type}`,
    `${product.name} Tanzania - X-Calibur | Sahihi`,
    `${product.name} Tanzania - X-Calibur`,
  ];
  return candidates.find((title) => title.length <= 60) ?? candidates[3];
}
