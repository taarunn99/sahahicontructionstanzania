import decorList from "@/config/vasa-decors.json";

/**
 * VASA: SPC and LVT flooring and wall panels. Everything here is from the owner's
 * "VASA FLOOR - SPC/LVT" catalogue (assets/source/vasa). `npm test` checks
 * src/content/vasa against its two technical data pages, published in
 * public/tds/vasa. The decor pictures are cut from the catalogue, code by code.
 *
 * The range is held in Dar es Salaam (owner, 2026-11-09), but no list says which
 * decors, so no page says a given decor is in stock. The owner's word is
 * "authorized dealer": docs/OPEN-QUESTIONS.md Q2.
 */

export type VasaCollectionSlug =
  "spc-5" | "spc-8" | "lvt-2" | "film-wall" | "digital-wall";

export type VasaDecor = {
  code: string;
  collection: VasaCollectionSlug;
  size: string;
  look: string;
  src: string;
  width: number;
  height: number;
};

export const vasaDecors = decorList as VasaDecor[];

export const decorsIn = (slug: VasaCollectionSlug) =>
  vasaDecors.filter((decor) => decor.collection === slug);

const room = (name: string, height: number) => ({
  src: `/images/vasa/rooms/${name}.webp`,
  width: 1400,
  height,
});

export const vasaCollections: {
  slug: VasaCollectionSlug;
  name: string;
  line: string;
  href: string;
  picture: { src: string; width: number; height: number };
  alt: string;
}[] = [
  {
    slug: "spc-5",
    name: "5 mm SPC, random pattern",
    line: "Wood planks, herringbone and tile formats.",
    href: "/vasa/spc-flooring#spc-5",
    picture: room("spc5", 652),
    alt: "A cafe with a pale wood floor and hexagon ceiling lights",
  },
  {
    slug: "spc-8",
    name: "8 mm SPC, matched pattern",
    line: "Wide wood planks, 229 x 1522 mm.",
    href: "/vasa/spc-flooring#spc-8",
    picture: room("spc8", 655),
    alt: "A bedroom with a wide plank wood floor",
  },
  {
    slug: "lvt-2",
    name: "2 mm LVT, random pattern",
    line: "Carpet, stone and wood looks.",
    href: "/vasa/lvt-flooring#lvt-2",
    picture: room("lvt", 656),
    alt: "A lounge with a blue carpet-look floor and a curved white sofa",
  },
  {
    slug: "film-wall",
    name: "Colored film wall panel",
    line: "Wood, fabric and stone looks, 1200 x 2800 mm.",
    href: "/vasa/wall-panels#film-wall",
    picture: room("film", 657),
    alt: "A living room with pale wall panels and a low sofa",
  },
  {
    slug: "digital-wall",
    name: "Digital wall panel, mirror finish",
    line: "Marble, murals and wood, printed at 600 to 1200 dpi.",
    href: "/vasa/wall-panels#digital-wall",
    picture: room("digital", 641),
    alt: "A dining table in front of a green marble-look wall panel",
  },
];

export const spcLayers = [
  {
    label: "UV Coating",
    color: "#f4f1ea",
    height: 0.05,
    opacity: 0.55,
    note: "The clear top coat.",
  },
  {
    label: "Wear Layer",
    color: "#dfe7e6",
    height: 0.08,
    opacity: 0.6,
    note: "0.2, 0.3 or 0.55 mm, which sets the utility class.",
  },
  {
    label: "PVC Decor Film",
    color: "#c9a877",
    height: 0.06,
    decor: true,
    note: "The printed decor. Pick one below to see it on the plank.",
  },
  {
    label: "Rigid Core",
    color: "#8f9490",
    height: 0.42,
    pattern: "concrete" as const,
    note: "The stone plastic composite core, with the click profile.",
  },
  {
    label: "IXPE (optional)",
    color: "#6d7f8b",
    height: 0.14,
    pattern: "foam" as const,
    note: "An optional underlay fixed to the plank.",
  },
];

