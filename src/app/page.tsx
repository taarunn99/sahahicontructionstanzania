import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BrandMarquee } from "@/components/layout/brand-marquee";
import { BuildUpScrub } from "@/components/motion/build-up-scrub";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { ContactCard } from "@/components/sections/contact-card";
import { Faq } from "@/components/sections/faq";
import { TileFloor } from "@/components/sections/hero/tile-floor";
import { LinesDial, type DialItem } from "@/components/sections/lines-dial";
import { OfferBand } from "@/components/sections/offer-band";
import { ProjectsStrip } from "@/components/sections/projects/projects-strip";
import { JsonLd } from "@/components/seo/json-ld";
import { BrandButton } from "@/components/ui/brand-button";
import { BuildUpDrawing } from "@/components/ui/build-up-drawing";
import { Container } from "@/components/ui/container";
import { brandBySlug } from "@/config/brands";
import {
  lineBySlug,
  lineHref,
  lines,
  productsInLine,
  type LineSlug,
} from "@/config/catalogue";
import {
  capabilities,
  homeFaq,
  initiatives,
  solutions,
} from "@/config/company";
import { materialPhotos, solutionPhotos } from "@/config/images";
import { mapeiLineMeta } from "@/config/mapei";
import { projects, projectsPeriod } from "@/config/projects";
import { siteConfig, whatsappLink } from "@/config/site";
import { pairAlternates } from "@/config/sw-routes";
import { faqJsonLd } from "@/lib/faq";
import { pad } from "@/lib/utils";

/**
 * HOME - owns "construction chemicals Tanzania" (SEO-STRATEGY.md).
 * Server component. Every word, list and link below is in the raw HTML;
 * the client islands (the dial, the project strip, the enquiry composer,
 * the reveals, the FAQ) are all server-rendered first.
 * The first screen is static: no entrance animation above the fold. The
 * hero drawing only moves when the visitor scrolls or moves the pointer.
 */

export const metadata: Metadata = { alternates: pairAlternates("/") };

/** Short names for the dial, where the full label would not fit the arc. */
const DIAL_SHORT: Record<LineSlug, string> = {
  "tile-adhesives-grouts": "Tile adhesives",
  "primers-levelling": "Levelling",
  "concrete-repair": "Concrete repair",
  "resin-flooring": "Resin flooring",
  waterproofing: "Waterproofing",
  "x-calibur": "X-Calibur",
  "oriental-yuhong": "Oriental Yuhong",
};

