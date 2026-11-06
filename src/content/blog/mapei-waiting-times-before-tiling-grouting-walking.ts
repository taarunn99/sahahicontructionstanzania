import type { PostContent } from "@/lib/blog";

/**
 * Every wait below is in src/content/mapei/<slug>.json, as printed there.
 * The "printed at" conditions are the headings of the APPLICATION DATA
 * tables in the PDFs (public/tds/mapei/), read one by one; a row with no
 * such heading over that value says "Not stated". The Dar es Salaam climate
 * figures are D6 in docs/research/blog/06-tanzania-context.md.
 */
export const content: PostContent = {
  answer:
    "Mapelastic Easy needs at least 5 days before ceramic tiles, and Mapelastic AquaDefense needs 3 to 4 hours. Tile adhesives take 24 hours before floor grouting and light foot traffic, and 4 to 8 hours before wall grouting. Ultraplan levelling compounds take a minimum of 3 hours before tiles. Most of these times are printed at +23°C and 50% relative humidity, so treat them as minimums and check the surface.",
  sections: [
    {
      h2: "How long before tiling over Mapelastic?",
      body: [
        "It depends which Mapelastic is on the floor. [Mapelastic Easy](/mapei/waterproofing/mapelastic-easy) says to wait at least 5 days for curing before laying ceramic tiles. [Mapelastic AquaDefense](/mapei/waterproofing/mapelastic-aquadefense) is the quick one: 3-4 hours in the table and 4 hours after the second coat in the body of the same sheet, so work to the longer figure. [Mapelastic Foundation](/mapei/waterproofing/mapelastic-foundation) gives approximately 6 hours between coats and no wait before tiling.",
        "The usual mistake is a tiler arriving the next morning because the Easy looks dry. Looking dry is not the test, since the sheet calls those 5 days curing. It adds that the wait can be longer in cold conditions and may be reduced in good weather, with no figure for either, so 5 days is the number to plan on.",
        "On an open terrace in the masika or vuli rains, the first day matters most. Easy and Foundation both say to protect the coat from rain for the first 24 hours.",
        "[Mapelastic Smart](/mapei/waterproofing/mapelastic-smart) is not in the table because its current data sheet is not yet on our file. Check the current sheet before planning around a number.",
      ].join("\n\n"),
      table: {
        caption: "Membranes and water-repellent treatments: waits as printed",
        head: ["Product", "Next coat", "Before tiling", "Other waits", "Printed at"],
        rows: [
          [
            "Mapelastic AquaDefense",
            "approx. 60 minutes (when dry touch)",
            "3-4 hours",
            "Complete drying of 1 mm layer: 12 hours",
            "+23°C, 50% R.H.",
          ],
          [
            "Mapelastic Easy",
            "Not stated",
            "At least 5 days",
            "Protect from rain and water spillages: first 24 hours",
            "Not stated",
          ],
          [
            "Mapelastic Foundation",
            "Approximately 6 hours",
            "Not stated",
            "Protect from rain and water contact: first 24 hours",
            "Not stated",
          ],
          [
            "[Planiseal 88](/mapei/waterproofing/planiseal-88)",
            "After 5 hours, no later than 24 hours",
            "Not stated",
            "Into service: 7 days",
            "+20°C, 50% R.H.",
          ],
          [
            "[Mapecoat DW 25](/mapei/resin-flooring/mapecoat-dw-25)",
            "6-24 hours",
            "Not stated",
            "Film sets: 4-5 hours. Final hardening: 7 days",
            "+23°C, 50% R.H.",
          ],
          [
            "[Antipluviol](/mapei/waterproofing/antipluviol)",
            "Wet-on-wet",
            "Not stated",
            "Drying time: 1-2 hours",
            "Not stated",
          ],
        ],
        source: "Mapei technical data sheets",
      },
    },
    {
      h2: "How long before grouting and walking on tile adhesive?",
      body: [
        "On floors, 24 hours for both grouting and foot traffic. On walls, grout after 4 to 8 hours. All four cementitious adhesives print the same figures, under a heading of +23°C and 50% relative humidity.",
        "The wall range is not a free choice. [Mapeset](/mapei/tile-adhesives-grouts/mapeset) and [Adesilex P7](/mapei/tile-adhesives-grouts/adesilex-p7) tie it to absorbency, so a dense tile on a dense background belongs at the long end. Grout too soon and the pressure of the float can shift a tile that has not yet gripped.",
        "Foot traffic at 24 hours means someone walking with care. It does not mean a loaded wheelbarrow or stacked boxes of tile. Ready for use is 14 days, and [Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1) adds that swimming pools and basins may be filled 21 days after application.",
        "None of these is a fast adhesive. The Mapeset, [Kerabond T](/mapei/tile-adhesives-grouts/kerabond-t) and Keraflex Maxi S1 sheets each say not to use the product where a floor must go back into use quickly. If a shop or kitchen cannot close for a day, settle that before the tiles are bought.",
      ].join("\n\n"),
      table: {
        caption: "Adhesives: waits as printed",
        head: ["Product", "Grout walls", "Grout floors", "Foot traffic", "Ready for use"],
        rows: [
          [
            "Mapeset",
            "after 4 to 8 hours depending on absorbency",
            "after 24 hours",
            "24 hours",
            "14 days",
          ],
          ["Kerabond T", "after 4-8 hours", "after 24 hours", "24 hours", "14 days"],
          [
            "Adesilex P7",
            "after 4-8 hours depending on absorbency",
            "after 24 hours",
            "24 hours",
            "14 days",
          ],
          [
            "Keraflex Maxi S1",
            "after 4-8 hours",
            "after 24 hours",
            "24 hours",
            "14 days. Pools: 21 days",
          ],
          [
            "[Lignobond](/mapei/primers-levelling/lignobond) (parquet)",
            "Not applicable",
            "Not applicable",
            "after 24 hours",
            "Sanding: after approximately 3 days",
          ],
        ],
        source:
          "Mapei technical data sheets. Tile adhesives at +23°C and 50% R.H. Lignobond sanding depends on the surrounding temperature",
      },
    },
    {
      h2: "How long before a grouted floor can be used?",
      body: [
        "Light foot traffic at 24 hours for both grouts, then 3 days to ready for use for [Keracolor FF](/mapei/tile-adhesives-grouts/keracolor-ff) and 4 days for [Kerapoxy](/mapei/tile-adhesives-grouts/kerapoxy). Water-holding work takes longer: 7 days for Keracolor FF in tanks and swimming pools, 10 days for Kerapoxy in basins and swimming pools.",
        "Keracolor FF has one short wait that catches people out. After filling the joints, the sheet gives 10-20 minutes before finishing. Clean too early and the sponge drags grout out of the joint. Leave it too long on a hot slab and it becomes hard work to clean. Never loosen a stiffening mix with water: the sheet forbids adding water to a mixture that is beginning to set.",
        "Kerapoxy says plainly that its times may vary according to the temperature. Its foot traffic time is given at +20°C and its 4 days at +23°C. It also has the narrower working range, from +12°C to +30°C, so an exposed slab in the afternoon sun can be outside it.",
        "If a sealer follows, [UltraCare Stain Protector W Plus](/mapei/tile-adhesives-grouts/ultracare-stain-protector-w-plus) needs 2 hours. Its sheet says not to apply it in direct sunlight or if rain is forecast within the next few hours.",
      ].join("\n\n"),
      table: {
        caption: "Grouts and sealer: waits as printed",
        head: ["Product", "Before finishing or next coat", "Light foot traffic", "Ready for use"],
        rows: [
          [
            "Keracolor FF",
            "Finishing: 10-20 minutes",
            "24 hours",
            "3 days (7 days for tanks and swimming pools)",
          ],
          [
            "Kerapoxy",
            "Not stated",
            "24 h",
            "4 days (10 days for basins and swimming pools)",
          ],
          [
            "UltraCare Stain Protector W Plus",
            "Second coat, where needed: 2 hours",
            "2 hours",
            "Surface drying: 2 hours",
          ],
        ],
        source: "Mapei technical data sheets, at +23°C and 50% R.H. except where the text says otherwise",
      },
    },
    {
      h2: "How long before tiling or flooring over self-levelling compound?",
      body: [
        "A minimum of 3 hours before ceramic tiles and light foot traffic, on both compounds. They differ only at the wood line: 48 hours for [Ultraplan Eco 20](/mapei/primers-levelling/ultraplan-eco-20), whose sheet is titled Ultraplan EC20, and 24 hours for [Ultraplan Contract](/mapei/primers-levelling/ultraplan-contract), which must also be at least 3 mm thick under wood.",
        "Every figure is a minimum at +23°C, and both sheets say the time can vary with room temperature and humidity. The EC20 sheet adds the thickness of the levelling. So a 10 mm pour in a closed, humid room is not the same job as a 2 mm skim with the windows open, even though the table gives one number for both.",
        "Heat cuts the other way. Pot life is only 20-30 minutes on the EC20 sheet, which says not to attempt large areas above +30°C and to avoid exterior work in direct sunlight. On a hot day in Dar es Salaam, mix smaller batches and pour early. Neither compound is for exterior use.",
      ].join("\n\n"),
      table: {
        caption: "Levelling compounds: minimum waits as printed, at +23°C",
        head: ["Product", "Foot traffic", "Ceramic tiles", "Resilient", "Wood"],
        rows: [
          ["Ultraplan Eco 20", "min. 3 h", "min. 3 h", "min. 24 h (also carpet)", "min. 48 h"],
          ["Ultraplan Contract", "min. 3 h", "min. 3 h", "min. 24 h", "min. 24 h"],
        ],
        source: "Mapei technical data sheets",
      },
    },
    {
      h2: "How long should a primer dry before the next coat?",
      body: [
        "[Primer G](/mapei/primers-levelling/primer-g) takes 30 minutes on concrete and 30-60 minutes on gypsum before the levelling compound or adhesive goes on. The two epoxy-based primers take far longer and, more to the point, they also have a deadline.",
        "[Primer SN](/mapei/resin-flooring/primer-sn) needs a minimum of 12 hours, then a maximum of 48 hours if it has no quartz sand on top. With a dry-shake finish of quartz sand there is no maximum limit, provided the surface is dry with no dust. If the floor layer might not turn up on time, that decides how you finish the primer.",
        "[Triblock P](/mapei/primers-levelling/triblock-p) has two windows. Its second coat follows the first after 4-6 hours. The floor or smoothing compound then goes on from a minimum of 24 hours up to a maximum of 7 days.",
        "A primer laid before a long holiday and forgotten is how these windows get missed. The sheets give no remedy in these figures, so write the dates on the wall in chalk.",
      ].join("\n\n"),
      table: {
        caption: "Primers: waits as printed, at +23°C and 50% R.H.",
        head: ["Product", "Before the next coat or layer", "Light foot traffic", "Full hardening"],
        rows: [
          ["Primer G", "Concrete: 30 min. Gypsum: 30-60 min", "Not stated", "Not stated"],
          [
            "Primer SN",
            "No quartz: min. 12 h, max. 48 h. With quartz: min. 12 h, no maximum",
            "approx. 24 hours",
            "approx. 7 days",
          ],
          [
            "Triblock P",
            "Between coats: 4-6 hours. Further applications: 24 hours up to 7 days",
            "24 hours",
            "7 days",
          ],
        ],
        source: "Mapei technical data sheets",
      },
    },
    {
      h2: "How do heat and humidity change these times?",
      body: [
        "Heat shortens them and humidity usually lengthens them, but almost no sheet gives you a figure for either. The membrane, tile adhesive, grout, levelling and primer times above come with no hot-weather value, so we will not invent one.",
        "Dar es Salaam is not the laboratory. [A published study](https://europepmc.org/article/PMC/PMC5854744) gives monthly relative humidity there as 77 to 86% and the annual mean air temperature as about 26°C, against the 50% and +23°C in most sheet headings.",
        "The table shows what Mapei does print, all for resin products. In cement products, heat works against you in a different way: all four adhesive sheets warn that strong sun, drying wind or high temperature can cut open time to a few minutes. A cement mix that loses its water to a hot slab has dried without curing properly, so a warm day is no reason to grout early.",
        "Humidity is slower to show. Water-based products such as Primer G dry by losing water to the air, and humid air takes it up more slowly. [Mapefloor FC 200 ME](/mapei/resin-flooring/mapefloor-fc-200-me) goes further and sets a limit: the air's relative humidity should not be greater than 75%. Measure on the day.",
      ].join("\n\n"),
      table: {
        caption: "Where Mapei prints one time at two temperatures",
        head: ["Product and time", "Cooler", "Hotter"],
        rows: [
          ["Lignobond, setting time", "+20°C: 8 hours", "+30°C: 3 hours"],
          [
            "[Epojet LV](/mapei/concrete-repair/epojet-lv), setting time",
            "+23°C: 7-8 hours",
            "+30°C: 2-3 hours",
          ],
          [
            "[Eporip](/mapei/concrete-repair/eporip), open time",
            "+23°C: 3-4 hours",
            "+30°C: 1 hour 30 minutes-2 hours 30 minutes",
          ],
          [
            "[Mapefix EP 50](/mapei/concrete-repair/mapefix-ep-50), load time, dry substrate",
            "+20°C: 12 h",
            "+35°C: 7 h",
          ],
        ],
        source: "Mapei technical data sheets",
      },
      note: "Do not add these rows into one programme for a job. The sheets give a minimum for each step at their own stated conditions, and each product page has the full data sheet as a PDF.",
    },
  ],
  faq: [
    {
      q: "How long before I can tile over Mapelastic?",
      a: "Mapelastic Easy: at least 5 days. Mapelastic AquaDefense: 3-4 hours in the table and 4 hours after the second coat in the text, at +23°C and 50% relative humidity. The Mapelastic Foundation sheet states no wait before tiling.",
    },
    {
      q: "How long before grouting floor tiles?",
      a: "After 24 hours on Mapeset, Kerabond T, Adesilex P7 and Keraflex Maxi S1. Wall tiles can be grouted after 4 to 8 hours. Mapeset and Adesilex P7 say the wall time depends on absorbency.",
    },
    {
      q: "How soon can I walk on a self-levelling compound?",
      a: "Ultraplan Eco 20 and Ultraplan Contract both print a minimum of 3 hours at +23°C before light foot traffic. Both sheets say the time can vary with room temperature and humidity.",
    },
    {
      q: "Do drying times change in hot, humid weather?",
      a: "Yes, but most sheets give only one reference condition, usually +23°C and 50% relative humidity. Epojet LV, Eporip, Lignobond and Mapefix EP 50 print hotter figures, and they are shorter. Do not shorten any other wait on a guess.",
    },
  ],
  sources: [
    { label: "Mapelastic Easy technical data sheet, Mapei", url: "/mapei/waterproofing/mapelastic-easy" },
    { label: "Mapelastic AquaDefense technical data sheet, Mapei", url: "/mapei/waterproofing/mapelastic-aquadefense" },
    { label: "Mapelastic Foundation technical data sheet, Mapei", url: "/mapei/waterproofing/mapelastic-foundation" },
    { label: "Planiseal 88 technical data sheet, Mapei", url: "/mapei/waterproofing/planiseal-88" },
    { label: "Mapecoat DW 25 technical data sheet, Mapei", url: "/mapei/resin-flooring/mapecoat-dw-25" },
    { label: "Antipluviol technical data sheet, Mapei", url: "/mapei/waterproofing/antipluviol" },
    { label: "Mapeset technical data sheet, Mapei", url: "/mapei/tile-adhesives-grouts/mapeset" },
    { label: "Kerabond T technical data sheet, Mapei", url: "/mapei/tile-adhesives-grouts/kerabond-t" },
    { label: "Adesilex P7 technical data sheet, Mapei", url: "/mapei/tile-adhesives-grouts/adesilex-p7" },
    { label: "Keraflex Maxi S1 technical data sheet, Mapei", url: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1" },
    { label: "Lignobond technical data sheet, Mapei", url: "/mapei/primers-levelling/lignobond" },
    { label: "Keracolor FF technical data sheet, Mapei", url: "/mapei/tile-adhesives-grouts/keracolor-ff" },
    { label: "Kerapoxy technical data sheet, Mapei", url: "/mapei/tile-adhesives-grouts/kerapoxy" },
    { label: "UltraCare Stain Protector W Plus technical data sheet, Mapei", url: "/mapei/tile-adhesives-grouts/ultracare-stain-protector-w-plus" },
    { label: "Ultraplan Eco 20 technical data sheet (titled Ultraplan EC20), Mapei", url: "/mapei/primers-levelling/ultraplan-eco-20" },
    { label: "Ultraplan Contract technical data sheet, Mapei", url: "/mapei/primers-levelling/ultraplan-contract" },
    { label: "Primer G technical data sheet, Mapei", url: "/mapei/primers-levelling/primer-g" },
    { label: "Primer SN technical data sheet, Mapei", url: "/mapei/resin-flooring/primer-sn" },
    { label: "Triblock P technical data sheet, Mapei", url: "/mapei/primers-levelling/triblock-p" },
    { label: "Epojet LV technical data sheet, Mapei", url: "/mapei/concrete-repair/epojet-lv" },
    { label: "Eporip technical data sheet, Mapei", url: "/mapei/concrete-repair/eporip" },
    { label: "Mapefix EP 50 technical data sheet, Mapei", url: "/mapei/concrete-repair/mapefix-ep-50" },
    { label: "Mapefloor FC 200 ME technical data sheet, Mapei", url: "/mapei/resin-flooring/mapefloor-fc-200-me" },
    {
      label: "Effect of urban design on microclimate and thermal comfort outdoors in warm-humid Dar es Salaam, International Journal of Biometeorology, 2018",
      url: "https://europepmc.org/article/PMC/PMC5854744",
    },
  ],
};
