import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the 81 BIHUI tool pages and the hub (metadata pass,
 * 2026-11-12), keyed by family slug (src/config/bihui-catalogue.json).
 * "Tanzania" goes in the title only where a real local query exists
 * (`geo: true`, thirteen families plus the hub); the rest keep it in the
 * description. Source typos in names are corrected through `titleOverride`
 * and logged in docs/BIHUI-EXTRACTION.md. Authorization wording: "brand
 * partner". Stock is "order" on every row: the owner's word (2026-11-06) is
 * that any tool can be arranged 4 days after confirmation, and no list says
 * one is held in the warehouse. Every fact in a description is from the
 * catalogue row; rows the extraction report doubts (swapped codes, printed
 * sizes that contradict the code) say so instead of printing the figure.
 * `Partial` comes off once every row is written.
 */

export const BIHUI_SLUGS = [
  "bihui",
  "drill-position-scale",
  "metal-hole-drill-guide",
  "tile-spirit-level",
  "silicon-application-kit-2pcs",
  "caulk-tool-set-3pcs",
  "silicon-application-set-4pcs",
  "aluminum-box-screed-set",
  "jumbo-trowel-set-8pcs",
  "professional-trowel-stainless-steel",
  "professional-trowel-carbon-steel",
  "putty-scraper",
  "switchable-putty-scraper-kit",
  "tile-remover",
  "taping-knife",
  "notched-taping-knife",
  "drywall-skimming-scraper",
  "nylon-paint-roller",
  "telescope-handle",
  "epoxy-grout-float-thermoplastic-rubber-pad",
  "epoxy-grout-rubber-float",
  "epoxy-grout-float-green-hard-rubber",
  "grout-float-tpr-soft-handle",
  "cellulose-sponge",
  "combination-hydro-grout-sponge",
  "dual-combination-microfibre-sponge",
  "hydro-grout-sponge",
  "pro-germany-hydro-grouting-sponge",
  "levelling-spacer-post-sl",
  "spin-level-fast-clip-cap",
  "levelling-spacer-post-blt",
  "levelling-window-cap",
  "reusable-tile-leveling-system",
  "tile-leveling-base",
  "levelling-base",
  "leveling-cap-wedges",
  "leveling-plier",
  "levelling-system-removal-roller",
  "electric-mixer",
  "levelling-compound-mixing-station",
  "big-spiral-mixer",
  "bucket-liner-20l",
  "mixer-station-with-timer",
  "portable-mortar-mixer",
  "concrete-grinder-1900w",
  "concrete-grinder-2000w",
  "concrete-grinder-working-stand",
  "angle-grinder",
  "cutting-dust-extractor",
  "laser-level-16-line",
  "laser-level-12-line",
  "laser-level-llg05",
  "laser-level-tripod",
  "tile-gap-adjuster-with-suction-cups",
  "tri-head-suction-cup",
  "double-suction-cup",
  "diamond-hand-pad",
  "dry-diamond-polishing-pad",
  "rubber-packing-pad",
  "tile-repairing-kit",
  "measuring-tape-wide-blade",
  "measuring-ruler-rotating-shell",
  "underlayment-embedding-roller",
  "extendable-floor-roller",
  "spazzle",
  "floor-protector",
  "carpet-protector",
  "waterproof-protective-film",
  "sticky-mat",
  "mitre-jolly-cutting-system",
  "electric-cutting-system",
  "cutting-rail-system",
  "water-cooling-parts",
  "trade-manual-cutting-system",
  "strong-manual-tile-cutter",
  "fast-tile-cutter",
  "tilers-working-bench-master",
  "resin-bound-dual-handle-trowel",
  "resin-bound-pointing-trowel",
  "trim-cutter",
  "multifunction-trim-puller",
  "corner-putty-knife",
] as const;

export type BihuiSlug = (typeof BIHUI_SLUGS)[number];

