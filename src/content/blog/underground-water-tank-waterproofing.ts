import type { PostContent } from "@/lib/blog";

export const content: PostContent = {
  answer:
    "Waterproof an underground water tank in layers: dense concrete and sealed joints when built, an inside coating, and seals where pipes pass through the wall. For drinking water, use a coating whose data sheet says it may touch drinking water, apply the printed thickness, and wait the printed time before filling. Stop any running leak first.",
  sections: [
    {
      h2: "Why do underground water tanks leak?",
      body: "Underground tanks leak at their joints, at their pipes and through porous or cracked walls, and water can travel both ways. The joint between floor and wall is the weakest line, because the two are usually cast at different times. Pipes through the wall come next.\n\nBlockwork and poorly compacted concrete leak across the whole face, as a slow drop in level with no obvious wet patch.\n\nA full tank pushes water out. An empty tank in wet ground has water pushing in, which is how ground water gets into a tank during masika. A coating on the inside face has to hold both ways, and not all are tested for it. [Planiseal 88](/mapei/waterproofing/planiseal-88) prints a limit for water pushing in: negative pressure up to 1 atmosphere.",
    },
    {
      h2: "How do you build a new tank so it does not leak?",
      body: 'Build the watertightness into the concrete and the joints, and treat the coating as the second line. Advice on a Tanzanian forum for a planned kisima cha ardhini was to add "water proof cement". An additive in the mix does not seal a joint between two pours or a gap around a pipe.\n\n[Idrocrete KR 1000](/mapei/waterproofing/idrocrete-kr-1000) is a crystallizing admixture that lists storage tanks, dosed at 1 to 3 kg per 100 kg of cementitious materials. Its sheet requires a water/cement ratio under 0.5 and adequate wet curing, and says it "cannot be used to make up for poorly designed concrete".\n\nIdrostop PVC goes in cold and expansion joints; we stock the 200 mm BIC 20 profile, printed for internal construction joints. Eporip lists rigid, waterproof construction joints, with "concrete bed to tank walls" as its example.\n\nAt pipes, [Mapeproof Swell](/mapei/waterproofing/mapeproof-swell) lists pipe-work through concrete and swells by at least 100% in water. It must always be confined.',
    },
    {
      h2: "Which waterproofing is safe for a drinking water tank?",
      body: "Use a product whose own data sheet says it may touch drinking water. Three stocked products print a drinking water approval or test, and a fourth lists a standard. [Mapecoat DW 25](/mapei/resin-flooring/mapecoat-dw-25) is an epoxy paint, not for flexible substrates or damp surfaces. Planiseal 88 is a rigid cementitious mortar, not for surfaces under dynamic stress. [X-Shield FlexPruf](/x-calibur/x-shield-flexpruf) is described as a flexible elasto-cement coating.\n\nAll the approvals printed are foreign: Australian and New Zealand, British, Italian and European. We have not established whether a Tanzanian body requires anything further, so ask your water authority or engineer.\n\nIf the tank is tiled, Keraflex Maxi S1 lists bonding tiles in tanks and Keracolor FF prints 7 days to service, neither with a drinking water statement.",
      table: {
        caption:
          "Stocked products whose data sheets mention water tanks or drinking water",
        head: ["Product", "What the sheet says", "Consumption", "Wait before filling"],
        rows: [
          [
            "Planiseal 88",
            "Contact with drinking water; AS/NZS 4020:2018; concrete or masonry tanks",
            "1.5 kg/m² per mm at 2 to 3 mm: 3.0 to 4.5 kg/m²",
            "7 days before service",
          ],
          [
            "Mapecoat DW 25",
            "Lining drinking water tanks; Italian Decree 174; EU 10/2011",
            "400 to 600 g/m² in two coats",
            "7 days final hardening, then rinse",
          ],
          [
            "X-Shield FlexPruf",
            "Water tank coating; contact with potable water; lists BS 6920",
            "1.7 kg/m² per coat, 2 coats: 3.4 kg/m²",
            "Do not water test or immerse until cured for 5 days",
          ],
          [
            "Lamposilex (leak plug)",
            "Potable water; AS/NZS 4020:2018; names tanks above ground",
            "1.8 kg per litre of cavity",
            "Not stated",
          ],
          [
            "Mapeproof Swell (sealant)",
            "Drainage outlets in tanks; no drinking water claim",
            "About 3 m per 320 ml cartridge",
            "Not stated",
          ],
          [
            "Idrocrete KR 1000 (admixture)",
            "Concrete for storage tanks; no drinking water claim",
            "1 to 3 kg per 100 kg of binder",
            "Not stated",
          ],
          [
            "Eporip (joint adhesive)",
            "Bed to tank wall joints; no drinking water claim",
            "0.5 to 0.7 kg/m² on a rough substrate",
            "7 days complete hardening",
          ],
        ],
        source:
          "Technical data sheets of each product, Mapei and X-Calibur. Totals per m² are our arithmetic on the printed rate.",
      },
    },
    {
      h2: "How do you repair a tank that already leaks?",
      body: "Empty it, find the fault, stop any running water, repair the joints and cracks, and only then coat. A coating brushed over a running leak does not stay. Planiseal 88 must not go on a substrate with standing water, Mapelastic Foundation not on one saturated with water, and Mapecoat DW 25 not on a damp one unless Triblock P has gone on first.\n\nWhere ground water is the problem and the tank does not hold drinking water, Mapelastic Foundation prints no penetration at 1.5 bar of negative pressure, at 1.65 kg/m² per mm by roller and at least 2 mm, so 3.3 kg/m². Its data sheet has no drinking water statement, so we do not offer it as a drinking water lining.",
      steps: [
        "Drain and clean the tank, and mark every wet line.",
        "Cut running leaks out to at least about 2 cm wide and 2 cm deep, and plug them. Lamposilex has about 1 minute of pot life at +20°C.",
        "Fill static cracks. YHRepair-2516 is for non-moving cracks and holes; its sheet has no drinking water statement.",
        "On a damp surface under an epoxy lining, apply Triblock P first: two coats at 250 to 300 g/m² per coat on non-absorbent surfaces, 400 to 500 g/m² on absorbent. Overcoat within 24 hours to 7 days.",
        "Apply the coating at the printed thickness. Between coats: Planiseal 88, 5 to 24 hours; Mapecoat DW 25, 6 to 24 hours.",
      ],
    },
    {
      h2: "How much coating does a water tank need?",
      body: "Work out the internal surface area, measured inside the finished walls, then multiply by the printed rate. Walls are 2 x (length + width) x depth, plus the floor. Include the underside of the roof slab only if you are coating it.\n\nTake a 10,000 litre tank, 2.5 m long, 2 m wide and 2 m deep inside: 2.5 x 2 x 2 = 10 m³. The walls are 2 x (2.5 + 2) x 2 = 18 m² and the floor is 2.5 x 2 = 5 m², so 23 m² in all. The table adds no waste allowance, and rough blockwork will use more. The calculator on each product page runs the same sum for your own tank.",
      table: {
        caption: "Coating for a 23 m² tank interior, before any waste",
        head: ["Coating", "Per m²", "For 23 m²", "Packs"],
        rows: [
          ["Planiseal 88", "3.0 to 4.5 kg", "69 to 103.5 kg", "3 to 5 of 25 kg"],
          ["Mapecoat DW 25", "0.4 to 0.6 kg", "9.2 to 13.8 kg", "1 of 15 kg (12 + 3)"],
          ["X-Shield FlexPruf", "3.4 kg", "78.2 kg", "4 of 22 kg"],
        ],
        source:
          "Our arithmetic from the data sheet rates and the pack sizes we stock.",
      },
    },
    {
      h2: "How long before you can fill the tank?",
      body: "Wait the time the coating's data sheet prints, then clean. Planiseal 88 prints 7 days before putting into service. Its sheet then says to thoroughly clean all the surfaces and remove all the cleaning water before filling.\n\nMapecoat DW 25 prints a final hardening time of 7 days. Its sheet says hardening takes longer at low temperatures and asks for a thorough rinse with plenty of clean, hot water before filling.\n\nFor X-Shield FlexPruf, read the data sheet on the product page before water testing or filling. Where our table says not stated, no wait is printed on the sheet, so ask the maker and do not guess. An empty tank in wet ground has water pressing on the lining from outside, so plan the work and the fill together, ideally outside the rains.",
    },
  ],
  faq: [
    {
      q: "What is the best type of waterproofing for a water tank?",
      a: "It depends on the water and the structure. For drinking water, choose a coating whose sheet says so. Rigid coatings suit sound, static tanks; flexible ones suit a structure likely to crack. Joints and pipes need their own seals.",
    },
    {
      q: "Can you waterproof an existing leaking underground water tank?",
      a: "Yes, from the inside, once it is drained. Stop running water first with a fast-setting plug, repair cracks and corners, then coat a surface free of standing water.",
    },
    {
      q: "What certifications should I look for in a drinking water tank coating?",
      a: "Look on the data sheet itself. Ours print AS/NZS 4020:2018, an Italian decree with EU 10/2011, and BS 6920, all foreign. We have not established whether a Tanzanian approval is needed, so ask your water authority or engineer.",
    },
    {
      q: "How long after coating can I fill the tank?",
      a: "Planiseal 88 prints 7 days before service, then a thorough clean. Mapecoat DW 25 prints 7 days to final hardening, then a rinse with clean, hot water. Where a sheet prints no time, ask the maker. Do not guess.",
    },
  ],
  sources: [
    {
      label: "Planiseal 88 technical data sheet, Mapei",
      url: "/mapei/waterproofing/planiseal-88",
    },
    {
      label: "Mapecoat DW 25 technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapecoat-dw-25",
    },
    {
      label: "X-Shield FlexPruf technical data sheet, X-Calibur",
      url: "/x-calibur/x-shield-flexpruf",
    },
    {
      label: "Lamposilex technical data sheet, Mapei",
      url: "/mapei/waterproofing/lamposilex",
    },
    {
      label: "YHRepair-2516 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhrepair-2516",
    },
    {
      label: "Mapeproof Swell technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapeproof-swell",
    },
    {
      label: "Idrocrete KR 1000 technical data sheet, Mapei",
      url: "/mapei/waterproofing/idrocrete-kr-1000",
    },
    {
      label: "Idrostop PVC BI BE ME technical data sheet, Mapei",
      url: "/mapei/waterproofing/idrostop-pvc",
    },
    {
      label: "Eporip technical data sheet, Mapei",
      url: "/mapei/concrete-repair/eporip",
    },
    {
      label: "Mapelastic Foundation technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-foundation",
    },
    {
      label: "Triblock P technical data sheet, Mapei",
      url: "/mapei/primers-levelling/triblock-p",
    },
    {
      label: "Keraflex Maxi S1 technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1",
    },
    {
      label: "Keracolor FF technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/keracolor-ff",
    },
    {
      label: "Nataka kujenga kisima cha ardhini cha maji, JamiiForums",
      url: "https://www.jamiiforums.com/threads/nataka-kujenga-kisima-cha-ardhini-cha-maji.1572980/",
    },
  ],
};
