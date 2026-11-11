/**
 * THE BLOG REGISTRY (DESIGN-HANDOFF.md 14.1). Routes, the sitemap, the
 * RSS feed, JSON-LD, related posts, category pages and llms.txt all derive
 * from this file. It is also the cannibalization check: no two posts may
 * share a primary query, and none may take a query that SEO-STRATEGY.md
 * section 5 gives to another page.
 *
 * The words of each post are in src/content/blog/<slug>.ts and are joined
 * in src/content/blog/index.ts; a post listed here without content fails
 * the build.
 */

export type BlogCategorySlug =
  | "waterproofing"
  | "tiling"
  | "flooring"
  | "concrete-repair"
  | "tools-and-technique"
  | "building-in-tanzania";

export type BlogCategory = {
  slug: BlogCategorySlug;
  label: string;
  /** Stage class for the category's cards and masthead. */
  stage: "bg-accent" | "bg-line" | "bg-surface";
  /** The written introduction on the category page. */
  intro: string;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "waterproofing",
    label: "Waterproofing",
    stage: "bg-accent",
    intro:
      "Water finds the one place a building was not sealed: the roof slab nobody slopes, the shower floor tiled a day too soon, the tank wall with a cold joint in it. These guides take one of those places at a time. Each explains where the water comes from, which kind of membrane suits that surface, how much of it a square metre takes according to the maker's own data sheet, and how long it needs before tiles or water go on top. They are written for Tanzania's two rainy seasons and its coastal humidity, where a slab dries more slowly than the label assumes.",
  },
  {
    slug: "tiling",
    label: "Tiling",
    stage: "bg-surface",
    intro:
      "Most tiles that lift, crack or sound hollow were fixed with the wrong adhesive, too little of it, or no movement joint. These guides explain the adhesive classes printed on every bag, how much adhesive and grout a floor takes, which trowel suits which tile, and when an epoxy grout earns its place. The figures come from the manufacturers' technical data sheets, and every guide links to the product pages where those sheets can be downloaded and the quantities calculated.",
  },
  {
    slug: "flooring",
    label: "Flooring",
    stage: "bg-line",
    intro:
      "An industrial floor is chosen by what will happen to it: forklifts, hot wash-down, chemicals, or simply dust. These guides compare epoxy, polyurethane and polyurethane-cement floors by thickness and use, explain why coatings blister on damp slabs, and set out what has to be done to the concrete before any resin goes down. They also cover the levelling compounds and primers that sit under vinyl, wood and tile.",
  },
  {
    slug: "concrete-repair",
    label: "Concrete repair",
    stage: "bg-accent",
    intro:
      "Concrete tells you what is wrong with it: a hairline crack, a rust stain, a corner that has come away from the steel. These guides explain how to read those signs, which cracks are a structural engineer's question, and what each repair material is for, from injection resins and repair mortars to non-shrink grouts and chemical anchors. Near the coast, salt in the air makes the steel inside the concrete the first thing to protect.",
  },
  {
    slug: "tools-and-technique",
    label: "Tools and technique",
    stage: "bg-surface",
    intro:
      "Good material fails in careless hands, and the right tool is most of the care. These guides cover the working methods behind a floor that lasts: the notch of the trowel, the levelling clips that hold large tiles flat, how to mix without whipping air in, and how to grout and clean without leaving a haze. Several of the tools can be turned round in 3D on the page.",
  },
  {
    slug: "building-in-tanzania",
    label: "Building in Tanzania",
    stage: "bg-line",
    intro:
      "Building here has its own conditions: two rainy seasons, salt air along the coast, strong sun, and a set of boards and standards that govern who may build and with what. These guides gather that context in one place, with a link to the official source for every rule and figure, so an owner, a contractor or a site engineer can check it for themselves.",
  },
];

export const blogCategoryBySlug = Object.fromEntries(
  blogCategories.map((category) => [category.slug, category]),
) as Record<BlogCategorySlug, BlogCategory>;

/** What sits in the post's hero. Every 3D kind has a drawn or
 *  photographed fallback that is what loads with the page. */
export type PostHero =
  /** The tiled floor that lifts under the cursor (Three.js). */
  | { kind: "floor" }
  /** The waterproofing build-up to turn and pull apart (Three.js). */
  | { kind: "stack" }
  /** A product or tool to turn round: a GLB with its photograph. */
  | {
      kind: "model";
      model: string;
      poster: { src: string; width: number; height: number };
      alt: string;
      caption?: string;
    }
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
    };

