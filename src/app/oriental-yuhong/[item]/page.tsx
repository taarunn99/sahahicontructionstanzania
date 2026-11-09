import type { Metadata } from "next";

import oyhModels from "@/config/oyh-models.json";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/sections/product/product-detail";
import { LayerStack } from "@/components/three-d/layer-stack";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { productHref } from "@/config/catalogue";
import {
  oyhAlsoKnownAs,
  oyhContent,
  oyhCoverage,
  oyhItemTitle,
  oyhProductBySlug,
  oyhProducts,
  oyhTds,
} from "@/config/oriental-yuhong";
import { packshot } from "@/config/packshots";
import { seoDescription, ogBase } from "@/lib/seo";

type Params = Promise<{ item: string }>;

// One indexed URL per stocked product, all generated at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return oyhProducts.map((product) => ({ item: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { item } = await params;
  const product = oyhProductBySlug[item];
  if (!product) return {};
  const title = oyhItemTitle(product);
  const description = seoDescription(
    `${product.name}: ${product.summary}`,
    "Oriental Yuhong, stocked by Sahihi in Dar es Salaam.",
    "Data sheet, pack size and coverage.",
    "Authorized distributor in Tanzania.",
    "From Sahihi, Dar es Salaam.",
  );
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
    },
  };
}

/**
 * ORIENTAL YUHONG PRODUCT PAGE - the shared product template in OYH's
 * reds (the `brand-oriental-yuhong` palette in globals.css).
 */
export default async function OyhItemPage({ params }: { params: Params }) {
  const { item } = await params;
  const product = oyhProductBySlug[item];
  if (!product) notFound();

  const index = oyhProducts.indexOf(product);
  const count = oyhProducts.length;
  const previous = oyhProducts[(index - 1 + count) % count];
  const next = oyhProducts[(index + 1) % count];
  const url = productHref(product);

  return (
    <ProductDetail
      brand={{ slug: "oriental-yuhong", name: "Oriental Yuhong" }}
      product={product}
      url={url}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Oriental Yuhong", href: "/oriental-yuhong" },
        { label: product.name, href: url },
      ]}
      back={{ href: "/oriental-yuhong", label: "Oriental Yuhong" }}
      position={{ number: index + 1, count }}
      image={packshot("oriental-yuhong", product.slug)}
      model={(oyhModels as Record<string, string>)[product.slug] ?? null}
      content={oyhContent(product.slug)}
      document={oyhTds[product.slug] ?? null}
      coverage={oyhCoverage[product.slug]}
      alsoKnownAs={oyhAlsoKnownAs[product.slug]}
      feature={
        product.slug === "pmh-3080-plus" ? (
          <section className="py-14 sm:py-20">
            <Container>
              <h2 className="font-display text-phi-3 tracking-tight text-balance">
                PMH-3080 Plus, pulled apart.
              </h2>
              <div className="mt-8">
                <LayerStack
                  layers={[
                    {
                      label: "Weather resistance granular layer",
                      color: "#ece8dc",
                      height: 0.08,
                      pattern: "sand",
                      note: "The sanded face the concrete is poured onto.",
                    },
                    {
                      label: "Pressure sensitive adhesive",
                      color: "#d7b65a",
                      height: 0.12,
                      note: "With a dual lap design at the seams: adhesive to adhesive.",
                    },
                    {
                      label: "Thick HDPE film",
                      color: "#f7f7f4",
                      height: 0.18,
                      note: "The main waterproof layer.",
                    },
                  ]}
                />
              </div>
              <FlowButton
                href="/oriental-yuhong/hdpe-waterproofing"
                className="mt-8"
              >
                HDPE waterproofing, explained
              </FlowButton>
            </Container>
          </section>
        ) : undefined
      }
      related={oyhProducts
        .filter((other) => other !== product)
        .map((other) => ({
          name: other.name,
          type: other.type,
          href: productHref(other),
          detail: other.packs.join(" · "),
          image: packshot("oriental-yuhong", other.slug)?.src ?? null,
        }))}
      previous={{ name: previous.name, href: productHref(previous) }}
      next={{ name: next.name, href: productHref(next) }}
    />
  );
}
