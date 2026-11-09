import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import {
  SportsExplorer,
  type SportsSystem,
} from "@/components/sections/oyh/sports-explorer";
import { Downloads } from "@/components/sections/vasa/decor-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { siteConfig, whatsappLink } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/**
 * SPORTS FLOORING. Sources: OYH's "Sports Floor Product Manual" (EN, 19 pages,
 * assets/source/oyh-sports) and the earlier "Sports Flooring Products" deck. The
 * manual prints systems, layers with OYH product codes and construction stages,
 * and no test values, so none is shown. Each system's spread of the manual is a
 * download in public/tds/oriental-yuhong/sports, cut by page, never edited.
 * Held in Dar es Salaam (owner, 2026-11-09).
 */

const TITLE = "Sports Flooring Tanzania - Tracks, Courts, Turf | OYH";
const DESCRIPTION =
  "Sports flooring in Tanzania from Sahihi and Oriental Yuhong: plastic running tracks, silicon PU sports courts, artificial turf and EPDM surfaces, in 3D.";
const PATH = "/oriental-yuhong/sports-flooring";
const TDS = "/tds/oriental-yuhong/sports";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Oriental Yuhong", href: "/oriental-yuhong" },
  { label: "Sports flooring", href: PATH },
];

const pic = (name: string, width: number, height: number, alt: string) => ({
  src: `/images/oriental-yuhong/sports/${name}.webp`,
  width,
  height,
  alt,
});

type Layer = SportsSystem["layers"][number];
const SUBSTRATE: Layer = {
  label: "Base",
  color: "#6b6e70",
  height: 0.34,
  pattern: "concrete",
  note: "Asphalt or concrete, more than 28 days old, flat to 5 mm per 3 m, with a pull-off strength above 2 MPa.",
};
const BOTTOM: Layer = {
  label: "Bottom layer",
  color: "#2d2a26",
  height: 0.06,
  note: "PSV-101 universal sealing adhesive, or PSV-102 asphalt concrete base sealing adhesive.",
};
const MARKING: Layer = {
  label: "Marking paint",
  color: "#ffffff",
  height: 0.03,
  note: "PSV-701/702 sports field marking paint.",
};

