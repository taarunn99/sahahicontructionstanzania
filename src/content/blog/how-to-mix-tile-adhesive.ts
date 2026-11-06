import type { PostContent } from "@/lib/blog";

/**
 * Water, standing time, pot life and open time are in
 * src/content/mapei/<slug>.json and the data sheets at /tds/mapei/ (mapeset,
 * kerabond-t, adesilex-p7, keraflex-maxi-s1). Speed and order of work come
 * from the pages in `sources` (research 09, section 3.6).
 *
 * Computed here, not printed: 7 / 25 x 20 = 5.6 and 7.5 / 25 x 20 = 6 litres
 * for a 20 kg bag of Keraflex Maxi S1 (the sheet's 28-30 parts per 100 give
 * the same result).
 */
export const content: PostContent = {
  answer:
    "Measure the water for the bag first, pour it into a clean bucket, then add the powder while a paddle turns at low speed until the paste is smooth and free of lumps. Let it stand for about 5 minutes, mix again briefly and use it. A 25 kg bag of cementitious tile adhesive takes 5.75 to 7.5 litres, depending on the product. Never add water later.",
  sections: [
    {
      h2: "How much water goes in a 25 kg bag of tile adhesive?",
      body: [
        "Between 5.75 and 7.5 litres across the four Mapei cementitious adhesives Sahihi stocks, and each one has its own range, so read the bag rather than the last job. The figures below are from the data sheets, whose application data is given at +23°C and 50% relative humidity.",
        "[Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1) also comes in a 20 kg bag. Scaling the printed range, 7 / 25 x 20 = 5.6 litres and 7.5 / 25 x 20 = 6 litres.",
        "The sheets are not fully consistent with themselves. The Kerabond T data table gives 20 minutes of open time while its text says 20 to 30. Mapeset's table says over 20 and its text says 20. Adesilex P7 and Keraflex Maxi S1 give over 8 hours of pot life in the table and approximately 8 in the text. We show the table and work to the lower figure.",
        "Each product page has the full data sheet and a coverage calculator.",
      ].join("\n\n"),
      table: {
        caption: "Stocked Mapei cementitious adhesives: mixing data as printed",
        head: ["Adhesive", "Water per 25 kg", "Stand", "Pot life", "Open time"],
        rows: [
          [
            "[Mapeset](/mapei/tile-adhesives-grouts/mapeset) grey",
            "6.0 to 6.5 L",
            "About 5 min",
            "6 to 8 hours",
            "Over 20 min",
          ],
          [
            "Mapeset white",
            "5.75 to 6.25 L",
            "About 5 min",
            "6 to 8 hours",
            "Over 20 min",
          ],
          [
            "[Kerabond T](/mapei/tile-adhesives-grouts/kerabond-t)",
            "About 6.3 to 6.8 L",
            "5 to 10 min",
            "Over 8 hours",
            "20 min",
          ],
          [
            "[Adesilex P7](/mapei/tile-adhesives-grouts/adesilex-p7)",
            "6.5 to 7.0 L",
            "About 5 min",
            "Over 8 hours",
            "20 min",
          ],
          [
            "Keraflex Maxi S1",
            "About 7 to 7.5 L",
            "About 5 min",
            "Over 8 hours",
            "Over 30 min",
          ],
        ],
        source: "Mapei technical data sheets, at +23°C and 50% R.H.",
      },
    },
    {
      h2: "How do you mix tile adhesive, step by step?",
      body: [
        "Water goes in first, powder goes into the water, and the paddle stays slow. The four adhesive sheets ask only for clean water, a smooth lump-free paste, a rest and a second mix. They do not give the order or a speed.",
        "The order comes from sheets that do. Ultraplan Contract and Keracolor FF both pour the powder into water while mixing, and a [mixer maker's guide](https://www.collomix.com/en-us/mixpertise/how-to-mix-tile-mortar) puts the water in first for tile adhesive. Water in first means no dry pocket stuck at the bottom of the bucket, which is where lumps come from.",
        "Measure the water every time. Each printed range is only half a litre wide, which is too narrow to judge by eye from a hose. If you split a bag, split the water in the same proportion.",
      ].join("\n\n"),
      steps: [
        "Measure the water for the bag with a marked container. Use a clean bucket and clean water.",
        "With the paddle turning slowly, pour in the powder a little at a time.",
        "Mix at low speed until the paste is smooth and free of lumps. Scrape the sides and bottom.",
        "Stop and let it stand: about 5 minutes, or 5 to 10 for Kerabond T.",
        "Mix again briefly. Do not add water at this stage. The paste is now ready.",
        "Clean the paddle and bucket with plenty of water while the adhesive is still fresh.",
      ],
    },
    {
      h2: "What speed and paddle should I use for tile adhesive?",
      body: [
        "Use a low speed, because the Keracolor FF sheet gives the reason plainly: \"to avoid air entrapment\". Air whipped into the paste takes up room that should be adhesive. None of the four adhesive sheets gives a speed in rpm.",
        "One Mapei sheet does put a figure on it. A [Mapei Americas mortar sheet](https://www.buildsite.com/pdf/mapei/Ceramic-Tile-Mortar-Product-Data-2248308.pdf), for a product outside Sahihi's range, says low-speed mixing \"at about 300 rpm\" for about 3 minutes, then a 5 minute rest. Treat it as an example of what low speed means, not as an instruction for another adhesive.",
        "The sheets are silent on paddle type. Ultraplan Eco 20 asks only for \"a suitable mixing paddle\". We found no maker's figures comparing paddle shapes for adhesive, so we will not rank them. The mixer maker's guide does give a method: start at the bottom of the bucket at a slower speed, then speed up a little as the mix begins to flow.",
        "Notched trowels and mixing paddles are among the tools Sahihi supplies. [Ask us](/contact) what suits your batch size.",
      ].join("\n\n"),
    },
    {
      h2: "Can I add water when the adhesive starts to stiffen?",
      body: [
        "No. The Keraflex Maxi S1 sheet says \"Do not add water to the mix once it starts to set\", and Kerabond T says \"Never add water to the mix once it has started to set\". Adding water brings back the feel of fresh adhesive, not the strength.",
        "The same applies to adhesive already spread. If a skin forms on the combed ridges, Adesilex P7's sheet explains what water does: \"instead of dissolving the skin, the water will form an anti-adhesive film\". The tile then sits on that film. Re-comb with the notched trowel, or if the adhesive has started to set, scrape it off and spread fresh material.",
        "Stay inside the printed water range on the first mix too. A slack bucket looks easier to spread, but its ridges slump, and the sheet's performance data is given for the printed ratio. If a batch has gone off, the only fix is a new batch, which is why small batches cost less than they seem to on a hot day. Once the mix is right, choose the [right notch for the tile](/blog/trowel-notch-size-for-tile-size).",
      ].join("\n\n"),
    },
    {
      h2: "What does heat do to pot life and open time?",
      body: [
        "Heat shortens both, and the printed minutes are for +23°C and 50% relative humidity, not a hot slab in Dar es Salaam in the dry months. Pot life is how long the paste stays usable in the bucket. Open time is how long it stays wet enough to grip a tile once combed out, and it goes first.",
        "All four sheets warn about open time. Strong sun, drying wind, high temperature or a very absorbent substrate can cut it to a few minutes, whichever adhesive you use. None prints a hot-weather pot life, so we will not guess one. Cement sets faster when warm, so expect less than the table says and watch the bucket.",
        "Practical moves that follow from the sheets and from site work:",
      ].join("\n\n"),
      list: [
        "Mix in the shade and keep bags and the water container out of the sun.",
        "Mix smaller batches, and comb only what you can tile before a skin forms.",
        "Cool a surface heated by the sun with water, as the sheets advise, or shade it.",
        "Wet a very absorbent substrate first: the Kerabond T and Keraflex Maxi S1 sheets say this extends open time.",
        "Stay within the printed application range of +5°C to +40°C.",
      ],
    },
  ],
  faq: [
    {
      q: "Do I put the water or the powder in first?",
      a: "Water first, then powder into the water while mixing. The Mapei grout and levelling sheets we hold work this way, and a mixer maker's guide also puts water first for tile adhesive.",
    },
    {
      q: "What speed should I mix tile adhesive at?",
      a: "Low speed. The adhesive sheets Sahihi stocks give no rpm. A Mapei Americas mortar sheet, for a product outside the range, says about 300 rpm for about 3 minutes, which shows what low speed means.",
    },
    {
      q: "Can you mix tile adhesive by hand?",
      a: "The four adhesive sheets name no tool. They ask for a smooth, lump-free paste, rested and mixed again. A small batch can get there by hand. A full 25 kg bag rarely does, so use a mixer.",
    },
    {
      q: "How long does mixed tile adhesive last?",
      a: "At +23°C, the sheets print 6 to 8 hours for Mapeset and about 8 hours or more for Kerabond T, Adesilex P7 and Keraflex Maxi S1. Expect less in heat. No hot-weather figure is printed.",
    },
  ],
  sources: [
    {
      label: "Mapeset technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/mapeset",
    },
    {
      label: "Kerabond T technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/kerabond-t",
    },
    {
      label: "Adesilex P7 technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/adesilex-p7",
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
      label: "Ultraplan Contract technical data sheet, Mapei",
      url: "/mapei/primers-levelling/ultraplan-contract",
    },
    {
      label: "Ultraplan Eco 20 technical data sheet, Mapei",
      url: "/mapei/primers-levelling/ultraplan-eco-20",
    },
    {
      label: "Mortar data sheet, Mapei Americas, version 25 July 2018",
      url: "https://www.buildsite.com/pdf/mapei/Ceramic-Tile-Mortar-Product-Data-2248308.pdf",
    },
    {
      label: "Mixer maker's guide: How to Mix Tile Adhesive for Exceptional Results",
      url: "https://www.collomix.com/en-us/mixpertise/how-to-mix-tile-mortar",
    },
  ],
};
