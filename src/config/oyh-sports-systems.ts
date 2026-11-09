/**
 * OYH SPORTS FLOORING SYSTEMS: the seven systems, their layers and pictures, shared
 * by the hub (/oriental-yuhong/sports-flooring) and one page per system. Sources:
 * OYH's Sports Floor Product Manual, the brochure and the two construction guides
 * (see src/config/oyh-sports.ts). Stock: tracks and silicon PU held in Dar es
 * Salaam; acrylic, EPDM and turf ordered per job, 3 to 5 days (owner, 2026-11-09).
 */
import type { SportsSystem } from "@/components/sections/oyh/sports-explorer";

export const SPORTS_PATH = "/oriental-yuhong/sports-flooring";
export const TDS = "/tds/oriental-yuhong/sports";

const pic = (name: string, width: number, height: number, alt: string) => ({
  src: `/images/oriental-yuhong/sports/${name}.webp`,
  width,
  height,
  alt,
});

type Layer = SportsSystem["layers"][number];
const SUBSTRATE: Layer = {
  label: "Base",
  color: "#6b6e70",
  height: 0.34,
  pattern: "concrete",
  note: "Asphalt or concrete, more than 28 days old, flat to 5 mm per 3 m, with a pull-off strength above 2 MPa.",
};
const BOTTOM: Layer = {
  label: "Bottom layer",
  color: "#2d2a26",
  height: 0.06,
  note: "PSV-101 universal sealing adhesive, or PSV-102 asphalt concrete base sealing adhesive.",
};
const MARKING: Layer = {
  label: "Marking paint",
  color: "#ffffff",
  height: 0.03,
  note: "PSV-701/702 sports field marking paint.",
};

