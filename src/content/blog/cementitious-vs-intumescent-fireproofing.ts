import type { PostContent } from "@/lib/blog";

/**
 * Cementitious or intumescent fireproofing for structural steel.
 * Primary query: cementitious vs intumescent fireproofing.
 *
 * Where each fact comes from:
 * - CMCI product values (density, compressive strength, bond, minimum
 *   temperature, ventilation, passes, field tests, uses, "up to 4 hours",
 *   UL 1709 / exterior use): src/content/cmci/<slug>.json and the data sheets
 *   in public/tds/cmci/ (pdftotext), read 2026-11-21. Z-156T's sheet is a
 *   scan; its values come from its content JSON and the fire statement on
 *   /cmci/fire-rated-cement.
 * - UL Design No. X854 (public/tds/cmci/docs/, a scan read page by page): the
 *   equation, the ranges, ratings 1 to 4 h, ANSI/UL 263, densities 15/14 and
 *   22/19 pcf, "more than one coat", metal lath optional for contour
 *   application, the AHJ disclaimer. The worked example is the output of
 *   columnThickness() in src/config/fire-thickness.ts for the UC 254x254x73
 *   preset there (run on 2026-11-21): perimeter 1,509.4 mm, W/D 0.8266,
 *   raw 1.353 in, rounded up to 1-3/8 in, 35 mm.
 * - Intumescent: only from sources opened on 2026-11-21: Sherwin-Williams
 *   (a coating maker, attributed as such), Designing Buildings, SCI's
 *   steelconstruction.info, and Kenya Engineer's 2024 review (thickness
 *   ranges, attributed as reported). PCI Mag and AISC returned 403 and are
 *   not used.
 * - UL 263 vs UL 1709: Insulation Outlook, "Hourly Fire Ratings, What's the
 *   Deal?" (December 2025). Its 2,000 F timing for the cellulosic curve
 *   contradicts itself, so it is left out.
 * - Tanzania: the National Audit Office report (March 2017), text extracted
 *   from the PDF: regulation 248 as quoted there, regulation 12 of the 2008
 *   certificates regulations, the audit finding in five visited regions.
 *
 * Deliberately left out: every price and cost figure (including the audit's
 * fee figures and the regulation 249 fine), any statement that Tanzanian
 * law requires a given rating (none was found), intumescent thicknesses or
 * ratings from any single product, the maker of the CMCI range, hollow
 * sections (the X854 tool covers open sections only), Aquakote crack
 * bridging (not on its sheet as read), and any climate claim about
 * Tanzanian sites. Sahihi sells no intumescent coating and the post says so.
 */
