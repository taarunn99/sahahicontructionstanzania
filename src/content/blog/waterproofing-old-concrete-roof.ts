import type { PostContent } from "@/lib/blog";

/**
 * Re-waterproofing an old flat concrete roof on an occupied building, and the
 * strip-or-overcoat decision. Primary query: waterproofing old concrete roof.
 *
 * Where the facts come from:
 * - YHColorWall-5300: public/tds/oriental-yuhong/yhcolorwall-5300.pdf (OYH,
 *   issue Feb. 2025), read with pdftotext on 2026-11-21. Every value is quoted
 *   as printed: new and old roof surfaces, refurbishment, "Easily recoated when
 *   needed - no stripping required", "cost efficient life cycle extension for
 *   failing roofs", cold applied, water based, low VOC, solar reflectance 82%
 *   (ASTM E903), thermal emittance 0.9 (ASTM C1371), SRI 103 (ASTM E1980),
 *   colours White/Blue/Grey/Red/Green, 20 kg pail, roof 3 kg/m², primer diluted
 *   15-20%, at least two undiluted coats at 0.8-1.0 kg/m² per coat, overcoat
 *   2-3 hours minimum and 1 day maximum at +30°C, ready 72 hours at +30°C,
 *   substrate moisture <= 4%, +5 to +35°C, RH not above 80% until cured,
 *   polyester cloth at details, all precautions. The QR caption "white for cool
 *   roof" is printed on page 3. The sheet does NOT say which colour the 82% and
 *   SRI 103 were measured on; the post says so.
 * - YHRepair-2516 and YHPUseal-2925: their PDFs in public/tds/oriental-yuhong/.
 * - X-Shield FlexPruf: public/tds/x-calibur/x-shield-flexpruf.pdf.
 * - Stock: src/config/catalogue.ts (YHColorWall-5300 stocked in white, 20 kg;
 *   YHPUseal-2925 grey 600 ml; YHRepair-2516 4 kg bag; FlexPruf 22 kg kit).
 *   The price list says 2 kg/m² for roofs; the data sheet's 3 kg/m² is used
 *   (catalogue.ts conflict note).
 * - Kilukibi and Mzava (Dar es Salaam Institute of Technology), East African
 *   Journal of Engineering 9(2), 17 Nov 2026: read on the journal page
 *   (abstract). 74 panels inspected, 70 in 17 buildings as the main dataset;
 *   deterioration "through cracking, leakage, corrosion, and surface
 *   degradation"; "Maintenance deficiency and waterproofing defects accounted
 *   for the largest shares of explained variance". This is the same study the
 *   research notes call "the DIT study": there is one study, not two.
 * - Proctor, "Should we paint all classroom roofs white to improve learning in
 *   Tanzania?", EdTech Hub working paper, May 2022: the PDF was downloaded and
 *   read. Abstract figures quoted: classroom temperature in Dar es Salaam
 *   "often exceeds 40℃"; white paint "reduced the temperature by around 3.7℃
 *   over the course of the school day and up to a maximum of 5℃", "roughly
 *   twice as effective" as blue; eight days. The paint test was on three model
 *   classrooms of brick and corrugated iron in a car park in Oyster Bay, not
 *   on concrete slabs, and the post says so.
 *
 * Deliberately left out: any price or cost, the study's learning and cost
 * effectiveness figures (money-based), any temperature claim for
 * YHColorWall-5300 itself, any claim that it can go over bitumen felt (not a
 * listed substrate), Mapenet 150 as a stand-in for the polyester cloth (a
 * different material), a moisture test standard (none opened), Dar es Salaam
 * humidity figures (no source opened), and any client or programme name.
 * Polyester cloth is not on our stock list and the post does not offer it.
 * Site judgement (labelled in the text): the survey method, the decision
 * table verdicts, counting upstands at the roof rate, and when to embed cloth.
 */
