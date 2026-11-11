import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/sections/cta-band";
import { RelatedLinks } from "@/components/sections/related-links";
import { SolutionSelector } from "@/components/sections/solutions/selector";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { solutionPhotos } from "@/config/images";
import { coreRow } from "@/config/seo/core";
import { siteConfig, whatsappLink } from "@/config/site";
import {
  SELECTOR_PATH,
  selectorPlaces,
} from "@/config/waterproofing-selector";
import { resolvePlaces, selectorProductCount } from "@/lib/selector";
import { ogBase, resolveOg } from "@/lib/seo";

/**
 * WATERPROOFING, BY PART OF THE BUILDING: owns "waterproofing Tanzania"
 * (SEO-STRATEGY.md 5.3). Brand-agnostic: Mapei, Oriental Yuhong and X-Calibur
 * side by side. Every product shown is matched to a part of the building by a
 * line of its own data sheet (src/config/waterproofing-selector.ts, checked by
 * scripts/verify-waterproofing-selector.mjs). No ranking, no prices.
 */

// Title and description: src/config/seo/core.ts.
const ROW = coreRow(SELECTOR_PATH);
const TITLE = ROW.titleOverride;
const DESCRIPTION = ROW.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SELECTOR_PATH },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: SELECTOR_PATH,
    images: resolveOg(SELECTOR_PATH) ?? ogBase.images,
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Waterproofing", href: SELECTOR_PATH },
];

const places = resolvePlaces(
  selectorPlaces,
  (place) => `waterproofing for a ${place.label.toLowerCase()}`,
);

const productCount = selectorProductCount(places);

export default function WaterproofingPage() {
  const hero = solutionPhotos.waterproofing;
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "WebPage",
            "@id": `${siteConfig.url}${SELECTOR_PATH}#page`,
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${SELECTOR_PATH}`,
            about: places.map((place) => ({
              "@type": "Thing",
              name: `${place.label} waterproofing`,
            })),
          },
        ]}
      />

      <section className="bg-accent">
        <Container className="grid gap-10 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Breadcrumb items={crumbs} />
            <p className="label-sh mt-10">Waterproofing · Tanzania</p>
            <h1 className="font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
              Waterproofing, part by part.
            </h1>
            <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
              Pick the part of the building. See the {productCount} Mapei,
              Oriental Yuhong and X-Calibur products we hold in Dar es Salaam
              that are made for it, each with the line of its own data sheet
              that says so.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FlowButton href="#selector">Start with the building</FlowButton>
              <FlowButton href={whatsappLink("waterproofing")}>
                Ask us
              </FlowButton>
            </div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={hero.src}
              alt={hero.alt}
              preload
              fill
              sizes="(min-width: 64rem) 38vw, 100vw"
              className="object-cover"
            />
          </figure>
        </Container>
      </section>

      <section id="selector" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">Selector</p>
          <h2 className="font-display text-phi-3 mt-5 tracking-tight text-balance">
            Where is the water getting in?
          </h2>
          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            Tap the drawing or a chip. The waterproofing layer comes first, then
            what goes with it at the corners, joints and finish.
          </p>
          <div className="mt-10" translate="no">
            <SolutionSelector
              places={places}
              drawing
              groupLabel="Part of the building"
              mainTitle="The waterproofing layer"
              detailsTitle="With it: joints, corners, leaks, finish"
            />
          </div>
          <p className="text-muted mt-12 max-w-3xl text-sm leading-relaxed">
            Each product is listed only where its manufacturer&apos;s data sheet
            names that use, quoted word for word. The order is not a ranking.
            The right system also depends on the substrate, the water pressure
            and the finish: send us the details and confirm against the current
            data sheet before you specify. Every product page has a BOQ clause
            ready to paste.
          </p>
        </Container>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Mapei waterproofing",
            href: "/mapei/waterproofing",
            sub: "The Mapei waterproofing line",
          },
          {
            label: "HDPE waterproofing",
            href: "/oriental-yuhong/hdpe-waterproofing",
            sub: "OYH PMH-3080 Plus under foundation slabs",
          },
          {
            label: "Oriental Yuhong",
            href: "/oriental-yuhong",
            sub: "OYH coatings, membranes and sealants",
          },
          {
            label: "X-Calibur",
            href: "/x-calibur",
            sub: "X-Shield FlexPruf and X-Seal sealants",
          },
          {
            label: "Why hidden-roof houses leak",
            href: "/blog/why-hidden-roof-houses-leak",
            sub: "From the blog",
          },
          {
            label: "Waterproofing a water tank",
            href: "/blog/underground-water-tank-waterproofing",
            sub: "From the blog",
          },
        ]}
      />

      <CtaBand
        label="Waterproofing in Tanzania"
        heading="Tell us where the water is. We will quote the system."
        body="Send the part of the building, the area and a photo. You get the products, the quantities and a written quotation from our Dar es Salaam office."
        topic="waterproofing"
      />
    </main>
  );
}
