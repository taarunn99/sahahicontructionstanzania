import { FireThickness } from "@/components/sections/cmci/fire-thickness";
import { X854 } from "@/config/fire-thickness";
import { productScenes } from "@/config/product-scenes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DeckCoat } from "@/components/sections/cmci/deck-coat";
import { FireDocuments } from "@/components/sections/cmci/fire-documents";
import { HeatBand } from "@/components/sections/cmci/heat";
import { LayerStack } from "@/components/three-d/layer-stack";
import { fireSystemStack } from "@/config/build-ups";
import { DECK_GROUPS } from "@/config/deck-thickness";
import { ProductDetail } from "@/components/sections/product/product-detail";
import { FlowButton } from "@/components/ui/flow-button";
import {
  cmciAll,
  cmciHref,
  cmciItemDescription,
  cmciItemTitle,
  cmciProductBySlug,
  cmciTds,
} from "@/config/cmci";
import { cmciContent } from "@/config/cmci-content";
import { ogBase, resolveOg } from "@/lib/seo";

type Params = Promise<{ item: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return cmciAll.map((product) => ({ item: product.slug }));
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
  const description = cmciItemDescription(product);
  const url = cmciHref(product);
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

/** CMCI PRODUCT PAGE: the shared template, in CMCI's greens. */
export default async function CmciItemPage({ params }: { params: Params }) {
  const { item } = await params;
  const product = cmciProductBySlug[item];
  if (!product) notFound();

  const index = cmciAll.indexOf(product);
  const count = cmciAll.length;
  const previous = cmciAll[(index - 1 + count) % count];
  const next = cmciAll[(index + 1) % count];
  const url = cmciHref(product);
  const isAccessory = product.lines.includes("accessories");

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
      scene={productScenes[product.slug] ?? null}
      content={cmciContent(product.slug)}
      document={cmciTds[product.slug] ?? null}
      alsoKnownAs={product.alsoKnownAs}
      feature={
        <>
          <HeatBand
            label={isAccessory ? "What it goes with" : "What it is for"}
            heading="Fire protection for structural steel."
          >
            <p className="max-w-md leading-relaxed">
              {isAccessory
                ? `${product.name} is part of the system around the fireproofing. Turn up the fire and compare bare steel with coated steel.`
                : `Compare bare steel with coated steel: turn up the fire and watch the difference. ${product.name}'s own limits are on its data sheet.`}
            </p>
            <FlowButton href="/cmci/fire-rated-cement" className="mt-6">
              Fire rated cement, explained
            </FlowButton>
          </HeatBand>
          {X854.products.some((item) => item.slug === product.slug) && (
            <section id="thickness" className="scroll-mt-28 py-14 sm:py-20">
              <div className="container-sh">
                <p className="label-sh text-muted">For the BOQ</p>
                <h2 className="font-display text-phi-3 mt-4 mb-10 max-w-4xl tracking-tight text-balance">
                  How thick on your columns? Work it out.
                </h2>
                <FireThickness initial={product.slug} />
              </div>
            </section>
          )}
          {DECK_GROUPS.some((g) =>
            g.products.some((p) => p.slug === product.slug),
          ) && (
            <section id="deck" className="bg-surface scroll-mt-28 py-14 sm:py-20">
              <div className="container-sh">
                <p className="label-sh text-muted">For the BOQ</p>
                <h2 className="font-display text-phi-3 mt-4 mb-10 max-w-4xl tracking-tight text-balance">
                  And on the deck and the beam? Read it off the design.
                </h2>
                <DeckCoat initial={product.slug} />
              </div>
            </section>
          )}
          {isAccessory && (
            <section className="py-14 sm:py-20">
              <div className="container-sh">
                <p className="label-sh text-muted">The system</p>
                <h2 className="font-display text-phi-3 mt-4 mb-4 max-w-4xl tracking-tight text-balance">
                  Where {product.name} sits in the system.
                </h2>
                <p className="mb-10 max-w-2xl leading-relaxed">
                  Steel, bonding agent, the sprayed fireproofing, and the
                  topcoat that protects it from carbon dioxide and weather.
                  Pull the layers apart; tap one for its data sheet line.
                </p>
                <LayerStack
                  layers={fireSystemStack}
                  listLabel="The system, top to bottom"
                />
              </div>
            </section>
          )}
          {!isAccessory && <FireDocuments />}
        </>
      }
      related={cmciAll
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
          scene: productScenes[other.slug]?.src ?? null,
        }))}
      previous={{ name: previous.name, href: cmciHref(previous) }}
      next={{ name: next.name, href: cmciHref(next) }}
    />
  );
}
