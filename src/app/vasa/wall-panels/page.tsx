import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";

import { VasaRangePage } from "@/components/sections/vasa/vasa-range-page";
import {
  decorsIn,
  vasaCollections,
  vasaDocs,
  wallAdvantages,
  wallLayers,
} from "@/config/vasa";
import type { FaqItem } from "@/lib/faq";

const TITLE = "Wall Panels Tanzania - Vasa SPC Digital Panels | Sahihi";
const DESCRIPTION =
  "Vasa wall panels in Tanzania from Sahihi in Dar es Salaam: colored film panels in wood, fabric and stone, and digital panels in marble, murals and wood looks.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/vasa/wall-panels" },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: "/vasa/wall-panels",
  },
};

const faq: FaqItem[] = [
  {
    q: "What size are Vasa wall panels?",
    lead: "1200 x 2800 mm.",
    points: [
      "Colored film panels are 4.0 mm",
      "Most digital panels come in 4 mm SPC or 9 mm WPC",
    ],
  },
  {
    q: "What is a digital wall panel?",
    lead: "A panel printed with a design at 600 to 1200 dpi.",
    points: [
      "Vasa gives 10 sqm with no pattern repeat",
      "Designs can be personalized and customized",
    ],
  },
  {
    q: "How do I order a wall panel?",
    lead: "Send the wall sizes and the design code. We quote in writing.",
    points: ["Prices are not published on this site"],
  },
];

export default function WallPanelsPage() {
  const film = decorsIn("film-wall");
  const digital = decorsIn("digital-wall");
  const collection = vasaCollections[4];
  return (
    <VasaRangePage
      path="/vasa/wall-panels"
      crumb="Wall panels"
      description={DESCRIPTION}
      h1="Vasa wall panels in Tanzania."
      lead="Colored film and digital wall panels from Sahihi in Dar es Salaam, 1200 x 2800 mm, each design shown here by its code."
      hero={{ ...collection.picture, alt: collection.alt }}
      layers={wallLayers}
      pickDecors={digital.slice(0, 14)}
      advantages={wallAdvantages}
      groups={[
        {
          id: "film-wall",
          label: "Colored film · Random pattern",
          heading: `${film.length} colored film panels.`,
          decors: film,
        },
        {
          id: "digital-wall",
          label: "Digital · Mirror finish",
          heading: `${digital.length} digital panels.`,
          decors: digital,
        },
      ]}
      docs={[{ ...vasaDocs.catalogue, note: "reduced" }]}
      faq={faq}
      topic="Vasa wall panels"
      productName="Vasa wall panels"
    />
  );
}
