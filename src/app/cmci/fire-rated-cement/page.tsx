import type { Metadata } from "next";
import { ModelCta } from "@/components/sections/model-cta";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Embers } from "@/components/sections/cmci/heat";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { FireBeam } from "@/components/three-d/fire-beam";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import {
  cmciHref,
  cmciLines,
  cmciProductBySlug,
  cmciProducts,
  cmciTds,
} from "@/config/cmci";
import { siteConfig, whatsappLink } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/**
 * FIRE RATED CEMENT: owns "fire rated cement Tanzania" (SEO-STRATEGY.md 5.1).
 * The search term is the buyers' word. The product is cementitious fireproofing
 * for structural steel, and the page says so, because two data sheets rule out
 * use as a refractory cement. Every fire statement below is printed on that
 * product's data sheet, and `npm test` checks the sheet wording in src/content.
 */

const TITLE = "Fire Rated Cement Tanzania - CMCI Fireproofing | Sahihi";
const DESCRIPTION =
  "Fire rated cement in Tanzania from Sahihi, Dar es Salaam: CMCI cementitious fireproofing for structural steel, with up to 4 hours printed on the data sheets.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/cmci/fire-rated-cement" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/cmci/fire-rated-cement",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "CMCI", href: "/cmci" },
  { label: "Fire rated cement", href: "/cmci/fire-rated-cement" },
];

/** What each data sheet prints about fire. Blank means it prints no rating. */
const FIRE: Record<string, string> = {
  "monokote-z-156":
    "Up to 4 hours of fire resistance. Tested to UL 1709, UL263 (ASTM E119) and the RWS fire curve",
  "avikote-av-800": "Tested to UL 1709 and ASTM E 119 (UL 263)",
  "avikote-av-650":
    "Tested to UL 1709, ASTM E 119 (UL 263) and BS 476 (Part 20)",
  "monokote-z-146": "Up to 4 hours of fire resistance",
  "monokote-z-106": "Up to 4 hours of fire resistance",
  "monokote-mk-6s": "Up to 4 hours of fire resistance",
};

const faq: FaqItem[] = [
  {
    q: "What is fire rated cement?",
    lead: "A cement-based fireproofing, sprayed or trowelled onto structural steel to protect it from fire.",
    points: [
      "The trade calls it cementitious fireproofing",
      "The rating belongs to a tested design at a stated thickness, not to the bag",
    ],
  },
  {
    q: "How many hours of fire resistance can it give?",
    lead: "Up to 4 hours, on the data sheets of Z-156T, Z-146, Z-106 and MK-6s.",
    points: [
      "The fire design for your steel sets the thickness and the rating",
      "The project's fire engineer signs off the system",
    ],
  },
  {
    q: "Is it the same as refractory cement or fire cement for a kiln?",
    lead: "No. The Avikote data sheets say not to use it as a refractory cement.",
    points: [
      "They also rule out operating temperatures in excess of 93°C (200°F)",
      "It protects steel during a fire. It does not line an oven, a kiln or a boiler",
    ],
  },
  {
    q: "Where can I buy fire rated cement in Tanzania?",
    lead: "From Sahihi in Dar es Salaam, an authorized CMCI dealer.",
    points: ["Send the fire design on WhatsApp or by email for a quotation"],
  },
  {
    q: "Which one do I need?",
    lead: "The exposure and the fire design decide it.",
    points: cmciLines.map((line) => `${line.label}: ${line.line}`),
  },
];

