import {
  lineBySlug,
  productHref,
  products,
  type LineSlug,
} from "@/config/catalogue";

/**
 * PROJECT REFERENCES - from the owner's sheet
 * (assets/source/owner-supplied/projects-2025-2026.xlsx, 16 rows).
 *
 * FACT LAW
 * - A project carries only what the sheet prints: its name and the products
 *   supplied. No location, no area, no date, no description is added,
 *   because the sheet has none.
 * - Product names are matched to the catalogue. A name that is not in the
 *   catalogue (Adesilex P9) is shown as plain text, without a link.
 * - The APPLICATOR column is not published: those are third parties.
 * - Row 5 ("Said Salim") is HELD: it may be a private individual. Add it
 *   back below once the owner confirms it is a company or has consent.
 *
 * OPEN (docs/OPEN-QUESTIONS.md Q5): the sheet is headed "Mlinzi" and the
 * projects predate Sahihi's licence of 29 August 2026. The owner must
 * confirm these may be published as Sahihi references, and that each client
 * agrees, BEFORE the site goes live. It is a launch gate in
 * docs/DEPLOY-CHECKLIST.md. Removing a project is deleting its entry here.
 *
 * Sheet spellings resolved to the catalogue:
 *   Mapegrout TX 60 -> Mapegrout T60 ME      Keraflexi Maxi S1 -> Keraflex Maxi S1
 *   Mapegrout ME 06 -> Mapegrout ME05 (Q8)   Keracolour -> Keracolor FF
 *   Mapefix PU45 -> Mapeflex PU 45 FT        Aquadefence -> Mapelastic AquaDefense
 *   Mapefloor I300 -> Mapefloor I 300 SL ME  Quarzo -> Quarzo 0.5/1.2
 */

type Entry = {
  /** Site or client, as the sheet prints it. */
  name: string;
  /** The developer or contractor, where the sheet names both. */
  client?: string;
  ongoing?: boolean;
  /** Catalogue slugs, or a plain name for a product not in the catalogue. */
  products: (string | { name: string })[];
};

const ENTRIES: Entry[] = [
  { name: "Lake Cement", products: ["mapegrout-t60", "mapegrout-me05"] },
  {
    name: "Ocean Mall",
    client: "Cross Country Developer",
    products: [
      "mapeflex-pu-45-ft",
      "mapegrout-t60",
      "adesilex-pg2-tg",
      "mapelastic-smart",
      "planicrete-sp",
      "mapeband-tpe",
      "keraflex-maxi-s1",
    ],
  },
  {
    name: "Awadha Villa",
    client: "Cross Country Developer",
    products: [
      "planiseal-88",
      "adesilex-p7",
      { name: "Adesilex P9" },
      "planicrete-sp",
      "mapelastic-smart",
      "triblock-p",
      "mapecoat-dw-25",
      "antipluviol",
      "lamposilex",
      "keracolor-ff",
    ],
  },
  {
    name: "Charan Construction",
    products: ["mapefloor-i-300-sl-me", "primer-sn"],
  },
  {
    name: "Kimbiji Beach Resort",
    products: [
      "mapelastic-smart",
      "mapelastic-foundation",
      "mapeflex-pu-45-ft",
      "lamposilex",
      "planicrete-sp",
      "mapegrout-t60",
    ],
  },
  {
    name: "Baraza Resort & Spa",
    products: ["mapelastic-smart", "mapegrout-t60"],
  },
  {
    name: "Afya Wheat Flour Ltd",
    products: ["mapelastic-smart", "mapegrout-t60", "idrocrete-kr-1000"],
  },
  {
    name: "Aga Khan Education",
    products: ["ultraplan-contract", "primer-g", "antipluviol"],
  },
  {
    name: "Elven Agri",
    client: "Estim",
    products: ["mapefloor-cpu-plus-mf", "quartz-sand"],
  },
  {
    name: "Zanzibar Crown Hotel",
    products: [
      "mapecoat-dw-25",
      "adesilex-pg2-tg",
      "planicrete-sp",
      "keraflex-maxi-s1",
    ],
  },
  {
    name: "Estim Construction, including Kawe",
    products: [
      "mapelastic-aquadefense",
      "idrocrete-kr-1000",
      "planicrete-sp",
      "kerapoxy",
      "lamposilex",
      "primer-sn",
    ],
  },
  {
    name: "GCLA Toxic Room",
    client: "CRJE",
    products: ["mapefloor-cpu-plus-mf", "mapefloor-finish-450-me"],
  },
  { name: "Beijing Construction", products: ["antipluviol", "planicrete-sp"] },
  {
    name: "Africana Village",
    ongoing: true,
    products: [
      "mapelastic-smart",
      "mapelastic-aquadefense",
      "mapegrout-t60",
      "mapeproof-swell",
      "idrocrete-kr-1000",
    ],
  },
  {
    name: "DJV Construction",
    products: ["mapelastic-smart", "mapelastic-foundation", "planicrete-sp"],
  },
];

export type ProjectProduct = {
  name: string;
  /** null for a product that is not in the catalogue. */
  href: string | null;
  line: LineSlug | null;
};

export type Project = {
  name: string;
  client?: string;
  ongoing: boolean;
  products: ProjectProduct[];
};

const resolve = (item: Entry["products"][number]): ProjectProduct => {
  if (typeof item !== "string")
    return { name: item.name, href: null, line: null };
  const found = products.find((product) => product.slug === item);
  if (!found) throw new Error(`projects: unknown product "${item}"`);
  return { name: found.name, href: productHref(found), line: found.line };
};

export const projects: Project[] = ENTRIES.map((entry) => ({
  name: entry.name,
  client: entry.client,
  ongoing: entry.ongoing ?? false,
  products: entry.products.map(resolve),
}));

/** The period the sheet covers. */
export const projectsPeriod = "2025 to 2026";

/** Lines that appear in at least one project, with how many projects. */
export const projectLines = (Object.keys(lineBySlug) as LineSlug[])
  .map((slug) => ({
    slug,
    label: lineBySlug[slug].label,
    count: projects.filter((project) =>
      project.products.some((product) => product.line === slug),
    ).length,
  }))
  .filter((line) => line.count > 0);

/** Products ranked by the number of projects they went to. */
export const projectRanking = Object.values(
  projects
    .flatMap((project) => project.products)
    .reduce<Record<string, ProjectProduct & { count: number }>>(
      (acc, product) => {
        acc[product.name] ??= { ...product, count: 0 };
        acc[product.name].count += 1;
        return acc;
      },
      {},
    ),
).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
