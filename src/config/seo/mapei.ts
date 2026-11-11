import type { SeoRow } from "@/lib/seo";

/**
 * Registry rows for the Mapei cluster (metadata pass, 2026-11-12): the hub,
 * the five line pillars, the 47 product pages (keyed by catalogue slug) and
 * the seven Swahili twins. The map is the registry of record for
 * SEO-STRATEGY.md section 5.2b. Rules: one honest query per page, no price,
 * no claim beyond the data sheet, hyphens only, "authorized Mapei
 * distributor" is the allowed authorization wording.
 *
 * Product rows: `query` is the one search the page owns (from the keyword
 * research in docs/research/07-10 where a product has a row there, otherwise
 * "<name> Tanzania"); `typeWords` are the buyer words `composeItemTitle`
 * puts after "Mapei"; `description` opens with the name and the query words,
 * gives one data sheet fact, says where the stock is and how to get a quote.
 * Facts come only from src/content/mapei/<slug>.json and the catalogue.
 * Stock is "held" throughout: the Mapei range is in Dar es Salaam per the
 * owner's lists.
 *
 * Hub and line rows record the titles and descriptions the pages already
 * carry (src/app/mapei/page.tsx, mapeiLineMeta). Swahili rows record the
 * strings in src/config/sw.ts; they are not rewritten here.
 *
 * `Partial` comes off once every row is written (then a missing key is a
 * type error). Every key below has a row; the type stays Partial until the
 * other families catch up.
 */

export const MAPEI_PRODUCT_SLUGS = [
  "mapeset",
  "kerabond-t",
  "adesilex-p7",
  "keraflex-maxi-s1",
  "keracolor-ff",
  "kerapoxy",
  "ultracare-hd-cleaner",
  "ultracare-multicleaner",
  "ultracare-stain-protector-w-plus",
  "primer-g",
  "triblock-p",
  "lignobond",
  "ultraplan-eco-20",
  "ultraplan-contract",
  "adesilex-pg2-tg",
  "epojet-lv",
  "eporip",
  "mapegrout-me05",
  "mapegrout-t60",
  "planicrete-sp",
  "mapefer-1k",
  "mapefix-ep-50",
  "mapei-gun-585-2k",
  "mapefibre-ns-12",
  "mapefloor-fc-200-me",
  "mapefloor-i-300-sl-me",
  "mapefloor-cpu-plus-mf",
  "mapefloor-finish-415-me",
  "mapefloor-finish-450-me",
  "mapefloor-pu-410",
  "primer-sn",
  "quartz-sand",
  "mapecoat-dw-25",
  "lamposilex",
  "antipluviol",
  "planiseal-88",
  "mapelastic-aquadefense",
  "mapelastic-easy",
  "mapelastic-smart",
  "mapelastic-foundation",
  "idrostop-pvc",
  "mapeband-tpe",
  "mapeband-easy",
  "mapenet-150",
  "mapeflex-pu-45-ft",
  "mapeproof-swell",
  "idrocrete-kr-1000",
] as const;

export type MapeiProductSlug = (typeof MAPEI_PRODUCT_SLUGS)[number];

export const MAPEI_LINE_SLUGS = [
  "tile-adhesives-grouts",
  "primers-levelling",
  "concrete-repair",
  "resin-flooring",
  "waterproofing",
] as const;

export type MapeiLineSlug = (typeof MAPEI_LINE_SLUGS)[number];

/** Every key the map carries: hub, lines, products, Swahili twins. */
export type MapeiSeoKey =
  | "mapei"
  | `line/${MapeiLineSlug}`
  | MapeiProductSlug
  | "sw"
  | "sw/mapei"
  | `sw/line/${MapeiLineSlug}`;

