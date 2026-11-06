import type { Metadata } from "next";
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
import { pairAlternates } from "@/config/sw-routes";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { cn, pad } from "@/lib/utils";

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
  const meta = mapeiLineMeta[line];
  const url = lineHref(lineBySlug[line]);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: pairAlternates(url),
    openGraph: { title: meta.title, description: meta.description, url },
  };
}

export default async function MapeiLinePage({ params }: { params: Params }) {
  const { line: slug } = await params;
  if (!isMapeiLine(slug)) notFound();

  const line = lineBySlug[slug];
  const meta = mapeiLineMeta[slug];
  const items = productsInLine(slug);
  const url = lineHref(line);
  const sheets = items.filter((item) => mapeiTds[item.slug]).length;
  const calculators = items.filter((item) => mapeiCoverage[item.slug]).length;
  const position = mapeiLines.indexOf(line);
  const otherLines = mapeiLines.filter((other) => other.slug !== slug);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Mapei", href: "/mapei" },
    { label: line.label, href: url },
  ];

  // Built only from catalogue facts, so it can never drift from the stock.
  const faq: FaqItem[] = [
    {
      q: `Which Mapei ${line.label.toLowerCase()} does Sahihi stock?`,
      lead: `${items.length} products, held in Dar es Salaam.`,
      points: items.map((item) => `${item.name}: ${item.type.toLowerCase()}`),
    },
    ...meta.choose.map((entry) => {
      const [lead, ...rest] = entry.a.split(". ");
      return {
        q: entry.q,
        lead: lead.endsWith(".") ? lead : `${lead}.`,
        points: rest.map((sentence) => sentence.replace(/\.$/, "")),
      };
    }),
    {
      q: "Where are the data sheets and the prices?",
      lead: "Data sheets are on each product page. Prices are quoted.",
      points: [
        `${sheets} of ${items.length} products carry Mapei's technical data sheet as a PDF`,
        `${calculators} have a coverage calculator built on Mapei's consumption figures`,
        "Send quantities by WhatsApp or the enquiry form for a written quotation",
      ],
    },
  ];

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: meta.title,
            description: meta.description,
            url: `${siteConfig.url}${url}`,
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
            <span>Mapei · Authorized distributor, Tanzania</span>
            <span className="spec-sh tracking-normal normal-case">
              Line {pad(position + 1)} / {pad(mapeiLines.length)}
            </span>
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(1.87rem,6.05vw,4.14rem)] leading-[1.02] tracking-tight text-balance">
            {meta.h1}
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <p className="text-phi-1 dropcap max-w-3xl leading-snug font-light">
              {meta.lead}
            </p>
            <dl className="border-deep grid grid-cols-3 border-t">
              {[
                { value: items.length, label: "Products" },
                { value: sheets, label: "Data sheets" },
                { value: calculators, label: "Calculators" },
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
              alt={linePhotos[slug].alt}
              fill
              sizes="(min-width: 90rem) 86rem, 100vw"
              preload
              className="object-cover"
            />
          </figure>
        </Container>
      </section>

      {/* ---- Signature element: one hands-on instrument per line ---------- */}
      <LineSignature slug={slug} />

      {/* ---- The index: one whole-row link per product -------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">The line</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 tracking-tight"
          >
            {items.length} products, one page each.
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
                          alt={`${item.name} pack`}
                          fill
                          sizes="5.5rem"
                          className="object-contain p-1.5"
                        />
                      )}
                    </span>
                    <span>
                      <span className="label-sh text-muted block leading-relaxed">
                        {item.type}
                      </span>
                      <span className="font-display mt-2 block text-2xl leading-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                        {item.name}
                      </span>
                    </span>
                  </span>
                  <span className="text-muted leading-relaxed">
                    {item.summary}
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
        </Container>
      </section>

      <Faq items={faq} heading="Choosing from this line." />

      {/* ---- The other four lines ----------------------------------------- */}
      <section className="border-deep border-t py-16 sm:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-sh text-muted">More Mapei</p>
              <h2 className="font-display text-phi-3 mt-5 tracking-tight">
                The other lines.
              </h2>
            </div>
            <Link
              href="/mapei"
              className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
            >
              All Mapei
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {otherLines.map((other) => (
              <li key={other.slug}>
                <Link
                  href={lineHref(other)}
                  className={cn(
                    mapeiLineMeta[other.slug].stage,
                    "border-deep flex h-full flex-col rounded-lg border p-7 transition-transform duration-500 hover:-translate-y-1",
                  )}
                >
                  <span className="spec-sh text-muted">
                    {productsInLine(other.slug).length} products
                  </span>
                  <span className="font-display mt-4 text-2xl leading-tight">
                    {other.label}
                  </span>
                  <span className="text-muted mt-3 leading-relaxed">
                    {other.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        label={`Mapei ${line.label.toLowerCase()} in Tanzania`}
        heading="Send the specification. We will match the product."
        body="Sahihi is an authorized Mapei distributor in Dar es Salaam. Send the substrate, the area and the exposure, and you get a product recommendation and a written quotation."
        topic={`Mapei ${line.label.toLowerCase()}`}
      />
    </main>
  );
}
