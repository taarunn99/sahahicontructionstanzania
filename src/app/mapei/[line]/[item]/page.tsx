import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/sections/product/product-detail";
import { lineBySlug, lineHref, productHref } from "@/config/catalogue";
import {
  itemDescription,
  itemTitle,
  mapeiContent,
  mapeiProductBySlug,
  mapeiProducts,
  mapeiTds,
  neighbours,
  related,
} from "@/config/mapei";
import { mapeiCoverage } from "@/config/mapei-coverage";
import { packshot } from "@/config/packshots";
import { ogBase, resolveOg } from "@/lib/seo";

type Params = Promise<{ line: string; item: string }>;

// One indexed URL per stocked product, all generated at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return mapeiProducts.map((product) => ({
    line: product.line,
    item: product.slug,
  }));
}

function find(line: string, item: string) {
  const product = mapeiProductBySlug[item];
  return product && product.line === line ? product : null;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { line, item } = await params;
  const product = find(line, item);
  if (!product) return {};
  const title = itemTitle(product);
  const description = itemDescription(product);
  const url = productHref(product);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      ...ogBase,
      title,
      description,
      url,
      images: resolveOg(url) ?? ogBase.images,
    },
  };
}

export default async function MapeiItemPage({ params }: { params: Params }) {
  const { line: lineSlug, item } = await params;
  const product = find(lineSlug, item);
  if (!product) notFound();

  const line = lineBySlug[product.line];
  const tds = mapeiTds[product.slug];
  const { number, count, previous, next } = neighbours(product);
  const url = productHref(product);

  return (
    <ProductDetail
      brand={{ slug: "mapei", name: "Mapei" }}
      product={product}
      url={url}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Mapei", href: "/mapei" },
        { label: line.label, href: lineHref(line) },
        { label: product.name, href: url },
      ]}
      back={{ href: lineHref(line), label: line.label }}
      position={{ number, count }}
      image={packshot("mapei", product.slug)}
      content={mapeiContent(product.slug)}
      document={tds ?? null}
      coverage={mapeiCoverage[product.slug]}
      related={related(product).map((other) => ({
        name: other.name,
        type: other.type,
        href: productHref(other),
        detail: other.classification ?? other.packs.join(" · "),
        image: packshot("mapei", other.slug)?.src ?? null,
      }))}
      previous={{ name: previous.name, href: productHref(previous) }}
      next={{ name: next.name, href: productHref(next) }}
    />
  );
}
