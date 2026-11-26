import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the Oriental Yuhong pages (metadata pass, 2026-11-12):
 * the hub ("oriental-yuhong", which leads with "OYH East Africa"), the HDPE
 * explainer, the six products, the sports hub and its seven systems. No
 * office or stock outside Tanzania is claimed. Authorization wording:
 * "authorized distributor". The six products are "held" (the owner's list,
 * Dar es Salaam); the sports systems are "enquire" (acrylic, EPDM and turf
 * are ordered per job, Q22). Facts come from src/content/oriental-yuhong/,
 * the catalogue and src/config/oyh-sports-systems.ts. `Partial` comes off
 * once every row is written.
 */

export const OYH_SLUGS = [
  "oriental-yuhong",
  "hdpe-waterproofing",
  "below-grade-waterproofing",
  "yhcoat-1000",
  "pmh-3080-plus",
  "yhcolorwall-5300",
  "yhcoat-2060",
  "yhpuseal-2925",
  "yhrepair-2516",
  "sports-flooring",
  "sports/all-plastic-track",
  "sports/breathable-track",
  "sports/hybrid-track",
  "sports/silicon-pu-court",
  "sports/acrylic-court",
  "sports/artificial-turf",
  "sports/epdm-walking-track",
  // --- generated: OYH range slugs (scripts/wire-oyh-range.mjs) ---
  "pmh-3040",
  "pmh-3040-plus",
  "pmh-3041",
  "pmh-3046",
  "yhfpopre-3210",
  "pmh-6010",
  "yhshield-7401",
  "yhshield-7402",
  "yhshield-7403",
  "yhshield-7501",
  "yhshield-7502",
  "yhshield-7601",
  "yhstick-9301",
  "yhstick-9302",
  "yhstick-9310",
  "yhstick-9801",
  "yhbitucoat-4500",
  "yhbitucoat-4600",
  "yhbituprimer-4035",
  "yhbituprimer-4050",
  "yhprimcoat-1010",
  "yhcolorwall-5100",
  "yhcrystal-2510",
  "yhcrystal-2512",
  "yhprimblock-1400",
  "yhacgrout-2101",
  "yhpugrout-2102",
  "yhpugrout-2103",
  "yhpugrout-2104",
  "yhepgrout-2106",
  "yhepoxy-gr90",
  "yhinjehose",
  "yhswellseal",
  "yhswellbar",
  "yhwaterstop-epdm",
  "yhwaterstop-pvc",
  "tdf-g",
  "tdf-hs",
  "yhdrainpro-201",
  "yhdrainpro-202",
  "pmh-s-600",
  "pmh-t-160",
  "pmh-t-c-120",
  "pmh-t-d80",
  "pmh-t-s80",
  "yhprimer-1000",
  "yhtape-2022fl",
  "yhtape-2022hd",
  "fuda-xps",
  "oyh-r100",
  "oyh-r100h",
  "oyh-s104c",
  "oyh-s104s",
  // --- end generated: OYH range slugs ---
] as const;

export type OyhSlug = (typeof OYH_SLUGS)[number];

