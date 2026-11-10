/**
 * THE CONCRETE REPAIR SELECTOR (owner, 2026-11-10): which product for which
 * repair, aimed at the renovation of public and rental housing (NHC's repair
 * programme, TBA's renovations; see reports/). Types and the fact law:
 * src/config/selector.ts. Every quote is checked by
 * scripts/verify-waterproofing-selector.mjs.
 */

import type { SelectorPlace } from "@/config/selector";

export const REPAIR_PATH = "/solutions/concrete-repair";

export const repairPlaces: SelectorPlace[] = [
  {
    slug: "spalling",
    label: "Spalled concrete, rusting steel",
    problem:
      "Concrete has cracked off and the steel shows, often at balcony edges, slab soffits and columns. Clean the steel, protect it, then build the concrete back.",
    main: [
      {
        brand: "mapei",
        slug: "mapegrout-t60",
        quote:
          "Reinstatement of cover to reinforcing steel and re-establishing structural integrity.",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "mapefer-1k",
        quote: "Corrosion-inhibiting protection of concrete reinforcing rods",
      },
    ],
  },
  {
    slug: "structure",
    label: "Beams, columns and slabs",
    problem:
      "A structural element has to be recast, jacketed or strengthened. This is engineer's work: the products follow the design.",
    main: [
      {
        brand: "mapei",
        slug: "mapegrout-me05",
        quote:
          "For pile top treatment and re-profiling, column jacketing, concrete structural repairs, and where particular thickness and void configuration requires the use of a high-flow micro-concrete or grout, for gaps up to 220 mm.",
      },
      {
        brand: "mapei",
        slug: "adesilex-pg2-tg",
        quote:
          "Structural reinforcement of beams and pillars by bonding steel (beton plaqué method) or composite material (e.g. Carboplate) plates to concrete.",
      },
      {
        brand: "mapei",
        slug: "epojet-lv",
        quote:
          "Structural repair of beams, pillars and cracked floors by low pressure injection.",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "eporip",
        quote:
          "Construction joints for the structural reinforcement of beams and pillars.",
      },
      {
        brand: "mapei",
        slug: "mapefer-1k",
        quote: "Adhesion improver for concrete repair mortars.",
      },
    ],
  },
  {
    slug: "cracks",
    label: "Cracks",
    problem:
      "A crack that has stopped moving can be filled or injected. A crack that still moves is a joint, and needs a flexible seal.",
    main: [
      {
        brand: "mapei",
        slug: "epojet-lv",
        quote: "Ideal for sealing static cracks.",
      },
      { brand: "mapei", slug: "eporip", quote: "Filling cracks in concrete." },
    ],
    details: [
      {
        brand: "mapei",
        slug: "adesilex-pg2-tg",
        quote:
          "Sealing injectors and surface damage before injection of Epojet LV by the low-pressure pump.",
      },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "epojet-lv",
        quote: "Do not use Epojet LV for sealing expansion joints.",
        note: "A moving joint needs a flexible sealant.",
      },
    ],
  },
  {
    slug: "new-to-old",
    label: "New concrete onto old",
    problem:
      "Fresh concrete or a new screed laid on hardened concrete lets go at the line between them unless that line is bonded.",
    main: [
      {
        brand: "mapei",
        slug: "eporip",
        quote:
          "Monolithic construction joints between fresh and hardened concrete.",
      },
      {
        brand: "mapei",
        slug: "planicrete-sp",
        quote:
          "Cement slurry with high adhesion for bonding new screeds on to existing screeds and concrete.",
      },
      {
        brand: "x-calibur",
        slug: "x-tech-sbr-bond",
        quote: "Concrete and cementitious substrates",
      },
    ],
    details: [],
    cautions: [
      {
        brand: "mapei",
        slug: "adesilex-pg2-tg",
        quote:
          "Do not use Adesilex PG2 TG for shrinkage joints between fresh and hardened concrete (use Eporip).",
        note: "Its data sheet sends this job to Eporip.",
      },
    ],
  },
  {
    slug: "floors",
    label: "Floors and screeds",
    problem:
      "Old floors are uneven, cracked or damp before the new finish goes down. Seal the cracks, deal with the damp, then level.",
    main: [
      {
        brand: "mapei",
        slug: "ultraplan-eco-20",
        quote:
          "Levelling existing concrete pavements, terrazzo, ceramic, natural stone and magnesite floors",
      },
      {
        brand: "mapei",
        slug: "ultraplan-contract",
        quote:
          "Levelling existing concrete pavements, terrazzo, ceramic and natural stone floors.",
      },
      {
        brand: "mapei",
        slug: "planicrete-sp",
        quote:
          "Screeds and levelling compounds with high-resistance for interior and exterior use.",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "eporip",
        quote: "Sealing cracks in cement screeds.",
      },
      {
        brand: "mapei",
        slug: "primer-g",
        quote:
          "Preparing cement-based surfaces prior to smoothing with self-levelling or thixotropic smoothing compounds.",
      },
      {
        brand: "mapei",
        slug: "triblock-p",
        quote:
          "old ceramic or terrazzo floor dressings on substrates with excessive residual humidity",
      },
    ],
    cautions: [
      {
        brand: "mapei",
        slug: "ultraplan-eco-20",
        quote:
          "Avoid using Ultraplan EC20 for exterior levelling works, particularly when exposed to direct sunlight",
        note: "For indoor floors.",
      },
    ],
  },
  {
    slug: "anchoring",
    label: "Anchors and baseplates",
    problem:
      "Bolts, starter bars and machine bases have to carry load into the concrete. Anchoring and grouting are their own products.",
    main: [
      {
        brand: "mapei",
        slug: "mapefix-ep-50",
        quote:
          "It is specifically formulated for anchoring threaded components and rebar made from steel and galvanized steel that transmit structural loads into solid substrates such as concrete, lightweight concrete, stone, wood and sound masonry.",
      },
      {
        brand: "mapei",
        slug: "mapegrout-me05",
        quote:
          "Grouting of machine and turbine baseplates, bridge bearings, and crane rails",
      },
    ],
    details: [],
    cautions: [
      {
        brand: "mapei",
        slug: "mapegrout-t60",
        quote:
          "Do not use Mapegrout T60 ME for anchoring (use Mapefill GP ME, Mapefill SP ME or Planigrout 300 range).",
        note: "A repair mortar, not an anchoring grout.",
      },
    ],
  },
  {
    slug: "utilities",
    label: "Manholes, drains, water structures",
    problem:
      "Concrete that carries water or sewage is attacked from the wet side. The repair has to stand up to it.",
    main: [
      {
        brand: "mapei",
        slug: "mapegrout-t60",
        quote:
          "Repairs and reinstatement of manholes, sewerage structures and other utilities.",
      },
      {
        brand: "mapei",
        slug: "triblock-p",
        quote: "dressing concrete channels, drains and pipe-work",
      },
    ],
    details: [
      {
        brand: "mapei",
        slug: "mapefer-1k",
        quote: "It can also be used for underground concrete construction.",
      },
    ],
  },
  {
    slug: "new-concrete",
    label: "Better new concrete",
    problem:
      "The cheapest repair is the one never needed: concrete that cracks less and lets less water in.",
    main: [
      {
        brand: "mapei",
        slug: "mapefibre-ns-12",
        quote:
          "Mapefibre NS 12 are recommended to improve the resistance of concrete to cracks caused by plastic shrinkage as well as the fire resistance properties and the durability of concrete.",
      },
      {
        brand: "mapei",
        slug: "idrocrete-kr-1000",
        quote:
          "Idrocrete KR 1000 may be used with any type of concrete when a reduction of permeability is required.",
      },
    ],
    details: [],
    cautions: [
      {
        brand: "mapei",
        slug: "mapefibre-ns-12",
        quote:
          "The use of Mapefibre NS 12 does not offer any advantage from a structural point of view, and may not be considered as an alternative solution to metal reinforcement.",
        note: "Not a replacement for steel reinforcement.",
      },
    ],
  },
];
