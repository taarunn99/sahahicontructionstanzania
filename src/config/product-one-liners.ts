/**
 * One line per product for the /products shelves (owner, 2026-11-06: "just the
 * name, one line defining it and image with explore button"; "all the
 * technical info should be inside the page").
 *
 * FACT LAW: each line is a shortening of that product's `summary` in
 * catalogue.ts, which comes from the manufacturer's data sheet. Nothing is
 * added, and no figures: thicknesses, classes and consumption stay on the
 * product page.
 */
export const productOneLiners: Record<string, string> = {
  mapeset: "Cement-based adhesive for tiles.",
  "kerabond-t": "No-slip adhesive for ceramic tiles.",
  "adesilex-p7": "No-slip adhesive for ceramic and porcelain tiles.",
  "keraflex-maxi-s1":
    "Deformable adhesive for large porcelain and natural stone.",
  "keracolor-ff": "Water-repellent grout for tile joints.",
  kerapoxy: "Acid-resistant epoxy grout that also works as an adhesive.",
  "ultracare-hd-cleaner":
    "Concentrated cleaner for deep cleaning and degreasing.",
  "ultracare-multicleaner":
    "Neutral cleaner for daily care, marble and stone included.",
  "ultracare-stain-protector-w-plus":
    "Natural-effect sealer against oil, stains and water.",

  "primer-g": "Water-based synthetic resin primer.",
  "triblock-p": "Epoxy-cement primer for damp substrates.",
  lignobond: "Two-component adhesive for laying parquet.",
  "ultraplan-eco-20": "Fast-drying self-levelling smoothing compound.",
  "ultraplan-contract": "Ultra-fast drying self-levelling smoothing compound.",

  "adesilex-pg2-tg": "Thixotropic epoxy adhesive for structural bonding.",
  "epojet-lv": "Low-viscosity epoxy for injecting microcracks.",
  eporip: "Epoxy adhesive for construction joints and screed cracks.",
  "mapegrout-me05": "High-flow micro-concrete and thick section grout.",
  "mapegrout-t60": "Fibre-reinforced structural repair mortar.",
  "planicrete-sp": "Multi-purpose latex additive for mortar.",
  "mapefer-1k": "Anti-corrosion mortar for steel reinforcement.",
  "mapefix-ep-50": "Epoxy resin for structural chemical anchoring.",
  "mapei-gun-585-2k": "Dispensing gun for two-component anchor cartridges.",
  "mapefibre-ns-12": "Polypropylene microfibres for concrete.",

  "mapefloor-fc-200-me": "High build epoxy floor coating.",
  "mapefloor-i-300-sl-me":
    "Coloured epoxy for self-levelling industrial floors.",
  "mapefloor-cpu-plus-mf": "Self-smoothing polyurethane cement floor mortar.",
  "mapefloor-finish-415-me": "Polyurethane finish for car park floors.",
  "mapefloor-finish-450-me":
    "Elastic coloured finish resistant to wear and UV.",
  "mapefloor-pu-410": "Self-levelling polyurethane binder for car park floors.",
  "primer-sn": "Two-component epoxy primer.",
  "quartz-sand": "Kiln-dried quartz sand for resin floors.",
  "mapecoat-dw-25": "Epoxy coating suitable for contact with drinking water.",

  lamposilex: "Ultra-fast binder that stops water leaks.",
  antipluviol: "Water-repellent coating for very absorbent surfaces.",
  "planiseal-88": "Osmotic mortar for waterproofing masonry and concrete.",
  "mapelastic-aquadefense":
    "Ready-to-use, quick-drying flexible liquid membrane.",
  "mapelastic-easy":
    "Flexible waterproofing for balconies, terraces and bathrooms.",
  "mapelastic-smart":
    "Flexible waterproofing by trowel or roller, pools included.",
  "mapelastic-foundation":
    "Waterproofing for positive and negative water pressure.",
  "idrostop-pvc": "PVC waterstop for expansion and cold joints.",
  "mapeband-tpe": "TPE tape for expansion joints and moving cracks.",
  "mapeband-easy": "Rubber tape for elastic joints in waterproofing.",
  "mapenet-150": "Fibre glass mesh that reinforces waterproof layers.",
  "mapeflex-pu-45-ft": "Paintable polyurethane sealant and adhesive.",
  "mapeproof-swell": "Expansive hydrophilic sealant paste in tubes.",
  "idrocrete-kr-1000": "Crystallizing admixture for waterproof concrete.",

  "x-tech-sbr-bond": "Multi purpose bonding agent for concrete.",
  "x-tech-epoxyfloor-sl1": "Self-levelling epoxy floor.",
  "x-prime-gp": "Primer for epoxy systems.",
  "x-shield-flexpruf": "Waterproofing coat for wet areas.",
  "x-seal-ps800": "Polysulphide sealant for joints.",
  "x-seal-universal-primer": "Primer for joint sealant.",
  "x-prime-gp2": "Primer for epoxy coatings and floors.",

  "pmh-3080-plus": "HDPE membrane laid before the concrete is poured.",
  "yhcoat-1000": "Polymer-modified cementitious waterproofing slurry.",
  "yhcolorwall-5300":
    "UV-resistant waterproofing for exterior walls and roofs.",
  "yhcoat-2060": "Waterproofing for wet rooms, ready for direct tiling.",
  "yhpuseal-2925": "Elastic polyurethane sealant for joints.",
  "yhrepair-2516": "Hydraulic mortar that stops running water.",
  // --- generated: OYH range (scripts/wire-oyh-range.mjs) ---
  "pmh-3040": "HDPE sheet laid before the pour, under slabs and walls",
  "pmh-3040-plus": "Pre-applied HDPE sheet with dual adhesive seams",
  "pmh-3041": "Root-barrier HDPE sheet for planted roofs and walls",
  "pmh-3046": "Self-adhesive HDPE sheet for basement walls and roofs",
  "yhfpopre-3210": "FPO sheet under the pour, with hot-air welded laps",
  "pmh-6010": "See-through HDPE sheet for tunnel linings",
  "yhshield-7401": "SBS torch-on membrane for basements and roofs",
  "yhshield-7402": "SBS torch-on membrane rated to 105 °C heat",
  "yhshield-7403": "SBS membrane with sand or mineral granule face",
  "yhshield-7501": "APP torch-on membrane for roofs and basements",
  "yhshield-7502": "APP torch-on membrane, 3 or 4 mm rolls",
  "yhshield-7601": "Root-resistant membrane for roof gardens",
  "yhstick-9301": "Torch-free stick-on membrane, single or double-side",
  "yhstick-9302": "Stick-on bitumen membrane on high-strength film",
  "yhstick-9310": "HDPE-faced stick-on membrane for basements and roofs",
  "yhstick-9801": "Polyester-reinforced stick-on membrane, 3 or 4 mm",
  "yhbitucoat-4500": "Elastic bitumen coating for roofs and basements",
  "yhbitucoat-4600": "Water-based bitumen coating, highly elastic",
  "yhbituprimer-4035": "Primer before bitumen membranes and coatings",
  "yhbituprimer-4050": "Concentrated primer under bitumen membranes",
  "yhprimcoat-1010": "Acrylic primer under coatings and mortars",
  "yhcolorwall-5100": "White waterproof mastic for damp walls and pits",
  "yhcrystal-2510": "Crystalline coating that seals concrete from either side",
  "yhcrystal-2512": "Admixture that makes the concrete itself watertight",
  "yhprimblock-1400": "Primer that lets resin coatings go on damp concrete",
  "yhacgrout-2101": "Elastic acrylic gel for curtain and joint injection",
  "yhpugrout-2102": "Water-reactive PU gel for wet and running leaks",
  "yhpugrout-2103": "Foaming PU resin that stops running water fast",
  "yhpugrout-2104": "Pour-in sealant for cracks in floors and slabs",
  "yhepgrout-2106": "Epoxy injection that seals and strengthens cracks",
  "yhepoxy-gr90": "Epoxy grout under machines, base plates and rails",
  "yhinjehose": "Hose cast into joints, injected later to seal them",
  "yhswellseal": "Swelling sealant for construction joints and pipes",
  "yhswellbar": "Swelling rubber strip for construction joints",
  "yhwaterstop-epdm": "Rubber waterstops cast into concrete joints",
  "yhwaterstop-pvc": "PVC waterstops for construction and expansion joints",
  "tdf-g": "Polyester geotextile to separate, filter and protect",
  "tdf-hs": "Polypropylene geotextile for roads, landfill and drains",
  "yhdrainpro-201": "Studded HDPE board to drain and protect membranes",
  "yhdrainpro-202": "Drainage board with filter fabric for roofs and basements",
  "pmh-s-600": "Seals pile heads and pipes in HDPE waterproofing",
  "pmh-t-160": "Joins the short ends of sand surface HDPE membrane",
  "pmh-t-c-120": "Covers end laps on smooth HDPE membrane",
  "pmh-t-d80": "Double-sided tape for HDPE laps and patches",
  "pmh-t-s80": "Covers laps and repairs on sand surface HDPE",
  "yhprimer-1000": "Epoxy primer for concrete under PU waterproofing",
  "yhtape-2022fl": "Weatherproof butyl tape for laps and roof details",
  "yhtape-2022hd": "Butyl tape for foundation and manhole joints",
  "fuda-xps": "Closed-cell XPS board that protects and insulates the membrane",
  "oyh-r100": "PCE water reducer for high-strength and SCC concrete",
  "oyh-r100h": "PCE base that reduces water and holds slump",
  "oyh-s104c": "PCE base that keeps concrete workable for about 2 hours",
  "oyh-s104s": "PCE base that holds slump for 2 to 4 hours",
  // --- end generated: OYH range ---
};

/**
 * Picture for the products with no official pack shot. These are the site's
 * own illustrations of where the product goes, never a drawing of the pack
 * (pack shots are never generated).
 */
export const productIllustrations: Record<string, string> = {
  "mapei-gun-585-2k": "base-plate",
  "mapefloor-finish-450-me": "epoxy-section",
  "quartz-sand": "epoxy-section",
  "x-tech-sbr-bond": "screed-section",
  "x-tech-epoxyfloor-sl1": "epoxy-section",
  "x-prime-gp": "epoxy-section",
  "x-shield-flexpruf": "tile-bed",
  "x-seal-ps800": "sealant-joint",
  "x-seal-universal-primer": "sealant-joint",
  "x-prime-gp2": "epoxy-section",
};
