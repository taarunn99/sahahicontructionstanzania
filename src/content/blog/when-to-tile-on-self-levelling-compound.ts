import type { PostContent } from "@/lib/blog";

/**
 * How soon can you tile or lay vinyl on levelling compound.
 * Primary query: self levelling compound drying time.
 *
 * Waiting times are quoted as printed in the Ultraplan EC20 (stocked as
 * Ultraplan Eco 20) and Ultraplan Contract data sheets, from
 * src/content/mapei/*.json. The Ultraplan Contract sheet prints no carpet
 * figure, so that cell is empty on purpose. Neither sheet says how much
 * longer drying takes in humid air, and the post does not either.
 */
export const content: PostContent = {
  answer:
    "The data sheets for the two self-levelling compounds we stock give a minimum of 3 hours before light foot traffic and ceramic tiles, 24 hours before vinyl and other resilient floors, and 24 or 48 hours before wood, depending on the product. Those are minimums at +23°C. Thickness, room temperature and humidity all change the wait, so in humid coastal air treat them as the earliest possible time.",
  sections: [
    {
      h2: "How long to wait before each floor finish",
      body: [
        "The wait depends on what goes on top: 3 hours for ceramic tiles, 24 hours for resilient floors, and 24 or 48 hours for wood. The table gives the minimums exactly as the two data sheets print them, for [Ultraplan Eco 20](/mapei/primers-levelling/ultraplan-eco-20) and [Ultraplan Contract](/mapei/primers-levelling/ultraplan-contract).",
        "Resilient is the trade word for vinyl sheet and tile, LVT, linoleum and rubber. SPC planks are a vinyl product too; treat 24 hours as the earliest for them and follow the plank maker's own subfloor rules as well. The Ultraplan Contract sheet prints no separate figure for carpet, so that cell is left empty.",
        "The one real difference between the products is under timber. Ultraplan Contract can take a wooden floor after 24 hours, provided the layer is at least 3 mm thick. Ultraplan Eco 20 needs 48 hours. On a programme where the floor layer is booked for the next day, that decides which bag to buy.",
      ].join("\n\n"),
      table: {
        caption:
          "Minimum waiting time before light foot traffic and before each floor finish, as printed on the data sheets.",
        head: ["Stage or finish", "Ultraplan Eco 20", "Ultraplan Contract"],
        rows: [
          ["Light foot traffic", "min. 3 h", "min. 3 h"],
          ["Ceramic tiles", "min. 3 h", "min. 3 h"],
          ["Resilient floors (vinyl, LVT)", "min. 24 h", "min. 24 h"],
          ["Carpet", "min. 24 h", ""],
          ["Wood flooring", "min. 48 h", "min. 24 h"],
        ],
        source:
          "Mapei technical data sheets for Ultraplan EC20 (stocked as Ultraplan Eco 20) and Ultraplan Contract, values at +23°C",
      },
      note: "These are minimums at +23°C. They are not a promise that a floor in humid air is dry enough for vinyl or wood at that hour.",
    },
    {
      h2: "Set, walkable and ready to cover are three different times",
      body: [
        "A levelling compound passes several milestones, and most trouble comes from treating an early one as if it were the last. A layer that looks dry and feels hard has only set. It has not yet given up enough water for a floor finish to be bonded to it.",
        "Walkable means light foot traffic: a person crossing the floor to work, not a loaded trolley, a scaffold tower or a stack of tile boxes. The strength is still building. The Ultraplan Contract sheet gives 12 MPa in compression after 1 day, 20 MPa after 7 days and 30 MPa after 28 days.",
        "On a large floor the first bay is ahead of the last, so time every wait from the final pour, not the first.",
      ].join("\n\n"),
      list: [
        "**Workable.** Each mix must be placed within 20 to 30 minutes at +23°C.",
        "**Set.** The Ultraplan Eco 20 sheet gives a setting time of 45 to 60 minutes.",
        "**Walkable.** Both sheets give a minimum of 3 hours before light foot traffic. This is also when to pour a second layer if one is needed. If the first has dried out completely, both sheets call for a primer before the next.",
        "**Ready to cover.** From 3 hours to 48 hours, depending on the finish.",
      ],
    },
    {
      h2: "Why tiles can go down after three hours",
      body: [
        "Ceramic tiles can be fixed after a minimum of 3 hours on both compounds, the same point at which the layer takes light foot traffic. A cement-based tile adhesive tolerates the moisture still in a young levelling layer in a way that a vinyl adhesive or a timber board does not, which is why this is the shortest wait in the table. The Ultraplan Eco 20 sheet gives the same 3 hours for natural stone it describes as non-sensitive, fixed with adhesive.",
        "Three hours is when tiling may start, not when the room is finished. An adhesive such as [Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1) has its own clock: its sheet gives 24 hours before grouting floor joints and 24 hours before foot traffic. So a floor levelled in the morning can be tiled that afternoon and grouted the next day. Plan the kneeling boards and the tile stacks around a layer that is still young.",
      ].join("\n\n"),
    },
    {
      h2: "Why vinyl, carpet and wood have to wait longer",
      body: [
        "Vinyl, carpet and wood wait longer because they either seal the floor or react to moisture themselves. A sheet of vinyl is close to vapour-tight. Glue it over a layer that is still giving off water and the water has nowhere to go; the usual results are blisters, a softened adhesive and lifting seams. Both data sheets give a minimum of 24 hours for resilient floors.",
        "Timber is harder still, because the board takes up moisture and moves. Ultraplan Eco 20 asks for 48 hours before wood flooring. Ultraplan Contract asks for 24 hours and a layer no thinner than 3 mm.",
        "The parquet adhesive sets rules of its own. The [Lignobond](/mapei/primers-levelling/lignobond) sheet says not to lay in rooms where the doors and windows have not been installed, not to lay on screeds unprotected against rising damp, and to check the humidity of the screed with an electric or carbide hygrometer. The limit to meet is the one set by the flooring manufacturer.",
      ].join("\n\n"),
    },
    {
      h2: "What the data sheet times assume",
      body: [
        'Every waiting time above is a minimum measured at +23°C, and the Ultraplan Eco 20 sheet heads its application data "at +23°C - 50% R.H.". Both sheets add that the time can vary with room temperature and humidity; the Ultraplan Eco 20 sheet adds the thickness of the layer.',
        "Dar es Salaam is not a room at 23 degrees and 50% humidity. The city's climate table for 1991 to 2020 shows mean relative humidity between 75% in September and 84% in April, and mean daily maximum temperatures from 29.7°C in July to 32.8°C in February. Heat and humidity pull in opposite directions. In general, warmth shortens the working time of a cement-based mix, and the Ultraplan Eco 20 sheet says not to attempt large areas above +30°C. Humid, still air slows the drying that vinyl and wood depend on.",
        "Neither sheet says how many extra hours that costs, so this article does not either. What can be said is practical: a 10 mm layer holds more water than a 2 mm one, a closed room in the rains dries more slowly than one with moving air, and for vinyl or wood the decision should rest on a moisture reading, not on the clock.",
      ].join("\n\n"),
    },
    {
      h2: "When the slab underneath is the real problem",
      body: [
        "If a levelling layer will not dry, the water may be coming from the slab, and no waiting time fixes that. Both data sheets say not to use these compounds on substrates subject to continuous rising damp. A young slab that is still drying out, or a ground floor cast with no membrane beneath it, keeps feeding moisture upward, and the levelling layer passes it on to the vinyl or the timber.",
        "Where a damp slab can be treated, the treatment goes under the compound, not over it. [Triblock P](/mapei/primers-levelling/triblock-p) is an epoxy-cementitious primer for damp substrates, including cementitious floors whose residual humidity is above the level recommended for wooden, resilient and resin floors. Its sheet excludes surfaces with free-standing water and old smoothing layers, so it is applied to the slab itself. The next layer follows after approximately 24 hours and within 7 days. On dry concrete the ordinary primer is [Primer G](/mapei/primers-levelling/primer-g).",
      ].join("\n\n"),
    },
  ],
  faq: [
    {
      q: "How long until I can walk on self-levelling compound?",
      a: "Both data sheets give a minimum of 3 hours before light foot traffic, measured at +23°C. Light means a person walking across it. Keep trolleys, towers and stacked materials off for longer.",
    },
    {
      q: "How long before I can tile over self-levelling compound?",
      a: "A minimum of 3 hours for ceramic tiles on both Ultraplan Eco 20 and Ultraplan Contract, at +23°C. The tile adhesive then needs its own time before grouting and foot traffic.",
    },
    {
      q: "How long before a wooden floor can go down?",
      a: "A minimum of 48 hours on Ultraplan Eco 20. On Ultraplan Contract, 24 hours, and the layer must be at least 3 mm thick. Check the moisture in the floor against the limit set by the wood flooring manufacturer before laying.",
    },
    {
      q: "Does humidity slow the drying of self-levelling compound?",
      a: "Yes. Both data sheets say the waiting time can vary with room temperature and humidity, and their figures are measured at +23°C. Neither gives a figure for humid conditions, so test the floor before laying vinyl or wood.",
    },
  ],
  sources: [
    {
      label:
        "Ultraplan Eco 20 technical data sheet (printed title Ultraplan EC20), Mapei",
      url: "/mapei/primers-levelling/ultraplan-eco-20",
    },
    {
      label: "Ultraplan Contract technical data sheet, Mapei",
      url: "/mapei/primers-levelling/ultraplan-contract",
    },
    {
      label: "Keraflex Maxi S1 technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1",
    },
    {
      label: "Lignobond technical data sheet, Mapei",
      url: "/mapei/primers-levelling/lignobond",
    },
    {
      label: "Triblock P technical data sheet, Mapei",
      url: "/mapei/primers-levelling/triblock-p",
    },
    {
      label:
        "Dar es Salaam climate table, 1991 to 2020 (Wikipedia, crediting NOAA and Deutscher Wetterdienst)",
      url: "https://en.wikipedia.org/wiki/Dar_es_Salaam",
    },
  ],
};
