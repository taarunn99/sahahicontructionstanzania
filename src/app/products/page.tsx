import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { brands } from "@/config/brands";
import {
  lineHref,
  lines,
  productHref,
  products,
  productsInLine,
  type Product,
} from "@/config/catalogue";
import { siteConfig, whatsappLink } from "@/config/site";
import { pad } from "@/lib/utils";

const TITLE = "Mapei & X-Calibur Products in Tanzania - Full Catalogue";
const DESCRIPTION =
  "Every Mapei and X-Calibur product stocked by Sahihi in Dar es Salaam: tile adhesives, grouts, waterproofing, resin flooring and concrete repair. Pack sizes.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/products" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/products" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

function ProductCard({ product }: { product: Product }) {
  // Products with a page of their own link to it; the rest are anchors here.
  const page = !productHref(product).includes("#");
  return (
    <li
      id={product.slug}
      className="border-deep bg-background flex scroll-mt-28 flex-col rounded-lg border p-6"
    >
      <p className="label-sh text-muted leading-relaxed">{product.type}</p>
      <h4 className="font-display mt-3 text-xl leading-tight">
        {page ? (
          <Link href={productHref(product)} className="u-line">
            {product.name}
          </Link>
        ) : (
          product.name
        )}
      </h4>
      <p className="text-muted mt-3 leading-relaxed">{product.summary}</p>

      <dl className="border-deep/15 mt-5 space-y-2.5 border-t pt-5">
        {product.classification && (
          <div className="flex items-baseline justify-between gap-4">
            <dt className="label-sh text-muted">Class</dt>
            <dd className="spec-sh text-right">{product.classification}</dd>
          </div>
        )}
        {product.consumption && (
          <div className="flex items-baseline justify-between gap-4">
            <dt className="label-sh text-muted">Consumption</dt>
            <dd className="spec-sh text-right">{product.consumption}</dd>
          </div>
        )}
        <div className="flex items-baseline justify-between gap-4">
          <dt className="label-sh text-muted">
            {product.packs.length > 1 ? "Packs" : "Pack"}
          </dt>
          <dd className="spec-sh text-right">{product.packs.join(" · ")}</dd>
        </div>
        {product.colours && (
          <div className="flex items-baseline justify-between gap-4">
            <dt className="label-sh text-muted">
              {product.colours.length > 1 ? "Colours" : "Colour"}
            </dt>
            <dd className="spec-sh text-right">
              {product.colours.join(" · ")}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-auto flex flex-wrap gap-x-6 gap-y-1 pt-6">
        {page && (
          <Link
            href={productHref(product)}
            className="u-line label-sh inline-block py-1 leading-relaxed"
          >
            Data sheet &amp; calculator&ensp;&rarr;
          </Link>
        )}
        <a
          href={whatsappLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="u-line label-sh inline-block py-1 leading-relaxed"
        >
          Request a quote
        </a>
      </div>
    </li>
  );
}

/**
 * PRODUCTS - the catalogue index. Every product is server-rendered here
 * with its own anchor, so the whole range is in the raw HTML from day one.
 * Pillar and item pages replace the anchors once the route map is approved
 * (SEO-STRATEGY.md); only lineHref/productHref change when they do.
 */
export default function ProductsPage() {
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/products`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: products.length,
              itemListElement: products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: product.name,
                url: `${siteConfig.url}${productHref(product)}`,
              })),
            },
          },
        ]}
      />

      <section className="pt-32 pb-14 sm:pt-40">
        <Container>
          <Breadcrumb items={crumbs} />
          <h1 className="font-display text-phi-4 mt-8 max-w-5xl tracking-tight text-balance">
            The catalogue.
          </h1>
          <p className="text-phi-1 mt-8 max-w-3xl leading-relaxed font-light">
            {products.length} products across {lines.length} lines, held in Dar
            es Salaam. Classification, consumption and pack size for each.
            Prices are quoted on request.
          </p>

          {/* Jump chips: real anchors, no client filter */}
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {lines.map((line) => (
              <li key={line.slug}>
                <a
                  href={`#${line.slug}`}
                  className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                >
                  {line.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {brands.map((brand) => {
        const brandLines = lines.filter((line) => line.brand === brand.slug);
        return (
          <section
            key={brand.slug}
            id={brand.slug}
            className="border-deep scroll-mt-24 border-t py-16 sm:py-20"
          >
            <Container>
              <div className="grid gap-6 lg:grid-cols-[1fr_1.618fr] lg:items-end">
                <div>
                  <p className="label-sh text-muted leading-relaxed">
                    {brand.authorization}
                    {brand.origin && ` · ${brand.origin}`}
                  </p>
                  <h2 className="font-display text-phi-3 mt-4 tracking-tight">
                    {brand.slug === "mapei" || brand.slug === "bihui" ? (
                      <Link href={`/${brand.slug}`} className="u-line">
                        {brand.name}
                      </Link>
                    ) : (
                      brand.name
                    )}
                  </h2>
                </div>
                {brand.blurb && (
                  <p className="text-muted max-w-2xl leading-relaxed">
                    {brand.blurb}
                  </p>
                )}
              </div>

              {brandLines.length === 0 ? (
                <div className="border-deep/15 mt-10 border-t pt-8">
                  <p className="max-w-2xl leading-relaxed">
                    {brand.slug === "bihui" ? (
                      <Link href="/bihui" className="u-line">
                        See the BIHUI tools, with 3D models.
                      </Link>
                    ) : (
                      `The ${brand.name} range is supplied to project requirement.`
                    )}
                  </p>
                  <a
                    href={whatsappLink(`the ${brand.name} range`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip-sh border-deep mt-6 inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
                  >
                    Ask about {brand.name}
                  </a>
                </div>
              ) : (
                brandLines.map((line) => {
                  const items = productsInLine(line.slug);
                  const index = lines.indexOf(line);
                  return (
                    <div
                      key={line.slug}
                      id={line.slug}
                      className="mt-14 scroll-mt-28"
                    >
                      <div className="border-deep/15 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b pb-5">
                        <h3 className="font-display text-phi-2">
                          <span className="spec-sh text-muted mr-4 align-middle">
                            {pad(index + 1)}
                          </span>
                          {lineHref(line).includes("#") ? (
                            line.label
                          ) : (
                            <Link href={lineHref(line)} className="u-line">
                              {line.label}
                            </Link>
                          )}
                        </h3>
                        <p className="spec-sh text-muted">
                          {items.length} products
                        </p>
                      </div>
                      <p className="text-muted mt-5 max-w-3xl leading-relaxed">
                        {line.blurb}
                      </p>

                      <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {items.map((product) => (
                          <ProductCard key={product.slug} product={product} />
                        ))}
                      </ul>

                      {/* The classic table survives only here, for spec
                          hunters and crawlers. */}
                      <details className="border-deep/15 mt-8 border-y">
                        <summary className="label-sh flex min-h-11 cursor-pointer items-center leading-relaxed">
                          {line.label} as a table
                        </summary>
                        <div className="overflow-x-auto pb-6">
                          <table className="w-full min-w-[40rem] text-left text-sm">
                            <thead>
                              <tr className="label-sh text-muted">
                                <th className="py-3 pr-4 font-medium">
                                  Product
                                </th>
                                <th className="py-3 pr-4 font-medium">Type</th>
                                <th className="py-3 pr-4 font-medium">Class</th>
                                <th className="py-3 pr-4 font-medium">
                                  Consumption
                                </th>
                                <th className="py-3 font-medium">Pack</th>
                              </tr>
                            </thead>
                            <tbody>
                              {items.map((product) => (
                                <tr
                                  key={product.slug}
                                  className="border-deep/15 border-t align-top"
                                >
                                  <th
                                    scope="row"
                                    className="py-3 pr-4 font-medium"
                                  >
                                    {product.name}
                                  </th>
                                  <td className="py-3 pr-4">{product.type}</td>
                                  <td className="spec-sh py-3 pr-4">
                                    {product.classification ?? "-"}
                                  </td>
                                  <td className="spec-sh py-3 pr-4">
                                    {product.consumption ?? "-"}
                                  </td>
                                  <td className="spec-sh py-3">
                                    {product.packs.join(", ")}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </details>
                    </div>
                  );
                })
              )}
            </Container>
          </section>
        );
      })}

      <section className="border-deep border-t py-12">
        <Container>
          <p className="text-muted max-w-3xl text-sm leading-relaxed">
            Consumption figures are theoretical and change with site conditions.
            Confirm the product, the system and the quantity against the
            manufacturer&apos;s current technical data sheet before ordering.
            Product names are trademarks of their manufacturers.
          </p>
        </Container>
      </section>

      <CtaBand
        heading="Send the list. Get the quotation."
        body="Product names and quantities are enough to start. If you only know the job, describe it and we will work out the rest."
        topic="a quotation for these products"
      />
    </main>
  );
}
