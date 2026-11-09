import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HeatBand } from "@/components/sections/cmci/heat";
import { ProductDetail } from "@/components/sections/product/product-detail";
import { FlowButton } from "@/components/ui/flow-button";
import {
  cmciHref,
  cmciItemTitle,
  cmciProductBySlug,
  cmciProducts,
  cmciTds,
} from "@/config/cmci";
import { cmciContent } from "@/config/cmci-content";
import { seoDescription } from "@/lib/seo";

type Params = Promise<{ item: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return cmciProducts.map((product) => ({ item: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { item } = await params;
  const product = cmciProductBySlug[item];
  if (!product) return {};
  const title = cmciItemTitle(product);
  const description = seoDescription(
    `${product.name}: ${product.summary}`,
    "Supplied by Sahihi in Dar es Salaam.",
    "Technical values and data sheet to download.",
  );
  const url = cmciHref(product);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

/** CMCI PRODUCT PAGE: the shared template, in CMCI's greens. */
export default async function CmciItemPage({ params }: { params: Params }) {
  const { item } = await params;
  const product = cmciProductBySlug[item];
  if (!product) notFound();

  const index = cmciProducts.indexOf(product);
  const count = cmciProducts.length;
  const previous = cmciProducts[(index - 1 + count) % count];
  const next = cmciProducts[(index + 1) % count];
  const url = cmciHref(product);

  return (
    <ProductDetail
      brand={{ slug: "cmci", name: "CMCI" }}
      product={product}
      url={url}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "CMCI", href: "/cmci" },
        { label: product.name, href: url },
      ]}
      back={{ href: "/cmci", label: "CMCI" }}
      position={{ number: index + 1, count }}
      image={null}
      content={cmciContent(product.slug)}
      document={cmciTds[product.slug] ?? null}
      alsoKnownAs={product.alsoKnownAs}
      feature={
        <HeatBand
          label="What it is for"
          heading="Fire protection for structural steel."
        >
          <p className="max-w-md leading-relaxed">
            Compare bare steel with coated steel: turn up the fire and watch the
            difference. {product.name}&apos;s own limits are on its data sheet.
          </p>
          <FlowButton href="/cmci/fire-rated-cement" className="mt-6">
            Fire rated cement, explained
          </FlowButton>
        </HeatBand>
      }
      related={cmciProducts
        .filter(
          (other) =>
            other !== product &&
            other.lines.some((line) => product.lines.includes(line)),
        )
        .slice(0, 4)
        .map((other) => ({
          name: other.name,
          type: other.type,
          href: cmciHref(other),
          detail: other.packs.join(" · "),
          image: null,
        }))}
      previous={{ name: previous.name, href: cmciHref(previous) }}
      next={{ name: next.name, href: cmciHref(next) }}
    />
  );
}
