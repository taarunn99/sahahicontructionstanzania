import type { PostContent } from "@/lib/blog";

/**
 * How much waterproofing per square metre.
 * Primary query: waterproofing coverage per square metre.
 *
 * Every rate is from the makers' data sheets as extracted in
 * src/content/{mapei,oriental-yuhong,x-calibur}/*.json and modelled in
 * src/config/{mapei-coverage,oriental-yuhong,x-calibur}.ts. Packs are from
 * src/config/catalogue.ts, except YHCoat-2060, which uses the data sheet's
 * 25 kg pail by instruction. m² per pack is pack / (kg/m²), rounded down.
 * YHColorWall-5300: the roof rate does not reconcile with the per-coat rate
 * on the same sheet, so only the source line is quoted and nothing computed.
 * Mapelastic Smart is left out: no product data sheet on file.
 */
export const content: PostContent = {
  answer:
    "Most of the waterproofing we stock takes 1 to 4.5 kg per square metre, and the figure depends on the product and its thickness. A thin liquid membrane uses about 1 kg in two coats; a two-component cementitious membrane at 2 mm uses 3.3 to 3.8 kg. Measure the floor plus the wall upturn, multiply by the data sheet rate, then divide by the pack.",
  sections: [
    {
      h2: "How much waterproofing do you need per square metre?",
      body: [
        "It depends on the product and the film it has to build. Data sheets print consumption three ways: a total for the finished job, a rate per millimetre, or a rate per coat.",
        "That catches people out at the counter. Put 1.9 on one sheet beside 2 on another and the products look alike. But the 1.9 is per millimetre at a minimum of 2 mm, so it means 3.8 kg/m², while the 2 is already a finished total.",
        "Take [Mapelastic Easy](/mapei/waterproofing/mapelastic-easy) at 2 mm: 1.9 x 2 = 3.8 kg/m². A 24 kg kit then covers 24 / 3.8 = 6.3 m², which we round down to 6. To size an order, multiply kg/m² by the area and divide by the pack, rounding up to whole packs.",
      ].join("\n\n"),
    },
    {
      h2: "Coverage by product, from the data sheets",
      body: [
        "The table lists each stocked waterproofing product with a consumption figure on a data sheet we hold. The last column is the area one pack covers on a flat surface, rounded down to a whole square metre. Each linked page carries the data sheet and a coverage calculator.",
        "Three rows need reading with care. Antipluviol is a water repellent, and its sheet asks for coats wet-on-wet until the surface is saturated, so treat 125 m² as a ceiling. Lamposilex fills cavities, so area does not apply. The YHCoat-2060 row uses the 25 kg pail printed on its data sheet, where the sheet also prints 12.5 m², so confirm the pail size when you order.",
        "Mapelastic Smart is left out because we hold no product data sheet for it.",
      ].join("\n\n"),
      table: {
        caption:
          "Consumption as printed, pack, and the area one pack covers, for stocked waterproofing products.",
        head: ["Product", "Type", "Consumption as printed", "Pack", "m² per pack"],
        rows: [
          [
            "[Mapelastic AquaDefense](/mapei/waterproofing/mapelastic-aquadefense)",
            "Liquid membrane",
            "1 kg/m² for 2 coats",
            "15 kg",
            "15",
          ],
          [
            "[Mapelastic Easy](/mapei/waterproofing/mapelastic-easy)",
            "Cementitious membrane",
            "Approx. 1.9 kg/m² per mm; at least 2 mm",
            "24 kg kit",
            "6 at 2 mm",
          ],
          [
            "[Mapelastic Foundation](/mapei/waterproofing/mapelastic-foundation)",
            "Cementitious membrane",
            "Approx. 1.65 kg/m² per mm by roller; at least 2 mm",
            "32 kg kit",
            "9 at 2 mm",
          ],
          [
            "[Planiseal 88](/mapei/waterproofing/planiseal-88)",
            "Cementitious coating",
            "Approx. 1.5 kg/m² per mm; approx. 2 to 3 mm",
            "25 kg",
            "8 at 2 mm, 5 at 3 mm",
          ],
          [
            "[YHCoat-1000](/oriental-yuhong/yhcoat-1000)",
            "Cementitious slurry",
            "2 kg/m² in 2 coats, wet areas; 3 kg/m² in 2 to 3 coats, elsewhere",
            "26 kg set",
            "13 wet areas, 8 elsewhere",
          ],
          [
            "[YHCoat-2060](/oriental-yuhong/yhcoat-2060)",
            "Wet-room coating",
            "About 2.0 kg/m² for 1 mm dry film in 2 coats",
            "25 kg pail",
            "12",
          ],
          [
            "[YHColorWall-5300](/oriental-yuhong/yhcolorwall-5300)",
            "Roof and wall coating",
            '"for roof: 3kg/ m²"',
            "20 kg pail",
            "Not computed",
          ],
          [
            "[X-Shield FlexPruf](/x-calibur/x-shield-flexpruf)",
            "Waterproof coating",
            "1 L (1.7 kg) per m² per coat; normally 2 coats",
            "22 kg kit",
            "6 in 2 coats",
          ],
          [
            "[Mapecoat DW 25](/mapei/resin-flooring/mapecoat-dw-25)",
            "Drinking water coating",
            "400 to 600 g/m² in 2 coats",
            "15 kg unit",
            "25 to 37",
          ],
          [
            "[Antipluviol](/mapei/waterproofing/antipluviol)",
            "Water repellent",
            "0.2 to 1 L/m²",
            "25 L",
            "25 to 125",
          ],
          [
            "[Lamposilex](/mapei/waterproofing/lamposilex)",
            "Water plug",
            "1.8 kg fills a one-dm³ cavity",
            "5 kg",
            "By volume: 2 litres of cavity",
          ],
        ],
        source:
          "consumption from each maker's data sheet; packs from Sahihi's stock list, except YHCoat-2060 (data sheet); m² per pack calculated and rounded down",
      },
      note: "We give no pack figure for YHColorWall-5300. Its sheet's roof rate and its per-coat rate do not reconcile, so ask us before ordering roof quantities.",
    },
    {
      h2: "How to measure the area, including the wall upturn",
      body: [
        "Measure every surface the membrane will touch, not just the floor plan. On a floor that means length x width, plus the perimeter x the height the membrane runs up the wall.",
        "The height of the upturn is a design decision, so take it from your drawings or your engineer. Tanks and pools need the floor, all the walls and any soffit that gets coated.",
        "Rough surfaces use more than the table shows. The Mapelastic Easy sheet says its figures are for a seamless film on a flat surface and are higher on uneven substrates. The Mapelastic Foundation sheet puts a number on it for spray: 1.75 kg/m² per mm on flat surfaces and 2.1 on rough ones, which is 20% more. An old roof slab worn by sun and masika rain is rarely flat.",
      ].join("\n\n"),
    },
    {
      h2: "Worked example: a 2 m by 1.5 m bathroom",
      body: [
        "A bathroom this size has 4.4 m² to coat, which takes about 17 kg of a 2 mm cementitious membrane or about 4.4 kg of a liquid membrane rated at 1 kg/m². The 200 mm upturn and the 10% waste below are assumptions for this sum, not data sheet figures. The door opening is ignored, which errs slightly on the safe side.",
        "One 24 kg kit is enough, with material left over, and one 15 kg bucket is more than enough. A part kit has to be weighed at the printed 3 : 1 ratio of the two components and applied within 60 minutes of mixing, so mix only what the team can get on the walls and floor in that time.",
      ].join("\n\n"),
      steps: [
        "Floor: 2 x 1.5 = 3 m².",
        "Upturn: perimeter 2 x (2 + 1.5) = 7 m, and 7 x 0.2 = 1.4 m².",
        "Total area: 3 + 1.4 = 4.4 m².",
        "Mapelastic Easy at 2 mm: 4.4 x 3.8 = 16.72 kg, or 18.4 kg with 10% waste. One 24 kg kit.",
        "Mapelastic AquaDefense: 4.4 x 1 = 4.4 kg, or 4.84 kg with 10% waste. One 15 kg bucket.",
      ],
    },
    {
      h2: "Why stretching a kit over more area is not a saving",
      body: [
        "Spreading a pack further only makes the film thinner than the sheet requires. A 24 kg kit of Mapelastic Easy spread over 10 m² gives 2.4 kg/m², and 2.4 / 1.9 is about 1.3 mm, well under the 2 mm minimum. The sheet states its final performance values at 2.0 mm, so a thinner film has no printed figure behind it.",
        "One heavy pass is no shortcut either. Mapelastic Foundation must go on in at least two coats, with no more than 2 mm per coat. Mapelastic AquaDefense asks for two thin coats of approx. 0.4 mm each.",
        "Some jobs need more. YHCoat-2060 prints a third coat at 1.0 kg/m² where water ingress is high, which takes it to about 3 kg/m², so the 25 kg pail covers 8 m², not 12.",
      ].join("\n\n"),
    },
    {
      h2: "What else goes on the waterproofing order",
      body: [
        "Add tape for the corners, mesh where the membrane needs reinforcing, and a primer if the substrate is damp.",
        "[Mapeband Easy](/mapei/waterproofing/mapeband-easy) is for corners between walls and between walls and floors. It comes in 30 m rolls, and joints between pieces must overlap by at least 5 cm, so the example bathroom needs its 7 m of perimeter plus those overlaps and any vertical corners. Mapenet 150 also overlaps by at least 5 cm.",
        "On a damp substrate, [Triblock P](/mapei/primers-levelling/triblock-p) prints 250 to 300 g/m² per coat on non-absorbent surfaces and 400 to 500 g/m² on absorbent ones, in two coats. If the choice of membrane is still open, [our comparison of cementitious, liquid and acrylic membranes](/blog/cementitious-vs-liquid-membrane-waterproofing) sets out where each one is used.",
      ].join("\n\n"),
    },
  ],
  faq: [
    {
      q: "How many kilograms of waterproofing do I need for a bathroom?",
      a: "A 2 m by 1.5 m bathroom with a 200 mm upturn (our assumption) has 4.4 m² to coat. That is about 17 kg of Mapelastic Easy at 2 mm, or 4.4 kg of Mapelastic AquaDefense, before any waste allowance.",
    },
    {
      q: "How many coats of waterproofing are needed?",
      a: "Most sheets we hold ask for two. Mapelastic AquaDefense, Mapelastic Foundation, Mapelastic Easy and X-Shield FlexPruf all print two as the normal or minimum. Planiseal 88 by brush takes 2 to 3. YHCoat-2060 adds a third where water ingress is high.",
    },
    {
      q: "Does a rough surface use more material?",
      a: "Yes. The Mapelastic Easy sheet says its figures rise on uneven substrates. Mapelastic Foundation by spray goes from 1.75 to 2.1 kg/m² per mm on rough surfaces. Only that sheet prints a number, so allow for it elsewhere as your own assumption.",
    },
    {
      q: "How many square metres does one kit cover?",
      a: "At 2 mm, a 24 kg kit of Mapelastic Easy covers 6 m² and a 32 kg kit of Mapelastic Foundation 9 m². A 22 kg kit of X-Shield FlexPruf covers 6 m² in two coats. A 26 kg set of YHCoat-1000 covers 13 m² in wet areas.",
    },
  ],
  sources: [
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
      label: "Planiseal 88 technical data sheet, Mapei",
      url: "/mapei/waterproofing/planiseal-88",
    },
    {
      label: "Mapecoat DW 25 technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapecoat-dw-25",
    },
    {
      label: "Antipluviol technical data sheet, Mapei",
      url: "/mapei/waterproofing/antipluviol",
    },
    {
      label: "Lamposilex technical data sheet, Mapei",
      url: "/mapei/waterproofing/lamposilex",
    },
    {
      label: "Mapeband Easy technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapeband-easy",
    },
    {
      label: "Mapenet 150 technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapenet-150",
    },
    {
      label: "Triblock P technical data sheet, Mapei",
      url: "/mapei/primers-levelling/triblock-p",
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
      label: "YHColorWall-5300 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcolorwall-5300",
    },
    {
      label: "X-Shield FlexPruf technical data sheet, X-Calibur",
      url: "/x-calibur/x-shield-flexpruf",
    },
  ],
};
