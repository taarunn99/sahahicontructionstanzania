import type { PostContent } from "@/lib/blog";

export const content: PostContent = {
  answer:
    "No single ratio fits every sealant: each data sheet prints its own rule. The pattern is similar, though. Narrow joints, up to about 10 mm wide, are sealed about as deep as they are wide. Wider joints are sealed to about half their width, more in floors, and never below the minimum depth on the sheet. Width comes first, from the movement the joint must take, and a backing rod sets the depth.",
  sections: [
    {
      h2: "What width to depth ratio does joint sealant need?",
      body: "The ratio to use is the one printed on the sheet of the sealant in the gun, and the three we stock print three different rules.\n\nTake a joint 20 mm wide. With [Mapeflex PU 45 FT](/mapei/waterproofing/mapeflex-pu-45-ft) the sealant is 10 mm deep. With [YHPUseal-2925](/oriental-yuhong/yhpuseal-2925) it is 10 mm deep in a facade (20 x 0.5) and 16 mm in a floor (20 x 0.8). With [X-Seal PG](/x-calibur/x-seal-pg), which X-Calibur's sheet calls X-Seal PS800, the 2:1 ratio also gives 10 mm, but a traffic or hydrostatic joint needs 20 mm. Minimums override ratios: a 12 mm facade joint in YHPUseal-2925 works out at 6 mm, and the 8 mm minimum applies instead.\n\nDepth matters because the bead has to stretch and squeeze with the joint. Too deep and the strain goes to the bond line, so the sealant peels off one face. Too shallow and too little sealant holds each face.",
      table: {
        caption: "Joint sizing rules printed on each sealant's data sheet",
        head: ["Sealant", "Joint width", "Depth of sealant", "Movement"],
        rows: [
          [
            "Mapeflex PU 45 FT (polyurethane)",
            "Limit not stated; table runs 5 to 30 mm",
            "Up to 10 mm wide: same as width. 11 to 20 mm: 10 mm. Over 20 mm: half the width",
            "20% of average width",
          ],
          [
            "YHPUseal-2925 (polyurethane)",
            "8 to 40 mm for movement joints",
            "At least 8 mm, or 1 : 0.5 in facades and 1 : 0.8 in floors, whichever is greater",
            "±25%",
          ],
          [
            "X-Seal PG (polysulphide)",
            "5 to 60 mm",
            "10 to 25 mm, at 2:1. Minimum 5 mm impervious, 10 mm porous, 20 mm traffic and hydrostatic",
            "25% butt, 50% lap",
          ],
        ],
        source:
          "Technical data sheets: Mapeflex PU 45 FT (Mapei), YHPUseal-2925 (Oriental Yuhong), X-Seal PS800 (X-Calibur).",
      },
    },
    {
      h2: "How wide should a movement joint be?",
      body: "Wide enough that the movement is a small share of the width: no more than 20% for Mapeflex PU 45 FT and 25% for the other two. Width is fixed by movement, and depth follows.\n\nThe arithmetic is short. A joint expected to open and close by 4 mm must be at least 4 / 0.20 = 20 mm wide for a 20% sealant, or 4 / 0.25 = 16 mm for a 25% sealant. Put that movement in a 10 mm joint and the sealant is asked for 40%. It will split, whatever the brand.\n\nWhere movement exceeds 20%, Mapei's sheet says to use a low modulus sealant instead. YHPUseal-2925 allows less than 8 mm only for non-movement joints in interior areas.\n\nThe movement figure belongs to the designer. A facade in full sun moves more across a day than a shaded interior wall, so do not copy a joint width from one to the other.",
    },
    {
      h2: "Why does sealant need a backing rod?",
      body: "A backing rod sets the depth of the bead and stops the sealant sticking to the bottom of the joint. Sealant should grip the two sides only.\n\nMapei's sheet says the sealant must bond to the sides and not to the bottom, so a compressible closed-cell polyethylene cord goes into expansion and contraction joints first. Oriental Yuhong's asks for a suitable backing rod at the required depth. X-Calibur's says the sealant must be debonded, with debonding tape over the joint filler board.\n\nWithout a rod, two things go wrong. The sealant runs to the bottom, so the bead is far deeper than the rule and a pack fills a fraction of the metres expected. And it bonds on three sides: held at the bottom, the bead cannot stretch freely when the joint opens, and it tears.",
    },
    {
      h2: "How many metres does one pack of sealant fill?",
      body: "Divide the pack volume in millilitres by the joint's width times its depth in millimetres. Volume is width x depth x length, and a joint 1 mm by 1 mm in section holds 1 ml per metre.\n\nWorked once: a joint 20 mm wide and 10 mm deep holds 20 x 10 = 200 ml per metre, so a 600 ml pack fills 600 / 200 = 3 metres and a 4 litre pack fills 4,000 / 200 = 20 metres.\n\nThe same sum reproduces the printed tables: Mapei prints 6, 3 and 1.3 metres per 600 ml for 10 x 10, 20 x 10 and 30 x 15 mm joints, and X-Calibur prints 10 metres per litre at 10 x 10 mm. X-Seal PG must not be part mixed and has a pot life of 2 hours at 35°C, so have about 10 metres of 20 x 20 mm joint primed before opening a pack. The calculator on each product page does this sum for any size and length.",
      table: {
        caption:
          "Metres of joint per pack, calculated as pack volume / (width x depth), before wastage",
        head: [
          "Joint, width x depth (mm)",
          "Sealant per metre",
          "Metres per 600 ml pack",
          "Metres per 4 litre pack",
        ],
        rows: [
          ["10 x 10", "100 ml", "6.0", "40.0"],
          ["15 x 10", "150 ml", "4.0", "26.7"],
          ["20 x 10", "200 ml", "3.0", "20.0"],
          ["25 x 12.5", "312.5 ml", "1.9", "12.8"],
          ["20 x 16", "320 ml", "1.9", "12.5"],
          ["20 x 20", "400 ml", "1.5", "10.0"],
          ["30 x 15", "450 ml", "1.3", "8.9"],
          ["40 x 20", "800 ml", "0.75", "5.0"],
        ],
        source:
          "Our arithmetic from the pack sizes stocked: 600 ml (Mapeflex PU 45 FT, YHPUseal-2925) and 4 litres (X-Seal PG). Check each size against the sealant's own depth rule before using it.",
      },
      note: "These are volumes of a clean, rectangular joint and exclude wastage; a ragged arris or a rod set too deep uses more. Oriental Yuhong prints no quantity table, so the 600 ml figures for YHPUseal-2925 are our calculation, not the maker's.",
    },
    {
      h2: "Does a joint need primer before sealing?",
      body: "It depends on the sealant: the polysulphide is designed around a primer, the two polyurethanes are not, and all three need a dry, clean joint face.\n\nX-Calibur's sheet says joint edges must be primed for maximum performance. [X-Seal Primer](/x-calibur/x-seal-primer) is brushed onto the joint sides, and the sealant sheet says to apply between 1 and 3 hours after priming, or prime again. The primer's own sheet allows up to 24 hours, so keep to the shorter time. One litre is sufficient for 225 linear metres of 10 mm joint, as a theoretical figure.\n\nMapei's sheet says Mapeflex PU 45 FT bonds well without a primer on substrates that are solid, free of dust, clean and dry. Oriental Yuhong's says to apply a primer if necessary.\n\nDryness is the shared condition: X-Seal PS800 must not be applied in rain or wet conditions, and Mapeflex PU 45 FT not on damp surfaces. In the masika and vuli rains that means waiting, because a joint that looks dry an hour after a shower can still be wet at the rod.",
    },
    {
      h2: "Which sealant for floors, facades and water tanks?",
      body: "Choose by where the joint is and what will touch it, then size it by that product's rule.\n\nCure time belongs in the plan as well. Mapeflex PU 45 FT is dust dry in 35 minutes but cures inward: 3.3 mm in 24 hours, 5.2 mm in 48 hours and 8.5 mm in 7 days, so a 10 mm deep bead is not cured through in a week. X-Seal PS800 reaches initial cure in 24 hours and full cure in 7 days at 25°C, and must not be fully immersed until then. A tank joint sealed on Monday is not ready for water on Tuesday.\n\nStone and marble, bituminous surfaces and chlorinated pools are each excluded or limited by at least one sheet, so read the limits on the product page before ordering.",
      list: [
        "**Trafficked floors:** Mapeflex PU 45 FT, a high modulus polyurethane (Shore A 40) whose sheet lists industrial floors and car parks.",
        "**Facades and frames:** YHPUseal-2925, a softer polyurethane (Shore A about 30) for wall joints and around window and door frames.",
        "**Water-retaining structures:** X-Seal PG, a two-part polysulphide for immersed conditions and contact with potable water, at least 20 mm deep in hydrostatic joints.",
      ],
    },
  ],
  faq: [
    {
      q: "How deep should sealant be in an expansion joint?",
      a: "Follow the sealant's own data sheet. For a 20 mm wide joint the three stocked sealants give 10 mm (Mapeflex PU 45 FT), 10 mm in a facade or 16 mm in a floor (YHPUseal-2925), and 10 mm by ratio or 20 mm under traffic or water pressure (X-Seal PS800).",
    },
    {
      q: "What is a backing rod and do I need one?",
      a: "It is a compressible closed-cell polyethylene cord pushed into the joint before sealing. It sets the depth of the bead and stops the sealant bonding to the bottom of the joint. In expansion and contraction joints the data sheets call for it.",
    },
    {
      q: "How many metres does a 600 ml sausage of sealant do?",
      a: "Divide 600 by the joint's width times its depth in millimetres. A 10 x 10 mm joint gets 6 metres, a 20 x 10 mm joint 3 metres and a 30 x 15 mm joint about 1.3 metres, before wastage.",
    },
    {
      q: "Which sealant can go in a water tank joint?",
      a: "Of the three we stock, the polysulphide. X-Seal PS800's sheet says it can be used in immersed conditions and in contact with potable water, at least 20 mm deep in hydrostatic joints. Do not immerse it fully until full cure: 7 days at 25°C.",
    },
  ],
  sources: [
    {
      label: "Mapeflex PU 45 FT technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapeflex-pu-45-ft",
    },
    {
      label: "YHPUseal-2925 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhpuseal-2925",
    },
    {
      label:
        "X-Seal PS800 technical data sheet, X-Calibur (stocked as X-Seal PG, pouring grade)",
      url: "/x-calibur/x-seal-pg",
    },
    {
      label:
        "X-Seal PS800 Primer technical data sheet, X-Calibur (stocked as X-Seal Primer)",
      url: "/x-calibur/x-seal-primer",
    },
  ],
};