const SYSTEMS: SportsSystem[] = [
  {
    slug: "all-plastic-track",
    name: "All plastic track",
    aka: "full polyurethane track",
    buildUp:
      "A special bottom adhesive, an elastic polyurethane middle layer and a wear-resistant surface layer.",
    suits:
      "For schools, kindergartens and sports venues: track and field runways, semi-circular areas, auxiliary areas, fitness paths, indoor training runways and playgrounds.",
    advantages: [
      "Safety",
      "Weathering resistance",
      "Shock absorption at 0-50 ℃",
      "Anti nail shoe scratch",
    ],
    picture: pic(
      "full-pu",
      1020,
      462,
      "A school running track seen from the air",
    ),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#b5432c",
        height: 0.12,
        pattern: "granule",
        note: "PSV-301 self textured surface layer, or PSV-302 particle adhesive with PSV-401/402 plastic particles.",
      },
      {
        label: "Middle layer",
        color: "#e8b9a8",
        height: 0.28,
        note: "PSV-201 plastic runway elastic layer.",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: {
      file: `${TDS}/all-plastic-track.pdf`,
      pages: 2,
      size: "2.1 MB",
    },
  },
  {
    slug: "breathable-track",
    name: "Breathable track",
    aka: "permeable rubber track",
    buildUp:
      "A special bottom adhesive, a middle layer of EPDM elastic particles mixed with an environmentally friendly adhesive, and an EPDM particle wear-resistant surface layer.",
    suits:
      "For schools, kindergartens, parks, communities and sports venues: tracks, semi-circular areas, auxiliary areas, fitness paths and playgrounds.",
    advantages: [
      "Economy",
      "Moderate elasticity",
      "Permeability: heavy rain does not produce standing water",
    ],
    picture: pic(
      "permeable",
      870,
      416,
      "A red running track beside a green pitch",
    ),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#b5432c",
        height: 0.12,
        pattern: "granule",
        note: "PSV-302 particle adhesive with PSV-401/402 plastic particles.",
      },
      {
        label: "Middle layer",
        color: "#e5a58e",
        height: 0.28,
        pattern: "granule",
        note: "PSV-303 EPDM particle surface adhesive with PSV 401-406 plastic particles.",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: { file: `${TDS}/breathable-track.pdf`, pages: 2, size: "1.8 MB" },
  },
  {
    slug: "hybrid-track",
    name: "Hybrid track",
    aka: "hybrid rubber track",
    buildUp:
      "A special primer, a middle layer of elastic polyurethane mixed with EPDM rubber particles, and a wear-resistant surface.",
    suits:
      "For schools, kindergartens and professional stadiums: track and field, semi-circle and auxiliary areas, fitness paths, indoor training tracks and playgrounds.",
    advantages: [
      "Cost performance",
      "Shock absorption at 0-50 ℃",
      "Anti nail shoe scratch",
    ],
    picture: pic("hybrid", 560, 338, "Lanes of a red running track"),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#a93c2a",
        height: 0.12,
        pattern: "granule",
        note: "PSV-301 self textured surface layer, or PSV-302 particle adhesive with PSV-401/402 plastic particles.",
      },
      {
        label: "Middle layer",
        color: "#d98e78",
        height: 0.28,
        pattern: "granule",
        note: "PSV-201 plastic runway elastic layer with PSV-401-406 plastic particles.",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: { file: `${TDS}/hybrid-track.pdf`, pages: 2, size: "5.0 MB" },
  },
  {
    slug: "silicon-pu-court",
    name: "Silicon PU court",
    aka: "silicon PU sports court",
    buildUp:
      "A specialized bottom glue, a high elasticity, high strength polyurethane middle layer and an organic silicon modified polyurethane surface layer.",
    suits:
      "For basketball, tennis and badminton courts, indoor and outdoor leisure areas, gyms and health activity centers.",
    advantages: [
      "Comfortable elasticity",
      "Stain resistant",
      "Super wear-resistant",
      "Durable and long-lasting",
    ],
    picture: pic(
      "court",
      947,
      530,
      "Basketball courts in green and red, with white lines",
    ),
    layers: [
      MARKING,
      {
        label: "Surface layer",
        color: "#16784a",
        height: 0.08,
        note: "Silicone PU water-based topcoat.",
      },
      {
        label: "Interface layer",
        color: "#5aa57f",
        height: 0.06,
        note: "PSV-304 Silicon PU plastic stadium interface agent.",
      },
      {
        label: "Elastic layer",
        color: "#9fc9b2",
        height: 0.2,
        note: "PSV-201 silicone PU plastic stadium elastic layer.",
      },
      BOTTOM,
      SUBSTRATE,
    ],
    download: { file: `${TDS}/silicon-pu-court.pdf`, pages: 2, size: "3.5 MB" },
  },
  {
    slug: "artificial-turf",
    name: "Artificial turf",
    aka: "synthetic turf",
    buildUp:
      "Artificial turf, quartz sand, rubber particles and a shock-absorbing pad, on a concrete base layer.",
    suits:
      "For football fields, basketball courts, tennis courts, hockey fields and golf courses.",
    advantages: [
      "Environmental friendliness",
      "Security: no slipping or scratches",
      "Durable and weather resistant",
      "Lays on asphalt, cement and hard sand",
    ],
    picture: pic("turf", 753, 502, "Close view of synthetic grass fibres"),
    layers: [
      {
        label: "Artificial grass",
        color: "#3c8f3a",
        height: 0.24,
        note: "Laid with special glue. Fibres of polypropylene, or of polyethylene and polypropylene, with UV absorbers.",
      },
      {
        label: "Rubber particles",
        color: "#2c7a44",
        height: 0.12,
        pattern: "granule",
        note: "PSV-407 granules.",
      },
      {
        label: "Quartz sand",
        color: "#e2d7c2",
        height: 0.12,
        pattern: "sand",
      },
      {
        label: "Shock-absorbing pad",
        color: "#c7a884",
        height: 0.16,
        pattern: "foam",
        note: "PSV-104 shock pad.",
      },
      {
        label: "Concrete base layer",
        color: "#6b6e70",
        height: 0.34,
        pattern: "concrete",
      },
    ],
    download: { file: `${TDS}/artificial-turf.pdf`, pages: 3, size: "6.9 MB" },
  },
  {
    slug: "epdm-walking-track",
    name: "EPDM walking track",
    buildUp:
      "A specialty primer, an EPDM granules base layer and an anti-slip, wear-resistant surface layer.",
    suits: "For fitness trails, walkways and general ground protection.",
    advantages: [
      "Good permeability",
      "Easy to construct and maintain",
      "Versatile application",
    ],
    picture: pic(
      "walking",
      401,
      404,
      "A colourful EPDM play surface in blue, yellow and red",
    ),
    layers: [
      {
        label: "Surface layer",
        color: "#1f6fb5",
        height: 0.12,
        pattern: "granule",
        note: "EPDM granules of different colours, 5 mm, spread to make the patterns.",
      },
      {
        label: "Elastic base layer",
        color: "#39383a",
        height: 0.26,
        pattern: "granule",
        note: "Trowel spread, 8 to 10 mm.",
      },
      {
        label: "Specialty primer",
        color: "#2d2a26",
        height: 0.06,
        note: "Spread with elastic granules, to enhance the adhesion with the substrate.",
      },
      SUBSTRATE,
    ],
  },
];

