import type { Metadata } from "next";
import Image from "next/image";

import { CtaBand } from "@/components/sections/cta-band";
import { RelatedLinks } from "@/components/sections/related-links";
import { SolutionSelector } from "@/components/sections/solutions/selector";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { linePhotos } from "@/config/images";
import { REPAIR_PATH, repairPlaces } from "@/config/repair-selector";
import { repairStacks } from "@/config/selector-stacks";
import { coreRow } from "@/config/seo/core";
import { siteConfig, whatsappLink } from "@/config/site";
import { TILE_PATH } from "@/config/tile-selector";
import { SELECTOR_PATH } from "@/config/waterproofing-selector";
import { resolvePlaces, selectorProductCount } from "@/lib/selector";
import { ogBase, resolveOg } from "@/lib/seo";

/**
 * CONCRETE REPAIR, BY DAMAGE: owns "concrete repair Tanzania"
 * (SEO-STRATEGY.md 5.3). Every product is matched to a repair by a line of
 * its own data sheet (src/config/repair-selector.ts, checked by
 * scripts/verify-waterproofing-selector.mjs). No ranking, no prices.
 */

// Title and description: src/config/seo/core.ts.
const ROW = coreRow(REPAIR_PATH);
const TITLE = ROW.titleOverride;
const DESCRIPTION = ROW.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: REPAIR_PATH },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: REPAIR_PATH,
    images: resolveOg(REPAIR_PATH) ?? ogBase.images,
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Concrete repair", href: REPAIR_PATH },
];

const places = resolvePlaces(
  repairPlaces,
  (place) => `concrete repair: ${place.label.toLowerCase()}`,
);

const productCount = selectorProductCount(places);

export default function ConcreteRepairPage() {
  const hero = linePhotos["concrete-repair"];
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "WebPage",
            "@id": `${siteConfig.url}${REPAIR_PATH}#page`,
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${REPAIR_PATH}`,
            about: places.map((place) => ({
              "@type": "Thing",
              name: place.label,
            })),
          },
        ]}
      />

      <section className="bg-accent">
        <Container className="grid gap-10 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Breadcrumb items={crumbs} />
            <p className="label-sh mt-10">Concrete repair · Tanzania</p>
            <h1 className="font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
              Concrete repair, by the damage.
            </h1>
            <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
              Pick what is wrong with the concrete. See the {productCount}{" "}
              Mapei and X-Calibur products we hold in Dar es Salaam that are
              made for it, each with the line of its own data sheet that says
              so.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FlowButton href="#selector">Start with the damage</FlowButton>
              <FlowButton href={whatsappLink("concrete repair")}>
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
            What is wrong with the concrete?
          </h2>
          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            Tap a chip and the build-up turns in 3D beside it. The repair product comes first, then what goes with it:
            steel protection, bonding, primers and crack sealing.
          </p>
          <div className="mt-10" translate="no">
            <SolutionSelector
              places={places}
              stacks={repairStacks}
              groupLabel="Kind of damage"
              mainTitle="The repair"
              detailsTitle="With it: steel, bond, primer, cracks"
            />
          </div>
          <p className="text-muted mt-12 max-w-3xl text-sm leading-relaxed">
            Each product is listed only where its manufacturer&apos;s data sheet
            names that use, quoted word for word. The order is not a ranking.
            Damage to beams, columns and slabs needs a structural
            engineer&apos;s assessment before any repair: the products follow
            the design. Confirm against the current data sheet before you
            specify. Every product page has a BOQ clause ready to paste.
          </p>
        </Container>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Mapei concrete repair",
            href: "/mapei/concrete-repair",
            sub: "The Mapei repair, grout and anchoring line",
          },
          {
            label: "Spalling concrete repair",
            href: "/blog/spalling-concrete-repair",
            sub: "From the blog",
          },
          {
            label: "How to grout a base plate",
            href: "/blog/how-to-grout-a-base-plate",
            sub: "From the blog",
          },
          {
            label: "Waterproofing selector",
            href: SELECTOR_PATH,
            sub: "By part of the building",
          },
          {
            label: "Tile installation selector",
            href: TILE_PATH,
            sub: "Adhesive, grout and care by job",
          },
          {
            label: "Specifier pack",
            href: "/specifier-pack",
            sub: "Every BOQ clause in one spreadsheet",
          },
        ]}
      />

      <CtaBand
        label="Concrete repair in Tanzania"
        heading="Send us the damage. We will quote the repair."
        body="Send a photo, the element and the size of the area. You get the products, the quantities and a written quotation from our Dar es Salaam office."
        topic="concrete repair"
      />
    </main>
  );
}
