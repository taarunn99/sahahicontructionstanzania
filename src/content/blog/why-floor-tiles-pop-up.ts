import type { PostContent } from "@/lib/blog";

/**
 * Why floor tiles pop up, lift or sound hollow.
 * Primary query: why tiles pop up.
 *
 * Coverage, open time, cure and protection figures are from the Mapeset,
 * Adesilex P7, Kerabond T and Keraflex Maxi S1 data sheets
 * (src/content/mapei/*.json, assets/source/tds-text/*.txt). Movement-joint
 * spacing is US practice as stated by Ceramic Tile and Stone Consultants
 * (page read 2026-11-06), converted to metric by us and labelled as not a
 * local rule. C1 and C2 strengths are from the Kenyan draft FDKS 2129-1:2023,
 * read in docs/research/blog/02-tile-adhesives-grouts.md. The Dar es Salaam
 * temperatures are from the climate table recorded in the same report.
 */
export const content: PostContent = {
  answer:
    "Floor tiles pop up, lift or sound hollow when the bond beneath them has failed or never formed. The usual causes are too little adhesive under the tile, adhesive that skinned before the tile went down, a screed still shrinking, no movement joints, water under the floor, or the wrong adhesive for the tile. Lifting one loose tile and reading its back usually separates them.",
  sections: [
    {
      h2: "Is a hollow sound a defect?",
      body: [
        "A hollow sound is not a defect in itself, but it can be a symptom of one. That is the view of Ceramic Tile and Stone Consultants, a US tile consultancy.",
        "What matters is change and pattern. Tap the floor with a coin and mark the hollow tiles in chalk. A patch that sounds different from the floor around it, a tile that was solid last year and is hollow now, and grout cracking along the same line are all reasons to look further. Cracked grout can mean the tile underneath has come loose.",
        "Tapping tells you where to look, not why. The only sure way to find the cause is to lift tiles from different parts of the floor and read the evidence on their backs and on the slab.",
      ].join("\n\n"),
    },
    {
      h2: "Six causes of lifting tiles and how to tell them apart",
      body: [
        "Most failures leave a mark you can read without a laboratory. Start with the first tile that comes up easily, because its back usually answers the question. Look at how much of it carries adhesive, whether the ridges were ever flattened, and which face the adhesive stayed on.",
        "Then check the floor around it, including the wall line behind the skirting. More than one cause can sit under the same floor, so lift a second tile from another part of the room and write down what each one shows before you decide. A few loose tiles are a local repair. Hollow patches across the whole room, or tiles rising in a line, point to a cause that re-fixing alone will not cure.",
      ].join("\n\n"),
      table: {
        caption:
          "Diagnosis of lifting and hollow floor tiles: what you see, the likely cause, what to check and the fix.",
        head: ["What you see", "Likely cause", "What to check", "Fix"],
        rows: [
          [
            "Hollow patches, tile rocks",
            "Too little adhesive contact",
            "Lifted tile: dabs or uncrushed ridges",
            "Re-fix with full coverage",
          ],
          [
            "Clean tile back, ridges left on floor",
            "Adhesive skinned before laying",
            "Ridges dull and unmarked",
            "Remove old adhesive, spread less at a time",
          ],
          [
            "Hollow areas, cracked grout soon after laying",
            "Screed still shrinking",
            "Date screed was laid against date tiled",
            "Re-fix once the base is sound",
          ],
          [
            "Tiles rise in a ridge, often after heat",
            "No room to move: tenting",
            "Gap at the wall, joints in the field",
            "Add sealed joints, re-lay",
          ],
          [
            "Damp patches, white salts, near wet rooms",
            "Water under the floor",
            "Leaks, rising damp, missing membrane",
            "Stop the water, waterproof, re-fix",
          ],
          [
            "Dense tile comes off clean",
            "Wrong adhesive for the tile",
            "Bag used, tile type, sheet limits",
            "Re-fix with an adhesive the sheet allows",
          ],
        ],
        source:
          "our site guidance, using causes described by Ceramic Tile and Stone Consultants and coverage and limits from the Mapei data sheets",
      },
    },
    {
      h2: "Full adhesive coverage stops voids and skinned beds",
      body: [
        "A tile bonds only where wet adhesive touches its back, so the gaps are where failure starts. The Mapeset and Adesilex P7 sheets ask for 65 to 70% coverage on internal walls and light traffic, and 100% for heavy traffic and all external work. Dabs at the corners will not get there. Spread a thin coat with the smooth side of the trowel, comb the rest on, and press the tile down firmly.",
        "The other half of the problem is time, and heat makes it worse. The mean daily maximum in Dar es Salaam is 31.2°C across the year. Open time is about 20 minutes on the Mapeset and Adesilex P7 sheets and at least 30 for [Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1), but strong sun, drying wind or heat can cut it to a few minutes. Once a skin forms, do not flick water on it: the sheets say that makes a film the tile will not bond to. Re-comb it, or scrape it up and spread fresh.",
        "Cool a sun-heated slab with water before spreading. Afterwards, keep rain off for at least 24 hours and strong sun off for at least 5 to 7 days.",
      ].join("\n\n"),
    },
    {
      h2: "Movement joints give tiles room to expand",
      body: [
        "Tiles grow with heat and moisture. Without a joint to take that growth they push against each other until the bond gives and a ridge rises. Porous tiles are more prone to it, and a stronger adhesive alone does not cure it.",
        "The adhesive sheets print no spacing. They say to respect the structural, control and perimeter joints in the substrate and to seal them. [Keracolor FF](/mapei/tile-adhesives-grouts/keracolor-ff) must never go in a movement joint.",
        "The one figure we have read comes from Ceramic Tile and Stone Consultants: perimeter joints at walls with a gap of about 1/4 inch (about 6 mm), then field joints at least every 25 feet indoors (about 7.6 m) and every 8 to 12 feet each way in direct sunlight (about 2.4 to 3.7 m). The conversions are ours. [Mapeflex PU 45 FT](/mapei/waterproofing/mapeflex-pu-45-ft) lists ceramic flooring among its uses, on dry surfaces and not for stone or marble.",
      ].join("\n\n"),
      note: "That spacing is US practice, not a Tanzanian or Mapei rule. Agree the joint layout with the project engineer or Mapei technical support before tiling.",
    },
    {
      h2: "Wait for the screed before tiling",
      body: [
        "A cement screed goes on shrinking as it cures, and a rigid tile bonded to it too early gets pulled at from below. All four adhesive sheets say cement substrates must not shrink after tiling. They ask for at least 28 days of cure on cement screeds and at least one week per centimetre on renders, unless a special Mapei screed binder was used.",
        "The sheets frame that rule for mild or good weather, so treat it as a minimum. A floor closed up during the masika or vuli rains in humid coastal air dries more slowly than the calendar suggests, and the sheets also ask for a sufficiently dry base. The usual pressure on site is a handover date, and the bond pays for it.",
        "Water works from the other direction. Lifting near a shower or on a slab with no damp protection comes back after any repair unless the source is stopped. In wet rooms, a coating such as [Mapelastic Easy](/mapei/waterproofing/mapelastic-easy) goes under the tile.",
      ].join("\n\n"),
    },
    {
      h2: "Use the adhesive class the tile needs",
      body: [
        "The class on the bag is the minimum adhesion the adhesive reached in a test, and the data sheet decides which tile it may hold. In the Kenyan draft standard FDKS 2129-1:2023, a C1 adhesive must reach at least 0.5 N/mm² of tensile adhesion and a C2 at least 1 N/mm², initially and after water immersion, heat ageing and freeze-thaw.",
        "Read the limits as well as the code. Mapeset, a C1, is not for large format tiles. Kerabond T, a C1T, is not for porcelain and other non-absorbent tiles on non-absorbent substrates, or for beds over 5 mm. [Adesilex P7](/mapei/tile-adhesives-grouts/adesilex-p7), a C2T, bonds ceramic and porcelain. Keraflex Maxi S1, a C2TES1, is deformable, suits large porcelain and lists floors under intense traffic.",
        "Any of them fails on a thin, spotty bed. [Work out the bags from the printed rates](/blog/tile-adhesive-per-square-metre) so nobody stretches a mix to finish the room.",
      ].join("\n\n"),
    },
  ],
  faq: [
    {
      q: "How do I stop my tiles from popping up?",
      a: "Lay on a cured, dry screed, with at least 28 days on cement. Use an adhesive the data sheet allows for that tile, get full contact on the back, and leave movement joints at the walls and in the field, sealed rather than grouted.",
    },
    {
      q: "Are tiles that sound hollow a problem?",
      a: "Not always. A hollow sound is a symptom, not a defect in itself. Worry when a patch differs from the floor around it, a solid tile turns hollow, or grout starts cracking. Then lift a tile and look at its back.",
    },
    {
      q: "Why do floor tiles lift in hot weather?",
      a: "Heat and moisture make tiles expand. With no gap at the walls and no movement joints, they press against each other until the bond fails and a ridge rises. Porous tiles and floors in direct sun are the most exposed.",
    },
    {
      q: "Can lifted tiles be re-fixed, or must the floor be replaced?",
      a: "A few loose tiles can be lifted, cleaned back to a sound base and re-fixed in fresh adhesive. If hollow patches spread across the room or tiles are tenting, the cause is floor-wide, and fixing the tiles alone will not hold.",
    },
  ],
  sources: [
    {
      label: "Mapeset technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/mapeset",
    },
    {
      label: "Adesilex P7 technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/adesilex-p7",
    },
    {
      label: "Kerabond T technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/kerabond-t",
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
      label: "Mapeflex PU 45 FT technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapeflex-pu-45-ft",
    },
    {
      label:
        "What is causing my ceramic tile to buckle or tent up?, Ceramic Tile and Stone Consultants (US)",
      url: "https://ctasc.com/expert-answers/what-is-causing-my-ceramic-tile-to-buckle-tent-up/",
    },
    {
      label:
        "What has caused some tiles to become hollow sounding and the grout to crack?, Ceramic Tile and Stone Consultants (US)",
      url: "https://ctasc.com/expert-answers/what-has-caused-some-tiles-in-my-ceramic-tile-floor-to-become-hollow-sounding-and-the-grout-to-crack/",
    },
    {
      label:
        "FDKS 2129-1:2023, Tile adhesive for ceramic, marble, granite, and porcelain, Part 1, Kenya Bureau of Standards public review draft",
      url: "https://members.wto.org/crnattachments/2023/TBT/KEN/23_09870_00_e.pdf",
    },
    {
      label:
        "Dar es Salaam climate table, Julius Nyerere International Airport 1991-2020",
      url: "https://en.wikipedia.org/wiki/Dar_es_Salaam",
    },
  ],
};
