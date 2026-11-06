import type { PostContent } from "@/lib/blog";

/**
 * Every figure below is in src/content/mapei/<slug>.json (mapeset,
 * kerabond-t, adesilex-p7, keraflex-maxi-s1) or in
 * src/config/mapei-coverage.ts. The meaning of the class letters is the
 * classification sentence each data sheet prints under its title.
 */
export const content: PostContent = {
  answer:
    "Keraflex Maxi S1 is the class C2TES1 adhesive that Mapei describes as especially suitable for large-size porcelain tiles and natural stone, in beds up to 15 mm. Adesilex P7 is class C2T, for ceramic and porcelain tiles on walls and floors. Kerabond T (C1T) and Mapeset (C1) fix ceramic tiles and mosaics on render and screed, and their data sheets rule out several jobs the two C2 adhesives accept.",
  sections: [
    {
      h2: "Which Mapei tile adhesive should I use?",
      body: [
        "Pick by the class printed on the bag, then check the limits on the data sheet. The four cementitious adhesives Sahihi stocks form a ladder, and each step up adds a letter.",
        "[Mapeset](/mapei/tile-adhesives-grouts/mapeset) is class C1, a cement based adhesive for absorbent ceramic tiles and mosaics. [Kerabond T](/mapei/tile-adhesives-grouts/kerabond-t) is C1T: the same class with no vertical slip, so a wall tile stays where it is pressed. [Adesilex P7](/mapei/tile-adhesives-grouts/adesilex-p7) is C2T, which Mapei calls high-performance, and it is the first of the four whose description names porcelain. [Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1) is C2TES1. It adds extended open time and deformability, and it is the one Mapei points at large-size porcelain and natural stone.",
        "The table puts the four data sheets side by side. Each product page carries the full data sheet as a PDF and a coverage calculator that turns an area into bags.",
      ].join("\n\n"),
      table: {
        caption:
          "Mapeset, Kerabond T, Adesilex P7 and Keraflex Maxi S1 side by side",
        head: [
          "Data sheet",
          "Mapeset",
          "Kerabond T",
          "Adesilex P7",
          "Keraflex Maxi S1",
        ],
        rows: [
          ["Class, EN 12004", "**C1**", "**C1T**", "**C2T**", "**C2TES1**"],
          [
            "What the letters mean",
            "Normal cementitious adhesive",
            "Normal, slip-resistant cementitious adhesive",
            "Improved, slip-resistant cementitious adhesive",
            "Improved, non-slip cementitious adhesive, extended open time, deformable",
          ],
          [
            "Consumption as printed",
            "approx. 2 kg/m² (trowel No. 4), 2.5-3 kg/m² (No. 5), approx. 5 kg/m² (No. 6)",
            "2-5 kg/m²",
            "2 kg/m² (trowel n. 4), 2.5-3 kg/m² (n. 5), 4 kg/m² (n. 6)",
            "1.2 kg/m² per mm of thickness",
          ],
          [
            "Pack",
            "25 kg bag",
            "25 kg bag",
            "25 kg bag",
            "20 kg and 25 kg bags",
          ],
          [
            "What Mapei says it is for",
            "Ceramic tiles and mosaics, single-fired and double-fired tiles, on floors, walls and ceilings",
            "Ceramic tiles and mosaics of all types on floors and walls, indoors and outdoors",
            "Ceramic tiles, porcelain and mosaics on floors, walls and ceilings. Irregular substrates to 15 mm",
            "All types and sizes of ceramic tile, in beds up to 15 mm. Stable stone. Swimming pools and tanks",
          ],
          [
            "What it is not for",
            "Large format tiles. Glass mosaics. Wood, metal, rubber, PVC, linoleum",
            "Beds more than 5 mm thick. Non-absorbent tiles on non-absorbent substrates. Gypsum board walls",
            "Precast and poured concrete walls. Extreme flexing or vibration. Metal",
            "Concrete not sufficiently cured. Wood, metal, rubber, PVC, linoleum. Stone subject to staining",
          ],
        ],
        source: "Mapei technical data sheets",
      },
    },
    {
      h2: "What do C1, C1T, C2T and C2TES1 mean?",
      body: [
        "Each character stands for a word in the classification sentence Mapei prints near the top of the data sheet, and the class is that sentence abbreviated under EN 12004.",
        "C is cementitious: a powder mixed with water on site. The number is the performance level. Mapei writes 1 as normal and 2 as improved, and its descriptions follow the same split, with Adesilex P7 and Keraflex Maxi S1 both called high-performance. T is slip-resistant, worded as no vertical slip in the descriptions. E is extended open time. S1 is deformable, which the Keraflex Maxi S1 sheet gives as more than 2.5 mm and less than 5 mm.",
        "So the ladder reads like this. Mapeset is a normal cementitious adhesive. Kerabond T is the same with slip resistance. Adesilex P7 is improved and slip-resistant. Keraflex Maxi S1 is improved, non-slip, deformable and has extended open time.",
        "The sheets give the words, not the test thresholds that separate normal from improved, so those are not quoted here. One more class appears on the Kerabond T sheet: C2ES2. It applies only when the powder is mixed with a separate Mapei product instead of water, so it does not describe the bag on its own. Mixed with water, Kerabond T is C1T.",
      ].join("\n\n"),
    },
    {
      h2: "Keraflex Maxi S1 or Adesilex P7 for porcelain tiles?",
      body: [
        "Both are class C2 with no vertical slip and both sheets name porcelain, so the choice turns on tile size, substrate and working time.",
        "Adesilex P7 is the plainer C2 adhesive: ceramic, porcelain and mosaic on render, cement screed and interior aerated concrete block walls, and tile on tile over existing flooring with tiles up to 900 cm². Its sheet excludes precast and poured concrete walls, and walls or floors subject to extreme flexing or vibration.",
        "Keraflex Maxi S1 takes those harder jobs. Its sheet lists precast concrete walls and concrete substrates, floors subjected to intense traffic, swimming pools and tanks, stable natural stone, and all types and sizes of ceramic tile. It also carries the E and the S1. Open time is more than 30 minutes against 20 minutes for Adesilex P7, which counts when one large tile takes a while to butter, place and level. The S1 is what the sheet calls good capacity to absorb deformations in the substrate and tiles.",
        "Adesilex P7 has one edge. Its adjustability time is approx. 60 minutes, against approximately 45 minutes for Keraflex Maxi S1.",
      ].join("\n\n"),
    },
    {
      h2: "When is Kerabond T or Mapeset enough?",
      body: [
        "They are enough for absorbent ceramic tiles and mosaics on a flat cement background, which describes a great many kitchen and bathroom walls.",
        "The Mapeset sheet names traditional render or cement mortar and cured cementitious screeds as typical substrates, with paper-faced or mesh-backed ceramic mosaics and absorbent single-fired or double-fired tiles on top. It says not to use Mapeset for large format tiles or glass mosaics.",
        "Kerabond T adds no vertical slip, which makes wall work easier, and its sheet covers ceramic tiles and mosaics of all types. The limit to remember is absorbency. The sheet rules out non-absorbent tiles, with porcelain as its first example, on other non-absorbent substrates, and it rules out gypsum board walls. So porcelain over an existing tiled floor is a job for Adesilex P7, within its 900 cm² limit, or for Keraflex Maxi S1, whose sheet lists overlaying existing ceramic and marble floors.",
        "Both C1 sheets also exclude wood, metal, rubber, PVC and linoleum. On gypsum or anhydrite, Mapeset, Kerabond T and Adesilex P7 all ask for [Primer G](/mapei/primers-levelling/primer-g) first.",
      ].join("\n\n"),
    },
    {
      h2: "How thick a bed can each adhesive take?",
      body: [
        "Kerabond T stops at 5 mm, while Adesilex P7 and Keraflex Maxi S1 both go to 15 mm. The Mapeset extract states no bed limit.",
        "The Kerabond T sheet says not to use it for tiles that need a layer of adhesive more than 5 mm thick. Adesilex P7 can bond on irregular floor substrates and renders, without levelling, to a thickness of 15 mm. Keraflex Maxi S1 bonds at thickness up to 15 mm on irregular internal and external substrates and render, without skimming the surface first.",
        "This is where jobs go wrong. A screed with hollows gets tiled with a thin-bed adhesive, the fixer packs the low spots with extra material, and the bed ends up thicker than the sheet allows. If the floor is out by more than the adhesive's limit, level it first with a product from the [primers and levelling](/mapei/primers-levelling) line.",
        "Thickness also sets the quantity. Keraflex Maxi S1 is printed at 1.2 kg/m² per mm of thickness, so a deeper bed uses proportionally more. Mapeset and Adesilex P7 are printed by trowel size, and Kerabond T as a single range of 2 to 5 kg/m².",
      ].join("\n\n"),
    },
    {
      h2: "Which adhesive gives the most working time in heat?",
      body: [
        "Keraflex Maxi S1 does. Its open time is more than 30 minutes, against 20 minutes for Kerabond T and Adesilex P7 and more than 20 minutes for Mapeset.",
        "Open time is how long the combed adhesive stays wet enough to grip a tile. The sheets give these figures for normal temperature and humidity, and all four warn that strong sun, drying wind, high temperature or a very absorbent substrate can cut the open time to a few minutes. On a hot afternoon on the coast, or on an exposed terrace, that warning describes the working day.",
        "The advice in the sheets is practical. Keep checking that no skin has formed on the spread adhesive. If it has, comb the adhesive again with the notched trowel, or lift it and spread fresh material if it has started to set. Do not wet a skinned surface: the Keraflex Maxi S1 sheet says water does not dissolve the skin and leaves a film that gets in the way of the bond. On very absorbent substrates in high temperatures, the Kerabond T and Keraflex Maxi S1 sheets advise wetting the substrate before spreading.",
        "All four are applied between +5°C and +40°C.",
      ].join("\n\n"),
    },
  ],
  faq: [
    {
      q: "Which Mapei adhesive is for large porcelain tiles?",
      a: "Keraflex Maxi S1. Mapei describes it as especially suitable for the installation of large-size porcelain tiles and natural stone, and its sheet covers all types and sizes of ceramic tile in beds up to 15 mm. The Mapeset sheet excludes large format tiles.",
    },
    {
      q: "What does C2TES1 mean on a Keraflex Maxi S1 bag?",
      a: "In the words of the data sheet: cementitious (C), improved (2), non-slip (T), extended open time (E), deformable (S1). The class is given under EN 12004 and ISO 13007-1.",
    },
    {
      q: "Can I use Mapeset for large format tiles?",
      a: "No. The Mapeset data sheet lists large format tiles and glass mosaics among the uses to avoid. It is a class C1 adhesive for ceramic mosaics and absorbent single-fired or double-fired tiles on render and screed.",
    },
    {
      q: "How many square metres does a 25 kg bag cover?",
      a: "It depends on the trowel and the bed. Mapeset and Adesilex P7 are printed at 2.5 to 3 kg/m² with a No. 5 trowel, Kerabond T at 2 to 5 kg/m², and Keraflex Maxi S1 at 1.2 kg/m² per mm of thickness. Each product page has a calculator.",
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
  ],
};
