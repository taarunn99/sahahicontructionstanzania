import type { Metadata } from "next";
import { ogBase, resolveOg } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SplitHeading } from "@/components/motion/split-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { LineSignature } from "@/components/sections/signature/line-signature";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import {
  lineBySlug,
  lineHref,
  productHref,
  productsInLine,
} from "@/config/catalogue";
import {
  isMapeiLine,
  mapeiLineMeta,
  mapeiLines,
  mapeiTds,
} from "@/config/mapei";
import { mapeiCoverage } from "@/config/mapei-coverage";
import { linePhotos } from "@/config/images";
import { packshot } from "@/config/packshots";
import { siteConfig } from "@/config/site";
import { swCommon, swHub, swLinePage, swLines, swProducts } from "@/config/sw";
import { pairAlternates, whatsappLinkSw } from "@/config/sw-routes";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { cn, pad } from "@/lib/utils";

// Swahili twin of src/app/mapei/[line]/page.tsx: same sections, same facts.
type Params = Promise<{ line: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return mapeiLines.map((line) => ({ line: line.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { line } = await params;
  if (!isMapeiLine(line)) return {};
  const copy = swLines[line];
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: pairAlternates(lineHref(lineBySlug[line]), "sw"),
    openGraph: {
      ...ogBase,
      title: copy.title,
      description: copy.description,
      url: `/sw/mapei/${line}`,
      locale: "sw_TZ",
      images: resolveOg(`/sw/mapei/${line}`) ?? ogBase.images,
    },
  };
}

export default async function SwahiliMapeiLinePage({
  params,
}: {
  params: Params;
}) {
  const { line: slug } = await params;
  if (!isMapeiLine(slug)) notFound();

  const line = lineBySlug[slug];
  const meta = mapeiLineMeta[slug];
  const copy = swLines[slug];
  const items = productsInLine(slug);
  const url = `/sw/mapei/${slug}`;
  const sheets = items.filter((item) => mapeiTds[item.slug]).length;
  const calculators = items.filter((item) => mapeiCoverage[item.slug]).length;
  const position = mapeiLines.indexOf(line);
  const otherLines = mapeiLines.filter((other) => other.slug !== slug);

  const crumbs = [
    { label: swCommon.home, href: "/sw" },
    { label: "Mapei", href: "/sw/mapei" },
    { label: copy.label, href: url },
  ];

  const faq: FaqItem[] = [
    {
      q: swLinePage.faqFirst(copy.label),
      lead: swLinePage.faqFirstLead(items.length),
      points: items.map(
        (item) => `${item.name}: ${swProducts[item.slug]?.type ?? item.type}`,
      ),
    },
    ...copy.choose.map((entry) => {
      const [lead, ...rest] = entry.a.split(". ");
      return {
        q: entry.q,
        lead: lead.endsWith(".") ? lead : `${lead}.`,
        points: rest.map((sentence) => sentence.replace(/\.$/, "")),
      };
    }),
    {
      q: swLinePage.faqLast,
      lead: swLinePage.faqLastLead,
      points: swLinePage.faqLastPoints(sheets, items.length, calculators),
    },
  ];

  return (
    <main
      lang="sw"
      translate="no"
      className="notranslate theme-light bg-background text-foreground flex-1"
    >
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: copy.title,
            description: copy.description,
            url: `${siteConfig.url}${url}`,
            inLanguage: "sw",
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: items.length,
              itemListElement: items.map((item, index) => ({
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

      {/* ---- Masthead ------------------------------------------------------ */}
      <section className={cn(meta.stage, "grain-sh relative")}>
        <Container className="relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-24">
          <Breadcrumb items={crumbs} />
          <p className="label-sh text-muted mt-10 flex flex-wrap gap-x-4 gap-y-2 leading-relaxed">
            <span>{swLinePage.kicker}</span>
            <span className="spec-sh tracking-normal normal-case">
              {swLinePage.position(pad(position + 1), pad(mapeiLines.length))}
            </span>
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(1.87rem,6.05vw,4.14rem)] leading-[1.02] tracking-tight text-balance">
            {copy.h1}
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <p className="text-phi-1 dropcap max-w-3xl leading-snug font-light">
              {copy.lead}
            </p>
            <dl className="border-deep grid grid-cols-3 border-t">
              {[
                { value: items.length, label: swLinePage.stats.products },
                { value: sheets, label: swLinePage.stats.sheets },
                { value: calculators, label: swLinePage.stats.calculators },
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
          <figure className="border-deep relative mt-12 aspect-[4/3] overflow-hidden rounded-lg border sm:mt-16 sm:aspect-[21/9]">
            <Image
              src={linePhotos[slug].src}
              alt={copy.photoAlt}
              fill
              sizes="(min-width: 90rem) 86rem, 100vw"
              preload
              className="object-cover"
            />
          </figure>
        </Container>
      </section>

      {/* ---- Signature element: one hands-on instrument per line ---------- */}
      <LineSignature
        slug={slug}
        override={{
          label: swLinePage.handsOn(copy.handsOn.name),
          heading: copy.handsOn.heading,
          body: copy.handsOn.body,
        }}
      />

      {/* ---- The index: one whole-row link per product -------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">{swLinePage.listLabel}</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 tracking-tight"
          >
            {swLinePage.listHeading(items.length)}
          </SplitHeading>

          <ul className="border-deep mt-12 border-t">
            {items.map((item, index) => (
              <li key={item.slug} className="border-deep/15 border-b">
                <Link
                  href={productHref(item)}
                  className="group hover:bg-surface/60 grid items-baseline gap-x-8 gap-y-2 py-7 transition-colors sm:px-3 lg:grid-cols-[3.5rem_1.1fr_1.4fr_auto]"
                >
                  <span className="spec-sh text-muted">{pad(index + 1)}</span>
                  <span className="grid grid-cols-[4.5rem_1fr] items-center gap-4 sm:grid-cols-[5.5rem_1fr]">
                    <span className="border-deep/15 relative block aspect-square overflow-hidden rounded-md border bg-white">
                      {packshot("mapei", item.slug) && (
                        <Image
                          src={packshot("mapei", item.slug)!.src}
                          alt={swCommon.packAlt(item.name)}
                          fill
                          sizes="5.5rem"
                          className="object-contain p-1.5"
                        />
                      )}
                    </span>
                    <span>
                      <span className="label-sh text-muted block leading-relaxed">
                        {swProducts[item.slug]?.type ?? item.type}
                      </span>
                      <span className="font-display mt-2 block text-2xl leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                        {item.name}
                      </span>
                    </span>
                  </span>
                  <span className="text-muted leading-relaxed">
                    {swProducts[item.slug]?.summary ?? item.summary}
                  </span>
                  <span className="spec-sh flex flex-wrap gap-x-4 gap-y-1 lg:flex-col lg:items-end lg:text-right">
                    {item.classification && <span>{item.classification}</span>}
                    <span>{item.packs.join(" · ")}</span>
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
          <p className="text-muted mt-6 leading-relaxed">{swHub.note}</p>
        </Container>
      </section>

      <Faq
        items={faq}
        heading={swLinePage.faqHeading}
        eyebrow={swCommon.faqEyebrow}
      />

      {/* ---- The other four lines ----------------------------------------- */}
      <section className="border-deep border-t py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-sh text-muted">{swLinePage.moreLabel}</p>
              <h2 className="font-display text-phi-3 mt-5 tracking-tight">
                {swLinePage.moreHeading}
              </h2>
            </div>
            <Link
              href="/sw/mapei"
              className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
            >
              {swLinePage.allMapei}
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {otherLines.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/sw/mapei/${other.slug}`}
                  className={cn(
                    mapeiLineMeta[other.slug].stage,
                    "border-deep flex h-full flex-col rounded-lg border p-7 transition-transform duration-500 hover:-translate-y-1",
                  )}
                >
                  <span className="spec-sh text-muted">
                    {swLinePage.count(productsInLine(other.slug).length)}
                  </span>
                  <span className="font-display mt-4 text-2xl leading-tight">
                    {swLines[other.slug].label}
                  </span>
                  <span className="text-muted mt-3 leading-relaxed">
                    {swLines[other.slug].blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        label={swLinePage.ctaLabel(copy.label)}
        heading={swLinePage.ctaHeading}
        body={swLinePage.ctaBody}
        button={swCommon.enquiry}
        whatsappHref={whatsappLinkSw(
          siteConfig.contact.whatsapp,
          `Mapei: ${copy.label}`,
        )}
      />
    </main>
  );
}
