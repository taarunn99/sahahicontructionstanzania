import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";
import { ModelCta } from "@/components/sections/model-cta";
import Image from "next/image";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { SportsCalculator } from "@/components/sections/oyh/sports-calculator";
import { RelatedLinks } from "@/components/sections/related-links";
import { SportsFilms } from "@/components/sections/oyh/sports-films";
import { Downloads } from "@/components/sections/vasa/decor-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { LayerStack } from "@/components/three-d/layer-stack";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import {
  dryingTimes,
  sportsBoms,
  sportsChooser,
  sportsPlaces,
  sportsVideos,
} from "@/config/oyh-sports";
import {
  EXTRA_DOWNLOADS,
  LEAD_TIME,
  SITE,
  SPORTS_ONE_LINERS,
  SPORTS_PATH,
  STAGES,
  STEPS,
  SYSTEM_PAGES,
  SYSTEMS,
} from "@/config/oyh-sports-systems";
import { siteConfig, whatsappLink } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/**
 * ONE PAGE PER OYH SPORTS SYSTEM (owner, 2026-11-09: "one page would be harder to
 * rank"). Data: src/config/oyh-sports-systems.ts and src/config/oyh-sports.ts.
 * Prices never appear: the calculator shows kg and packs only.
 */

type Props = { params: Promise<{ system: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SYSTEMS.map((item) => ({ system: item.slug }));
}

const find = (slug: string) => {
  const system = SYSTEMS.find((item) => item.slug === slug);
  const page = SYSTEM_PAGES[slug];
  return system && page ? { system, page } : null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const found = find((await params).system);
  if (!found) return {};
  const path = `${SPORTS_PATH}/${found.system.slug}`;
  return {
    title: { absolute: found.page.title },
    description: found.page.description,
    alternates: { canonical: path },
    openGraph: {
      ...ogBase,
      title: found.page.title,
      description: found.page.description,
      url: path,
      images: [found.system.picture.src],
    },
  };
}

const WORDS = ["Not suited", "Possible", "Good", "Best"];

export default async function SportsSystemPage({ params }: Props) {
  const found = find((await params).system);
  if (!found) notFound();
  const { system, page } = found;
  const path = `${SPORTS_PATH}/${system.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Oriental Yuhong", href: "/oriental-yuhong" },
    { label: "Sports flooring", href: SPORTS_PATH },
    { label: system.name, href: path },
  ];
  const film = sportsVideos.find((item) => item.slug === page.film);
  const bom = sportsBoms.find((item) => item.slug === page.bom);
  const fit = sportsChooser.find((item) => item.system === system.slug);
  const stage = page.stage === undefined ? undefined : STAGES[page.stage];
  const stockLine =
    page.stock === "held"
      ? `Held by ${siteConfig.brandName} in Dar es Salaam.`
      : `Supplied by ${siteConfig.brandName}, ${LEAD_TIME}.`;
  const downloads = [
    ...(system.download
      ? [
          {
            file: system.download.file,
            label: `${system.name}, Oriental Yuhong`,
            pages: system.download.pages,
            note: system.download.size,
          },
        ]
      : []),
    ...(page.extraDownloads ?? []).map((index) => EXTRA_DOWNLOADS[index]),
    EXTRA_DOWNLOADS[0],
  ];
  const faq: FaqItem[] = [
    ...page.faq.map((item) => ({ ...item, points: item.points ?? [] })),
    {
      q: `Is the ${system.name.toLowerCase()} available in Tanzania?`,
      lead: `Yes. ${stockLine}`,
      points: [
        "Send the area, the sport and the base for a written quotation",
        "Prices are not published on this site",
      ],
    },
  ];
  const others = SYSTEMS.filter((item) => item.slug !== system.slug);

  return (
    <main className="brand-oriental-yuhong theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Product",
            name: `Oriental Yuhong ${system.name}`,
            description: system.buildUp,
            brand: { "@type": "Brand", name: "Oriental Yuhong" },
            image: `${siteConfig.url}${system.picture.src}`,
            url: `${siteConfig.url}${path}`,
            category: "Sports flooring",
          },
          faqJsonLd(faq),
        ]}
      />

      <section className="bg-accent">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh mt-10">Oriental Yuhong · Sports flooring</p>
          <h1 className="font-display mt-5 text-[clamp(2rem,7vw,4.75rem)] leading-[1.02] text-balance uppercase">
            {page.h1}
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
            {system.buildUp}
          </p>
          <p className="mt-4 font-bold">{stockLine}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href={whatsappLink(`OYH ${system.name}`)}>
              Request a quote
            </FlowButton>
            {bom && (
              <FlowButton href="#materials">Work out the materials</FlowButton>
            )}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <span className="relative block aspect-[3/2] overflow-hidden rounded-2xl bg-white">
              <Image
                src={system.picture.src}
                alt={system.picture.alt}
                fill
                sizes="(min-width: 64rem) 48vw, 100vw"
                className="object-cover"
                priority
              />
            </span>
            <div>
              <p className="label-sh text-muted">Where it goes</p>
              <p className="text-phi-1 mt-4 leading-snug">{system.suits}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {system.advantages.map((item) => (
                  <li
                    key={item}
                    className="border-deep/20 rounded-full border bg-white px-3 py-1.5 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {system.aka && (
                <p className="text-muted mt-4 text-sm">
                  Also called {system.aka}.
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">The build-up</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Pull the {system.name.toLowerCase()} apart.
          </h2>
          <div className="mt-8">
            <LayerStack layers={system.layers} />
          </div>
          <ModelCta className="mt-6" topic={`OYH ${system.name}`} />
        </Container>
      </section>

      {fit && (
        <section className="py-14 sm:py-20">
          <Container>
            <p className="label-sh text-muted">
              Oriental Yuhong&apos;s selection table
            </p>
            <h2 className="font-display text-phi-3 mt-4 tracking-tight">
              Where it fits best.
            </h2>
            <ul className="mt-8 grid max-w-3xl gap-2">
              {sportsPlaces.map((place, index) => (
                <li
                  key={place}
                  className="border-deep/15 text-deep grid grid-cols-[1fr_auto] items-center gap-4 rounded-xl border bg-white px-4 py-3"
                >
                  <span className="font-bold">{place}</span>
                  <span className="flex items-center gap-3">
                    <span className="flex gap-1" aria-hidden="true">
                      {[1, 2, 3].map((dot) => (
                        <span
                          key={dot}
                          className={`size-3 rounded-full ${dot <= fit.fit[index] ? "bg-deep" : "bg-deep/15"}`}
                        />
                      ))}
                    </span>
                    <span className="spec-sh w-20 text-right">
                      {WORDS[fit.fit[index]]}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {film && (
        <section
          className={fit ? "bg-surface py-14 sm:py-20" : "py-14 sm:py-20"}
        >
          <Container>
            <p className="label-sh text-muted">Oriental Yuhong&apos;s film</p>
            <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
              Watch one go down, step by step.
            </h2>
            <div className="mt-8">
              <SportsFilms videos={[film]} />
            </div>
          </Container>
        </section>
      )}

      {bom && (
        <section
          id="materials"
          className="bg-surface scroll-mt-28 py-14 sm:py-20"
        >
          <Container>
            <p className="label-sh text-muted">Materials</p>
            <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
              What your area takes.
            </h2>
            <div className="mt-8">
              <SportsCalculator boms={[bom]} />
            </div>
          </Container>
        </section>
      )}

      {(stage || page.drying || page.site) && (
        <section className="py-14 sm:py-20">
          <Container>
            <p className="label-sh text-muted">How it is built</p>
            <h2 className="font-display text-phi-3 mt-4 tracking-tight">
              The stages, and the site.
            </h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              {stage && (
                <ol className="space-y-2">
                  {stage.steps.map((step, index) => (
                    <li
                      key={step}
                      className="border-deep/15 flex gap-3 rounded-xl border bg-white p-3"
                    >
                      <span className="spec-sh">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-snug font-semibold">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              )}
              <div className="space-y-8">
                {page.site && (
                  <ul className="space-y-3 leading-relaxed">
                    {SITE.map((item) => (
                      <li key={item} className="border-deep/15 border-l-4 pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {page.drying && (
                  <div>
                    <h3 className="font-display text-xl">Drying</h3>
                    <table className="mt-4 w-full text-left text-sm">
                      <thead>
                        <tr className="border-deep border-b">
                          <th scope="col" className="py-2 font-bold">
                            Layer
                          </th>
                          <th scope="col" className="py-2 font-bold">
                            Surface dry
                          </th>
                          <th scope="col" className="py-2 font-bold">
                            Next coat
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {dryingTimes[page.drying].map(
                          ([layer, dry, recoat]) => (
                            <tr key={layer} className="border-deep/15 border-b">
                              <th scope="row" className="py-2 font-semibold">
                                {layer}
                              </th>
                              <td className="spec-sh py-2">{dry}</td>
                              <td className="spec-sh py-2">{recoat}</td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                    <p className="text-muted mt-3 text-sm">
                      At 23°C and 50% relative humidity.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {page.steps && (
        <section className="py-14 sm:py-20">
          <Container>
            <p className="label-sh text-muted">On site</p>
            <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
              How the surface goes down.
            </h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((step, index) => (
                <li
                  key={step.title}
                  className="border-deep/15 overflow-hidden rounded-2xl border bg-white"
                >
                  <span className="relative block aspect-[3/2]">
                    <Image
                      src={step.picture.src}
                      alt={step.picture.alt}
                      fill
                      sizes="(min-width: 64rem) 32vw, (min-width: 40rem) 48vw, 100vw"
                      className="object-cover"
                    />
                  </span>
                  <div className="p-5">
                    <p className="spec-sh text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-1 text-lg">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Downloads</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            Oriental Yuhong&apos;s documents.
          </h2>
          <Downloads items={downloads} />
          {!system.download && (
            <p className="text-muted mt-5 text-sm">
              For this system&apos;s own pages, ask us.
            </p>
          )}
        </Container>
      </section>

      <Faq items={faq} heading={`${system.name}, in short.`} />

      <RelatedLinks
        label="The other systems"
        heading="Seven systems. Six more to see."
        links={[
          ...others.map((item) => ({
            label: item.name,
            href: `${SPORTS_PATH}/${item.slug}`,
            sub: SPORTS_ONE_LINERS[item.slug],
            picture: item.picture.src,
          })),
          {
            label: "All sports flooring",
            href: SPORTS_PATH,
            sub: "The chooser, the films, the calculator",
          },
        ]}
      />

      <CtaBand
        label={`${system.name} in Tanzania`}
        heading="Send the area and the sport."
        body="Tell us the size, the sport and what the base is. You get a written quotation from our Dar es Salaam office."
        topic={`OYH ${system.name}`}
      />
    </main>
  );
}
