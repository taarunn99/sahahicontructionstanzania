import { productScenes } from "@/config/product-scenes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/sections/product/product-detail";
import { SealantJoint } from "@/components/sections/xcalibur/sealant-joint";
import { LayerStack } from "@/components/three-d/layer-stack";
import { Container } from "@/components/ui/container";
import {
  epoxyColours,
  epoxyFloorStack,
  flexprufStack,
  sbrBondStack,
} from "@/config/build-ups";
import { productHref } from "@/config/catalogue";
import { packshot } from "@/config/packshots";
import {
  xcaliburAlsoKnownAs,
  xcaliburContent,
  xcaliburCoverage,
  xcaliburItemDescription,
  xcaliburItemTitle,
  xcaliburProductBySlug,
  xcaliburProducts,
  xcaliburTds,
} from "@/config/x-calibur";
import { ogBase, resolveOg } from "@/lib/seo";

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
  const description = xcaliburItemDescription(product);
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

/**
 * The practical 3D under each X-Calibur product (owner, 2026-11-11: models
 * "for practical and interactive use"). Data from the data sheets only, in
 * src/config/build-ups.ts and src/config/sealant-joint.ts.
 */
function xcaliburFeature(slug: string) {
  const stack = (
    heading: string,
    lead: string,
    body: React.ReactNode,
  ) => (
    <section className="py-14 sm:py-20">
      <Container>
        <p className="label-sh text-muted">The build-up</p>
        <h2 className="font-display text-phi-3 mt-4 max-w-3xl tracking-tight text-balance">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">{lead}</p>
        <div className="mt-8">{body}</div>
      </Container>
    </section>
  );
  switch (slug) {
    case "x-seal-ps800":
    case "x-seal-universal-primer":
      return (
        <section id="joint" className="scroll-mt-28 py-14 sm:py-20">
          <Container>
            <p className="label-sh text-muted">For the BOQ</p>
            <h2 className="font-display text-phi-3 mt-4 mb-4 max-w-4xl tracking-tight text-balance">
              Size the joint. Count the packs.
            </h2>
            <p className="mb-10 max-w-2xl leading-relaxed">
              Width, substrate and length in; depth by the sheet&apos;s rules,
              litres, packs and primer out. Then move the joint and watch the
              sealant take it, up to the 25% the sheet allows.
            </p>
            <SealantJoint
              focus={slug === "x-seal-ps800" ? "sealant" : "primer"}
            />
          </Container>
        </section>
      );
    case "x-tech-epoxyfloor-sl1":
    case "x-prime-gp":
    case "x-prime-gp2":
      return stack(
        "Primer, then the floor. Pulled apart.",
        "Concrete, one coat of primer at 100 to 200 microns, then 1 to 1.5 mm of self smoothing epoxy. Pick one of the ten listed colours to see it on the floor; the screen is a preview, the RAL card is the truth.",
        <LayerStack
          layers={epoxyFloorStack(
            slug === "x-prime-gp2" ? "X-Prime GP2" : "X-Prime GP",
          )}
          decors={epoxyColours}
          decorLabel="Colour of the floor, preview only:"
          decorNamed
          listLabel="The build-up, top to bottom"
        />,
      );
    case "x-shield-flexpruf":
      return stack(
        "Two coats on wet concrete. Pulled apart.",
        "The sheet's build-up: a saturated surface dry substrate, the first coat at 1 litre per m², reinforcing fabric where the substrate may move, and the second coat once the first has dried.",
        <LayerStack layers={flexprufStack} listLabel="The build-up, top to bottom" />,
      );
    case "x-tech-sbr-bond":
      return stack(
        "The bond coat under a repair. Pulled apart.",
        "Saw cut, pre-dampen, brush on the bond coat at about 8 m² per litre, and place the mortar while it is still tacky. The sheet's one rule in capitals: do not allow the bond coat to dry out.",
        <LayerStack layers={sbrBondStack} listLabel="The build-up, top to bottom" />,
      );
    default:
      return undefined;
  }
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
      scene={productScenes[product.slug] ?? null}
      content={xcaliburContent(product.slug)}
      document={tds ?? null}
      coverage={xcaliburCoverage[product.slug]}
      alsoKnownAs={xcaliburAlsoKnownAs[product.slug]}
      feature={xcaliburFeature(product.slug)}
      related={xcaliburProducts
        .filter((other) => other !== product)
        .slice(0, 4)
        .map((other) => ({
          name: other.name,
          type: other.type,
          href: productHref(other),
          detail: other.packs.join(" · "),
          image: packshot("x-calibur", other.slug)?.src ?? null,
          scene: productScenes[other.slug]?.src ?? null,
        }))}
      previous={{ name: previous.name, href: productHref(previous) }}
      next={{ name: next.name, href: productHref(next) }}
    />
  );
}
