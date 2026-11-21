import type { PostContent } from "@/lib/blog";

/**
 * Hospital flooring, room by room. Primary query: hospital flooring material.
 *
 * Product facts, all from the data sheets under public/tds/ (read with
 * pdftotext on 2026-11-21) and the content JSON beside them:
 *   X-Tech EpoxyFloor SL (x-calibur/x-tech-epoxyfloor-sl1.pdf, 30191622):
 *     uses, SL1 thickness, static friction, fire classes, chemical list,
 *     bacteria line, moisture testing, primers, sunlight limit.
 *   X-Tech AntiStatic SLE (x-calibur/x-tech-antistatic-sle.pdf, 90070918)
 *     and its method statement v5 (8.1, the ground strip spacing): grades,
 *     uses, thickness, humidity limit, cleaning limit.
 *   Mapefloor I 300 SL ME (mapei/mapefloor-i-300-sl-me.pdf, 6797-6-2019):
 *     uses, "seamless coatings", 2 to 4 mm, 4% moisture, substrate
 *     strengths, dew point, sunlight and chemical colour change.
 *   Mapefloor CPU+/MF (mapei/mapefloor-cpu-plus-mf.pdf, 8990-11-2023):
 *     kitchens, thermal shock by thickness, ISO 846, ISO 4628-1, HACCP,
 *     slip class as printed, substrate and air limits, first cleaning.
 *   Kerapoxy (mapei/kerapoxy.pdf): hygiene uses, low water absorption,
 *     elastic sealant for moving joints.
 *   Ultraplan Eco 20 (mapei/ultraplan-eco-20.pdf): hospitals in typical
 *     applications, 3 mm under wheeled loads, 24 h before resilient floors.
 * Stock: catalogue.ts. SL1 (RAL 7035, 17 litres), I 300 SL ME, CPU+/MF,
 * Kerapoxy, Ultraplan Eco 20, Primer SN and Eporip are on the price list;
 * X-Tech AntiStatic SLE is supplied to order (owner, 2026-11-19). The SL1
 * sheet's primers (X-Prime SF, MT100), BugFill, LevelCem HD and
 * Mapefloor CPU+/Primer are not in the catalogue, so they are named only as
 * the sheets' requirements, never as stock.
 *
 * External facts: NHS England HBN 00-10 Part A (2013), opened and read on
 * 2026-11-21, quoted as UK guidance only. Its room-by-room table is set in an
 * encoded font; only its footnote (light, moderate, high clinical) was
 * decoded with confidence and is used. NIH ORF Technical Bulletin 78,
 * "Static Control Flooring" (July 2018), opened and read.
 *
 * Deliberately left out: any Tanzanian Ministry of Health floor rule (none
 * was read, research_notes 08), Vasa SPC and LVT (not offered for clinical
 * rooms), raised access floors in server rooms (no source opened), HTM 05-03
 * fire periods (cited by HBN, not opened), radiation shielding values, any
 * statement that a theatre must be conductive, coving products (no sheet
 * we hold describes forming the cove), the brochure's figures, and the
 * phrase the SL1 sheet uses for its chemical list. No client or project is
 * named. Sahihi supplies materials; it does not apply or certify floors.
 */