export const lvtLayers = [
  {
    label: "UV Coating",
    color: "#f4f1ea",
    height: 0.05,
    opacity: 0.55,
    note: "The clear top coat.",
  },
  {
    label: "Wear Layer",
    color: "#dfe7e6",
    height: 0.08,
    opacity: 0.6,
    note: "0.2, 0.3 or 0.55 mm, which sets the utility class.",
  },
  {
    label: "PVC Decor Film",
    color: "#7c8c95",
    height: 0.06,
    decor: true,
    note: "The printed decor. Pick one below to see it on the tile.",
  },
  {
    label: "PVC Middle Layer",
    color: "#a89f8f",
    height: 0.2,
    note: "The soft middle of the tile.",
  },
  {
    label: "Balance Layer",
    color: "#6a635a",
    height: 0.1,
    note: "Holds the tile flat.",
  },
];

export const wallLayers = [
  {
    label: "UV Coating",
    color: "#f4f1ea",
    height: 0.05,
    opacity: 0.55,
    note: "The clear top coat.",
  },
  {
    label: "Wearlayer",
    color: "#dfe7e6",
    height: 0.08,
    opacity: 0.6,
    note: "Protects the print.",
  },
  {
    label: "Digital print design",
    color: "#3f8f79",
    height: 0.06,
    decor: true,
    note: "600 to 1200 dpi, with 10 sqm before a pattern repeats. Pick a design below.",
  },
  {
    label: "SPC core",
    color: "#8f9490",
    height: 0.36,
    pattern: "concrete" as const,
    note: "The rigid core of the panel.",
  },
  {
    label: "Click",
    color: "#6a635a",
    height: 0.1,
    note: "The panels join edge to edge.",
  },
];

export const spcAdvantages = [
  "Formaldehyde-free and environmentally friendly: no glue used in raw materials, production and installation",
  "Easy installation with lock and fold system",
  "Suitable for underfloor heating",
  "Noise reduction and sound insulation",
  "Waterproof and moisture-proof",
  "Fire-resistant and flame-retardant",
  "Ultra-durable and wear-resistant",
];

export const lvtAdvantages = [
  "Formaldehyde-free and environmentally friendly: no glue used in raw materials, production and installation",
  "Waterproof and moisture-proof",
  "Recyclable and reusable",
  "Soft flooring for comfortable foot feel",
  "Various flexible installation methods: lock and fold, adhesive laying and self-adhesive sinking",
];

export const wallAdvantages = [
  "A resolution of 600 to 1200 dpi",
  "10 sqm with no pattern repeat",
  "The texture and touch of the digital print can be compared with real materials",
  "Support for personalized and customized designs",
];

/** SPC against LVT, side by side, both columns from the technical data pages. */
export const spcVsLvt = [
  { label: "Overall thickness", spc: "3.5 to 8.0 mm", lvt: "2.0 to 3.0 mm" },
  { label: "Core", spc: "Rigid core", lvt: "PVC middle layer" },
  { label: "Underlay", spc: "IXPE, optional", lvt: "None listed" },
  {
    label: "Installation",
    spc: "Click: UNILIN, VALINGE or I4F",
    lvt: "Lock and fold, adhesive or self-adhesive",
  },
  { label: "Feel", spc: "Rigid", lvt: "Soft underfoot" },
  { label: "Dimensional stability", spc: "≤0.1%", lvt: "≤0.15%" },
  { label: "Reaction to fire", spc: "Bfl-s1", lvt: "Bfl-s1" },
  { label: "Wear layer", spc: "0.2, 0.3, 0.55 mm", lvt: "0.2, 0.3, 0.55 mm" },
];

export const vasaDocs = {
  spc: { file: "/tds/vasa/spc.pdf", label: "SPC technical data", pages: 1 },
  lvt: { file: "/tds/vasa/lvt.pdf", label: "LVT technical data", pages: 1 },
  catalogue: {
    file: "/tds/vasa/vasa-catalogue.pdf",
    label: "The full Vasa catalogue",
    pages: 41,
  },
};
