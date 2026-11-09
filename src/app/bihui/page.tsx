/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ogBase } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

import { ModelViewer } from "@/components/media/model-viewer";
import { SplitHeading } from "@/components/motion/split-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import {
  bihuiCategories,
  bihuiFamilies,
  bihuiHref,
  bihuiModel,
  bihuiModelCount,
  bihuiName,
  bihuiPicture,
  bihuiSkuCount,
} from "@/config/bihui";
import { brandBySlug } from "@/config/brands";
import { siteConfig } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/**
 * BIHUI HUB - owns "BIHUI Tanzania" (SEO-STRATEGY.md 5.1). Every tool and
 * code is from the catalogue the owner supplied. In BIHUI's teal (the
 * `brand-bihui` class). Server component; the 3D viewer is the one island
 * and its picture is what loads with the page.
 */

const TITLE = "BIHUI Tanzania - Tile Levelling, Trowels, Mixers, Cutters";
const DESCRIPTION =
  "BIHUI tiling tools from Sahihi in Dar es Salaam: levelling systems, trowels, floats, mixers, grinders, lasers and cutters. Turn the tools round in 3D.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/bihui" },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: "/bihui",
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "BIHUI", href: "/bihui" },
];

const brand = brandBySlug.bihui;

const faq: FaqItem[] = [
  {
    q: "What does BIHUI make?",
    lead: "Tools for professional tile installers, not adhesives or grouts.",
    points: bihuiCategories.slice(0, 8).map((category) => category.name),
  },
  {
    q: "How soon can I get a BIHUI tool in Tanzania?",
    lead: "We can arrange any tool on this page, with a lead time of 4 days after you confirm the order.",
    points: [
      `Send the code from the tool's page by WhatsApp, or email ${siteConfig.contact.email}`,
      "Your written quotation confirms the size and the arrival date",
    ],
  },
  {
    q: "Why do some tools show a code with no size?",
    lead: "Because the catalogue's printed size contradicts the code on that row.",
    points: [
      "We do not guess which is right",
      "Ask us and we will confirm it before you order",
    ],
  },
  {
    q: "Are the 3D models exact?",
    lead: "They are generated from the catalogue photograph, so they show the tool's form, not a measured drawing.",
    points: [
      "The side the photograph does not show is an estimate",
      "Sizes on the page come from the catalogue, not from the model",
    ],
  },
];

export default function BihuiPage() {
  const mixer = bihuiFamilies.find(
    (family) => family.slug === "portable-mortar-mixer",
  );
  const mixerPicture = mixer && bihuiPicture(mixer);

  return (
    <main className="brand-bihui theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/bihui`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: bihuiFamilies.length,
              itemListElement: bihuiFamilies.map((family, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: bihuiName(family),
                url: `${siteConfig.url}${bihuiHref(family)}`,
              })),
            },
          },
          faqJsonLd(faq),
        ]}
      />

      {/* ---- Masthead: BIHUI teal, white type ------------------------------ */}
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
                alt="BIHUI logo"
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-6 w-auto"
              />
            </span>
          </div>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h1 className="font-display text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
                BIHUI tiling tools in Tanzania.
              </h1>
              <p className="text-phi-1 mt-8 max-w-3xl leading-snug font-light">
                {siteConfig.brandName} supplies BIHUI, a brand of tools for
                professional tile installers: levelling systems, trowels,
                floats, mixers, grinders, laser levels, suction cups and
                large-format cutting systems. Any tool here can be arranged,
                with a lead time of 4 days after you confirm the order.
              </p>
              <dl className="border-deep mt-10 grid max-w-xl grid-cols-3 border-t">
                {[
                  { value: bihuiFamilies.length, label: "Tools" },
                  { value: bihuiSkuCount, label: "Codes" },
                  {
                    value: bihuiModelCount || bihuiCategories.length,
                    label: bihuiModelCount ? "In 3D" : "Categories",
                  },
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
            {mixer && mixerPicture && (
              <figure className="bg-background text-foreground overflow-hidden rounded-[2rem]">
                <ModelViewer
                  model={bihuiModel(mixer) ?? "/models/blog/mortar-mixer.glb"}
                  poster={mixerPicture}
                  alt={`BIHUI ${bihuiName(mixer)}`}
                  preload
                />
                <figcaption className="spec-sh border-deep/15 border-t px-5 py-3 text-center leading-relaxed">
                  {bihuiName(mixer)}. Turn it any way round.
                </figcaption>
              </figure>
            )}
          </div>
        </Container>
      </section>

      {/* ---- Jump chips ----------------------------------------------------- */}
      <section className="border-deep/15 border-b py-8">
        <Container>
          <ul className="flex flex-wrap gap-2.5">
            {bihuiCategories.map((category) => (
              <li key={category.id}>
                <a
                  href={`#${category.id}`}
                  className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                >
                  {category.name}
                  <span className="text-muted ml-2">
                    {category.families.length}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- The range, by category ----------------------------------------- */}
      {bihuiCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="scroll-mt-24 py-12 sm:py-16"
        >
          <Container>
            <SplitHeading
              as="h2"
              className="font-display text-phi-3 tracking-tight"
            >
              {category.name}
            </SplitHeading>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {category.families.map((family) => {
                const picture = bihuiPicture(family);
                const model = bihuiModel(family);
                return (
                  <li key={family.slug}>
                    <Link
                      href={bihuiHref(family)}
                      className="group border-deep/15 flex h-full flex-col overflow-hidden rounded-lg border bg-white transition-transform duration-500 hover:-translate-y-1"
                    >
                      <span className="relative block aspect-square">
                        {picture && (
                          <Image
                            src={picture.src}
                            alt={`BIHUI ${bihuiName(family)}`}
                            fill
                            sizes="(min-width: 80rem) 22vw, (min-width: 64rem) 30vw, 48vw"
                            className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        {model && (
                          <span className="bg-deep text-chalk spec-sh absolute top-2 right-2 rounded-full px-2.5 py-1">
                            3D
                          </span>
                        )}
                      </span>
                      <span className="border-deep/15 flex flex-1 flex-col border-t p-4">
                        <span className="font-display text-brand leading-tight">
                          {bihuiName(family)}
                        </span>
                        <span className="spec-sh text-muted mt-auto pt-3">
                          {family.skus.length === 1
                            ? family.skus[0].sku
                            : `${family.skus.length} codes`}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      ))}

      {/* ---- Guides --------------------------------------------------------- */}
      <section className="bg-surface py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">How to use them</p>
          <h2 className="font-display text-phi-3 mt-5 tracking-tight">
            The right tool, used properly.
          </h2>
          <ul className="mt-8 grid max-w-3xl gap-4">
            <li>
              <Link
                href="/blog/trowel-notch-size-for-tile-size"
                className="u-line"
              >
                Trowel notch size by tile size: a metric chart
              </Link>
            </li>
            <li>
              <Link href="/blog/how-to-mix-tile-adhesive" className="u-line">
                Mixing tile adhesive: paddle, speed and water
              </Link>
            </li>
            <li>
              <Link href="/blog/why-floor-tiles-pop-up" className="u-line">
                Why floor tiles pop up, lift or sound hollow
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      <Faq items={faq} />

      <CtaBand
        label="Tools for your team"
        heading="Send the codes. We will confirm and quote."
        body="Tell us which tools you need and how many. You get a written quotation from our Dar es Salaam office. The tools arrive 4 days after you confirm."
        topic="BIHUI tiling tools"
      />
    </main>
  );
}