export const SYSTEMS: SportsSystem[] = [
  {
    slug: "all-plastic-track",
    name: "All plastic track",
    aka: "full polyurethane track",
    buildUp:
      "A special bottom adhesive, an elastic polyurethane middle layer and a wear-resistant surface layer.",
    suits:
      "For schools, kindergartens and sports venues: track and field runways, semi-circular areas, auxiliary areas, fitness paths, indoor training runways and playgrounds.",
    advantages: [
      "Safety",
      "Weathering resistance",
      "Shock absorption at 0-50 ℃",
      "Anti nail shoe scratch",
    ],
    picture: pic(
      "full-pu",
      1020,
      462,
      "A school running track seen from the air",
    ),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#b5432c",
        height: 0.12,
        pattern: "granule",
        note: "PSV-301 self textured surface layer, or PSV-302 particle adhesive with PSV-401/402 plastic particles.",
      },
      {
        label: "Middle layer",
        color: "#e8b9a8",
        height: 0.28,
        note: "PSV-201 plastic runway elastic layer.",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: {
      file: `${TDS}/all-plastic-track.pdf`,
      pages: 2,
      size: "2.1 MB",
    },
  },
  {
    slug: "breathable-track",
    name: "Breathable track",
    aka: "permeable rubber track",
    buildUp:
      "A special bottom adhesive, a middle layer of EPDM elastic particles mixed with an environmentally friendly adhesive, and an EPDM particle wear-resistant surface layer.",
    suits:
      "For schools, kindergartens, parks, communities and sports venues: tracks, semi-circular areas, auxiliary areas, fitness paths and playgrounds.",
    advantages: [
      "Economy",
      "Moderate elasticity",
      "Permeability: heavy rain does not produce standing water",
    ],
    picture: pic(
      "permeable",
      870,
      416,
      "A red running track beside a green pitch",
    ),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#b5432c",
        height: 0.12,
        pattern: "granule",
        note: "PSV-302 particle adhesive with PSV-401/402 plastic particles.",
      },
      {
        label: "Middle layer",
        color: "#e5a58e",
        height: 0.28,
        pattern: "granule",
        note: "PSV-303 EPDM particle surface adhesive with PSV 401-406 plastic particles.",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: { file: `${TDS}/breathable-track.pdf`, pages: 2, size: "1.8 MB" },
  },
  {
    slug: "hybrid-track",
    name: "Hybrid track",
    aka: "hybrid rubber track",
    buildUp:
      "A special primer, a middle layer of elastic polyurethane mixed with EPDM rubber particles, and a wear-resistant surface.",
    suits:
      "For schools, kindergartens and professional stadiums: track and field, semi-circle and auxiliary areas, fitness paths, indoor training tracks and playgrounds.",
    advantages: [
      "Cost performance",
      "Shock absorption at 0-50 ℃",
      "Anti nail shoe scratch",
    ],
    picture: pic("hybrid", 560, 338, "Lanes of a red running track"),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#a93c2a",
        height: 0.12,
        pattern: "granule",
        note: "PSV-301 self textured surface layer, or PSV-302 particle adhesive with PSV-401/402 plastic particles.",
      },
      {
        label: "Middle layer",
        color: "#d98e78",
        height: 0.28,
        pattern: "granule",
        note: "PSV-201 plastic runway elastic layer with PSV-401-406 plastic particles.",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: { file: `${TDS}/hybrid-track.pdf`, pages: 2, size: "5.0 MB" },
  },
  {
    slug: "silicon-pu-court",
    name: "Silicon PU court",
    aka: "silicon PU sports court",
    buildUp:
      "A specialized bottom glue, a high elasticity, high strength polyurethane middle layer and an organic silicon modified polyurethane surface layer.",
    suits:
      "For basketball, tennis and badminton courts, indoor and outdoor leisure areas, gyms and health activity centers.",
    advantages: [
      "Comfortable elasticity",
      "Stain resistant",
      "Super wear-resistant",
      "Durable and long-lasting",
    ],
    picture: pic(
      "court",
      947,
      530,
      "Basketball courts in green and red, with white lines",
    ),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#16784a",
        height: 0.08,
        note: "Silicone PU water-based topcoat.",
      },
      {
        label: "Interface layer",
        color: "#5aa57f",
        height: 0.06,
        note: "PSV-304 Silicon PU plastic stadium interface agent.",
      },
      {
        label: "Elastic layer",
        color: "#9fc9b2",
        height: 0.2,
        note: "PSV-201 silicone PU plastic stadium elastic layer, 1.2 to 1.4 kg per mm per m².",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: { file: `${TDS}/silicon-pu-court.pdf`, pages: 2, size: "3.5 MB" },
  },
  {
    slug: "acrylic-court",
    name: "Acrylic court",
    aka: "acrylic sports court, hard or elastic",
    buildUp:
      "A specialized base adhesive, an acrylic mid-layer and a wear-resistant acrylic surface layer. The elastic version builds 5 mm of coarse and fine acrylic elastic coats.",
    suits:
      "For tennis courts, low-cost outdoor basketball courts, lightweight rooftop courts and gym equipment areas. On asphalt or concrete only.",
    advantages: ["Durability", "Rebound", "Load-bearing"],
    picture: pic(
      "acrylic",
      357,
      289,
      "Oriental Yuhong's drawing of the acrylic court layers, a tennis court on top",
    ),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#1f6b45",
        height: 0.06,
        note: "PSV Acrylic Topcoat, red, green or blue, second coat without sand.",
      },
      {
        label: "Textured topcoat layer",
        color: "#1d8a7a",
        height: 0.06,
        pattern: "sand",
        note: "Acrylic topcoat 4 : quartz sand 3, rolled on. Both coats 0.7 to 1.0 kg/m².",
      },
      {
        label: "Acrylic elastic mid-layer",
        color: "#c4553f",
        height: 0.18,
        note: "Coarse, then fine elastic coats with 12% cement, 1 to 2 mm a coat, 1.2 to 1.4 kg per mm per m².",
      },
      {
        label: "Primer",
        color: "#5d7a3a",
        height: 0.05,
        note: "PSV Acrylic Primer 1 : water 4 on concrete. On asphalt, a slurry with PSV-108 adhesive, cement and quartz sand.",
      },
      SUBSTRATE,
    ],
    download: {
      file: `${TDS}/elastic-acrylic-court-guide.pdf`,
      pages: 9,
      size: "0.9 MB",
    },
  },
  {
    slug: "artificial-turf",
    name: "Artificial turf",
    aka: "synthetic turf",
    buildUp:
      "Artificial turf, quartz sand, rubber particles and a shock-absorbing pad, on a concrete base layer.",
    suits:
      "For football fields, basketball courts, tennis courts, hockey fields and golf courses.",
    advantages: [
      "Environmental friendliness",
      "Security: no slipping or scratches",
      "Durable and weather resistant",
      "Lays on asphalt, cement and hard sand",
    ],
    picture: pic("turf", 753, 502, "Close view of synthetic grass fibres"),
    layers: [
      {
        label: "Artificial grass",
        color: "#3c8f3a",
        height: 0.24,
        note: "Laid with special glue. Fibres of polypropylene, or of polyethylene and polypropylene, with UV absorbers.",
      },
      {
        label: "Rubber particles",
        color: "#2c7a44",
        height: 0.12,
        pattern: "granule",
        note: "PSV-407 granules.",
      },
      {
        label: "Quartz sand",
        color: "#e2d7c2",
        height: 0.12,
        pattern: "sand",
      },
      {
        label: "Shock-absorbing pad",
        color: "#c7a884",
        height: 0.16,
        pattern: "foam",
        note: "PSV-104 shock pad, glued with PSV-105 turf adhesive.",
      },
      {
        label: "Concrete base layer",
        color: "#6b6e70",
        height: 0.34,
        pattern: "concrete",
      },
    ],
    download: { file: `${TDS}/artificial-turf.pdf`, pages: 3, size: "6.9 MB" },
  },
  {
    slug: "epdm-walking-track",
    name: "EPDM walking track",
    buildUp:
      "A specialty primer, an EPDM granules base layer and an anti-slip, wear-resistant surface layer.",
    suits: "For fitness trails, walkways and general ground protection.",
    advantages: [
      "Good permeability",
      "Easy to construct and maintain",
      "Versatile application",
    ],
    picture: pic(
      "walking",
      401,
      404,
      "A colourful EPDM play surface in blue, yellow and red",
    ),
    layers: [
      {
        label: "Surface layer",
        color: "#1f6fb5",
        height: 0.12,
        pattern: "granule",
        note: "EPDM granules of different colours, 5 mm, spread to make the patterns. In the 13 mm system: PSV-306 non-yellowing adhesive with PSV-407 1-3 mm granules.",
      },
      {
        label: "Elastic base layer",
        color: "#39383a",
        height: 0.26,
        pattern: "granule",
        note: "Trowel spread, 8 to 10 mm. In the 13 mm system: PSV-211 single-component adhesive with PSV-406 2-4 mm granules.",
      },
      {
        label: "Specialty primer",
        color: "#2d2a26",
        height: 0.06,
        note: "Spread with elastic granules, to enhance the adhesion with the substrate.",
      },
      SUBSTRATE,
    ],
  },
];

