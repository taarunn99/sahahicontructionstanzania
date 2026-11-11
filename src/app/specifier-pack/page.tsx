import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { RelatedLinks } from "@/components/sections/related-links";
import { SpecTable } from "@/components/sections/specifier/spec-table";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { REPAIR_PATH } from "@/config/repair-selector";
import { coreRow } from "@/config/seo/core";
import { siteConfig } from "@/config/site";
import { TILE_PATH } from "@/config/tile-selector";
import { SELECTOR_PATH } from "@/config/waterproofing-selector";
import { ogBase, resolveOg } from "@/lib/seo";
import {
  SPECIFIER_CSV,
  SPECIFIER_PATH,
  specifierRows,
} from "@/lib/specifier-pack";

/**
 * THE SPECIFIER PACK: every BOQ clause, standard, data sheet edition and link
 * in one place, for consultants and quantity surveyors (owner, 2026-11-10;
 * SEO-STRATEGY.md 5.3). No prices, rates or amounts. See
 * src/lib/specifier-pack.ts.
 */

// Owns "construction chemicals specification Tanzania" (src/config/seo/core.ts).
const ROW = coreRow("/specifier-pack");
const TITLE = ROW.titleOverride;
const DESCRIPTION = ROW.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SPECIFIER_PATH },
  openGraph: {
    ...ogBase,
    title: TITLE,
    description: DESCRIPTION,
    url: SPECIFIER_PATH,
    images: resolveOg(SPECIFIER_PATH) ?? ogBase.images,
  },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Specifier pack", href: SPECIFIER_PATH },
];

const rows = specifierRows();

const ranges = [...new Set(rows.map((row) => row.rangeSlug))].map((slug) => {
  const inRange = rows.filter((row) => row.rangeSlug === slug);
  return { slug, label: inRange[0].range, count: inRange.length };
});

export default function SpecifierPackPage() {
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "WebPage",
            "@id": `${siteConfig.url}${SPECIFIER_PATH}#page`,
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${SPECIFIER_PATH}`,
          },
        ]}
      />

      <section className="bg-accent">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh mt-10">
            Construction chemicals specification · BOQ clauses · Tanzania
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
            The specifier pack.
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
            {rows.length} BOQ clauses, one per product, each with the standards
            its data sheet declares, the edition and a link to the unaltered
            PDF. Paste them into a bill, or take the whole pack as one
            spreadsheet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href={SPECIFIER_CSV}>Download for Excel (.csv)</FlowButton>
            <FlowButton href="#clauses">Browse the clauses</FlowButton>
          </div>
        </Container>
      </section>

      <section id="clauses" className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <p className="label-sh text-muted">The clauses</p>
          <h2 className="font-display text-phi-3 mt-5 tracking-tight text-balance">
            Find a product, copy its clause.
          </h2>
          <p className="text-muted mt-4 max-w-2xl leading-relaxed">
            Each clause names the product as one compliant example, &ldquo;or
            approved equivalent&rdquo;, against the standards its data sheet
            declares. The spreadsheet has the same rows with empty Unit and
            Quantity columns for the bill.
          </p>
          <div className="mt-10" translate="no">
            <SpecTable
              rows={rows.map((row) => ({
                range: row.range,
                rangeSlug: row.rangeSlug,
                name: row.name,
                type: row.type,
                standards: row.standards,
                edition: row.edition,
                sheet: row.sheet,
                path: row.path,
                clause: row.clause,
              }))}
              ranges={ranges}
            />
          </div>
          <p className="text-muted mt-12 max-w-3xl text-sm leading-relaxed">
            Built from the manufacturers&apos; technical data sheets as
            published on each product page. Check every clause against the
            current edition before you issue a specification. Tools are not
            listed: they are bought, not written into a bill. Prices are quoted
            on request and are never part of the pack.
          </p>
        </Container>
      </section>

      <RelatedLinks
        links={[
          {
            label: "Waterproofing selector",
            href: SELECTOR_PATH,
            sub: "By part of the building",
          },
          {
            label: "Concrete repair selector",
            href: REPAIR_PATH,
            sub: "By the damage",
          },
          {
            label: "Tile installation selector",
            href: TILE_PATH,
            sub: "Adhesive, grout and care by job",
          },
          { label: "All products", href: "/products", sub: "The catalogue" },
          {
            label: "Construction companies and CRB classes",
            href: "/blog/construction-companies-tanzania-crb-classes",
            sub: "From the blog",
          },
        ]}
      />

      <CtaBand
        label="Specifying a project"
        heading="Writing a specification? Send us the BOQ."
        body="Send the bill or the drawings. We mark up which products meet each item, with the data sheets, and quote from our Dar es Salaam office."
        topic="a specification"
      />
    </main>
  );
}
