import type { PostContent } from "@/lib/blog";

/**
 * Cementitious, liquid or acrylic membrane: which one.
 * Primary query: cementitious vs liquid membrane waterproofing.
 *
 * Uses come only from whereToUse in src/content/{mapei,oriental-yuhong,
 * x-calibur}/*.json. Figures come from those extracts and the coverage
 * models. Limits not carried in the extracts ("UV stable" and "potable
 * water" on X-Shield FlexPruf, immersion on YHColorWall-5300, the screed on
 * Planiseal 88, soluble salts on Mapelastic Foundation) were read from the
 * PDFs in public/tds/. "Acrylic": the only stocked sheet using the word is
 * Mapelastic Easy; other products are described in their maker's words.
 * YHColorWall-5300 roof rate: source line only (see the coverage post).
 */
export const content: PostContent = {
  answer:
    "Choose by what happens to the surface afterwards. Cementitious coatings suit concrete and masonry under pressure from ground water or in tanks, and need a screed on floors. Flexible cementitious membranes, including the acrylic modified kind, go under tiles and on foundations. Ready-to-use liquid membranes go under tiles with nothing to mix, and a separate UV-resistant kind is made for roofs. No single family suits every part of a building.",
  sections: [
    {
      h2: "What are cementitious, liquid and acrylic membranes?",
      body: [
        "They are three groups of coating that differ in what they are made from and how they are mixed. A cementitious coating is a powder based on cement. It can be rigid. [Planiseal 88](/mapei/waterproofing/planiseal-88) is the clear example: its sheet says it can only be used for rigid waterproofing.",
        "A flexible cementitious membrane comes as a two-component kit that is mixed on site and stays flexible once cured. This is where the word acrylic belongs. Of the sheets we hold, only one uses it: Mapelastic Easy, a two-component acrylic modified cementitious coating. [Mapelastic Foundation](/mapei/waterproofing/mapelastic-foundation) is a flexible cementitious mortar, and X-Shield FlexPruf calls itself a flexible elasto-cement coating.",
        "A liquid membrane comes ready to use, with nothing to mix. [Mapelastic AquaDefense](/mapei/waterproofing/mapelastic-aquadefense) and YHCoat-2060 are made for tiling over. YHColorWall-5300 is also one-component, but it is built for exterior walls and roofs.",
      ].join("\n\n"),
    },
    {
      h2: "How the three families compare, from the data sheets",
      body: [
        "The largest difference is whether the coating can stay exposed, and most cannot. Read the table's last two columns together: the thin liquid membrane that takes the least material per square metre is also the one that must always be covered.",
        "Consumption is shown at the build each sheet requires, so the figures compare like with like. A low rate per square metre says little until you know the coating is allowed on that surface, so settle the use first and the quantity second. Expect the two-component membranes to use more than three times the weight of Mapelastic AquaDefense on the same floor. [Our coverage guide](/blog/waterproofing-coverage-per-square-metre) turns these rates into packs. Each product page has the data sheet and a calculator.",
      ].join("\n\n"),
      table: {
        caption:
          "The three families compared, using only what the stocked data sheets state.",
        head: [
          "Family",
          "What it is",
          "Used on, per the sheets",
          "Exposed or covered",
          "Typical consumption",
        ],
        rows: [
          [
            "Cementitious coating: Planiseal 88, YHCoat-1000",
            "Osmotic mortar (Planiseal 88); polymer-modified slurry (YHCoat-1000)",
            "Tanks, foundation and cellar walls, pools (Planiseal 88); bathrooms, balconies, flat roofs, underground foundations (YHCoat-1000)",
            "Covered on floors: screed. Neither takes traffic",
            "3 to 4.5 kg/m² at 2 to 3 mm; 2 or 3 kg/m²",
          ],
          [
            "Flexible or acrylic modified cementitious: Mapelastic Easy, Mapelastic Foundation, X-Shield FlexPruf",
            "Two components, flexible",
            "Wet areas, balconies, terraces (Easy); foundations, lift pits, pools (Foundation); wet areas, roofs, pools, tanks (FlexPruf)",
            "Easy under tiles. FlexPruf printed UV stable. Foundation not stated",
            "3.8 and 3.3 kg/m² at 2 mm; 3.4 kg/m² in 2 coats",
          ],
          [
            "Ready-to-use liquid: Mapelastic AquaDefense, YHCoat-2060, YHColorWall-5300",
            "One component, no mixing",
            "Bathrooms, balconies, terraces (AquaDefense); kitchens, bathrooms, pools (2060); exterior walls, roofs (5300)",
            "AquaDefense always covered. 2060 keyed for tile. 5300 UV resistant",
            '1 kg/m²; about 2.0 kg/m²; "for roof: 3kg/ m²"',
          ],
        ],
        source:
          "Mapei, Oriental Yuhong and X-Calibur technical data sheets; kg/m² at the stated thickness calculated from the printed rate per mm",
      },
    },
    {
      h2: "Which membrane for which part of the building?",
      body: "Start with the part of the building, because that fixes the exposure and the direction of the water. The list below gives only uses the stocked sheets state, so a product missing from a line may still be possible but its sheet does not name that use. Each use is the maker's wording, shortened. Where a job does not fit any line, such as a concrete box gutter, which none of these sheets names, ask for the maker's view before you buy. Two checks apply everywhere: the coating has to suit what will go on top of it, and the substrate has to meet the condition its sheet sets, which matters on a slab still damp after the rains.",
      list: [
        "**Bathroom.** Mapelastic AquaDefense, Mapelastic Easy, YHCoat-2060 and YHCoat-1000 all name bathrooms. X-Shield FlexPruf names wet areas.",
        "**Balcony or terrace under tiles.** Mapelastic AquaDefense and Mapelastic Easy name both. YHCoat-1000 names balconies, with a screed over it.",
        "**Exposed roof.** [YHColorWall-5300](/oriental-yuhong/yhcolorwall-5300) names roof surfaces and is UV resistant. [X-Shield FlexPruf](/x-calibur/x-shield-flexpruf) names roof waterproofing and is printed UV stable.",
        "**Basement or foundation.** Mapelastic Foundation and Planiseal 88 name foundation walls and underground structures. YHCoat-1000 names maintaining the waterproof layer of underground foundations. Lamposilex stops running leaks in basements.",
        "**Water tank.** Planiseal 88, Mapecoat DW 25 and X-Shield FlexPruf name tanks, and each sheet makes a drinking water statement.",
      ],
    },
    {
      h2: "Can a membrane be left exposed to the sun?",
      body: [
        "Only a few can. Mapelastic AquaDefense must always be covered with ceramic, mosaic or stone. YHCoat-1000 does not provide a traffickable finish and calls for a levelling screed. Planiseal 88 must not be exposed to traffic, and on floors its sheet asks for a 4 to 5 cm cementitious screed.",
        "The two stocked options that do claim sun resistance are YHColorWall-5300 and X-Shield FlexPruf.",
        "Exposed does not mean walkable or immersed, though. The YHColorWall-5300 sheet says it is not suitable for permanent water immersion, and is not recommended for pedestrian traffic. So a flat slab where water stands long after each storm in the masika rains needs its falls looked at first. A roof terrace people walk on belongs in the tiled group above.",
      ].join("\n\n"),
    },
    {
      h2: "Which membrane handles water pressure and cracks?",
      body: [
        "Mapelastic Foundation prints figures for water pressure from both sides: no penetration at 5 bar for 3 days from the positive side, and none at 1.5 bar from the negative side. The negative figure matters when ground water pushes in and you can only reach the inside of a wall. Once cured it resists soluble salts in sea water or the ground, which matters on coastal plots. Planiseal 88 prints negative pressure up to 1 atmosphere.",
        "Planiseal 88 is rigid and must not go on surfaces subject to dynamic stresses. Mapelastic Easy prints crack-bridging of at least 0.75 mm at 23°C, Mapelastic Foundation above 1.25 mm, and Mapelastic AquaDefense 3.2 mm at +23°C. That last sheet also says not to use the product to cover cracks, so read the figure as what the film tolerates, not as a repair method.",
      ].join("\n\n"),
    },
    {
      h2: "Where each type is the wrong choice",
      body: "Each type is the wrong choice wherever its own sheet rules it out, and those limits are easy to check before you buy. Damp is the common trap on Tanzanian sites, where humid coastal air and a slab that has not dried out after the rains work against the coating. The sheets do not treat damp alike. YHCoat-1000 says it can go straight on wet surfaces, while others set a firm limit, so a moisture check on the slab belongs before the order, not after it. These are the printed limits most likely to matter on site. Read the full list on the product page before you commit, because the sheets print more than this list can hold.",
      list: [
        "**Planiseal 88:** not for surfaces subject to dynamic stresses, or a substrate with standing water on it.",
        "**Mapelastic AquaDefense:** not on cementitious substrates above 3% residual humidity or with recurring rising damp.",
        "**Mapelastic Foundation:** not on substrates saturated with water, and no more than 2 mm per coat.",
        "**YHColorWall-5300:** substrate moisture no more than 4%.",
        "**Mapecoat DW 25:** not on flexible substrates, hot surfaces or surfaces in direct sunlight.",
        "**Antipluviol:** a water repellent, not a membrane. Not for terraces, flat roofs, or structures under water pressure.",
      ],
    },
  ],
  faq: [
    {
      q: "Is cementitious waterproofing crack-resistant?",
      a: "It depends on the type. Planiseal 88 is rigid and not for surfaces under dynamic stress. Flexible cementitious membranes print crack-bridging figures: at least 0.75 mm for Mapelastic Easy and above 1.25 mm for Mapelastic Foundation.",
    },
    {
      q: "Which waterproofing is best for terraces?",
      a: "Under tiles, Mapelastic AquaDefense and Mapelastic Easy both name terraces on their sheets. Antipluviol does not suit them: its sheet excludes terraces and flat roofs. For a terrace left without tiles, ask us first, because the sheets above assume a covering.",
    },
    {
      q: "Which membranes can be left exposed to the sun?",
      a: "Of the stocked range, YHColorWall-5300 is UV resistant and made for roofs and exterior walls, and X-Shield FlexPruf is printed UV stable and names roof waterproofing. Mapelastic AquaDefense must always be covered. Planiseal 88 and YHCoat-1000 need a screed on floors.",
    },
    {
      q: "Which type is safe for a drinking water tank?",
      a: "Planiseal 88 is certified to AS/NZS 4020:2018. Mapecoat DW 25 was tested under an Italian decree for water for human consumption. X-Shield FlexPruf lists BS 6920. These are foreign approvals; we have not confirmed whether Tanzania requires anything further.",
    },
  ],
  sources: [
    {
      label: "Planiseal 88 technical data sheet, Mapei",
      url: "/mapei/waterproofing/planiseal-88",
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