const STAGES = [
  {
    title: "Running track",
    steps: [
      "Foundation construction",
      "Primer coating",
      "Intermediate coating",
      "Surface layer",
      "Runway marking",
    ],
  },
  {
    title: "Sports court",
    steps: [
      "Foundation construction",
      "Primer coating",
      "Intermediate coating",
      "Interface layer",
      "Surface layer",
      "Marking",
    ],
  },
  {
    title: "Artificial turf",
    steps: [
      "Positioning and laying out",
      "Laying",
      "Gluing",
      "Adhesive",
      "Compression",
      "Solidifying",
      "Sand filling",
      "Filling elastic particles",
    ],
  },
];

const STEPS = [
  {
    title: "Substrate verification",
    text: "Asphalt or concrete, more than 28 days old, flatness of 5 mm or better per 3 m, pull-off strength above 2 MPa.",
    picture: pic(
      "step-primer",
      535,
      399,
      "A worker checking and preparing the substrate",
    ),
  },
  {
    title: "Primer and elastic granules",
    text: "The primer is trowel spread, with elastic granules spread into it to enhance the adhesion.",
    picture: pic(
      "step-base",
      693,
      524,
      "Two workers spreading a green elastic layer",
    ),
  },
  {
    title: "Elastic base layer",
    text: "Trowelled and ironed with an electric trowel, 8 to 10 mm thick.",
    picture: pic(
      "step-iron",
      680,
      513,
      "A worker smoothing the layer with an electric trowel",
    ),
  },
  {
    title: "Positioning and layout",
    text: "All the patterns are drawn out as required.",
    picture: pic(
      "step-layout",
      693,
      506,
      "A coloured play surface marked out in a school yard",
    ),
  },
  {
    title: "Surface layer",
    text: "EPDM granules of different colours make the patterns, 5 mm thick.",
    picture: pic(
      "step-pattern",
      959,
      488,
      "Workers laying coloured patterns of EPDM granules",
    ),
  },
  {
    title: "Spread, trowel, finish",
    text: "The surface granules are spread, trowelled and finished with soapy water.",
    picture: pic(
      "step-finish",
      1100,
      619,
      "Blue granules being finished with a power trowel",
    ),
  },
];

const faq: FaqItem[] = [
  {
    q: "Which sports flooring systems does Oriental Yuhong offer?",
    lead: "Three plastic running tracks, a silicon PU court, artificial turf and an EPDM walking surface.",
    points: SYSTEMS.map((item) => `${item.name}: ${item.buildUp}`),
  },
  {
    q: "Which running track should I choose?",
    lead: "It depends on the budget, the drainage and how hard the track is used.",
    points: [
      "All plastic: elastic polyurethane throughout, anti nail shoe scratch",
      "Breathable: lower investment cost, heavy rain does not leave standing water",
      "Hybrid: polyurethane with EPDM particles, for cost performance",
    ],
  },
  {
    q: "What does the base need to be?",
    lead: "Asphalt or concrete, more than 28 days old.",
    points: [
      "Flatness: 5 mm or better per 3 m",
      "Pull-off strength: above 2 MPa",
      "On asphalt, the bottom layer is PSV-102 asphalt concrete base sealing adhesive",
    ],
  },
  {
    q: "Is sports flooring available in Tanzania?",
    lead: "Yes. Sahihi holds Oriental Yuhong sports flooring in Dar es Salaam.",
    points: [
      "Send the area, the sport and the base for a written quotation",
      "Prices are not published on this site",
    ],
  },
];