export const STAGES = [
  {
    title: "Running track",
    steps: [
      "Foundation construction",
      "Primer coating",
      "Intermediate coating",
      "Surface layer",
      "Runway marking",
    ],
  },
  {
    title: "Sports court",
    steps: [
      "Foundation construction",
      "Primer coating",
      "Intermediate coating",
      "Interface layer",
      "Surface layer",
      "Marking",
    ],
  },
  {
    title: "Artificial turf",
    steps: [
      "Positioning and laying out",
      "Laying",
      "Gluing",
      "Adhesive",
      "Compression",
      "Solidifying",
      "Sand filling",
      "Filling elastic particles",
    ],
  },
];

export const STEPS = [
  {
    title: "Substrate verification",
    text: "Asphalt or concrete, more than 28 days old, flatness of 5 mm or better per 3 m, pull-off strength above 2 MPa.",
    picture: pic(
      "step-primer",
      535,
      399,
      "A worker checking and preparing the substrate",
    ),
  },
  {
    title: "Primer and elastic granules",
    text: "The primer is trowel spread, with elastic granules spread into it to enhance the adhesion.",
    picture: pic(
      "step-base",
      693,
      524,
      "Two workers spreading a green elastic layer",
    ),
  },
  {
    title: "Elastic base layer",
    text: "Trowelled and ironed with an electric trowel, 8 to 10 mm thick.",
    picture: pic(
      "step-iron",
      680,
      513,
      "A worker smoothing the layer with an electric trowel",
    ),
  },
  {
    title: "Positioning and layout",
    text: "All the patterns are drawn out as required.",
    picture: pic(
      "step-layout",
      693,
      506,
      "A coloured play surface marked out in a school yard",
    ),
  },
  {
    title: "Surface layer",
    text: "EPDM granules of different colours make the patterns, 5 mm thick.",
    picture: pic(
      "step-pattern",
      959,
      488,
      "Workers laying coloured patterns of EPDM granules",
    ),
  },
  {
    title: "Spread, trowel, finish",
    text: "The surface granules are spread, trowelled and finished with soapy water.",
    picture: pic(
      "step-finish",
      1100,
      619,
      "Blue granules being finished with a power trowel",
    ),
  },
];

