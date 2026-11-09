import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { WaterPath } from "@/components/sections/oyh/water-path";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { Downloads, SpecTable } from "@/components/sections/vasa/decor-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { LayerStack } from "@/components/three-d/layer-stack";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { siteConfig, whatsappLink } from "@/config/site";
import content from "@/content/oriental-yuhong/pmh-3080-plus.json";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/**
 * HDPE WATERPROOFING: owns "HDPE waterproofing Tanzania" (SEO-STRATEGY.md 5.1).
 * Sources: PMH-3080 Plus data sheet (April 2026), PMH-3080 method statement (June
 * 2025) and OYH's HDPE brochure. Where they differ the data sheet is published.
 * See docs/OPEN-QUESTIONS.md Q21.
 */

const TITLE = "HDPE Waterproofing Tanzania - OYH PMH-3080 Plus | Sahihi";
const DESCRIPTION =
  "HDPE waterproofing membrane in Tanzania from Sahihi: OYH PMH-3080 Plus, pre-applied under foundation slabs, tunnels and subways, with data sheet and method.";
const PATH = "/oriental-yuhong/hdpe-waterproofing";
const PRODUCT = "/oriental-yuhong/pmh-3080-plus";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Oriental Yuhong", href: "/oriental-yuhong" },
  { label: "HDPE waterproofing", href: PATH },
];

const LAYERS = [
  {
    label: "Structural concrete",
    color: "#a9adab",
    height: 0.5,
    pattern: "concrete" as const,
    note: "Poured onto the membrane, and it bonds to it.",
  },
  {
    label: "Reinforcing steel",
    color: "#7f8a8f",
    height: 0.1,
    opacity: 0.5,
    pattern: "rebar" as const,
    note: "OYH: the bars can be placed directly on top of the membrane without any protection, taking care not to damage it.",
  },
  {
    label: "Weather resistance granular layer",
    color: "#ece8dc",
    height: 0.08,
    pattern: "sand" as const,
    note: "The face the concrete meets. OYH lists it as trafficable immediately after application.",
  },
  {
    label: "Pressure sensitive adhesive",
    color: "#d7b65a",
    height: 0.1,
    note: "The layer that joins the concrete to the membrane.",
  },
  {
    label: "Thick HDPE film",
    color: "#f7f7f4",
    height: 0.14,
    note: "The main waterproof layer.",
  },
  {
    label: "Substrate",
    color: "#74787a",
    height: 0.34,
    pattern: "concrete" as const,
    note: "Smooth and solid, with no significant standing water. It can be damp.",
  },
];

const USES = [
  {
    src: "/images/oriental-yuhong/hdpe/basement.webp",
    width: 1200,
    height: 820,
    title: "Basements and foundation slabs",
    line: "Under the slab and up the walls of a basement, bonded to the structural concrete.",
    labels: [
      "Pre-applied membrane under the slab",
      "Steel bar and concrete above it",
      "PMH sealant at details",
      "Embedded steel plate water stop",
    ],
    alt: "A cut through an underground car park, showing the membrane under the slab",
  },
  {
    src: "/images/oriental-yuhong/hdpe/tunnel.webp",
    width: 1200,
    height: 900,
    title: "Tunnels",
    line: "Fully bonded with the secondary lining, over geotextile and gaskets.",
    labels: [
      "Combined bolting and shotcrete",
      "Gasket and geotextile",
      "Pre-applied membrane",
      "Secondary lining",
    ],
    alt: "A cut through a road tunnel, showing the membrane around the lining",
  },
  {
    src: "/images/oriental-yuhong/hdpe/subway.webp",
    width: 1200,
    height: 800,
    title: "Subways",
    line: "Against an underground diaphragm wall, with a shotcrete levelling coat.",
    labels: [
      "Underground diaphragm wall",
      "Shotcrete leveling",
      "Geotextile and gasket",
      "Pre-applied membrane",
    ],
    alt: "A cut through a subway station beside a diaphragm wall",
  },
  {
    src: "/images/oriental-yuhong/hdpe/gallery.webp",
    width: 1200,
    height: 820,
    title: "Underground pipe galleries",
    line: "Pre-applied below and post-applied above, under a protection board.",
    labels: [
      "Pre-applied membrane",
      "Post-applied membrane",
      "Protection board",
    ],
    alt: "A cut through an underground pipe gallery with its membrane",
  },
  {
    src: "/images/oriental-yuhong/hdpe/planting.webp",
    width: 1200,
    height: 920,
    title: "Planted roofs and podiums",
    line: "A strong membrane and lap joint, under root-resistant membrane and soil.",
    labels: [
      "Pre-applied membrane",
      "Root resistant waterproof membrane",
      "Composite drain plate",
      "Planting soil",
    ],
    alt: "A cut through a building with a planted roof and its layers",
  },
];

const STEPS = [
  "Clean substrate",
  "Unpack and lay membrane",
  "Keep release liner on",
  "Apply pressure on lap",
  "Handle details",
  "Check and repair",
  "Complete product training",
  "Remove release liner",
  "Cast concrete",
];

const KEY_POINTS = [
  "Long edges: dual-lap self-adhesive overlap, 80mm wide",
  "Short edges: 160mm wide butt joint adhesive tape, with the end laps staggered",
  "Walls: mechanical fixing every 400-600mm, within 10-20mm from the edge of the self-adhesive strip",
  "Pour the concrete within 21 days after the membrane installation is completed",
  "No laying in rain, snow or winds of level 5 or higher, and not below 5°C",
  "Accessories: PMH-T-160 butt joint tape, PMH-T-S80 particle cover tape, PMH-S-600 sealant, PMH-T-B250D double-sided butyl tape",
];

