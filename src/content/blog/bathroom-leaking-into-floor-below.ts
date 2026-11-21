import type { PostContent } from "@/lib/blog";

/**
 * Where each fact comes from (read 2026-11-21):
 * - Mapelastic AquaDefense: src/content/mapei/mapelastic-aquadefense.json and
 *   public/tds/mapei/mapelastic-aquadefense.pdf (edition 14224-7-2026): uses,
 *   substrates (incl. old ceramic tiles), the five "do not" rules, 2 coats approx.
 *   0.4 mm, second coat perpendicular after approx. 1 hour, 1 kg/m² for 2 coats,
 *   3-4 hours (table) and 4 hours (body) before tiling, adhesive class C2 inside,
 *   Kerapoxy among the grouts, Mapeflex PU 45 FT among the sealants, Mapeband at
 *   wall-floor fillets, Primer G on absorbent substrates, slopes restored first,
 *   EN 14891, crack-bridging 3.2 mm at +23°C, 15 kg pack (catalogue.ts).
 * - Mapeband Easy: mapeband-easy.json and PDF: corners, 5 cm overlap, Mapelastic
 *   range, 90° and 270° pieces and pipe templates in the range, control joints
 *   left free in the middle with a joint in the tile above. Stocked: the 130 mm x
 *   30 m roll only (catalogue.ts), so the pieces are not claimed as stock.
 * - Kerapoxy: kerapoxy.json and PDF: RG / R2T, joints dry, clean, emptied to at
 *   least 2/3 of the tile thickness, pot life 45 mins, light foot traffic 24 h,
 *   ready for use 4 days, water absorption 0.05 g, not for joints that move.
 * - Keraflex Maxi S1: keraflex-maxi-s1.json: C2TES1, floor grouting after 24 hours.
 * - Mapeflex PU 45 FT: mapeflex-pu-45-ft.json: not on damp surfaces, not for
 *   stone and marble joints, depth equal to width up to 10 mm.
 * - UltraCare HD Cleaner: ultracare-hd-cleaner.json: preparation of existing
 *   ceramic before tile-on-tile.
 * - YHCoat-2060: yhcoat-2060.json and public/tds/oriental-yuhong/yhcoat-2060.pdf:
 *   wet rooms, keyed finish for cement-based tile adhesive, ≈2.0 kg/m² for 1.0 mm
 *   dry film in 2 coats, 3rd coat at 1.0 kg/m² for high water ingress, crack
 *   bridging ≈2 mm, fabric at corners, pipes and outlets, wall before floor,
 *   flooding test once completely dry. We stock a 15 kg pail (oriental-yuhong.ts).
 * - YHRepair-2516: yhrepair-2516.json and PDF: static cracks and holes, corners
 *   and pipe penetrations before waterproofing in bathrooms, sets in 3-5 minutes,
 *   use within 10 minutes, 1-2 mm layers, not for moving cracks or joints, not as
 *   a surface coating. 4 kg bags.
 * - Flood test: Ardex Technical Bulletin TB266 (2020), opened and read in full:
 *   25 to 100 mm at the low point, minimum 24 hours, no longer than 72 hours,
 *   drains plugged, readings below every four hours. ASTM D5957 scope page:
 *   horizontal decks, head not more than 100 mm, not for roofing. Both presented
 *   as practice, not law.
 * Left out on purpose: any fall ratio (no source opened that we would quote), any
 *   Tanzanian code or rule (none read), Mapei Drain kits, Mapetex 50, Mapesil,
 *   Planitop Fast 330 and Eco Prim Grip Plus (named on the sheet, not stocked), any
 *   cure time before flooding for AquaDefense (its sheet gives none), whether
 *   YHCoat-2060 may go over old tiles (its sheet does not say), all prices.
 *   The diagnostic tests are our site judgement, not a published method.
 */
