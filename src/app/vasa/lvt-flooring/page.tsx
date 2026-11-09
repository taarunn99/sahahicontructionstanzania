import type { Metadata } from "next";

import { VasaRangePage } from "@/components/sections/vasa/vasa-range-page";
import {
  decorsIn,
  lvtAdvantages,
  lvtLayers,
  vasaCollections,
  vasaDocs,
} from "@/config/vasa";
import content from "@/content/vasa/lvt.json";
import type { FaqItem } from "@/lib/faq";

const TITLE = "LVT Flooring Tanzania - Vasa Luxury Vinyl Tile | Sahihi";
const DESCRIPTION =
  "LVT flooring in Tanzania from Sahihi, an authorized Vasa dealer in Dar es Salaam: 2 mm luxury vinyl tile in carpet, stone and wood looks, with technical data.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/vasa/lvt-flooring" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/vasa/lvt-flooring",
  },
};

const faq: FaqItem[] = [
  {
    q: "What is LVT flooring?",
    lead: "Luxury vinyl tile: a thin, soft floor with a printed decor under a wear layer.",
    points: [
      "Vasa's layers are UV coating, wear layer, PVC decor film, PVC middle layer and balance layer",
    ],
  },
  {
    q: "Which LVT looks does Vasa offer?",
    lead: "Carpet, stone and wood, in Vasa's 2 mm collection.",
    points: [
      "Carpet look: 457 x 914 x 2.0 mm",
      "Stone look: 406 x 812 x 2.0 mm",
      "Wood look: 187 x 1227 x 2.0 mm and 205 x 1522 x 2.0 mm",
    ],
  },
  {
    q: "How is LVT installed?",
    lead: "Vasa lists lock and fold, adhesive laying and self-adhesive sinking.",
    points: ["Tell us the subfloor and we will advise on the method"],
  },
  {
    q: "LVT or SPC?",
    lead: "LVT is thinner and softer underfoot. SPC is a rigid click plank.",
    points: ["LVT: 2.0 to 3.0 mm overall", "SPC: 3.5 to 8.0 mm overall"],
  },
  {
    q: "How do I get a price for LVT flooring?",
    lead: "Send the area and the decor code. We quote in writing.",
    points: ["Prices are not published on this site"],
  },
];

export default function LvtFlooringPage() {
  const decors = decorsIn("lvt-2");
  const collection = vasaCollections[2];
  const look = (name: string) => decors.filter((decor) => decor.look === name);
  return (
    <VasaRangePage
      path="/vasa/lvt-flooring"
      crumb="LVT flooring"
      description={DESCRIPTION}
      h1="LVT flooring in Tanzania."
      lead="Vasa luxury vinyl tile from Sahihi in Dar es Salaam: 2 mm, in carpet, stone and wood looks, each decor shown here by its code."
      hero={{ ...collection.picture, alt: collection.alt }}
      layers={lvtLayers}
      pickDecors={decors.slice(0, 15)}
      advantages={lvtAdvantages}
      groups={[
        {
          id: "lvt-2",
          label: "2 mm · Carpet",
          heading: "Carpet look LVT.",
          decors: look("Carpet"),
        },
        {
          id: "lvt-stone",
          label: "2 mm · Stone",
          heading: "Stone look LVT.",
          decors: look("Stone"),
        },
        {
          id: "lvt-wood",
          label: "2 mm · Wood",
          heading: "Wood look LVT.",
          decors: look("Wood"),
        },
      ]}
      specs={content.technicalData}
      docs={[vasaDocs.lvt, { ...vasaDocs.catalogue, note: "reduced" }]}
      faq={faq}
      topic="Vasa LVT flooring"
      productName="Vasa LVT flooring"
    />
  );
}
