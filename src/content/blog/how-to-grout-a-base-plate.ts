import type { PostContent } from "@/lib/blog";

export const content: PostContent = {
  answer:
    "To grout a base plate, build a watertight form with a way for air to escape, soak the roughened concrete and drain it until no water stands, mix a shrinkage-compensated cement grout with only the printed water, pour it continuously from one side until the gap is full, then cure the exposed shoulders wet. No vibrator is needed. The designer sets the gap and when the plate can take load.",
  sections: [
    {
      h2: "What goes under a base plate: grout, mortar or concrete?",
      body: "A base plate takes grout, because the material has to travel under the steel on its own. The American Concrete Institute defines grout as cementitious material and water, with fine aggregate, proportioned to pour without segregation. Grout fills spaces; mortar bonds units together. This is structural grout, a different product from the grout between tiles.\n\nSite-mixed sand and cement struggles here. Mixed stiff, it will not flow under the plate and leaves voids. Mixed wet enough to flow, it carries extra water and shrinks as it dries, and the gap you were filling opens again at the underside of the steel.\n\n\"Non-shrink\" is the trade name for what the data sheet calls shrinkage compensated. The sheet for [Mapegrout ME05](/mapei/concrete-repair/mapegrout-me05) prints drying shrinkage below 500 microstrain and no flow or expansion test value.",
    },
    {
      h2: "Which non-shrink grouts are stocked for base plates?",
      body: "We stock one pourable grout for base plates: Mapegrout ME05, whose sheet names the grouting of machine and turbine baseplates, bridge bearings and crane rails. It is class R4 to EN 1504-3. [Mapegrout T60 ME](/mapei/concrete-repair/mapegrout-t60) sits beside it in the table because it shares the R4 class, but it is a thixotropic trowel mortar. Its sheet says not to pour it into forms, and it will not run under a plate.\n\nTwo limits matter. The range starts at 15 mm, so a thinner gap is outside the sheet, and more water is not the answer. The sheet also rules ME05 out for precision anchoring and points to other grouts in Mapei's range that are not on our list, so ask us about that kind of machine bed.\n\nHolding-down bolts drilled into existing concrete are a separate job: see [Mapefix EP 50](/mapei/concrete-repair/mapefix-ep-50).",
      table: {
        caption: "Stocked cement-based products for base plate work, as printed",
        head: ["", "Mapegrout ME05", "Mapegrout T60 ME"],
        rows: [
          ["Placed by", "Pouring or pumping into forms", "Trowel or spray, not into forms"],
          ["Thickness", "15 to 220 mm", "10 to 60 mm per layer"],
          ["Water per 25 kg bag", "3.1 to 3.3 litres", "3.75 to 4.25 litres by trowel"],
          ["Yield per 25 kg bag", "12.7 litres", "12.6 litres"],
          ["Compressive strength", "Over 25 MPa at 1 day, 45 at 7 days, 65 at 28 days", "Over 20 MPa at 24 hours, 50 at 7 days, 60 at 28 days"],
          ["Pot life", "About 1 hour at +20°C", "About 1 hour at +20°C"],
          ["Application temperature", "+5°C to +40°C", "+5°C to +50°C"],
        ],
        source: "Mapei technical data sheets. The ME05 water sentence does not say per bag; 12.4 to 13.2 kg per 100 kg of powder equals 3.1 to 3.3 litres per 25 kg.",
      },
    },
    {
      h2: "How do you grout a base plate, step by step?",
      body: "Have the plate level and fixed at its final height before anything else, since the grout fills the space and will not correct it. Then follow the sequence below, which comes from the ME05 data sheet. The sheet covers the essentials: a watertight form, a saturated substrate, measured water and a continuous pour into the lowest part with venting. It gives no head height and does not specify pouring from one side; those two points are ordinary site practice, which your engineer may change. Have every bag, the water and the labour at the plate before the first one goes in, because stopping halfway is how voids get made and the next mix may not get past what has already stiffened.",
      steps: [
        "**Prepare the concrete.** Remove degraded or loose concrete until solid. Roughen smooth concrete, because the sheet rules out smooth surfaces. Clear dirt, laitance, grease and oil by sweep blasting or another mechanical method.",
        "**Build the form and head.** Make the form watertight, water test it if you can, and treat it with shutter-release oil. On the pouring side, fit a raised hopper to give the grout a head. Provide venting on the far side so air can leave.",
        "**Soak.** Pre-soak the concrete by filling the form with clean water. Drain it, then take out what remains with sponges or oil-free compressed air, until the surface is saturated with no free water. Seal the drain outlets.",
        "**Mix.** Pour 3.1 to 3.3 litres of clean water per bag into a forced-action mixer and add the powder slowly. Mix 2 minutes, scrape down, wait 2 minutes, remix 1 minute. For small quantities use a slow drill at 300 rpm. Add no cement, additives or extra water.",
        "**Pour from one side.** Pour continuously into the lowest part of the form, staying on one side so the grout pushes air ahead of it to the vent. Do not vibrate. Tamp with steel rods or tap the form to make sure it has filled.",
        "**Cure.** Cover the exposed shoulders at once with wet hessian under polythene. Spray with water within the first 8 to 12 hours of striking the form and repeat for at least 48 hours.",
      ],
      note: "The gap, the bolts and the timing of the load belong to the designer. Damage to columns, beams and slabs, including a cracked column base, needs a structural engineer's assessment before repair. This guide explains the method and does not replace that.",
    },
    {
      h2: "How many bags of grout does a base plate need?",
      body: "Multiply the plan area of the form, not the plate, by the depth of the gap, then divide by 12.7 litres per bag. The example below is six 500 x 500 mm plates on a 40 mm gap, with the form 50 mm clear of the plate all round. Bolts are ignored. Measure the depth at several points first.\n\nThe 10% waste allowance is our assumption for form leakage and what stays in the mixer. One plate alone takes 1.13 bags, so it opens two, and the sheet rules out previously opened bags. Pour plates in one session where you can, inside the pot life. The ME05 page in the [concrete repair range](/mapei/concrete-repair) has the data sheet and a coverage calculator.",
      table: {
        caption: "Worked bag calculation for six base plates",
        head: ["Item", "Sum", "Result"],
        rows: [
          ["Volume per plate", "0.6 x 0.6 x 0.04 m", "0.0144 m³, or 14.4 litres"],
          ["Six plates", "14.4 x 6", "86.4 litres"],
          ["With 10% waste (assumption)", "86.4 x 1.1", "95.0 litres"],
          ["Bags at 12.7 litres", "95.0 / 12.7 = 7.5", "8 bags"],
          ["Mixing water", "8 x 3.1 and 8 x 3.3", "24.8 to 26.4 litres"],
        ],
        source: "Computed from the Mapegrout ME05 technical data sheet, Mapei",
      },
    },
    {
      h2: "What changes when you grout a base plate in hot weather?",
      body: "The sheet's hot-weather list is the working plan on most Tanzanian sites. Keep bags and the mixer out of direct sun, use cool water, and avoid the hottest part of the day. Mix only what the crew can place without a break.\n\nCheck the concrete as well as the air. The ME05 range of +5°C to +40°C applies to the surrounding and substrate temperature, and a foundation that has stood in strong sun can be hotter than the air around it. Put a thermometer on it rather than guessing.\n\nThe sheet warns that open surfaces left uncured can crack from plastic shrinkage, especially in hot or windy weather, and the shoulders are that kind of surface.\n\nIf cubes are being tested, agree the method with the laboratory. The National Ready Mixed Concrete Association notes that expansive grouts can lose substantial compressive strength when the cubes are not confined.",
    },
  ],
  faq: [
    {
      q: "How thick should the grout be under a base plate?",
      a: "The designer sets the gap. Mapegrout ME05 is printed for 15 to 220 mm, so a gap inside that range suits it and a thinner one is outside the data sheet. Ask us before grouting under 15 mm.",
    },
    {
      q: "Can I use sand and cement under a steel column base?",
      a: "It is a poor choice. A stiff mix will not flow under the plate, and a wet one shrinks as it dries, so the plate can lose full contact. Use a poured, shrinkage-compensated grout unless the designer specifies otherwise.",
    },
    {
      q: "When can the column or machine be loaded?",
      a: "The engineer decides. The ME05 sheet gives no loading time. It prints compressive strength of over 25 MPa at 1 day, 45 MPa at 7 days and 65 MPa at 28 days, which the engineer compares with the design.",
    },
    {
      q: "Is this the same as tile grout?",
      a: "No. Tile grout fills the joints between tiles. Base plate grout is a flowing, structural micro-concrete that carries load under steel, poured from 15 mm thick upwards.",
    },
  ],
  sources: [
    { label: "Mapegrout ME05 technical data sheet, Mapei", url: "/mapei/concrete-repair/mapegrout-me05" },
    { label: "Mapegrout T60 ME technical data sheet, Mapei", url: "/mapei/concrete-repair/mapegrout-t60" },
    { label: "Mapefix EP 50 technical data sheet, Mapei", url: "/mapei/concrete-repair/mapefix-ep-50" },
    {
      label: "CIP 22, Grout, National Ready Mixed Concrete Association",
      url: "https://www.nrmca.org/wp-content/uploads/2021/01/22pr.pdf",
    },
  ],
};
