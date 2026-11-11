import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the Journal (metadata pass, 2026-11-12): the index
 * ("blog"), the six categories ("category/<slug>") and the 22 posts, keyed
 * by slug. Posts keep their metaTitle/description in src/config/blog.ts
 * (the page template reads them there); this map records the query each
 * post owns and the final strings for the audit. Titles follow blog/10:
 * "<query as typed> - <what the post delivers>". `dateModified` is not
 * touched for a metadata-only edit. `Partial` comes off once every row is
 * written.
 *
 * The index and the category pages read their title and description from
 * here (`titleOverride` is the whole title; there is no item pattern for the
 * Journal). Category queries carry "guides" so they never collide with the
 * /solutions pillars ("waterproofing Tanzania", "tile adhesive Tanzania",
 * "concrete repair Tanzania"). Post rows mirror src/config/blog.ts string
 * for string; docs/seo/2026-11-12/blog.md is the audit table.
 */

export const BLOG_KEYS = [
  "blog",
  "category/waterproofing",
  "category/tiling",
  "category/flooring",
  "category/concrete-repair",
  "category/tools-and-technique",
  "category/building-in-tanzania",
  "why-hidden-roof-houses-leak",
  "underground-water-tank-waterproofing",
  "waterproofing-coverage-per-square-metre",
  "cementitious-vs-liquid-membrane-waterproofing",
  "tile-adhesive-per-square-metre",
  "why-floor-tiles-pop-up",
  "epoxy-grout-vs-cement-grout",
  "tile-adhesive-vs-sand-and-cement",
  "keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t",
  "mapei-waiting-times-before-tiling-grouting-walking",
  "why-epoxy-floors-blister-and-peel",
  "epoxy-floor-thickness",
  "self-levelling-compound-per-square-metre",
  "when-to-tile-on-self-levelling-compound",
  "screed-or-self-levelling-compound",
  "joint-sealant-width-depth-coverage",
  "trowel-notch-size-for-tile-size",
  "how-to-mix-tile-adhesive",
  "spalling-concrete-repair",
  "how-to-grout-a-base-plate",
  "construction-companies-tanzania-crb-classes",
  "masika-vuli-builders-rain-calendar",
] as const;

export type BlogKey = (typeof BLOG_KEYS)[number];