export default function SportsFlooringPage() {
  return (
    <main className="brand-oriental-yuhong theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${PATH}`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: SYSTEMS.length,
              itemListElement: SYSTEMS.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: `Oriental Yuhong ${item.name}`,
                  description: item.buildUp,
                  brand: { "@type": "Brand", name: "Oriental Yuhong" },
                  image: `${siteConfig.url}${item.picture.src}`,
                },
              })),
            },
          },
          faqJsonLd(faq),
        ]}
      />

      <section className="bg-accent">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh mt-10">Oriental Yuhong · Tanzania</p>
          <h1 className="font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
            Sports flooring in Tanzania.
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
            Oriental Yuhong running tracks, sports courts and artificial turf,
            held by {siteConfig.brandName} in Dar es Salaam.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href={whatsappLink("OYH sports flooring")}>
              Request a quote
            </FlowButton>
            <FlowButton href="#manual">Download the manual pages</FlowButton>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Six systems</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Pick a system. Pull it apart.
          </h2>
          <div className="mt-8">
            <SportsExplorer systems={SYSTEMS} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <h2 className="font-display text-phi-3 tracking-tight">
            What each one is made of.
          </h2>
          <dl className="border-deep mt-8 border-t">
            {SYSTEMS.map((item) => (
              <div
                key={item.slug}
                className="border-deep/20 grid gap-2 border-b py-4 md:grid-cols-[17rem_1fr]"
              >
                <dt className="font-bold">
                  {item.name}
                  {item.aka && (
                    <span className="text-muted block text-sm font-normal">
                      Also called {item.aka}
                    </span>
                  )}
                </dt>
                <dd className="leading-relaxed">
                  {item.buildUp}
                  <span className="text-muted mt-1 block text-sm">
                    {item.layers
                      .map((layer) => layer.note)
                      .filter((note) => note?.includes("PSV"))
                      .join(" · ")}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-line py-14 sm:py-20">
        <Container>
          <p className="label-sh">From the manual</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            The construction stages.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {STAGES.map((stage) => (
              <div key={stage.title}>
                <h3 className="font-display text-xl">{stage.title}</h3>
                <ol className="mt-4 space-y-2">
                  {stage.steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-3 rounded-xl bg-white/10 p-3"
                    >
                      <span className="spec-sh">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-snug font-semibold">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">On site</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            How an EPDM granule surface goes down.
          </h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="border-deep/15 overflow-hidden rounded-2xl border bg-white"
              >
                <span className="relative block aspect-[3/2]">
                  <Image
                    src={step.picture.src}
                    alt={step.picture.alt}
                    fill
                    sizes="(min-width: 64rem) 32vw, (min-width: 40rem) 48vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <div className="p-5">
                  <p className="spec-sh text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-1 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="manual" className="bg-surface scroll-mt-28 py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Downloads</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            The manual, one system at a time.
          </h2>
          <Downloads
            items={SYSTEMS.flatMap((item) =>
              item.download
                ? [
                    {
                      file: item.download.file,
                      label: `${item.name}, Oriental Yuhong`,
                      pages: item.download.pages,
                      note: item.download.size,
                    },
                  ]
                : [],
            )}
          />
          <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed">
            Each file is that system&apos;s pages of Oriental Yuhong&apos;s
            Sports Floor Product Manual, with the construction stages,
            unaltered. For the EPDM walking track, ask us.
          </p>
        </Container>
      </section>

      <Faq items={faq} heading="Sports flooring, in short." />

      <CtaBand
        label="Sports flooring in Tanzania"
        heading="Send the area and the sport."
        body="Tell us the size, the sport and what the base is. You get a system recommendation and a written quotation from our Dar es Salaam office."
        topic="OYH sports flooring"
      />
    </main>
  );
}
