import fs from "node:fs";
import path from "node:path";

import {
  lineBySlug,
  lines,
  products,
  type Line,
  type LineSlug,
  type Product,
} from "@/config/catalogue";
import tdsManifest from "@/config/mapei-tds.json";
import { mapeiSeo, type MapeiProductSlug } from "@/config/seo/mapei";
import { composeItemTitle, seoDescription } from "@/lib/seo";

/**
 * Everything the Mapei pages need beyond the catalogue: the content
 * extracted from each official data sheet, the data sheet files themselves,
 * and the editorial copy for the hub and the five line pillars.
 *
 * SERVER ONLY (it reads the content files from disk at build time). Never
 * import this from a client component.
 */

// ---- Data sheet content -----------------------------------------------------

/**
 * One file per product in src/content/mapei/<slug>.json, extracted
 * verbatim from the official Mapei technical data sheet. Checked against
 * the data sheet text by scripts/verify-mapei-content.mjs.
 */
export type MapeiContent = {
  slug: string;
  titleAsPrinted: string;
  edition: string | null;
  description: string;
  whereToUse: string[];
  notFor: string[];
  standards: { standard: string; value: string }[];
  technicalData: { label: string; value: string }[];
  consumption: { basis: string; value: string; quote: string }[];
  consumptionFormula: string | null;
  consumptionTable: { row: string; values: string }[];
  mixing: string | null;
  packaging: string;
  storage: string | null;
  notes: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/mapei");

export function mapeiContent(slug: string): MapeiContent | null {
  const file = path.join(CONTENT_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as MapeiContent;
}

/**
 * Cosmetic clean-up for a data sheet string: drops list bullets and the
 * trailing semicolon of a list item, collapses whitespace. Never changes a
 * word or a number.
 */
export function tidy(text: string) {
  return (
    text
      .replace(/[\u2010\u2011\u2012\u2013\u2014]/g, "-")
      .replace(/^[\s▪▫·•\-\u2013]+/, "")
      // bullets left inside a run of text when list items were joined
      .replace(/\s*[▪▫•]\s*/g, " ")
      .replace(/\s+/g, " ")
      .replace(/\s*[;,]\s*$/, "")
      .trim()
  );
}

/** Sentence case for a list item: capital first letter, full stop kept off. */
export function listItem(text: string) {
  const clean = tidy(text).replace(/\.$/, "");
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

// ---- Data sheet files -------------------------------------------------------

export type TdsFile = {
  /** Public path of the unaltered PDF. */
  file: string;
  /** Edition code printed on the sheet. */
  edition: string;
  /** Where it was downloaded from (Mapei's CDN). */
  sourceUrl: string;
  bytes: number;
  pages: number;
  fetched: string;
};

export const mapeiTds = tdsManifest as Record<string, TdsFile>;

export function fileSize(bytes: number) {
  return bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}

// ---- Products and lines -----------------------------------------------------

export const mapeiProducts = products.filter(
  (product) => product.brand === "mapei",
);
export const mapeiLines = lines.filter((line) => line.brand === "mapei");

export const mapeiProductBySlug = Object.fromEntries(
  mapeiProducts.map((product) => [product.slug, product]),
) as Record<string, Product>;

export const isMapeiLine = (slug: string): slug is LineSlug =>
  mapeiLines.some((line) => line.slug === slug);

/** Position in catalogue order, for "No. 04 / 47" and previous / next. */
export function neighbours(product: Product) {
  const index = mapeiProducts.indexOf(product);
  const count = mapeiProducts.length;
  return {
    number: index + 1,
    count,
    previous: mapeiProducts[(index - 1 + count) % count],
    next: mapeiProducts[(index + 1) % count],
  };
}

/** Up to four other products from the same line, following this one. */
export function related(product: Product, limit = 4) {
  const siblings = mapeiProducts.filter((p) => p.line === product.line);
  const index = siblings.indexOf(product);
  return Array.from(
    { length: Math.min(limit, siblings.length - 1) },
    (_, offset) => siblings[(index + 1 + offset) % siblings.length],
  );
}

// ---- Editorial copy for the pillars ----------------------------------------

/** A pastel stage: background utility for a line's masthead. */
export type Stage = "bg-accent" | "bg-line" | "bg-surface";

export type LineMeta = {
  /** <= 60 characters; the pillar's primary query leads. */
  title: string;
  /** 140-160 characters. */
  description: string;
  h1: string;
  lead: string;
  stage: Stage;
  /** Short questions and answers built only from catalogue facts. */
  choose: { q: string; a: string }[];
};

export const mapeiLineMeta: Record<string, LineMeta> = {
  "tile-adhesives-grouts": {
    title: "Mapei Tile Adhesive Tanzania - Keraflex, Adesilex, Grout",
    description:
      "Mapei tile adhesives and grouts in Tanzania: Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1, Keracolor FF, Kerapoxy. Data sheets and coverage calculators.",
    h1: "Mapei tile adhesives, grouts and tile care.",
    lead: "Cementitious adhesives from class C1 to a deformable C2TES1 for large porcelain, a cement grout and an epoxy grout, and the cleaners that finish a tiled floor.",
    stage: "bg-surface",
    choose: [
      {
        q: "Which adhesive class does the job need?",
        a: "Mapeset is class C1 and Kerabond T is C1T. Adesilex P7 is C2T. Keraflex Maxi S1 is C2TES1, the deformable class Mapei recommends for large-size porcelain and natural stone.",
      },
      {
        q: "Cement grout or epoxy grout?",
        a: "Keracolor FF is a water-repellent cementitious grout for joints up to 6 mm, class CG2WA. Kerapoxy is a two-component acid-resistant epoxy grout, class RG, that can also be used as an adhesive.",
      },
    ],
  },
  "primers-levelling": {
    title: "Mapei Self-Levelling & Primer Tanzania - Ultraplan, Primer G",
    description:
      "Mapei primers and self-levelling compounds in Tanzania: Primer G, Triblock P, Ultraplan Eco 20, Ultraplan Contract and Lignobond. Data sheets and calculators.",
    h1: "Mapei primers, levelling compounds and wood-floor adhesive.",
    lead: "What goes down before the floor finish: a water-based primer, an epoxy-cementitious primer for damp substrates, two self-levelling compounds for 1 to 10 mm, and an adhesive for parquet.",
    stage: "bg-line",
    choose: [
      {
        q: "Which self-levelling compound?",
        a: "Both level from 1 to 10 mm per layer. Ultraplan Eco 20 consumes 1.6 kg/m² per mm and comes in 23 kg bags. Ultraplan Contract consumes 1.7 kg/m² per mm and comes in 25 kg bags.",
      },
      {
        q: "What if the substrate is damp?",
        a: "Triblock P is a three-component epoxy-cementitious primer for damp substrates, applied in two coats.",
      },
    ],
  },
  "concrete-repair": {
    title: "Mapei Concrete Repair Tanzania - Mapegrout, Epojet, Mapefix",
    description:
      "Mapei concrete repair in Tanzania: Mapegrout mortars and grouts, Epojet LV and Eporip epoxies, Planicrete SP, Mapefer 1K, Mapefix EP 50. With data sheets.",
    h1: "Mapei concrete repair, grouts and anchoring.",
    lead: "Repair mortar and flowable micro-concrete, epoxy for cracks and construction joints, a latex additive, protection for exposed rebar, and an epoxy chemical anchor.",
    stage: "bg-accent",
    choose: [
      {
        q: "A crack, or a section to rebuild?",
        a: "Epojet LV is a very low viscosity epoxy for injection in microcracks. Eporip bonds construction joints and seals cracks in screeds. Mapegrout rebuilds the section.",
      },
      {
        q: "What protects the steel first?",
        a: "Mapefer 1K is a one-component anti-corrosion cementitious mortar for steel reinforcement rods, applied before the repair mortar.",
      },
    ],
  },
  "resin-flooring": {
    title: "Mapefloor Epoxy & PU Flooring Tanzania - Mapei Systems",
    description:
      "Mapefloor resin flooring in Tanzania: FC 200 ME epoxy coating, I 300 SL ME self-levelling epoxy, CPU+/MF polyurethane cement, car park finishes. Data sheets.",
    h1: "Mapefloor resin flooring and coatings.",
    lead: "Epoxy and polyurethane floor systems, from a high build coating to a 6 mm polyurethane-cement mortar, with the primer, the finishes and the quartz they are built with.",
    stage: "bg-surface",
    choose: [
      {
        q: "A coating or a self-levelling floor?",
        a: "Mapefloor FC 200 ME is a high build epoxy coating applied in two coats. Mapefloor I 300 SL ME is a self-levelling epoxy, 2 to 4 mm thick. Mapefloor CPU+/MF is a polyurethane cement mortar from 3 to 6 mm.",
      },
      {
        q: "Which finish stands up to sunlight?",
        a: "Mapefloor Finish 450 ME is the aliphatic polyurethane finish, resistant to wear and UV rays. Mapefloor Finish 415 ME is aromatic.",
      },
    ],
  },
  waterproofing: {
    title: "Mapei Waterproofing Tanzania - Mapelastic, Planiseal 88",
    description:
      "Mapei waterproofing in Tanzania: Mapelastic Smart, Foundation, Easy and AquaDefense, Planiseal 88, Lamposilex, waterstops, tapes and sealants. Data sheets.",
    h1: "Mapei waterproofing.",
    lead: "Cementitious and liquid membranes for roofs, wet areas and structures below ground, with the waterstops, joint tapes, mesh, sealants and admixture that complete the system.",
    stage: "bg-accent",
    choose: [
      {
        q: "Which Mapelastic?",
        a: "Mapelastic Smart is for balconies, terraces, bathrooms and swimming pools. Mapelastic Foundation is for concrete under positive and negative water pressure. Mapelastic AquaDefense is a ready-to-use liquid membrane applied in two coats.",
      },
      {
        q: "What about the joints?",
        a: "Idrostop PVC waterstops seal expansion and cold joints in the pour. Mapeband TPE and Mapeband Easy tapes bridge joints under the membrane, and Mapenet 150 mesh reinforces it.",
      },
    ],
  },
};

export const metaFor = (line: Line) => mapeiLineMeta[line.slug];
export const stageFor = (slug: LineSlug) =>
  mapeiLineMeta[slug]?.stage ?? "bg-accent";
export { lineBySlug };

// ---- SEO helpers ------------------------------------------------------------

/**
 * Title and description for a product page, read from the registry row in
 * src/config/seo/mapei.ts (metadata pass, 2026-11-12). The row's buyer
 * `typeWords` replace the catalogue's internal type label in the title; a
 * `titleOverride` wins outright. Without a row the title falls back to the
 * catalogue type and the description to the summary plus the stock line.
 */
export function itemTitle(product: Product) {
  const row = mapeiSeo[product.slug as MapeiProductSlug];
  return (
    row?.titleOverride ??
    composeItemTitle(product.name, "Mapei", row?.typeWords ?? product.type, {
      geo: row?.geo,
    })
  );
}

export function itemDescription(product: Product) {
  const row = mapeiSeo[product.slug as MapeiProductSlug];
  return (
    row?.description ??
    seoDescription(
      product.summary,
      "Stocked by Sahihi in Dar es Salaam.",
      "Data sheet, pack sizes and coverage calculator.",
      "Authorized Mapei distributor.",
    )
  );
}
