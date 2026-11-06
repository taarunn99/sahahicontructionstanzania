import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BrandMarquee } from "@/components/layout/brand-marquee";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import {
  ClipPhoto,
  CountUp,
  FeatureRun,
  Highlighter,
  ScrollSeal,
  SpreadRun,
  StruckList,
} from "@/components/sections/about/magazine";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { bihuiFamilies } from "@/config/bihui";
import { brands } from "@/config/brands";
import { products } from "@/config/catalogue";
import { initiatives, mission, solutions, vision } from "@/config/company";
import {
  companyPhotos,
  heroPhotos,
  materialPhotos,
  solutionPhotos,
} from "@/config/images";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

// /about is the brand-query landing page: the title leads with the exact
// entity name (handoff 12.7).
const TITLE = "Sahihi Construction Chemicals Limited - Dar es Salaam";
const DESCRIPTION = `Sahihi Construction Chemicals Limited, Dar es Salaam: authorized distributor of Mapei, Oriental Yuhong and X-Calibur. Director: ${siteConfig.director.name}.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const CONTENTS = [
  { href: "#problem", label: "The problem" },
  { href: "#work", label: "What we do" },
  { href: "#vision", label: "Where we are going" },
  { href: "#people", label: "People" },
  { href: "#brands", label: "Who we distribute" },
  { href: "#masthead", label: "The masthead" },
];

const FAILURES = [
  "Structural deterioration",
  "Water leakage",
  "Peeling paint",
  "Damaged tiles",
  "Failing screeds",
  "Concrete that gives up early",
];

const INITIATIVE_PHOTOS = [
  heroPhotos.mapei,
  companyPhotos.training,
  materialPhotos[2],
  solutionPhotos["structural-strengthening"],
  companyPhotos.supply,
];

const BRAND_HUBS = new Set(["mapei", "oriental-yuhong", "x-calibur", "bihui"]);

const masthead = [
  { label: "Registered name", value: siteConfig.legalName },
  {
    label: "Business licence",
    value: `No. ${siteConfig.registration.licenceNumber}, ${siteConfig.registration.issuer}`,
  },
  {
    label: "Address",
    value: `${siteConfig.address.street}, ${siteConfig.address.district}, ${siteConfig.address.city}, ${siteConfig.address.countryName}`,
  },
  { label: "Telephone", value: siteConfig.contact.phone },
  { label: "Email", value: siteConfig.contact.email },
];

/** A running head, the line at the top of a magazine page. */
function Kicker({
  number,
  as: Tag = "p",
  children,
}: {
  number: number;
  as?: "p" | "h2";
  children: string;
}) {
  return (
    <Tag className="label-sh flex items-center gap-4">
      <span className="font-display text-base">
        {String(number).padStart(2, "0")}
      </span>
      <span aria-hidden className="h-px w-12 bg-current" />
      {children}
    </Tag>
  );
}

/**
 * ABOUT, as one issue of a magazine (owner, 2026-11-06: "really magazine
 * style"): cover, contents, a feature, a photo essay, a run of spreads, the
 * numbers, the back page, and the masthead that names the company and its
 * director. The director is named for search engines as well as readers: see
 * the Person below and the employee on the Organization.
 */
export default function AboutPage() {
  const directorId = `${siteConfig.url}/about#director`;

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "AboutPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/about`,
            about: { "@id": `${siteConfig.url}/#organization` },
            mentions: { "@id": directorId },
          },
          {
            "@type": "Person",
            "@id": directorId,
            name: siteConfig.director.name,
            jobTitle: siteConfig.director.title,
            url: `${siteConfig.url}/about`,
            worksFor: { "@id": `${siteConfig.url}/#organization` },
          },
        ]}
      />

      {/* ---- Cover ------------------------------------------------------ */}
      <section className="bg-accent relative overflow-x-clip pt-24 pb-14 sm:pt-28 sm:pb-20">
        <Container>
          <Breadcrumb items={crumbs} />
          <div className="label-sh border-deep mt-6 flex flex-wrap justify-between gap-x-6 gap-y-1 border-b pb-3 leading-relaxed">
            <span>{siteConfig.tagline}</span>
            <span>
              {siteConfig.address.city}, {siteConfig.address.countryName}
            </span>
          </div>
          <p
            aria-hidden
            className="font-display mt-4 text-[clamp(3.6rem,22vw,22rem)] leading-[0.82] tracking-tight"
          >
            SAHIHI
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.618fr_1fr] lg:gap-14">
            <div className="relative">
              <figure>
                <div className="border-deep relative aspect-[4/3] overflow-hidden rounded-2xl border lg:aspect-[16/10]">
                  <Parallax drift={10} scale={1.12}>
                    <Image
                      src={heroPhotos.home.src}
                      alt={heroPhotos.home.alt}
                      fill
                      preload
                      sizes="(min-width: 64rem) 60vw, 100vw"
                      className="object-cover"
                    />
                  </Parallax>
                </div>
                <figcaption className="spec-sh mt-3">
                  Illustrative image.
                </figcaption>
              </figure>
              <ScrollSeal
                text={`${siteConfig.tagline} · Dar es Salaam · `}
                className="absolute -top-6 right-3 sm:-top-10 sm:right-6"
              />
            </div>

            <div>
              <h1 className="font-display text-phi-3 tracking-tight text-balance">
                Enhancing the life of buildings and structures.
              </h1>
              <nav aria-label="On this page" className="mt-8">
                <p className="label-sh">In this issue</p>
                <ol className="border-deep mt-3 border-t">
                  {CONTENTS.map((item, index) => (
                    <li key={item.href} className="border-deep border-b">
                      <a
                        href={item.href}
                        className="group flex min-h-11 items-center justify-between gap-4 py-2 font-semibold"
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          {item.label}
                        </span>
                        <span className="spec-sh">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- Feature: the problem ---------------------------------------- */}
      <section id="problem" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <Kicker number={1} as="h2">
            The problem
          </Kicker>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.618fr] lg:gap-16">
            <StruckList
              items={FAILURES}
              className="font-display border-deep/15 self-start border-t text-2xl leading-tight sm:text-3xl"
            />
            <div className="leading-relaxed lg:columns-2 lg:gap-10">
              <p className="text-phi-1 dropcap mb-6 font-light">
                {siteConfig.legalName} supplies construction chemicals to
                Tanzania&apos;s building industry from Dar es Salaam, as an
                authorized distributor of Mapei, Oriental Yuhong and X-Calibur.
              </p>
              <p className="mb-6">
                Over the past few decades the industry has met the same failures
                again and again: structural deterioration, water leakage,
                peeling paint, damaged tiles, failing screeds and concrete that
                gives up early.
              </p>
              <p>
                Our work is to bring proven systems here and make sure they are
                applied properly: waterproofing, flooring, structural
                strengthening and rehabilitation, sports surfaces, and
                construction chemicals for mining and underground work.
              </p>
            </div>
          </div>

          <Highlighter className="font-display text-phi-3 mt-20 leading-[1.15] tracking-tight sm:mt-28">
            Each of them shortens the life of a building, and each has a
            chemical answer that is already proven elsewhere.
          </Highlighter>
        </Container>
      </section>

      {/* ---- Photo essay -------------------------------------------------- */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-12 lg:grid-rows-2">
            <ClipPhoto
              photo={materialPhotos[0]}
              label={materialPhotos[0].label}
              sizes="(min-width: 64rem) 58vw, 100vw"
              className="col-span-2 aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto"
            />
            <ClipPhoto
              photo={materialPhotos[1]}
              label={materialPhotos[1].label}
              sizes="(min-width: 64rem) 25vw, 50vw"
              className="aspect-square lg:col-span-3"
            />
            <div className="bg-line col-span-1 flex items-end rounded-2xl p-4 sm:p-6 lg:col-span-2">
              <p className="font-display text-lg leading-tight sm:text-2xl">
                Close up, it is all chemistry.
              </p>
            </div>
            <ClipPhoto
              photo={materialPhotos[2]}
              label={materialPhotos[2].label}
              sizes="(min-width: 64rem) 17vw, 50vw"
              className="aspect-square lg:col-span-2"
            />
            <ClipPhoto
              photo={materialPhotos[3]}
              label={materialPhotos[3].label}
              sizes="(min-width: 64rem) 25vw, 50vw"
              className="aspect-square lg:col-span-3"
            />
          </div>
          <p className="spec-sh text-muted mt-3">Illustrative images.</p>
        </Container>
      </section>

      <BrandMarquee label="Our global partners" />

      {/* ---- What we do, as spreads --------------------------------------- */}
      <section id="work" className="bg-surface scroll-mt-20 py-16 lg:py-0">
        <div>
          <SpreadRun
            heading={
              <Kicker number={2} as="h2">
                What we do
              </Kicker>
            }
            spreads={solutions.map((solution) => ({
              slug: solution.slug,
              label: solution.label,
              lead: solution.lead,
              photo: solutionPhotos[solution.slug] ?? companyPhotos.supply,
            }))}
          />
        </div>
      </section>

      {/* ---- Vision and mission ------------------------------------------ */}
      <section
        id="vision"
        className="bg-line grain-sh relative scroll-mt-20 py-20 sm:py-28"
      >
        <Container className="relative z-10">
          <Kicker number={3}>Where we are going</Kicker>
          <div className="mt-12 grid gap-14 lg:grid-cols-2">
            <div className="border-deep border-t pt-6">
              <h2 className="label-sh">Vision</h2>
              <Reveal>
                <p className="font-display mt-6 text-2xl leading-snug sm:text-3xl">
                  {vision}
                </p>
              </Reveal>
            </div>
            <div className="border-deep border-t pt-6">
              <h2 className="label-sh">Mission</h2>
              <Reveal>
                <p className="font-display mt-6 text-2xl leading-snug sm:text-3xl">
                  {mission}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ---- People ------------------------------------------------------- */}
      <section id="people" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <Kicker number={4}>People</Kicker>
          <h2 className="font-display text-phi-3 mt-6 max-w-4xl tracking-tight text-balance">
            Products are half of it. People are the other half.
          </h2>
          <div className="mt-12">
            <FeatureRun
              features={initiatives.map((item, index) => ({
                title: item.title,
                body: item.body,
                photo: INITIATIVE_PHOTOS[index] ?? companyPhotos.training,
              }))}
            />
          </div>
        </Container>
      </section>

      {/* ---- By the numbers ---------------------------------------------- */}
      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            <CountUp value={brands.length} label="Brands" />
            <CountUp value={products.length} label="Construction chemicals" />
            <CountUp value={bihuiFamilies.length} label="Tools" />
            <CountUp value={projects.length} label="Projects" />
          </dl>
        </Container>
      </section>

      {/* ---- Brands ------------------------------------------------------- */}
      <section id="brands" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <Kicker number={5} as="h2">
            Who we distribute
          </Kicker>
          <ul className="border-deep mt-10 border-t">
            {brands.map((brand) => {
              const row = (
                <>
                  <span className="relative block h-10 w-36">
                    <Image
                      src={brand.logo.src}
                      alt={`${brand.name} logo`}
                      fill
                      sizes="9rem"
                      className="object-contain object-left"
                    />
                  </span>
                  <h3 className="font-display text-2xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                    {brand.name}
                  </h3>
                  <p className="text-muted leading-relaxed">{brand.blurb}</p>
                </>
              );
              const className =
                "group grid items-center gap-x-8 gap-y-3 py-6 transition-colors duration-500 sm:px-4 lg:grid-cols-[10rem_1fr_1.2fr]";
              return (
                <li key={brand.slug} className="border-deep/15 border-b">
                  {BRAND_HUBS.has(brand.slug) ? (
                    <Link
                      href={`/${brand.slug}`}
                      className={`${className} hover:bg-surface`}
                    >
                      {row}
                    </Link>
                  ) : (
                    <div className={className}>{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ---- Back page ---------------------------------------------------- */}
      <section className="bg-accent py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="font-display text-[clamp(2.6rem,9vw,8rem)] leading-[1] tracking-tight text-balance">
              {siteConfig.signoff}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---- Masthead: who the company is --------------------------------- */}
      <section id="masthead" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <Kicker number={6}>The masthead</Kicker>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.618fr] lg:gap-16">
            <div>
              <p className="label-sh text-muted">{siteConfig.director.title}</p>
              <h2 className="font-display text-phi-3 mt-3 tracking-tight">
                {siteConfig.director.name}
              </h2>
              <p className="text-muted mt-4 max-w-md leading-relaxed">
                {siteConfig.director.name} is a{" "}
                {siteConfig.director.title.toLowerCase()} of{" "}
                {siteConfig.legalName}.
              </p>
            </div>
            <dl className="border-deep self-start border-t">
              {masthead.map((fact) => (
                <div
                  key={fact.label}
                  className="border-deep/15 grid gap-x-8 gap-y-1 border-b py-4 sm:grid-cols-[11rem_1fr]"
                >
                  <dt className="label-sh text-muted leading-relaxed">
                    {fact.label}
                  </dt>
                  <dd className="leading-relaxed">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <CtaBand
        label="Work with us"
        heading="Resellers, applicators, engineers: start here."
        body="We are appointing resellers and applicators across Tanzania and running training and CPD sessions. Tell us who you are and where you work."
        topic="working with Sahihi as a reseller or applicator"
      />
    </main>
  );
}
