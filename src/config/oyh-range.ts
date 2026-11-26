import msds from "@/config/oyh-msds.json";

/**
 * Oriental Yuhong's range on the site, by family (owner, 2026-11-26: OYH's
 * folder "OYH Docs - TDS and MSDS", 53 data sheets and their safety sheets).
 * The families follow the folder's own grouping, with the six products held
 * in Dar es Salaam (the owner's price list) placed in theirs. FUDA-XPS (the manual's
 * "YH XPS") has only a Chinese sheet: its page quotes Sahihi's English
 * translation, published beside the original (docs/OPEN-QUESTIONS.md Q24).
 *
 * Stock: the six held products are "held"; everything from the folder is
 * supplied to order (the owner's ruling for the below-grade range,
 * 2026-11-19), so its pages say "supplied to order", never "in stock".
 */

export type OyhFamilyId =
  | "membranes"
  | "bituminous"
  | "coatings"
  | "injection"
  | "waterstops"
  | "drainage"
  | "accessories"
  | "admixtures";

export type OyhFamily = { id: OyhFamilyId; label: string; blurb: string };

export const oyhFamilies: OyhFamily[] = [
  {
    id: "membranes",
    label: "HDPE and FPO membranes",
    blurb:
      "Pre-applied and post-applied sheet membranes for slabs, walls, roofs of basements and tunnels.",
  },
  {
    id: "bituminous",
    label: "Bituminous membranes and coatings",
    blurb:
      "SBS and APP torch-on membranes, self-adhesive membranes, an anti-root membrane, bitumen coatings and primers.",
  },
  {
    id: "coatings",
    label: "Coatings, crystalline and repair",
    blurb:
      "Cementitious and liquid coatings, crystalline waterproofing, a moisture barrier and a waterplug.",
  },
  {
    id: "injection",
    label: "Injection and grouting",
    blurb:
      "Polyurethane, acrylic and epoxy injection resins, an epoxy grout and a re-injectable hose.",
  },
  {
    id: "waterstops",
    label: "Waterstops and joint sealing",
    blurb:
      "Rubber and PVC waterstops, swelling bars and sealants for construction joints, and a polyurethane joint sealant.",
  },
  {
    id: "drainage",
    label: "Drainage and geotextiles",
    blurb:
      "Plastic drainage boards and continuous filament geotextiles for protection, separation and drainage.",
  },
  {
    id: "accessories",
    label: "Membrane accessories",
    blurb:
      "The tapes, sealant and primer OYH makes for its HDPE membranes, and its butyl tapes.",
  },
  {
    id: "admixtures",
    label: "Concrete admixtures",
    blurb:
      "Polycarboxylate ether water reducers and slump retainers, used in OYH's tunnel system.",
  },
];

