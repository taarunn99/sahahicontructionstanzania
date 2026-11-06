import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/sections/product/product-detail";
import { productHref } from "@/config/catalogue";
import { packshot } from "@/config/packshots";
import {
  xcaliburAlsoKnownAs,
  xcaliburContent,
  xcaliburCoverage,
  xcaliburItemTitle,
  xcaliburProductBySlug,
  xcaliburProducts,
  xcaliburTds,
} from "@/config/x-calibur";
import { seoDescription } from "@/lib/seo";

type Params = Promise<{ item: string }>;

// One indexed URL per stocked product, all generated at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return xcaliburProducts.map((product) => ({ item: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { item } = await params;
  const product = xcaliburProductBySlug[item];
  if (!product) return {};
  const title = xcaliburItemTitle(product);
  const description = seoDescription(
    `${product.name}: ${product.summary}`,
    "X-Calibur, stocked by Sahihi in Dar es Salaam.",
    "Data sheet, pack sizes and coverage.",
    "Authorized distributor in Tanzania.",
  );
  const url = productHref(product);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

/**
 * X-CALIBUR PRODUCT PAGE - the same template as a Mapei product, in
 * X-Calibur's colour (owner, 2026-11-06).
 */
export default async function XCaliburItemPage({ params }: { params: Params }) {
  const { item } = await params;
  const product = xcaliburProductBySlug[item];
  if (!product) notFound();

  const index = xcaliburProducts.indexOf(product);
  const count = xcaliburProducts.length;
  const previous = xcaliburProducts[(index - 1 + count) % count];
  const next = xcaliburProducts[(index + 1) % count];
  const tds = xcaliburTds[product.slug];
  const url = productHref(product);

  return (
    <ProductDetail
      brand={{ slug: "x-calibur", name: "X-Calibur" }}
      product={product}
      url={url}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "X-Calibur", href: "/x-calibur" },
        { label: product.name, href: url },
      ]}
      back={{ href: "/x-calibur", label: "X-Calibur" }}
      position={{ number: index + 1, count }}
      image={packshot("x-calibur", product.slug)}
      content={xcaliburContent(product.slug)}
      document={tds ?? null}
      coverage={xcaliburCoverage[product.slug]}
      alsoKnownAs={xcaliburAlsoKnownAs[product.slug]}
      related={xcaliburProducts
        .filter((other) => other !== product)
        .slice(0, 4)
        .map((other) => ({
          name: other.name,
          type: other.type,
          href: productHref(other),
          detail: other.packs.join(" · "),
          image: packshot("x-calibur", other.slug)?.src ?? null,
        }))}
      previous={{ name: previous.name, href: productHref(previous) }}
      next={{ name: next.name, href: productHref(next) }}
    />
  );
}