const dialItems: DialItem[] = lines.map((line) => {
  const items = productsInLine(line.slug);
  return {
    slug: line.slug,
    short: DIAL_SHORT[line.slug],
    label: line.label,
    brand: brandBySlug[line.brand].name,
    blurb: line.blurb,
    count: items.length,
    names: items.slice(0, 5).map((item) => item.name),
    href: lineHref(line),
    stage: mapeiLineMeta[line.slug]?.stage ?? "bg-line",
  };
});
export default function HomePage() {
  return (
    <main className="flex-1">
      <JsonLd
        graph={[
          {
            "@type": "ItemList",
            name: "Product lines",
            itemListElement: lines.map((line, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `${brandBySlug[line.brand].name} ${line.label}`,
              url: `${siteConfig.url}${lineHref(line)}`,
            })),
          },
          faqJsonLd(homeFaq),
        ]}
      />

      {/* ---- Hero: a solid Blue stage, white words, and a floor to play with
          The headline is the LCP and is static. The floor beside it is a
          drawn grid in the HTML; the Three.js floor takes over after the
          first interaction (src/components/sections/hero/tile-floor.tsx). */}
      <section className="bg-accent relative overflow-hidden">
        <Container className="relative z-10 grid items-center gap-6 pt-28 pb-10 lg:min-h-svh lg:grid-cols-[1.2fr_1fr] lg:gap-10 lg:pt-32 lg:pb-20">
          <div>
            <p className="label-sh leading-relaxed">
              <Link href="/mapei" className="u-line">
                Authorized Mapei distributor
              </Link>{" "}
              · Dar es Salaam
            </p>
            <h1 className="font-display mt-6 max-w-[20ch] text-[clamp(2.1rem,6.6vw,4.4rem)] leading-[1.04] text-balance">
              Construction chemicals in Tanzania, for buildings that have to
              last.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed">
              {siteConfig.brandName} supplies Tanzania with Mapei, Oriental
              Yuhong and X-Calibur: tile adhesives, waterproofing, resin
              flooring and concrete repair, backed by technical support and
              applicator training.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BrandButton href="/products" size="lg" variant="solid">
                View products
              </BrandButton>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
              >
                WhatsApp {siteConfig.contact.phone}
              </a>
            </div>
          </div>
          <div>
            <TileFloor className="mx-auto max-w-md lg:max-w-none" />
            <p className="spec-sh mt-1 text-center">
              Move over the floor. Tap it.
            </p>
          </div>
        </Container>
      </section>

      <OfferBand />

      <BrandMarquee label="Authorized distribution · Tanzania" />

      {/* ---- Statement: names the buyer, three capabilities --------------- */}
      <section className="bg-background py-20 sm:py-28">
        <Container>
          <p className="label-sh text-muted">Who we work for</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 max-w-5xl tracking-tight text-balance"
          >
            For the contractors, applicators and engineers who decide how long a
            building lasts.
          </SplitHeading>
          <RevealGroup className="border-deep mt-14 grid border-t md:grid-cols-3">
            {capabilities.map((item, index) => (
              <RevealItem
                key={item.title}
                className="border-deep/15 border-b py-8 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <p className="font-display text-phi-2 leading-none">
                  {pad(index + 1)}
                </p>
                <h3 className="font-display mt-5 text-xl">{item.title}</h3>
                <p className="text-muted mt-3 leading-relaxed">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* ---- Solutions: Mint stage, numbered grid with hairlines ---------- */}
      <section className="bg-line text-foreground grain-sh relative py-20 sm:py-28">
        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <div>
              <p className="label-sh text-muted">Solutions</p>
              <h2 className="font-display text-phi-3 mt-5 max-w-3xl tracking-tight text-balance">
                Five ways a structure fails. One answer for each.
              </h2>
            </div>
            <div>
              <figure className="mb-6 hidden max-w-xl lg:block">
                <BuildUpScrub>
                  <BuildUpDrawing tone="dark" />
                </BuildUpScrub>
                <figcaption className="spec-sh mt-2">
                  Illustrative build-up, not a specification.
                </figcaption>
              </figure>
              <p className="text-muted leading-relaxed">
                Leaks, lifting tiles, failing screeds, cracked and corroding
                concrete. Each has a system built to stop it, for residential,
                commercial, industrial and infrastructure work.
              </p>
            </div>
          </div>

          <ol className="border-deep mt-14 border-t">
            {solutions.map((solution, index) => (
              <li
                key={solution.slug}
                id={solution.slug}
                className="border-deep/20 group grid scroll-mt-28 gap-6 border-b py-9 lg:grid-cols-[5rem_1.2fr_1fr_17rem] lg:gap-10"
              >
                <p className="spec-sh text-muted pt-2">{pad(index + 1)}</p>
                <div>
                  <h3 className="font-display text-phi-2">{solution.label}</h3>
                  <p className="text-muted mt-3 max-w-xl leading-relaxed">
                    {solution.lead}
                  </p>
                  {solution.lines.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {solution.lines.map((slug) => (
                        <li key={slug}>
                          <Link
                            href={lineHref(lineBySlug[slug])}
                            className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                          >
                            {lineBySlug[slug].label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <ul className="space-y-2.5 leading-relaxed">
                  {solution.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden
                        className="bg-deep mt-2.5 size-1 shrink-0 rounded-full"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="border-deep relative order-first aspect-[4/3] overflow-hidden rounded-lg border lg:order-none">
                  <Image
                    src={solutionPhotos[solution.slug].src}
                    alt={solutionPhotos[solution.slug].alt}
                    fill
                    sizes="(min-width: 64rem) 17rem, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---- Product lines: the scroll-driven dial ------------------------- */}
      <LinesDial items={dialItems} />

      {/* ---- Materials: four macros, each a way into a line --------------- */}
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <p className="label-sh text-muted">Up close</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 max-w-4xl tracking-tight text-balance"
          >
            The work happens in millimetres.
          </SplitHeading>
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {materialPhotos.map((item) => (
              <li key={item.src}>
                <Link
                  href={lineHref(lineBySlug[item.line])}
                  className="group block"
                >
                  <span className="border-deep relative block aspect-square overflow-hidden rounded-lg border">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 64rem) 22vw, 46vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                  </span>
                  <span className="font-display mt-4 block text-xl leading-tight">
                    {item.label}
                  </span>
                  <span className="spec-sh text-muted mt-1.5 block">
                    {lineBySlug[item.line].label}&ensp;&rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Projects: a strip to drag ------------------------------------ */}
      <section className="bg-background border-deep overflow-hidden border-t py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-sh text-muted">
                References · {projectsPeriod}
              </p>
              <h2 className="font-display text-phi-3 mt-5 tracking-tight">
                Where the products have gone.
              </h2>
            </div>
            <Link
              href="/projects"
              className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
            >
              All {projects.length} projects
            </Link>
          </div>
          <div className="mt-12">
            <ProjectsStrip projects={projects} />
          </div>
        </Container>
      </section>

      {/* ---- Commitment: the five initiatives ----------------------------- */}
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr]">
            <Reveal>
              <p className="label-sh text-muted">Our commitment to Tanzania</p>
              <h2 className="font-display text-phi-3 mt-5 tracking-tight text-balance">
                More than a delivery note.
              </h2>
              <p className="text-muted mt-6 max-w-md leading-relaxed">
                Supplying the product is the start. The work is building the
                technical capacity that makes it perform on site.
              </p>
              <Link
                href="/about"
                className="chip-sh border-deep mt-8 inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
              >
                About the company
              </Link>
            </Reveal>
            <ol className="border-deep border-t">
              {initiatives.map((item, index) => (
                <li
                  key={item.title}
                  className="border-deep/20 grid gap-x-6 gap-y-2 border-b py-6 sm:grid-cols-[3rem_1fr]"
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
          </div>
        </Container>
      </section>

      <Faq items={homeFaq} />

      <ContactCard />
    </main>
  );
}
