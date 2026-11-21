import type { PostContent } from "@/lib/blog";

/**
 * Waterproofing in the BOQ: description, measurement, quantity and order.
 * Primary query: waterproofing description in boq.
 *
 * Where each fact came from (all opened and text-searched on 2026-11-21):
 * - Measurement rules: AAQS, Standard Method of Measuring Building Work for
 *   Africa 2015, first edition (aaqs.org PDF). General instructions 1
 *   (descriptions "comprehensive and clear", deemed to include waste, p. 1),
 *   3 (units, incl. "No", p. 2), 6 (net measurement, laps in descriptions,
 *   nearest 10 mm, p. 3); Waterproofing pp. 46-48, items 2-17 and rules
 *   3-16 as printed. The preface sentence on East Africa is quoted.
 *   AAQS is copyright: rules paraphrased or quoted briefly, PDF not hosted.
 * - Which SMM a Tanzanian bill cites: one public hospital bill of 2022 on
 *   the Ministry of Finance site (preamble "Contract Bills" note, and its
 *   definition of "or other approved"). It is a PRICED bill: only its
 *   wording is used, no figure from it, and the hospital is not named.
 * - Regulation 21(1)-(4), Public Procurement Regulations, 2024, read in the
 *   English version on the MoF site, headed "GOVERNMENT NOTICE No. 261
 *   Published on 25/4/2025", whose regulation 1 cites them as "the Public
 *   Procurement Regulations, 2024" with a margin note "GN. Nos. 518 of 2024,
 *   817 of 2024, 42 of 2025". The copy says "Public Procurement Regulations,
 *   2024" and names the English GN only in the source label.
 * - Product values, verbatim from src/content/<brand>/<slug>.json and the
 *   PDFs in public/tds/: Mapelastic AquaDefense (14224-7-2026; EN 14891
 *   requirement column and performance figures), Mapelastic Easy
 *   (7559-2-2023 UAE), Mapelastic Foundation (2069-10-2025), Mapeband Easy
 *   (7631-03-I-2026), YHColorWall-5300 (Feb. 2025), YHCoat-1000 (Feb.
 *   2025), YHCoat-2060 (Feb. 2025), PMH-3080 Plus (April 2026: 80 mm
 *   long-edge lap, 160 mm butt-joint tape, concrete within 21 days).
 * - Packs from src/config/catalogue.ts (the owner's lists). YHCoat-2060 is
 *   stocked in 15 kg; the sheet lists 25 kg (logged conflict): 15 kg used.
 * - Area per pack, roll strips and the worked example are our arithmetic
 *   on the printed rates, and are labelled so.
 *
 * Deliberately left out: every rate, price and amount; any figure from the
 * priced bill; the 1970 East Africa SMM's own rules (book not seen); any
 * waste percentage (no standard sets one); a pack count for YHColorWall-5300
 * (its roof rate and per-coat rate do not reconcile, as the coverage post
 * says); a consumption for reinforcing cloth or detail work (not printed);
 * the PMH-3080 method statement (it is for PMH-3080, not the Plus); EN 14891
 * thresholds beyond those printed on the Mapei sheets; any reading of
 * regulation 21 beyond its words. No client or public body is named.
 */
