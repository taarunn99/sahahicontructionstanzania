import type { Metadata } from "next";

import { CtaBand } from "@/components/sections/cta-band";
import { ProjectsLibrary } from "@/components/sections/projects/projects-library";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import {
  projectLines,
  projectPictureCredits,
  projectRanking,
  projects,
  projectsPeriod,
} from "@/config/projects";
import { siteConfig } from "@/config/site";

/**
 * PROJECTS - owns "Mapei projects Tanzania" (SEO-STRATEGY.md section 5).
 * Server component; the library is the one client island and every project
 * is in its server HTML.
 *
 * FACT LAW: a project shows its name and the products supplied, nothing
 * else (src/config/projects.ts). Publishing is gated on the owner's
 * confirmation (docs/OPEN-QUESTIONS.md Q5, docs/DEPLOY-CHECKLIST.md).
 */

const TITLE = "Mapei Projects in Tanzania - Sites We Have Supplied | Sahihi";
const DESCRIPTION =
  "Projects in Tanzania supplied with Mapei waterproofing, concrete repair, resin flooring and tile adhesives in 2025 and 2026. Filter by line or by product.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/projects" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/projects" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
];

export default function ProjectsPage() {
  const stats = [
    { value: projects.length, label: "Projects" },
    { value: projectRanking.length, label: "Products supplied" },
    { value: projectLines.length, label: "Product lines" },
  ];

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/projects`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: projects.length,
              itemListElement: projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: project.name,
              })),
            },
          },
        ]}
      />

      {/* ---- Masthead ------------------------------------------------------ */}
      <section className="bg-line grain-sh relative">
        <Container className="relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-24">
          <Breadcrumb items={crumbs} />
          <p className="label-sh text-muted mt-10 leading-relaxed">
            References · {projectsPeriod}
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(1.87rem,6.05vw,4.14rem)] leading-[1.02] tracking-tight text-balance">
            Where the products have gone.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:items-end">
            <p className="text-phi-1 dropcap max-w-3xl leading-snug font-light">
              Mapei systems supplied to {projects.length} sites and contractors
              in Tanzania. Filter by line, or pick a product to see where it
              went.
            </p>
            <dl className="border-deep grid grid-cols-3 border-t">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-deep/20 border-r py-5 pr-3 not-first:pl-4 last:border-r-0"
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

      {/* ---- The library --------------------------------------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="sr-only">The projects</h2>
          <ProjectsLibrary
            projects={projects}
            lines={projectLines}
            ranking={projectRanking}
          />
          <p className="text-muted border-deep mt-14 max-w-3xl border-t pt-6 text-sm leading-relaxed">
            Each entry shows the site or client and the products supplied, as
            recorded on our supply sheet for {projectsPeriod}. It does not
            describe the works carried out.
          </p>
          <p className="text-muted mt-3 max-w-3xl text-sm leading-relaxed">
            Some pictures are illustrative. Photo credits:{" "}
            {projectPictureCredits.map((credit, index) => (
              <span key={credit.project}>
                {index > 0 && " · "}
                {credit.project}:{" "}
                {credit.href ? (
                  <a
                    href={credit.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="underline underline-offset-2"
                  >
                    {credit.text}
                  </a>
                ) : (
                  credit.text
                )}
              </span>
            ))}
          </p>
        </Container>
      </section>

      <CtaBand
        label="Your project"
        heading="Send the drawings. We will list the system."
        body="Tell us the structure, the areas and the exposure. You get a product schedule for the job and a written quotation from our Dar es Salaam office."
        topic="products for a project"
      />
    </main>
  );
}