export const oyhSeo: Partial<Record<OyhSlug, SeoRow>> = {
  "oriental-yuhong": {
    query: "OYH East Africa",
    titleOverride: "OYH East Africa - Oriental Yuhong Tanzania | Sahihi",
    description:
      "OYH products in East Africa from Sahihi, Oriental Yuhong's authorized distributor in Dar es Salaam: HDPE membrane, coatings, sports floors. Ask for a quote.",
    stock: "held",
  },
  "hdpe-waterproofing": {
    query: "HDPE waterproofing Tanzania",
    titleOverride: "HDPE Waterproofing Tanzania - OYH PMH-3080 Plus | Sahihi",
    description:
      "HDPE waterproofing in Tanzania: OYH PMH-3080 Plus pre-applied membrane, 1.2 or 1.5 mm, under slabs and tunnels. Rolls held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "below-grade-waterproofing": {
    // OYH's "Solutions for Below-Grade Structures" manual (2026-11-19);
    // the products are supplied to order, so no stock wording.
    query: "basement waterproofing Tanzania",
    titleOverride: "Basement Waterproofing Tanzania - OYH Below Grade | Sahihi",
    description:
      "Basement waterproofing in Tanzania: Oriental Yuhong HDPE and bituminous systems, waterstops, drainage boards, tunnel lining, layer by layer. Ask for a quote.",
    stock: "order",
  },
  "yhcoat-1000": {
    query: "cementitious waterproofing slurry",
    typeWords: "cementitious waterproofing slurry",
    description:
      "YHCoat-1000 cementitious waterproofing slurry: two component, 2 kg/m² in two coats in wet areas, BS EN 14891. 26 kg sets held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "pmh-3080-plus": {
    query: "pre-applied HDPE membrane",
    typeWords: "pre-applied HDPE membrane",
    description:
      "PMH-3080 Plus pre-applied HDPE membrane: 1.2 or 1.5 mm film with adhesive layer, 71 m head to ASTM D5385. Rolls held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhcolorwall-5300": {
    query: "liquid waterproofing membrane",
    typeWords: "liquid waterproofing membrane",
    /** "Tanzania" would push the title past 60; the description carries the geo. */
    geo: false,
    description:
      "YHColorWall-5300 liquid waterproofing membrane for exterior walls and roofs: UV stable, 2 to 3 kg/m². 20 kg pails held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhcoat-2060": {
    query: "wet room waterproofing coating",
    typeWords: "wet room waterproofing coating",
    description:
      "YHCoat-2060 wet room waterproofing coating: keyed finish for direct tiling, 2 kg/m² at 1 mm dry film. 15 kg pails held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhpuseal-2925": {
    query: "polyurethane joint sealant Tanzania",
    typeWords: "polyurethane joint sealant",
    description:
      "YHPUseal-2925 polyurethane joint sealant in Tanzania: moisture curing, 25% movement to ASTM C719. 600 ml held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "yhrepair-2516": {
    query: "hydraulic repair mortar",
    typeWords: "hydraulic repair mortar",
    description:
      "YHRepair-2516 hydraulic repair mortar: quick setting, stops running water, fire class A1. 4 kg bags held in Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "sports-flooring": {
    query: "sports flooring Tanzania",
    titleOverride: "Sports Flooring Tanzania - Tracks, Courts, Turf | OYH",
    description:
      "Sports flooring in Tanzania from Sahihi and Oriental Yuhong: running tracks, silicon PU and acrylic courts, turf and EPDM, in 3D. Ask for a quote.",
    stock: "held",
  },
  "sports/all-plastic-track": {
    query: "running track Tanzania",
    titleOverride: "Polyurethane Running Track Tanzania - All Plastic | OYH",
    description:
      "Oriental Yuhong polyurethane running track in Tanzania: PSV-201 elastic layer and PSV-301 surface, layers in 3D, build film and manual pages. Quote from Sahihi.",
    stock: "held",
  },
  "sports/breathable-track": {
    query: "breathable running track",
    titleOverride: "Breathable Running Track Tanzania - Permeable EPDM | OYH",
    description:
      "Oriental Yuhong breathable running track: EPDM layers that let heavy rain drain through, rated for fitness trails and kindergartens. In 3D. Quote from Sahihi.",
    stock: "held",
  },
  "sports/hybrid-track": {
    query: "hybrid running track Tanzania",
    titleOverride: "Hybrid Running Track Tanzania - PU and EPDM | OYH",
    description:
      "Oriental Yuhong hybrid running track in Tanzania: polyurethane with EPDM particles in the PSV-201 middle layer. Layers in 3D and build film. Quote from Sahihi.",
    stock: "held",
  },
  "sports/silicon-pu-court": {
    query: "silicon PU court Tanzania",
    titleOverride: "Silicon PU Court Tanzania - Basketball, Tennis | OYH",
    description:
      "Oriental Yuhong silicon PU court in Tanzania for basketball, tennis and badminton: 5 mm and 8 mm build-ups in 3D, calculator in kg and packs. Ask for a quote.",
    stock: "held",
  },
  "sports/acrylic-court": {
    query: "acrylic tennis court Tanzania",
    titleOverride: "Acrylic Tennis Court Tanzania - Hard and Elastic | OYH",
    description:
      "Oriental Yuhong acrylic tennis court in Tanzania, hard or 5 mm elastic, on asphalt or concrete: layers in 3D, calculator, drying times. Per job from Sahihi.",
    stock: "order",
  },
  "sports/artificial-turf": {
    query: "artificial turf Tanzania",
    titleOverride: "Artificial Turf Tanzania - Football Pitch Grass | OYH",
    description:
      "Oriental Yuhong artificial turf in Tanzania for football pitches: PSV-601 turf at 10,500 stitches per m², shock pad and infill. Ordered per job by Sahihi.",
    stock: "order",
  },
  "sports/epdm-walking-track": {
    query: "EPDM flooring Tanzania",
    titleOverride: "EPDM Flooring Tanzania - Rubber Granule Surface | OYH",
    description:
      "Oriental Yuhong EPDM flooring in Tanzania for walkways, play areas and fitness trails: 8 mm granules under 5 mm topcoat, calculator. Ordered per job by Sahihi.",
    stock: "order",
  },
  // --- generated: OYH range rows (scripts/wire-oyh-range.mjs) ---
  "pmh-3040": {
    query: "HDPE pre-applied waterproofing membrane",
    typeWords: "HDPE pre-applied waterproofing membrane",
    description: "PMH-3040 HDPE pre-applied membrane, 1.2 or 1.5 mm, white, 80 mm adhesive lap, 71 m head to ASTM D5385. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-3040 - HDPE Pre-Applied Waterproofing Membrane | Sahihi"
  },
  "pmh-3040-plus": {
    query: "PMH-3040 Plus HDPE membrane",
    typeWords: "HDPE pre-applied membrane",
    description: "PMH-3040 Plus HDPE pre-applied membrane, 80 mm dual adhesive seams, 1800 N/m peel to concrete. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-3040 Plus - PMH-3040 Plus HDPE Membrane | Sahihi"
  },
  "pmh-3041": {
    query: "HDPE root barrier membrane",
    typeWords: "HDPE root barrier membrane",
    description: "PMH-3041 HDPE membrane for planted roofs and side walls, blocks plant roots. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-3041 - HDPE Root Barrier Membrane | Sahihi"
  },
  "pmh-3046": {
    query: "post-applied HDPE membrane",
    typeWords: "post-applied HDPE membrane",
    description: "PMH-3046 self-adhesive HDPE membrane for basement side walls and roofs, 1.0 x 25 m rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-3046 - Post-Applied HDPE Membrane | Sahihi"
  },
  "yhfpopre-3210": {
    query: "FPO pre-applied membrane",
    typeWords: "FPO pre-applied membrane",
    description: "YHFPOpre-3210 FPO pre-applied membrane, 1.5 mm, hot-air welded laps, bonds to fresh concrete. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHFPOpre-3210 - FPO Pre-Applied Membrane | Sahihi"
  },
  "pmh-6010": {
    query: "tunnel waterproofing membrane",
    typeWords: "tunnel waterproofing membrane",
    description: "PMH-6010 semi-transparent HDPE pre-applied membrane for tunnels and caverns. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-6010 - Tunnel Waterproofing Membrane | Sahihi"
  },
  "yhshield-7401": {
    query: "SBS torch-on membrane Tanzania",
    typeWords: "SBS torch-on membrane, 3 or 4 mm",
    description: "YHShield-7401 SBS torch-on membrane, polyester reinforced, 3 or 4 mm, 10 m² rolls, heat resistance 90 °C. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHShield-7401 - SBS Torch-On Membrane Tanzania | Sahihi"
  },
  "yhshield-7402": {
    query: "heat resistant SBS membrane",
    typeWords: "SBS torch-on membrane, 105 °C",
    description: "YHShield-7402 SBS torch-on membrane: 900 N/50mm tensile, heat resistance 105 °C, 3 or 4 mm, 10 m² rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHShield-7402 - Heat Resistant SBS Membrane | Sahihi"
  },
  "yhshield-7403": {
    query: "mineral granule SBS membrane",
    typeWords: "SBS mineral granule membrane",
    description: "YHShield-7403 SBS torch-on membrane with PE, sand or mineral granule face, up to 4.8 mm, 10 m² rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHShield-7403 - Mineral Granule SBS Membrane | Sahihi"
  },
  "yhshield-7501": {
    query: "APP modified bitumen membrane Tanzania",
    typeWords: "APP torch-on membrane, up to 5 mm",
    description: "YHShield-7501 APP torch-on membrane, polyester reinforced, 120 °C heat test, 3 to 5 mm, 10 m² rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHShield-7501 - APP Modified Bitumen Membrane Tanzania"
  },
  "yhshield-7502": {
    query: "APP torch-on bitumen membrane",
    typeWords: "APP torch-on membrane, 3 or 4 mm",
    description: "YHShield-7502 APP torch-on membrane: 900 N/50mm tensile, impact ≥1200 mm, 3 or 4 mm, 10 m² rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHShield-7502 - APP Torch-On Bitumen Membrane | Sahihi"
  },
  "yhshield-7601": {
    query: "anti-root bituminous membrane",
    typeWords: "root-resistant SBS membrane",
    description: "YHShield-7601 root-resistant SBS torch-on membrane for roof gardens: 4 mm rolls, DIN 4062 root test. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHShield-7601 - Anti-Root Bituminous Membrane | Sahihi"
  },
  "yhstick-9301": {
    query: "double-sided self-adhesive bitumen membrane",
    typeWords: "single or double-side self-adhesive membrane",
    description: "YHStick-9301 self-adhesive bitumen membrane, single or double-side, HDPE film, 1.5 or 2.0 mm. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHStick-9301 - Double-Sided Self-Adhesive Bitumen Membrane"
  },
  "yhstick-9302": {
    query: "high-strength film self-adhesive membrane",
    typeWords: "self-adhesive membrane, high-strength film",
    description: "YHStick-9302 self-adhesive bitumen membrane on high-strength film, 1.5 or 2.0 mm, no flame needed. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHStick-9302 - High-Strength Film Self-Adhesive Membrane"
  },
  "yhstick-9310": {
    query: "cross-laminated HDPE self-adhesive membrane",
    typeWords: "HDPE self-adhesive bitumen membrane",
    description: "YHStick-9310 self-adhesive membrane, cross-laminated HDPE film, 1.5 or 2.0 mm, 3.2 mm crack bridging. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHStick-9310 - Cross-Laminated HDPE Self-Adhesive Membrane"
  },
  "yhstick-9801": {
    query: "reinforced self-adhesive bituminous membrane",
    typeWords: "reinforced self-adhesive membrane",
    description: "YHStick-9801 reinforced self-adhesive membrane, polyester fabric, 3.0 or 4.0 mm, 1000 N puncture. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHStick-9801 - Reinforced Self-Adhesive Bituminous Membrane"
  },
  "yhbitucoat-4500": {
    query: "bitumen waterproofing coating Tanzania",
    typeWords: "high-strength waterborne bitumen waterproofing coating",
    description: "YHBitucoat-4500 by Oriental Yuhong: water-based bitumen coating for roofs, basements and foundations, 2.1 to 2.4 kg/m² per mm. Supplied to order.",
    stock: "order",
    titleOverride: "YHBitucoat-4500 - Bitumen Waterproofing Coating Tanzania"
  },
  "yhbitucoat-4600": {
    query: "water-based bitumen coating",
    typeWords: "waterborne bitumen waterproofing coating",
    description: "YHBitucoat-4600 by Oriental Yuhong: elastic water-based bitumen coating for roofs and basements, about 2 kg/m². Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHBitucoat-4600 - Water-Based Bitumen Coating | Sahihi"
  },
  "yhbituprimer-4035": {
    query: "water-based bitumen primer",
    typeWords: "water-based bitumen primer",
    description: "YHBituprimer-4035 by Oriental Yuhong: quick drying, low viscosity bitumen primer for membranes and coatings, ASTM D41. Supplied to order from Dar es Salaam.",
    stock: "order",
    titleOverride: "YHBituprimer-4035 - Water-Based Bitumen Primer | Sahihi"
  },
  "yhbituprimer-4050": {
    query: "concentrated bitumen primer",
    typeWords: "concentrated water-based bitumen primer",
    description: "YHBituprimer-4050 by Oriental Yuhong: polymer modified bitumen primer, dilutable with water up to 1:2, 0.1 to 0.15 kg/m². Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHBituprimer-4050 - Concentrated Bitumen Primer | Sahihi"
  },
  "yhprimcoat-1010": {
    query: "acrylic primer for waterproofing",
    typeWords: "water-based acrylic primer",
    description: "YHPrimCoat-1010 by Oriental Yuhong: low-VOC acrylic primer for water-based waterproofing and flooring. Supplied to order from Dar es Salaam.",
    stock: "order",
    titleOverride: "YHPrimCoat-1010 - Acrylic Primer For Waterproofing | Sahihi"
  },
  "yhcolorwall-5100": {
    query: "waterproofing mastic Tanzania",
    typeWords: "waterproof white cement mastic",
    description: "YHColorWall-5100 by OYH: a white cement waterproof mastic for walls, lift pits, pools and basements, on moist surfaces. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHColorWall-5100 - Waterproofing Mastic Tanzania | Sahihi"
  },
  "yhcrystal-2510": {
    query: "crystalline waterproofing Tanzania",
    typeWords: "crystalline waterproofing coating",
    description: "YHCrystal-2510 by OYH: a cement-based crystalline coating for basements, tanks and tunnels, on either side of the concrete. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHCrystal-2510 - Crystalline Waterproofing Tanzania | Sahihi"
  },
  "yhcrystal-2512": {
    query: "crystalline admixture Tanzania",
    typeWords: "crystalline concrete admixture",
    description: "YHCrystal-2512 by OYH: a crystalline admixture dosed at 1% to 2% of the cement, for watertight basements, tanks and tunnels. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHCrystal-2512 - Crystalline Admixture Tanzania | Sahihi"
  },
  "yhprimblock-1400": {
    query: "moisture barrier primer Tanzania",
    typeWords: "epoxy moisture barrier primer",
    description: "YHPrimBlock-1400 by OYH: a three-part epoxy-cement primer that seals damp or green concrete before resin coatings. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHPrimBlock-1400 - Moisture Barrier Primer Tanzania | Sahihi"
  },
  "yhacgrout-2101": {
    query: "acrylic injection resin Tanzania",
    typeWords: "polyacrylic injection resin, curtain injection gel",
    description: "OYH YHACgrout-2101: elastic acrylic injection resin for joints and curtain injection. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHACgrout-2101 - Acrylic Injection Resin Tanzania | Sahihi"
  },
  "yhpugrout-2102": {
    query: "hydrophilic PU injection resin",
    typeWords: "hydrophilic PU injection resin, leak sealing gel",
    description: "OYH YHPUgrout-2102: hydrophilic PU injection resin that gels to seal wet and running leaks. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHPUgrout-2102 - Hydrophilic PU Injection Resin | Sahihi"
  },
  "yhpugrout-2103": {
    query: "polyurethane foam injection Tanzania",
    typeWords: "hydrophobic PU foam grout, water stop injection",
    description: "OYH YHPUgrout-2103: PU injection resin that foams in water into rigid closed-cell foam to stop leaks. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHPUgrout-2103 - Polyurethane Foam Injection Tanzania"
  },
  "yhpugrout-2104": {
    query: "self levelling crack sealant Tanzania",
    typeWords: "pourable PU crack sealant for slabs",
    description: "OYH YHPUgrout-2104: self-leveling PU sealant for horizontal slab cracks up to 25 mm wide. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHPUgrout-2104 - Self Levelling Crack Sealant Tanzania"
  },
  "yhepgrout-2106": {
    query: "epoxy resin grout for concrete cracks",
    typeWords: "low viscosity epoxy injection grout",
    description: "OYH YHEPgrout-2106: solvent-free epoxy injection grout that seals and strengthens concrete cracks. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHEPgrout-2106 - Epoxy Resin Grout For Concrete Cracks"
  },
  "yhepoxy-gr90": {
    query: "epoxy grout for machine bases Tanzania",
    typeWords: "epoxy base plate grout, precision grout",
    description: "OYH YHEpoxy-GR90: non-shrink epoxy grout for machine bases, base plates, crane rails and pile caps. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHEpoxy-GR90 - Epoxy Grout For Machine Bases Tanzania"
  },
  "yhinjehose": {
    query: "injection hose for construction joints",
    typeWords: "re-injectable hose, joint injection tube",
    description: "OYH YHInjehose: re-injectable hose for construction joints, injected with acrylate, PU or epoxy. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHInjehose - Injection Hose For Construction Joints | Sahihi"
  },
  "yhswellseal": {
    query: "swellable joint sealant",
    typeWords: "hydrophilic swellable joint sealant",
    description: "YHSwellSeal in Tanzania: Oriental Yuhong polyurethane sealant that swells in water to seal joints and pipe penetrations. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHSwellSeal - Swellable Joint Sealant | Sahihi"
  },
  "yhswellbar": {
    query: "hydrophilic waterbar Tanzania",
    typeWords: "swellable joint sealing waterbar",
    description: "YHSwellbar in Tanzania: Oriental Yuhong hydrophilic rubber strip that swells in water to seal concrete joints and pipes. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHSwellbar - Hydrophilic Waterbar Tanzania | Sahihi"
  },
  "yhwaterstop-epdm": {
    query: "rubber waterstop Tanzania",
    typeWords: "rubber waterstop",
    description: "YHWaterstop rubber series in Tanzania: Oriental Yuhong rubber or EPDM waterstops, internal and back-mounted. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHWaterstop Rubber Series - Rubber Waterstop Tanzania"
  },
  "yhwaterstop-pvc": {
    query: "flexible PVC waterstop",
    typeWords: "flexible PVC waterstop",
    description: "YHWaterstop PVC series in Tanzania: Oriental Yuhong flexible PVC waterstops, V, O, A and D profiles. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHWaterstop PVC Series - Flexible PVC Waterstop | Sahihi"
  },
  "tdf-g": {
    query: "polyester geotextile Tanzania",
    typeWords: "polyester continuous filament geotextile",
    description: "TDF G polyester geotextile, G100 to G800, to separate, filter, drain and protect geomembranes. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "TDF G Series - Polyester Geotextile Tanzania | Sahihi"
  },
  "tdf-hs": {
    query: "polypropylene geotextile Tanzania",
    typeWords: "polypropylene continuous filament geotextile",
    description: "TDF HS polypropylene geotextile, HS100 to HS1000, pH2-13 resistant, for roads, landfill and drains. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "TDF HS Series - Polypropylene Geotextile Tanzania | Sahihi"
  },
  "yhdrainpro-201": {
    query: "drainage board Tanzania",
    typeWords: "HDPE dimpled drainage board",
    description: "YHDrainPro-201 HDPE studded drainage board: drains groundwater and protects basement membranes. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHDrainPro-201 - Drainage Board Tanzania | Sahihi"
  },
  "yhdrainpro-202": {
    query: "composite drainage board geotextile",
    typeWords: "HDPE drainage board with bonded geotextile",
    description: "YHDrainPro-202 HDPE drainage board with bonded geotextile, for green roofs and basements. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHDrainPro-202 - Composite Drainage Board Geotextile"
  },
  "pmh-s-600": {
    query: "HDPE membrane detailing sealant",
    typeWords: "HDPE detailing sealant",
    description: "PMH-S-600 modified silicone sealant for HDPE details: pile heads, pipes, slab to wall joints. 600 ml. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-S-600 - HDPE Membrane Detailing Sealant | Sahihi"
  },
  "pmh-t-160": {
    query: "HDPE membrane butt joint tape",
    typeWords: "butt joint tape for HDPE membrane",
    description: "PMH-T-160 butt joint tape for PMH 3080 and 3080 PLUS membranes: 160 mm x 20 m rolls, 4 per box. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-T-160 - HDPE Membrane Butt Joint Tape | Sahihi"
  },
  "pmh-t-c-120": {
    query: "coating cover tape for HDPE membrane",
    typeWords: "coating cover tape for HDPE membrane",
    description: "PMH-T-C120 coating cover tape for PMH 3040, 3040PLUS and 6010 end laps and repairs: 120 mm x 50 m rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-T-C120 - Coating Cover Tape For HDPE Membrane | Sahihi"
  },
  "pmh-t-d80": {
    query: "double-sided tape for HDPE membrane",
    typeWords: "double-sided tape for HDPE membrane",
    description: "PMH-T-D80 double-sided tape for PMH 3040, 3040PLUS and 6010 laps and patches: 80 mm x 50 m rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-T-D80 - Double-Sided Tape For HDPE Membrane | Sahihi"
  },
  "pmh-t-s80": {
    query: "sand cover tape for HDPE membrane",
    typeWords: "sand cover tape for HDPE membrane",
    description: "PMH-T-S80 sand cover tape for PMH 3080 and 3080 PLUS end laps and repairs: 80 mm x 15 m rolls. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "PMH-T-S80 - Sand Cover Tape For HDPE Membrane | Sahihi"
  },
  "yhprimer-1000": {
    query: "water-based epoxy primer Tanzania",
    typeWords: "water-based epoxy primer",
    description: "YHPrimer-1000 by Oriental Yuhong: two-part water-based epoxy primer for concrete under PU waterproofing. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "YHPrimer-1000 - Water-Based Epoxy Primer Tanzania | Sahihi"
  },
  "yhtape-2022fl": {
    query: "fluorocarbon butyl tape Tanzania",
    typeWords: "butyl sealing tape",
    description: "YHTape-2022FL by Oriental Yuhong: white fluorocarbon film butyl tape for exposed membrane laps and roof details. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHTape-2022FL - Fluorocarbon Butyl Tape Tanzania | Sahihi"
  },
  "yhtape-2022hd": {
    query: "butyl tape Tanzania",
    typeWords: "butyl tape",
    description: "YHTape-2022HD by Oriental Yuhong: HDPE film butyl tape for foundation details, manhole joints and laps, 10 cm by 10 m rolls. Supplied to order. Ask for a quote.",
    stock: "order",
    titleOverride: "YHTape-2022HD - Butyl Tape Tanzania | Sahihi"
  },
  "fuda-xps": {
    query: "XPS protection board Tanzania",
    typeWords: "XPS protection and insulation board",
    description: "FUDA XPS extruded polystyrene board: 0.024 to 0.034 W/(m.K), 150 to 1200 kPa, 1% water absorption. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "FUDA XPS - XPS Protection Board Tanzania | Sahihi"
  },
  "oyh-r100": {
    query: "PCE superplasticizer Tanzania",
    typeWords: "high range water reducing PCE superplasticizer",
    description: "OYH R-100 high range water reducing PCE, 0.25-0.85% by weight of cementitious materials, chloride free. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "OYH R-100 - PCE Superplasticizer Tanzania | Sahihi"
  },
  "oyh-r100h": {
    query: "hybrid PCE superplasticizer",
    typeWords: "hybrid PCE superplasticizer",
    description: "OYH R-100H hybrid PCE: water reduction and slump retention, 0.25-0.85% by weight of cementitious. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "OYH R-100H - Hybrid PCE Superplasticizer | Sahihi"
  },
  "oyh-s104c": {
    query: "slump retention PCE",
    typeWords: "medium slump retention PCE",
    description: "OYH S-104C slump retaining PCE base: about 2 hours of workability, blended with water-reducing PCE. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "OYH S-104C - Slump Retention PCE | Sahihi"
  },
  "oyh-s104s": {
    query: "slump retention admixture",
    typeWords: "super slump retention PCE",
    description: "OYH S-104S super slump retaining PCE: holds slump 2 to 4 hours or longer for ready-mix concrete. Supplied to order from Dar es Salaam. Ask for a quote.",
    stock: "order",
    titleOverride: "OYH S-104S - Slump Retention Admixture | Sahihi"
  },
  // --- end generated: OYH range rows ---
};

/** The row for a slug; throws at build time if one is missing. */
export function oyhRow(slug: OyhSlug): SeoRow {
  const row = oyhSeo[slug];
  if (!row) throw new Error(`No SEO row for Oriental Yuhong page "${slug}"`);
  return row;
}

/** Title and description for a page with its own title (hubs, systems). */
export function oyhPageMeta(slug: OyhSlug): {
  title: string;
  description: string;
} {
  const row = oyhRow(slug);
  if (!row.titleOverride) {
    throw new Error(`No title for Oriental Yuhong page "${slug}"`);
  }
  return { title: row.titleOverride, description: row.description };
}
