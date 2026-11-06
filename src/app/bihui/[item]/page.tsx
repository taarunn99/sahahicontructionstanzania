import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ModelViewer } from "@/components/media/model-viewer";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import {
  bihuiCategories,
  bihuiFamilies,
  bihuiFamilyBySlug,
  bihuiHref,
  bihuiItemTitle,
  bihuiModel,
  bihuiName,
  bihuiPicture,
  isDoubtfulRow,
} from "@/config/bihui";
import { siteConfig, whatsappLink } from "@/config/site";
import { seoDescription } from "@/lib/seo";

type Params = Promise<{ item: string }>;

// One indexed URL per tool family, all generated at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return bihuiFamilies.map((family) => ({ item: family.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { item } = await params;
  const family = bihuiFamilyBySlug[item];
  if (!family) return {};
  const title = bihuiItemTitle(family);
  const description = seoDescription(
    `BIHUI ${bihuiName(family)}: ${family.summary}`,
    "From Sahihi in Dar es Salaam.",
    "Codes and sizes from the catalogue.",
    "Ask for a quotation in Tanzania.",
  );
  const url = bihuiHref(family);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default async function BihuiItemPage({ params }: { params: Params }) {
  const { item } = await params;
  const family = bihuiFamilyBySlug[item];
  if (!family) notFound();

  const name = bihuiName(family);
  const url = bihuiHref(family);
  const picture = bihuiPicture(family);
  const model = bihuiModel(family);
  const category = bihuiCategories.find(
    (entry) => entry.name === family.category,
  );
  const position = bihuiFamilies.indexOf(family);
  const previous =
    bihuiFamilies[(position - 1 + bihuiFamilies.length) % bihuiFamilies.length];
  const next = bihuiFamilies[(position + 1) % bihuiFamilies.length];
  const related = (category?.families ?? [])
    .filter((entry) => entry.slug !== family.slug)
    .slice(0, 4);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "BIHUI", href: "/bihui" },
    { label: name, href: url },
  ];

  return (
    <main className="brand-bihui theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Product",
            "@id": `${siteConfig.url}${url}#product`,
            name,
            description: family.summary,
            category: family.category,
            sku: family.skus[0]?.sku,
            brand: { "@type": "Brand", name: "BIHUI" },
            manufacturer: { "@type": "Organization", name: "BIHUI" },
            url: `${siteConfig.url}${url}`,
            ...(picture && { image: `${siteConfig.url}${picture.src}` }),
            // No `offers`: prices are quoted, never published.
          },
        ]}
      />

      <section className="bg-white pt-28 pb-14 sm:pt-36 sm:pb-20">
        <Container>
          <Breadcrumb items={crumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <figure className="border-deep/15 self-start overflow-hidden rounded-[2rem] border bg-white">
              {picture && model ? (
                <ModelViewer
                  model={model}
                  poster={picture}
                  alt={`BIHUI ${name}`}
                  preload
                />
              ) : picture ? (
                <div className="relative aspect-square">
                  <Image
                    src={picture.src}
                    alt={`BIHUI ${name}`}
                    fill
                    preload
                    sizes="(min-width: 64rem) 42vw, 100vw"
                    className="object-contain p-6 sm:p-10"
                  />
                </div>
              ) : (
                <p className="text-muted p-10 leading-relaxed">
                  Ask us for a photograph of this tool.
                </p>
              )}
              {model && (
                <figcaption className="spec-sh text-muted border-deep/15 border-t px-5 py-3 text-center leading-relaxed">
                  3D model generated from the maker&apos;s catalogue photograph:
                  the far side is an estimate.
                </figcaption>
              )}
            </figure>

            <div>
              <p className="label-sh text-muted leading-relaxed">
                BIHUI ·{" "}
                <Link href={`/bihui#${category?.id}`} className="u-line">
                  {family.category}
                </Link>
              </p>
              <h1 className="font-display text-brand text-phi-3 mt-4 leading-tight uppercase">
                {name}
              </h1>
              <p className="mt-6 max-w-xl leading-relaxed font-semibold">
                {family.summary}
              </p>
              {family.features.length > 0 && (
                <ul className="mt-6 grid gap-2.5">
                  {family.features.map((feature) => (
                    <li key={feature} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="text-brand font-bold">
                        &#10003;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <FlowButton href={whatsappLink(`the BIHUI ${name}`)}>
                  Request a quote
                </FlowButton>
              </div>
              <p className="text-muted mt-4 text-sm leading-relaxed">
                Lead time: 4 days after you confirm the order.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Codes, as the catalogue prints them ---------------------------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <h2 className="font-display text-phi-2">
            {family.skus.length === 1 ? "Code" : "Codes and sizes"}
          </h2>
          <ul className="border-deep mt-6 border-t">
            {family.skus.map((row) => {
              const doubtful = isDoubtfulRow(row);
              return (
                <li
                  key={row.sku}
                  className="border-deep/15 grid gap-x-8 gap-y-1.5 border-b py-4 sm:grid-cols-[10rem_10rem_1fr]"
                >
                  <span className="spec-sh font-semibold">{row.sku}</span>
                  <span className="text-sm">
                    {doubtful ? "Ask us" : (row.size ?? "")}
                  </span>
                  <span className="text-muted text-sm leading-relaxed">
                    {doubtful
                      ? "We confirm the size of this code before you order."
                      : row.description}
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="pb-14 sm:pb-20">
          <Container>
            <h2 className="font-display text-phi-2">
              More in {family.category.toLowerCase()}
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {related.map((entry) => {
                const thumb = bihuiPicture(entry);
                return (
                  <li key={entry.slug}>
                    <Link
                      href={bihuiHref(entry)}
                      className="border-deep/15 flex h-full flex-col overflow-hidden rounded-lg border bg-white"
                    >
                      <span className="relative block aspect-square">
                        {thumb && (
                          <Image
                            src={thumb.src}
                            alt={`BIHUI ${bihuiName(entry)}`}
                            fill
                            sizes="(min-width: 64rem) 22vw, 48vw"
                            className="object-contain p-3"
                          />
                        )}
                      </span>
                      <span className="font-display text-brand border-deep/15 border-t p-4 leading-tight">
                        {bihuiName(entry)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      )}

      <section className="border-deep/15 border-t py-8">
        <Container className="flex flex-wrap justify-between gap-4">
          <Link href={bihuiHref(previous)} className="u-line">
            &larr; {bihuiName(previous)}
          </Link>
          <Link href={bihuiHref(next)} className="u-line">
            {bihuiName(next)} &rarr;
          </Link>
        </Container>
      </section>

      <CtaBand
        label="Tools for your team"
        heading="Send the code. We will confirm and quote."
        body="Tell us how many you need. You get a written quotation from our Dar es Salaam office. The tool arrives 4 days after you confirm."
        topic={`the BIHUI ${name}`}
      />
    </main>
  );
}
