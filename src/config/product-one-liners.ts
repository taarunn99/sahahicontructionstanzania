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

  "x-tech-bond": "SBR bonding agent.",
  "x-tech-epoxyfloor-sl1": "Self-levelling epoxy floor.",
  "x-prime-gp": "Primer for epoxy systems.",
  "x-shield-flexpruf": "Waterproofing coat for wet areas.",
  "x-seal-pg": "Pourable polysulphide sealant for joints.",
  "x-seal-primer": "Primer for joint sealant.",

  "yhcoat-1000": "Polymer-modified cementitious waterproofing slurry.",
  "yhcolorwall-5300":
    "UV-resistant waterproofing for exterior walls and roofs.",
  "yhcoat-2060": "Waterproofing for wet rooms, ready for direct tiling.",
  "yhpuseal-2925": "Elastic polyurethane sealant for joints.",
  "yhrepair-2516": "Hydraulic mortar that stops running water.",
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
  "x-tech-bond": "screed-section",
  "x-tech-epoxyfloor-sl1": "epoxy-section",
  "x-prime-gp": "epoxy-section",
  "x-shield-flexpruf": "tile-bed",
  "x-seal-pg": "sealant-joint",
  "x-seal-primer": "sealant-joint",
};
