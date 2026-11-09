import Image from "next/image";
import { ModelCta } from "@/components/sections/model-cta";
import Link from "next/link";

import { ModelViewer } from "@/components/media/model-viewer";
import { Reveal } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { BoqClause } from "@/components/sections/product/boq-clause";
import { CoverageCalculator } from "@/components/sections/product/coverage-calculator";
import { JsonLd } from "@/components/seo/json-ld";
import {
  Breadcrumb,
  breadcrumbJsonLd,
  type Crumb,
} from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import type { Product } from "@/config/catalogue";
import { siteConfig, whatsappLink } from "@/config/site";
import { boqClause, boqCsv } from "@/lib/boq";
import type { CoverageModel } from "@/lib/coverage";
import { cn, pad } from "@/lib/utils";

/**
 * THE PRODUCT PAGE - one template for every manufacturer.
 *
 * Layout after the manufacturer's own product page (owner, 2026-11-06,
 * reference: mapei.com product detail): the pack shot in a white card on
 * the left; on the right the product name in capitals in the
 * manufacturer's colour, a rule, the one-line description in bold, the
 * description, and a ticked list; then "Related documentation" as rows
 * with a pill Download button. Below that, what is ours: the coverage
 * calculator, the full uses and limits, technical data and packaging.
 *
 * The manufacturer's colour comes from the `brand-<slug>` class on <main>
 * (--brand in globals.css). It is used for the title, the ticks and the
 * download button, always on white or under white text.
 *
 * FACT LAW: everything shown is passed in from the catalogue, the data
 * sheet extraction and the coverage model. Nothing is written here.
 * Pack shots are the manufacturer's own files, never generated.
 */

export type ProductContent = {
  titleAsPrinted?: string;
  description?: string;
  whereToUse: string[];
  /** The maker's own list of advantages, where its data sheet prints one. */
  advantages?: string[];
  notFor: string[];
  standards: { standard: string; value: string }[];
  technicalData: { label: string; value: string }[];
  consumption: { quote: string }[];
  mixing?: string | null;
  packaging?: string;
  storage?: string | null;
};

export type ProductDocument = {
  /** Public path of the unaltered PDF. */
  file: string;
  edition?: string;
  pages?: number;
  bytes?: number;
  fetched?: string;
};

export type ProductDetailProps = {
  brand: {
    slug: "mapei" | "x-calibur" | "oriental-yuhong" | "cmci";
    name: string;
  };
  product: Product;
  url: string;
  crumbs: Crumb[];
  back: { href: string; label: string };
  position: { number: number; count: number };
  image: { src: string; width: number; height: number } | null;
  content: ProductContent | null;
  document: ProductDocument | null;
  coverage?: CoverageModel;
  related: {
    name: string;
    type: string;
    href: string;
    detail: string;
    image: string | null;
  }[];
  previous: { name: string; href: string };
  next: { name: string; href: string };
  /** Other names the product is asked for by. */
  alsoKnownAs?: string;
  /** An interactive section for this product, after the jump chips. */
  feature?: React.ReactNode;
  /** A GLB generated from the pack picture; the picture stays the first paint. */
  model?: string | null;
};

const SECTION_LABEL = "label-sh text-muted";
const H2 = "font-display text-phi-3 mt-5 tracking-tight text-balance";
const TICKS = 8;

/** Cosmetic clean-up of a data sheet string. Never changes a word. */
const tidy = (text: string) =>
  text
    .replace(/[\u2010-\u2014]/g, "-")
    .replace(/^[\s▪▫·•\-]+/, "")
    .replace(/\s*[▪▫•]\s*/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s*[;,]\s*$/, "")
    .trim();
