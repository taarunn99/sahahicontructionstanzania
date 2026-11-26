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
  // --- generated: OYH range in-use pictures (scripts/wire-oyh-range.mjs) ---
  "pmh-3040-plus": {
    src: "/images/oyh/pmh-3040-plus.webp",
    alt: "OYH's photograph of hands pressing a lap of white PMH-3040 Plus membrane on a concrete base",
  },
  "yhfpopre-3210": {
    src: "/images/oyh/yhfpopre-3210.webp",
    alt: "OYH's photograph of a large foundation slab covered in white pre-applied membrane around the pile heads",
  },
  "yhshield-7402": {
    src: "/images/oyh/yhshield-7402.webp",
    alt: "OYH-branded bituminous membrane laid across a flat roof",
  },
  "yhshield-7403": {
    src: "/images/oyh/yhshield-7403.webp",
    alt: "Flat roof finished in grey mineral granule bituminous membrane",
  },
  "yhshield-7501": {
    src: "/images/oyh/yhshield-7501.webp",
    alt: "Strip of bituminous membrane being laid on a concrete roof",
  },
  "yhstick-9301": {
    src: "/images/oyh/yhstick-9301.webp",
    alt: "YHStick membrane laid in overlapping rolls on a roof deck",
  },
  "yhstick-9310": {
    src: "/images/oyh/yhstick-9310.webp",
    alt: "YHStick membrane laid in overlapping rolls on a roof deck",
  },
  "yhstick-9801": {
    src: "/images/oyh/yhstick-9801.webp",
    alt: "Dark YHStick membrane laid in overlapping rolls",
  },
  "yhcrystal-2510": {
    src: "/images/oyh/yhcrystal-2510.webp",
    alt: "A grey crystalline coating brushed in a ring on a concrete slab around a cluster of starter bars, from OYH's data sheet",
  },
  "yhepoxy-gr90": {
    src: "/images/oyh/yhepoxy-gr90.webp",
    alt: "OYH's photograph of grout being poured from a pail beside a steel column base plate with anchor bolts",
  },
  "pmh-s-600": {
    src: "/images/oyh/pmh-s-600.webp",
    alt: "PMH-S-600 sealant applied with a gun around a concrete pile head on the membrane",
  },
  "pmh-t-160": {
    src: "/images/oyh/pmh-t-160.webp",
    alt: "PMH-T-160 tape being unrolled under the butt joint of HDPE membrane sheets",
  },
  "pmh-t-c-120": {
    src: "/images/oyh/pmh-t-c-120.webp",
    alt: "Workers laying PMH-T-C120 cover tape over a membrane lap",
  },
  "pmh-t-d80": {
    src: "/images/oyh/pmh-t-d80.webp",
    alt: "Workers in hard hats pressing PMH-T-D80 tape along a membrane lap",
  },
  "pmh-t-s80": {
    src: "/images/oyh/pmh-t-s80.webp",
    alt: "A press roller bonding a round PMH-T-S80 patch on sand surface membrane",
  },
  "yhprimer-1000": {
    src: "/images/oyh/yhprimer-1000.webp",
    alt: "Worker rolling YHPrimer-1000 onto a concrete roof slab",
  },
  "yhtape-2022fl": {
    src: "/images/oyh/yhtape-2022fl.webp",
    alt: "Metal roof with white butyl tape along the sheet laps",
  },
  // --- end generated: OYH range in-use pictures ---
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
  // --- generated: OYH range coverage (scripts/wire-oyh-range.mjs) ---
  "pmh-3040": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "36 m2 roll",
        size: 36
      }
    ],
    source: "36m2 (can be customized)",
    note: "OYH's laps: side laps 80mm along the pre-marked selvedge, end laps sealed with tape of minimum 80mm width. Add the laps to the area."
  },
  "pmh-3040-plus": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "36 m2 roll",
        size: 36
      }
    ],
    source: "36(can be customized)",
    note: "OYH's laps: 80mm along the pre-marked selvedge and end laps sealed with PMH-T-D80 and PMH-T-C120 minimum 80mm width. Add the laps to the area."
  },
  "pmh-3041": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "24 m2 roll (1.2 m x 20 m)",
        size: 24
      },
      {
        label: "48 m2 roll (2.4 m x 20 m)",
        size: 48
      }
    ],
    source: "24, 48 or Customized",
    note: "OYH's laps: the long edges overlap in an 80mm self-adhesive zone, then the seam is sealed with an extrusion welder. Add the laps to the area."
  },
  "pmh-3046": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "25 m2 roll (1.0 m x 25 m)",
        size: 25
      }
    ],
    source: "1.0m×25m",
    note: "OYH's laps: a minimum of 2\" (50 mm) on both sides and end laps. Add the laps to the area."
  },
  "yhfpopre-3210": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "24 m2 roll (1.2 m x 20 m)",
        size: 24
      },
      {
        label: "48 m2 roll (2.4 m x 20 m)",
        size: 48
      }
    ],
    source: "24/48",
    note: "The sheet prints no lap width; allow for the hot-air welded laps on top of the area."
  },
  "pmh-6010": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "24 m2 roll (1.2 m x 20 m)",
        size: 24
      },
      {
        label: "48 m2 roll (2.4 m x 20 m)",
        size: 48
      }
    ],
    source: "24, 48 or Customized",
    note: "OYH's laps: 80mm self-adhesive overlap on the 1.2 m roll, 150mm welding strips on both long edges of the 2.4 m roll. Add the laps to the area."
  },
  "yhshield-7401": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "10 m² roll (1 m x 10 m)",
        size: 10
      }
    ],
    source: "Roll Size (m2/roll) 10",
    note: "One roll covers 10 m² before laps. OYH's overlap width is 100 mm, so allow for the laps in the wastage."
  },
  "yhshield-7402": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "10 m² roll (1 m x 10 m)",
        size: 10
      }
    ],
    source: "Roll Size (m2/roll) 10",
    note: "One roll covers 10 m² before laps. OYH's overlap width is 100 mm, so allow for the laps in the wastage."
  },
  "yhshield-7403": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "10 m² roll (1 m x 10 m)",
        size: 10
      }
    ],
    source: "Roll Size (m2/roll) 10",
    note: "One roll covers 10 m² before laps. OYH's overlap width is 100 mm, so allow for the laps in the wastage."
  },
  "yhshield-7501": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "10 m² roll (1 m x 10 m)",
        size: 10
      }
    ],
    source: "Roll Size (m2/roll) 10",
    note: "One roll covers 10 m² before laps. OYH's overlap width is 100 mm, so allow for the laps in the wastage."
  },
  "yhshield-7502": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "10 m² roll (1 m x 10 m)",
        size: 10
      }
    ],
    source: "Roll Size (m2/roll) 10",
    note: "One roll covers 10 m² before laps. OYH's overlap width is 100 mm, so allow for the laps in the wastage."
  },
  "yhshield-7601": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "10 m² roll (1 m x 10 m)",
        size: 10
      }
    ],
    source: "Roll Size (m2/roll) 10",
    note: "One roll covers 10 m² before laps. OYH's overlap width is 100 mm, so allow for the laps in the wastage."
  },
  "yhstick-9301": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "20 m2 roll, 1 m wide",
        size: 20
      }
    ],
    source: "Roll Size (m2/roll) 20",
    note: "Adjacent rolls overlap a minimum of 80mm at the side and ends. Use the wastage field to allow for laps."
  },
  "yhstick-9302": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "20 m2 roll, 1 m wide",
        size: 20
      }
    ],
    source: "Roll Size (m2/roll) 20",
    note: "Adjacent rolls overlap a minimum of 80mm at the side and ends. Use the wastage field to allow for laps."
  },
  "yhstick-9310": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "20 m2 roll, 1 m wide",
        size: 20
      }
    ],
    source: "Roll Size (m2/roll) 20",
    note: "Adjacent rolls overlap a minimum of 80mm at the side and ends. Use the wastage field to allow for laps."
  },
  "yhstick-9801": {
    kind: "sheet",
    unit: "m2",
    packs: [
      {
        label: "10 m2 roll, 1 m wide",
        size: 10
      }
    ],
    source: "Roll Size (m2/roll) 10",
    note: "Adjacent rolls overlap a minimum of 80mm at the side and ends. Use the wastage field to allow for laps."
  },
  "yhbitucoat-4500": {
    kind: "area-thickness",
    unit: "kg",
    rates: [
      {
        label: "Per 1 mm dry film",
        min: 2.1,
        max: 2.4
      }
    ],
    thickness: {
      min: 1,
      max: 3,
      initial: 1,
      step: 0.5,
      stated: "The total thickness of the composite coating layer should be at least 1 mm"
    },
    packs: [
      {
        label: "20 kg pail",
        size: 20
      }
    ],
    source: "(2.1~2.4) kg/m² for 1mm DFT",
    note: "OYH's system table: a priming coat of YHBitucoat-4500 1:1 with clean water at about 0.35 kg/m² (including water), then three undiluted coats at about 0.70 kg/m² each. Each wet coat no more than 1.0 mm."
  },
  "yhbitucoat-4600": {
    kind: "area",
    unit: "kg",
    rates: [
      {
        label: "No reinforcement, 2 to 3 coats",
        min: 2,
        max: 2
      },
      {
        label: "With reinforcement, 3 to 4 coats",
        min: 3,
        max: 3
      }
    ],
    packs: [
      {
        label: "20 kg pail",
        size: 20
      }
    ],
    source: "2kg/m2 by (2～3) coat no reinforcement and 3kg/m2 by (3～4) coat with reinforcement",
    note: "OYH also prints (2.0~2.2) kg/m² for 1 mm dry film. Each wet coat no more than 1.0 mm."
  },
  "yhbituprimer-4035": {
    kind: "area",
    unit: "kg",
    rates: [
      {
        label: "Theoretical dosage",
        min: 0.2,
        max: 0.3
      }
    ],
    packs: [
      {
        label: "18 kg pail",
        size: 18
      }
    ],
    source: "The theoretical dosage is (0.2-0.3)kg/m2.",
    note: "OYH also writes 'Ensure the coverage is at least 300g/m2'. Porous substrates may need two or more coats."
  },
  "yhbituprimer-4050": {
    kind: "area",
    unit: "kg",
    rates: [
      {
        label: "Theoretical dosage, undiluted",
        min: 0.1,
        max: 0.15
      }
    ],
    packs: [
      {
        label: "18 kg pail",
        size: 18
      }
    ],
    source: "The theoretical dosage is (0.1-0.15)kg/m2.",
    note: "OYH: if diluted (not more than 1:2 with water), the dosage can be increased as appropriate. Porous substrates may need two or more coats."
  },
  "yhprimcoat-1010": {
    kind: "area-coats",
    unit: "kg",
    rates: [
      {
        label: "Per coat",
        min: 0.1,
        max: 0.2
      }
    ],
    coats: {
      min: 1,
      max: 2,
      initial: 1
    },
    packs: [
      {
        label: "18 kg pail",
        size: 18
      }
    ],
    source: "Normally apply one coat at a rate of approximately 0.1-0.2kg/m2/coat.",
    note: "OYH: for porous substrate it may need more coats or a layer of mortar to seal it. Apply with a nap roller."
  },
  "yhcolorwall-5100": {
    kind: "area-thickness",
    unit: "kg",
    rates: [
      {
        label: "Per mm of dry film",
        min: 1.5,
        max: 1.8
      }
    ],
    thickness: {
      min: 3,
      max: 6,
      initial: 3,
      step: 0.5,
      stated: "the final thickness of the plaster layer should not be less than 3mm"
    },
    packs: [
      {
        label: "20 kg pail",
        size: 20
      },
      {
        label: "20 kg bag",
        size: 20
      }
    ],
    source: "it is about 1.50 to 1.80 kg/m² for a 1 mm dry film thickness",
    note: "Each coat at least 1.0 mm, the finished layer at least 3 mm."
  },
  "yhcrystal-2510": {
    kind: "area",
    unit: "kg",
    rates: [
      {
        label: "Brushing, 2 coats",
        min: 1.4,
        max: 1.6
      },
      {
        label: "Dry powder sprinkling",
        min: 1.5,
        max: 1.5
      }
    ],
    packs: [
      {
        label: "20 kg pail (4 kg x 5 bags)",
        size: 20
      }
    ],
    source: "1.4-1.6kg/ m² by 2 coats(power weight)",
    note: "The sprinkling figure is OYH's dosage for powder pressed into fresh concrete before it has completely set. Consumption depends on the porosity and texture of the substrate."
  },
  "yhcrystal-2512": {
    kind: "dosage",
    unit: "kg",
    rates: [
      {
        label: "1% to 2% of the cement or cementitious material",
        min: 1,
        max: 2
      }
    ],
    packs: [
      {
        label: "20 kg pail (4 kg x 5 bags)",
        size: 20
      }
    ],
    source: "The admixture amount is 1% to 2% of the cement or cementitious material",
    note: "The actual amount is set by the project, and OYH requires a concrete mix ratio test. Its test results were at 1.0 kg per 100 kg cement."
  },
  "yhprimblock-1400": {
    kind: "area-coats",
    unit: "kg",
    rates: [
      {
        label: "Non-absorbent surface, per coat",
        min: 0.25,
        max: 0.3
      },
      {
        label: "Absorbent surface, per coat",
        min: 0.4,
        max: 0.5
      }
    ],
    coats: {
      min: 2,
      max: 2,
      initial: 2
    },
    packs: [
      {
        label: "Set of A 1.0 kg + B 1.0 kg + C 4.0 kg (6 kg mixed 1:1:4)",
        size: 6
      }
    ],
    source: "250-300 g/m2 per coat on non-absorbent surface",
    note: "OYH applies it in two coats. As a smoothing mortar with quartz sand it is 1.5 kg/m2 per mm of thickness."
  },
  "yhinjehose": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "Combi-pack, 200 m of hose",
        size: 200
      }
    ],
    source: "200 m YHinjehose",
    note: "Enter the total length of construction joints to be fitted with hose."
  },
  "yhswellbar": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "10 m roll (10 rolls per box)",
        size: 10
      }
    ],
    source: "10 m × 10 rolls per box",
    note: "Enter the total length of joints. At corners and intersections the strips are butt joined, no welding."
  },
  "yhwaterstop-pvc": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "20 m length (V150, V200, V250, O150, O200, O250, A250, D250)",
        size: 20
      },
      {
        label: "15 m length (V320, O320)",
        size: 15
      }
    ],
    source: "YHWaterstop-V150: 20m (Length)",
    note: "Enter the total length of joints. Joints are welded on site with an electric welding knife; add the overlaps to the length or use the wastage field."
  },
  "pmh-s-600": {
    kind: "joint",
    unit: "ml",
    packs: [
      {
        label: "600 ml sausage",
        size: 600
      }
    ],
    source: "600ml Sausage (Aluminum Packing)",
    note: "The data sheet prints no consumption rate: this is the volume of the joint or bead (width x depth x length)."
  },
  "pmh-t-160": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "20 m roll, 160 mm wide",
        size: 20
      }
    ],
    source: "160mm (W) x20m (L) x1.0mm (Thickness)",
    note: "The tape is trimmed to the width of the membrane at each butt joint: enter the number of joints times the membrane width."
  },
  "pmh-t-c-120": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "50 m roll, 120 mm wide",
        size: 50
      }
    ],
    source: "120mm(W) x 50m (L) x 0.35mm thick",
    note: "Enter the total length of end laps and T-joints to be covered."
  },
  "pmh-t-d80": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "50 m roll, 80 mm wide",
        size: 50
      }
    ],
    source: "80mm (W) x 50m (L) x 0.4mm (Thickness)",
    note: "Enter the total length of end laps, T-joints and details."
  },
  "pmh-t-s80": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "15 m roll, 80 mm wide",
        size: 15
      }
    ],
    source: "80mm (W) x 15m (L) x 0.8mm (Thickness)",
    note: "Enter the total length of end laps to be covered. For repairs the tape is cut into a round or oval shape."
  },
  "yhtape-2022fl": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "10 m roll",
        size: 10
      },
      {
        label: "20 m roll",
        size: 20
      }
    ],
    source: "Length / m 10 m, 20 m",
    note: "Enter the total length of laps and details to be taped. Widths are 80 mm, 100 mm or 330 mm."
  },
  "yhtape-2022hd": {
    kind: "length",
    unit: "m",
    packs: [
      {
        label: "10 m roll, 10 cm wide",
        size: 10
      }
    ],
    source: "Length / m 10 or other customized size",
    note: "Enter the total length of joints and details to be taped. Other widths and lengths are made to order."
  },
  "oyh-r100": {
    kind: "dosage",
    unit: "kg",
    rates: [
      {
        label: "Recommended dosage, 0.25-0.85 kg per 100 kg",
        min: 0.25,
        max: 0.85
      }
    ],
    packs: [],
    source: "The recommended dosage of OYH R-100 is 0.25%-0.85% by weight of cementitious materials",
    note: "OYH: the optimum dosage should be determined through laboratory and field testing; the product is a base material for admixture formulation and is not recommended for direct use in concrete without proper formulation adjustment."
  },
  "oyh-r100h": {
    kind: "dosage",
    unit: "kg",
    rates: [
      {
        label: "Recommended dosage, 0.25-0.85 kg per 100 kg",
        min: 0.25,
        max: 0.85
      }
    ],
    packs: [],
    source: "The recommended dosage of OYH R-100H is 0.25%-0.85% by weight of cementitious materials",
    note: "OYH: the optimum dosage should be determined through laboratory and field testing; the product is a base material for admixture formulation and is not recommended for direct use in concrete without proper formulation adjustment."
  },
  // --- end generated: OYH range coverage ---
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