export const content: PostContent = {
  answer:
    "Cementitious fireproofing is a thick sprayed layer of cement or gypsum that insulates steel before any fire starts. Intumescent fireproofing is a thin paint-like coat that swells into an insulating char when heated. Cementitious usually suits hidden steel, car parks, plant rooms and hard exposure; intumescent usually suits exposed steel where the finish matters. Either is only as good as its listed design, thickness and inspection. We supply the cementitious side only.",
  sections: [
    {
      h2: "How does each type protect steel?",
      body: [
        "Both buy time. Steel loses strength as it heats, and a fire rating is how long a protected member stays below its failure temperature in a furnace test. One is thick on day one; the other becomes thick in the fire.",
        "**Cementitious fireproofing** is a spray-applied fire resistive material (SFRM): a factory-mixed Portland cement or gypsum based powder, mixed with water on site and sprayed onto the steel in more than one coat. Designing Buildings describes it as a barrier that slows heat transfer.",
        "**Intumescent fireproofing** is a coating. The Steel Construction Institute (SCI) explains that it reacts at about 200 to 250°C, and the gases it releases swell the char into an insulating layer. SCI gives a typical expansion of about 50:1 for thin films, so 1 mm becomes about 50 mm. One coating maker, Sherwin-Williams, puts the range at about 10 to 50 times the dry film thickness, depending on the formulation.",
      ].join("\n\n"),
    },
    {
      h2: "Cementitious vs intumescent: side by side",
      body: [
        "Thickness ranges are as reported by Kenya Engineer's 2024 review: typical figures, not design values. The CMCI entries are from our data sheets.",
        "Sherwin-Williams, a coating maker, says cementitious can crack, flake or dust, and that moisture it absorbs can lead to corrosion. Designing Buildings also notes cracking and says cementitious is not always suited to high moisture. Against that, the Monokote Z-106 sheet calls the product moisture resistant in high humidity, and its hardness helps resist accidental physical damage. Grade matters, as the table shows: a lightweight grade in a car park is a specification error, not a property of cementitious products as a whole.",
        "On cost, SCI notes that spray costs do not rise much with thickness, because labour and equipment dominate; Sherwin-Williams argues intumescent often wins on labour and shop application. Price both on your own job.",
      ].join("\n\n"),
      table: {
        caption: "Cementitious and intumescent fireproofing compared",
        head: ["", "Cementitious (sprayed)", "Intumescent (coating)"],
        rows: [
          [
            "How it works",
            "Thick insulating layer, present before the fire",
            "Thin coat that swells into char when heated",
          ],
          [
            "Typical thickness",
            "10 to 50 mm indoors, 8 to 100 mm outdoors. X854 equation: 0.25 to 3.875 in (about 6 to 98 mm)",
            "Acrylic 300 to 750 microns, epoxy 2 to 20 mm indoors; epoxy 5 to 20 mm outdoors",
          ],
          [
            "Ratings",
            "Up to 4 hours on the Z-106, Z-146, Z-156T and MK-6s sheets; X854 lists 1 to 4 hours",
            "SCI: thin films mainly 30, 60 and 90 minutes, some products 120",
          ],
          [
            "Finish",
            "Looks like cement. SCI: sprays are not suited where an aesthetic finish is required",
            "Smooth, paint-like (Sherwin-Williams)",
          ],
          [
            "Where it suits",
            "Hidden steel; car parks and plant rooms (Z-106); exterior and tunnels (Z-146, Z-156T); petrochemical (Avikote)",
            "Exposed steel where appearance matters: airports, arenas, hotels (Sherwin-Williams)",
          ],
          [
            "Interior or exterior",
            "By grade: Z-106 interior; Z-146 exterior exposure; Avikote AV 800 investigated by UL for exterior use",
            "By product: water-based for dry interiors, solvent-based for harsher ones (SCI)",
          ],
          [
            "Knocks and wear",
            "By grade: 68.9 kPa (MK-6/HY) to 3.79 MPa (Z-146) compressive strength",
            "Sherwin-Williams: does not flake, crack or dust",
          ],
          [
            "Where it is applied",
            "On site; needs drying and ventilation",
            "On site or in a shop before the steel is delivered (SCI, Sherwin-Williams)",
          ],
          [
            "What is inspected",
            "Thickness and density (ASTM E605), bond strength (ASTM E736)",
            "Dry film thickness, which depends on section factor and product (SCI)",
          ],
        ],
        source:
          "CMCI data sheets and UL Design X854; Kenya Engineer (2024); Steel Construction Institute; Sherwin-Williams; Designing Buildings. Sahihi supplies no intumescent coating.",
      },
    },
    {
      h2: "Which one for a Tanzanian steel building?",
      body: [
        "Start with where the steel will be seen and what it will face. For a government office, hospital or industrial shed, much of the structural steel often ends up above a ceiling or inside a wall. There the finish does not matter, and a thick sprayed coat is the usual choice. Exposed steel in an entrance hall or atrium is where intumescent earns its place, because nobody wants a column that looks like render.",
        "Car parks, plant rooms and lift shafts take knocks and can be damp, which points to a harder grade: [Monokote Z-106](/cmci/monokote-z-106) names parking garages, mechanical rooms, elevator shafts and swimming pool areas, and [Monokote Z-146](/cmci/monokote-z-146) adds exterior exposure. Refineries, depots and gas plant face a hydrocarbon fire, and that is the domain of [Avikote AV 800](/cmci/avikote-av-800), tested to UL 1709.",
        "Then check the programme. A shop-applied intumescent arrives coated; a sprayed coat waits for the roof, the deck concrete and ventilation.",
        "We supply the CMCI range only, which is all cementitious. We sell no intumescent coating, so for exposed architectural steel ask an intumescent maker for its listed designs.",
      ].join("\n\n"),
    },
    {
      h2: "What do UL designs and hour ratings mean?",
      body: [
        "A rating belongs to a tested system, not to a bag of material, as Insulation Outlook puts it. A UL design is the record of one such system: the steel shape, the product, its density, its thickness and how it is fixed, for each rating. Change any of those and you are outside the design.",
        "UL 263 (the same fire as ASTM E119) uses a cellulosic time-temperature curve, meant to approximate a fire in an occupied building. UL 1709 is the hydrocarbon test: its furnace reaches 2,000°F in under 10 minutes, and it is used mainly for refineries and petrochemical plant. For structural steel the test ends when the average steel temperature reaches 1,000°F or any single thermocouple reaches 1,200°F, under both methods.",
        "[UL Design No. X854](/cmci/fire-rated-cement#thickness), the column design behind our calculator, is an ANSI/UL 263 design for open steel columns at 1, 1-1/2, 2, 3 and 4 hours. It lists four products in the CMCI range: MK-6/HY and MK-6s at a minimum average density of 15 pcf, and Z-106 and Z-106/HY at 22 pcf. The design tells users to consult the Authority Having Jurisdiction before construction.",
      ].join("\n\n"),
      note: "Who sets the hours? The project's fire engineer, under the adopted design code, and the approving authority. Tanzania's Fire Precautions in Buildings Regulations, 2015, as quoted by the National Audit Office, make the Local Authority consult the Fire Authority before it passes building plans (regulation 248). We found no Tanzanian rule fixing a rating for steel. The Fire and Rescue Force is at zimamoto.go.tz. This is not legal advice.",
    },
    {
      h2: "How thick is 2 hour fireproofing? A worked example",
      body: [
        "It depends on the steel as well as the hours: a heavy section with a short heated perimeter heats slowly and needs less. X854 gives the equation h = R / (1.05 (W/D) + 0.61), where h is the thickness in inches, R the rating in hours, W the column weight in lb per foot and D the heated perimeter in inches. It is valid for W/D from 0.338 to 6.76 and gives 0.25 to 3.875 in.",
        "Take a UC 254x254x73 column, contour sprayed on four sides: 73.1 kg/m, depth 254.1 mm, width 254.6 mm, web 8.6 mm. Our calculator takes the heated perimeter as 2d + 4b - 2tw and rounds up to the next 1/16 in, then to whole millimetres.",
      ].join("\n\n"),
      steps: [
        "Heated perimeter D = 2 x 254.1 + 4 x 254.6 - 2 x 8.6 = 1,509.4 mm, which is 59.43 in.",
        "Weight W = 73.1 kg/m x 0.671969 = 49.12 lb/ft.",
        "W/D = 49.12 / 59.43 = 0.827, inside the 0.338 to 6.76 range.",
        "For 2 hours: h = 2 / (1.05 x 0.827 + 0.61) = 2 / 1.478 = 1.353 in.",
        "Rounded up to the next 1/16 in: 1-3/8 in (1.375 in), which is 35 mm.",
      ],
      table: {
        caption: "UC 254x254x73 by the UL X854 equation (W/D 0.827)",
        head: ["Rating", "Inches", "Millimetres"],
        rows: [
          ["1 hour", "11/16", "18"],
          ["1-1/2 hours", "1-1/16", "27"],
          ["2 hours", "1-3/8", "35"],
          ["3 hours", "2-1/16", "53"],
          ["4 hours", "2-3/4", "70"],
        ],
        source:
          "UL Design No. X854 equation, rounded as the calculator on /cmci/fire-rated-cement rounds",
      },
    },
    {
      h2: "What goes in a fireproofing submittal?",
      body: [
        "A submittal lets the fire engineer and the authority check every member against a listed design. Ask for any missing line before spraying starts. Run your own section through the [thickness calculator](/cmci/fire-rated-cement#thickness), and check floor and roof deck in the [deck coat tool](/cmci/fire-rated-cement#deck).",
      ].join("\n\n"),
      list: [
        "**UL design number** for each member type: column, beam, deck. X854 for open columns, D780 for the deck assemblies it covers.",
        "**Product type** as named in that design, with its data sheet.",
        "**Density**: the design's minimum average, 15 pcf (240 kg/m3) for MK-6/HY and 22 pcf (352 kg/m3) for Z-106.",
        "**Thickness schedule**: each section, its W/D and thickness, by the equation or the design's table.",
        "**Bond**: the sheet value, for example 2,000 psf (94.5 kN/m2) minimum for Monokote Z-106/HY, and the bond test plan.",
        "**Primer**: whether the shop primer on the steel suits the fireproofing. The Z-106 sheet makes that the project architect's call.",
        "**Field tests**: thickness and density to ASTM E605, bond to ASTM E736.",
        "**Delivery**: the Z-106 sheet asks for original unopened bags carrying the manufacturer's name, the brand and the UL labels.",
        "**Topcoat**, where the coat is exposed: for example [Aquakote](/cmci/aquakote), an acrylic topcoat that resists carbon dioxide and chloride ions.",
      ],
    },
    {
      h2: "Application notes from the data sheets",
      body: [
        "These points come from the Monokote MK-6/HY and Z-106 sheets unless named. Read the sheet for your grade before the first pass.",
        "Check the firm that will spray it as you would any specialist: see [CRB classes and how to check a contractor](/blog/construction-companies-tanzania-crb-classes). We supply the material and the data sheets; we do not apply or certify fireproofing.",
      ].join("\n\n"),
      list: [
        "**Temperature**: at least 4.4°C (40°F) air and substrate, for 24 hours before, during and 24 hours after application. Avikote AV 800 gives 4°C (38°F).",
        "**Ventilation**: in enclosed areas without natural ventilation, provide at least 4 total air changes per hour until the material is substantially dry.",
        "**Clean steel**: no oil, grease, loose mill scale, excess rust or non-compatible primer. Cleaning falls to the general contractor.",
        "**Concrete**: an approved bonding agent on concrete substrates first, such as [FR Bonding Agent](/cmci/fr-bonding-agent).",
        "**Sequence**: no fireproofing before the concrete work on the steel deck is finished; under roof decks only after roofing is complete and roof traffic has stopped.",
        "**Passes**: about 13 mm or less in one pass; 16 mm or more in further passes after the first coat has set.",
        "**Adhesion**: poor adhesion is usually a too wet mix, poor thickness control or a dirty substrate.",
        "**Corrosion**: the Avikote AV 800 sheet says it neither prevents nor promotes corrosion and, for some environments, calls for a corrosion-inhibitive, non-alkali-sensitive coating on the steel first.",
      ],
    },
  ],
  faq: [
    {
      q: "What is cementitious fireproofing?",
      a: "A spray-applied fire resistive material made from Portland cement or gypsum, mixed with water on site and sprayed onto structural steel. In the CMCI range, dry densities run from 240 kg/m3 (Monokote MK-6/HY) to 800 kg/m3 (Monokote Z-156T and Avikote AV 800).",
    },
    {
      q: "How thick is 2 hour fireproofing?",
      a: "It depends on the section. By the UL X854 equation, a UC 254x254x73 column (W/D 0.827) needs 1-3/8 in, about 35 mm, for 2 hours. A lighter section needs more: a UC 203x203x46 needs 1-9/16 in, about 40 mm. Use the calculator for your section and have the fire engineer approve it.",
    },
    {
      q: "Is intumescent better than cementitious fireproofing?",
      a: "Neither is better everywhere. Intumescent gives a thin, paint-like finish and can be shop-applied, which suits exposed steel. Cementitious is thicker, and its harder grades suit car parks, plant rooms, exterior and petrochemical exposure. Choose by exposure, finish, rating and listed design.",
    },
    {
      q: "Does Sahihi sell intumescent paint?",
      a: "No. We supply the CMCI range, which is cementitious fireproofing, with a topcoat, an accelerator and a bonding agent. It is supplied to order from Dar es Salaam. For an intumescent coating, ask its maker for the listed designs that match your steel.",
    },
    {
      q: "Does Tanzanian law require a 2 hour fire rating on steel?",
      a: "We found no Tanzanian rule that fixes a rating for steel. The 2015 Fire Precautions in Buildings Regulations, as quoted by the National Audit Office, require the Local Authority to consult the Fire Authority before passing plans. The rating comes from the design code and the approving authority.",
    },
  ],
  sources: [
    {
      label:
        "National Audit Office, Performance audit report on the enforcement of fire safety in public buildings (March 2017)",
      url: "https://www.nao.go.tz/uploads/P.A-REPORT-ON-THE-ENFORCEMENT-OF-FIRE-SAFETY-IN-PUBLIC-BUILDINGS-2016-2017.pdf",
    },
    {
      label: "Tanzania Fire and Rescue Force",
      url: "https://zimamoto.go.tz/",
    },
    {
      label: "Steel Construction Institute, Fire protecting structural steelwork",
      url: "https://www.steelconstruction.info/Fire_protecting_structural_steelwork",
    },
    {
      label: "Designing Buildings, Cementitious fire protection",
      url: "https://www.designingbuildings.co.uk/wiki/Cementitious_fire_protection",
    },
    {
      label:
        "Sherwin-Williams, Cementitious (SFRM) vs. Intumescent (IFRM) Fireproofing Solutions",
      url: "https://industrial.sherwin-williams.com/na/us/en/protective-marine/media-center/articles/intumescent-cementitious-fireproofing-options.html",
    },
    {
      label:
        "Kenya Engineer, Structural Fire Protection for Commercial Buildings, 2024 review",
      url: "https://www.kenyaengineer.co.ke/?p=7965",
    },
    {
      label: "Insulation Outlook, Hourly Fire Ratings: What's the Deal? (December 2025)",
      url: "https://insulation.org/io/articles/hourly-fire-ratings-whats-the-deal/",
    },
    {
      label: "UL Design No. X854, columns, open sections (PDF)",
      url: "/tds/cmci/docs/ul-design-x854-columns-open-section.pdf",
    },
    {
      label: "Monokote Z-106 technical data sheet",
      url: "/cmci/monokote-z-106",
    },
    {
      label: "Monokote MK-6/HY technical data sheet",
      url: "/cmci/monokote-mk-6-hy",
    },
    {
      label: "Monokote Z-106/HY technical data sheet",
      url: "/cmci/monokote-z-106-hy",
    },
    {
      label: "Monokote Z-146 technical data sheet",
      url: "/cmci/monokote-z-146",
    },
    {
      label: "Avikote AV 800 technical data sheet",
      url: "/cmci/avikote-av-800",
    },
  ],
};