const listItem = (text: string) => {
  const clean = tidy(text).replace(/\.$/, "");
  return clean.charAt(0).toUpperCase() + clean.slice(1);
};
const fileSize = (bytes: number) =>
  bytes >= 1024 * 1024
    ? `${(bytes / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;

function Tick() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="text-brand mt-1 size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 10.5 8 15l8.5-10" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3v9.5M6 9l4 4 4-4M3.5 16.5h13" />
    </svg>
  );
}

function SheetIcon() {
  return (
    <svg
      viewBox="0 0 24 28"
      aria-hidden
      className="text-brand h-8 w-7 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M3 1.5h12l6 6v19H3z" />
      <path d="M15 1.5v6h6M7 14h10M7 18h10M7 22h6" />
    </svg>
  );
}

const PILL =
  "inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90";

export function ProductDetail({
  brand,
  product,
  url,
  crumbs,
  back,
  position,
  image,
  content,
  document,
  coverage,
  related,
  previous,
  next,
  alsoKnownAs,
  feature,
  model,
}: ProductDetailProps) {
  const standards = (content?.standards ?? []).filter(
    (entry, index, all) =>
      all.findIndex(
        (other) =>
          other.standard === entry.standard && other.value === entry.value,
      ) === index,
  );
  const uses = (content?.whereToUse ?? []).map(listItem);
  const limits = (content?.notFor ?? []).map(listItem);
  // The ticked list beside the pack: the maker's advantages where its data
  // sheet lists them, otherwise the first uses.
  const advantages = (content?.advantages ?? []).map(listItem);
  const ticks = advantages.length > 0 ? advantages : uses;
  const data = content?.technicalData ?? [];
  const figures = content?.consumption ?? [];
  const description =
    content?.description && tidy(content.description) !== product.summary
      ? tidy(content.description)
      : null;

  const sections = [
    { id: "documents", label: "Documents" },
    coverage && { id: "calculator", label: "Calculator" },
    uses.length > 0 && { id: "where-to-use", label: "Where to use" },
    data.length > 0 && { id: "technical-data", label: "Technical data" },
  ].filter(Boolean) as { id: string; label: string }[];

  const spec = [
    product.classification && { label: "Class", value: product.classification },
    product.consumption && { label: "Consumption", value: product.consumption },
    {
      label: product.packs.length > 1 ? "Packs we stock" : "Pack we stock",
      value: product.packs.join(" · "),
    },
    product.colours && {
      label: product.colours.length > 1 ? "Colours" : "Colour",
      value: product.colours.join(" · "),
    },
  ].filter(Boolean) as { label: string; value: string }[];

  // CMCI's pages are never worded as if CMCI made the product.
  const isMaker = brand.slug !== "cmci";
  const sheetName = isMaker
    ? `${product.name} - ${brand.name} technical data sheet.pdf`
    : `${product.name.replace("/", "-")} technical data sheet.pdf`;
  const sheetMeta = document
    ? [
        document.edition && `Edition ${document.edition}`,
        document.pages && `${document.pages} pages`,
        document.bytes && fileSize(document.bytes),
        "PDF",
      ]
        .filter(Boolean)
        .join(" · ")
    : null;

  // The clause a QS pastes into a bill: data sheet facts only, no rate.
  const clause = boqClause({
    maker: isMaker ? brand.name : null,
    name: product.name,
    type: product.type,
    standards,
    consumption: product.consumption,
    edition: document?.edition,
  });
  if (clause) sections.push({ id: "boq-clause", label: "BOQ clause" });

  return (
    <main
      className={cn(
        `brand-${brand.slug}`,
        "theme-light bg-background text-foreground flex-1",
      )}
    >
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Product",
            "@id": `${siteConfig.url}${url}#product`,
            name: product.name,
            description: product.summary,
            category: product.type,
            brand: {
              "@type": "Brand",
              name: isMaker ? brand.name : product.name.split(" ")[0],
            },
            ...(isMaker && {
              manufacturer: { "@type": "Organization", name: brand.name },
            }),
            url: `${siteConfig.url}${url}`,
            ...(image && { image: `${siteConfig.url}${image.src}` }),
            // No `offers`: prices are quoted, never published.
            additionalProperty: [
              ...standards.map((entry) => ({
                "@type": "PropertyValue",
                name: entry.standard,
                value: entry.value,
              })),
              {
                "@type": "PropertyValue",
                name: "Pack",
                value: product.packs.join(", "),
              },
            ],
            ...(document && {
              subjectOf: {
                "@type": "DigitalDocument",
                name: `${product.name} technical data sheet`,
                encodingFormat: "application/pdf",
                url: `${siteConfig.url}${document.file}`,
              },
            }),
          },
        ]}
      />

      {/* ---- The product: pack shot left, the name and what it is right --- */}
      <section className="bg-white">
        <Container className="pt-28 pb-14 sm:pt-32 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <Link
            href={back.href}
            className="label-sh mt-8 inline-flex min-h-11 items-center gap-2.5 leading-relaxed"
          >
            <span aria-hidden>&larr;</span>
            <span className="u-line">Back to {back.label}</span>
          </Link>

          <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.08fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <figure>
                <div className="border-deep/15 relative aspect-square overflow-hidden rounded-lg border bg-white">
                  {image && model ? (
                    <ModelViewer
                      model={model}
                      poster={image}
                      alt={`${brand.name} ${product.name}, ${product.type.toLowerCase()}: the pack`}
                      preload
                      frontOnly
                    />
                  ) : image ? (
                    <Image
                      src={image.src}
                      alt={`${brand.name} ${product.name}, ${product.type.toLowerCase()}: the pack`}
                      fill
                      preload
                      sizes="(min-width: 64rem) 42vw, 100vw"
                      className="object-contain p-6 sm:p-10"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                      <p className="text-brand text-3xl leading-tight font-semibold tracking-tight uppercase">
                        {product.name}
                      </p>
                      <p className="spec-sh text-muted">
                        {brand.name} · {product.packs.join(" · ")}
                      </p>
                    </div>
                  )}
                </div>
                {image && (
                  <figcaption className="spec-sh text-muted mt-3 leading-relaxed">
                    {brand.name}&apos;s own picture
                    {model &&
                      ", turned into a 3D model you can turn across its front"}
                    . The pack we stock: {product.packs.join(" · ")}.
                  </figcaption>
                )}
              </figure>
              {model && (
                <ModelCta
                  className="mt-5"
                  topic={`${brand.name} ${product.name}`}
                />
              )}
            </div>

            <div>
              <p className="label-sh text-muted flex flex-wrap gap-x-4 gap-y-2 leading-relaxed">
                <span>
                  {brand.name} · {product.type}
                </span>
                <span className="spec-sh tracking-normal normal-case">
                  No. {pad(position.number)} / {position.count}
                </span>
              </p>
              <h1 className="font-display text-brand mt-4 text-[clamp(1.7rem,5vw,2.75rem)] leading-[1.08] text-balance uppercase">
                {product.name}
              </h1>
              <div aria-hidden className="bg-deep/15 mt-6 h-px max-w-md" />
              <p className="text-brand mt-6 text-xl leading-snug font-bold text-balance">
                {product.summary}
              </p>
              {description && (
                <p className="mt-5 max-w-2xl leading-relaxed">{description}</p>
              )}
              {alsoKnownAs && (
                <p className="text-muted mt-4 text-sm leading-relaxed">
                  Also asked for as: {alsoKnownAs}.
                </p>
              )}

              {ticks.length > 0 && (
                <ul className="mt-7 space-y-2.5">
                  {ticks.slice(0, TICKS).map((use, index) => (
                    <li
                      key={index}
                      className="flex gap-3 leading-snug font-semibold"
                    >
                      <Tick />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              )}
              {advantages.length === 0 && uses.length > TICKS && (
                <a
                  href="#where-to-use"
                  className="u-line mt-4 inline-block py-2 text-sm"
                >
                  All {uses.length} uses&ensp;&darr;
                </a>
              )}

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <FlowButton href={whatsappLink(product.name)}>
                  Request a quote
                </FlowButton>
                {document && (
                  <a
                    href={document.file}
                    download={sheetName}
                    className={cn(PILL, "bg-brand text-white")}
                  >
                    Data sheet
                    <DownloadIcon />
                  </a>
                )}
              </div>

              <dl className="border-deep/15 mt-10 border-t">
                {spec.map((row) => (
                  <div
                    key={row.label}
                    className="border-deep/15 grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-b py-3.5"
                  >
                    <dt className="label-sh text-muted leading-relaxed">
                      {row.label}
                    </dt>
                    <dd className="spec-sh">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Jump chips: real anchors ------------------------------------- */}
      <nav
        aria-label="On this page"
        className="border-deep/15 bg-background border-y"
      >
        <Container>
          <ul className="flex flex-wrap gap-2.5 py-5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {feature}

      {/* ---- Related documentation: rows with a pill Download ------------- */}
      <section id="documents" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <h2 className="font-display text-phi-2 text-center tracking-tight">
            Related documentation
          </h2>
          <ul className="mx-auto mt-10 max-w-4xl space-y-3">
            <li className="border-deep/10 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 rounded-lg border bg-white px-5 py-4 shadow-[0_1px_3px_rgba(12,42,54,0.08)] sm:grid-cols-[auto_1fr_auto_auto] sm:px-6">
              <SheetIcon />
              <div>
                <h3 className="leading-snug font-bold">Technical data sheet</h3>
                <p className="spec-sh text-muted mt-1">
                  {sheetMeta ?? "Sent by WhatsApp or email"}
                </p>
              </div>
              <span className="border-deep/15 spec-sh hidden rounded-full border px-4 py-2 sm:inline-block">
                English
              </span>
              {document ? (
                <span className="col-span-2 flex flex-wrap items-center gap-x-5 gap-y-2 sm:col-span-1">
                  <a
                    href={document.file}
                    download={sheetName}
                    className={cn(PILL, "bg-brand text-white")}
                  >
                    Download
                    <DownloadIcon />
                  </a>
                  <a
                    href={document.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-line py-2 text-sm"
                  >
                    Open
                  </a>
                </span>
              ) : (
                <a
                  href={whatsappLink(
                    `the technical data sheet for ${product.name}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    PILL,
                    "border-deep col-span-2 justify-self-start border sm:col-span-1",
                  )}
                >
                  Request
                </a>
              )}
            </li>
            <li className="border-deep/10 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4 rounded-lg border bg-white px-5 py-4 shadow-[0_1px_3px_rgba(12,42,54,0.08)] sm:grid-cols-[auto_1fr_auto_auto] sm:px-6">
              <SheetIcon />
              <div>
                <h3 className="leading-snug font-bold">Safety data sheet</h3>
                <p className="spec-sh text-muted mt-1">
                  Sent by WhatsApp or email
                </p>
              </div>
              <span className="border-deep/15 spec-sh hidden rounded-full border px-4 py-2 sm:inline-block">
                English
              </span>
              <a
                href={whatsappLink(`the safety data sheet for ${product.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  PILL,
                  "border-deep col-span-2 justify-self-start border sm:col-span-1",
                )}
              >
                Request
              </a>
            </li>
          </ul>
          {document && (
            <p className="text-muted mx-auto mt-6 max-w-4xl text-sm leading-relaxed">
              {isMaker ? `${brand.name}'s` : "The manufacturer's"} own document,
              unaltered
              {document.fetched && `, saved on ${document.fetched}`}.{" "}
              {isMaker ? brand.name : "The manufacturer"} revises its data
              sheets: ask us for the current edition before you specify.
            </p>
          )}
        </Container>
      </section>

      {/* ---- Coverage calculator ------------------------------------------- */}
      {coverage && (
        <section
          id="calculator"
          className="bg-accent relative scroll-mt-24 py-20 sm:py-28"
        >
          <Container className="relative z-10">
            <div className="grid gap-8 lg:grid-cols-[1.618fr_1fr] lg:items-end">
              <div>
                <p className={SECTION_LABEL}>Coverage calculator</p>
                <SplitHeading as="h2" className={H2}>
                  How much you need.
                </SplitHeading>
              </div>
              <p className="text-muted leading-relaxed">
                The arithmetic uses {brand.name}&apos;s published consumption
                for {product.name} and the pack sizes we stock. Set your own
                wastage allowance.
              </p>
            </div>

            <div className="mt-12">
              <CoverageCalculator product={product.name} model={coverage} />
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr]">
              <div>
                <h3 className="font-display text-xl">The figures behind it.</h3>
                <ul className="border-deep mt-5 border-t">
                  {(figures.length > 0
                    ? figures.map((figure) => tidy(figure.quote))
                    : [coverage.source]
                  )
                    .filter((quote, index, all) => all.indexOf(quote) === index)
                    .slice(0, 8)
                    .map((quote, index) => (
                      <li
                        key={index}
                        className="border-deep/20 border-b py-3.5 leading-relaxed"
                      >
                        {quote}
                      </li>
                    ))}
                </ul>
                {coverage.note && (
                  <p className="mt-5 leading-relaxed">{coverage.note}</p>
                )}
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Consumption on site depends on the substrate, the tool and the
                applicator, which is why wastage is yours to set. The result is
                a quantity to plan and quote with, not a guarantee of coverage.
                Confirm the system against the current {brand.name} technical
                data sheet before ordering.
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* ---- Where to use, in full ----------------------------------------- */}
      {uses.length > 0 && (
        <section id="where-to-use" className="scroll-mt-24 py-20 sm:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className={SECTION_LABEL}>Application</p>
                <SplitHeading as="h2" className={H2}>
                  Where it is used.
                </SplitHeading>
                <p className="text-muted mt-6 max-w-sm leading-relaxed">
                  {isMaker
                    ? `In ${brand.name}'s own words, from the technical data sheet.`
                    : "In the words of the technical data sheet."}
                </p>
              </div>
              <div>
                <ol className="border-deep border-t">
                  {uses.map((use, index) => (
                    <li
                      key={index}
                      className="border-deep/15 grid grid-cols-[3rem_1fr] gap-4 border-b py-5"
                    >
                      <span className="spec-sh text-muted pt-1">
                        {pad(index + 1)}
                      </span>
                      <span className="text-lg leading-relaxed">{use}</span>
                    </li>
                  ))}
                </ol>

                {limits.length > 0 && (
                  <Reveal className="border-deep mt-12 rounded-lg border p-6 sm:p-8">
                    <h3 className="font-display text-xl">
                      Where it is not the right product.
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {limits.map((limit, index) => (
                        <li key={index} className="flex gap-3 leading-relaxed">
                          <span
                            aria-hidden
                            className="bg-deep mt-2.5 size-1.5 shrink-0 rounded-full"
                          />
                          {limit}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ---- Technical data ------------------------------------------------ */}
      {data.length > 0 && (
        <section
          id="technical-data"
          className="border-deep scroll-mt-24 border-t py-20 sm:py-28"
        >
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className={SECTION_LABEL}>Specification</p>
                <SplitHeading as="h2" className={H2}>
                  Technical data.
                </SplitHeading>
              </div>
              {standards.length > 0 && (
                <ul className="flex flex-wrap gap-2.5">
                  {standards.map((entry, index) => (
                    <li
                      key={index}
                      className="border-deep spec-sh rounded-full border px-4 py-2.5"
                    >
                      {entry.standard}
                      {entry.value && ` · ${tidy(entry.value)}`}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <dl className="border-deep mt-12 grid gap-x-16 border-t md:grid-cols-2">
              {data.map((row, index) => (
                <div
                  key={index}
                  className="border-deep/15 grid grid-cols-[1fr_1.2fr] items-baseline gap-5 border-b py-4"
                >
                  <dt className="text-muted leading-snug">
                    {tidy(row.label).replace(/:$/, "")}
                  </dt>
                  <dd className="spec-sh">{tidy(row.value)}</dd>
                </div>
              ))}
            </dl>
            <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
              {isMaker ? (
                <>
                  Typical values as {brand.name} prints them
                  {document?.edition &&
                    ` in data sheet edition ${document.edition}`}
                  . They are not a specification for your project: the current{" "}
                  {brand.name} data sheet is.
                </>
              ) : (
                "Values as the technical data sheet prints them. They are not a specification for your project: the current data sheet and the tested fire design are."
              )}
            </p>
          </Container>
        </section>
      )}

      {/* ---- BOQ clause: paste-ready for a bill of quantities -------------- */}
      {clause && (
        <section
          id="boq-clause"
          className="border-deep bg-surface scroll-mt-24 border-t py-20 sm:py-28"
        >
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.618fr_1fr] lg:items-end">
              <div>
                <p className={SECTION_LABEL}>For quantity surveyors</p>
                <SplitHeading as="h2" className={H2}>
                  BOQ clause.
                </SplitHeading>
              </div>
              <p className="text-muted leading-relaxed">
                Ready to paste into a bill of quantities or a specification. It
                names {product.name} as one compliant product, &ldquo;or
                approved equivalent&rdquo;, against the standards the data sheet
                states. Unit, quantity and rate are yours to set.
              </p>
            </div>
            <BoqClause
              clause={clause}
              csv={boqCsv(clause)}
              fileBase={product.name.replace(/[\\/:*?"<>|]/g, "-")}
            />
            <p className="text-muted mt-6 max-w-3xl text-sm leading-relaxed">
              Built from {isMaker ? `${brand.name}'s` : "the manufacturer's"}{" "}
              technical data sheet. Check the clause against the current edition
              before the bill is issued.
            </p>
          </Container>
        </section>
      )}

      {/* ---- Packaging, mixing, storage ------------------------------------ */}
      {(content?.packaging || content?.mixing || content?.storage) && (
        <section className="border-deep border-t py-20 sm:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.618fr]">
              <div>
                <p className={SECTION_LABEL}>On site</p>
                <h2 className={H2}>Packs, mixing and storage.</h2>
              </div>
              <dl className="border-deep border-t">
                <div className="border-deep/15 grid gap-2 border-b py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className={SECTION_LABEL}>We stock</dt>
                  <dd className="spec-sh">{product.packs.join(" · ")}</dd>
                </div>
                {content?.packaging && (
                  <div className="border-deep/15 grid gap-2 border-b py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className={SECTION_LABEL}>
                      {isMaker ? `${brand.name} packaging` : "Packaging"}
                    </dt>
                    <dd className="leading-relaxed">
                      {tidy(content.packaging)}
                    </dd>
                  </div>
                )}
                {content?.mixing && (
                  <div className="border-deep/15 grid gap-2 border-b py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className={SECTION_LABEL}>Mixing</dt>
                    <dd className="leading-relaxed">{tidy(content.mixing)}</dd>
                  </div>
                )}
                {content?.storage && (
                  <div className="border-deep/15 grid gap-2 border-b py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <dt className={SECTION_LABEL}>Storage</dt>
                    <dd className="leading-relaxed">{tidy(content.storage)}</dd>
                  </div>
                )}
              </dl>
            </div>
          </Container>
        </section>
      )}

      {/* ---- Related products: cards with the pack ------------------------- */}
      {related.length > 0 && (
        <section className="border-deep border-t py-20 sm:py-24">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className={SECTION_LABEL}>Related products</p>
                <h2 className={H2}>{back.label}.</h2>
              </div>
              <Link
                href={back.href}
                className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-6 text-sm"
              >
                See them all
              </Link>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4">
              {related.map((other) => (
                <li key={other.href}>
                  <Link
                    href={other.href}
                    className="group border-deep/15 flex h-full flex-col overflow-hidden rounded-lg border bg-white transition-transform duration-500 hover:-translate-y-1"
                  >
                    <span className="relative block aspect-square">
                      {other.image ? (
                        <Image
                          src={other.image}
                          alt={`${other.name} pack`}
                          fill
                          sizes="(min-width: 80rem) 20vw, 46vw"
                          className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <span className="text-brand flex h-full items-center justify-center p-5 text-center text-lg font-semibold uppercase">
                          {other.name}
                        </span>
                      )}
                    </span>
                    <span className="border-deep/15 flex flex-1 flex-col border-t p-4 sm:p-5">
                      <span className="label-sh text-muted leading-relaxed">
                        {other.type}
                      </span>
                      <span className="mt-2 text-lg leading-tight font-bold">
                        {other.name}
                      </span>
                      <span className="spec-sh mt-auto pt-4">
                        {other.detail}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* ---- Previous / next in catalogue order ---------------------------- */}
      <nav
        aria-label={`More ${brand.name} products`}
        className="border-deep border-t"
      >
        <Container className="grid sm:grid-cols-2">
          <Link
            href={previous.href}
            className="hover:bg-surface border-deep/15 block border-b py-8 transition-colors sm:border-r sm:border-b-0 sm:pr-8"
          >
            <span className="label-sh text-muted">&larr;&ensp;Previous</span>
            <span className="font-display mt-3 block text-xl sm:text-2xl">
              {previous.name}
            </span>
          </Link>
          <Link
            href={next.href}
            className="hover:bg-surface block py-8 transition-colors sm:pl-8 sm:text-right"
          >
            <span className="label-sh text-muted">Next&ensp;&rarr;</span>
            <span className="font-display mt-3 block text-xl sm:text-2xl">
              {next.name}
            </span>
          </Link>
        </Container>
      </nav>

      <CtaBand
        label={`${product.name} in Tanzania`}
        heading="Tell us the area. We will quote the job."
        body={`${isMaker ? `Sahihi is an authorized ${brand.name} distributor in Dar es Salaam.` : `Sahihi supplies the ${brand.name} range in Dar es Salaam.`} Send the quantity of ${product.name} you need, or describe the job and we will work it out with you.`}
        topic={product.name}
      />
    </main>
  );
}
