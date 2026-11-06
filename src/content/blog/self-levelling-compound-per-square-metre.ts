import type { PostContent } from "@/lib/blog";

/**
 * Self-levelling compound: how many bags per square metre.
 * Primary query: self levelling compound per m2.
 *
 * Every rate, bag size, water figure and limit is from the Ultraplan EC20
 * (stocked as Ultraplan Eco 20), Ultraplan Contract and Primer G data
 * sheets, as extracted in src/content/mapei/*.json and modelled in
 * src/config/mapei-coverage.ts. The bag counts are
 * ceil(rate x area x thickness / bag weight).
 */
export const content: PostContent = {
  answer:
    "The two self-levelling compounds we stock use 1.6 and 1.7 kg of powder per square metre for every millimetre of thickness. Multiply the rate by the floor area and by the average thickness, divide by the bag weight and round up. A 20 m² room at an average of 5 mm takes 160 to 170 kg, which is seven bags at either 23 or 25 kg a bag.",
  sections: [
    {
      h2: "How many kilograms per square metre self-levelling compound uses",
      body: [
        "Self-levelling compound is ordered in kilograms per square metre for each millimetre of thickness, and the rate is printed on the product's data sheet. [Ultraplan Eco 20](/mapei/primers-levelling/ultraplan-eco-20) uses 1.6 kg/m² per mm and comes in 23 kg bags. [Ultraplan Contract](/mapei/primers-levelling/ultraplan-contract) uses 1.7 kg/m² per mm and comes in 25 kg bags.",
        "The sum is the same for both. Rate x area x average thickness gives the kilograms. Divide by the bag weight and round up. For Ultraplan Eco 20 in a 20 m² room at an average of 5 mm: 1.6 x 20 x 5 = 160 kg, and 160 / 23 = 6.96, so 7 bags. For Ultraplan Contract: 1.7 x 20 x 5 = 170 kg, and 170 / 25 = 6.8, so 7 bags again.",
        "Turned round, the same sum gives the area one bag covers, and that falls fast as the layer thickens.",
      ].join("\n\n"),
      table: {
        caption:
          "Area covered by one bag, in square metres, at four layer thicknesses.",
        head: [
          "Thickness",
          "Ultraplan Eco 20, 23 kg bag",
          "Ultraplan Contract, 25 kg bag",
        ],
        rows: [
          ["1 mm", "14.4 m²", "14.7 m²"],
          ["3 mm", "4.8 m²", "4.9 m²"],
          ["5 mm", "2.9 m²", "2.9 m²"],
          ["10 mm", "1.4 m²", "1.5 m²"],
        ],
        source:
          "calculated from the consumption rates and bag sizes on the Mapei data sheets for Ultraplan EC20 (stocked as Ultraplan Eco 20) and Ultraplan Contract",
      },
    },
    {
      h2: "Work out the average thickness before you count bags",
      body: [
        "The thickness that goes into the sum is the average depth of compound over the whole floor, not the depth of the worst hollow. Order from the deepest point and bags are left over. Guess at a thin skim and the pour stops partway across the room, where the next mix has to join one that has already begun to set.",
        "An uneven slab has high spots that take almost nothing and hollows that take a lot. The compound finds its own level, so what matters is how far the finished surface will sit above the slab at a spread of points. The more the floor rolls, the more readings it needs. Measure after grinding and cleaning are finished, because preparation changes the surface you are filling.",
      ].join("\n\n"),
      steps: [
        "Find the highest point of the slab with a laser level or a long straightedge. The finished surface must clear it by the minimum layer, 1 mm on both data sheets.",
        "Mark a grid across the room and measure from the planned finished level down to the slab at each mark.",
        "Add the readings and divide by the number of readings. That is the average thickness.",
        "Check the deepest reading against the 10 mm limit for one layer.",
      ],
    },
    {
      h2: "Bags needed by floor area and thickness",
      body: [
        "Find your average thickness, read across to the floor area, and that is the order, rounded up to whole bags.",
        "The products land within one bag of each other throughout, because the higher consumption of Ultraplan Contract is offset by its larger bag. Choose between them on waiting time and the floor finish that follows, not on bag count. Thickness drives the order harder than most people expect: on a 50 m² floor, going from a 3 mm to a 5 mm average adds seven bags of Ultraplan Eco 20.",
        "For any other area or thickness, each product page has a coverage calculator that does this sum and returns whole bags. Neither data sheet prints a waste allowance. Keeping one unopened bag in reserve is site practice, not a manufacturer figure.",
      ].join("\n\n"),
      table: {
        caption:
          "Kilograms per square metre and whole bags needed for three floor areas at three average thicknesses.",
        head: [
          "Product, thickness",
          "kg/m²",
          "Bags, 10 m²",
          "Bags, 20 m²",
          "Bags, 50 m²",
        ],
        rows: [
          ["Eco 20, 3 mm", "4.8", "3", "5", "11"],
          ["Eco 20, 5 mm", "8.0", "4", "7", "18"],
          ["Eco 20, 10 mm", "16.0", "7", "14", "35"],
          ["Contract, 3 mm", "5.1", "3", "5", "11"],
          ["Contract, 5 mm", "8.5", "4", "7", "17"],
          ["Contract, 10 mm", "17.0", "7", "14", "34"],
        ],
        source:
          "calculated from 1.6 kg/m² per mm and 23 kg bags (Ultraplan EC20 data sheet) and 1.7 kg/m² per mm and 25 kg bags (Ultraplan Contract data sheet), Mapei",
      },
    },
    {
      h2: "How much water goes into each bag",
      body: [
        "Each bag takes a fixed amount of clean water: 5.5 to 5.75 litres for a 23 kg bag of Ultraplan Eco 20, and 5 to 5.25 litres for a 25 kg bag of Ultraplan Contract. Measure it in a marked bucket. Pour the water in first, add the powder slowly with a low-speed mixer running, let the mix stand for 2 to 3 minutes, stir again and pour. It has to be placed within 20 to 30 minutes at +23°C, so mix only what the team can pour in that time.",
        "The temptation is to add a splash more so the compound runs further. On site that mix tends to separate, and the surface dries weak and dusty under whatever is laid on it. Both sheets also say not to add water once a mix has begun to set.",
      ].join("\n\n"),
    },
    {
      h2: "What changes the number on site",
      body: [
        "Three things push the real order away from the table: a rough slab, a minimum thickness set by what goes on top, and any area deeper than 10 mm.",
        "The first is the common one. A slab that has been scabbled or ground to remove old adhesive has more surface to fill than a straightedge shows, and the average creeps up. The second catches anyone planning a thin skim: a 1 mm layer is allowed, but not under everything. The third matters because the rates in this article are for compound mixed with water only. Once sand or quartz goes into the mix, the powder used per square metre changes, and neither sheet prints a figure for it. So the table stops at 10 mm.",
      ].join("\n\n"),
      list: [
        "**Wheeled loads.** The Ultraplan Eco 20 sheet recommends at least 3 mm where castor chairs or trolleys will run.",
        "**Wooden floors.** The Ultraplan Contract sheet says not to apply less than 3 mm where wood flooring will be installed.",
        "**Above 10 mm, to a maximum of 20 mm.** The Ultraplan Eco 20 sheet recommends adding about 30% by weight of 0.5 mm quartz; the Ultraplan Contract sheet, 20 to 30% of 0/4 or 0/8 sand.",
      ],
      note: "Both compounds are for interior floors only, and neither data sheet allows them on a slab with continuous rising damp. Sort out the damp before you count bags.",
    },
    {
      h2: "How much primer to order with the bags",
      body: [
        "Add [Primer G](/mapei/primers-levelling/primer-g) to the order at 0.08 to 0.15 kg per square metre, the normal consumption on its data sheet. That is 1.6 to 3 kg for the 20 m² room and 4 to 7.5 kg for 50 m², depending on how porous the slab is.",
        "Its sheet says that under self-levelling compounds it reduces air bubbles and helps prevent over-rapid drying. Bare, dusty concrete pulls water out of the compound before it has finished flowing.",
        "Dilution is where the sheets differ. The Primer G sheet, the product's own, gives 1:1 with water on cementitious substrates, and the Ultraplan Contract sheet agrees; the Ultraplan Eco 20 sheet prints 1 part primer to 3 parts water on dusty or very porous concrete. Allow 30 minutes on concrete before pouring, and never apply so much that it forms a film. Cracks come first: both levelling sheets say to repair them with [Eporip](/mapei/concrete-repair/eporip). The other products in the system are on the [primers and levelling page](/mapei/primers-levelling).",
      ].join("\n\n"),
    },
  ],
  faq: [
    {
      q: "How many square metres does one bag of self-levelling compound cover?",
      a: "At 3 mm, about 4.8 m² from a 23 kg bag of Ultraplan Eco 20 and 4.9 m² from a 25 kg bag of Ultraplan Contract. At 5 mm, both about 2.9 m²; at 10 mm, 1.4 to 1.5 m².",
    },
    {
      q: "How do I work out the average thickness of an uneven floor?",
      a: "Set the finished level from the highest point of the slab, measure down to the slab on a grid of points across the room, add the readings and divide by how many you took. Do not order from the deepest hollow alone.",
    },
    {
      q: "Can I add extra water to make it flow further?",
      a: "No. Use the water printed on the data sheet for your bag. Both sheets also say not to add water once the mix has begun to set.",
    },
    {
      q: "Can I pour more than 10 mm in one go?",
      a: "Not with the compound alone. Both data sheets limit a layer to 10 mm. Up to a maximum of 20 mm they recommend adding quartz or sand to the mix, and they print no consumption rate for that mix, so ask before you order.",
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
      label: "Primer G technical data sheet, Mapei",
      url: "/mapei/primers-levelling/primer-g",
    },
  ],
};
