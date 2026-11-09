import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";
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
import { solutions } from "@/config/company";
import { materialPhotos, solutionPhotos } from "@/config/images";
import { mapeiLineMeta } from "@/config/mapei";
import { offer } from "@/config/offers";
import { projects, projectsPeriod } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { swHome, swLines, swOtherLines } from "@/config/sw";
import { pairAlternates, swTwin, whatsappLinkSw } from "@/config/sw-routes";
import { faqJsonLd } from "@/lib/faq";
import { pad } from "@/lib/utils";

/**
 * Swahili home page: twin of src/app/page.tsx, same sections, same facts. The
 * first screen is static, as on the English page.
 */

export const metadata: Metadata = {
  title: { absolute: swHome.title },
  description: swHome.description,
  alternates: pairAlternates("/", "sw"),
  openGraph: {
    ...ogBase,
    title: swHome.title,
    description: swHome.description,
    url: "/sw",
    locale: "sw_TZ",
  },
};

const whatsapp = (topic: string) =>
  whatsappLinkSw(siteConfig.contact.whatsapp, topic);

const swLine = (slug: LineSlug) => swLines[slug] ?? swOtherLines[slug];
const hrefFor = (slug: LineSlug) => {
  const english = lineHref(lineBySlug[slug]);
  return swTwin(english) ?? english;
};

const dialItems: DialItem[] = lines.map((line) => {
  const items = productsInLine(line.slug);
  const copy = swLine(line.slug);
  return {
    slug: line.slug,
    short: copy?.short ?? line.label,
    label: copy?.label ?? line.label,
    brand: brandBySlug[line.brand].name,
    blurb: copy?.blurb ?? line.blurb,
    count: items.length,
    names: items.slice(0, 5).map((item) => item.name),
    href: hrefFor(line.slug),
    stage: mapeiLineMeta[line.slug]?.stage ?? "bg-line",
  };
});

