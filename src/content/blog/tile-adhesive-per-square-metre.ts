import type { PostContent } from "@/lib/blog";

/**
 * How much tile adhesive per square metre.
 * Primary query: how much tile adhesive per square metre.
 *
 * Rates, packs and limits are from the Mapeset, Adesilex P7, Kerabond T,
 * Keraflex Maxi S1, Keracolor FF and Ultraplan EC20 data sheets, as extracted
 * in src/content/mapei/*.json and modelled in src/config/mapei-coverage.ts.
 * m² per bag is bag weight / rate, rounded down to one decimal place. Bag
 * counts are rounded up. The 10% wastage in the worked example is an
 * assumption and is labelled as one.
 */
export const content: PostContent = {
  answer:
    "The tile adhesives we stock use 2 to 5 kg per square metre, depending on the trowel. A No. 5 trowel on normal indoor tiles uses 2.5 to 3 kg, so a 25 kg bag covers 8.3 to 10 m². Adhesive laid to a set bed thickness uses 1.2 kg/m² for each millimetre: a 5 mm bed takes 6 kg/m², about 4 m² per 25 kg bag.",
  sections: [
    {
      h2: "How much adhesive each product uses per square metre",
      body: [
        "Each adhesive has its own printed rate, tied to a trowel or a bed thickness, so one figure for all tile adhesive does not exist. On one UK question-and-answer page, ten tradespeople gave answers running from 3 to 4 kg/m² up to 7 to 10 kg/m².",
        "The table gives the data sheet rates for the four adhesives we stock. The last column is our arithmetic: bag weight divided by the rate, rounded down to one decimal place. At 3 kg/m², 25 / 3 = 8.33, so 8.3 m². [Mapeset](/mapei/tile-adhesives-grouts/mapeset) and [Adesilex P7](/mapei/tile-adhesives-grouts/adesilex-p7) are rated by trowel. Kerabond T prints a single range and names no trowel. [Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1) is rated per millimetre of bed, up to its stated 15 mm, and comes in two bag sizes.",
      ].join("\n\n"),
      table: {
        caption:
          "Printed consumption, stocked pack and calculated area per bag for four tile adhesives.",
        head: ["Product, basis", "kg/m²", "Bag", "m² per bag"],
        rows: [
          ["Mapeset, trowel No. 4", "approx. 2", "25 kg", "12.5"],
          ["Mapeset, trowel No. 5", "2.5 to 3", "25 kg", "8.3 to 10"],
          ["Mapeset, trowel No. 6", "approx. 5", "25 kg", "5"],
          ["Adesilex P7, trowel n. 4", "2", "25 kg", "12.5"],
          ["Adesilex P7, trowel n. 5", "2.5 to 3", "25 kg", "8.3 to 10"],
          ["Adesilex P7, trowel n. 6", "4", "25 kg", "6.2"],
          ["Kerabond T, no trowel stated", "2 to 5", "25 kg", "5 to 12.5"],
          ["Keraflex Maxi S1, 3 mm bed", "3.6", "20 or 25 kg", "5.5 or 6.9"],
          ["Keraflex Maxi S1, 5 mm bed", "6", "20 or 25 kg", "3.3 or 4.1"],
          ["Keraflex Maxi S1, 10 mm bed", "12", "20 or 25 kg", "1.6 or 2"],
          ["Keraflex Maxi S1, 15 mm bed", "18", "20 or 25 kg", "1.1 or 1.3"],
        ],
        source:
          "rates from the Mapei data sheets; Keraflex Maxi S1 rates are 1.2 kg/m² per mm x bed thickness; m² per bag is our arithmetic",
      },
      note: "These are theoretical figures. Real consumption moves with the substrate and the fixer's hand.",
    },
    {
      h2: "How many bags a 30 m² room needs",
      body: [
        "A 6 x 5 m room with normal-size tiles indoors, fixed with Adesilex P7 and a trowel n. 5, needs 4 bags. Order from the top of the printed range. A floor that runs at the upper rate and stops one bag short leaves the fixer standing while someone goes for more, with adhesive already spread and drying.",
        "A heavier trowel or a thick bed changes the order a lot, so settle the trowel before you buy. The steps run the same room three ways, then add the grout. The calculator on each product page, beside the data sheet, does the same sum and applies a wastage figure you set yourself. No rate here includes breakage or spillage unless the step says so.",
      ].join("\n\n"),
      steps: [
        "Trowel n. 5, upper rate: 30 x 3 = 90 kg. 90 / 25 = 3.6, so 4 bags. With 10% wastage, our assumption and not a Mapei figure, 99 kg is still 4 bags.",
        "Trowel n. 6: 30 x 4 = 120 kg. 120 / 25 = 4.8, so 5 bags.",
        "Keraflex Maxi S1, 5 mm bed: 30 x 6 = 180 kg, so 8 bags of 25 kg or 9 bags of 20 kg.",
        "Grout in 600 x 600 x 10 mm tile with a 5 mm joint: [Keracolor FF](/mapei/tile-adhesives-grouts/keracolor-ff) is printed at 0.3 kg/m². 30 x 0.3 = 9 kg, so 2 packs of 5 kg.",
      ],
    },
    {
      h2: "A bigger trowel notch uses more adhesive",
      body: [
        "The notch sets how much adhesive stands on the floor. The Mapeset sheet shows it plainly: a 4 x 4 mm notch uses about 2 kg/m², a 5 x 5 mm notch 2.5 to 3 kg/m², and a 6 x 6 mm notch about 5 kg/m². Adesilex P7 prints 4 kg/m² for its trowel n. 6, so the same trowel number does not mean the same rate across products.",
        "Do not choose the trowel to save bags. The sheets tell you to choose it for coverage on the back of the tile: at least 65 to 70% on walls and light indoor traffic, and 100% for heavy traffic and all external work. Press a tile down, lift it and look. If the back is short of adhesive, go up a notch and accept the extra bag.",
        "The Keraflex Maxi S1 sheet prints no trowel sizes. We have no Mapei figure linking a notch to a finished bed, so we do not print one.",
      ].join("\n\n"),
    },
    {
      h2: "Tile size and the back of the tile change the rate",
      body: [
        "Larger tiles and rougher backs take more adhesive. Mapeset gives its No. 4 trowel to mosaics up to 5 x 5 cm and its No. 5 to normal ceramic. Adesilex P7 moves to trowel n. 6 and 4 kg/m² for large sizes and exterior floors. A very rough back gets the same treatment as an uneven floor: the Mapeset sheet recommends trowel No. 6, at 5 kg/m². Turn a tile over in the shop before you estimate.",
        "Size also rules products out, which matters more than the rate. Mapeset is not for large format tiles. Kerabond T is not for tiles that need more than 5 mm of adhesive. Keraflex Maxi S1 is described as especially suitable for large-size porcelain.",
      ].join("\n\n"),
    },
    {
      h2: "An uneven floor uses far more adhesive than a flat one",
      body: [
        "Every hollow in the floor fills with adhesive. Mapeset asks for the No. 6 trowel, at 5 kg/m², on an irregular surface, which is twice the lower rate of the No. 5.",
        "Keraflex Maxi S1 shows the cost directly, because it is rated by the millimetre. Each extra millimetre of average bed on a 30 m² floor is 1.2 x 30 = 36 kg. Two extra millimetres is 72 kg, nearly three 25 kg bags, and the finished floor looks no different.",
        "When the hollows are deep, level first. [Ultraplan Eco 20](/mapei/primers-levelling/ultraplan-eco-20) lays 1 to 10 mm per layer at 1.6 kg/m² per mm on interior floors. That is a second product and a wait, but it returns you to a thin bed at a rate you can predict.",
      ].join("\n\n"),
    },
    {
      h2: "Back-buttering and hot days add to the order",
      body: [
        "Spreading adhesive on the back of the tile uses more than the floor bed alone, and no data sheet prints how much more, so count it in your wastage figure. Do not skip it where a sheet asks for it. Kerabond T requires it for tiles with a side over 30 cm outdoors, for large tiles with a side over 60 cm, on heated floors, under heavy loads, and in pools and tanks.",
        "Heat wastes adhesive in a way the table cannot show. All four sheets warn that strong sun, drying wind or high temperature can cut open time to a few minutes. Once a skin has formed, re-trowel it or scrape it up and spread fresh; the sheets say not to wet it. On an open slab in Dar es Salaam, a fixer who spreads too far ahead throws adhesive away, or lays tiles on it and [sees them lift later](/blog/why-floor-tiles-pop-up).",
      ].join("\n\n"),
    },
  ],
  faq: [
    {
      q: "How many square metres does a 25 kg bag of tile adhesive cover?",
      a: "It depends on the rate. At 2 kg/m², 12.5 m². At 2.5 to 3 kg/m², 8.3 to 10 m². At 4 kg/m², 6.2 m². At 5 kg/m², 5 m². These are printed rates divided into the bag, before any wastage.",
    },
    {
      q: "How many bags of adhesive do I need for 60x60 tiles?",
      a: "No sheet gives a rate for 60 x 60 cm, so work from the trowel that gives the coverage. At 4 kg/m², a 30 m² floor takes 120 kg, which is 5 bags of 25 kg. Keraflex Maxi S1 at a 5 mm bed takes 8.",
    },
    {
      q: "Does back-buttering use more adhesive?",
      a: "Yes, because adhesive goes on the tile as well as the floor. The data sheets print no separate rate for it, so allow for it in your own wastage figure, and do not skip it where the sheet asks for it.",
    },
    {
      q: "How much extra should I buy for wastage?",
      a: "The data sheets print no wastage figure, so the allowance is your own judgement. Our 10% in the worked example is an assumption. Allow more for a rough slab, a hot exposed floor or back-buttering. The calculators let you set the percentage.",
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
      label:
        "Ultraplan Eco 20 technical data sheet (printed title Ultraplan EC20), Mapei",
      url: "/mapei/primers-levelling/ultraplan-eco-20",
    },
    {
      label: "How much tile adhesive do I need per square metre?, MyJobQuote",
      url: "https://www.myjobquote.co.uk/questions/how-much-tile-adhesive-do-i-need-per-square-metre",
    },
  ],
};
