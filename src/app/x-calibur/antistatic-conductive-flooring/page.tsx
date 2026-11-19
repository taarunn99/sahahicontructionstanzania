import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TiltCard } from "@/components/motion/tilt-card";
import { AddToQuote } from "@/components/quote/add-to-quote";
import { CtaBand } from "@/components/sections/cta-band";
import { DocumentList } from "@/components/sections/document-list";
import { Faq } from "@/components/sections/faq";
import { ModelCta } from "@/components/sections/model-cta";
import { HotspotMap } from "@/components/sections/oyh/hotspot-map";
import { RelatedLinks } from "@/components/sections/related-links";
import { AntistaticCalculator } from "@/components/sections/xcalibur/antistatic-calculator";
import { ResistanceScale } from "@/components/sections/xcalibur/resistance-scale";
import { JsonLd } from "@/components/seo/json-ld";
import { LayerStack } from "@/components/three-d/layer-stack";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { brandBySlug } from "@/config/brands";
import {
  antistaticColours,
  antistaticHex,
  antistaticStack,
} from "@/config/build-ups";
import { credentialHref, requireCredential } from "@/config/credentials";
import { xcaliburPageMeta } from "@/config/seo/x-calibur";
import { siteConfig, whatsappLink } from "@/config/site";
import {
  advantages,
  chemicals,
  chemicalsNote,
  colourNotes,
  compliance,
  coverage,
  cutaway,
  description,
  documents,
  faq,
  fullCure,
  fullCureNote,
  grades,
  grounding,
  hotspotEntries,
  labData,
  labNote,
  labour,
  limitations,
  limits,
  moistureBands,
  otherProducts,
  parts,
  PATH,
  pins,
  potLife,
  potLifeSheet,
  preparation,
  PRODUCT_PATH,
  recoat,
  shelfLife,
  steps,
  tests,
  tools,
  uses,
  voc,
  wft,
} from "@/config/x-calibur-antistatic";
import { faqJsonLd } from "@/lib/faq";
import { ogBase, resolveOg } from "@/lib/seo";
import { cn, pad } from "@/lib/utils";

/**
 * ANTISTATIC AND CONDUCTIVE FLOORS: owns "antistatic flooring Tanzania" and
 * "conductive flooring" (owner, 2026-11-19: both phrases on one page).
 * X-Calibur's X-Tech AntiStatic SLE from its data sheet, method statement
 * and brochure: what the two grades mean (the resistance scale), the floor
 * in 3D (one Three.js scene), the grounding on X-Calibur's own cutaway as a
 * hotspot map, the primer the moisture test picks, a system calculator, the
 * parts, the nine independent tests, the colours, the site rules and the
 * three documents. Every fact is the documents' (src/config/
 * x-calibur-antistatic.ts); everything is supplied to order. Server
 * component.
 */

const { title: TITLE, description: DESCRIPTION } = xcaliburPageMeta(
  "antistatic-conductive-flooring",
);
const brand = brandBySlug["x-calibur"];
const credential = requireCredential("x-calibur");

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
  { label: "X-Calibur", href: "/x-calibur" },
  { label: "Antistatic and conductive floors", href: PATH },
];

const SECTIONS = [
  { id: "grades", name: "Conductive or dissipative" },
  { id: "layers", name: "The floor in 3D" },
  { id: "grounding", name: "Grounding" },
  { id: "primer", name: "Which primer" },
  { id: "calculator", name: "Calculator" },
  { id: "parts", name: "The parts" },
  { id: "tested", name: "Tested nine ways" },
  { id: "site", name: "On site" },
  { id: "documents", name: "Documents" },
];

const PILL =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 text-sm font-semibold tracking-wide uppercase";

function Head({
  number,
  kicker,
  heading,
  intro,
}: {
  number: string;
  kicker: string;
  heading: string;
  intro?: string;
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
      {intro && <p className="max-w-2xl leading-relaxed">{intro}</p>}
    </div>
  );
}