export type PostMeta = {
  slug: string;
  /** The H1. */
  title: string;
  /** 60 characters or fewer; the primary query leads. */
  metaTitle: string;
  /** 140 to 160 characters. */
  description: string;
  category: BlogCategorySlug;
  kind: "pillar" | "cluster";
  primaryQuery: string;
  secondaryQueries: string[];
  /** ISO dates. */
  datePublished: string;
  dateModified: string;
  hero: PostHero;
  /** The one product or line page the post sends its reader to. */
  productCta: { href: string; label: string; line: string };
  /** Slugs of related posts. */
  related: string[];
};

const PUBLISHED = "2026-11-06";

/** A model made for an article, from a picture generated for it. */
const madeModel = (name: string, alt: string): PostHero => ({
  kind: "model",
  model: `/models/blog/${name}.glb`,
  poster: { src: `/models/blog/${name}.webp`, width: 1000, height: 1000 },
  alt,
  caption:
    "Illustrative 3D model made for this article, not a drawing to build from.",
});

/** A model of a real tool, from the maker's catalogue photograph. */
const toolModel = (name: string, alt: string): PostHero => ({
  kind: "model",
  model: `/models/blog/${name}.glb`,
  poster: { src: `/models/blog/${name}.webp`, width: 1000, height: 1000 },
  alt,
});

type Entry = Omit<PostMeta, "datePublished" | "dateModified">;