export const SITE = [
  "Concrete of C25 strength, solid, with no laitance or dusting, cured at least 28 days for silicon PU and 20 days for acrylic.",
  "A fall of 0.5 to 0.7% so the court drains. Under a 3 m straightedge, water less than 3 mm deep, at 90% of the test points.",
  "Asphalt cured at least 7 days, SMA at least 10. Porous asphalt takes more primer: agree the quantity on site.",
  "New concrete: expansion joints cut about every 5 × 6 m, 6 to 8 mm wide and at least 20 mm deep, then filled.",
  "Build silicon PU between 5 and 35°C, humidity below 85%, with no rain for 4 hours. Acrylic between 10 and 35°C, humidity below 80%.",
  "Concrete moisture below 8% before silicon PU goes on.",
];

export const EXTRA_DOWNLOADS = [
  {
    file: `${TDS}/sports-flooring-brochure.pdf`,
    label: "Sports flooring brochure, Oriental Yuhong",
    pages: 20,
    note: "4.4 MB",
  },
  {
    file: `${TDS}/silicone-pu-court-guide.pdf`,
    label: "Silicone PU court construction guide",
    pages: 11,
    note: "2.8 MB",
  },
];

export type SystemPage = {
  title: string;
  description: string;
  h1: string;
  /** Held in Dar es Salaam, or ordered per job. */
  stock: "held" | "order";
  film?: string;
  bom?: string;
  stage?: number;
  drying?: "Silicon PU court" | "Elastic acrylic court";
  site?: boolean;
  steps?: boolean;
  extraDownloads?: number[];
  faq: { q: string; lead: string; points?: string[] }[];
};

/** One line per system for the /products shelf. */
export const SPORTS_ONE_LINERS: Record<string, string> = {
  "all-plastic-track":
    "Polyurethane right through, for school and stadium tracks.",
  "breathable-track": "EPDM layers that let heavy rain drain away.",
  "hybrid-track": "Polyurethane with EPDM particles, for cost performance.",
  "silicon-pu-court": "Basketball, tennis and badminton, 5 or 8 mm.",
  "acrylic-court": "Hard or 5 mm elastic, on asphalt or concrete.",
  "artificial-turf":
    "Football pitches on a shock pad, with sand and rubber infill.",
  "epdm-walking-track": "Coloured rubber granules for trails and play areas.",
};