export const content: PostContent = {
  answer:
    "An old concrete roof can usually be waterproofed without stripping it, if the slab or screed is sound, the falls clear the water and the surface is dry. Survey first: ponding, cracks, hollow screed, outlets, parapets and moisture decide it. Repair those, clean off old paint and loose material, then apply a reflective liquid membrane such as YHColorWall-5300 at its printed roof rate of 3 kg/m².",
  sections: [
    {
      h2: "Can you waterproof an old concrete roof without stripping it?",
      body: [
        "Often, yes, and on an occupied block it is usually the only practical choice. [YHColorWall-5300](/oriental-yuhong/yhcolorwall-5300): its data sheet says it suits \"both new construction and refurbishment, covering new and old exterior wall and roof surfaces\", and calls itself \"a cost efficient life cycle extension for failing roofs\". It is cold applied, needing no heat or flame, and water based.",
        "Read one claim carefully. \"Easily recoated when needed - no stripping required\" describes recoating YHColorWall-5300 itself in later years. It does not mean any old surface can stay: the same sheet asks for a concrete roof that is \"solid, clean, dry, and free from contaminants such as dirt, oil, grease, old paint, and loose material\".",
        "A Dar es Salaam Institute of Technology study of 74 roof slab panels on two Dar es Salaam campuses (November 2026) found that slabs deteriorate \"through cracking, leakage, corrosion, and surface degradation\", and that \"maintenance deficiency and waterproofing defects accounted for the largest shares of explained variance\" in their condition.",
      ].join("\n\n"),
    },
    {
      h2: "What should you look at before deciding?",
      body: [
        "Walk the roof on a dry day, then after rain if you can, and mark everything on a plan. The survey decides the bill of materials.",
        "For a sheet roof behind a parapet with a box gutter, read [why hidden roof houses leak](/blog/why-hidden-roof-houses-leak): it covers gutters and outlet sizing. This list, for the exposed slab, is our site practice.",
      ].join("\n\n"),
      list: [
        "**Ponding.** Mark where water stands after rain. YHColorWall-5300 is \"not suitable for permanent water immersion\", so ponds need the falls corrected first.",
        "**Cracks.** Map them as static or moving. Rust stains or spalling under the slab mean concrete repair first.",
        "**Debonded screed.** Tap it with a hammer. A hollow sound means it has parted from the slab.",
        "**Outlets.** Clear them and check the joint between pipe and concrete.",
        "**Parapets and upstands.** Check copings, the slab to wall junction and old flashings. Water entering a parapet top can look like a roof leak.",
        "**Moisture.** The data sheet asks for substrate moisture of 4% or less and rules out \"substrates with rising moisture\". It does not say how to measure; use a concrete moisture meter.",
        "**What is on it now.** Bare concrete, cement screed, old paint, an old coating, or bitumen felt.",
        "**How the roof is used.** If residents dry laundry or reach tanks there, note that the sheet says the product \"is not recommended for pedestrian traffic\".",
      ],
    },
    {
      h2: "Strip or coat over: how do you decide?",
      body: "Coat over what is sound and listed as a substrate; remove what the data sheet tells you to remove, and anything it does not list. The verdicts are our site judgement, each tied to a line of the sheet.",
      table: {
        caption: "Strip or overcoat, by what the survey finds",
        head: ["Survey finding", "Verdict", "Why"],
        rows: [
          [
            "Sound bare slab or cement screed, water drains",
            "Clean and coat over",
            "Concrete and cementitious substrates are listed",
          ],
          [
            "Old paint, chalky or flaking coating",
            "Remove it, then coat",
            "Surface must be free of old paint and loose material",
          ],
          [
            "Earlier coat of YHColorWall-5300",
            "Clean and recoat",
            "\"Easily recoated when needed - no stripping required\"",
          ],
          [
            "Hollow screed in patches",
            "Cut out, make good, coat",
            "Substrate must be solid",
          ],
          [
            "Hollow screed over most of the roof",
            "Strip and rescreed",
            "Patching would leave more repair than roof",
          ],
          [
            "Ponding over a wide area",
            "Correct the falls first",
            "Not for permanent water immersion",
          ],
          [
            "Old bitumen felt or membrane",
            "Strip, or get OYH's written approval",
            "Bitumen is not a listed substrate",
          ],
          [
            "Slab wet from below, or above 4% moisture",
            "Do not apply yet",
            "Not on rising moisture; 4% or less required",
          ],
          [
            "Spalling, exposed reinforcement",
            "Concrete repair first",
            "Substrate must be solid",
          ],
        ],
        source:
          "YHColorWall-5300 technical data sheet, Oriental Yuhong, Feb. 2025. Verdicts are our site judgement.",
      },
      note: "For spalled slab soffits and exposed bars, see [spalling concrete repair](/blog/spalling-concrete-repair) before the roof is coated. A coating will not stop corrosion that has already started.",
    },
    {
      h2: "How do you repair cracks, joints and outlets first?",
      body: [
        "Sort each crack by whether it moves. A rigid repair cracks again where the slab moves.",
        "For static cracks and holes, even with water running, [YHRepair-2516](/oriental-yuhong/yhrepair-2516) is a quick-setting hydraulic repair mortar that \"typically sets in 3-5 minutes\". Its sheet limits it: \"Do not apply to dynamic (moving) cracks\", do not use it in expansion or control joints, and do not use it \"as a surface-applied coating\". We stock it in 4 kg bags.",
        "For moving joints and the slab to parapet junction, [YHPUseal-2925](/oriental-yuhong/yhpuseal-2925) lists \"flashing, common roofing detail applications\", with a movement capability of ±25%. Movement joints must be 8 to 40 mm wide and at least 8 mm deep, over a backing rod. One warning matters on old roofs: its sheet says not to apply it on materials that leach oils, \"such as bitumen\". Cut back old bituminous mastic before sealing.",
        "In the coating itself, YHColorWall-5300 asks that \"expansion joints, drainage pipes, and other detailed nodes must be reinforced\" with polyester cloth embedded in the coating, fully saturated and without wrinkles. Polyester cloth is not on our stock list, so source it with the job.",
      ].join("\n\n"),
    },
    {
      h2: "How is YHColorWall-5300 applied on an old slab?",
      body: "In this order, from the data sheet, by roller, brush or airless spray. The sheet does not say which coat takes the cloth; we embed it in the first full coat.",
      steps: [
        "Make the surveyed repairs. Remove dirt, oil, grease, old paint and loose material.",
        "Check conditions: substrate moisture 4% or less, air and substrate between +5°C and +35°C, and no rain imminent.",
        "Stir gently until the material is homogeneous.",
        "Primer coat: dilute YHColorWall-5300 with 15-20% clean water and apply. Wait until it is touch-dry.",
        "Apply the first undiluted coat at 0.8-1.0 kg/m², embedding polyester cloth at expansion joints, drainage pipes and other details.",
        "Apply at least one more undiluted coat at the same rate, once the coat below is completely dry: at +30°C, no sooner than 2-3 hours and no later than 1 day.",
        "Protect the membrane until cured: above 5°C and relative humidity not above 80%. It is ready for use after 72 hours at +30°C.",
        "Clean tools with water straight away.",
      ],
      note: "On a porous old slab that may give off air, the sheet says to apply \"during falling ambient and substrate temperature\". Coating while the roof is heating up can cause pin holing.",
    },
    {
      h2: "How much coating does an old roof need?",
      body: [
        "Multiply the area by the roof rate of 3 kg/m² and divide by the 20 kg pail. Take a block with an 18 x 12 m roof and a 60 m parapet run with a 0.3 m upstand. The roof is 216 m² and the upstand 18 m², which we count at the roof rate because it carries the same water. That is 234 m² x 3 = 702 kg, or 702 / 20 = 35.1, so 36 pails, before any allowance for waste.",
        "Two printed figures do not obviously agree: two undiluted coats at 0.8-1.0 kg/m² come to 1.6-2.0 kg/m², not 3. \"At least two\" is a minimum; reaching 3 kg/m² at 1.0 kg/m² per coat takes three full coats. The sheet does not say whether the diluted primer counts towards the 3 kg/m². We plan on 3 kg/m², the figure printed for roofs; on a large roof, ask OYH or us to confirm before ordering.",
        "The [YHColorWall-5300 product page](/oriental-yuhong/yhcolorwall-5300) has a calculator with your own wastage allowance. See also [waterproofing coverage per square metre](/blog/waterproofing-coverage-per-square-metre).",
      ].join("\n\n"),
      table: {
        caption: "YHColorWall-5300 on a worked roof",
        head: ["Item", "Figure", "Source"],
        rows: [
          ["Roof rate", "3 kg/m²", "Data sheet, \"for roof: 3kg/ m²\""],
          ["Rate per coat", "0.8-1.0 kg/m²", "Data sheet"],
          ["Coats", "Primer, then at least two undiluted", "Data sheet"],
          ["Pack", "20 kg pail", "Data sheet; stocked in white"],
          ["Worked area", "216 m² roof + 18 m² upstand = 234 m²", "Example"],
          ["Material", "702 kg, 36 pails before waste", "234 x 3, divided by 20"],
        ],
        source:
          "YHColorWall-5300 technical data sheet, Oriental Yuhong, Feb. 2025. Consumption is theoretical and varies with the substrate.",
      },
    },
    {
      h2: "Does a reflective roof coating reduce heat in the rooms below?",
      body: [
        "It reflects sunlight that a grey slab would absorb; the sheet calls it \"a reflective coating\" that \"enhances energy efficiency by reducing cooling costs\". It prints three values: solar reflectance 82% (ASTM E903), thermal emittance 0.9 (ASTM C1371) and a solar reflectance index (SRI) of 103 (ASTM E1980). Reflectance is the share of sunlight bounced off; emittance is how well the surface sheds the heat it does absorb; SRI combines the two.",
        "The sheet does not say which of its five colours those figures were measured on, so do not assume a red or green roof reaches SRI 103. A caption on page 3 of the sheet reads \"white for cool roof\", and white is the colour we stock, but that is not the same as a stated test colour. If reflectance is in your specification, get the test colour from OYH in writing.",
        "On temperature, an EdTech Hub working paper (Proctor, May 2022) recorded classroom temperatures in Dar es Salaam that \"often\" exceeded 40℃. It then tested roof paint on three model classrooms of brick and corrugated iron in Oyster Bay. Over eight days, white paint \"reduced the temperature by around 3.7℃ over the course of the school day and up to a maximum of 5℃\", about twice the effect of blue. Those were iron sheet roofs. A concrete slab is a different roof, so the figure does not transfer to it, and we make no temperature claim for YHColorWall-5300.",
      ].join("\n\n"),
    },
    {
      h2: "When should the work be done on an occupied building?",
      body: [
        "In a settled dry spell, with days in hand for drying and curing. The sheet says not to apply \"if rain is imminent\", needs 4% moisture or less, and gives 72 hours at +30°C before use. Our [builder's rain calendar for masika and vuli](/blog/masika-vuli-builders-rain-calendar) sets out when the dry windows fall in each region.",
        "On an occupied block, the coating is cold applied and water based, with a VOC printed as about 0 g/L, so there is no torch on the roof. Work in sections, keep residents off the fresh membrane, and agree a route to water tanks before you start.",
        "A [quote list](/quote) of YHColorWall-5300, YHRepair-2516 and YHPUseal-2925 gets the whole roof quoted at once. For a slab that cannot dry to 4%, [X-Shield FlexPruf](/x-calibur/x-shield-flexpruf), a cementitious coating that lists roof waterproofing and is applied to a saturated surface-dry substrate at 1.7 kg/m² per coat, normally in 2 coats, is worth asking about. Its sheet does not mention rising moisture.",
      ].join("\n\n"),
    },
  ],
  faq: [
    {
      q: "Can I coat over an old roof without removing the screed?",
      a: "Yes, where the screed is sound, bonded and draining. Cut out hollow patches and make them good. If most of the screed sounds hollow, strip it. The data sheet needs a solid, clean, dry substrate free of old paint and loose material.",
    },
    {
      q: "Can YHColorWall-5300 go over old bitumen felt?",
      a: "Its data sheet does not list bitumen as a substrate. It lists concrete, stucco, unit masonry, steel and compatible cementitious substrates. Strip the felt, or get Oriental Yuhong's approval in writing first.",
    },
    {
      q: "How many 20 kg pails do I need for a roof?",
      a: "Area in m² times 3 kg/m², divided by 20. A 234 m² roof with its upstands takes 702 kg, so 36 pails before waste. The figure is theoretical; add your own wastage allowance.",
    },
    {
      q: "Will the coating stop water standing on the roof?",
      a: "No. It is \"not suitable for permanent water immersion\", so standing water must be dealt with first: clear the outlets and correct the falls. A coating protects a roof that drains. It does not make a flat roof drain.",
    },
    {
      q: "Is a white roof cooler than a coloured one?",
      a: "In a Dar es Salaam study on model classrooms, white paint on iron sheet roofs did about twice as well as blue. The YHColorWall-5300 sheet prints 82% solar reflectance and SRI 103 without naming the colour tested, so do not assume them for coloured finishes.",
    },
  ],
  sources: [
    {
      label:
        "Kilukibi and Mzava, An Inspection-Based Model for Estimating the Condition of Reinforced Concrete Roof Slabs, East African Journal of Engineering 9(2), 17 November 2026",
      url: "https://journals.eanso.org/index.php/eaje/article/view/6312",
    },
    {
      label:
        "Proctor, Should we paint all classroom roofs white to improve learning in Tanzania?, EdTech Hub working paper, May 2022",
      url: "https://docs.edtechhub.org/lib/Z8B66R9X",
    },
    {
      label: "YHColorWall-5300 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcolorwall-5300",
    },
    {
      label: "YHRepair-2516 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhrepair-2516",
    },
    {
      label: "YHPUseal-2925 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhpuseal-2925",
    },
    {
      label: "X-Shield FlexPruf technical data sheet, X-Calibur",
      url: "/x-calibur/x-shield-flexpruf",
    },
  ],
};