const entries: Entry[] = [
  {
    slug: "why-hidden-roof-houses-leak",
    title: "Why hidden roof houses leak, and the fix that lasts",
    metaTitle: "Hidden roof leaking? Why it happens and the fix that lasts",
    description:
      "Hidden roof leaking: find the leak point at the parapet, gutter, outlets, slab or cracks. Causes, types of fix and stocked products, with data sheet figures.",
    category: "waterproofing",
    kind: "pillar",
    primaryQuery: "hidden roof leaking",
    secondaryQueries: [
      "hidden roof house leaking Tanzania",
      "how to waterproof a concrete gutter",
      "hidden roof slope",
    ],
    hero: madeModel(
      "parapet-roof",
      "Model of a flat concrete roof corner with a parapet, a hidden gutter and a blue waterproofing layer",
    ),
    productCta: {
      href: "/mapei/waterproofing",
      label: "Mapei waterproofing",
      line: "Waterproofing",
    },
    related: [
      "cementitious-vs-liquid-membrane-waterproofing",
      "waterproofing-coverage-per-square-metre",
      "masika-vuli-builders-rain-calendar",
    ],
  },
  {
    slug: "underground-water-tank-waterproofing",
    title: "Waterproofing an underground water tank",
    metaTitle: "Underground water tank waterproofing: a practical guide",
    description:
      "Underground water tank waterproofing: joints, pipes, drinking water coatings, consumption per m² and the wait before filling, from the data sheets.",
    category: "waterproofing",
    kind: "cluster",
    primaryQuery: "underground water tank waterproofing",
    secondaryQueries: [
      "underground tank leaking",
      "coating safe for drinking water tank",
      "how long before filling a tank after waterproofing",
    ],
    hero: madeModel(
      "water-tank",
      "Cutaway model of an underground concrete water tank in soil, with a blue lining on its inner walls",
    ),
    productCta: {
      href: "/mapei/waterproofing/planiseal-88",
      label: "Planiseal 88",
      line: "Waterproofing",
    },
    related: [
      "cementitious-vs-liquid-membrane-waterproofing",
      "waterproofing-coverage-per-square-metre",
      "why-hidden-roof-houses-leak",
    ],
  },
  {
    slug: "waterproofing-coverage-per-square-metre",
    title: "How much waterproofing per square metre: a kg/m² guide",
    metaTitle: "Waterproofing coverage per square metre: a kg/m² guide",
    description:
      "How much waterproofing per square metre: data sheet kg/m² for each stocked product, m² per pack, and a worked bathroom example with the wall upturn included.",
    category: "waterproofing",
    kind: "cluster",
    primaryQuery: "waterproofing coverage per square metre",
    secondaryQueries: [
      "how much waterproofing membrane per m2",
      "how many coats of waterproofing",
      "waterproofing calculator",
    ],
    hero: { kind: "stack" },
    productCta: {
      href: "/mapei/waterproofing",
      label: "Mapei waterproofing",
      line: "Waterproofing",
    },
    related: [
      "cementitious-vs-liquid-membrane-waterproofing",
      "mapei-waiting-times-before-tiling-grouting-walking",
      "why-hidden-roof-houses-leak",
    ],
  },
  {
    slug: "cementitious-vs-liquid-membrane-waterproofing",
    title: "Cementitious, liquid or acrylic membrane: which one",
    metaTitle: "Cementitious vs liquid membrane waterproofing: which to use",
    description:
      "Cementitious, liquid or acrylic membrane: the three families compared from data sheets by uses, exposure and consumption, for bathroom, roof, basement and tank.",
    category: "waterproofing",
    kind: "cluster",
    primaryQuery: "cementitious vs liquid membrane waterproofing",
    secondaryQueries: [
      "cementitious vs acrylic waterproofing",
      "types of waterproofing membrane",
      "which waterproofing is best for a terrace",
    ],
    hero: { kind: "stack" },
    productCta: {
      href: "/mapei/waterproofing",
      label: "Mapei waterproofing",
      line: "Waterproofing",
    },
    related: [
      "waterproofing-coverage-per-square-metre",
      "underground-water-tank-waterproofing",
      "why-hidden-roof-houses-leak",
    ],
  },
  {
    slug: "tile-adhesive-per-square-metre",
    title: "How much tile adhesive per square metre",
    metaTitle: "How Much Tile Adhesive per Square Metre? Rates and Bags",
    description:
      "How much tile adhesive per square metre: printed rates for four adhesives, m² per 25 kg bag, a worked 30 m² room and why the trowel changes the figure.",
    category: "tiling",
    kind: "pillar",
    primaryQuery: "how much tile adhesive per square metre",
    secondaryQueries: [
      "tile adhesive coverage per 25 kg bag",
      "how many bags of tile adhesive do I need",
      "adhesive for 60x60 tiles per m2",
    ],
    hero: { kind: "floor" },
    productCta: {
      href: "/mapei/tile-adhesives-grouts/adesilex-p7",
      label: "Adesilex P7",
      line: "Tile adhesives and grouts",
    },
    related: [
      "trowel-notch-size-for-tile-size",
      "keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t",
      "how-to-mix-tile-adhesive",
    ],
  },
  {
    slug: "why-floor-tiles-pop-up",
    title: "Why floor tiles pop up, lift or sound hollow",
    metaTitle: "Why Tiles Pop Up, Lift or Sound Hollow: Causes and Fixes",
    description:
      "Why tiles pop up, lift or sound hollow: a table of six causes, what to check on site, the fix, and how joints, coverage and curing time prevent it.",
    category: "tiling",
    kind: "cluster",
    primaryQuery: "why tiles pop up",
    secondaryQueries: [
      "hollow sounding tiles",
      "tiles lifting from floor",
      "tiles popping in heat",
    ],
    hero: { kind: "floor" },
    productCta: {
      href: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1",
      label: "Keraflex Maxi S1",
      line: "Tile adhesives and grouts",
    },
    related: [
      "tile-adhesive-vs-sand-and-cement",
      "trowel-notch-size-for-tile-size",
      "joint-sealant-width-depth-coverage",
    ],
  },
  {
    slug: "epoxy-grout-vs-cement-grout",
    title: "Epoxy grout or cement grout: which goes where",
    metaTitle: "Epoxy grout vs cement grout: which goes where",
    description:
      "Epoxy grout vs cement grout compared from Mapei data sheets: joint width, working time, cleaning, where each belongs, and the +30°C limit in Dar es Salaam heat.",
    category: "tiling",
    kind: "cluster",
    primaryQuery: "epoxy grout vs cement grout",
    secondaryQueries: [
      "is epoxy grout waterproof",
      "epoxy grout for bathroom",
      "epoxy grout for kitchen",
    ],
    hero: toolModel("grout-float", "A rubber grout float with a soft handle"),
    productCta: {
      href: "/mapei/tile-adhesives-grouts/kerapoxy",
      label: "Kerapoxy",
      line: "Tile adhesives and grouts",
    },
    related: [
      "mapei-waiting-times-before-tiling-grouting-walking",
      "tile-adhesive-vs-sand-and-cement",
      "why-floor-tiles-pop-up",
    ],
  },
  {
    slug: "tile-adhesive-vs-sand-and-cement",
    title: "Tile adhesive or sand and cement: which to use",
    metaTitle: "Tile adhesive vs cement: which to use, and when",
    description:
      "Tile adhesive vs cement: thick-bed sand and cement against thin-bed adhesive, why porcelain needs adhesive, and when a screed still comes first in Tanzania.",
    category: "tiling",
    kind: "cluster",
    primaryQuery: "tile adhesive vs cement",
    secondaryQueries: [
      "can I use cement to fix tiles",
      "cement vs tile adhesive for porcelain",
      "is tile adhesive stronger than cement",
    ],
    hero: madeModel(
      "tile-bed",
      "Cutaway model of a tiled floor showing the slab, the screed, a ribbed adhesive bed and tiles on top",
    ),
    productCta: {
      href: "/mapei/tile-adhesives-grouts/adesilex-p7",
      label: "Adesilex P7",
      line: "Tile adhesives and grouts",
    },
    related: [
      "keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t",
      "why-floor-tiles-pop-up",
      "screed-or-self-levelling-compound",
    ],
  },
  {
    slug: "keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t",
    title:
      "Keraflex Maxi S1, Adesilex P7, Kerabond T or Mapeset: which Mapei tile adhesive",
    metaTitle: "Keraflex Maxi S1 vs Adesilex P7, Kerabond T or Mapeset",
    description:
      "Mapeset, Kerabond T, Adesilex P7 and Keraflex Maxi S1 compared by class, consumption, pack and limits, from the data sheets, to pick the right tile adhesive.",
    category: "tiling",
    kind: "cluster",
    primaryQuery: "Keraflex Maxi S1 vs Adesilex P7",
    secondaryQueries: [
      "Kerabond T vs Adesilex P7",
      "Mapeset vs Kerabond T",
      "which Mapei tile adhesive for porcelain",
    ],
    hero: madeModel(
      "tile-bed",
      "Cutaway model of a tiled floor showing the slab, the screed, a ribbed adhesive bed and tiles on top",
    ),
    productCta: {
      href: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1",
      label: "Keraflex Maxi S1",
      line: "Tile adhesives and grouts",
    },
    related: [
      "tile-adhesive-per-square-metre",
      "tile-adhesive-vs-sand-and-cement",
      "how-to-mix-tile-adhesive",
    ],
  },
  {
    slug: "mapei-waiting-times-before-tiling-grouting-walking",
    title: "Mapei waiting times: when to tile, grout or walk on it",
    metaTitle: "Mapelastic drying time before tiling: Mapei waiting times",
    description:
      "How long to wait before tiling, grouting or walking on Mapei products: membranes, adhesives, grouts, levelling and primers, with each printed condition.",
    category: "tiling",
    kind: "cluster",
    primaryQuery: "Mapelastic drying time before tiling",
    secondaryQueries: [
      "how long before grouting",
      "Ultraplan drying time",
      "Primer G drying time",
    ],
    hero: { kind: "floor" },
    productCta: {
      href: "/mapei/waterproofing/mapelastic-easy",
      label: "Mapelastic Easy",
      line: "Waterproofing",
    },
    related: [
      "when-to-tile-on-self-levelling-compound",
      "epoxy-grout-vs-cement-grout",
      "waterproofing-coverage-per-square-metre",
    ],
  },
  {
    slug: "why-epoxy-floors-blister-and-peel",
    title: "Why epoxy floors blister and peel, and how to prevent it",
    metaTitle: "Why epoxy floor bubbles and peels: causes and prevention",
    description:
      "Why epoxy floors bubble, blister and peel: moisture, humidity, dew point and poor preparation, with the limits data sheets print and how to prevent each.",
    category: "flooring",
    kind: "pillar",
    primaryQuery: "why epoxy floor bubbles and peels",
    secondaryQueries: [
      "epoxy flooring humidity",
      "pinholes in epoxy floor",
      "can you epoxy a damp floor",
    ],
    hero: madeModel(
      "epoxy-section",
      "Stepped model of an industrial floor: concrete slab, primer and a green resin layer with two blisters",
    ),
    productCta: {
      href: "/mapei/resin-flooring",
      label: "Mapei resin flooring",
      line: "Resin flooring",
    },
    related: [
      "epoxy-floor-thickness",
      "masika-vuli-builders-rain-calendar",
      "screed-or-self-levelling-compound",
    ],
  },
  {
    slug: "epoxy-floor-thickness",
    title: "How thick should an epoxy floor be: coating to screed",
    metaTitle: "Epoxy floor thickness: from coating to screed, in mm",
    description:
      "Epoxy floor thickness explained: eight resin floor types from 150 microns to over 6 mm, what thickness buys, and the material it takes per square metre.",
    category: "flooring",
    kind: "cluster",
    primaryQuery: "epoxy floor thickness",
    secondaryQueries: [
      "self levelling epoxy thickness",
      "epoxy coating vs epoxy flooring",
      "PU cement screed thickness",
    ],
    hero: madeModel(
      "epoxy-section",
      "Stepped model of an industrial floor: concrete slab, primer and a green resin layer",
    ),
    productCta: {
      href: "/mapei/resin-flooring",
      label: "Mapei resin flooring",
      line: "Resin flooring",
    },
    related: [
      "why-epoxy-floors-blister-and-peel",
      "screed-or-self-levelling-compound",
      "self-levelling-compound-per-square-metre",
    ],
  },
  {
    slug: "self-levelling-compound-per-square-metre",
    title: "Self-levelling compound: how many bags per square metre",
    metaTitle: "Self levelling compound per m2: how many bags do you need",
    description:
      "Self levelling compound per m2: 1.6 to 1.7 kg per mm. Bags by area and thickness for Ultraplan Eco 20 and Contract, with water and primer quantities.",
    category: "flooring",
    kind: "cluster",
    primaryQuery: "self levelling compound per m2",
    secondaryQueries: [
      "how much self levelling compound do I need",
      "self levelling compound coverage per bag",
      "how many bags for 20 m2",
    ],
    hero: madeModel(
      "screed-section",
      "Model of a concrete slab half covered by a thick screed and half by a thin smooth levelling layer",
    ),
    productCta: {
      href: "/mapei/primers-levelling",
      label: "Mapei primers and levelling",
      line: "Primers and levelling",
    },
    related: [
      "when-to-tile-on-self-levelling-compound",
      "screed-or-self-levelling-compound",
      "tile-adhesive-per-square-metre",
    ],
  },
  {
    slug: "when-to-tile-on-self-levelling-compound",
    title: "How soon can you tile or lay vinyl on levelling compound",
    metaTitle: "Self levelling compound drying time: tile, vinyl, wood",
    description:
      "Self levelling compound drying time: minimum waits before tiles, vinyl, carpet and wood from two Ultraplan data sheets, and what humid air changes.",
    category: "flooring",
    kind: "cluster",
    primaryQuery: "self levelling compound drying time",
    secondaryQueries: [
      "how long before tiling on levelling compound",
      "when can you walk on self levelling compound",
      "levelling compound wait before wood floor",
    ],
    hero: { kind: "floor" },
    productCta: {
      href: "/mapei/primers-levelling/ultraplan-contract",
      label: "Ultraplan Contract",
      line: "Primers and levelling",
    },
    related: [
      "self-levelling-compound-per-square-metre",
      "screed-or-self-levelling-compound",
      "mapei-waiting-times-before-tiling-grouting-walking",
    ],
  },
  {
    slug: "screed-or-self-levelling-compound",
    title: "Screed or self-levelling compound: which does a floor need",
    metaTitle: "Screed vs Self Levelling Compound: Which Does a Floor Need",
    description:
      "Screed or self-levelling compound: compare thickness, waiting time before tiles, vinyl and wood, and how each is laid, using figures from Mapei data sheets.",
    category: "flooring",
    kind: "cluster",
    primaryQuery: "screed vs self levelling compound",
    secondaryQueries: [
      "can I use self levelling compound instead of screed",
      "how thick should floor screed be",
      "difference between screed and self levelling",
    ],
    hero: madeModel(
      "screed-section",
      "Model of a concrete slab half covered by a thick screed and half by a thin smooth levelling layer",
    ),
    productCta: {
      href: "/mapei/primers-levelling",
      label: "Mapei primers and levelling",
      line: "Primers and levelling",
    },
    related: [
      "self-levelling-compound-per-square-metre",
      "when-to-tile-on-self-levelling-compound",
      "tile-adhesive-vs-sand-and-cement",
    ],
  },
  {
    slug: "joint-sealant-width-depth-coverage",
    title: "Joint sealant sizing: width, depth and metres per pack",
    metaTitle: "Joint Sealant Width to Depth Ratio and Metres per Pack",
    description:
      "Joint sealant width to depth rules from three data sheets, the sum for sealant volume, and a table of metres per 600 ml and 4 litre pack, before wastage.",
    category: "tools-and-technique",
    kind: "cluster",
    primaryQuery: "joint sealant width to depth ratio",
    secondaryQueries: [
      "how much sealant per metre",
      "expansion joint sealant depth",
      "what is a backing rod for",
    ],
    hero: madeModel(
      "sealant-joint",
      "Model of two concrete blocks with a dark sealant bead in the joint and a backing rod behind it",
    ),
    productCta: {
      href: "/mapei/waterproofing/mapeflex-pu-45-ft",
      label: "Mapeflex PU 45 FT",
      line: "Waterproofing",
    },
    related: [
      "why-floor-tiles-pop-up",
      "why-hidden-roof-houses-leak",
      "underground-water-tank-waterproofing",
    ],
  },
  {
    slug: "trowel-notch-size-for-tile-size",
    title: "Trowel notch size by tile size: a metric chart",
    metaTitle: "Trowel notch size for tile size: a metric chart",
    description:
      "Trowel notch size for tile size in mm: Mapei notches, wet bed, back-buttering and how to check coverage by lifting a tile. No guesswork, data sheets only.",
    category: "tools-and-technique",
    kind: "pillar",
    primaryQuery: "trowel notch size for tile size",
    secondaryQueries: [
      "what size trowel for 60x60 tiles",
      "10mm or 12mm notched trowel",
      "trowel size chart mm",
    ],
    hero: madeModel(
      "notched-trowel",
      "Model of a steel notched tiling trowel with a blue handle",
    ),
    productCta: {
      href: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1",
      label: "Keraflex Maxi S1",
      line: "Tile adhesives and grouts",
    },
    related: [
      "tile-adhesive-per-square-metre",
      "how-to-mix-tile-adhesive",
      "why-floor-tiles-pop-up",
    ],
  },
  {
    slug: "how-to-mix-tile-adhesive",
    title: "Mixing tile adhesive: paddle, speed and water",
    metaTitle: "How to mix tile adhesive: paddle, speed, water",
    description:
      "How to mix tile adhesive: water per 25 kg bag for Mapei adhesives, standing time, pot life, low-speed mixing, and what heat does to open time on site.",
    category: "tools-and-technique",
    kind: "cluster",
    primaryQuery: "how to mix tile adhesive",
    secondaryQueries: [
      "how much water per 25 kg tile adhesive",
      "drill speed for mixing adhesive",
      "can you mix tile adhesive by hand",
    ],
    hero: toolModel(
      "mortar-mixer",
      "A portable mortar mixer on a wheeled stand",
    ),
    productCta: {
      href: "/mapei/tile-adhesives-grouts",
      label: "Mapei tile adhesives",
      line: "Tile adhesives and grouts",
    },
    related: [
      "trowel-notch-size-for-tile-size",
      "tile-adhesive-per-square-metre",
      "keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t",
    ],
  },
  {
    slug: "spalling-concrete-repair",
    title: "Rusting rebar and falling concrete: a repair guide",
    metaTitle: "Spalling concrete repair: rusting rebar, falling concrete",
    description:
      "Spalling concrete repair, step by step: why rebar rusts and bursts the cover, how to clean and coat it, rebuild the section, and how much mortar to order.",
    category: "concrete-repair",
    kind: "pillar",
    primaryQuery: "spalling concrete repair",
    secondaryQueries: [
      "exposed rebar repair",
      "rusted reinforcement in slab",
      "concrete falling off ceiling",
    ],
    hero: madeModel(
      "spalled-column",
      "Model of a concrete column with a broken corner exposing rusty reinforcing bars",
    ),
    productCta: {
      href: "/mapei/concrete-repair/mapegrout-t60",
      label: "Mapegrout T60",
      line: "Concrete repair",
    },
    related: [
      "how-to-grout-a-base-plate",
      "masika-vuli-builders-rain-calendar",
    ],
  },
  {
    slug: "how-to-grout-a-base-plate",
    title: "How to grout a base plate with non-shrink grout",
    metaTitle: "How to grout a base plate with non-shrink grout",
    description:
      "How to grout a base plate: prepare and soak the concrete, form and head, mixing water, one-side pour, curing, and a worked example of how many bags to buy.",
    category: "concrete-repair",
    kind: "cluster",
    primaryQuery: "how to grout a base plate",
    secondaryQueries: [
      "grout thickness under base plate",
      "non shrink grout mixing ratio water",
      "how many bags of grout",
    ],
    hero: madeModel(
      "base-plate",
      "Model of a steel column on a bolted base plate, with grout between the plate and the concrete block",
    ),
    productCta: {
      href: "/mapei/concrete-repair/mapegrout-me05",
      label: "Mapegrout ME05",
      line: "Concrete repair",
    },
    related: [
      "spalling-concrete-repair",
      "construction-companies-tanzania-crb-classes",
    ],
  },
  {
    slug: "construction-companies-tanzania-crb-classes",
    title: "Construction companies in Tanzania: CRB classes explained",
    metaTitle: "Construction Companies in Tanzania: CRB Classes Explained",
    description:
      "How CRB classes work for construction companies in Tanzania: categories, class limits, storey caps, how to check a contractor and what to ask before signing.",
    category: "building-in-tanzania",
    kind: "pillar",
    primaryQuery: "construction companies in Tanzania",
    secondaryQueries: [
      "registered contractors Tanzania",
      "how to check a contractor Tanzania",
      "CRB class limits",
    ],
    hero: madeModel(
      "building-frame",
      "Model of a three-storey concrete frame building under construction, with scaffolding and a yellow crane",
    ),
    productCta: {
      href: "/mapei/waterproofing",
      label: "Mapei waterproofing",
      line: "Waterproofing",
    },
    related: [
      "masika-vuli-builders-rain-calendar",
      "why-hidden-roof-houses-leak",
    ],
  },
  {
    slug: "masika-vuli-builders-rain-calendar",
    title: "Masika and vuli: a builder's rain calendar for Tanzania",
    metaTitle: "Masika and Vuli Rainy Season: A Tanzanian Builder's Calendar",
    description:
      "When masika, vuli and msimu fall in each Tanzanian region, from TMA, and when to schedule roof waterproofing, concrete pours, terrace tiling and resin floors.",
    category: "building-in-tanzania",
    kind: "cluster",
    primaryQuery: "masika and vuli rainy season",
    secondaryQueries: [
      "rainy season Dar es Salaam",
      "msimu rains regions",
      "best time to build in Tanzania",
    ],
    hero: madeModel(
      "rain-house",
      "Model of a small flat-roofed house on red earth with a blue rain cloud above it",
    ),
    productCta: {
      href: "/mapei/waterproofing/mapelastic-easy",
      label: "Mapelastic Easy",
      line: "Waterproofing",
    },
    related: [
      "why-hidden-roof-houses-leak",
      "construction-companies-tanzania-crb-classes",
      "why-epoxy-floors-blister-and-peel",
    ],
  },
];