export const mapeiSeo: Partial<Record<MapeiSeoKey, SeoRow>> = {
  // ---- Hub and lines (titles and descriptions as the pages carry them) ----

  mapei: {
    query: "Mapei Tanzania",
    description:
      "Sahihi is an authorized Mapei distributor in Tanzania. Tile adhesives, waterproofing, resin flooring and concrete repair in Dar es Salaam, with data sheets.",
    stock: "held",
    titleOverride: "Mapei Tanzania - Authorized Distributor, Dar es Salaam",
  },
  "line/tile-adhesives-grouts": {
    query: "Mapei tile adhesive Tanzania",
    description:
      "Mapei tile adhesives and grouts in Tanzania: Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1, Keracolor FF, Kerapoxy. Data sheets and coverage calculators.",
    stock: "held",
    titleOverride: "Mapei Tile Adhesive Tanzania - Keraflex, Adesilex, Grout",
  },
  "line/primers-levelling": {
    query: "Mapei self levelling Tanzania",
    description:
      "Mapei primers and self-levelling compounds in Tanzania: Primer G, Triblock P, Ultraplan Eco 20, Ultraplan Contract and Lignobond. Data sheets and calculators.",
    stock: "held",
    titleOverride: "Mapei Self-Levelling & Primer Tanzania - Ultraplan, Primer G",
  },
  "line/concrete-repair": {
    query: "Mapei grout Tanzania",
    description:
      "Mapei concrete repair in Tanzania: Mapegrout mortars and grouts, Epojet LV and Eporip epoxies, Planicrete SP, Mapefer 1K, Mapefix EP 50. With data sheets.",
    stock: "held",
    titleOverride: "Mapei Concrete Repair Tanzania - Mapegrout, Epojet, Mapefix",
  },
  "line/resin-flooring": {
    query: "Mapei epoxy flooring Tanzania",
    description:
      "Mapefloor resin flooring in Tanzania: FC 200 ME epoxy coating, I 300 SL ME self-levelling epoxy, CPU+/MF polyurethane cement, car park finishes. Data sheets.",
    stock: "held",
    titleOverride: "Mapefloor Epoxy & PU Flooring Tanzania - Mapei Systems",
  },
  "line/waterproofing": {
    query: "Mapei waterproofing Tanzania",
    description:
      "Mapei waterproofing in Tanzania: Mapelastic Smart, Foundation, Easy and AquaDefense, Planiseal 88, Lamposilex, waterstops, tapes and sealants. Data sheets.",
    stock: "held",
    titleOverride: "Mapei Waterproofing Tanzania - Mapelastic, Planiseal 88",
  },

  // ---- Tile adhesives, grouts and care ------------------------------------

  mapeset: {
    query: "C1 tile adhesive Tanzania",
    typeWords: "C1 tile adhesive",
    description:
      "Mapeset is Mapei's C1 tile adhesive for ceramic tiles: EN 12004 class C1, 2.5-3 kg/m², 25 kg. Held by Sahihi in Dar es Salaam. Data sheet and WhatsApp quote.",
    stock: "held",
  },
  "kerabond-t": {
    query: "wall tile adhesive Tanzania",
    typeWords: "C1T wall tile adhesive",
    description:
      "Kerabond T is Mapei's wall tile adhesive with no vertical slip: EN 12004 class C1T, 2-5 kg/m², 25 kg. Stocked in Dar es Salaam. Data sheet, calculator, quote.",
    stock: "held",
  },
  "adesilex-p7": {
    query: "porcelain tile adhesive Tanzania",
    typeWords: "C2T porcelain tile adhesive",
    description:
      "Adesilex P7 is Mapei's porcelain tile adhesive: EN 12004 class C2T, no vertical slip, grey or white, 25 kg. In stock at Sahihi, Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "keraflex-maxi-s1": {
    query: "Keraflex Maxi S1 Tanzania",
    typeWords: "C2TES1 tile adhesive",
    description:
      "Keraflex Maxi S1 in Tanzania: Mapei's deformable C2TES1 adhesive for large porcelain, 1.2 kg/m² per mm. Sahihi holds it in Dar es Salaam. Data sheet.",
    stock: "held",
  },
  "keracolor-ff": {
    query: "Keracolor FF Tanzania",
    typeWords: "CG2WA cement grout",
    description:
      "Keracolor FF in Tanzania: Mapei's water-repellent cement grout for joints up to 6 mm, class CG2WA, 5 kg. From Sahihi's Dar es Salaam stock. Quote by WhatsApp.",
    stock: "held",
  },
  kerapoxy: {
    query: "Kerapoxy epoxy grout Tanzania",
    typeWords: "epoxy tile grout",
    description:
      "Kerapoxy epoxy grout in Tanzania: Mapei's two-part acid-resistant grout, class RG, joints from 1 mm, 5 kg. Held in Dar es Salaam by Sahihi. Data sheet, quote.",
    stock: "held",
  },
  "ultracare-hd-cleaner": {
    query: "alkaline tile cleaner Tanzania",
    typeWords: "alkaline tile cleaner",
    description:
      "UltraCare HD Cleaner is Mapei's alkaline tile cleaner for deep cleaning: pH 11, 200 m² per litre at 1:20. Sahihi keeps it in Dar es Salaam. Quote on WhatsApp.",
    stock: "held",
  },
  "ultracare-multicleaner": {
    query: "neutral tile cleaner Tanzania",
    typeWords: "neutral tile cleaner",
    description:
      "UltraCare Multicleaner is Mapei's neutral tile cleaner for daily cleaning: pH 8, safe on marble, 1500 m² per litre. From Sahihi's Dar es Salaam stock. Quote.",
    stock: "held",
  },
  "ultracare-stain-protector-w-plus": {
    query: "stain protector Tanzania",
    typeWords: "stain protector",
    description:
      "UltraCare Stain Protector W Plus is Mapei's water-based stain protector for stone and tiles, 30 m² per litre. Carried in stock by Sahihi, Dar es Salaam.",
    stock: "held",
  },

  // ---- Primers, levelling and wood flooring --------------------------------

  "primer-g": {
    query: "Mapei Primer G Tanzania",
    typeWords: "water-based primer",
    description:
      "Mapei Primer G in Tanzania: synthetic resin primer in water dispersion for levelling and tiling, 0.08-0.15 kg/m². On the shelf at Sahihi in Dar es Salaam.",
    stock: "held",
  },
  "triblock-p": {
    query: "Triblock P Tanzania",
    typeWords: "damp substrate primer",
    description:
      "Triblock P in Tanzania: Mapei's three-part epoxy-cementitious primer for damp substrates, two coats, 5 kg. Held by Sahihi in Dar es Salaam. Data sheet, quote.",
    stock: "held",
  },
  lignobond: {
    query: "wood floor adhesive Tanzania",
    typeWords: "wood floor adhesive",
    description:
      "Lignobond is Mapei's wood floor adhesive for parquet: two-part epoxy-polyurethane, 800-1000 g/m², 10 kg. Stocked in Dar es Salaam. Data sheet, calculator.",
    stock: "held",
  },
  "ultraplan-eco-20": {
    query: "self levelling compound Tanzania",
    typeWords: "self-levelling compound",
    description:
      "Ultraplan Eco 20 is Mapei's self levelling compound: 1 to 10 mm per layer, 1.6 kg/m² per mm, 23 kg. Sahihi holds it in Dar es Salaam. Data sheet and calculator.",
    stock: "held",
  },
  "ultraplan-contract": {
    query: "fast drying self levelling Tanzania",
    typeWords: "fast self-leveller",
    description:
      "Ultraplan Contract is Mapei's fast drying self levelling compound: 1 to 10 mm per coat, 1.7 kg/m² per mm, 25 kg. In stock at Sahihi, Dar es Salaam. Quote.",
    titleOverride: "Ultraplan Contract Tanzania - Fast Drying Self-Levelling",
    stock: "held",
  },

  // ---- Concrete repair, grouts and anchoring --------------------------------

  "adesilex-pg2-tg": {
    query: "structural epoxy adhesive Tanzania",
    typeWords: "structural epoxy adhesive",
    description:
      "Adesilex PG2 TG is Mapei's structural epoxy adhesive: two-part, thixotropic, also bonds Mapeband tapes, 6 kg. From Sahihi's Dar es Salaam stock. Quote.",
    stock: "held",
  },
  "epojet-lv": {
    query: "epoxy crack injection Tanzania",
    typeWords: "crack injection epoxy",
    description:
      "Epojet LV is Mapei's epoxy crack injection resin: very low viscosity, works on wet surfaces, EN 1504-5, 2.5 kg. In stock at Sahihi, Dar es Salaam. Quote.",
    stock: "held",
  },
  eporip: {
    query: "construction joint epoxy adhesive Tanzania",
    typeWords: "construction joint epoxy adhesive",
    description:
      "Eporip is Mapei's construction joint epoxy adhesive: seals cracks in screeds, EN 1504-4, 2 kg sets. Carried in stock by Sahihi, Dar es Salaam. Data sheet.",
    stock: "held",
  },
  "mapegrout-me05": {
    query: "non shrink grout Tanzania",
    typeWords: "non shrink grout",
    description:
      "Mapegrout ME05 is Mapei's non shrink grout: shrinkage-compensated micro-concrete, 15-220 mm, EN 1504-3 R4. Dar es Salaam stock. Data sheet, calculator, quote.",
    stock: "held",
  },
  "mapegrout-t60": {
    query: "sulphate resistant repair mortar",
    typeWords: "R4 repair mortar",
    description:
      "Mapegrout T60 ME is Mapei's sulphate resistant repair mortar: thixotropic, fibre-reinforced, EN 1504-3 R4, 25 kg. In stock at Sahihi, Dar es Salaam. Quote.",
    titleOverride: "Mapegrout T60 ME - Mapei Sulphate Resistant Repair Mortar",
    stock: "held",
  },
  "planicrete-sp": {
    query: "latex additive Tanzania",
    typeWords: "latex mortar additive",
    description:
      "Planicrete SP is Mapei's latex additive for mortar and screeds: 0.3 kg/m² as a slurry bond coat, 5 and 25 kg. Held by Sahihi in Dar es Salaam. Data sheet.",
    stock: "held",
  },
  "mapefer-1k": {
    query: "rebar anti-corrosion mortar Tanzania",
    typeWords: "rebar anti-corrosion mortar",
    description:
      "Mapefer 1K is Mapei's rebar anti-corrosion mortar: one-part cementitious, EN 1504-7, two coats to 2 mm, 5 kg. Stocked in Dar es Salaam. Data sheet, calculator.",
    stock: "held",
  },
  "mapefix-ep-50": {
    query: "chemical anchor Tanzania",
    typeWords: "chemical anchor",
    description:
      "Mapefix EP 50 is Mapei's chemical anchor: epoxy resin, ETA option 1 and ETA rebar assessed, 585 ml cartridge. Carried in stock by Sahihi, Dar es Salaam.",
    stock: "held",
  },
  "mapei-gun-585-2k": {
    query: "Mapei Gun 585 2K Tanzania",
    description:
      "Mapei Gun 585 2K in Tanzania: dispensing gun for the 585 ml two-part Mapefix EP 50 anchor cartridge, by the piece. From Sahihi's Dar es Salaam stock. Quote.",
    stock: "held",
    titleOverride: "Mapei Gun 585 2K Tanzania - Anchor Cartridge Gun | Sahihi",
  },
  "mapefibre-ns-12": {
    query: "polypropylene fibre Tanzania",
    typeWords: "polypropylene microfibres",
    description:
      "Mapefibre NS 12 is Mapei's polypropylene fibre for concrete: 12 mm microfibres, 600 g per m³, 0.6 kg. Sahihi holds it in Dar es Salaam. Data sheet, calculator.",
    stock: "held",
  },

  // ---- Resin flooring and coatings ------------------------------------------

  "mapefloor-fc-200-me": {
    query: "epoxy floor coating Tanzania",
    typeWords: "epoxy floor coating",
    description:
      "Mapefloor FC 200 ME is Mapei's high build epoxy floor coating: two-part, RAL colours, 0.32 kg/m² per coat. Held in Dar es Salaam by Sahihi. Data sheet, quote.",
    stock: "held",
  },
  "mapefloor-i-300-sl-me": {
    query: "self levelling epoxy Tanzania",
    typeWords: "self-levelling epoxy",
    description:
      "Mapefloor I 300 SL ME is Mapei's self levelling epoxy flooring: three-part, 2 to 4 mm, 3.7 kg/m² at 2 mm. In stock at Sahihi, Dar es Salaam. Ask for a quote.",
    stock: "held",
  },
  "mapefloor-cpu-plus-mf": {
    query: "polyurethane cement floor Tanzania",
    typeWords: "polyurethane cement floor",
    description:
      "Mapefloor CPU+/MF is Mapei's polyurethane cement floor: self-smoothing, 3 to 6 mm, 5.5 kg/m² at 3 mm, HACCP. Stocked in Dar es Salaam. Data sheet, calculator.",
    stock: "held",
  },
  "mapefloor-finish-415-me": {
    query: "Mapefloor Finish 415 ME Tanzania",
    typeWords: "car park PU finish",
    description:
      "Mapefloor Finish 415 ME in Tanzania: Mapei's aromatic polyurethane finish for car park floor systems, 10 kg plus 2.5 kg. From Sahihi's Dar es Salaam stock.",
    stock: "held",
  },
  "mapefloor-finish-450-me": {
    query: "UV resistant polyurethane finish",
    typeWords: "aliphatic PU finish",
    description:
      "Mapefloor Finish 450 ME is Mapei's UV resistant polyurethane floor finish: aliphatic, 0.2-0.5 kg/m² in one coat. In stock at Sahihi, Dar es Salaam. Quote.",
    titleOverride: "Mapefloor Finish 450 ME - UV Resistant Polyurethane Finish",
    stock: "held",
  },
  "mapefloor-pu-410": {
    query: "Mapefloor PU 410 Tanzania",
    typeWords: "car park PU binder",
    description:
      "Mapefloor PU 410 in Tanzania: Mapei's self-levelling polyurethane binder for car park systems, 1.0 kg/m² per mm. From Sahihi's Dar es Salaam stock. Quote.",
    stock: "held",
  },
  "primer-sn": {
    query: "epoxy floor primer Tanzania",
    typeWords: "epoxy floor primer",
    description:
      "Primer SN is Mapei's epoxy floor primer: two-part, fillerized, 0.3-0.7 kg/m² per coat, 16 kg plus 4 kg. Carried in stock by Sahihi, Dar es Salaam. Data sheet.",
    stock: "held",
  },
  "quartz-sand": {
    query: "Mapei quartz sand Tanzania",
    typeWords: "kiln-dried quartz sand",
    description:
      "Quarzo 0.5/1.2 is Mapei's kiln-dried quartz sand for resin floors: broadcast or mixed into Primer SN, 25 kg. Carried in stock by Sahihi, Dar es Salaam.",
    stock: "held",
  },
  "mapecoat-dw-25": {
    query: "drinking water tank coating Tanzania",
    typeWords: "drinking water tank coating",
    description:
      "Mapecoat DW 25 is Mapei's drinking water tank coating: epoxy paint suitable for contact with drinking water, EN 1504-2. Held in Dar es Salaam. Data sheet.",
    stock: "held",
  },

  // ---- Waterproofing --------------------------------------------------------

  lamposilex: {
    query: "water plug Tanzania",
    typeWords: "fast-setting water plug",
    description:
      "Lamposilex is Mapei's water plug for stopping leaks: ultra-fast hydraulic binder, pot life about 1 minute, 1.8 kg per litre of cavity. Dar es Salaam stock.",
    stock: "held",
  },
  antipluviol: {
    query: "water repellent coating Tanzania",
    typeWords: "water repellent coating",
    description:
      "Antipluviol is Mapei's water repellent coating: water-based, transparent, for very absorbent surfaces, 0.2-1 L/m². Sahihi has it in Dar es Salaam. Data sheet.",
    stock: "held",
  },
  "planiseal-88": {
    query: "Planiseal 88 Tanzania",
    typeWords: "osmotic cementitious coating",
    description:
      "Planiseal 88 in Tanzania: Mapei's osmotic cementitious coating for masonry and concrete, 1.5 kg/m² per mm, 25 kg. Held in Dar es Salaam. Data sheet, quotation.",
    stock: "held",
  },
  "mapelastic-aquadefense": {
    query: "Mapelastic AquaDefense Tanzania",
    typeWords: "liquid membrane",
    description:
      "Mapelastic AquaDefense in Tanzania: Mapei's ready-to-use liquid membrane, EN 14891, 1 kg/m² for two coats, 15 kg. Stocked in Dar es Salaam. Data sheet, quote.",
    stock: "held",
  },
  "mapelastic-easy": {
    query: "Mapelastic Easy Tanzania",
    typeWords: "flexible waterproof coating",
    description:
      "Mapelastic Easy in Tanzania: Mapei's flexible two-part cementitious coating for balconies and bathrooms, EN 14891. Sahihi holds it in Dar es Salaam. Data sheet.",
    stock: "held",
  },
  "mapelastic-smart": {
    query: "Mapelastic Tanzania",
    typeWords: "waterproofing membrane",
    description:
      "Mapelastic Smart in Tanzania: Mapei's flexible cementitious membrane for terraces and pools, 1.6 kg/m² per mm. Held by Sahihi in Dar es Salaam. Calculator.",
    stock: "held",
  },
  "mapelastic-foundation": {
    query: "Mapelastic Foundation Tanzania",
    typeWords: "cementitious membrane",
    description:
      "Mapelastic Foundation in Tanzania: Mapei's cementitious membrane for positive and negative water pressure, EN 1504-2. Dar es Salaam stock at Sahihi. Data sheet.",
    stock: "held",
  },
  "idrostop-pvc": {
    query: "PVC waterstop Tanzania",
    typeWords: "PVC waterstop",
    description:
      "Idrostop PVC waterstop in Tanzania: Mapei's profile for expansion and cold joints in concrete, BIC 20, 200 mm wide. Held by Sahihi in Dar es Salaam. Data sheet.",
    stock: "held",
    titleOverride: "Idrostop PVC Tanzania - Mapei PVC Waterstop | Sahihi",
  },
  "mapeband-tpe": {
    query: "expansion joint tape Tanzania",
    typeWords: "expansion joint tape",
    description:
      "Mapeband TPE is Mapei's expansion joint sealing tape: 1.2 mm TPE, elongation over 500%, 170 mm wide, 30 m. Sahihi keeps it in Dar es Salaam. Quote on WhatsApp.",
    stock: "held",
  },
  "mapeband-easy": {
    query: "waterproofing joint tape Tanzania",
    typeWords: "waterproofing joint tape",
    description:
      "Mapeband Easy is Mapei's waterproofing tape for joints: rubber between non-woven fabric, 0.68 mm, 130 mm x 30 m. Held in Dar es Salaam by Sahihi. Data sheet.",
    stock: "held",
  },
  "mapenet-150": {
    query: "glass fibre reinforcing mesh Tanzania",
    typeWords: "glass fibre reinforcing mesh",
    description:
      "Mapenet 150 is Mapei's glass fibre reinforcing mesh for waterproofing layers: alkali-resistant, 150 g/m², 1 x 50 m. Dar es Salaam stock at Sahihi. Data sheet.",
    stock: "held",
  },
  "mapeflex-pu-45-ft": {
    query: "polyurethane sealant Tanzania",
    typeWords: "polyurethane sealant",
    description:
      "Mapeflex PU 45 FT is Mapei's polyurethane sealant and adhesive: paintable, rapid, EN 15651 class 20 HM, 600 ml. Dar es Salaam stock. Data sheet, calculator.",
    stock: "held",
  },
  "mapeproof-swell": {
    query: "hydrophilic sealant Tanzania",
    typeWords: "hydrophilic sealant",
    description:
      "Mapeproof Swell is Mapei's hydrophilic sealant paste: swells at least 100% in water, about 3 m per 320 ml cartridge. Held in Dar es Salaam. Data sheet, quote.",
    stock: "held",
  },
  "idrocrete-kr-1000": {
    query: "waterproof concrete admixture Tanzania",
    typeWords: "crystalline admixture",
    description:
      "Idrocrete KR 1000 is Mapei's waterproof concrete admixture: crystallizing, EN 934-2, 1-3% of binder weight, 20 kg. On the shelf at Sahihi, Dar es Salaam.",
    titleOverride: "Idrocrete KR 1000 Tanzania - Waterproof Concrete Admixture",
    stock: "held",
  },

  // ---- Swahili twins (strings recorded from src/config/sw.ts, not rewritten) --

  sw: {
    query: "kemikali za ujenzi Tanzania",
    description:
      "Kemikali za ujenzi Tanzania kutoka Sahihi, msambazaji aliyeidhinishwa wa Mapei: gundi za tiles, kuzuia maji, sakafu za epoxy na kukarabati zege, Dar es Salaam.",
    stock: "held",
    titleOverride: "Kemikali za Ujenzi Tanzania - Msambazaji wa Mapei",
  },
  "sw/mapei": {
    query: "msambazaji wa Mapei Tanzania",
    description:
      "Sahihi ni msambazaji aliyeidhinishwa wa Mapei Tanzania. Gundi za tiles, kuzuia maji, sakafu za resin na ukarabati wa zege Dar es Salaam, na karatasi za data.",
    stock: "held",
    titleOverride: "Mapei Tanzania - Msambazaji Aliyeidhinishwa, Dar es Salaam",
  },
  "sw/line/tile-adhesives-grouts": {
    query: "gundi ya tiles Tanzania",
    description:
      "Gundi za tiles na grout za Mapei Tanzania: Mapeset, Kerabond T, Adesilex P7, Keraflex Maxi S1, Keracolor FF, Kerapoxy. Karatasi za data na vikokotoo.",
    stock: "held",
    titleOverride: "Gundi ya Tiles ya Mapei Tanzania - Keraflex, Adesilex, Grout",
  },
  "sw/line/primers-levelling": {
    query: "self-levelling na primer za Mapei Tanzania",
    description:
      "Primer na self-levelling za Mapei Tanzania: Primer G, Triblock P, Ultraplan Eco 20, Ultraplan Contract na Lignobond. Karatasi za data na vikokotoo vya kiasi.",
    stock: "held",
    titleOverride: "Self-Levelling na Primer za Mapei Tanzania - Ultraplan",
  },
  "sw/line/concrete-repair": {
    query: "ukarabati wa zege",
    description:
      "Ukarabati wa zege wa Mapei Tanzania: mortar na grout za Mapegrout, epoxy za Epojet LV na Eporip, Planicrete SP, Mapefer 1K, Mapefix EP 50. Na karatasi za data.",
    stock: "held",
    titleOverride: "Ukarabati wa Zege wa Mapei Tanzania - Mapegrout, Epojet",
  },
  "sw/line/resin-flooring": {
    query: "sakafu za epoxy Tanzania",
    description:
      "Sakafu za resin za Mapefloor Tanzania: coating ya epoxy FC 200 ME, epoxy ya self-levelling I 300 SL ME, CPU+/MF ya polyurethane na saruji. Na karatasi za data.",
    stock: "held",
    titleOverride: "Sakafu za Epoxy na PU za Mapefloor Tanzania - Mapei",
  },
  "sw/line/waterproofing": {
    query: "kuzuia maji Mapei Tanzania",
    description:
      "Waterproofing ya Mapei Tanzania: Mapelastic Smart, Foundation, Easy na AquaDefense, Planiseal 88, Lamposilex, waterstop, tepu na sealant. Karatasi za data.",
    stock: "held",
    titleOverride: "Kuzuia Maji kwa Mapei Tanzania - Mapelastic, Planiseal 88",
  },
};
