/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";
import Link from "next/link";

import { SplitHeading } from "@/components/motion/split-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedLinks } from "@/components/sections/related-links";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { brandBySlug } from "@/config/brands";
import { productHref } from "@/config/catalogue";
import { siteConfig } from "@/config/site";
import {
  xcaliburCoverage,
  xcaliburProducts,
  xcaliburTds,
} from "@/config/x-calibur";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { pad } from "@/lib/utils";

/**
 * X-CALIBUR HUB - owns "X-Calibur Tanzania" (SEO-STRATEGY.md 5.1).
 * Same shell as the rest of the site, in X-Calibur's colour (the
 * `brand-x-calibur` class). Server component. Every figure below is read
 * from the catalogue or from the coverage models, which quote X-Calibur's
 * own data sheets.
 */

const TITLE = "X-Calibur Tanzania - Epoxy Floors, Waterproofing, Sealants";
const DESCRIPTION =
  "Sahihi supplies X-Calibur epoxy flooring, primers, SBR bonding agent, elasto-cement waterproofing and polysulphide joint sealants in Dar es Salaam, with data sheets.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/x-calibur" },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: "/x-calibur",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "X-Calibur", href: "/x-calibur" },
];

const brand = brandBySlug["x-calibur"];

// Systems: the products that go down together. Names only, from the list.
const SYSTEMS = [
  {
    name: "Epoxy floor",
    steps: ["x-prime-gp", "x-tech-epoxyfloor-sl1"],
  },
  {
    name: "Epoxy floor, second primer",
    steps: ["x-prime-gp2", "x-tech-epoxyfloor-sl1"],
  },
  { name: "Bonding new to old concrete", steps: ["x-tech-sbr-bond"] },
  { name: "Wet area and roof waterproofing", steps: ["x-shield-flexpruf"] },
  { name: "Joint sealing", steps: ["x-seal-universal-primer", "x-seal-ps800"] },
];

const faq: FaqItem[] = [
  {
    q: "Which X-Calibur products does Sahihi stock in Tanzania?",
    lead: `${xcaliburProducts.length} products, held in Dar es Salaam.`,
    points: xcaliburProducts.map(
      (item) => `${item.name}: ${item.type.toLowerCase()}`,
    ),
  },
  {
    q: "How far does a 17 litre pack of X-Tech EpoxyFloor SL1 go?",
    lead: "17 m² at 1 mm, on X-Calibur's data sheet.",
    points: [
      "Grade SL1 is laid at 1 to 1.5 mm",
      "The product page has a calculator with a wastage field",
    ],
  },
  {
    q: "How many coats of X-Shield FlexPruf does a job need?",
    lead: "X-Calibur's data sheet says normal applications require 2 coats.",
    points: [
      "Theoretical coverage is 1 litre (1.7 kg) per m² per coat",
      "It is supplied in 22 kg kits",
    ],
  },
  {
    q: "Is it X-Calibur or Xcalibur?",
    lead: "The brand writes it X-Calibur, with a hyphen.",
    points: [
      "It is also searched as Xcalibur and X Calibur",
      "Send the name on your drawing or your old pail and we will match it",
    ],
  },
];

