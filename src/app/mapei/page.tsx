/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HeroPicture } from "@/components/media/hero-picture";
import { Parallax } from "@/components/motion/parallax";

import { Reveal } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { brandBySlug } from "@/config/brands";
import { lineHref, productHref, productsInLine } from "@/config/catalogue";
import { heroPhotos, linePhotos } from "@/config/images";
import {
  mapeiLineMeta,
  mapeiLines,
  mapeiProducts,
  mapeiTds,
} from "@/config/mapei";
import { mapeiCoverage } from "@/config/mapei-coverage";
import { siteConfig, whatsappLink } from "@/config/site";
import { pairAlternates } from "@/config/sw-routes";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { cn, pad } from "@/lib/utils";

// This page owns "Mapei Tanzania" (SEO-STRATEGY.md, owner decision D8).
const TITLE = "Mapei Tanzania - Authorized Distributor, Dar es Salaam";
const DESCRIPTION =
  "Sahihi is an authorized Mapei distributor in Tanzania. Tile adhesives, waterproofing, resin flooring and concrete repair in Dar es Salaam, with data sheets.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: pairAlternates("/mapei"),
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/mapei" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Mapei", href: "/mapei" },
];

const mapei = brandBySlug.mapei;
const sheets = mapeiProducts.filter((p) => mapeiTds[p.slug]).length;
const calculators = mapeiProducts.filter((p) => mapeiCoverage[p.slug]).length;

const stats = [
  { value: mapeiProducts.length, label: "Mapei products in stock" },
  { value: mapeiLines.length, label: "Product lines" },
  { value: sheets, label: "Technical data sheets to download" },
  { value: calculators, label: "Coverage calculators" },
];

const faq: FaqItem[] = [
  {
    q: "Is Sahihi an authorized Mapei distributor in Tanzania?",
    lead: "Yes. Sahihi Construction Chemicals is an authorized distributor of Mapei in Tanzania.",
    points: [
      "Registered in Tanzania as Sahihi Construction Chemicals Limited",
      "Office on Coca-Cola Road, Mikocheni B; stock held in Dar es Salaam",
      "Technical support and applicator training alongside supply",
    ],
  },
  {
    q: "Which Mapei products can I buy in Tanzania?",
    lead: `${mapeiProducts.length} Mapei products across ${mapeiLines.length} lines.`,
    points: mapeiLines.map(
      (line) => `${line.label}: ${productsInLine(line.slug).length} products`,
    ),
  },
  {
    q: "Where can I download Mapei technical data sheets?",
    lead: "On each product page, as Mapei's own PDF.",
    points: [
      `${sheets} data sheets are available to download`,
      "Each shows its Mapei edition code",
      "For the rest, and for safety data sheets, ask us",
    ],
  },
  {
    q: "How much Mapei product do I need?",
    lead: "Each product page has a coverage calculator.",
    points: [
      "Built on the consumption Mapei prints in the data sheet",
      "Grout uses Mapei's own formula for tile size and joint width",
      "You set the wastage allowance; the result is in packs",
    ],
  },
  {
    q: "What does Mapei cost in Tanzania?",
    lead: "Prices are quoted, not published.",
    points: [
      "Send product names and quantities by WhatsApp or the enquiry form",
      "The calculator can send its result straight to WhatsApp",
      "You receive a written quotation",
    ],
  },
];

