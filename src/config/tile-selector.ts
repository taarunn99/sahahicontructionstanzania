/**
 * THE TILE INSTALLATION SELECTOR (owner, 2026-11-10): which Mapei adhesive,
 * grout, primer and care product for which tiling job. Owns "tile adhesive
 * Tanzania" (SEO-STRATEGY.md 5.3). Types and the fact law:
 * src/config/selector.ts. Every quote is checked by
 * scripts/verify-waterproofing-selector.mjs.
 */

import type { SelectorPlace } from "@/config/selector";

export const TILE_PATH = "/solutions/tile-installation";

const KERAFLEX_ALL_SIZES =
  "Bonding all types and sizes of ceramic tiles (double-fired, single-fired, porcelain tiles, klinker, terracotta, etc.) at thickness up to 15 mm on irregular internal and external substrates and render without skimming the surface prior to bonding";
const KERABOND_INDOOR_OUTDOOR =
  "Indoor and outdoor fixing of ceramic tiles and mosaics of all types on floors and walls.";
const KERAPOXY_POOLS =
  "Grouting swimming pools; particularly suitable for basins containing salt or thermal water.";

export const tilePlaces: SelectorPlace[] = [
  {
    slug: "ceramic",
    label: "Ceramic tiles indoors",
    problem:
      "Standard ceramic wall and floor tiles in houses and offices: the everyday job, on render, block or a cured screed.",
    main: [
      {
        brand: "mapei",
        slug: "mapeset",
        quote:
          "Internal and external bonding of ceramic tiles and mosaics, single-fired and double-fired tiles for floors, walls and ceilings.",
      },
      { brand: "mapei", slug: "kerabond-t", quote: KERABOND_INDOOR_OUTDOOR },
      {
        brand: "mapei",
        slug: "adesilex-p7",
        quote:
          "Interior and exterior bonding of ceramic tiles, porcelain and mosaics on floors, walls and ceilings.",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "keracolor-ff",
        quote: "Grouting floor and wall ceramic tiles in interiors",
      },
    ],
  },
  {
    slug: "porcelain",
    label: "Porcelain and large tiles",
    problem:
      "Dense porcelain barely absorbs, and big tiles need full cover and room to move. The adhesive has to grip and flex.",
    main: [
      { brand: "mapei", slug: "keraflex-maxi-s1", quote: KERAFLEX_ALL_SIZES },
    ],
    details: [
      {
        brand: "mapei",
        slug: "keracolor-ff",
        quote:
          "Grouting particularly smooth and glossy floor surfaces (smooth and polished porcelain, pre-smoothened and polished marble, glazed tiles)",
      },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "mapeset",
        quote: "Large format tiles",
        note: "Not for large format tiles.",
      },
      {
        brand: "mapei",
        slug: "kerabond-t",
        quote:
          "for the installation of non-absorbent tiles (porcelain tiles, single-fired tiles, klinker tiles, etc.) on other non-absorbent wall and floor substrates.",
        note: "Not porcelain onto a non-absorbent base.",
      },
    ],
  },
  {
    slug: "outdoor",
    label: "Outdoors, terraces, façades",
    problem:
      "Sun, rain and heat move the tiles every day. Outside work needs an adhesive and grout made for exterior use.",
    main: [
      {
        brand: "mapei",
        slug: "keraflex-maxi-s1",
        quote:
          "Bonding tiles and strips with profiled or hollow backs (porcelain tiles, klinker, single-fired, and terracotta) on internal and external surfaces.",
      },
      { brand: "mapei", slug: "kerabond-t", quote: KERABOND_INDOOR_OUTDOOR },
    ],
    details: [
      {
        brand: "mapei",
        slug: "keracolor-ff",
        quote:
          "Grouting interior and exterior floor and wall tiling (single-fired, double-fired, klinker, porcelain tile, etc.), stone material (natural stones, marble, granite, agglomerates, etc.), glass and marble mosaics.",
      },
    ],
  },
  {
    slug: "tile-on-tile",
    label: "New tiles over old",
    problem:
      "Renovation without breaking out the old floor: the old tiles have to be sound and clean, and the adhesive made for it.",
    main: [
      {
        brand: "mapei",
        slug: "adesilex-p7",
        quote: "Tile on tile of existing flooring with tiles up to 900 cm²",
      },
      {
        brand: "mapei",
        slug: "keraflex-maxi-s1",
        quote:
          "Overlaying ceramic and stone on existing floors (ceramic, marble, etc.).",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "ultraplan-eco-20",
        quote:
          "Levelling existing concrete pavements, terrazzo, ceramic, natural stone and magnesite floors",
      },
    ],
  },
  {
    slug: "pools",
    label: "Pools and tanks",
    problem:
      "Tiles that live under water: waterproof first, then an adhesive and grout made for immersion.",
    main: [
      {
        brand: "mapei",
        slug: "keraflex-maxi-s1",
        quote: "Bonding tiles in swimming pools and tanks.",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "keracolor-ff",
        quote: "Grouting swimming pools",
      },
      { brand: "mapei", slug: "kerapoxy", quote: KERAPOXY_POOLS },
    ],
  },
  {
    slug: "hygiene",
    label: "Kitchens, food, industry",
    problem:
      "Where acids, fats and washing attack the joints, a cement grout wears out. These areas take an epoxy grout.",
    main: [
      {
        brand: "mapei",
        slug: "kerapoxy",
        quote:
          "Grouting floors and walls in the food industry (dairies, abattoirs, breweries, wine cellars, conserved-food plants, etc.), shops and areas where hygiene is required (ice-cream shops, butchers, fish vendors, etc.).",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "ultracare-stain-protector-w-plus",
        quote:
          "It is suitable for application on food contact surfaces and can be used on floors and coatings, work surfaces, kitchen tops and bathrooms.",
      },
    ],
  },
  {
    slug: "stone",
    label: "Marble and natural stone",
    problem:
      "Stone is heavy, can stain and can be sensitive to water. Choose the adhesive for the stone, then protect the surface.",
    main: [
      {
        brand: "mapei",
        slug: "keraflex-maxi-s1",
        quote:
          "Bonding stone on internal and external surfaces (stable stone, not sensitive to humidity)",
      },
      {
        brand: "mapei",
        slug: "kerapoxy",
        quote: "Bonding marble doorsteps and window sills.",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "ultracare-stain-protector-w-plus",
        quote:
          "UltraCare Stain Protector W Plus is used for stain-resistant treatment of natural stone, marble and granite (including with polished finish), brickwork, cementine tiles and engineered stone, both in internal and external surroundings.",
      },
      {
        brand: "mapei",
        slug: "ultracare-multicleaner",
        quote:
          "marble, granite and all natural stones, perfect for use on polished natural stones that are sensitive to aggressive detergents",
      },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "keraflex-maxi-s1",
        quote:
          "for slabs of marble and natural stone which are subject to efflorescence or staining",
        note: "Stone that stains or effloresces needs a different adhesive; ask us.",
      },
      {
        brand: "mapei",
        slug: "ultracare-hd-cleaner",
        quote: "Do not use on wood or polished stone.",
        note: "Not for polished stone.",
      },
    ],
  },
  {
    slug: "substrates",
    label: "Gypsum, block, concrete walls",
    problem:
      "What is behind the tile decides the system. Gypsum needs a primer first; some adhesives are not made for poured concrete.",
    main: [
      {
        brand: "mapei",
        slug: "primer-g",
        quote:
          "For treating gypsum surfaces prior to installing ceramic tiles.",
      },
      {
        brand: "mapei",
        slug: "adesilex-p7",
        quote: "interior aerated concrete block walls",
      },
      {
        brand: "mapei",
        slug: "keraflex-maxi-s1",
        quote:
          "Installing tiles on precast concrete walls and concrete substrates.",
      },
    ],
    details: [],
    cautions: [
      {
        brand: "mapei",
        slug: "adesilex-p7",
        quote: "on precast and poured concrete walls",
        note: "Not on precast or poured concrete walls.",
      },
      {
        brand: "mapei",
        slug: "kerabond-t",
        quote: "on gypsum board walls",
        note: "Not on gypsum board.",
      },
    ],
  },
  {
    slug: "care",
    label: "Cleaning and care",
    problem:
      "The job is not finished at the grout: cleaning off residue and the right daily cleaner keep tiles looking new.",
    main: [
      {
        brand: "mapei",
        slug: "ultracare-multicleaner",
        quote: "porcelain and ceramic tiles",
      },
      {
        brand: "mapei",
        slug: "ultracare-hd-cleaner",
        quote: "When used undiluted, it removes stains from porcelain tiles.",
      },
      {
        brand: "mapei",
        slug: "ultracare-stain-protector-w-plus",
        quote:
          "The product reduces the amount of water, oil and grease absorbed by the surfaces, making them easier to maintain and clean.",
      },
    ],
    details: [],
  },
];