export const content: PostContent = {
  answer:
    "A bathroom that leaks into the floor below is usually leaking from one of five places: the supply pipe, the waste pipe or floor trap, the grout and corner joints, the shower upstand or doorway, or a membrane that is missing or broken. Test them one at a time. Grout and sealant faults can be fixed with the tiles in place. A failed trap or a missing membrane means lifting the floor and redoing the wet room properly.",
  sections: [
    {
      h2: "Where is the water coming from?",
      body: "Start with the stain, not the product. In a concrete-frame building the bathroom floor is a slab, a screed laid to falls towards a floor trap, and tiles. Water that gets past the tiles runs along the top of the slab and comes out where it finds a crack, a pipe sleeve or the edge of a beam. The stain below can sit a metre or more from the fault.\n\nWhen the stain appears tells you more than where. A stain that never dries, even when the bathroom is locked, points to pressure: a supply pipe. A stain that follows showers or floor washing points to drainage or joints. A stain that grows slowly over months, across a wide patch, usually means the floor has no working membrane at all.",
      table: {
        caption: "The five usual sources of a bathroom leak to the floor below",
        head: ["Source", "Typical sign below", "Fix without lifting tiles?"],
        rows: [
          [
            "Supply pipe (cold or hot)",
            "Wet all the time, also when nobody uses the room",
            "Often: the plumber opens only at the pipe",
          ],
          [
            "Waste pipe or floor trap",
            "Wet after showers or flushing, near the trap position",
            "Rarely: the trap joint sits under the tiles",
          ],
          [
            "Grout and corner joints",
            "Wet after floor washing, spread along joints",
            "Yes, if the tiles are sound",
          ],
          [
            "Shower upstand or doorway",
            "Wet near the shower edge or under the door",
            "Sometimes: sealant first, then rebuild",
          ],
          [
            "Missing or broken membrane",
            "Slow, wide stain; other tests come back clean",
            "No: strip and waterproof",
          ],
        ],
        source:
          "Our site judgement from common repair practice; not a published method.",
      },
    },
    {
      h2: "How do you test each suspect?",
      body: "Test one thing at a time and give each test long enough to show. Have someone below with a torch and a marker, mark the edge of the stain before you start, and write down the times. In a hospital ward or an occupied office, agree the times with the people below first, because some tests need the room out of use for a day.",
      steps: [
        "Close every tap and outlet in the bathroom and read the water meter, or have the plumber put the supply on a pressure test. If the meter moves or the pressure drops, the supply pipe is leaking. Stop here and repair it.",
        "With the floor dry, pour water straight into the floor trap and flush the WC, keeping the tiles dry. If the stain grows, suspect the trap, its joint to the waste pipe or the pipe through the slab.",
        "Plug the floor trap and wet the tiled floor away from the trap, then leave it. If the stain grows now and not in step 2, water is going through the grout or the wall-to-floor corner.",
        "Spray the shower walls and the upstand only, with the trap open. A stain near the shower edge or the doorway points to the upstand, the threshold or the wall joints.",
        "If every test is clean but the slab still stains after normal use, assume the membrane is missing or broken and plan to strip the floor.",
      ],
      note: "Do not plug the leak from the ceiling below. Sealing the underside of the slab traps the water in the concrete and moves the stain, it does not stop the source.",
    },
    {
      h2: "What can be fixed without removing the tiles?",
      body: "Grout, sealant joints and the supply pipe can usually be fixed with the tiles in place. The honest limit is this: tiles and grout are not the waterproofing. The membrane under them is. If there is none, a regrout slows the leak but does not end it.\n\nTo regrout, rake out the old cement grout. [Kerapoxy](/mapei/tile-adhesives-grouts/kerapoxy) is an epoxy grout, class RG, and its sheet asks for joints that are dry, clean, free of dust and emptied to at least 2/3 of the tile thickness. Its water absorption is printed as 0.05 g. It has a pot life of 45 minutes, takes light foot traffic after 24 h and is ready for use after 4 days, so the room is out of service for that long. Why epoxy and not cement in a wet room is covered in [epoxy grout vs cement grout](/blog/epoxy-grout-vs-cement-grout).\n\nKerapoxy is rigid. Its own sheet says joints that move need an elastic sealant, so the wall-to-floor corners, the upstand and the joint round the tray get a sealant instead of grout. [Mapeflex PU 45 FT](/mapei/waterproofing/mapeflex-pu-45-ft) is one of the sealants the AquaDefense sheet names for this. It must not go on damp surfaces and is not for stone or marble joints. Up to 10 mm wide, the sealant depth equals the width.\n\nThere is a third option for sound old floors: a new membrane over the old tiles, then new tiles on top. The AquaDefense sheet lists old ceramic tiles as a substrate, but rules out old floors that are not well bonded. [UltraCare HD Cleaner](/mapei/tile-adhesives-grouts/ultracare-hd-cleaner) is made for preparing old ceramic before tiling over it. Check the door threshold and trap height first, because the floor rises.",
      list: [
        "**Can be fixed in place:** cracked or missing grout, failed sealant at corners and the upstand, a supply pipe reached from one opening.",
        "**Cannot:** a floor trap not bonded into the waterproofing, a broken waste joint under the floor, hollow or loose tiles, a floor with no membrane.",
      ],
    },
    {
      h2: "When the floor has to come up",
      body: "Strip the tiles and the bedding down to a sound screed, and take the wall tiles off at least as high as the membrane will go. Check the screed falls to the trap while it is bare. The AquaDefense sheet says slopes that need restoring should be corrected before the membrane goes on.\n\nThen let it dry. A floor that has leaked for months is wet, and the AquaDefense sheet rules out cementitious substrates with residual humidity higher than 3%. Measure it. On a fast job in the rains, that wait is the part most often skipped and the reason a new membrane lets go.\n\nThe floor trap and every pipe through the slab need attention before the membrane. [YHRepair-2516](/oriental-yuhong/yhrepair-2516) is a quick-setting waterplug whose sheet lists sealing internal corners and areas around pipe penetrations before waterproofing in kitchens and bathrooms. It typically sets in 3-5 minutes, so mix small amounts and use them within 10 minutes, in layers of 1-2 mm. It is for static cracks only, not for joints or as a coating.",
    },
    {
      h2: "Wet room waterproofing, step by step",
      body: "This is the Mapei sequence, with each value from the data sheets. [Mapelastic AquaDefense](/mapei/waterproofing/mapelastic-aquadefense) is a ready-to-use liquid membrane certified to EN 14891 for waterproofing under tiles, listed for bathrooms and shower cubicles. If you are choosing between it and a two-part cementitious membrane, see [cementitious vs liquid membrane](/blog/cementitious-vs-liquid-membrane-waterproofing).",
      steps: [
        "Prepare the substrate: sound, clean, dry, no laitance, oil or old paint. Prime highly absorbent or chalky surfaces with Primer G and let it dry completely.",
        "Bed [Mapeband Easy](/mapei/waterproofing/mapeband-easy) into a coat of AquaDefense along every wall-to-wall and wall-to-floor corner, with no folds or bubbles. Laps between pieces overlap at least 5 cm, bonded with the membrane.",
        "Seal round the trap and pipes. The Mapeband Easy range has 90° and 270° pieces and pipe templates; we stock the 130 mm roll, so ask before you plan on the pieces.",
        "Apply the first coat of AquaDefense, approx. 0.4 mm, by long-pile roller, brush or trowel. Wait until it turns darker and matt, approximately 1 hour at +23°C.",
        "Apply the second coat at right angles to the first. Two coats take 1 kg/m² in total. The film must be continuous, with no breaks.",
        "Tile 4 hours after the second coat (the table says 3-4 hours). Indoors the sheet asks for an adhesive of at least class C2. [Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1) is C2TES1; grout floor tiles after 24 hours.",
        "Grout with Kerapoxy and fill the corners and movement joints with an elastic sealant, never grout.",
      ],
      note: "AquaDefense must always be covered with tiles and must not be used to cover cracks. Do not apply it below +5°C. For quantities per pail with the wall upturn included, see [waterproofing coverage per square metre](/blog/waterproofing-coverage-per-square-metre); for every wait in the sequence, see [Mapei waiting times](/blog/mapei-waiting-times-before-tiling-grouting-walking).",
    },
    {
      h2: "The OYH route: YHCoat-2060",
      body: "[YHCoat-2060](/oriental-yuhong/yhcoat-2060) is a one-component polymer coating its sheet calls especially suitable for wet rooms such as bathrooms and kitchens. It cures with a keyed finish meant to help cement-based tile adhesive bond directly. The sheet asks for reinforcing fabric at corners, pipe penetrations and drainage outlets in 2-3 coats, the wall coated before the floor, and each coat at right angles to the last. Ask OYH which fabric before ordering, because the sheet does not name one.",
      table: {
        caption: "The two stocked under-tile membranes for a bathroom",
        head: ["", "Mapelastic AquaDefense", "YHCoat-2060"],
        rows: [
          ["Coats", "2, approx. 0.4 mm each", "2 for 1.0 mm dry film; 3rd where water ingress is high"],
          ["Consumption", "1 kg/m² for 2 coats", "≈2.0 kg/m²; 3rd coat at 1.0 kg/m²"],
          ["Crack bridging", "3.2 mm at +23°C (EN 14891)", "≈2 mm at 23°C (ASTM C836)"],
          ["Before tiles", "3-4 hours (4 h after 2nd coat)", "Flooding test once completely dry"],
          ["Corners and pipes", "Mapeband Easy", "Reinforcing fabric, 2-3 coats"],
          ["Pack we stock", "15 kg", "15 kg"],
        ],
        source:
          "Mapei and Oriental Yuhong technical data sheets; pack sizes from our stock list.",
      },
    },
    {
      h2: "Should you flood test before tiling?",
      body: "On a repair in an occupied building, yes. Tiling over an untested membrane and finding the leak a month later means stripping the floor twice. The YHCoat-2060 sheet itself says to conduct a flooding test once the coating is completely dry. The AquaDefense sheet gives no flood test and no cure time for one, so ask Mapei before filling the room.\n\nThere is no single rule for the test, and we found no Tanzanian requirement. One maker's bulletin, Ardex TB266, floods the area to between 25 mm and 100 mm at the low point, for a minimum of 24 hours and no longer than 72 hours, with drains plugged and the space below checked every four hours. ASTM D5957 limits the head to not more than 100 mm and is written for horizontal decks, not roofs. Treat these as practice, and write the depth, duration and witness into the project's own record.",
    },
  ],
  faq: [
    {
      q: "Can you fix a leaking shower without removing tiles?",
      a: "Sometimes. If the tiles are sound and the fault is grout or sealant, regrouting with epoxy and resealing the corners can work. If the trap joint has failed or there is no membrane under the tiles, the floor has to come up. Test before deciding.",
    },
    {
      q: "Why does the ceiling stain sit away from the shower?",
      a: "Water that gets past the tiles runs along the top of the slab until it finds a way through, such as a crack, a pipe sleeve or the edge of a beam. The stain marks the exit, not the entry.",
    },
    {
      q: "Is epoxy grout waterproof?",
      a: "Kerapoxy's sheet prints a water absorption of 0.05 g, which is very low, but grout is not a membrane. It cannot bridge a cracked joint or a moving corner. The waterproofing is the membrane under the tiles.",
    },
    {
      q: "Can Mapelastic AquaDefense go over old tiles?",
      a: "Its sheet lists old ceramic tiles as a substrate, but rules out old floors that are not well bonded and surface treatments that could affect the bond. Clean the tiles, check for hollow ones, and remember the new tiles raise the floor.",
    },
    {
      q: "What is the toilet waterproofing process step by step?",
      a: "Strip to a sound screed with falls, dry it to the membrane's limit, seal the trap and pipes, tape the corners, apply two crossed coats, flood test, tile with a class C2 adhesive or better, grout, then seal the movement joints.",
    },
  ],
  sources: [
    {
      label: "Flood testing of Ardex waterproofing membranes, Technical Bulletin TB266, Ardex Australia, 2020",
      url: "https://www.ardex.co.nz/pdf/tech%20bulletins/TB266.001_Flood_Testing_of_Ardex_Waterproofing_Membranes.pdf",
    },
    {
      label: "ASTM D5957, Standard Guide for Flood Testing Horizontal Waterproofing Installations (scope)",
      url: "https://store.astm.org/d5957-98r21.html",
    },
    {
      label: "Mapelastic AquaDefense technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-aquadefense",
    },
    {
      label: "Mapeband Easy technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapeband-easy",
    },
    {
      label: "Kerapoxy technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/kerapoxy",
    },
    {
      label: "Keraflex Maxi S1 technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1",
    },
    {
      label: "Mapeflex PU 45 FT technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapeflex-pu-45-ft",
    },
    {
      label: "UltraCare HD Cleaner technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/ultracare-hd-cleaner",
    },
    {
      label: "YHCoat-2060 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcoat-2060",
    },
    {
      label: "YHRepair-2516 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhrepair-2516",
    },
  ],
};