export default function XCaliburPage() {
  const sheets = xcaliburProducts.filter((item) => xcaliburTds[item.slug]);
  const calculators = xcaliburProducts.filter(
    (item) => xcaliburCoverage[item.slug],
  );
  const bySlug = Object.fromEntries(
    xcaliburProducts.map((item) => [item.slug, item]),
  );

  return (
    <main className="brand-x-calibur theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/x-calibur`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: xcaliburProducts.length,
              itemListElement: xcaliburProducts.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                url: `${siteConfig.url}${productHref(item)}`,
              })),
            },
          },
          faqJsonLd(faq),
        ]}
      />

      {/* ---- Masthead: white, in X-Calibur's red --------------------------- */}
      <section className="bg-white">
        <Container className="pt-28 pb-16 sm:pt-36 sm:pb-24">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="label-sh text-muted leading-relaxed">
              {brand.authorization} · Tanzania
            </p>
            <span className="border-deep/15 inline-flex rounded-full border bg-white px-5 py-3">
              <img
                src={brand.logo.src}
                alt="X-Calibur logo"
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-6 w-auto"
              />
            </span>
          </div>
          <h1 className="text-brand font-display mt-6 text-[clamp(2rem,7.6vw,5.25rem)] leading-[1.02] uppercase">
            X-Calibur in Tanzania.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <p className="text-phi-1 max-w-3xl leading-snug font-light">
              {siteConfig.brandName} supplies X-Calibur in Tanzania: a
              self-levelling epoxy floor and two primers, an SBR bonding agent,
              an elasto-cement waterproof coating, and a polysulphide joint
              sealant with its primer, held in Dar es Salaam.
            </p>
            <dl className="border-deep grid grid-cols-3 border-t">
              {[
                { value: xcaliburProducts.length, label: "Products" },
                { value: sheets.length, label: "Data sheets" },
                { value: calculators.length, label: "Calculators" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-deep/20 border-r py-5 pr-3 not-first:pl-4 last:border-r-0"
                >
                  <dd className="font-display text-phi-3 leading-none">
                    {stat.value}
                  </dd>
                  <dt className="label-sh text-muted mt-3 leading-relaxed">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ---- The products: one card each ----------------------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">The range we stock</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 tracking-tight"
          >
            {xcaliburProducts.length} products, one page each.
          </SplitHeading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {xcaliburProducts.map((item, index) => (
              <li key={item.slug}>
                <Link
                  href={productHref(item)}
                  className="group border-deep/15 flex h-full flex-col rounded-lg border bg-white p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7"
                >
                  <span className="spec-sh text-muted flex justify-between gap-4">
                    <span>{pad(index + 1)}</span>
                    <span>{item.packs.join(" · ")}</span>
                  </span>
                  <span className="label-sh text-muted mt-8 leading-relaxed">
                    {item.type}
                  </span>
                  <span className="text-brand mt-2 text-2xl leading-tight font-semibold tracking-tight uppercase sm:text-3xl">
                    {item.name}
                  </span>
                  <span className="mt-3 leading-relaxed">{item.summary}</span>
                  <span className="spec-sh mt-auto flex items-center justify-between gap-4 pt-7">
                    <span>
                      {xcaliburTds[item.slug]
                        ? "Data sheet PDF"
                        : "Data sheet on request"}
                    </span>
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-500 group-hover:translate-x-2"
                    >
                      &rarr;
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Systems: what goes down together ------------------------------ */}
      <section className="bg-surface py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">Systems</p>
          <h2 className="font-display text-phi-3 mt-5 max-w-3xl tracking-tight text-balance">
            What goes down together.
          </h2>
          <ol className="border-deep mt-12 border-t">
            {SYSTEMS.map((system, index) => (
              <li
                key={system.name}
                className="border-deep/20 grid gap-x-8 gap-y-4 border-b py-7 lg:grid-cols-[4rem_1fr_1.618fr]"
              >
                <span className="spec-sh text-muted pt-1.5">
                  {pad(index + 1)}
                </span>
                <h3 className="font-display text-2xl leading-tight">
                  {system.name}
                </h3>
                <ul className="flex flex-wrap items-center gap-2.5">
                  {system.steps.map((slug, step) => (
                    <li key={slug} className="flex items-center gap-2.5">
                      {step > 0 && <span aria-hidden>+</span>}
                      <Link
                        href={productHref(bySlug[slug])}
                        className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                      >
                        {bySlug[slug].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Faq items={faq} heading="X-Calibur, in short." />

      <RelatedLinks
        links={[
          {
            label: "Waterproofing selector",
            href: "/solutions/waterproofing",
            sub: "X-Calibur, Mapei and OYH by part of the building",
          },
          {
            label: "Concrete repair selector",
            href: "/solutions/concrete-repair",
            sub: "X-Tech SBR Bond and the Mapei repair line",
          },
          {
            label: "Specifier pack",
            href: "/specifier-pack",
            sub: "Every BOQ clause in one spreadsheet",
          },
        ]}
      />

      <CtaBand
        label="X-Calibur in Tanzania"
        heading="Send the specification. We will match the product."
        body="Tell us the floor, the wet area or the joint, with its size. You get a product recommendation and a written quotation from our Dar es Salaam office."
        topic="X-Calibur products"
      />
    </main>
  );
}
