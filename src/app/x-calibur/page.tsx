/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ogBase, resolveOg } from "@/lib/seo";
import { xcaliburPageMeta } from "@/config/seo/x-calibur";
import Link from "next/link";

import { SplitHeading } from "@/components/motion/split-heading";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedLinks } from "@/components/sections/related-links";
import { Faq } from "@/components/sections/faq";
import { XCaliburCertificate } from "@/components/sections/x-calibur/certificate";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { brandBySlug } from "@/config/brands";
import { productHref } from "@/config/catalogue";
import { credentialHref, requireCredential } from "@/config/credentials";
import { siteConfig } from "@/config/site";
import {
  xcaliburCoverage,
  xcaliburProducts,
  xcaliburTds,
} from "@/config/x-calibur";
import {
  PATH as ANTISTATIC_PATH,
  cutaway,
  grades,
} from "@/config/x-calibur-antistatic";
import { faqJsonLd, type FaqItem } from "@/lib/faq";
import { pad } from "@/lib/utils";
import { FlowButton } from "@/components/ui/flow-button";
import Image from "next/image";

/**
 * X-CALIBUR HUB - owns "X-Calibur Tanzania" (SEO-STRATEGY.md 5.1).
 * Same shell as the rest of the site, in X-Calibur's colour (the
 * `brand-x-calibur` class). Server component. Every figure below is read
 * from the catalogue or from the coverage models, which quote X-Calibur's
 * own data sheets.
 */

const PATH = "/x-calibur";
const { title: TITLE, description: DESCRIPTION } = xcaliburPageMeta("x-calibur");

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
];

const brand = brandBySlug["x-calibur"];

/** The authorised distributor certificate (owner, 2026-11-14), shown as
 * issued. Every claim of authorization on this page reads from it. */
const credential = requireCredential("x-calibur");

// Systems: the products that go down together. Names only, from the list;
// the antistatic row's parts are the data sheet's and the method
// statement's (2026-11-19), the system has a page of its own.
type Step = { label: string; href?: string };
const SYSTEMS: { name: string; href?: string; steps: (string | Step)[] }[] = [
  {
    name: "Antistatic and conductive floor",
    href: ANTISTATIC_PATH,
    steps: [
      { label: "X-Prime SF or X-Prime MT100", href: `${ANTISTATIC_PATH}#parts` },
      "x-tech-antistatic-sle",
      {
        label: "copper tape, X-Seal HD80 Conductive",
        href: `${ANTISTATIC_PATH}#grounding`,
      },
    ],
  },
  {
    name: "Epoxy floor",
    steps: ["x-prime-gp", "x-tech-epoxyfloor-sl1"],
  },
  {
    name: "Epoxy floor, second primer",
    steps: ["x-prime-gp2", "x-tech-epoxyfloor-sl1"],
  },
  { name: "Bonding new to old concrete", steps: ["x-tech-sbr-bond"] },
  { name: "Wet area and roof waterproofing", steps: ["x-shield-flexpruf"] },
  { name: "Joint sealing", steps: ["x-seal-universal-primer", "x-seal-ps800"] },
];

const faq: FaqItem[] = [
  {
    q: "Is Sahihi an authorized X-Calibur distributor in Tanzania?",
    lead: `Yes, in writing: ${credential.issuer} certifies it for the ${credential.territory}, valid until ${credential.validUntilText}.`,
    points: [
      `The certificate names five ranges: ${credential.ranges.map((range) => range.name.replace(/ (Systems|Sealants)$/, "")).join(", ")}`,
      "It is on this page as issued, with the PDF to download",
    ],
  },
  {
    q: "Which X-Calibur products does Sahihi stock in Tanzania?",
    lead: `${xcaliburProducts.length} products: ${xcaliburProducts.length - 1} held in Dar es Salaam, the antistatic flooring system supplied to order.`,
    points: xcaliburProducts.map(
      (item) => `${item.name}: ${item.type.toLowerCase()}`,
    ),
  },
  {
    q: "Does X-Calibur make an antistatic or conductive floor?",
    lead: "Yes: X-Tech AntiStatic SLE, a three layer epoxy system in a conductive grade and a dissipative grade.",
    points: [
      `Conductive grade ${grades[0].range}, dissipative grade ${grades[1].range}`,
      "Earthed through copper strips and, when specified, a copper tape grid; tested to ASTM F150",
      "Its own page explains the system and sizes the materials",
    ],
  },
  {
    q: "How far does a 17 litre pack of X-Tech EpoxyFloor SL1 go?",
    lead: "17 m² at 1 mm, on X-Calibur's data sheet.",
    points: [
      "Grade SL1 is laid at 1 to 1.5 mm",
      "The product page has a calculator with a wastage field",
    ],
  },
  {
    q: "How many coats of X-Shield FlexPruf does a job need?",
    lead: "X-Calibur's data sheet says normal applications require 2 coats.",
    points: [
      "Theoretical coverage is 1 litre (1.7 kg) per m² per coat",
      "It is supplied in 22 kg kits",
    ],
  },
  {
    q: "Is it X-Calibur or Xcalibur?",
    lead: "The brand writes it X-Calibur, with a hyphen.",
    points: [
      "It is also searched as Xcalibur, X Calibur and Excalibur",
      "Send the name on your drawing or your old pail and we will match it",
    ],
  },
];