/** Every OYH product's family, the held six and the folder's 52. */
export const oyhFamilyOf: Record<string, OyhFamilyId> = {
  // Held in Dar es Salaam
  "pmh-3080-plus": "membranes",
  "yhcoat-1000": "coatings",
  "yhcoat-2060": "coatings",
  "yhcolorwall-5300": "coatings",
  "yhrepair-2516": "coatings",
  "yhpuseal-2925": "waterstops",
  // Supplied to order (OYH's folder, 2026-11-26)
  "pmh-3040": "membranes",
  "pmh-3040-plus": "membranes",
  "pmh-3041": "membranes",
  "pmh-3046": "membranes",
  "yhfpopre-3210": "membranes",
  "pmh-6010": "membranes",
  "yhshield-7401": "bituminous",
  "yhshield-7402": "bituminous",
  "yhshield-7403": "bituminous",
  "yhshield-7501": "bituminous",
  "yhshield-7502": "bituminous",
  "yhshield-7601": "bituminous",
  "yhstick-9301": "bituminous",
  "yhstick-9302": "bituminous",
  "yhstick-9310": "bituminous",
  "yhstick-9801": "bituminous",
  "yhbitucoat-4500": "bituminous",
  "yhbitucoat-4600": "bituminous",
  "yhbituprimer-4035": "bituminous",
  "yhbituprimer-4050": "bituminous",
  "yhprimcoat-1010": "bituminous",
  "yhcolorwall-5100": "coatings",
  "yhcrystal-2510": "coatings",
  "yhcrystal-2512": "coatings",
  "yhprimblock-1400": "coatings",
  "yhacgrout-2101": "injection",
  "yhpugrout-2102": "injection",
  "yhpugrout-2103": "injection",
  "yhpugrout-2104": "injection",
  "yhepgrout-2106": "injection",
  "yhepoxy-gr90": "injection",
  yhinjehose: "injection",
  yhswellseal: "waterstops",
  yhswellbar: "waterstops",
  "yhwaterstop-epdm": "waterstops",
  "yhwaterstop-pvc": "waterstops",
  "tdf-g": "drainage",
  "tdf-hs": "drainage",
  "yhdrainpro-201": "drainage",
  "yhdrainpro-202": "drainage",
  "pmh-s-600": "accessories",
  "pmh-t-160": "accessories",
  "pmh-t-c-120": "accessories",
  "pmh-t-d80": "accessories",
  "pmh-t-s80": "accessories",
  "yhprimer-1000": "accessories",
  "yhtape-2022fl": "accessories",
  "yhtape-2022hd": "accessories",
  "fuda-xps": "drainage",
  "oyh-r100": "admixtures",
  "oyh-r100h": "admixtures",
  "oyh-s104c": "admixtures",
  "oyh-s104s": "admixtures",
};

/** The six on the owner's price list, held in Dar es Salaam. */
export const OYH_HELD = new Set([
  "pmh-3080-plus",
  "yhcoat-1000",
  "yhcoat-2060",
  "yhcolorwall-5300",
  "yhrepair-2516",
  "yhpuseal-2925",
]);

/**
 * Products whose pack picture is the site's own illustration (owner,
 * 2026-11-26: "generate 16 product images"; OYH has no picture of them).
 * Plain containers and profiles, no logo, no label, no text: nothing on them
 * is claimed as OYH's. Tagged "Illustration" on the page
 * (docs/IMAGE-PROVENANCE.md 3x). Remove a slug when OYH's picture arrives.
 */
export const OYH_ILLUSTRATED = new Set([
  "pmh-3046",
  "yhshield-7502",
  "yhacgrout-2101",
  "yhpugrout-2102",
  "yhepgrout-2106",
  "yhepoxy-gr90",
  "yhinjehose",
  "yhswellseal",
  "yhswellbar",
  "yhwaterstop-epdm",
  "yhwaterstop-pvc",
  "yhtape-2022hd",
  "oyh-r100",
  "oyh-r100h",
  "oyh-s104c",
  "oyh-s104s",
]);

export const oyhStock = (slug: string): "held" | "order" =>
  OYH_HELD.has(slug) ? "held" : "order";

/** OYH's safety data sheets, unaltered, one per part of a kit. */
export const oyhSafetySheets = msds as Record<
  string,
  { file: string; part: string | null; bytes: number }[]
>;

/**
 * Documents beside the data sheet. FUDA XPS: the board's sheet exists only
 * in Chinese, so the page offers Sahihi's English translation (2026-11-26,
 * `assets/source/oyh-translations/`) as the data sheet and the Chinese
 * original as the document of record (owner, 2026-11-26).
 */
export const oyhOtherDocuments: Record<
  string,
  { title: string; note: string; file: string; bytes: number }[]
> = {
  "fuda-xps": [
    {
      title: "Technical data sheet, Chinese original",
      note: "As issued by FUDA; the document of record",
      file: "/tds/oriental-yuhong/fuda-xps-zh.pdf",
      bytes: 191036,
    },
  ],
};

export const oyhDocumentNote: Record<string, string> = {
  "fuda-xps":
    "The English data sheet is Sahihi's translation (26 November 2026) of the Chinese technical data sheet issued by Guangzhou FUDA Thermal Insulation Materials Co., Ltd. and supplied through Oriental Yuhong. The Chinese original, offered beside it, is the document of record; where the two differ, the original applies.",
};