export const content: PostContent = {
  answer:
    "Hospitals mostly use floors that are seamless, impervious and easy to disinfect: resin or sheet floors in clinical rooms, tiles with epoxy grout in wet rooms, polyurethane cement in kitchens, and a conductive or dissipative floor where static must be controlled. Choose room by room from what the floor must withstand, then check that the product's data sheet names that use. We supply the materials; your design team writes the specification.",
  sections: [
    {
      h2: "What kind of flooring do hospitals use?",
      body: "There is no single hospital floor. A ward, a theatre, a kitchen and a sluice room ask different things of the same slab, so the material changes at the door. What they share is the duty to be cleaned, often with strong disinfectants, without breaking down or holding dirt in joints.\n\nWe did not find a Tanzanian Ministry of Health floor rule that we could read and cite, so this guide does not claim one. Where a standard helps, we quote UK guidance and say so. The NHS England note on flooring, HBN 00-10 Part A, says floor finishes \"should be of a material that is not physically affected or degraded by the detergents and disinfectants likely to be used\", and that they \"should provide a flat surface without pronounced texturing to allow the passage of wheeled traffic and to assist maintenance.\" It also says \"Carpets should be avoided in clinical areas.\"\n\nThe same note sorts rooms by clinical need: in-patient accommodation is \"light clinical\", a treatment room \"moderate clinical\" and a theatre suite \"high clinical\". Where a room falls into more than one category, \"the higher criterion should be adopted\".",
    },
    {
      h2: "Which floor goes in which room?",
      body: "The table matches each room to a system we supply, using only the uses each data sheet prints. All are stocked except X-Tech AntiStatic SLE, which is supplied to order. Thickness and build-up still need the designer's decision, which [our guide to epoxy floor thickness](/blog/epoxy-floor-thickness) sets out.\n\nA use listed on a sheet is the maker's statement, not an approval for your project.",
      table: {
        caption: "Hospital rooms, what the floor must do, and a stocked system for each",
        head: ["Room", "What the floor must do", "System we supply", "Data sheet basis"],
        rows: [
          [
            "Wards, consulting rooms, clean utility",
            "Clean easily, stay flat for beds and trolleys, return up the wall",
            "X-Tech EpoxyFloor SL1, 1 to 1.5 mm",
            "Uses list \"Hospitals\"; \"Easy to clean finish\"",
          ],
          [
            "Corridors and hospital streets",
            "Carry heavy wheeled and foot traffic all day",
            "Mapefloor I 300 SL ME, 2 to 4 mm",
            "\"laboratories, sterile rooms, and hospitals\"",
          ],
          [
            "Operating theatres",
            "Take rolling loads, spills, cleaning and disinfection; control static where specified",
            "X-Tech AntiStatic SLE (to order), or Mapefloor I 300 SL ME where no static control is specified",
            "SLE: \"Hospitals\", \"Clean rooms\". I 300: \"sterile rooms\", \"aseptic rooms\"",
          ],
          [
            "Laboratories",
            "Resist chemical spills and frequent wiping",
            "Mapefloor I 300 SL ME or X-Tech EpoxyFloor SL1",
            "I 300: laboratories. SL1: \"Laboratories and clean rooms\"",
          ],
          [
            "Kitchens",
            "Take hot spills, grease and wet cleaning",
            "Mapefloor CPU+/MF, 3 to 6 mm",
            "\"commercial and industrial kitchens\"; thermal shock up to +80°C at 6 mm",
          ],
          [
            "Laundries",
            "Take water, detergents and trolleys",
            "X-Tech EpoxyFloor SL1",
            "Uses list \"Kitchens and laundries\"",
          ],
          [
            "Sluice rooms, bathrooms, showers",
            "Stay slip resistant when wet; keep water out of the structure",
            "Ceramic tiles (by others) grouted with Kerapoxy",
            "\"areas where hygiene is required\"; low water absorption",
          ],
          [
            "Imaging rooms, server rooms",
            "Control static around sensitive equipment",
            "X-Tech AntiStatic SLE (to order)",
            "Conductive (CG) and dissipative (DG) grades; rooms from NIH guidance",
          ],
          [
            "Rooms to receive a sheet floor by others",
            "Give a flat, smooth base",
            "Ultraplan Eco 20, at least 3 mm under wheeled loads",
            "Lists hospitals among typical applications",
          ],
        ],
        source:
          "Uses as printed on the X-Calibur and Mapei technical data sheets; room duties from HBN 00-10 Part A (UK) and the NIH bulletin listed below.",
      },
    },
    {
      h2: "What do seamless and coved skirtings mean?",
      body: "A seamless floor has no joints for dirt and water to collect in. A poured resin floor is seamless across the room because it is laid as one continuous layer; Mapei's sheet says [Mapefloor I 300 SL ME](/mapei/resin-flooring/mapefloor-i-300-sl-me) \"is used to create seamless coatings\". Tiles are not seamless, which is why the grout matters: [epoxy grout](/blog/epoxy-grout-vs-cement-grout) closes the joint where cement grout stays porous. The [Kerapoxy](/mapei/tile-adhesives-grouts/kerapoxy) sheet describes \"a smooth final surface with low water absorption, therefore easy to clean; ensures hygiene\".\n\nA coved skirting carries the floor up the wall in a curve, so there is no right-angled corner for a mop to miss. HBN 00-10 Part A puts it plainly: \"In clinical areas and associated corridors, there should be a continuous return between the floor and the wall. For example, coved skirtings with a minimum height of 100 mm allow for easy cleaning.\" It adds that \"Threshold strips are to be avoided.\"\n\nNone of the data sheets we hold describes how to form the cove itself. Ask the applicator to submit the cove detail with the method statement.",
    },
    {
      h2: "What do the data sheets say about slip resistance and cleaning?",
      body: "Each sheet uses its own test, so the figures cannot be ranked against each other. Quote the figure with its test method in the specification, and ask for the same method on any alternative offered.\n\nHBN 00-10 Part A asks that surfaces \"prevent pedestrians from slipping both in areas deemed as dry and those that become wet or contaminated in usage\", and that \"All flooring, including slip-resistant flooring, should be capable of being cleaned to agreed hygiene standards.\"\n\nOn cleaning, ask the infection control team for the disinfectants they will actually use and check them against the maker.",
      table: {
        caption: "Slip, hygiene and cleaning figures as the sheets print them",
        head: ["Product", "Slip figure (test)", "Hygiene and cleaning, as printed"],
        rows: [
          [
            "X-Tech EpoxyFloor SL",
            ">0.9 dry, >0.6 wet (coefficient of static friction, ASTM F609)",
            "\"Does not support growth of bacteria, fungi or micro-organisms\"; good resistance to concentrated bleach",
          ],
          [
            "X-Tech AntiStatic SLE",
            "Not printed",
            "\"Easy to clean gloss finish\"; no water or cleaning solutions until fully cured",
          ],
          [
            "Mapefloor I 300 SL ME",
            "Not printed",
            "May change colour on contact with aggressive chemicals, which \"does not mean that it has been damaged\"",
          ],
          [
            "Mapefloor CPU+/MF",
            "Class I (wet indoor surfaces), Class II (dry indoor surfaces) (EN 13036-4)",
            "ISO 846 fungi and bacteria; ISO 4628-1 riboflavin cleaning test; HACCP",
          ],
        ],
        source: "X-Calibur and Mapei technical data sheets.",
      },
    },
    {
      h2: "When does a theatre, imaging room or server room need an antistatic floor?",
      body: "When the design team specifies static control for the room, usually because of sensitive electronics or flammable materials. The NIH bulletin on static control flooring says such floors are \"frequently required in areas with diagnostic and imaging equipment, sensitive and calibrated electronics, data centers, clean rooms, operating rooms and rooms with flammable materials.\" It notes that most in healthcare and laboratories are vinyl, with epoxy for special applications.\n\nConductive and dissipative are different ranges, and the NIH bulletin warns that a floor too conductive \"may raise safety concerns for staff working with electricity\". Get the resistance range from the equipment supplier or electrical engineer, then pick the grade. [X-Tech AntiStatic SLE](/x-calibur/x-tech-antistatic-sle) prints both: the conductive grade (CG) between 5 x 10^4 and 1 x 10^6 ohms, the dissipative grade (DG) between 5 x 10^6 and 1 x 10^9 ohms, point to point and to ground. It is applied 1.5 mm to 2 mm thick, and its sheet lists \"Hospitals\" and \"Clean rooms\".\n\nThe floor only works when it is earthed. The method statement uses copper strips to a tested ground point, typically one every 20 m around the perimeter, and tests the base coat to ground before the top coat. Our [antistatic and conductive flooring page](/x-calibur/antistatic-conductive-flooring) shows the build-up, the resistance scale and a system calculator.\n\nAn imaging room has a second question: radiation protection. HBN 00-10 Part A says the construction materials for walls and partitions must be agreed with the radiation protection adviser. None of our floor data sheets claims any radiation shielding.",
    },
    {
      h2: "How should the slab be prepared and tested for moisture?",
      body: "Resin floors fail from below. Damp in the slab, a weak surface or condensation lifts the coating in blisters, which [our guide to why epoxy floors blister and peel](/blog/why-epoxy-floors-blister-and-peel) explains.\n\nBoth makers want a sound slab, mechanically prepared. The X-Calibur sheets call for captive blasting to an ICRI CSP 4 or 5 profile. Mapei's sheets ask for shot-blasting or diamond grinding, a substrate of at least 25 N/mm² in compression and 1.5 N/mm² in tension, and the substrate at least 3°C above the dew point. If the slab is out of level, fix it first; [screed or self-levelling compound](/blog/screed-or-self-levelling-compound) depends on how far out it is. [Ultraplan Eco 20](/mapei/primers-levelling/ultraplan-eco-20) names tiles and resilient coverings, not resin; under resin the X-Calibur sheets name X-Tech LevelCem HD.",
      table: {
        caption: "Moisture and site limits printed on each sheet",
        head: ["Product", "Moisture limit or test", "Other site limits"],
        rows: [
          [
            "X-Tech EpoxyFloor SL",
            "Rapid RH (ASTM F2170); above 80%, MVER (ASTM F1869) sets the primer: X-Prime SF under 3 lbs/1000ft2/24h, X-Prime MT100 from 3 to 12",
            "5 to 35C; not within 3C of the dewpoint",
          ],
          [
            "X-Tech AntiStatic SLE",
            "The same tests and primer bands",
            "10 to 35C; maximum ambient relative humidity of 85%",
          ],
          [
            "Mapefloor I 300 SL ME",
            "Maximum 4%; no capillary rising damp (polythene sheet test)",
            "+8°C to +35°C; Primer SN first",
          ],
          [
            "Mapefloor CPU+/MF",
            "Visually dry; not on concrete younger than 7 days; no capillary rising damp",
            "Air relative humidity lower than 80%; +10°C to +30°C",
          ],
          [
            "Ultraplan Eco 20",
            "Not on substrates subject to continuous rising dampness",
            "Resilient floors after a minimum of 24 hours at +23°C",
          ],
        ],
        source:
          "X-Calibur and Mapei technical data sheets. X-Prime SF and MT100 are named by the X-Calibur sheets; ask us before ordering them.",
      },
      note: "Coastal humidity matters here. The AntiStatic SLE sheet stops at 85% ambient relative humidity and CPU+/MF at 80%. On a humid coastal day, measure the air and the dew point before mixing.",
    },
    {
      h2: "What should the specification say?",
      body: "Make every line checkable against a data sheet. Two limits are easy to miss in our climate. [X-Tech EpoxyFloor SL](/x-calibur/x-tech-epoxyfloor-sl1) \"Will change color when exposed to direct sunlight\", and Mapefloor I 300 SL ME \"may change colour or fade if exposed to sunlight but this has no effect on its performance characteristics.\" Keep both away from open walkways and glazed corridors where the sun falls on the floor, or accept the change. A kitchen floor should be chosen at the thickness that matches its hot spills: [Mapefloor CPU+/MF](/mapei/resin-flooring/mapefloor-cpu-plus-mf) prints -10°C up to +60°C at 3 mm, -15°C up to +70°C at 4 mm and -25°C up to +80°C at 6 mm.",
      steps: [
        "List every room with its function, wheeled loads, spills, cleaning agents and any static control need.",
        "Name the system and thickness per room, with the data sheet line that lists that use.",
        "Specify the cove: continuous with the floor, its height, and the material, submitted with the method statement.",
        "Set moisture testing to the method on the sheet (Rapid RH and MVER, or the 4% limit) and record results before priming.",
        "For conductive or dissipative floors, state the grade, the earthing layout and the resistance readings to be handed over.",
      ],
    },
  ],
  faq: [
    {
      q: "What is the best flooring material for a hospital?",
      a: "There is no single best one. A seamless resin suits wards, corridors and laboratories; a theatre may need a conductive or dissipative floor; a kitchen needs a floor rated for hot spills; wet rooms often take tiles with epoxy grout. Choose by room and check each data sheet.",
    },
    {
      q: "Is epoxy flooring suitable for hospitals?",
      a: "Several epoxy floors list hospitals among their uses. The X-Tech EpoxyFloor SL sheet lists \"Hospitals\" and Mapefloor I 300 SL ME lists \"laboratories, sterile rooms, and hospitals\". Both need a dry, prepared slab, and both change colour in direct sunlight.",
    },
    {
      q: "What is the operating theatre flooring specification?",
      a: "It is set by the design team, not by the floor maker. UK guidance asks theatre floors to withstand rolling loads of heavy equipment and frequent spills, cleaning and disinfection. Add a cove detail, no threshold strips, and a conductive or dissipative grade if static control is specified.",
    },
    {
      q: "Does Tanzania have a rule for hospital floor finishes?",
      a: "We have not read one, so we do not claim one. Ask the client's health facility team which standard the project follows, and read its floor clauses before the specification is fixed. Until then, UK guidance such as HBN 00-10 is a sound reference.",
    },
    {
      q: "Can a resin floor go on a new slab?",
      a: "Only once the slab passes the moisture test on the product's sheet. Mapefloor CPU+/MF must not go on concrete younger than 7 days, and Mapefloor I 300 SL ME needs 4% moisture or less. The X-Calibur sheets use Rapid RH and MVER tests to choose the primer.",
    },
  ],
  sources: [
    {
      label: "Health Building Note 00-10 Part A: Flooring, NHS England, 2013 (UK guidance)",
      url: "https://www.england.nhs.uk/wp-content/uploads/2021/05/HBN_00-10_Part_A_Final.pdf",
    },
    {
      label: "Static Control Flooring, NIH Office of Research Facilities, Technical Bulletin 78, July 2018",
      url: "https://orf.od.nih.gov/TechnicalResources/Documents/Technical%20Bulletins/18TB/Static%20Control%20Flooring%20July%202018-Technical%20Bulletin_508.pdf",
    },
    {
      label: "X-Tech EpoxyFloor SL technical data sheet, X-Calibur",
      url: "/x-calibur/x-tech-epoxyfloor-sl1",
    },
    {
      label: "X-Tech AntiStatic SLE technical data sheet and method statement, X-Calibur",
      url: "/x-calibur/x-tech-antistatic-sle",
    },
    {
      label: "Mapefloor I 300 SL ME technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-i-300-sl-me",
    },
    {
      label: "Mapefloor CPU+/MF technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-cpu-plus-mf",
    },
    {
      label: "Kerapoxy technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/kerapoxy",
    },
    {
      label: "Ultraplan Eco 20 technical data sheet, Mapei",
      url: "/mapei/primers-levelling/ultraplan-eco-20",
    },
  ],
};
