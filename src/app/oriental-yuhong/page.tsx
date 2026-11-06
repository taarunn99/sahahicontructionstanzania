/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SplitHeading } from "@/components/motion/split-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { brandBySlug } from "@/config/brands";
import { productHref } from "@/config/catalogue";
import {
  oyhCoverage,
  oyhInUse,
  oyhProducts,
  oyhTds,
} from "@/config/oriental-yuhong";
import { packshot } from "@/config/packshots";
import { siteConfig } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { pad } from "@/lib/utils";

/**
 * ORIENTAL YUHONG HUB - owns "Oriental Yuhong Tanzania"
 * (SEO-STRATEGY.md 5.1). The site's shell in OYH's reds (the
 * `brand-oriental-yuhong` palette). Server component. Every statement
 * about a product is read from the catalogue, the coverage models or the
 * data sheet content, all of which quote OYH's own technical data sheets.
 * The application photographs are OYH's, from those data sheets.
 */

const TITLE = "Oriental Yuhong Tanzania - OYH Waterproofing Coatings";
const DESCRIPTION =
  "Sahihi supplies Oriental Yuhong (OYH) in Tanzania: waterproofing coatings for wet rooms, roofs and walls, a joint sealant and a waterplug, with data sheets.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/oriental-yuhong" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/oriental-yuhong",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Oriental Yuhong", href: "/oriental-yuhong" },
];

const brand = brandBySlug["oriental-yuhong"];

// Where each product goes. The uses are the data sheets' own.
const JOBS = [
  {
    name: "Bathrooms, kitchens and wet rooms",
    steps: ["yhrepair-2516", "yhcoat-2060"],
  },
  { name: "Roofs and exterior walls", steps: ["yhcolorwall-5300"] },
  {
    name: "Balconies, floors and foundations",
    steps: ["yhcoat-1000"],
  },
  { name: "Joints in walls and roofs", steps: ["yhpuseal-2925"] },
  { name: "A leak with water running", steps: ["yhrepair-2516"] },
];

const faq: FaqItem[] = [
  {
    q: "Which Oriental Yuhong products does Sahihi stock in Tanzania?",
    lead: `${oyhProducts.length} products, held in Dar es Salaam.`,
    points: oyhProducts.map(
      (item) => `${item.name}: ${item.type.toLowerCase()}`,
    ),
  },
  {
    q: "Which Oriental Yuhong coating goes under tiles in a bathroom?",
    lead: "YHCoat-2060, a one-component coating for wet rooms.",
    points: [
      "Its data sheet says the cured membrane provides a keyed finish to promote direct tile adhesion with cement-based tile adhesive",
      "It is applied as a 1.0 mm dry film in 2 coats, at 1.0 kg/m² per coat",
    ],
  },
  {
    q: "Which one is for a roof in the sun?",
    lead: "YHColorWall-5300, a UV-resistant elastic coating for roofs and exterior walls.",
    points: [
      "OYH gives 3 kg/m² for a roof and 2 kg/m² for a wall",
      "Its data sheet lists a solar reflectance of 82%",
    ],
  },
  {
    q: "Is it Oriental Yuhong, Yuhong or OYH?",
    lead: "All three are the same maker. The packs carry the name Yuhong.",
    points: [
      "The company is Oriental Yuhong, shortened to OYH",
      "Product names start with YH, as in YHCoat and YHRepair",
    ],
  },
];