export const LEAD_TIME = "ordered per job, ready in 3 to 5 days";

const ON_TRACK_BASE = {
  q: "What base does a running track need?",
  lead: "Asphalt or concrete, more than 28 days old.",
  points: [
    "Flatness: 5 mm or better per 3 m",
    "Pull-off strength: above 2 MPa",
    "On asphalt, the bottom layer is PSV-102 asphalt concrete base sealing adhesive",
  ],
};

export const SYSTEM_PAGES: Record<string, SystemPage> = {
  "all-plastic-track": {
    title: "Polyurethane Running Track Tanzania - All Plastic | OYH",
    description:
      "Oriental Yuhong all plastic polyurethane running track in Tanzania: layers in 3D, PSV codes, the build film and the manual pages, from Sahihi in Dar es Salaam.",
    h1: "Polyurethane running track in Tanzania.",
    stock: "held",
    film: "rubber-track",
    stage: 0,
    faq: [
      {
        q: "What is an all plastic running track?",
        lead: "A track that is polyurethane right through: bottom adhesive, elastic middle layer and wear-resistant surface.",
        points: [
          "Middle layer: PSV-201 plastic runway elastic layer",
          "Surface: PSV-301 self textured, or PSV-302 with PSV-401/402 particles",
        ],
      },
      {
        q: "Which track does Oriental Yuhong rate best for a school?",
        lead: "The all plastic track: three of three in OYH's selection table for a school track.",
      },
      ON_TRACK_BASE,
    ],
  },
  "breathable-track": {
    title: "Breathable Running Track Tanzania - Permeable EPDM | OYH",
    description:
      "Oriental Yuhong breathable running track in Tanzania: EPDM particles that let rain drain through. Layers in 3D, PSV codes and manual pages, from Sahihi.",
    h1: "Breathable running track in Tanzania.",
    stock: "held",
    film: "rubber-track",
    stage: 0,
    faq: [
      {
        q: "Why choose a breathable track?",
        lead: "Its porous layers let water through, so heavy rain does not leave standing water.",
        points: [
          "The investment cost is relatively low",
          "Water vapour from a hot surface can escape quickly",
        ],
      },
      {
        q: "Where does Oriental Yuhong rate it best?",
        lead: "Fitness trails and kindergartens: three of three in OYH's selection table.",
      },
      ON_TRACK_BASE,
    ],
  },
  "hybrid-track": {
    title: "Hybrid Running Track Tanzania - PU and EPDM | OYH",
    description:
      "Oriental Yuhong hybrid running track in Tanzania: polyurethane with EPDM particles in the middle layer. Layers in 3D, PSV codes, manual pages, from Sahihi.",
    h1: "Hybrid running track in Tanzania.",
    stock: "held",
    film: "rubber-track",
    stage: 0,
    faq: [
      {
        q: "What makes a track hybrid?",
        lead: "Its elastic polyurethane middle layer is filled with EPDM rubber particles.",
        points: [
          "Middle layer: PSV-201 with PSV-401-406 plastic particles",
          "Chosen for cost performance",
        ],
      },
      ON_TRACK_BASE,
    ],
  },
  "silicon-pu-court": {
    title: "Silicon PU Court Tanzania - Basketball, Tennis | OYH",
    description:
      "Oriental Yuhong silicon PU sports court in Tanzania: layers in 3D, the build film, a material calculator in kg and packs, drying times and the guide.",
    h1: "Silicon PU sports courts in Tanzania.",
    stock: "held",
    film: "silicone-pu-court",
    bom: "silicone-pu-court",
    stage: 1,
    drying: "Silicon PU court",
    site: true,
    extraDownloads: [1],
    faq: [
      {
        q: "How thick is a silicon PU court?",
        lead: "Oriental Yuhong lists 5 mm and 8 mm build-ups, on concrete or on asphalt.",
        points: [
          "Elastic layer: 1.2 to 1.4 kg per mm per m², in 2 to 3 coats",
          "Topcoat: 0.2 to 0.4 kg/m², in 2 coats",
        ],
      },
      {
        q: "How long does a silicon PU court take to dry?",
        lead: "Each elastic coat needs 24 hours before the next; interface, finish and lines 8 hours.",
        points: ["At 23°C and 50% relative humidity"],
      },
      {
        q: "Which sports is it for?",
        lead: "Basketball, tennis and badminton, indoors and out, gyms and activity centres.",
      },
    ],
  },
  "acrylic-court": {
    title: "Acrylic Tennis Court Tanzania - Hard and Elastic | OYH",
    description:
      "Oriental Yuhong acrylic sports court in Tanzania, hard or 5 mm elastic: layers in 3D, a material calculator in kg and packs, drying times and the guide.",
    h1: "Acrylic sports courts in Tanzania.",
    stock: "order",
    bom: "acrylic-court",
    stage: 1,
    drying: "Elastic acrylic court",
    site: true,
    faq: [
      {
        q: "Hard acrylic or elastic acrylic?",
        lead: "Hard acrylic is primer and topcoat. Elastic acrylic adds 5 mm of coarse and fine elastic coats under the topcoat.",
      },
      {
        q: "What base can acrylic go on?",
        lead: "Asphalt or concrete only. Oriental Yuhong does not recommend other bases.",
        points: [
          "Acrylic does not stop cracks in the base from coming through",
          "Mix with clean water only, and not too much",
        ],
      },
      {
        q: "Where is an acrylic court used?",
        lead: "Tennis courts, low-cost outdoor basketball courts, lightweight rooftop courts and gym equipment areas.",
      },
    ],
  },
  "artificial-turf": {
    title: "Artificial Turf Tanzania - Football Pitch Grass | OYH",
    description:
      "Oriental Yuhong artificial turf in Tanzania for football pitches: layers in 3D, the build film, a material calculator and the manual pages, from Sahihi.",
    h1: "Artificial turf in Tanzania.",
    stock: "order",
    film: "artificial-turf",
    bom: "turf",
    stage: 2,
    faq: [
      {
        q: "What goes into an artificial turf pitch?",
        lead: "A shock pad, the turf glued at the seams, quartz sand and rubber infill.",
        points: [
          "PSV-104 shock pad and PSV-105 turf adhesive",
          "PSV-601 turf, 10,500 stitches per m²",
          "PSV-407 rubber infill and about 26 kg of quartz sand per m²",
        ],
      },
      {
        q: "Which yarn is available?",
        lead: "8,800, 9,500 or 12,000 Dtex, in Oriental Yuhong's list.",
      },
      {
        q: "What base can turf be laid on?",
        lead: "Asphalt, cement and hard sand sites, according to Oriental Yuhong.",
      },
    ],
  },
  "epdm-walking-track": {
    title: "EPDM Flooring Tanzania - Rubber Granule Surface | OYH",
    description:
      "Oriental Yuhong EPDM rubber granule surface in Tanzania for walkways, play areas and fitness trails: layers in 3D, a calculator and the site steps.",
    h1: "EPDM rubber flooring in Tanzania.",
    stock: "order",
    bom: "epdm-13mm",
    steps: true,
    faq: [
      {
        q: "How is the 13 mm EPDM surface built?",
        lead: "An 8 mm elastic layer of red granules under a 5 mm coloured topcoat.",
        points: [
          "Primer and elastic layer: PSV-211 single-component adhesive",
          "Elastic layer granules: PSV-406, 2 to 4 mm",
          "Topcoat: PSV-306 non-yellowing adhesive with PSV-407 1 to 3 mm granules",
        ],
      },
      {
        q: "Where is EPDM used?",
        lead: "Fitness trails, walkways, play areas and general ground protection.",
      },
    ],
  },
};
