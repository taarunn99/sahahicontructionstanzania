import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";

import { VasaRangePage } from "@/components/sections/vasa/vasa-range-page";
import {
  decorsIn,
  spcAdvantages,
  spcLayers,
  vasaCollections,
  vasaDocs,
} from "@/config/vasa";
import content from "@/content/vasa/spc.json";
import type { FaqItem } from "@/lib/faq";

const TITLE = "SPC Flooring Tanzania - Vasa 5 mm and 8 mm | Sahihi";
const DESCRIPTION =
  "SPC flooring in Tanzania from Sahihi, an authorized Vasa dealer in Dar es Salaam: rigid core click planks in 5 mm and 8 mm, with decors and technical data.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/vasa/spc-flooring" },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: "/vasa/spc-flooring",
  },
};

const faq: FaqItem[] = [
  {
    q: "What is SPC flooring?",
    lead: "A floor plank with a rigid core under a printed decor film and a wear layer.",
    points: [
      "Vasa's layers are UV coating, wear layer, PVC decor film, rigid core and an optional IXPE underlay",
      "The planks click together: UNILIN, VALINGE or I4F",
    ],
  },
  {
    q: "Is SPC flooring waterproof?",
    lead: "Vasa lists its SPC as waterproof and moisture-proof.",
    points: ["Ask us about the room before you choose, above all a wet one"],
  },
  {
    q: "Which SPC thickness does Sahihi supply in Tanzania?",
    lead: "Vasa's catalogue shows 5 mm and 8 mm collections.",
    points: [
      "5 mm: random pattern, in wood planks, herringbone and tile formats",
      "8 mm: matched pattern, in wide wood planks of 229 x 1522 mm",
      "Vasa's technical page gives an overall range of 3.5 to 8.0 mm",
    ],
  },
  {
    q: "SPC or LVT?",
    lead: "SPC is the rigid click plank. LVT is thinner and softer underfoot.",
    points: [
      "SPC: 3.5 to 8.0 mm overall, rigid core",
      "LVT: 2.0 to 3.0 mm overall, with lock and fold, adhesive or self-adhesive laying",
    ],
  },
  {
    q: "How do I get a price for SPC flooring?",
    lead: "Send the area and the decor code. We quote in writing.",
    points: ["Prices are not published on this site"],
  },
];

export default function SpcFlooringPage() {
  const five = decorsIn("spc-5");
  const eight = decorsIn("spc-8");
  const collection = vasaCollections[0];
  return (
    <VasaRangePage
      path="/vasa/spc-flooring"
      crumb="SPC flooring"
      description={DESCRIPTION}
      h1="SPC flooring in Tanzania."
      lead="Vasa rigid core click flooring from Sahihi in Dar es Salaam: 5 mm and 8 mm collections, each decor shown here by its code."
      hero={{ ...collection.picture, alt: collection.alt }}
      layers={spcLayers}
      pickDecors={[...five.slice(0, 9), ...eight.slice(0, 5)]}
      advantages={spcAdvantages}
      groups={[
        {
          id: "spc-5",
          label: "5 mm · Random pattern",
          heading: `${five.length} decors in 5 mm SPC.`,
          decors: five,
        },
        {
          id: "spc-8",
          label: "8 mm · Matched pattern",
          heading: `${eight.length} decors in 8 mm SPC.`,
          decors: eight,
        },
      ]}
      specs={content.technicalData}
      docs={[vasaDocs.spc, { ...vasaDocs.catalogue, note: "reduced" }]}
      faq={faq}
      topic="Vasa SPC flooring"
      productName="Vasa SPC flooring"
    />
  );
}
