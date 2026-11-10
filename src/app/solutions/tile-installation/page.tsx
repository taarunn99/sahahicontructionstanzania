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
import { REPAIR_PATH } from "@/config/repair-selector";
import { tileStacks } from "@/config/selector-stacks";
import { siteConfig, whatsappLink } from "@/config/site";
import { TILE_PATH, tilePlaces } from "@/config/tile-selector";
import { SELECTOR_PATH } from "@/config/waterproofing-selector";
import { resolvePlaces, selectorProductCount } from "@/lib/selector";
import { ogBase } from "@/lib/seo";

/**
 * TILE INSTALLATION, BY JOB: owns "tile adhesive Tanzania"
 * (SEO-STRATEGY.md 5.3). Every product is matched to a tiling job by a line
 * of its own data sheet (src/config/tile-selector.ts, checked by
 * scripts/verify-waterproofing-selector.mjs). No ranking, no prices.
 */

const TITLE = "Tile Adhesive Tanzania - Which Adhesive, Grout, Primer";
const DESCRIPTION =
  "Which Mapei tile adhesive, grout, primer and cleaner for which job: ceramic, porcelain and large tiles, outdoors, tile on tile, pools, kitchens, marble and stone. Dar es Salaam.";

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Sahihi` },
  description: DESCRIPTION,
  alternates: { canonical: TILE_PATH },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: TILE_PATH,
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Tile installation", href: TILE_PATH },
];

const places = resolvePlaces(
  tilePlaces,
  (place) => `tile adhesive for ${place.label.toLowerCase()}`,
);

const productCount = selectorProductCount(places);

export default function TileInstallationPage() {
  const hero = linePhotos["tile-adhesives-grouts"];
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "WebPage",
            "@id": `${siteConfig.url}${TILE_PATH}#page`,
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${TILE_PATH}`,
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
            <p className="label-sh mt-10">Tile installation · Tanzania</p>
            <h1 className="font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
              Tile adhesive, job by job.
            </h1>
            <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
              Pick the tiling job. See the {productCount} Mapei adhesives,
              grouts, primers and cleaners we hold in Dar es Salaam that are
              made for it, each with the line of its own data sheet that says
              so.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <FlowButton href="#selector">Start with the job</FlowButton>
              <FlowButton href={whatsappLink("tile adhesive")}>Ask us</FlowButton>
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
            What are you tiling?
          </h2>
          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            Tap a chip and the build-up turns in 3D beside it. The adhesive or primer comes first, then the grout and
            the care products that go with it.
          </p>
          <div className="mt-10" translate="no">
            <SolutionSelector
              places={places}
              stacks={tileStacks}
              groupLabel="Tiling job"
              mainTitle="Adhesive and primer"
              detailsTitle="With it: grout, levelling, care"
            />
          </div>
          <p className="text-muted mt-12 max-w-3xl text-sm leading-relaxed">
            Each product is listed only where its manufacturer&apos;s data sheet
            names that use, quoted word for word. The order is not a ranking.
            The right adhesive also depends on the tile size, the substrate and
            the exposure: send us the details and confirm against the current
            data sheet before you specify. Every product page has a coverage
            calculator and a BOQ clause ready to paste.
          </p>
        </Container>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Mapei tile adhesives and grouts",
            href: "/mapei/tile-adhesives-grouts",
            sub: "The Mapei tiling line",
          },
          {
            label: "Keraflex, Adesilex P7 or Kerabond T",
            href: "/blog/keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t",
            sub: "From the blog",
          },
          {
            label: "Tile adhesive per square metre",
            href: "/blog/tile-adhesive-per-square-metre",
            sub: "From the blog",
          },
          {
            label: "Why floor tiles pop up",
            href: "/blog/why-floor-tiles-pop-up",
            sub: "From the blog",
          },
          {
            label: "Waterproofing selector",
            href: SELECTOR_PATH,
            sub: "By part of the building",
          },
          {
            label: "Concrete repair selector",
            href: REPAIR_PATH,
            sub: "By the damage",
          },
          {
            label: "Specifier pack",
            href: "/specifier-pack",
            sub: "Every BOQ clause in one spreadsheet",
          },
        ]}
      />

      <CtaBand
        label="Tile installation in Tanzania"
        heading="Tell us the tile and the floor. We will quote the system."
        body="Send the tile size, the area and what it goes onto. You get the adhesive, grout and quantities, and a written quotation from our Dar es Salaam office."
        topic="tile adhesive"
      />
    </main>
  );
}