export const bihuiSeo: Partial<Record<BihuiSlug, SeoRow>> = {
  // ---- Hub ------------------------------------------------------------------
  bihui: {
    query: "BIHUI Tanzania",
    titleOverride: "BIHUI Tanzania - Tile Levelling, Trowels, Mixers, Cutters",
    description:
      "BIHUI Tanzania: tiling tools from Sahihi in Dar es Salaam. Levelling systems, trowels, floats, mixers, grinders, laser levels and cutters, most of them in 3D.",
    stock: "order",
    geo: true,
  },

  // ---- Drill guides, workbench and repair tools -----------------------------
  "drill-position-scale": {
    query: "foldable drill position scale",
    titleOverride: "Drill Position Scale - BIHUI Foldable Drill Guide | Sahihi",
    description:
      "Foldable drill position scale: BIHUI DBG6, 12x17.5x2.5cm, black. From Sahihi in Dar es Salaam, Tanzania. See the 3D model, then ask for a quote.",
    stock: "order",
    geo: false,
  },
  "metal-hole-drill-guide": {
    query: "tile hole drill guide",
    titleOverride: "Tile Hole Drill Guide - BIHUI Metal, Suction Cup | Sahihi",
    description:
      "Tile hole drill guide: BIHUI DBGM, plastic suction cup, adjustable iron parts for hole location. From Sahihi in Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "tile-repairing-kit": {
    query: "tile repair kit",
    typeWords: "16 wax blocks, scrapers",
    description:
      "Tile repair kit: BIHUI TRPK, 16 wax blocks in popular colours, two scrapers, PU sponge and cloth. From Sahihi in Tanzania. Turn it in 3D, then ask us to quote.",
    stock: "order",
    geo: false,
  },
  "tilers-working-bench-master": {
    query: "tilers working bench",
    titleOverride: "Tilers Working Bench Master - BIHUI 200kg Trolley | Sahihi",
    description:
      "Tilers working bench: BIHUI TWTMST Bench Master, foldable legs, wheels, five heights from 560 to 770mm, 200kg. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "multifunction-trim-puller": {
    query: "multifunction trim puller",
    typeWords: "stainless blade",
    description:
      "Multifunction trim puller: BIHUI tool with stainless steel blade, 270x100x80mm, for baseboard and trim moulding. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },

  // ---- Measuring and levelling ----------------------------------------------
  "tile-spirit-level": {
    query: "spirit level Tanzania",
    typeWords: "aluminium level",
    description:
      "Spirit level in Tanzania: BIHUI aluminium tile level, machined base, 0.5mm/m, three bubbles. From Sahihi in Dar es Salaam. See it in 3D, then ask for a quote.",
    stock: "order",
    geo: true,
  },
  "aluminum-box-screed-set": {
    query: "aluminium box screed set",
    typeWords: "6 straight edges",
    description:
      "Aluminium box screed set: BIHUI TASES6, six straight edges 450mm to 1800mm, 0.05mm/m. From Sahihi in Tanzania. See it in 3D and ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "measuring-tape-wide-blade": {
    query: "wide blade measuring tape",
    typeWords: "5m, 8m",
    description:
      "Wide blade measuring tape: BIHUI TMR5M 5m and TMR8M 8m; the 8m has a magnetic hook, automatic brake and nylon coating. From Sahihi in Tanzania. See it in 3D.",
    stock: "order",
    geo: false,
  },
  "measuring-ruler-rotating-shell": {
    query: "rotating shell measuring ruler",
    typeWords: "TMR30M",
    description:
      "Rotating shell measuring ruler: BIHUI TMR30M, listed with the wide blade measuring tapes. From Sahihi, Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },

  // ---- Grouting, silicone and sponges ---------------------------------------
  "silicon-application-kit-2pcs": {
    query: "silicone application kit",
    titleOverride: "Silicone Application Kit 2pcs - BIHUI STAK2 | Sahihi",
    description:
      "Silicone application kit, 2 pieces: BIHUI STAK2, in the grouting and silicone range. Supplied to order by Sahihi, Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "caulk-tool-set-3pcs": {
    query: "caulk tool set",
    typeWords: "knife, nozzle, smoother",
    description:
      "Caulk tool set: BIHUI STARK3, grout removing knife, grouting nozzle and grouting smoother. From Sahihi in Tanzania. Turn the 3D model, then ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "silicon-application-set-4pcs": {
    query: "silicone application set 4pcs",
    titleOverride: "Silicone Application Set 4pcs - BIHUI STARK4 | Sahihi",
    description:
      "Silicone application set 4pcs: BIHUI STARK4, beside the 2-piece STAK2 kit. From Sahihi in Dar es Salaam, Tanzania. Turn it in 3D, then ask us to quote.",
    stock: "order",
    geo: false,
  },
  "epoxy-grout-float-thermoplastic-rubber-pad": {
    query: "epoxy grout float 12mm pad",
    titleOverride: "Epoxy Grout Float - BIHUI 12mm TPR Pad, 89x254mm | Sahihi",
    description:
      "Epoxy grout float, 12mm pad: BIHUI CFSRS, 89x254mm, solid thermoplastic rubber pad, for wall and uneven tiles. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "epoxy-grout-rubber-float": {
    query: "soft rubber epoxy grout float",
    titleOverride: "Epoxy Grout Rubber Float - BIHUI Soft Rubber | Sahihi",
    description:
      "Soft rubber epoxy grout float: BIHUI CFHSL with a plastic handle; the hard rubber version is CFHRL. From Sahihi, Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "epoxy-grout-float-green-hard-rubber": {
    query: "hard rubber epoxy grout float",
    titleOverride: "Epoxy Grout Float - BIHUI Green Hard Rubber 248mm | Sahihi",
    description:
      "Hard rubber epoxy grout float: BIHUI CFHRL, green hard rubber, 248x116mm. Supplied to order by Sahihi, Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "grout-float-tpr-soft-handle": {
    query: "grout float Tanzania",
    titleOverride: "Grout Float Tanzania - BIHUI TPR Handle, 240x100mm | Sahihi",
    description:
      "Grout float in Tanzania: BIHUI CFERS, 240x100mm, TPR soft handle, aluminium backing, EVA and rubber pad. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },
  "cellulose-sponge": {
    query: "cellulose grout sponge",
    typeWords: "185x110x54mm grout sponge",
    description:
      "Cellulose grout sponge: BIHUI CFCS180, 185x110x54mm, without cutting. Supplied to order by Sahihi, Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "combination-hydro-grout-sponge": {
    query: "combination grout sponge",
    typeWords: "180x110x65mm",
    description:
      "Combination grout sponge: BIHUI CFHC180 hydro grout sponge, 180x110x65mm, round polished edges. From Sahihi, Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "dual-combination-microfibre-sponge": {
    query: "microfibre grout sponge",
    titleOverride: "Microfibre Grout Sponge - BIHUI Dual Combination | Sahihi",
    description:
      "Microfibre grout sponge: BIHUI CFHM190, microfibre with hydro grouting sponge, 190x120x50mm. From Sahihi in Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "hydro-grout-sponge": {
    query: "grout sponge Tanzania",
    titleOverride: "Grout Sponge Tanzania - BIHUI Hydro Sponge CFHS165 | Sahihi",
    description:
      "Grout sponge in Tanzania: BIHUI CFHS165 hydro sponge. The printed size contradicts the code; we confirm it first. From Sahihi in Dar es Salaam. See it in 3D.",
    stock: "order",
    geo: true,
  },
  "pro-germany-hydro-grouting-sponge": {
    query: "hydro grouting sponge",
    typeWords: "CFHS190",
    description:
      "Hydro grouting sponge: BIHUI CFHS190 Pro Germany. The printed size contradicts the code; we confirm it first. From Sahihi in Tanzania. Turn the 3D model first.",
    stock: "order",
    geo: false,
  },

  // ---- Trowels --------------------------------------------------------------
  "jumbo-trowel-set-8pcs": {
    query: "jumbo trowel set",
    titleOverride: "Jumbo Trowel Set - BIHUI 8pcs Stainless Steel | Sahihi",
    description:
      "Jumbo trowel set: BIHUI PTSJG8, 8 pieces in stainless steel, square 6-12mm and tiger notches. From Sahihi in Tanzania. See it in 3D and ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "professional-trowel-stainless-steel": {
    query: "notched trowel Tanzania",
    titleOverride: "Notched Trowel Tanzania - BIHUI Stainless Steel | Sahihi",
    description:
      "Notched trowel in Tanzania: BIHUI professional trowel, #420 stainless blade 280x120mm, soft grip handle. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },
  "professional-trowel-carbon-steel": {
    query: "carbon steel notched trowel",
    titleOverride: "Carbon Steel Notched Trowel - BIHUI 6, 8, 10mm | Sahihi",
    description:
      "Carbon steel notched trowel: BIHUI 280x115mm blade, 6, 8 or 10mm square notch, soft grip. From Sahihi in Tanzania. See it in 3D and ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "resin-bound-dual-handle-trowel": {
    query: "resin bound dual handle trowel",
    typeWords: "0.7mm blade",
    description:
      "Resin bound dual handle trowel: BIHUI FTPT450, 0.7mm #402 stainless blade, 12 rivets on a 303mm aluminium rail. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "resin-bound-pointing-trowel": {
    query: "resin bound pointing trowel",
    typeWords: "closed handle",
    description:
      "Resin bound pointing trowel: BIHUI FTPT300, closed handle, 0.7mm #402 stainless blade, 8 rivets on a 200mm rail. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },

  // ---- Scrapers and knives --------------------------------------------------
  "putty-scraper": {
    query: "stainless steel putty scraper",
    typeWords: "stainless steel, 4-6 inch",
    description:
      "Stainless steel putty scraper: BIHUI PTS4 to PTS6 in 4, 5 and 6 inch, soft cover, #420 blade. From Sahihi in Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "switchable-putty-scraper-kit": {
    query: "putty scraper kit",
    typeWords: "5 blade kit",
    description:
      "Putty scraper kit: BIHUI PTKSK6, one switchable handle, five #420 blades, 1.5 to 6 inch and 5N1. From Sahihi in Tanzania. See it in 3D and ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "tile-remover": {
    query: "tile remover scraper",
    typeWords: "4 inch scraper",
    description:
      "Tile remover scraper: BIHUI TRSC4, 4 inch stainless steel blade, soft grip, metal hammer end. Supplied to order by Sahihi, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "taping-knife": {
    query: "stainless steel taping knife",
    typeWords: "stainless steel, 22-60cm",
    description:
      "Stainless steel taping knife: BIHUI PTK22 to PTK60, 22 to 60cm, #420 blade, 2K TPR soft grip. From Sahihi in Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "notched-taping-knife": {
    query: "notched taping knife",
    typeWords: "60cm, #420 stainless",
    description:
      "Notched taping knife: BIHUI PTKNQ6, 60cm #420 stainless steel blade, 2K TPR soft grip handle. From Sahihi in Tanzania. See it in 3D and ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "drywall-skimming-scraper": {
    query: "drywall skimming blade",
    typeWords: "250-1000mm blades",
    description:
      "Drywall skimming blade: BIHUI PTKJ scrapers, 250 to 1000mm, flexible 0.3mm stainless blade, PVC handle. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "nylon-paint-roller": {
    query: "nylon paint roller 220mm",
    typeWords: "220mm",
    description:
      "Nylon paint roller 220mm: BIHUI PTKJPR, listed with the skimming scrapers and telescope handle. From Sahihi in Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "telescope-handle": {
    query: "telescope handle 1100mm",
    typeWords: "1100mm",
    description:
      "Telescope handle 1100mm: BIHUI PTKJTH, the pole listed with the drywall skimming scrapers. From Sahihi in Dar es Salaam, Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "corner-putty-knife": {
    query: "corner putty knife",
    typeWords: "90 degree corner blade",
    description:
      "Corner putty knife: BIHUI PTPCNR, angled blade for 90 degree corner seams, removes cured joint sealant. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },

  // ---- Tile levelling systems -----------------------------------------------
  "levelling-spacer-post-sl": {
    query: "threaded levelling spacer post SL",
    titleOverride: "Levelling Spacer Post SL - BIHUI Threaded, 100 Pack | Sahihi",
    description:
      "Threaded levelling spacer post SL: BIHUI codes SL1100 to SL3100 in 1mm, 1.5mm and 3mm, 100 per pack. From Sahihi in Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "spin-level-fast-clip-cap": {
    query: "spin level clip cap",
    typeWords: "100 per pack",
    description:
      "Spin level clip cap: BIHUI BLTF100, 100 per pack, listed with the BLT threaded spacer posts. Supplied to order by Sahihi, Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "levelling-spacer-post-blt": {
    query: "levelling spacer post BLT",
    titleOverride: "Levelling Spacer Post BLT - BIHUI 1mm, 1.5mm, 3mm | Sahihi",
    description:
      "Levelling spacer post BLT: BIHUI threaded posts in 1mm white, 1.5mm green and 3mm black, 100 per pack. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "levelling-window-cap": {
    query: "levelling window cap",
    typeWords: "100 per pack, SLC100",
    description:
      "Levelling window cap: BIHUI SLC100, 100 per pack, the cap listed with the SL threaded spacer posts. From Sahihi, Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "reusable-tile-leveling-system": {
    query: "tile levelling system Tanzania",
    titleOverride: "Reusable Tile Levelling System Tanzania - BIHUI | Sahihi",
    description:
      "Tile levelling system in Tanzania: BIHUI TQWT50 reusable system, 50 pieces per pack. From Sahihi in Dar es Salaam. See it in 3D, then ask for a quote.",
    stock: "order",
    geo: true,
  },
  "tile-leveling-base": {
    query: "tile levelling base 3-12mm",
    typeWords: "3-12mm tile, 100 per bag",
    description:
      "Tile levelling base 3-12mm: BIHUI TQW bases in 1, 1.5, 2 and 3mm, 100 per bag, for 3 to 12mm tiles. From Sahihi in Tanzania. Ask us for a quotation.",
    stock: "order",
    geo: false,
  },
  "levelling-base": {
    query: "tile levelling base 3-18mm",
    typeWords: "0.5-3mm, 3-18mm tile",
    description:
      "Tile levelling base 3-18mm: BIHUI BLS bases in 0.5, 1, 1.5, 2 and 3mm, for 3 to 18mm tiles. From Sahihi in Tanzania. See it in 3D, then ask for a quote.",
    stock: "order",
    geo: false,
  },
  "leveling-cap-wedges": {
    query: "tile levelling wedges",
    titleOverride: "Tile Levelling Wedges - BIHUI Cap Wedges, 100-500 | Sahihi",
    description:
      "Tile levelling wedges: BIHUI BLSE cap wedges in packs of 100, 250 and 500, grey, 90x22x17mm on the larger packs. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "leveling-plier": {
    query: "tile levelling pliers",
    titleOverride: "Tile Levelling Pliers - BIHUI Floor Covering, BLSFP | Sahihi",
    description:
      "Tile levelling pliers: BIHUI BLSFP leveling plier for floor covering, in the tile levelling range. From Sahihi in Dar es Salaam, Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "levelling-system-removal-roller": {
    query: "levelling system removal roller",
    titleOverride: "Levelling System Removal Roller - BIHUI Smart, 1.4m | Sahihi",
    description:
      "Levelling system removal roller: BIHUI BLSRR, 1.4m long, handle in three parts for transport. From Sahihi in Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },

  // ---- Mixing ---------------------------------------------------------------
  "electric-mixer": {
    query: "electric paddle mixer",
    typeWords: "paddle mixer 1800W, 1200W",
    description:
      "Electric paddle mixer: BIHUI MMB1800 1800W and MME1200 1200W, for cement, tile adhesive and glue. From Sahihi in Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "levelling-compound-mixing-station": {
    query: "levelling compound mixing station Tanzania",
    description:
      "Levelling compound mixing station in Tanzania: BIHUI MS1900, 1900W, two speeds to 650 RPM, 60cm bucket. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },
  "big-spiral-mixer": {
    query: "spiral mixing paddle M14",
    typeWords: "M14 mixing paddle",
    description:
      "Spiral mixing paddle M14: BIHUI MPSC16 and MPSC60, chrome plated, 140xM14x600mm, metal hanger. From Sahihi, Dar es Salaam, Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "bucket-liner-20l": {
    query: "20L bucket liner",
    typeWords: "reusable mixing liner",
    description:
      "20L bucket liner: BIHUI MPBL20, soft, durable, reusable, for a 20 litre mixing bucket. From Sahihi, Dar es Salaam, Tanzania. See the 3D model first.",
    stock: "order",
    geo: false,
  },
  "mixer-station-with-timer": {
    query: "mixer station with timer",
    typeWords: "65L tub, 50kg mix",
    description:
      "Mixer station with timer: BIHUI MMWT65, 65 litre tub, 50kg maximum mix, thermal protection, two big wheels. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "portable-mortar-mixer": {
    query: "mortar mixer Tanzania",
    typeWords: "120L, 1500W",
    description:
      "Mortar mixer in Tanzania: BIHUI MM1500, 120L drum, 100L mix, 1500W, for mortar, plaster and concrete. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },

  // ---- Grinders and polishing -----------------------------------------------
  "concrete-grinder-1900w": {
    query: "1900W concrete grinder",
    typeWords: "speed regulation",
    description:
      "1900W concrete grinder: BIHUI CG1900, speed regulation, soft start, overload protection, 4m cable. Supplied to order by Sahihi, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "concrete-grinder-2000w": {
    query: "concrete grinder Tanzania",
    titleOverride: "Concrete Grinder Tanzania - BIHUI 2000W, Dust-Free | Sahihi",
    description:
      "Concrete grinder in Tanzania: BIHUI CG2000, 2000W, dust-free grinding, 0-3000 RPM variable speed, soft start. From Sahihi in Dar es Salaam. Turn it in 3D first.",
    stock: "order",
    geo: true,
  },
  "concrete-grinder-working-stand": {
    query: "concrete grinder stand",
    titleOverride: "Concrete Grinder Working Stand - BIHUI 1900W, 230V | Sahihi",
    description:
      "Concrete grinder stand: BIHUI CGWS19 working stand for the 1900W grinder, adjustable angle and positioner. From Sahihi in Tanzania. Ask us for a quotation.",
    stock: "order",
    geo: false,
  },
  "angle-grinder": {
    query: "variable speed angle grinder M14",
    typeWords: "1200W variable speed, M14",
    description:
      "Variable speed angle grinder M14: BIHUI AG1200, 1200W, six gears, 3,000 to 11,000 RPM, soft start. From Sahihi in Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "cutting-dust-extractor": {
    query: "tile cutting dust extractor",
    titleOverride: "Tile Cutting Dust Extractor - BIHUI DCFC5 | Sahihi",
    description:
      "Tile cutting dust extractor: BIHUI DCFC5, listed with the concrete and angle grinders. From Sahihi in Tanzania. Turn the 3D model, then ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "diamond-hand-pad": {
    query: "diamond hand pad",
    typeWords: "60-400 grit, foam grip",
    description:
      "Diamond hand pad: BIHUI DHP060 to DHP400 in 60, 120, 200 and 400 grit, electroplated, foam grip. From Sahihi in Dar es Salaam, Tanzania. Ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "dry-diamond-polishing-pad": {
    query: "dry diamond polishing pad 4 inch",
    titleOverride: "Dry Diamond Polishing Pad - BIHUI 4 Inch, #50-1500 | Sahihi",
    description:
      "Dry diamond polishing pad 4 inch: BIHUI DPP4 series, 50, 100, 200, 800 and 1500 grit, light colour, sharp and durable. From Sahihi in Tanzania. See it in 3D.",
    stock: "order",
    geo: false,
  },
  "rubber-packing-pad": {
    query: "rubber packing pad M14",
    typeWords: "velcro, M14, 100mm",
    description:
      "Rubber packing pad M14: BIHUI DPPH4, 100mm, velcro back, M14 connection, for the 4 inch polishing pads. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },

  // ---- Laser levels ---------------------------------------------------------
  "laser-level-16-line": {
    query: "laser level Tanzania",
    titleOverride: "Laser Level Tanzania - BIHUI 16 Line, TFT Screen | Sahihi",
    description:
      "Laser level in Tanzania: BIHUI LLG16, 16 lines, TFT colour screen, self-levelling, waterproof and dustproof. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },
  "laser-level-12-line": {
    query: "12 line green laser level",
    typeWords: "green beam IP54",
    description:
      "12 line green laser level: BIHUI LLG12, self-levelling, 12 green beams, 3mm at 10m, IP54, 520nm. From Sahihi, Dar es Salaam, Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "laser-level-llg05": {
    query: "360 green laser level",
    titleOverride: "Laser Level LLG05 - BIHUI 1x360 Green Line, IP54 | Sahihi",
    description:
      "360 green laser level: BIHUI LLG05, one 360 degree green line, self-levelling, 3mm at 10m, IP54, 521nm. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "laser-level-tripod": {
    query: "laser level tripod",
    typeWords: "LLG-TRP",
    description:
      "Laser level tripod: BIHUI LLG-TRP, listed with the LLG16, LLG12 and LLG05 laser levels. Supplied to order by Sahihi, Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },

  // ---- Suction cups and lifting ---------------------------------------------
  "tile-gap-adjuster-with-suction-cups": {
    query: "tile gap adjuster suction cup",
    titleOverride: "Tile Gap Adjuster - BIHUI Two 6 Inch Suction Cups | Sahihi",
    description:
      "Tile gap adjuster with suction cups: BIHUI LFTFV6, two 6 inch pump cups, 90, 180 and 270 degree alignment. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "tri-head-suction-cup": {
    query: "tri-head suction cup 110kg",
    typeWords: "5 inch, 110kg",
    description:
      "Tri-head suction cup 110kg: BIHUI, aluminium alloy base, 5 inch, black coating; we confirm the code first. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "double-suction-cup": {
    query: "tile suction cup Tanzania",
    titleOverride: "Tile Suction Cup Tanzania - BIHUI Double Cup, 85kg | Sahihi",
    description:
      "Tile suction cup in Tanzania: BIHUI double suction cup, 5 inch, 85kg, alloy base; we confirm the code first. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },

  // ---- Flooring and site protection -----------------------------------------
  "underlayment-embedding-roller": {
    query: "membrane embedding roller",
    titleOverride: "Membrane Embedding Roller - BIHUI UMR330, 35kg | Sahihi",
    description:
      "Membrane embedding roller: BIHUI UMR330, 35kg, 1.3 to 1.82m handle, embeds membrane into mortar, also for vinyl. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "extendable-floor-roller": {
    query: "LVT floor roller",
    typeWords: "LVT, vinyl flooring",
    description:
      "LVT floor roller: BIHUI FTFREX, three solid rubber rollers 7.5 inch wide, telescope handle 17 to 27 inch. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  spazzle: {
    query: "spazzle resin spreader",
    typeWords: "resin spreader, 600mm blade",
    description:
      "Spazzle resin spreader: BIHUI FTSP600, 600mm alloy blade, 1.5m handle, depth gauges 0 to 70mm. From Sahihi in Tanzania. See it in 3D and ask us to quote.",
    stock: "order",
    geo: false,
  },
  "floor-protector": {
    query: "self adhesive floor protector roll",
    typeWords: "self-adhesive 700mm roll",
    description:
      "Self adhesive floor protector roll: BIHUI FTFP700, 700mm x 25m, reverse wound, for hard surfaces, no residue. From Sahihi in Tanzania. Ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "carpet-protector": {
    query: "carpet protector roll",
    typeWords: "self-adhesive, 25m roll",
    description:
      "Carpet protector roll: BIHUI FTCP700, 700mm x 25m, reverse wound, for synthetic carpets only. From Sahihi in Dar es Salaam, Tanzania. Ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "waterproof-protective-film": {
    query: "waterproof protective film",
    typeWords: "1.2mm PE, 25m",
    description:
      "Waterproof protective film: BIHUI DCSPFW, 1m x 25m x 1.2mm, PE film with white PET fabric surface, adhesive back. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "sticky-mat": {
    query: "sticky mat for construction site",
    titleOverride: "Sticky Mat for Construction Sites - BIHUI 30 Sheets | Sahihi",
    description:
      "Sticky mat for construction sites: BIHUI DCSPSM 66x115cm and DCSPSH 33x66cm, 30 numbered peel-off sheets. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },

  // ---- Cutting --------------------------------------------------------------
  "mitre-jolly-cutting-system": {
    query: "tile mitre cutting system",
    typeWords: "tile edge cutter",
    description:
      "Tile mitre cutting system: BIHUI LFMBF Mitre Jolly, 5 inch 1200W angle grinder, 125mm edge cutting blade. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "electric-cutting-system": {
    query: "large format tile cutting machine",
    titleOverride: "Large Format Tile Cutting Machine - BIHUI Electric | Sahihi",
    description:
      "Large format tile cutting machine: BIHUI LFEC5, 1500W, tiles up to 3.2m, 90 and 45 degree cuts; rails sold apart. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
  "cutting-rail-system": {
    query: "cutting rail system Tanzania",
    typeWords: "3.6m rails",
    description:
      "Cutting rail system in Tanzania: BIHUI LFRS5 Rail System 2.0, 3.6m, one rail for both cutting systems. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },
  "water-cooling-parts": {
    query: "water cooling parts for tile cutter",
    typeWords: "electric tile cutter",
    description:
      "Water cooling parts for tile cutter: BIHUI LFEC5-CP, for the LFEC5 electric cutting system. From Sahihi in Dar es Salaam, Tanzania. Ask for a quotation.",
    stock: "order",
    geo: false,
  },
  "trade-manual-cutting-system": {
    query: "manual large format tile cutter",
    titleOverride: "Manual Large Format Tile Cutter - BIHUI LFMC5 | Sahihi",
    description:
      "Manual large format tile cutter: BIHUI LFMC5, tiles up to 3.2m, 90 and 45 degree cuts, shares the 2.0 rails. From Sahihi in Tanzania. Turn it in 3D first.",
    stock: "order",
    geo: false,
  },
  "strong-manual-tile-cutter": {
    query: "tile cutter Tanzania",
    titleOverride: "Tile Cutter Tanzania - BIHUI Strong Manual 1200mm | Sahihi",
    description:
      "Tile cutter in Tanzania: BIHUI TCP1200 strong manual cutter, 1200mm capacity, single rail, green laser line. From Sahihi in Dar es Salaam. See it in 3D first.",
    stock: "order",
    geo: true,
  },
  "fast-tile-cutter": {
    query: "manual tile cutter Tanzania",
    titleOverride: "Manual Tile Cutter Tanzania - BIHUI Fast with Laser | Sahihi",
    description:
      "Manual tile cutter in Tanzania: BIHUI TCF1200 fast cutter, single rail, 22mm scoring wheel, laser line and LED. From Sahihi in Dar es Salaam. See it in 3D.",
    stock: "order",
    geo: true,
  },
  "trim-cutter": {
    query: "trim mitre cutter",
    typeWords: "profile mitre cutter",
    description:
      "Trim mitre cutter: BIHUI trim cutter for flexible plastic, rubber, wood and cable profiles, angle markings. From Sahihi in Tanzania. See it in 3D first.",
    stock: "order",
    geo: false,
  },
};
