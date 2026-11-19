import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { AddToQuote } from "@/components/quote/add-to-quote";
import { CtaBand } from "@/components/sections/cta-band";
import { DocumentList } from "@/components/sections/document-list";
import { Faq } from "@/components/sections/faq";
import { ModelCta } from "@/components/sections/model-cta";
import { HotspotSection } from "@/components/sections/oyh/hotspot-section";
import { RelatedLinks } from "@/components/sections/related-links";
import { JsonLd } from "@/components/seo/json-ld";
import { LayerStack } from "@/components/three-d/layer-stack";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { brandBySlug } from "@/config/brands";
import {
  basementStack,
  bituminousByStructure,
  cover,
  groutingComparison,
  hotspots,
  intros,
  maintenanceByStructure,
  MANUAL_FILE,
  PATH,
  peachBlossom,
  polymerByStructure,
  product,
  selectionGuide,
  systemsList,
  tunnelByStructure,
  why,
  type BgProduct,
  type ByStructure,
} from "@/config/oyh-below-grade";
import {
  BELOW_GRADE_MANUAL,
  HDPE_BROCHURE,
  PMH_METHOD_STATEMENT,
} from "@/config/oyh-docs";
import { oyhPageMeta } from "@/config/seo/oyh";
import { siteConfig, whatsappLink } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { ogBase, resolveOg } from "@/lib/seo";
import { cn, pad } from "@/lib/utils";

/**
 * BELOW-GRADE WATERPROOFING: owns "basement waterproofing Tanzania"
 * (SEO-STRATEGY.md 5.1a). OYH's "Solutions for Below-Grade Structures"
 * manual (owner, 2026-11-19) as a page: why, the polymer and bituminous
 * basement systems, waterstops, drainage boards, the tunnel system and the
 * underground maintenance system, each with OYH's own render as a hotspot
 * map, the "by structure" tables, the products and the values OYH prints.
 * One Three.js scene (the basement slab build-up). Every fact is the
 * manual's (src/config/oyh-below-grade.ts); nothing is stocked except the
 * two products with pages of their own, so the rest say "supplied to
 * order" and go into the quote list. Server component.
 */

const { title: TITLE, description: DESCRIPTION } = oyhPageMeta(
  "below-grade-waterproofing",
);
const brand = brandBySlug["oriental-yuhong"];

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: resolveOg(PATH) ?? ogBase.images,
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Oriental Yuhong", href: "/oriental-yuhong" },
  { label: "Below-grade waterproofing", href: PATH },
];

const faq: FaqItem[] = [
  {
    q: "What does pre-applied waterproofing mean?",
    lead: "The membrane is laid before the concrete, which is poured onto it and bonds to it.",
    points: [
      "OYH: fully bonded to structural concrete, prevents lateral water migration",
      "Suitable for blind-side construction, where the outside of the wall cannot be reached later",
    ],
  },
  {
    q: "HDPE, FPO or bituminous for a basement?",
    lead: "OYH's manual sets out both families by part of the structure: slab, wall, roof, joints, protection and drainage.",
    points: [
      "Polymer: PMH-3040 and PMH-3080 pre-applied, PMH-3046 post-applied, FPO membranes",
      "Bituminous: YHShield torch-applied and YHStick self-adhesive membranes, with YHBituprimer and YHBitucoat",
    ],
  },
  {
    q: "Can a leaking basement be repaired from the inside?",
    lead: "OYH's underground maintenance system injects resin into cracks and joints from inside the structure.",
    points: [
      "YHACgrout-2101 acrylate for curtain injection and fine water-bearing cracks",
      "YHPUgrout-2103 polyurethane for rapid water stopping",
      "YHPrimBlock-1400 and YHColorWall-5100 for negative-side finishing",
    ],
  },
  {
    q: "What goes behind a tunnel lining?",
    lead: "Between the initial and secondary linings: a geotextile cushion and an HDPE or EVA membrane.",
    points: [
      "TDF geotextile protects the membrane and drains seepage",
      "PMH-3040, PMH-3080, PMH-6010 or PME-EVA as the membrane",
    ],
  },
  {
    q: "Who supplies OYH below-grade systems in Tanzania?",
    lead: `${siteConfig.brandName}, an ${brand.authorization.toLowerCase()} of Oriental Yuhong, in Dar es Salaam.`,
    points: [
      "PMH-3080 Plus and YHRepair-2516 are held in Dar es Salaam",
      "The other products on this page are supplied to order: add them to your quote list and send it",
    ],
  },
];