export default function XCaliburPage() {
  const sheets = xcaliburProducts.filter((item) => xcaliburTds[item.slug]);
  const calculators = xcaliburProducts.filter(
    (item) => xcaliburCoverage[item.slug],
  );
  const bySlug = Object.fromEntries(
    xcaliburProducts.map((item) => [item.slug, item]),
  );

  return (
    <main className="brand-x-calibur theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/x-calibur`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: xcaliburProducts.length,
              itemListElement: xcaliburProducts.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                url: `${siteConfig.url}${productHref(item)}`,
              })),
            },
          },
          faqJsonLd(faq),
          // The certificate, as the visible section states it. The
          // Organization node of every page is extended by its @id.
          {
            "@type": "Certification",
            "@id": `${siteConfig.url}${credentialHref(credential)}`,
            name: `${credential.title} - X-Calibur, ${credential.territory}`,
            description: `${credential.issuer} certifies ${siteConfig.legalName} as its authorised distributor for the ${credential.territory} for ${credential.ranges.map((range) => range.name).join(", ")}.`,
            certificationStatus: "https://schema.org/CertificationActive",
            issuedBy: {
              "@type": "Organization",
              name: credential.issuer,
              address: credential.issuerPlace,
            },
            validIn: { "@type": "Country", name: "Tanzania" },
            expires: credential.validUntil,
            url: `${siteConfig.url}${credentialHref(credential)}`,
            image: `${siteConfig.url}${credential.image.src}`,
            subjectOf: {
              "@type": "DigitalDocument",
              name: `${credential.title} certificate, X-Calibur, ${credential.validUntil.slice(0, 4)}`,
              url: `${siteConfig.url}${credential.file}`,
              encodingFormat: "application/pdf",
            },
          },
          {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            hasCertification: {
              "@id": `${siteConfig.url}${credentialHref(credential)}`,
            },
          },
        ]}
      />

      {/* ---- Masthead: white, in X-Calibur's red --------------------------- */}
      <section className="bg-white">
        <Container className="pt-28 pb-16 sm:pt-36 sm:pb-24">
          <Breadcrumb items={crumbs} />
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="label-sh text-muted leading-relaxed">
              {brand.authorization} · Tanzania ·{" "}
              <a href={`#${credential.anchor}`} className="u-line">
                certified to {credential.validUntilText}
              </a>
            </p>
            <span className="border-deep/15 inline-flex rounded-full border bg-white px-5 py-3">
              <img
                src={brand.logo.src}
                alt="X-Calibur logo"
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-6 w-auto"
              />
            </span>
          </div>
          <h1 className="text-brand font-display mt-6 text-[clamp(2rem,7.6vw,5.25rem)] leading-[1.02] uppercase">
            X-Calibur in Tanzania.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <p className="text-phi-1 max-w-3xl leading-snug font-light">
              {siteConfig.brandName} supplies X-Calibur in Tanzania: a
              self-levelling epoxy floor and two primers, an SBR bonding agent,
              an elasto-cement waterproof coating, and a polysulphide joint
              sealant with its primer, held in Dar es Salaam; and the
              antistatic and conductive epoxy flooring system, supplied to
              order.
            </p>
            <dl className="border-deep grid grid-cols-2 border-t sm:grid-cols-4">
              {[
                { value: credential.ranges.length, label: "Ranges certified" },
                { value: xcaliburProducts.length, label: "Products" },
                { value: sheets.length, label: "Data sheets" },
                { value: calculators.length, label: "Calculators" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-deep/20 border-r py-5 pr-3 nth-[2n]:border-r-0 nth-[2n+1]:pl-0 nth-[2n]:pl-4 sm:not-first:pl-4 sm:nth-[2n]:border-r sm:last:border-r-0"
                >
                  <dd className="font-display text-phi-3 leading-none">
                    {stat.value}
                  </dd>
                  <dt className="label-sh text-muted mt-3 leading-relaxed">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ---- The certificate: the authorization, as issued ----------------- */}
      <XCaliburCertificate credential={credential} />

      {/* ---- The products: one card each ----------------------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">The range we stock</p>
          <SplitHeading
            as="h2"
            className="font-display text-phi-3 mt-5 tracking-tight"
          >
            {xcaliburProducts.length} products, one page each.
          </SplitHeading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {xcaliburProducts.map((item, index) => (
              <li key={item.slug}>
                <Link
                  href={productHref(item)}
                  className="group border-deep/15 flex h-full flex-col rounded-lg border bg-white p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7"
                >
                  <span className="spec-sh text-muted flex justify-between gap-4">
                    <span>{pad(index + 1)}</span>
                    <span>{item.packs.join(" · ")}</span>
                  </span>
                  <span className="label-sh text-muted mt-8 leading-relaxed">
                    {item.type}
                  </span>
                  <span className="text-brand mt-2 text-2xl leading-tight font-semibold tracking-tight uppercase sm:text-3xl">
                    {item.name}
                  </span>
                  <span className="mt-3 leading-relaxed">{item.summary}</span>
                  <span className="spec-sh mt-auto flex items-center justify-between gap-4 pt-7">
                    <span>
                      {xcaliburTds[item.slug]
                        ? "Data sheet PDF"
                        : "Data sheet on request"}
                    </span>
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-500 group-hover:translate-x-2"
                    >
                      &rarr;
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Antistatic and conductive floors: the system page ------------- */}
      <section className="bg-accent">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-14">
            <div>
              <p className="label-sh">New on 2026-11-19 · X-Tech AntiStatic SLE</p>
              <h2 className="font-display mt-5 text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.04] uppercase">
                Antistatic floors. Conductive floors. One system.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed">
                An epoxy primer, a conductive or dissipative base coat and a
                self smoothing top coat at 1.5 to 2 mm, earthed through copper
                and tested to ASTM F150. Conductive grade {grades[0].range},
                dissipative grade {grades[1].range}. The page explains the
                system layer by layer and sizes the materials for your floor.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <FlowButton href={ANTISTATIC_PATH}>The antistatic floor</FlowButton>
                <FlowButton href="/x-calibur/x-tech-antistatic-sle">
                  The product page
                </FlowButton>
              </div>
            </div>
            <Link
              href={ANTISTATIC_PATH}
              className="block overflow-hidden rounded-2xl bg-white p-3 transition-transform duration-500 hover:-translate-y-1 sm:p-4"
            >
              <Image
                src={cutaway.src}
                alt={cutaway.alt}
                width={cutaway.width}
                height={cutaway.height}
                sizes="(min-width: 64rem) 48vw, 100vw"
                className="h-auto w-full rounded-lg"
              />
              <span className="spec-sh text-deep mt-3 block px-1">
                X-Calibur&apos;s cutaway drawing: primer, copper grid, base coat,
                top coat
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ---- Systems: what goes down together ------------------------------ */}
      <section className="bg-surface py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">Systems</p>
          <h2 className="font-display text-phi-3 mt-5 max-w-3xl tracking-tight text-balance">
            What goes down together.
          </h2>
          <ol className="border-deep mt-12 border-t">
            {SYSTEMS.map((system, index) => (
              <li
                key={system.name}
                className="border-deep/20 grid gap-x-8 gap-y-4 border-b py-7 lg:grid-cols-[4rem_1fr_1.618fr]"
              >
                <span className="spec-sh text-muted pt-1.5">
                  {pad(index + 1)}
                </span>
                <h3 className="font-display text-2xl leading-tight">
                  {system.href ? (
                    <Link href={system.href} className="u-line">
                      {system.name}
                    </Link>
                  ) : (
                    system.name
                  )}
                </h3>
                <ul className="flex flex-wrap items-center gap-2.5">
                  {system.steps.map((raw, step) => {
                    const item: Step =
                      typeof raw === "string"
                        ? { label: bySlug[raw].name, href: productHref(bySlug[raw]) }
                        : raw;
                    return (
                      <li key={item.label} className="flex items-center gap-2.5">
                        {step > 0 && <span aria-hidden>+</span>}
                        <Link
                          href={item.href ?? ANTISTATIC_PATH}
                          className="chip-sh border-deep bg-chalk inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Faq items={faq} heading="X-Calibur, in short." />

      <RelatedLinks
        links={[
          {
            label: "Waterproofing selector",
            href: "/solutions/waterproofing",
            sub: "X-Calibur, Mapei and OYH by part of the building",
          },
          {
            label: "Concrete repair selector",
            href: "/solutions/concrete-repair",
            sub: "X-Tech SBR Bond and the Mapei repair line",
          },
          {
            label: "Specifier pack",
            href: "/specifier-pack",
            sub: "Every BOQ clause in one spreadsheet",
          },
        ]}
      />

      <CtaBand
        label="X-Calibur in Tanzania"
        heading="Send the specification. We will match the product."
        body="Tell us the floor, the wet area or the joint, with its size. You get a product recommendation and a written quotation from our Dar es Salaam office."
        topic="X-Calibur products"
      />
    </main>
  );
}