export default function OrientalYuhongPage() {
  const sheets = oyhProducts.filter((item) => oyhTds[item.slug]);
  const calculators = oyhProducts.filter((item) => oyhCoverage[item.slug]);
  const bySlug = Object.fromEntries(
    oyhProducts.map((item) => [item.slug, item]),
  );
  const photos = oyhProducts.filter((item) => oyhInUse[item.slug]);

  return (
    <main className="brand-oriental-yuhong theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/oriental-yuhong`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: oyhProducts.length,
              itemListElement: oyhProducts.map((item, index) => ({
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

      {/* ---- Masthead: OYH red, white type --------------------------------- */}
      <section className="bg-accent">
        <Container className="pt-28 pb-16 sm:pt-36 sm:pb-24">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="label-sh leading-relaxed">
              {brand.authorization} · Tanzania
            </p>
            <span className="inline-flex rounded-full bg-white px-5 py-3">
              <img
                src={brand.logo.src}
                alt="Oriental Yuhong logo"
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-6 w-auto"
              />
            </span>
          </div>
          <h1 className="font-display mt-6 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
            Oriental Yuhong in Tanzania.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <p className="text-phi-1 max-w-3xl leading-snug font-light">
              {siteConfig.brandName} supplies Oriental Yuhong (OYH) in Tanzania:
              waterproofing coatings for wet rooms, for roofs and walls and for
              floors and foundations, a polyurethane joint sealant and a
              rapid-setting waterplug, held in Dar es Salaam.
            </p>
            <dl className="border-deep grid grid-cols-3 border-t">
              {[
                { value: oyhProducts.length, label: "Products" },
                { value: sheets.length, label: "Data sheets" },
                { value: calculators.length, label: "Calculators" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-deep/20 border-r py-5 pr-3 not-first:pl-4 last:border-r-0"
                >
                  <dd className="font-display text-phi-3 leading-none">
                    {stat.value}
                  </dd>
                  <dt className="label-sh mt-3 leading-relaxed">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ---- The products: one card each, with OYH's own pack picture ----- */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">The range we stock</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 tracking-tight"
          >
            {oyhProducts.length} products, one page each.
          </SplitHeading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {oyhProducts.map((item, index) => {
              const pack = packshot("oriental-yuhong", item.slug);
              return (
                <li key={item.slug}>
                  <Link
                    href={productHref(item)}
                    className="group border-deep/15 flex h-full flex-col overflow-hidden rounded-lg border bg-white transition-transform duration-500 hover:-translate-y-1"
                  >
                    <span className="relative block aspect-[4/3]">
                      {pack && (
                        <Image
                          src={pack.src}
                          alt={`${item.name} pack`}
                          fill
                          sizes="(min-width: 80rem) 28vw, (min-width: 40rem) 46vw, 100vw"
                          className="object-contain p-7 transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </span>
                    <span className="border-deep/15 flex flex-1 flex-col border-t p-6 sm:p-7">
                      <span className="spec-sh text-muted flex justify-between gap-4">
                        <span>{pad(index + 1)}</span>
                        <span>{item.packs.join(" · ")}</span>
                      </span>
                      <span className="label-sh text-muted mt-6 leading-relaxed">
                        {item.type}
                      </span>
                      <span className="font-display text-brand mt-2 text-2xl leading-tight uppercase">
                        {item.name}
                      </span>
                      <span className="mt-3 leading-relaxed">
                        {item.summary}
                      </span>
                      <span className="spec-sh mt-auto flex items-center justify-between gap-4 pt-7">
                        <span>Data sheet PDF</span>
                        <span
                          aria-hidden
                          className="inline-block transition-transform duration-500 group-hover:translate-x-2"
                        >
                          &rarr;
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ---- Where each one goes -------------------------------------------- */}
      <section className="bg-surface py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">By job</p>
          <h2 className="font-display text-phi-3 mt-5 max-w-3xl tracking-tight text-balance">
            Which one for which job.
          </h2>
          <ol className="border-deep mt-12 border-t">
            {JOBS.map((job, index) => (
              <li
                key={job.name}
                className="border-deep/20 grid gap-x-8 gap-y-4 border-b py-7 lg:grid-cols-[4rem_1fr_1.618fr]"
              >
                <span className="spec-sh text-muted pt-1.5">
                  {pad(index + 1)}
                </span>
                <h3 className="font-display text-2xl leading-tight">
                  {job.name}
                </h3>
                <ul className="flex flex-wrap items-center gap-2.5">
                  {job.steps.map((slug, step) => (
                    <li key={slug} className="flex items-center gap-2.5">
                      {step > 0 && <span aria-hidden>+</span>}
                      <Link
                        href={productHref(bySlug[slug])}
                        className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                      >
                        {bySlug[slug].name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---- OYH's own application photographs ----------------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">In use</p>
          <h2 className="font-display text-phi-3 mt-5 tracking-tight">
            On the job.
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {photos.map((item) => (
              <li key={item.slug}>
                <Link href={productHref(item)} className="group block">
                  <span className="border-deep/15 relative block aspect-[3/2] overflow-hidden rounded-lg border">
                    <Image
                      src={oyhInUse[item.slug].src}
                      alt={oyhInUse[item.slug].alt}
                      fill
                      sizes="(min-width: 40rem) 46vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="font-display mt-4 block text-xl">
                    {item.name}
                  </span>
                  <span className="spec-sh text-muted mt-1.5 block">
                    {item.type} · Oriental Yuhong&apos;s photograph
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Faq items={faq} heading="Oriental Yuhong, in short." />

      <CtaBand
        label="Oriental Yuhong in Tanzania"
        heading="Send the area and the surface. We will name the coating."
        body="Tell us whether it is a wet room, a roof, a wall or a leak, and the area. You get a product recommendation and a written quotation from our Dar es Salaam office."
        topic="Oriental Yuhong products"
      />
    </main>
  );
}