export const blogSeo: Partial<Record<BlogKey, SeoRow>> = {
  // The index
  blog: {
    query: "building guides Tanzania",
    titleOverride:
      "Building Guides for Tanzania - Waterproofing, Tiling, Floors",
    description:
      "Building guides for Tanzania: waterproofing, tile adhesive and grout, resin floors, concrete repair and tiling tools, with figures from the data sheets.",
    stock: "enquire",
  },

  // The six categories
  "category/waterproofing": {
    query: "waterproofing guides Tanzania",
    titleOverride: "Waterproofing Guides for Tanzania - Roofs, Tanks, Wet Rooms",
    description:
      "Guides to waterproofing in Tanzania: why hidden roofs leak, sealing underground tanks, kg per m2 for each membrane and which type suits which surface.",
    stock: "enquire",
  },
  "category/tiling": {
    query: "tiling guides Tanzania",
    titleOverride: "Tiling Guides for Tanzania - Adhesive, Grout, Lifted Tiles",
    description:
      "Guides to tiling in Tanzania: adhesive per m2, why tiles lift, epoxy or cement grout, adhesive or sand and cement, and Mapei waiting times, from data sheets.",
    stock: "enquire",
  },
  "category/flooring": {
    query: "flooring guides Tanzania",
    titleOverride: "Flooring Guides for Tanzania - Epoxy, Levelling, Screeds",
    description:
      "Guides to resin and levelled floors in Tanzania: epoxy thickness, why coatings blister, self levelling compound per m2 and drying time, screed or compound.",
    stock: "enquire",
  },
  "category/concrete-repair": {
    query: "concrete repair guides Tanzania",
    titleOverride: "Concrete Repair Guides for Tanzania - Spalling, Grouting",
    description:
      "Guides to concrete repair in Tanzania: spalling and rusting rebar repaired step by step, and grouting a base plate, with quantities from the data sheets.",
    stock: "enquire",
  },
  "category/tools-and-technique": {
    query: "tiling tools and technique",
    titleOverride: "Tiling Tools and Technique - Trowel Notch, Mixing, Sealant",
    description:
      "Guides to tiling tools and technique: trowel notch by tile size, adhesive mixing by paddle, speed and water, and joint sealant width, depth and metres per pack.",
    stock: "enquire",
  },
  "category/building-in-tanzania": {
    query: "building in Tanzania guides",
    titleOverride: "Building in Tanzania Guides - Rain Calendar, CRB Classes",
    description:
      "Guides to building in Tanzania: how CRB classes work for construction companies, and when the masika and vuli rains fall in each region, with official sources.",
    stock: "enquire",
  },

  // Waterproofing
  "why-hidden-roof-houses-leak": {
    query: "hidden roof leaking",
    titleOverride: "Hidden roof leaking? Why it happens and the fix that lasts",
    description:
      "Hidden roof leaking: find the leak point at the parapet, gutter, outlets, slab or cracks. Causes, types of fix and stocked products, with data sheet figures.",
    // The post names Mapei products held in Dar es Salaam.
    stock: "held",
  },
  "underground-water-tank-waterproofing": {
    query: "underground water tank waterproofing",
    titleOverride: "Underground water tank waterproofing: a practical guide",
    description:
      "Underground water tank waterproofing: joints, pipes, drinking water coatings, consumption per m² and the wait before filling, from the data sheets.",
    stock: "enquire",
  },
  "waterproofing-coverage-per-square-metre": {
    query: "waterproofing coverage per square metre",
    titleOverride: "Waterproofing coverage per square metre: a kg/m² guide",
    description:
      "How much waterproofing per square metre: data sheet kg/m² for each stocked product, m² per pack, and a worked bathroom example with the wall upturn included.",
    // The post names Mapei products held in Dar es Salaam.
    stock: "held",
  },
  "cementitious-vs-liquid-membrane-waterproofing": {
    query: "cementitious vs liquid membrane waterproofing",
    titleOverride: "Cementitious vs liquid membrane waterproofing: which to use",
    description:
      "Cementitious, liquid or acrylic membrane: the three families compared from data sheets by uses, exposure and consumption, for bathroom, roof, basement and tank.",
    stock: "enquire",
  },

  // Tiling
  "tile-adhesive-per-square-metre": {
    query: "how much tile adhesive per square metre",
    titleOverride: "How Much Tile Adhesive per Square Metre? Rates and Bags",
    description:
      "How much tile adhesive per square metre: printed rates for four adhesives, m² per 25 kg bag, a worked 30 m² room and why the trowel changes the figure.",
    stock: "enquire",
  },
  "why-floor-tiles-pop-up": {
    query: "why tiles pop up",
    titleOverride: "Why Tiles Pop Up, Lift or Sound Hollow: Causes and Fixes",
    description:
      "Why tiles pop up, lift or sound hollow: a table of six causes, what to check on site, the fix, and how joints, coverage and curing time prevent it.",
    stock: "enquire",
  },
  "epoxy-grout-vs-cement-grout": {
    query: "epoxy grout vs cement grout",
    titleOverride: "Epoxy grout vs cement grout: which goes where",
    description:
      "Epoxy grout vs cement grout compared from Mapei data sheets: joint width, working time, cleaning, where each belongs, and the +30°C limit in Dar es Salaam heat.",
    stock: "enquire",
  },
  "tile-adhesive-vs-sand-and-cement": {
    query: "tile adhesive vs cement",
    titleOverride: "Tile adhesive vs cement: which to use, and when",
    description:
      "Tile adhesive vs cement: thick-bed sand and cement against thin-bed adhesive, why porcelain needs adhesive, and when a screed still comes first in Tanzania.",
    stock: "enquire",
  },
  "keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t": {
    query: "Keraflex Maxi S1 vs Adesilex P7",
    titleOverride: "Keraflex Maxi S1 vs Adesilex P7, Kerabond T or Mapeset",
    description:
      "Mapeset, Kerabond T, Adesilex P7 and Keraflex Maxi S1 compared by class, consumption, pack and limits, from the data sheets, to pick the right tile adhesive.",
    stock: "enquire",
  },
  "mapei-waiting-times-before-tiling-grouting-walking": {
    query: "Mapelastic drying time before tiling",
    titleOverride: "Mapelastic drying time before tiling: Mapei waiting times",
    description:
      "How long to wait before tiling, grouting or walking on Mapei products: membranes, adhesives, grouts, levelling and primers, with each printed condition.",
    stock: "enquire",
  },

  // Flooring
  "why-epoxy-floors-blister-and-peel": {
    query: "why epoxy floor bubbles and peels",
    titleOverride: "Why epoxy floor bubbles and peels: causes and prevention",
    description:
      "Why epoxy floors bubble, blister and peel: moisture, humidity, dew point and poor preparation, with the limits data sheets print and how to prevent each.",
    stock: "enquire",
  },
  "epoxy-floor-thickness": {
    query: "epoxy floor thickness",
    titleOverride: "Epoxy floor thickness: from coating to screed, in mm",
    description:
      "Epoxy floor thickness explained: eight resin floor types from 150 microns to over 6 mm, what thickness buys, and the material it takes per square metre.",
    stock: "enquire",
  },
  "self-levelling-compound-per-square-metre": {
    query: "self levelling compound per m2",
    titleOverride: "Self levelling compound per m2: how many bags do you need",
    description:
      "Self levelling compound per m2: 1.6 to 1.7 kg per mm. Bags by area and thickness for Ultraplan Eco 20 and Contract, with water and primer quantities.",
    stock: "enquire",
  },
  "when-to-tile-on-self-levelling-compound": {
    query: "self levelling compound drying time",
    titleOverride: "Self levelling compound drying time: tile, vinyl, wood",
    description:
      "Self levelling compound drying time: minimum waits before tiles, vinyl, carpet and wood from two Ultraplan data sheets, and what humid air changes.",
    stock: "enquire",
  },
  "screed-or-self-levelling-compound": {
    query: "screed vs self levelling compound",
    titleOverride: "Screed vs Self Levelling Compound: Which Does a Floor Need",
    description:
      "Screed or self-levelling compound: compare thickness, waiting time before tiles, vinyl and wood, and how each is laid, using figures from Mapei data sheets.",
    stock: "enquire",
  },

  // Tools and technique
  "joint-sealant-width-depth-coverage": {
    query: "joint sealant width to depth ratio",
    titleOverride: "Joint Sealant Width to Depth Ratio and Metres per Pack",
    description:
      "Joint sealant width to depth rules from three data sheets, the sum for sealant volume, and a table of metres per 600 ml and 4 litre pack, before wastage.",
    stock: "enquire",
  },
  "trowel-notch-size-for-tile-size": {
    query: "trowel notch size for tile size",
    titleOverride: "Trowel notch size for tile size: a metric chart",
    description:
      "Trowel notch size for tile size in mm: Mapei notches, wet bed, back-buttering and how to check coverage by lifting a tile. No guesswork, data sheets only.",
    stock: "enquire",
  },
  "how-to-mix-tile-adhesive": {
    query: "how to mix tile adhesive",
    titleOverride: "How to mix tile adhesive: paddle, speed, water",
    description:
      "How to mix tile adhesive: water per 25 kg bag for Mapei adhesives, standing time, pot life, low-speed mixing, and what heat does to open time on site.",
    stock: "enquire",
  },

  // Concrete repair
  "spalling-concrete-repair": {
    query: "spalling concrete repair",
    titleOverride: "Spalling concrete repair: rusting rebar, falling concrete",
    description:
      "Spalling concrete repair, step by step: why rebar rusts and bursts the cover, how to clean and coat it, rebuild the section, and how much mortar to order.",
    stock: "enquire",
  },
  "how-to-grout-a-base-plate": {
    query: "how to grout a base plate",
    titleOverride: "How to grout a base plate with non-shrink grout",
    description:
      "How to grout a base plate: prepare and soak the concrete, form and head, mixing water, one-side pour, curing, and a worked example of how many bags to buy.",
    stock: "enquire",
  },

  // Building in Tanzania
  "construction-companies-tanzania-crb-classes": {
    query: "construction companies in Tanzania",
    titleOverride: "Construction Companies in Tanzania: CRB Classes Explained",
    description:
      "How CRB classes work for construction companies in Tanzania: categories, class limits, storey caps, how to check a contractor and what to ask before signing.",
    stock: "enquire",
  },
  "masika-vuli-builders-rain-calendar": {
    query: "masika and vuli rainy season",
    titleOverride: "Masika and Vuli Rainy Season: A Tanzanian Builder's Calendar",
    description:
      "When masika, vuli and msimu fall in each Tanzanian region, from TMA, and when to schedule roof waterproofing, concrete pours, terrace tiling and resin floors.",
    stock: "enquire",
  },
};
