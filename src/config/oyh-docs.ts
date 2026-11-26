import type { DocEntry, DocGroup } from "@/components/sections/document-list";
import manifest from "@/config/oyh-docs.json";
import { oyhSafetySheets } from "@/config/oyh-range";
import tds from "@/config/oriental-yuhong-tds.json";
import { SYSTEMS, TDS as SPORTS_TDS } from "@/config/oyh-sports-systems";

/**
 * Every Oriental Yuhong document on the site, for the documentation
 * section on /oriental-yuhong (owner, 2026-11-19: "a documentation section
 * where the documents are displayed nicely and anyone can download it").
 * Names and groups are written here; pages and sizes come from
 * src/config/oyh-docs.json, measured by scripts/build-oyh-docs.mjs (the
 * `--check` in `npm run check` fails if a PDF changed without a rerun).
 * Every file is OYH's own, published unaltered.
 */

const measured = manifest as Record<string, { pages: number; bytes: number }>;
const sheets = tds as Record<
  string,
  { file: string; title: string; fetched?: string }
>;

function entry(
  file: string,
  name: string,
  what: string,
  note?: string,
): DocEntry {
  const size = measured[file];
  if (!size)
    throw new Error(
      `oyh-docs: ${file} is not in oyh-docs.json (run scripts/build-oyh-docs.mjs)`,
    );
  return { name, what, file, pages: size.pages, bytes: size.bytes, note };
}

export const BELOW_GRADE_MANUAL = entry(
  "/tds/oriental-yuhong/below-grade-structures.pdf",
  "OYH Solutions for Below-Grade Structures",
  "The manual: basement, tunnel and underground maintenance systems, products and typical values, 16 A3 spreads.",
  "26 MB, as issued by OYH Overseas Development Group",
);

export const HDPE_BROCHURE = entry(
  "/tds/oriental-yuhong/hdpe-brochure.pdf",
  "OYH HDPE pre-applied membrane brochure",
  "PMH-3080 and the HDPE system: uses, build-ups and installation, 14 pages.",
  "50 MB, as issued",
);

export const PMH_METHOD_STATEMENT = entry(
  "/tds/oriental-yuhong/pmh-3080-method-statement.pdf",
  "PMH-3080 method statement",
  "How the pre-applied membrane goes down, step by step, June 2025.",
);

/** The six product data sheets, in the catalogue's order. */
const dataSheets: DocEntry[] = Object.values(sheets).map((sheet) =>
  entry(
    sheet.file,
    `${sheet.title} technical data sheet`,
    `Oriental Yuhong's data sheet for ${sheet.title}: description, uses, technical data, packaging.`,
    sheet.fetched ? `Fetched ${sheet.fetched}` : undefined,
  ),
);

const sportsBrochure = entry(
  `${SPORTS_TDS}/sports-flooring-brochure.pdf`,
  "OYH sports flooring brochure",
  "The seven sports systems with their build-ups and references.",
);
const courtGuides: DocEntry[] = [
  entry(
    `${SPORTS_TDS}/silicone-pu-court-guide.pdf`,
    "Silicon PU court construction guide",
    "Site preparation, layers, drying and checks for the silicon PU court.",
  ),
  entry(
    `${SPORTS_TDS}/elastic-acrylic-court-guide.pdf`,
    "Elastic acrylic court construction guide",
    "Site preparation, layers, drying and checks for the acrylic court.",
  ),
];
const sportsSystems: DocEntry[] = SYSTEMS.filter((system) => system.download)
  .map((system) =>
    entry(
      system.download!.file,
      `${system.name}: the manual pages`,
      `The pages of OYH's sports flooring manual for the ${system.name.toLowerCase()}.`,
    ),
  )
  .filter(
    (doc, index, all) =>
      all.findIndex((other) => other.file === doc.file) === index &&
      !courtGuides.some((guide) => guide.file === doc.file),
  );

/** OYH's safety data sheets, one per part of a kit (2026-11-26). */
const safetySheets: DocEntry[] = Object.entries(oyhSafetySheets).flatMap(
  ([slug, files]) =>
    files.map((doc) =>
      entry(
        doc.file,
        `${sheets[slug as keyof typeof sheets]?.title ?? slug} safety data sheet${doc.part ? `, ${doc.part}` : ""}`,
        "Material safety data sheet, as issued by OYH.",
      ),
    ),
);

export const oyhDocGroups: DocGroup[] = [
  { title: "Data sheets", docs: dataSheets },
  { title: "Safety data sheets", docs: safetySheets },
  {
    title: "Manuals and guides",
    docs: [BELOW_GRADE_MANUAL, HDPE_BROCHURE, sportsBrochure, ...courtGuides],
  },
  {
    title: "Method statements and system pages",
    docs: [PMH_METHOD_STATEMENT, ...sportsSystems],
  },
];

export const oyhDocCount = oyhDocGroups.reduce(
  (sum, group) => sum + group.docs.length,
  0,
);