export const posts: PostMeta[] = entries.map((entry) => ({
  ...entry,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
}));

export const postBySlug = Object.fromEntries(
  posts.map((post) => [post.slug, post]),
) as Record<string, PostMeta>;

export const postsInCategory = (slug: BlogCategorySlug) =>
  posts.filter((post) => post.category === slug);

// ---- Integrity checks: the build fails rather than publish a bad registry ----
{
  const seen = new Set<string>();
  const queries = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug))
      throw new Error(`blog: duplicate slug "${post.slug}"`);
    seen.add(post.slug);
    const query = post.primaryQuery.toLowerCase();
    if (queries.has(query))
      throw new Error(`blog: two posts target "${post.primaryQuery}"`);
    queries.add(query);
    if (post.metaTitle.length > 60)
      throw new Error(`blog: "${post.slug}" meta title is over 60 characters`);
    if (post.description.length < 120 || post.description.length > 160)
      throw new Error(
        `blog: "${post.slug}" description is ${post.description.length} characters`,
      );
    if (!blogCategoryBySlug[post.category])
      throw new Error(`blog: "${post.slug}" has an unknown category`);
  }
  for (const post of posts)
    for (const related of post.related)
      if (!seen.has(related))
        throw new Error(`blog: "${post.slug}" relates to missing "${related}"`);
}
