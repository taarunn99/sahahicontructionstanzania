/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { ProductCardShell } from "@/components/sections/catalogue/product-card";
import { ProductShelf } from "@/components/sections/catalogue/product-shelf";
import { DensityLadder } from "@/components/sections/cmci/density-ladder";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { brandBySlug } from "@/config/brands";
import { cmciHref, cmciInLine, cmciLines, cmciProducts } from "@/config/cmci";
import { siteConfig } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { cn, pad } from "@/lib/utils";

/**
 * CMCI HUB: owns "CMCI Tanzania" (SEO-STRATEGY.md 5.1). Three lines, as the
 * owner finalised them on 2026-11-07. The first screen is static.
 */

const TITLE = "CMCI Fireproofing Tanzania - Cementitious Fire Protection";
const DESCRIPTION =
  "CMCI cementitious fireproofing in Tanzania from Sahihi, Dar es Salaam: petrochemical, commercial and tunnel grades. Technical values and data sheets to download.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/cmci" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/cmci" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "CMCI", href: "/cmci" },
];

const faq: FaqItem[] = [
  {
    q: "Which CMCI fireproofing products does Sahihi supply in Tanzania?",
    lead: `${cmciProducts.length} products across three lines.`,
    points: cmciProducts.map(
      (item) => `${item.name}: ${item.type.toLowerCase()}`,
    ),
  },
  {
    q: "Which density do I need?",
    lead: "The fire design and the exposure decide it, not the bag.",
    points: [
      "Lighter grades suit protected steel inside a building",
      "Heavier grades suit plant, exterior exposure and hard wear",
      "Send the design and we will match the product",
    ],
  },
  {
    q: "How do I get the technical data sheet?",
    lead: "Download it from the product's page.",
    points: [
      "Each product page has the manufacturer's data sheet as a PDF, unaltered",
      "Ask us for the current edition before you specify",
    ],
  },
  {
    q: "Does a fire rating come with the product?",
    lead: "A rating belongs to a tested design at a stated thickness.",
    points: [
      "Confirm the design, the thickness and the label on the bag before you specify",
      "The project's fire engineer signs off the system",
    ],
  },
];

export default function CmciPage() {
  const brand = brandBySlug.cmci;
  const byDensity = [...cmciProducts].sort(
    (a, b) => a.density - b.density || a.name.localeCompare(b.name),
  );

  return (
    <main className="brand-cmci theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/cmci`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: cmciProducts.length,
              itemListElement: cmciProducts.map((item, index) => ({
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

      {/* ---- Masthead, and the three lines as the way in ------------------- */}
      <section className="bg-white">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="label-sh text-muted leading-relaxed">
              Fireproofing · Tanzania
            </p>
            <span className="border-deep/15 inline-flex rounded-full border bg-white px-5 py-3">
              <img
                src={brand.logo.src}
                alt="CMCI logo"
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-6 w-auto"
              />
            </span>
          </div>
          <h1 className="text-brand font-display mt-6 text-[clamp(2rem,7.6vw,5.25rem)] leading-[1.02] uppercase">
            CMCI fireproofing in Tanzania.
          </h1>
          <p className="text-phi-1 mt-8 max-w-3xl leading-snug font-light">
            {siteConfig.brandName} supplies the CMCI range of cementitious
            fireproofing from Dar es Salaam, for plant, buildings and tunnels.
          </p>
          <ul className="mt-10 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4">
            {cmciLines.map((line, index) => (
              <li key={line.slug}>
                <Link href={`#${line.slug}`} className="group block">
                  <span className="border-deep relative block aspect-square overflow-hidden rounded-xl border sm:aspect-[4/3] sm:rounded-2xl">
                    <Image
                      src={line.picture.src}
                      alt={line.alt}
                      fill
                      preload={index === 0}
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-2 block text-sm leading-snug font-semibold sm:text-base">
                    {line.label}{" "}
                    <span className="text-muted font-normal">
                      {cmciInLine(line.slug).length}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- One band per line ---------------------------------------------- */}
      {cmciLines.map((line, index) => {
        const items = cmciInLine(line.slug);
        return (
          <section
            key={line.slug}
            id={line.slug}
            className={cn(line.stage, "scroll-mt-28 py-14 sm:py-20")}
          >
            <Container className="grid gap-10 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-14">
              <Reveal className="min-w-0">
                <p className="spec-sh">
                  {pad(index + 1)} · {items.length}{" "}
                  {items.length === 1 ? "product" : "products"}
                </p>
                <h2 className="font-display text-phi-3 mt-3 leading-[1.05]">
                  {line.label}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed">{line.line}</p>
              </Reveal>
              <ProductShelf label={line.label}>
                {items.map((item) => (
                  <ProductCardShell
                    key={item.slug}
                    href={cmciHref(item)}
                    name={item.name}
                    line={item.oneLine}
                    picture={line.picture}
                    alt={`${line.label} fireproofing, for ${item.name}`}
                    cover
                    as="h3"
                  />
                ))}
              </ProductShelf>
            </Container>
          </section>
        );
      })}

      {/* ---- The range by density ------------------------------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">Lightest to heaviest</p>
          <h2 className="font-display text-phi-3 mt-5 max-w-3xl tracking-tight text-balance">
            The range, by dry density.
          </h2>
          <div className="mt-10">
            <DensityLadder
              rows={byDensity.map((item) => ({
                name: item.name,
                href: cmciHref(item),
                density: item.density,
                type: item.type,
              }))}
            />
          </div>
          <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
            Dry density as each data sheet prints it. A fire rating belongs to a
            tested design at a stated thickness: confirm both before you
            specify. Product names are trademarks of their owners. Pictures are
            illustrative.
          </p>
        </Container>
      </section>

      <Faq items={faq} heading="CMCI fireproofing, in short." />

      <CtaBand
        label="CMCI in Tanzania"
        heading="Send the fire design. We will match the product."
        body="Tell us the steel, the rating and the exposure. You get a product recommendation, the data sheet and a written quotation from our Dar es Salaam office."
        topic="CMCI fireproofing"
      />
    </main>
  );
}
