import type { Metadata } from "next";
import { ogBase, resolveOg } from "@/lib/seo";

import { vasaPageMeta } from "@/config/seo/vasa";
import { VasaRangePage } from "@/components/sections/vasa/vasa-range-page";
import {
  decorsIn,
  vasaCollections,
  vasaDocs,
  wallAdvantages,
  wallLayers,
} from "@/config/vasa";
import type { FaqItem } from "@/lib/faq";

const PATH = "/vasa/wall-panels";
const { title: TITLE, description: DESCRIPTION } = vasaPageMeta("wall-panels");

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: resolveOg(PATH) ?? ogBase.images,
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