export default function SwahiliHomePage() {
  return (
    <main lang="sw" translate="no" className="notranslate flex-1">
      <JsonLd
        graph={[
          {
            "@type": "ItemList",
            name: "Makundi ya bidhaa",
            inLanguage: "sw",
            itemListElement: lines.map((line, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: `${brandBySlug[line.brand].name} ${swLine(line.slug)?.label ?? line.label}`,
              url: `${siteConfig.url}${hrefFor(line.slug)}`,
            })),
          },
          faqJsonLd(swHome.faq),
        ]}
      />

      <section className="bg-accent relative overflow-hidden">
        <Container className="relative z-10 grid items-center gap-6 pt-28 pb-10 lg:min-h-svh lg:grid-cols-[1.2fr_1fr] lg:gap-10 lg:pt-32 lg:pb-20">
          <div>
            <p className="label-sh leading-relaxed">
              <Link href="/sw/mapei" className="u-line">
                {swHome.kicker}
              </Link>{" "}
              · Dar es Salaam
            </p>
            <h1 className="font-display mt-6 max-w-[20ch] text-[clamp(2.1rem,6.6vw,4.4rem)] leading-[1.04] text-balance">
              {swHome.h1}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed">
              {swHome.lead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BrandButton href="/products" size="lg" variant="solid">
                {swHome.viewProducts}
              </BrandButton>
              <a
                href={whatsapp("bidhaa za kemikali za ujenzi")}
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
            <p className="spec-sh mt-1 text-center">{swHome.floorHint}</p>
          </div>
        </Container>
      </section>

      <OfferBand
        copy={{
          label: swHome.offer.label,
          heading: swHome.offer.heading(offer.items.length, offer.brand),
          body: swHome.offer.body,
          button: swHome.offer.button,
        }}
        whatsappHref={whatsapp(swHome.offer.topic)}
      />

      <BrandMarquee label={swHome.marquee} />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <p className="label-sh text-muted">{swHome.whoLabel}</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 max-w-5xl tracking-tight text-balance"
          >
            {swHome.whoHeading}
          </SplitHeading>
          <RevealGroup className="border-deep mt-14 grid border-t md:grid-cols-3">
            {swHome.capabilities.map((item, index) => (
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

      <section className="bg-line text-foreground grain-sh relative py-20 sm:py-28">
        <Container className="relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <div>
              <p className="label-sh text-muted">{swHome.solutionsLabel}</p>
              <h2 className="font-display text-phi-3 mt-5 max-w-3xl tracking-tight text-balance">
                {swHome.solutionsHeading}
              </h2>
            </div>
            <div>
              <figure className="mb-6 hidden max-w-xl lg:block">
                <BuildUpScrub>
                  <BuildUpDrawing tone="dark" />
                </BuildUpScrub>
                <figcaption className="spec-sh mt-2">
                  Mchoro wa mfano wa matabaka, si specification. Majina ya
                  matabaka yako kwa Kiingereza.
                </figcaption>
              </figure>
              <p className="text-muted leading-relaxed">
                {swHome.solutionsBody}
              </p>
            </div>
          </div>

          <ol className="border-deep mt-14 border-t">
            {solutions.map((solution, index) => {
              const copy = swHome.solutions[solution.slug];
              return (
                <li
                  key={solution.slug}
                  id={solution.slug}
                  className="border-deep/20 group grid scroll-mt-28 gap-6 border-b py-9 lg:grid-cols-[5rem_1.2fr_1fr_17rem] lg:gap-10"
                >
                  <p className="spec-sh text-muted pt-2">{pad(index + 1)}</p>
                  <div>
                    <h3 className="font-display text-phi-2">{copy.label}</h3>
                    <p className="text-muted mt-3 max-w-xl leading-relaxed">
                      {copy.lead}
                    </p>
                    {solution.lines.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2.5">
                        {solution.lines.map((slug) => (
                          <li key={slug}>
                            <Link
                              href={hrefFor(slug)}
                              className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                            >
                              {swLine(slug)?.label ?? lineBySlug[slug].label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <ul className="space-y-2.5 leading-relaxed">
                    {copy.scope.map((item) => (
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
                      alt={copy.alt}
                      fill
                      sizes="(min-width: 64rem) 17rem, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <LinesDial items={dialItems} copy={swHome.dial} />

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <p className="label-sh text-muted">{swHome.materialsLabel}</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 max-w-4xl tracking-tight text-balance"
          >
            {swHome.materialsHeading}
          </SplitHeading>
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {materialPhotos.map((item, index) => (
              <li key={item.src}>
                <Link href={hrefFor(item.line)} className="group block">
                  <span className="border-deep relative block aspect-square overflow-hidden rounded-lg border">
                    <Image
                      src={item.src}
                      alt={swHome.materials[index].alt}
                      fill
                      sizes="(min-width: 64rem) 22vw, 46vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                  </span>
                  <span className="font-display mt-4 block text-xl leading-tight">
                    {swHome.materials[index].label}
                  </span>
                  <span className="spec-sh text-muted mt-1.5 block">
                    {swLine(item.line)?.short}&ensp;&rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-background border-deep overflow-hidden border-t py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-sh text-muted">
                {swHome.projectsLabel} · {projectsPeriod}
              </p>
              <h2 className="font-display text-phi-3 mt-5 tracking-tight">
                {swHome.projectsHeading}
              </h2>
            </div>
            <Link
              href="/projects"
              className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
            >
              {swHome.allProjects(projects.length)}
            </Link>
          </div>
          <div className="mt-12">
            <ProjectsStrip
              projects={projects}
              countPrefix="Bidhaa "
              countSuffix=""
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr]">
            <Reveal>
              <p className="label-sh text-muted">{swHome.commitmentLabel}</p>
              <h2 className="font-display text-phi-3 mt-5 tracking-tight text-balance">
                {swHome.commitmentHeading}
              </h2>
              <p className="text-muted mt-6 max-w-md leading-relaxed">
                {swHome.commitmentBody}
              </p>
              <Link
                href="/about"
                className="chip-sh border-deep mt-8 inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
              >
                {swHome.aboutCompany}
              </Link>
            </Reveal>
            <ol className="border-deep border-t">
              {swHome.initiatives.map((item, index) => (
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

      <Faq items={swHome.faq} heading={swHome.faqHeading} eyebrow="Maswali" />

      <ContactCard
        copy={swHome.contact}
        whatsappHref={whatsapp("bidhaa za kemikali za ujenzi")}
      />
    </main>
  );
}