const PILL =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 text-sm font-semibold tracking-wide uppercase";

/** A product of the manual: name, type, the printed features and values,
 * and the way to ask for it. */
function ProductCard({ slug }: { slug: string }) {
  const item: BgProduct = product(slug);
  return (
    <article
      id={slug}
      className="border-deep/15 flex h-full min-w-0 scroll-mt-28 flex-col rounded-2xl border bg-white p-5 sm:p-6"
    >
      <p className="label-sh text-muted leading-relaxed">{item.type}</p>
      <h4 className="font-display text-brand mt-2 text-2xl leading-tight">
        {item.name}
      </h4>
      {item.line && <p className="mt-3 leading-relaxed">{item.line}</p>}
      {item.features && (
        <ul className="mt-4 space-y-1.5 text-sm leading-relaxed">
          {item.features.map((feature) => (
            <li key={feature} className="flex gap-2.5">
              <span aria-hidden className="text-brand">
                ✓
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {item.values && (
        <div className="mt-5">
          <p className="label-sh text-muted">
            {item.valuesNote ?? "Properties, as OYH prints them"}
          </p>
          <table className="mt-2 w-full text-sm">
            <thead className="sr-only">
              <tr>
                <th>Item</th>
                <th>Test method</th>
                <th>Typical value</th>
              </tr>
            </thead>
            <tbody className="divide-deep/10 divide-y">
              {item.values.map((row) => (
                <tr key={row.item} className="align-top">
                  <td className="py-1.5 pr-3">{row.item}</td>
                  <td className="text-muted py-1.5 pr-3">{row.method}</td>
                  <td className="spec-sh py-1.5 text-right">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6">
        {item.href ? (
          <>
            <Link href={item.href} className={cn(PILL, "bg-brand text-white")}>
              Its page
            </Link>
            <span className="spec-sh text-muted">Held in Dar es Salaam</span>
          </>
        ) : (
          <>
            <AddToQuote
              variant="chip"
              label="Add to quote list"
              item={{
                id: `oriental-yuhong:${slug}`,
                name: item.name,
                brand: "Oriental Yuhong",
                href: `${PATH}#${slug}`,
                packs: [],
              }}
            />
            <span className="spec-sh text-muted">Supplied to order</span>
          </>
        )}
        <span className="spec-sh text-muted">Manual p. {item.page}</span>
      </div>
    </article>
  );
}

function ByStructureTable({ rows }: { rows: ByStructure[] }) {
  return (
    <dl className="border-deep mt-8 border-t">
      {rows.map((row) => (
        <div
          key={row.part}
          className="border-deep/15 grid gap-x-8 gap-y-2 border-b py-5 lg:grid-cols-[1fr_1.618fr]"
        >
          <dt>
            <span className="font-display block text-xl">{row.part}</span>
            {row.system && (
              <span className="text-muted mt-1 block text-sm">
                {row.system}
              </span>
            )}
          </dt>
          <dd>
            <ul className="space-y-1 text-sm leading-relaxed">
              {row.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function SystemHead({
  number,
  kicker,
  heading,
  intro,
}: {
  number: string;
  kicker: string;
  heading: string;
  intro: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.618fr] lg:items-end">
      <div>
        <p className="label-sh text-muted">
          {number} · {kicker}
        </p>
        <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
          {heading}
        </h2>
      </div>
      <p className="max-w-2xl leading-relaxed">{intro}</p>
    </div>
  );
}

export default function BelowGradePage() {
  return (
    <main className="brand-oriental-yuhong theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "WebPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${PATH}`,
            about: {
              "@type": "Brand",
              name: "Oriental Yuhong",
              alternateName: "OYH",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "OYH below-grade systems",
              numberOfItems: systemsList.length,
              itemListElement: systemsList.map((system, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: system.name,
                url: `${siteConfig.url}${PATH}#${system.id}`,
              })),
            },
            subjectOf: {
              "@type": "DigitalDocument",
              name: "OYH Solutions for Below-Grade Structures",
              url: `${siteConfig.url}${MANUAL_FILE}`,
              encodingFormat: "application/pdf",
            },
          },
          faqJsonLd(faq),
        ]}
      />

      {/* ---- Hero ---------------------------------------------------------- */}
      <section className="bg-accent">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <div>
              <p className="label-sh">
                {brand.authorization} · basements, tunnels, repair
              </p>
              <h1 className="font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
                Below-grade waterproofing, layer by layer.
              </h1>
              <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
                Oriental Yuhong&apos;s systems for everything under the ground:
                basement slabs and walls, tunnel linings, the joints between
                pours, and the leaks in structures already built. From
                OYH&apos;s own manual, with its renders, build-ups and typical
                values, supplied by {siteConfig.brandName} from Dar es Salaam.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <FlowButton href="#polymer">The systems</FlowButton>
                <FlowButton
                  href={whatsappLink("OYH below-grade waterproofing")}
                >
                  Request a quote
                </FlowButton>
              </div>
            </div>
            <figure className="relative aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                preload
                sizes="(min-width: 64rem) 36vw, 100vw"
                className="object-cover"
              />
              <figcaption className="spec-sh text-deep absolute right-3 bottom-3 rounded-full bg-white/90 px-3 py-1">
                OYH&apos;s photograph
              </figcaption>
            </figure>
          </div>
          <nav aria-label="The systems on this page" className="mt-10">
            <ol className="flex flex-wrap gap-2">
              {systemsList.map((system, index) => (
                <li key={system.id}>
                  <a
                    href={`#${system.id}`}
                    className="chip-sh inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/70 px-4 text-sm"
                  >
                    <span className="spec-sh">{pad(index + 1)}</span>
                    {system.name}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </section>

      {/* ---- Why ----------------------------------------------------------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="label-sh text-muted">02 · From the manual</p>
              <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
                {why.heading}.
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed">
                {why.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {why.forces.map((force) => (
                  <li
                    key={force}
                    className="border-deep/20 rounded-full border px-3 py-1 text-xs"
                  >
                    {force}
                  </li>
                ))}
              </ul>
            </div>
            <Reveal>
              <figure>
                <Image
                  src={why.picture.src}
                  alt={why.picture.alt}
                  width={why.picture.width}
                  height={why.picture.height}
                  sizes="(min-width: 64rem) 46vw, 100vw"
                  className="h-auto w-full rounded-2xl"
                />
                <figcaption className="spec-sh text-muted mt-3">
                  OYH&apos;s render: water pressure, dynamic force, temperature
                  variation and the chemistry of the ground, as it draws them.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---- The slab in 3D ----------------------------------------------- */}
      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Pull it apart</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            The basement slab, from the flooring down to the soil.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Layers 1 to 6 of OYH&apos;s polymer system: the membrane goes down
            on the blinding, the slab is cast onto it. Drag to turn it.
          </p>
          <div className="mt-8">
            <LayerStack
              layers={basementStack}
              listLabel="The build-up, top to bottom (manual page 6)"
            />
          </div>
          <ModelCta className="mt-6" topic="OYH below-grade waterproofing" />
        </Container>
      </section>

      {/* ---- 03 Polymer system ------------------------------------------- */}
      <section id="polymer" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <SystemHead
            number="03"
            kicker="Underground waterproofing system"
            heading="Synthetic polymer membranes: the basement in 24 layers."
            intro={intros.polymer}
          />
          <div className="mt-10">
            <HotspotSection hotspot={hotspots.polymer} />
          </div>
          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            System solutions by structure.
          </h3>
          <ByStructureTable rows={polymerByStructure} />

          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            3.1 HDPE pre-applied, 3.2 FPO.
          </h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {[
              "pmh-3040",
              "pmh-3080",
              "pmh-3046",
              "yhfpopre-3210",
              "yhfpopost-3200",
            ].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>

          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            3.3 Accessories.
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed">{intros.accessories}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "yhprimer-1000",
              "pmh-s-600",
              "pmh-t-160",
              "pmh-t-c-120",
              "pmh-t-s80",
              "pmh-t-d80",
            ].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---- 3.4 Bituminous system --------------------------------------- */}
      <section
        id="bituminous"
        className="bg-surface scroll-mt-24 py-14 sm:py-20"
      >
        <Container>
          <SystemHead
            number="3.4"
            kicker="Bituminous underground waterproofing"
            heading="Bituminous membranes: the same basement in 23 layers."
            intro={intros.bituminous}
          />
          <div className="mt-10">
            <HotspotSection hotspot={hotspots.bituminous} />
          </div>
          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            System solutions by structure.
          </h3>
          <ByStructureTable rows={bituminousByStructure} />
          <p className="text-muted mt-6 max-w-2xl text-sm leading-relaxed">
            The bituminous products are named in the build-up above: YHShield
            torch-applied and YHStick self-adhesive membranes, YHBituprimer,
            YHPrimCoat, YHBitucoat and the YHShield anti-root membrane. Their
            data sheets are not in this manual; ask us for them.
          </p>
        </Container>
      </section>

      {/* ---- 3.5 Waterstops ---------------------------------------------- */}
      <section id="waterstops" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <SystemHead
            number="3.5"
            kicker="Waterstop system"
            heading="Waterstops: the joints between pours."
            intro={intros.waterstops}
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {intros.joints.map((joint) => (
              <div
                key={joint.name}
                className="border-deep/15 rounded-2xl border bg-white p-5"
              >
                <h3 className="font-display text-xl">{joint.name}</h3>
                <p className="mt-2 text-sm leading-relaxed">{joint.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "yhwaterstop-epdm",
              "yhwaterstop-pvc",
              "yhswellbar",
              "yhswellseal",
            ].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---- 3.6 Drainage boards ----------------------------------------- */}
      <section id="drainage" className="bg-surface scroll-mt-24 py-14 sm:py-20">
        <Container>
          <SystemHead
            number="3.6"
            kicker="Drainage board system"
            heading="Drainage boards, and the Peach Blossom system."
            intro={intros.drainage}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-start">
            <Reveal>
              <figure>
                <Image
                  src={peachBlossom.src}
                  alt={peachBlossom.alt}
                  width={peachBlossom.width}
                  height={peachBlossom.height}
                  sizes="(min-width: 64rem) 58vw, 100vw"
                  className="h-auto w-full rounded-2xl"
                />
                <figcaption className="spec-sh text-muted mt-3">
                  OYH&apos;s render of the zero-slope organized waterproofing,
                  drainage and water storage system (manual page 17).
                </figcaption>
              </figure>
            </Reveal>
            <ul className="space-y-5">
              {intros.drainageAdvantages.map((item) => (
                <li key={item.title}>
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {["yhdrainpro-201", "yhdrainpro-202"].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---- 04 Tunnel system -------------------------------------------- */}
      <section id="tunnel" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <SystemHead
            number="04"
            kicker="Tunnel system"
            heading="The tunnel ring: six layers from rock to rail."
            intro={intros.tunnel}
          />
          <div className="mt-10">
            <HotspotSection hotspot={hotspots.tunnel} />
          </div>
          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            System solutions by structure.
          </h3>
          <ByStructureTable rows={tunnelByStructure} />
          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            4.1 Sheet membranes, 4.2 geotextiles.
          </h3>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {["pme-eva", "pmh-6010", "tdf-hs", "tdf-g"].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---- 05 Underground maintenance ---------------------------------- */}
      <section
        id="maintenance"
        className="bg-surface scroll-mt-24 py-14 sm:py-20"
      >
        <Container>
          <SystemHead
            number="05"
            kicker="Underground maintenance system"
            heading="Leaks in a basement already built: injection from inside."
            intro={intros.maintenance}
          />
          <div className="mt-10">
            <HotspotSection hotspot={hotspots.maintenance} />
          </div>
          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            System solutions by structure.
          </h3>
          <ByStructureTable rows={maintenanceByStructure} />

          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            Comprehensive solution for leak repairs.
          </h3>
          <div className="mt-8">
            <HotspotSection hotspot={hotspots["leak-repair"]} />
          </div>

          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            Comparison of grouting materials.
          </h3>
          <div className="mt-6 overflow-x-auto" data-lenis-prevent>
            <table className="w-full min-w-[48rem] text-sm">
              <thead>
                <tr className="border-deep border-b text-left">
                  <th className="label-sh py-3 pr-4 font-normal">Property</th>
                  {groutingComparison.columns.map((column) => (
                    <th key={column} className="font-display py-3 pr-4">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-deep/15 divide-y">
                {groutingComparison.rows.map((row) => (
                  <tr key={row.property} className="align-top">
                    <th
                      scope="row"
                      className="py-3 pr-4 text-left font-semibold"
                    >
                      {row.property}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={index} className="py-3 pr-4 leading-relaxed">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            Material selection guide.
          </h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            {selectionGuide.map((guide) => (
              <div
                key={guide.title}
                className="border-deep/15 rounded-2xl border bg-white p-5"
              >
                <h4 className="font-display text-xl">{guide.title}</h4>
                <p className="text-muted mt-1 text-sm">{guide.note}</p>
                <table className="mt-4 w-full text-sm">
                  <thead className="sr-only">
                    <tr>
                      <th>Leakage type</th>
                      <th>Detail and function</th>
                      <th>Recommended products</th>
                    </tr>
                  </thead>
                  <tbody className="divide-deep/10 divide-y">
                    {guide.rows.map((row, index) => (
                      <tr key={index} className="align-top">
                        <td className="py-2 pr-3">{row.leakage}</td>
                        <td className="py-2 pr-3">
                          {row.detail && (
                            <span className="text-muted block text-xs">
                              {row.detail}
                            </span>
                          )}
                          {row.use}
                        </td>
                        <td className="spec-sh py-2 text-right">
                          {row.products}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            5.1 Grouting and injection materials.
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed">{intros.grouting}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "yhacgrout-2101",
              "yhpugrout-2102",
              "yhpugrout-2103",
              "yhpugrout-2104",
              "yhepgrout-2106",
              "yhinjehose",
            ].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            5.2 Negative repairing materials.
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              "yhcrystal-2510",
              "yhcrystal-2512",
              "yhprimblock-1400",
              "yhcolorwall-5100",
              "yhrepair-2516",
              "yhepoxy-gr90",
            ].map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
        </Container>
      </section>

      {/* ---- The documents ----------------------------------------------- */}
      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">For the consultant&apos;s file</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            The manual, and the HDPE documents.
          </h2>
          <DocumentList
            className="mt-8"
            groups={[
              {
                title: "OYH's documents, as issued",
                docs: [BELOW_GRADE_MANUAL, HDPE_BROCHURE, PMH_METHOD_STATEMENT],
              },
            ]}
          />
          <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed">
            Every value on this page is copied from the manual with its test
            method; the manual is the document of record. Every OYH PDF on the
            site is listed on the{" "}
            <Link href="/oriental-yuhong#documents" className="u-line">
              Oriental Yuhong page
            </Link>
            .
          </p>
        </Container>
      </section>

      <Faq items={faq} heading="Below grade, in short." />

      <RelatedLinks
        links={[
          {
            label: "HDPE waterproofing",
            href: "/oriental-yuhong/hdpe-waterproofing",
            sub: "PMH-3080 Plus, the membrane we hold, in 3D",
          },
          {
            label: "PMH-3080 Plus",
            href: "/oriental-yuhong/pmh-3080-plus",
            sub: "The membrane's own page",
          },
          {
            label: "Waterproofing selector",
            href: "/solutions/waterproofing",
            sub: "Which product for which part of the building",
          },
          {
            label: "OYH products in East Africa",
            href: "/oriental-yuhong",
            sub: "The Oriental Yuhong hub, with every document",
          },
        ]}
      />

      <CtaBand
        label="Below-grade waterproofing"
        heading="Send the drawing. We will name the system."
        body="Tell us what is below ground: basement, tank, tunnel or a leak in a structure already built, with the area and the water table. You get the system, the products and a written quotation from our Dar es Salaam office."
        topic="OYH below-grade waterproofing"
      />
    </main>
  );
}