/** A small table of printed values with a caption naming the document. */
function Figures({
  title,
  caption,
  columns,
  rows,
  note,
}: {
  title: string;
  caption: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
  note?: string;
}) {
  return (
    <div className="border-deep/15 min-w-0 rounded-2xl border bg-white p-5">
      <h4 className="font-display text-xl">{title}</h4>
      <p className="spec-sh text-muted mt-1">{caption}</p>
      <div className="mt-3 overflow-x-auto" data-lenis-prevent>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-deep border-b text-left">
              <th className="label-sh py-2 pr-3 font-normal">Part</th>
              {columns.map((column) => (
                <th
                  key={column}
                  className="label-sh py-2 pr-3 text-right font-normal"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-deep/10 divide-y">
            {rows.map((row) => (
              <tr key={row.label} className="align-top">
                <th scope="row" className="py-2 pr-3 text-left font-normal">
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={index}
                    className="spec-sh py-2 pr-3 text-right whitespace-nowrap"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="text-muted mt-3 text-xs leading-relaxed">{note}</p>}
    </div>
  );
}

export default function AntistaticFlooringPage() {
  return (
    <main className="brand-x-calibur theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "WebPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${PATH}`,
            about: { "@type": "Brand", name: "X-Calibur" },
            mainEntity: {
              "@type": "ItemList",
              name: "X-Tech AntiStatic SLE, the parts of the system",
              numberOfItems: parts.length,
              itemListElement: parts.map((part, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: part.name,
                url: `${siteConfig.url}${part.href ?? `${PATH}#${part.slug}`}`,
              })),
            },
            subjectOf: documents.map((doc) => ({
              "@type": "DigitalDocument",
              name: doc.name,
              url: `${siteConfig.url}${doc.file}`,
              encodingFormat: "application/pdf",
            })),
          },
          faqJsonLd(faq),
        ]}
      />

      {/* ---- Hero ---------------------------------------------------------- */}
      <section className="bg-accent">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-center">
            <div>
              <p className="label-sh">
                {brand.authorization} · X-Tech AntiStatic SLE
              </p>
              <h1 className="font-display mt-5 text-[clamp(2rem,7.2vw,5.25rem)] leading-[1.02] uppercase">
                Antistatic floors. Conductive floors. One X-Calibur system.
              </h1>
              <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
                An epoxy primer, a conductive or dissipative base coat and a
                self smoothing top coat at 1.5 to 2 mm, earthed through copper
                and tested to ASTM F150: for electronics plants, hospitals,
                clean rooms and chemical areas. From X-Calibur&apos;s own
                documents, supplied to order by {siteConfig.brandName} from Dar
                es Salaam.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <FlowButton href="#calculator">Size my floor</FlowButton>
                <FlowButton href={whatsappLink("X-Tech AntiStatic SLE")}>
                  Request a quote
                </FlowButton>
              </div>
            </div>
            <TiltCard className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-4">
              <Image
                src={cutaway.src}
                alt={cutaway.alt}
                width={cutaway.width}
                height={cutaway.height}
                preload
                sizes="(min-width: 64rem) 36vw, 100vw"
                className="h-auto w-full rounded-lg"
              />
              <p className="spec-sh text-deep mt-3 px-1">
                X-Calibur&apos;s cutaway drawing of the floor, from its
                brochure
              </p>
            </TiltCard>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-white/40 pt-6 sm:grid-cols-4">
            {[
              { value: grades[0].range, label: "Conductive grade (CG)" },
              { value: grades[1].range, label: "Dissipative grade (DG)" },
              { value: "1.5 to 2 mm", label: "Top coat thickness" },
              { value: `${tests.length} tests`, label: "Independently certified" },
            ].map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-xl leading-tight sm:text-2xl">
                  {stat.value}
                </dd>
                <dt className="label-sh mt-2">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <nav aria-label="On this page" className="mt-8">
            <ol className="flex flex-wrap gap-2">
              {SECTIONS.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="chip-sh inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/70 px-4 text-sm"
                  >
                    <span className="spec-sh">{pad(index + 1)}</span>
                    {section.name}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </section>

      {/* ---- 01 Conductive or dissipative ---------------------------------- */}
      <section id="grades" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="01"
            kicker="What the words mean"
            heading="Antistatic is the job. Conductive or dissipative is the grade."
            intro={description}
          />
          <div className="mt-10">
            <ResistanceScale />
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="font-display text-xl">Typical uses</h3>
              <ul className="mt-3 space-y-1.5 leading-relaxed">
                {uses.map((use) => (
                  <li key={use} className="flex gap-2.5">
                    <span aria-hidden className="text-brand">
                      ✓
                    </span>
                    {use}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl">Advantages</h3>
              <ul className="mt-3 space-y-1.5 leading-relaxed">
                {advantages.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="text-brand">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl">Laboratory test data</h3>
              <table className="mt-3 w-full text-sm">
                <thead className="sr-only">
                  <tr>
                    <th>Property</th>
                    <th>Typical results</th>
                  </tr>
                </thead>
                <tbody className="divide-deep/10 divide-y">
                  {labData.map((row) => (
                    <tr key={row.property}>
                      <td className="py-1.5 pr-3">{row.property}</td>
                      <td className="spec-sh py-1.5 text-right">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-muted mt-2 text-xs leading-relaxed">{labNote}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- 02 The floor in 3D ------------------------------------------- */}
      <section id="layers" className="bg-surface scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="02"
            kicker="Pull it apart"
            heading="The floor, layer by layer."
            intro="Concrete, primer, the copper tape grid when one is specified, the base coat of the chosen grade at 150 microns, then the top coat at 1.5 to 2 mm. Drag to turn it, slide to pull it apart, and put one of the eight listed colours on the floor."
          />
          <div className="mt-8">
            <LayerStack
              layers={antistaticStack("X-Prime SF")}
              decors={antistaticColours}
              decorLabel="Colour of the floor, preview only:"
              decorNamed
              listLabel="The build-up, top to bottom"
            />
          </div>
          <ModelCta className="mt-6" topic="X-Tech AntiStatic SLE" />
        </Container>
      </section>

      {/* ---- 03 Grounding -------------------------------------------------- */}
      <section id="grounding" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="03"
            kicker="The method statement"
            heading="A conductive floor is only as good as its path to earth."
            intro="X-Calibur's drawing, with the six parts pinned: hover or tap a number for the part, its figures and where it goes. The copper strips to the ground point are always there; the copper tape grid only when the specification calls for it."
          />
          <div className="mt-10">
            <HotspotMap
              id="grounding-map"
              title="The grounded floor"
              page={2}
              picture={cutaway}
              pins={pins}
              entries={hotspotEntries}
              caption="X-Calibur's cutaway drawing · brochure page 2"
              foot="Figures as X-Calibur prints them · supplied to order"
              emptyText="The slab, prepared by the contractor: captive blasted to an ICRI CSP 4 or 5 profile, bug holes filled with X-Shield BugFill or X-Tech Primer Filler, levelled with X-Tech LevelCem HD where needed, and moisture tested."
            />
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { title: "Connection to ground", text: grounding.strips },
              { title: "How many", text: grounding.spacing },
              { title: "The grid, when specified", text: grounding.grid },
              { title: "Making the contact", text: grounding.adhesive },
              { title: "Bridging movement joints", text: grounding.joints },
              { title: "Floor joints", text: grounding.floorJoints },
            ].map((item) => (
              <div
                key={item.title}
                className="border-deep/15 rounded-2xl border bg-white p-5"
              >
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed">
            {grounding.contact}
          </p>
        </Container>
      </section>

      {/* ---- 04 Which primer ----------------------------------------------- */}
      <section id="primer" className="bg-surface scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="04"
            kicker="Moisture testing"
            heading="The slab's moisture picks the primer."
            intro="Two primers, one rule: X-Prime SF on a dry slab, X-Prime MT100 where the slab breathes moisture, in one coat or two by the moisture vapour emission rate. The test kits are available from X-Calibur."
          />
          <ol className="border-deep mt-10 border-t">
            {moistureBands.map((band, index) => (
              <li
                key={band.id}
                className="border-deep/15 grid gap-x-8 gap-y-2 border-b py-5 lg:grid-cols-[4rem_1fr_1fr]"
              >
                <span className="spec-sh text-muted pt-1">{pad(index + 1)}</span>
                <div>
                  <p className="font-display text-xl leading-tight">
                    {band.label}
                  </p>
                  <p className="mt-1 font-semibold">
                    {band.primer
                      ? `${band.primer}, ${band.coats === 1 ? "one coat" : "two coats"} at ${band.wft} microns wet film`
                      : "Contact X-Calibur"}
                  </p>
                </div>
                <p className="text-sm leading-relaxed">{band.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---- 05 Calculator ------------------------------------------------- */}
      <section id="calculator" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="05"
            kicker="For the BOQ"
            heading="Size the floor. Count the packs."
            intro="Area, thickness and the moisture band in; litres and packs of primer, base coat and top coat out, with the ground connections and the readings the method statement calls for. Each line goes into your quote list with its pack count."
          />
          <div className="mt-10">
            <AntistaticCalculator />
          </div>
        </Container>
      </section>

      {/* ---- 06 The parts -------------------------------------------------- */}
      <section id="parts" className="bg-surface scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="06"
            kicker="Supplied to order"
            heading={`The system's ${parts.length} parts.`}
            intro="The data sheet names the primers and the two coats; the method statement names the copper, the conductive adhesive and the joint sealant. Add what the job needs to your quote list and we quote the lot from Dar es Salaam."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {parts.map((part) => (
              <article
                key={part.slug}
                id={part.slug}
                className="border-deep/15 flex h-full min-w-0 scroll-mt-28 flex-col rounded-2xl border bg-white p-5 sm:p-6"
              >
                <p className="label-sh text-muted leading-relaxed">{part.role}</p>
                <h3 className="font-display text-brand mt-2 text-2xl leading-tight">
                  {part.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{part.line}</p>
                {part.packs.length > 0 && (
                  <p className="spec-sh text-muted mt-3">
                    {part.packs.join(" · ")}
                  </p>
                )}
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6">
                  {part.href ? (
                    <Link href={part.href} className={cn(PILL, "bg-brand text-white")}>
                      Its page
                    </Link>
                  ) : (
                    <AddToQuote
                      variant="chip"
                      label="Add to quote list"
                      item={{
                        id: `x-calibur:${part.slug}`,
                        name: part.name,
                        brand: "X-Calibur",
                        href: `${PATH}#${part.slug}`,
                        packs: part.packs,
                      }}
                    />
                  )}
                  <span className="spec-sh text-muted">Supplied to order</span>
                  <span className="spec-sh text-muted">
                    {part.source === "sheet" ? "Data sheet" : "Method statement"}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.618fr]">
            <div>
              <h3 className="font-display text-xl">Also in the range</h3>
              <ul className="mt-3 space-y-3">
                {otherProducts.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-muted text-sm">{item.what}</p>
                  </li>
                ))}
              </ul>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                Named in X-Calibur&apos;s brochure, no data sheet on file yet:
                ask us.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Packaging and shelf life</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                <li>{coverage.primeSf}</li>
                <li>{coverage.primeMt100}</li>
                <li>{coverage.base}</li>
                <li>{coverage.top}</li>
              </ul>
              <p className="text-muted mt-3 text-sm leading-relaxed">
                {shelfLife}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:grid-cols-4">
                {voc.map((row) => (
                  <div key={row.part}>
                    <dt className="text-muted">{row.part} VOC</dt>
                    <dd className="spec-sh">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- 07 Tested nine ways ------------------------------------------- */}
      <section id="tested" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="07"
            kicker="Independently certified"
            heading="Tested nine ways, specified ten."
            intro="X-Calibur's brochure shows the floor's test reports from independent laboratories, one per standard; the data sheet lists the specifications the system complies with. The reports themselves are X-Calibur's; ask us and we will request them for your submittal."
          />
          <ol className="mt-10 grid gap-3 sm:grid-cols-3">
            {tests.map((test, index) => (
              <li
                key={test.standard}
                className="border-deep/15 rounded-2xl border bg-white p-5"
              >
                <p className="spec-sh text-muted">{pad(index + 1)}</p>
                <p className="font-display text-brand mt-2 text-2xl leading-tight">
                  {test.standard}
                </p>
                <p className="mt-1 text-sm">{test.what}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="font-display text-xl">Specification compliance</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {compliance.map((item) => (
                  <li
                    key={item.name}
                    className="border-deep/20 rounded-full border px-3 py-1.5 text-sm"
                  >
                    {item.name}
                    {item.note && <span className="text-muted">*</span>}
                  </li>
                ))}
              </ul>
              <p className="text-muted mt-3 text-xs">* when used with X-Prime SF</p>
            </div>
            <div>
              <h3 className="font-display text-xl">Chemical resistance</h3>
              <p className="text-muted mt-1 text-sm">
                X-Tech AntiStatic SLE has good resistance to the following:
              </p>
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed">
                {chemicals.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="text-brand">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted mt-3 text-xs">{chemicalsNote}</p>
            </div>
            <div>
              <h3 className="font-display text-xl">Eight colours</h3>
              <ul className="mt-3 grid grid-cols-4 gap-3">
                {antistaticColours.map((colour) => (
                  <li key={colour.code} className="text-center">
                    <span
                      aria-hidden
                      className="block aspect-square rounded-lg border border-black/10"
                      style={{ backgroundColor: antistaticHex(colour.code) }}
                    />
                    <span className="spec-sh mt-1.5 block text-xs">
                      {colour.code}
                    </span>
                    <span className="text-muted block text-xs">
                      {colour.label}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="text-muted mt-3 space-y-1 text-xs leading-relaxed">
                {colourNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
                <li>On screen the colours are a preview; the RAL card is the truth.</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- 08 On site ---------------------------------------------------- */}
      <section id="site" className="bg-surface scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="08"
            kicker="Application"
            heading="On site: the sheet's rules, in order."
            intro={labour}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.618fr]">
            <div>
              <h3 className="font-display text-xl">Surface preparation</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {preparation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="font-display mt-8 text-xl">Tools and equipment</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="border-deep/20 rounded-full border bg-white px-3 py-1.5 text-xs"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <ol className="border-deep border-t">
              {steps.map((step, index) => (
                <li
                  key={step.name}
                  className="border-deep/15 grid gap-x-6 gap-y-2 border-b py-5 lg:grid-cols-[4rem_1fr]"
                >
                  <span className="spec-sh text-muted pt-1">
                    {pad(index + 1)}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight">
                      {step.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="font-display text-phi-2 mt-14 tracking-tight">
            Times and temperatures.
          </h3>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Figures
              title="Wet film thickness"
              caption="Method statement 4.1 · microns unless stated"
              columns={["Wet film"]}
              rows={wft.map((row) => ({ label: row.part, values: [row.value] }))}
            />
            <Figures
              title="Pot life, minutes"
              caption="Method statement 4.2"
              columns={potLife.columns}
              rows={potLife.rows.map((row) => ({
                label: row.part,
                values: row.values,
              }))}
              note={`The data sheet prints pot life at 25C: ${potLifeSheet.map((row) => `${row.part} ${row.value}`).join(", ")}.`}
            />
            <Figures
              title="Recoat times, hours"
              caption="Method statement 4.3"
              columns={recoat.columns}
              rows={recoat.rows.map((row) => ({
                label: row.part,
                values: row.values,
              }))}
              note={recoat.note}
            />
            <Figures
              title="Full cure, days"
              caption="Method statement 4.4"
              columns={["Days"]}
              rows={fullCure.map((row) => ({ label: row.at, values: [row.value] }))}
              note={fullCureNote}
            />
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl">Temperature and humidity</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {limits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl">Limitations</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                {limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- 09 Documents -------------------------------------------------- */}
      <section id="documents" className="scroll-mt-24 py-14 sm:py-20">
        <Container>
          <Head
            number="09"
            kicker="For the consultant's file"
            heading="The three documents, as issued."
          />
          <DocumentList
            className="mt-8"
            groups={[{ title: "X-Calibur's documents", docs: documents }]}
          />
          <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed">
            Every figure on this page is copied from these three documents;
            the data sheet is the document of record where they differ. The
            product page carries the data sheet and the top coat calculator:{" "}
            <Link href={PRODUCT_PATH} className="u-line">
              X-Tech AntiStatic SLE
            </Link>
            . {siteConfig.brandName} is X-Calibur&apos;s certified authorized
            distributor for Tanzania, to {credential.validUntilText}:{" "}
            <Link href={credentialHref(credential)} className="u-line">
              the certificate
            </Link>
            .
          </p>
        </Container>
      </section>

      <Faq items={faq} heading="Antistatic floors, in short." />

      <RelatedLinks
        links={[
          {
            label: "X-Tech AntiStatic SLE",
            href: PRODUCT_PATH,
            sub: "The product page, data sheet and top coat calculator",
          },
          {
            label: "X-Tech EpoxyFloor SL1",
            href: "/x-calibur/x-tech-epoxyfloor-sl1",
            sub: "The plain self levelling epoxy floor, held in Dar es Salaam",
          },
          {
            label: "Mapei resin flooring",
            href: "/mapei/resin-flooring",
            sub: "Mapefloor epoxy and polyurethane systems",
          },
          {
            label: "X-Calibur in Tanzania",
            href: "/x-calibur",
            sub: "The hub, with the authorised distributor certificate",
          },
          {
            label: "Epoxy floor thickness",
            href: "/blog/epoxy-floor-thickness",
            sub: "From the Journal: how thick, and why",
          },
          {
            label: "Why epoxy floors blister and peel",
            href: "/blog/why-epoxy-floors-blister-and-peel",
            sub: "From the Journal: moisture under the floor",
          },
        ]}
      />

      <CtaBand
        label="Antistatic and conductive floors"
        heading="Send the floor. We will name the grade and the primer."
        body="Tell us the area, what runs on it and what the ESD specification asks for, with the slab's moisture reading if you have it. You get the grade, the primer, the quantities and a written quotation from our Dar es Salaam office."
        topic="X-Tech AntiStatic SLE"
      />
    </main>
  );
}