export default function FireRatedCementPage() {
  const rows = [
    "monokote-z-156",
    "avikote-av-800",
    "avikote-av-650",
    "monokote-z-146",
    "monokote-z-106-hy",
    "monokote-z-106",
    "monokote-mk-6s",
    "monokote-mk-6-hy",
  ].map((slug) => cmciProductBySlug[slug]);

  return (
    <main className="brand-cmci theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/cmci/fire-rated-cement`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: cmciProducts.length,
              itemListElement: rows.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                url: `${siteConfig.url}${cmciHref(item)}`,
              })),
            },
          },
          faqJsonLd(faq),
        ]}
      />

      {/* First screen: static HTML and CSS heat. The 3D starts on the scroll. */}
      <section className="heat-stage on-dark">
        <Embers />
        <Container className="relative z-10 pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh mt-10 text-white/85">
            Authorized CMCI dealer · Tanzania
          </p>
          <h1 className="font-display mt-5 text-[clamp(2.2rem,8.4vw,6rem)] leading-[1.02] text-white uppercase">
            <span className="heat-text">Fire rated cement</span> in Tanzania.
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light text-white">
            Cementitious fireproofing for structural steel, supplied by{" "}
            {siteConfig.brandName} from Dar es Salaam. The data sheets print up
            to 4 hours of fire resistance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href={whatsappLink("CMCI fire rated cement")}>
              Send the fire design
            </FlowButton>
            <FlowButton href="#products">See the products</FlowButton>
          </div>
        </Container>
      </section>

      <section className="heat-stage on-dark py-12 sm:py-16">
        <Embers />
        <Container className="relative z-10">
          <h2 className="font-display text-phi-3 max-w-3xl tracking-tight text-balance text-white">
            Turn up the fire.
          </h2>
          <p className="mt-4 mb-6 max-w-2xl leading-relaxed text-white/90">
            Steel loses its strength as it heats. Fireproofing puts a
            cement-based coat between the fire and the steel. Drag the beam, and
            move the slider.
          </p>
          <FireBeam />
          <ModelCta
            className="mt-6"
            topic="fire rated cement"
            line="Seen the beam take the heat? Ask us for the right thickness."
          />
        </Container>
      </section>

      <section id="products" className="scroll-mt-28 py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">From the data sheets</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            {cmciProducts.length} products, and what each sheet prints.
          </h2>
          <ul className="border-deep mt-8 border-t">
            {rows.map((item) => (
              <li key={item.slug} className="border-deep/20 border-b">
                <Reveal>
                  <div className="grid gap-x-8 gap-y-2 py-5 lg:grid-cols-[17rem_minmax(0,1fr)_auto] lg:items-center">
                    <div>
                      <Link
                        href={cmciHref(item)}
                        className="font-display u-line text-xl leading-tight"
                      >
                        {item.name}
                      </Link>
                      <p className="text-muted mt-1 text-sm">{item.type}</p>
                    </div>
                    <p className="leading-relaxed">
                      {FIRE[item.slug] ?? "See the data sheet for its tests."}
                      <span className="text-muted">
                        {" "}
                        · {item.density} kg/m3 dry density
                      </span>
                    </p>
                    <a
                      href={cmciTds[item.slug].file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="u-line py-2 text-sm font-semibold"
                    >
                      Data sheet
                      <span className="sr-only"> for {item.name}</span>
                    </a>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
            A fire rating belongs to a tested design at a stated thickness:
            confirm both, and the label on the bag, before you specify. MK-6s is
            gypsum based. Product names are trademarks of their owners.
          </p>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-phi-2 tracking-tight">
              What it is for.
            </h2>
            <ul className="mt-5 space-y-3 leading-relaxed">
              {cmciLines.map((line) => (
                <li key={line.slug}>
                  <Link
                    href={`/cmci#${line.slug}`}
                    className="u-line font-semibold"
                  >
                    {line.label}
                  </Link>
                  : {line.line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-phi-2 tracking-tight">
              What it is not for.
            </h2>
            <p className="mt-5 leading-relaxed">
              The Avikote data sheets rule out use as a refractory cement,
              operating temperatures in excess of 93°C (200°F), and use on
              aluminum or other non-steel surfaces. For a kiln, an oven or a
              boiler lining, this is the wrong product.
            </p>
          </div>
        </Container>
      </section>

      <Faq items={faq} heading="Fire rated cement, in short." />

      <CtaBand
        label="Fire rated cement in Tanzania"
        heading="Send the fire design. We will match the product."
        body="Tell us the steel, the rating and the exposure. You get a product recommendation, the data sheet and a written quotation from our Dar es Salaam office."
        topic="CMCI fire rated cement"
      />
    </main>
  );
}