export const content: PostContent = {
  answer:
    "A waterproofing description in a BOQ names the location, the substrate, the system type, the build in coats, thickness or kg/m², the standard and the values a substitute must meet, the detailing and the protection over it. Under the AAQS method, areas are measured in m², fillets, tapes and sealants in m, and dressings into outlets and around pipes in No. The quantity is net: laps and waste belong in the rate.",
  sections: [
    {
      h2: "What must a waterproofing description in a BOQ say?",
      body: 'Enough for a tenderer to price one system and for the engineer to reject another. The AAQS method asks for descriptions that are "comprehensive and clear". A line reading "waterproofing to roof, or other approved" lets every bidder price the cheapest product available. Put the data sheet conditions, such as moisture limits and minimum thickness, in the item.',
      list: [
        "**Location:** wet rooms, roofs, underground structures, walls; flat or sloping, stating the pitch.",
        "**Substrate:** slab, screed or masonry, with the moisture limit the sheet prints.",
        "**System type:** sheet, trowelled-on, liquid or membrane-reinforced liquid. Each is measured differently; [cementitious vs liquid membrane](/blog/cementitious-vs-liquid-membrane-waterproofing) compares them.",
        "**Build:** coats and the final thickness or consumption from the data sheet.",
        "**Standard and values** an equivalent must meet.",
        "**Detailing, protection and testing:** tapes, cloth at outlets, the screed or tiling over it, and a flood test where the sheet asks for one, as YHCoat-2060's does.",
      ],
    },
    {
      h2: "How is waterproofing measured in a bill of quantities?",
      body: 'By area in m² for the general work, by length in m for fillets, tapes and sealants, and by number for dressings into outlets and around pipes. That is the AAQS Standard Method of Measuring Building Work for Africa 2015, whose preface says it took into account "the standard methods in use in Africa, being East Africa (Kenya, Tanzania and Uganda)". Work is measured "net as fixed in position", to the nearest 10 mm.\n\nCheck which method your bill names. The one Tanzanian public bill we read, a 2022 hospital bill published by the Ministry of Finance, cites the East Africa method, First Edition Metric, 1970. We have not seen that book, so the rules below are AAQS 2015 only.\n\nOne gap: AAQS includes sheet turn-ups up to 300 mm girth in the area, and measures trowelled-on turn-ups in m with the average height stated, but for liquid work gives only m² and the openings rule. Say in the preamble how liquid upstands are measured.',
      table: {
        caption: "AAQS 2015 waterproofing rules a finishes QS uses most",
        head: ["Item", "Unit", "Rule"],
        rows: [
          [
            "Sheet or membrane to floors, roofs, showers, box gutters, walls",
            "m²",
            "Flat (not exceeding 25 degrees) and sloping, stating the pitch, given separately; no deduction for openings not exceeding 0,5 m²; priming and underlays in the description",
          ],
          [
            "Sheet turn-ups and turn-downs",
            "m²",
            "Not exceeding 300 mm girth: in the general area; exceeding: measured separately",
          ],
          [
            "Additional membranes, fillets, sealing at turn-ups",
            "m",
            "Turn-ups overlapping onto vertical surfaces are not laps",
          ],
          [
            "Dressing around pipes, into outlets; sumps",
            "No",
            "Grouped; description includes additional membranes, gussets, collars",
          ],
          [
            "Trowelled-on waterproofing",
            "m², m",
            "Turn-ups in m, average height stated; fillets in the description",
          ],
          [
            "Liquid, and membrane-reinforced liquid",
            "m², No",
            "No deduction for openings not exceeding 0,5 m²; reinforced: dressings enumerated",
          ],
          [
            "Waterstops, sealing strips, joint sealants",
            "m",
            "Sealants to top, vertical and soffit joints given separately",
          ],
        ],
        source:
          "AAQS, Standard Method of Measuring Building Work for Africa 2015, Waterproofing, pp. 46-48. Paraphrased; read the standard before relying on a rule.",
      },
    },
    {
      h2: 'How do you write "or approved equivalent" so it can be checked?',
      body: 'Name the standard and the values, then the product as one example that meets them. Regulation 21(2) of the Public Procurement Regulations, 2024 bases specifications on "objective, technical and quality characteristics" in conformity with approved standards. Under 21(3), where there is no other precise means of description, "the words \'or equivalent\' shall be used". Under 21(4), where no standard is specified and approved, a reference to a particular trademark or producer "shall not be issued".\n\nThe 2022 hospital bill defines "or other approved" as "the standard required", with goods "of equal quality and performance" allowed only with the architect\'s written approval.\n\nMind 21(1) too: specifications that create obstacles to participation must not be used, and copying one product\'s best figures as minimums can do that. Where the data sheet prints the standard\'s own requirement, as Mapei\'s EN 14891 tables do, specify that and ask for the declared value. This is our reading, not legal advice.\n\nReady clauses per product, with standards and data sheet edition, are in [the specifier pack](/specifier-pack), with a spreadsheet download.',
    },
    {
      h2: "Model BOQ items: wet room floor, upstand, flat roof and outlets",
      body: "Square brackets are project figures. Values are quoted from each data sheet, and each item says what is measured separately.",
      list: [
        "**A. Shower and toilet floors, flat (m²).** Liquid waterproofing brushed or rolled on to screed (measured separately), to receive ceramic tiling (measured separately): one-component flexible liquid membrane, [Mapelastic AquaDefense](/mapei/waterproofing/mapelastic-aquadefense) or approved equivalent, certified to EN 14891 and meeting its requirements as printed on the data sheet (initial adhesion > 0.5 N/mm²; crack-bridging > 0.75 mm at +23°C and -5°C; no penetration at 1500 kPa). Two thin coats of approx. 0.4 mm, 1 kg/m² for 2 coats. Substrate residual humidity not exceeding 3%. Including tape bonded into the membrane at wall to floor fillet joints.",
        "**B. Upstand to terrace walls and thresholds (m), average height [150] mm.** Trowelled-on flexible cementitious waterproofing, [Mapelastic Easy](/mapei/waterproofing/mapelastic-easy) or approved equivalent in compliance with EN 14891, at least two coats, final thickness at least 2 mm, continuous with the floor membrane. Including [Mapeband Easy](/mapei/waterproofing/mapeband-easy) or approved equivalent at the wall to floor junction, pieces overlapped at least 5 cm.",
        "**C. Flat roof, exposed (m²).** Liquid waterproofing to concrete roof slab, flat: one-component UV-resistant water-based coating, [YHColorWall-5300](/oriental-yuhong/yhcolorwall-5300) or approved equivalent, tensile strength ≥2.5 MPa and elongation at break ≥550% (ASTM D412), tensile bond strength ≥1.20 MPa (BS EN 1542). Primer coat diluted with 15-20% clean water, then at least two undiluted coats at 0.8-1.0 kg/m² per coat. Substrate moisture content ≤ 4%. Joints, drainage pipes and other details reinforced with reinforced polyester cloth embedded in the coating.",
        "**D. Dressing into roof outlets (No).** Dressing item C into [100] mm outlet, including reinforced polyester cloth, collar and gussets. Group by size; pipes through the slab are a separate group.",
      ],
      note: 'YHColorWall-5300\'s sheet says it is "not suitable for permanent water immersion" and not recommended for pedestrian traffic. A roof that ponds or carries foot traffic needs another system or protection, stated in the item.',
    },
    {
      h2: "Model BOQ items below ground, and the values to check",
      body: "Below ground, the item must carry the values that prove resistance to water pressure.\n\n**E. External face of basement retaining wall (m²).** Flexible cementitious waterproofing by roller or trowel to concrete, [Mapelastic Foundation](/mapei/waterproofing/mapelastic-foundation) or approved equivalent complying with EN 1504-2 (PI, MC and IR principles) and EN 14891 (CM01P). At least two coats, final thickness not less than 2 mm, not more than 2 mm per coat. Joints, cracks and pipe-work sealed as the data sheet directs, measured separately in m and No.\n\n**F. Under raft slab, on blinding (m²).** Pre-applied HDPE waterproofing membrane, [PMH-3080 Plus](/oriental-yuhong/pmh-3080-plus) or approved equivalent, [1.5] mm. Long edges lapped 80 mm by dual-lap self-adhesive overlap; short edges butt-jointed with 160 mm wide tape, end laps staggered; laps included. Concrete poured within 21 days. The whole slab-to-wall build is drawn on [our below-grade waterproofing page](/oriental-yuhong/below-grade-waterproofing).",
      table: {
        caption: "Declared values to check an equivalent against",
        head: ["Product", "Standard or test", "Declared value"],
        rows: [
          [
            "Mapelastic AquaDefense",
            "EN 14891-A.6.2, A.8.2, A.8.3",
            "Initial adhesion 1.7 N/mm²; crack-bridging 3.2 mm at +23°C, 1.6 mm at -5°C",
          ],
          [
            "Mapelastic Foundation",
            "EN 1062-1, EN 1062-7, pressure tests",
            "Class W3; Class A4 (+23°C) (> 1,25 mm); no penetration at 5 bar positive, 1.5 bar negative",
          ],
          [
            "YHCoat-1000",
            "BS EN 14891, A7; BS EN 1062-3",
            "Water impermeability (1.5bar, 7d) ≈ 0 mm; Class W3",
          ],
          [
            "PMH-3080 Plus",
            "ASTM D5385; ASTM E154",
            "Resistance to hydrostatic head 71 m; puncture resistance 1000 N",
          ],
        ],
        source:
          "Technical data sheets of each product (Mapei, Oriental Yuhong), values as printed.",
      },
    },
    {
      h2: "How do you calculate waterproofing quantity from the BOQ?",
      body: "Start from the bill's net areas and add back what the rules leave out: openings not deducted, upstands, laps and details. Multiply the coated area by the data sheet consumption for the full build, divide by the pack and round up. Then add your own waste allowance; no standard sets one, and AAQS puts waste in the rate.\n\nLaps matter most on sheets. PMH-3080 Plus comes in 1.2 m by 20 m rolls of 24 m². With its 80 mm long-edge lap, each strip after the first adds 1.12 m of width. A 20 m by 12 m raft, 240 m² in the BOQ, takes 11 strips: 264 m² of membrane before upturns and details. That is our arithmetic on the printed sizes.\n\nPer-product kg/m² is set out in [our coverage guide](/blog/waterproofing-coverage-per-square-metre). Consumption is theoretical: the YHCoat-2060 sheet notes that actual quantities depend on the substrate condition and surface profile on site.",
      table: {
        caption: "From BOQ m² to packs: printed rates and stocked packs",
        head: ["Product", "Printed rate", "Pack", "Area per pack"],
        rows: [
          ["Mapelastic AquaDefense", "1 kg/m² for 2 coats", "15 kg", "15 m²"],
          [
            "Mapelastic Easy",
            "Approx. 1.9 kg/m² per mm; at least 2 mm, so 3.8 kg/m²",
            "24 kg kit",
            "About 6.3 m²",
          ],
          [
            "Mapelastic Foundation",
            "Approx. 1.65 kg/m² per mm by roller; at least 2 mm, so 3.3 kg/m²",
            "32 kg kit",
            "About 9.7 m²",
          ],
          [
            "YHCoat-1000",
            "2 kg/m² wet area; 3 kg/m² elsewhere",
            "26 kg set",
            "13 m²; about 8.7 m²",
          ],
          [
            "YHCoat-2060",
            "≈2.0 kg/m², 1.0 mm dry film by 2 coats",
            "15 kg",
            "7.5 m²",
          ],
          [
            "PMH-3080 Plus",
            "80 mm long-edge lap",
            "1.2 m x 20 m roll",
            "22.4 m² laid, no end joint",
          ],
          [
            "Mapeband Easy",
            "Pieces overlap at least 5 cm",
            "130 mm x 30 m roll",
            "30 m less overlaps",
          ],
        ],
        source:
          "Rates and laps from the data sheets; packs from our stock list; area per pack is our arithmetic.",
      },
      note: "We give no pack figure for YHColorWall-5300: its sheet prints 3 kg/m² for roofs and 0.8-1.0 kg/m² per coat, which do not reconcile. Ask us before ordering roof quantities.",
    },
    {
      h2: "Worked example: a flat roof slab under a screed",
      body: "The BOQ says 96 m², but the order covers nearly 108 m²: 13 sets of [YHCoat-1000](/oriental-yuhong/yhcoat-1000), not 12. The slab is 12.00 m by 8.00 m with a parapet all round. It is not a traffickable finish, so a levelling screed, measured separately, goes over it. The 300 mm upstand and the 0.60 m square vent are our assumptions.",
      steps: [
        "BOQ, roof, flat: 12.00 x 8.00 = 96.00 m². The vent, 0.36 m², is not deducted.",
        "BOQ, upstand to parapet, 300 mm high: 2 x (12.00 + 8.00) = 40.00 m. Dressings around the vent and two outlets: 3 No.",
        "Coated area: 96.00 - 0.36 = 95.64 m² on the roof, plus 40.00 x 0.30 = 12.00 m² of upstand, total 107.64 m².",
        "At 3 kg/m² (2-3 coats, outside wet areas): 107.64 x 3 = 322.92 kg, and 322.92 / 26 = 12.42, so 13 sets before waste. The bill area alone gives 288 kg, 12 sets, which runs short at the parapet.",
        "Add the details, which the sheet does not quantify, and your waste allowance. Allow the printed wait between coats: 12 hours at +10°C, 6 at +20°C, 3 at +30°C.",
      ],
      note: "Send the counts to [the quote list](/quote) and we reply with packs and availability. We supply materials; we do not apply, measure or certify, and no rate is published here.",
    },
  ],
  faq: [
    {
      q: "What unit is waterproofing measured in a BOQ?",
      a: "Under AAQS 2015: m² for general areas; m for fillets, sealing strips, waterstops and joint sealants; No for dressings into outlets, around pipes and to sumps. Sheet turn-ups over 300 mm girth are measured separately in m². Check which method your bill's preamble names.",
    },
    {
      q: "Are laps included in the BOQ quantity?",
      a: "No. AAQS measures net and makes no allowance for laps or waste except where stated. Laps are written into the description and priced in the rate. A turn-up overlapping onto a vertical surface is not treated as a lap.",
    },
    {
      q: "Should openings be deducted from waterproofing areas?",
      a: "Not when they are 0.5 m² or smaller, for sheet, liquid and membrane-reinforced liquid waterproofing under AAQS. Larger openings are deducted. The material order should still use the area actually coated.",
    },
    {
      q: "Can a Tanzanian public BOQ name a waterproofing brand?",
      a: 'Regulation 21 of the Public Procurement Regulations, 2024 requires specifications based on approved standards, "or equivalent" where no other precise description exists, and no trademark reference where no standard is specified. Name the standard and values first. Take legal advice on a specific tender.',
    },
  ],
  sources: [
    {
      label:
        "Standard Method of Measuring Building Work for Africa 2015, first edition, Africa Association of Quantity Surveyors",
      url: "https://aaqs.org/wp-content/uploads/2020/05/StandardMethodsAAQS.pdf",
    },
    {
      label:
        "The Public Procurement Regulations, 2024, English version (GN No. 261 published 25/4/2025), Ministry of Finance",
      url: "https://www.mof.go.tz/uploads/documents/en-1758539549-GN%20No.%20261%20OF%202025%20-%20THE%20PUBLIC%20PROCUREMENT%20REGULATIONS%20%20-%20ENGLISH%20VERSION.pdf",
    },
    {
      label:
        "Bill of quantities for a public hospital building, 2022, Ministry of Finance (wording only)",
      url: "https://www.mof.go.tz/uploads/text-editor/files/Tabora%20RRH%20Contract%20No.%202_1658562898.pdf",
    },
    {
      label: "Mapelastic AquaDefense technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-aquadefense",
    },
    {
      label: "Mapelastic Easy technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-easy",
    },
    {
      label: "Mapelastic Foundation technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-foundation",
    },
    {
      label: "Mapeband Easy technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapeband-easy",
    },
    {
      label: "YHColorWall-5300 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcolorwall-5300",
    },
    {
      label: "YHCoat-1000 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcoat-1000",
    },
    {
      label: "YHCoat-2060 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcoat-2060",
    },
    {
      label: "PMH-3080 Plus technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/pmh-3080-plus",
    },
  ],
};