export default function MapeiHubPage() {
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/mapei`,
            about: { "@type": "Brand", name: "Mapei" },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: mapeiLines.length,
              itemListElement: mapeiLines.map((line, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: `Mapei ${line.label}`,
                url: `${siteConfig.url}${lineHref(line)}`,
              })),
            },
          },
          faqJsonLd(faq),
        ]}
      />

      {/* ---- Masthead: one vivid photograph, the words on a white panel ----
          Ink reads 2.4:1 on the blue membrane, so the type never sits on
          the photograph itself. The photograph is eager and never faded;
          it moves only with the scroll. */}
      <section className="bg-accent relative overflow-hidden">
        <Parallax drift={8} scale={1.03}>
          <HeroPicture wide={heroPhotos.mapei} className="object-[78%_50%]" />
        </Parallax>
        <Container className="relative z-10 pt-28 pb-12 sm:pt-36 sm:pb-20">
          <div className="border-deep rounded-3xl border bg-white p-6 sm:p-10 lg:p-14">
            <Breadcrumb items={crumbs} />
            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
              <p className="label-sh text-muted leading-relaxed">
                {mapei.authorization} · Tanzania
              </p>
              <span className="bg-background border-deep inline-flex rounded-full border px-5 py-3">
                <img
                  src={mapei.logo.src}
                  alt="Mapei logo"
                  width={mapei.logo.width}
                  height={mapei.logo.height}
                  className="h-6 w-auto"
                />
              </span>
            </div>
            <h1 className="font-display mt-6 text-[clamp(2.34rem,9.36vw,6.84rem)] leading-[1.02] tracking-tight">
              Mapei in Tanzania.
            </h1>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
              <p className="text-phi-1 dropcap max-w-3xl leading-snug font-light">
                Sahihi Construction Chemicals is an authorized distributor of
                Mapei in Tanzania. {mapeiProducts.length} products are held in
                Dar es Salaam, each with its classification, its pack sizes, its
                Mapei data sheet and a calculator for how much the job needs.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <FlowButton href={whatsappLink("Mapei products")}>
                  Request a quote
                </FlowButton>
                <a
                  href="#lines"
                  className="chip-sh border-deep label-sh inline-flex min-h-12 items-center rounded-full border px-7 leading-relaxed"
                >
                  See the lines
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Ticker: every product name, outlined type -------------------- */}
      <div
        aria-hidden
        className="border-deep bg-background overflow-hidden border-b py-6"
      >
        <div className="marquee-sh flex w-max">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="font-display text-outline-deep flex shrink-0 gap-10 pr-10 text-4xl whitespace-nowrap sm:text-5xl"
            >
              {mapeiProducts
                .filter((_, index) => index % 4 === 0)
                .map((product) => (
                  <span key={product.slug}>{product.name}</span>
                ))}
            </p>
          ))}
        </div>
      </div>

      {/* ---- Numbers ------------------------------------------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <dl className="border-deep grid border-t sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-deep/15 border-b py-8 sm:px-6 sm:odd:border-r lg:border-r lg:border-b-0 lg:first:pl-0 lg:last:border-r-0"
              >
                <dd className="font-display text-[clamp(2.52rem,6.48vw,4.32rem)] leading-none tracking-tight">
                  {stat.value}
                </dd>
                <dt className="text-muted mt-4 max-w-[14rem] leading-snug">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ---- The five lines: stacked feature spreads ---------------------- */}
      <section id="lines" className="scroll-mt-24 pb-8">
        <Container>
          <p className="label-sh text-muted">The range</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 max-w-4xl tracking-tight text-balance"
          >
            Five lines. Everything a structure needs after the concrete.
          </SplitHeading>
        </Container>

        <div className="mt-12">
          {mapeiLines.map((line, index) => {
            const items = productsInLine(line.slug);
            const meta = mapeiLineMeta[line.slug];
            return (
              <article
                key={line.slug}
                className={cn(
                  meta.stage,
                  "grain-sh border-deep relative border-t",
                )}
              >
                <Container className="relative z-10 grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.618fr]">
                  <div>
                    <p className="font-display text-[clamp(2.88rem,8.64vw,5.76rem)] leading-none tracking-tight">
                      {pad(index + 1)}
                    </p>
                    <h3 className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
                      <Link href={lineHref(line)} className="u-line">
                        {line.label}
                      </Link>
                    </h3>
                    <p className="text-muted mt-5 max-w-md leading-relaxed">
                      {meta.lead}
                    </p>
                    <Link
                      href={lineHref(line)}
                      className="bg-deep text-chalk label-sh mt-8 inline-flex min-h-12 items-center rounded-full px-7 leading-relaxed transition-opacity hover:opacity-90"
                    >
                      Open the line&ensp;&rarr;
                    </Link>
                    <div className="border-deep group relative mt-10 block aspect-[4/3] max-w-xl overflow-hidden rounded-lg border">
                      <Image
                        src={linePhotos[line.slug].src}
                        alt={linePhotos[line.slug].alt}
                        fill
                        sizes="(min-width: 64rem) 36vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <ul className="border-deep self-end border-t">
                    {items.map((item) => (
                      <li key={item.slug} className="border-deep/20 border-b">
                        <Link
                          href={productHref(item)}
                          className="hover:bg-background/60 grid grid-cols-[1fr_auto] items-baseline gap-4 py-3.5 transition-colors sm:px-2"
                        >
                          <span>
                            <span className="font-display text-xl sm:text-xl">
                              {item.name}
                            </span>
                            <span className="text-muted ml-3 text-sm">
                              {item.type}
                            </span>
                          </span>
                          <span className="spec-sh text-right">
                            {item.classification ?? item.packs[0]}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Container>
              </article>
            );
          })}
        </div>
      </section>

      {/* ---- What a product page gives you -------------------------------- */}
      <section className="border-deep border-t py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr]">
            <div>
              <p className="label-sh text-muted">On every product page</p>
              <SplitHeading
                as="h2"
                className="font-display text-phi-3 mt-5 tracking-tight text-balance"
              >
                Enough to specify from.
              </SplitHeading>
            </div>
            <Reveal>
              <ol className="border-deep border-t">
                {[
                  {
                    title: "Mapei's own description and limits",
                    body: "Where the product is used and where it is not, quoted from the technical data sheet.",
                  },
                  {
                    title: "The technical data",
                    body: "Classification, working times, thickness and strength values as Mapei prints them, with the edition code.",
                  },
                  {
                    title: "A coverage calculator",
                    body: "Area in, packs out, using Mapei's consumption figure and a wastage allowance you set.",
                  },
                  {
                    title: "The data sheet as a PDF",
                    body: "Mapei's document, unaltered, to download or forward to the consultant.",
                  },
                ].map((item, index) => (
                  <li
                    key={item.title}
                    className="border-deep/15 grid gap-x-6 gap-y-2 border-b py-6 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="spec-sh text-muted pt-1.5">
                      {pad(index + 1)}
                    </span>
                    <div>
                      <h3 className="font-display text-xl">{item.title}</h3>
                      <p className="text-muted mt-2 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </section>

      <Faq items={faq} heading="Mapei in Tanzania, answered." />

      <CtaBand
        label="Mapei in Tanzania"
        heading="Tell us the job. We will tell you the system."
        body="Send the application, the area and the substrate. You get a Mapei product recommendation and a written quotation from our Dar es Salaam office."
        topic="Mapei products"
      />
    </main>
  );
}