const faq: FaqItem[] = [
  {
    q: "What is HDPE waterproofing?",
    lead: "A high density polyethylene sheet that keeps water out of a structure.",
    points: [
      "PMH-3080 Plus is pre-applied: laid first, with the concrete poured onto it",
      "It consists of a thick HDPE film, pressure sensitive adhesive and a weather resistance granular layer",
    ],
  },
  {
    q: "Why pre-applied rather than post-applied?",
    lead: "A pre-applied membrane bonds to the concrete, so water cannot travel behind it.",
    points: [
      "OYH lists no lateral migration of water",
      "With a post-applied membrane, a damaged spot lets water channel along the gap",
    ],
  },
  {
    q: "Does it need a primer, or a flame?",
    lead: "No. The data sheet says cold apply, no primer.",
    points: ["It can go on damp substrates without standing water"],
  },
  {
    q: "How thick is it, and what size are the rolls?",
    lead: "1.2 or 1.5 mm, in rolls 1.2 or 2.4 m wide and 20 m long, or customized.",
    points: ["A roll covers 24 or 48 m², or customized"],
  },
  {
    q: "Who supplies HDPE membrane in Tanzania?",
    lead: "Sahihi, an authorized Oriental Yuhong distributor in Dar es Salaam.",
    points: [
      "Send the slab area and the depth of the water table for a quotation",
    ],
  },
];

export default function HdpePage() {
  return (
    <main className="brand-oriental-yuhong theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Product",
            name: "PMH-3080 Plus HDPE pre-applied waterproofing membrane",
            description: DESCRIPTION,
            brand: { "@type": "Brand", name: "Oriental Yuhong" },
            image: `${siteConfig.url}/images/oriental-yuhong/hdpe/roll.webp`,
            url: `${siteConfig.url}${PRODUCT}`,
          },
          faqJsonLd(faq),
        ]}
      />

      <section className="bg-accent">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh mt-10">Authorized distributor · Tanzania</p>
          <h1 className="font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
            HDPE waterproofing in Tanzania.
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
            Oriental Yuhong PMH-3080 Plus, held by {siteConfig.brandName} in Dar
            es Salaam: a pre-applied membrane laid before the concrete, so that
            the concrete bonds to it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href={whatsappLink("OYH HDPE waterproofing")}>
              Request a quote
            </FlowButton>
            <FlowButton href={PRODUCT}>The product page</FlowButton>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Pull it apart</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            The membrane, between the ground and the slab.
          </h2>
          <div className="mt-8">
            <LayerStack layers={LAYERS} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Why it bonds</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Follow the water.
          </h2>
          <div className="mt-8">
            <WaterPath />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Where it goes</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Five places OYH uses it.
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {USES.map((use) => (
              <li key={use.title}>
                <Reveal>
                  <article className="border-deep/15 group h-full overflow-hidden rounded-2xl border bg-white">
                    <span className="relative block aspect-[3/2] overflow-hidden bg-black">
                      <Image
                        src={use.src}
                        alt={use.alt}
                        fill
                        sizes="(min-width: 48rem) 48vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </span>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-display text-xl leading-tight">
                        {use.title}
                      </h3>
                      <p className="mt-2 leading-relaxed">{use.line}</p>
                      <ol className="mt-3 flex flex-wrap gap-2">
                        {use.labels.map((label, index) => (
                          <li
                            key={label}
                            className="border-deep/20 rounded-full border px-3 py-1 text-xs"
                          >
                            {String.fromCharCode(65 + index)} · {label}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-line py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="label-sh">How it goes down</p>
            <h2 className="font-display text-phi-3 mt-4 tracking-tight">
              Nine steps.
            </h2>
            <ol className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-3">
              {STEPS.map((step, index) => (
                <li key={step} className="rounded-xl bg-white/10 p-3">
                  <span className="spec-sh block opacity-80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-sm leading-snug font-semibold">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-phi-2 tracking-tight">
              From the data sheet.
            </h3>
            <ul className="mt-5 space-y-3 leading-relaxed">
              {KEY_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Specification</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            PMH-3080 Plus, technical data.
          </h2>
          <SpecTable rows={content.technicalData} />
          <h2 className="font-display text-phi-2 mt-14 tracking-tight">
            The documents.
          </h2>
          <Downloads
            items={[
              {
                file: "/tds/oriental-yuhong/pmh-3080-plus.pdf",
                label: "PMH-3080 Plus technical data sheet",
                pages: 4,
                note: "April 2026",
              },
              {
                file: "/tds/oriental-yuhong/pmh-3080-method-statement.pdf",
                label: "PMH-3080 method statement",
                pages: 7,
                note: "June 2025",
              },
            ]}
          />
          <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed">
            Oriental Yuhong&apos;s own documents, unaltered. The method
            statement is written for PMH-3080 and recommends pouring within 42
            days. The data sheet for PMH-3080 Plus says 21 days: work to the
            data sheet of the product on your site. See also the{" "}
            <Link href={PRODUCT} className="u-line">
              PMH-3080 Plus page
            </Link>
            .
          </p>
        </Container>
      </section>

      <Faq items={faq} heading="HDPE waterproofing, in short." />

      <CtaBand
        label="HDPE waterproofing in Tanzania"
        heading="Send the slab area. We will come back with a quote."
        body="Tell us the area, the structure and the ground water. You get the roll sizes, the accessories and a written quotation from our Dar es Salaam office."
        topic="OYH HDPE waterproofing"
      />
    </main>
  );
}
