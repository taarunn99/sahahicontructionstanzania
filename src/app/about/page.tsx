import type { Metadata } from "next";
import Image from "next/image";

import { BrandMarquee } from "@/components/layout/brand-marquee";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { brands } from "@/config/brands";
import { initiatives, mission, vision } from "@/config/company";
import { companyPhotos } from "@/config/images";
import { siteConfig } from "@/config/site";
import { pad } from "@/lib/utils";

// /about is the brand-query landing page: the title leads with the exact
// entity name (handoff 12.7).
const TITLE = "Sahihi Construction Chemicals Limited - Dar es Salaam";
const DESCRIPTION =
  "Sahihi Construction Chemicals Limited is a Dar es Salaam company distributing Mapei, Oriental Yuhong and X-Calibur, and training Tanzania's applicators.";

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

const facts = [
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

export default function AboutPage() {
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
          },
        ]}
      />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Container>
          <Breadcrumb items={crumbs} />
          <h1 className="font-display text-phi-4 mt-8 max-w-5xl tracking-tight text-balance">
            Enhancing the life of buildings and structures.
          </h1>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.618fr_1fr]">
            <div className="max-w-[68ch] space-y-6 leading-relaxed">
              <p className="text-phi-1 dropcap font-light">
                {siteConfig.legalName} supplies construction chemicals to
                Tanzania&apos;s building industry from Dar es Salaam, as an
                authorized distributor of Mapei, Oriental Yuhong and X-Calibur.
              </p>
              <p>
                Over the past few decades the industry has met the same failures
                again and again: structural deterioration, water leakage,
                peeling paint, damaged tiles, failing screeds and concrete that
                gives up early. Each of them shortens the life of a building,
                and each has a chemical answer that is already proven elsewhere.
              </p>
              <p>
                Our work is to bring those systems here and make sure they are
                applied properly: waterproofing, flooring, structural
                strengthening and rehabilitation, sports surfaces, and
                construction chemicals for mining and underground work.
              </p>
            </div>
            <dl className="border-deep self-start border-t">
              {facts.map((fact) => (
                <div key={fact.label} className="border-deep/15 border-b py-4">
                  <dt className="label-sh text-muted">{fact.label}</dt>
                  <dd className="mt-2 leading-relaxed">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="mt-14">
            <div className="border-deep relative aspect-[4/3] overflow-hidden rounded-lg border sm:aspect-[21/9]">
              <Image
                src={companyPhotos.supply.src}
                alt={companyPhotos.supply.alt}
                fill
                sizes="(min-width: 90rem) 86rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="spec-sh text-muted mt-3">
              Illustrative image, not our premises.
            </figcaption>
          </figure>
        </Container>
      </section>

      <BrandMarquee label="Our global partners" />

      {/* Vision and mission on a Mint stage */}
      <section className="bg-line text-foreground grain-sh relative py-20 sm:py-28">
        <Container className="relative z-10 grid gap-14 lg:grid-cols-2">
          <div>
            <p className="label-sh text-muted">Vision</p>
            <p className="font-display mt-6 text-xl leading-snug sm:text-2xl">
              {vision}
            </p>
          </div>
          <div>
            <p className="label-sh text-muted">Mission</p>
            <p className="font-display mt-6 text-xl leading-snug sm:text-2xl">
              {mission}
            </p>
          </div>
        </Container>
      </section>

      {/* Initiatives */}
      <section className="py-20 sm:py-28">
        <Container>
          <p className="label-sh text-muted">Key initiatives</p>
          <h2 className="font-display text-phi-3 mt-5 max-w-4xl tracking-tight text-balance">
            Products are half of it. People are the other half.
          </h2>
          <figure className="mt-12">
            <div className="border-deep relative aspect-[4/3] overflow-hidden rounded-lg border sm:aspect-[21/9]">
              <Image
                src={companyPhotos.training.src}
                alt={companyPhotos.training.alt}
                fill
                sizes="(min-width: 90rem) 86rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="spec-sh text-muted mt-3">
              Illustrative image.
            </figcaption>
          </figure>
          <ol className="border-deep mt-12 grid border-t md:grid-cols-2">
            {initiatives.map((item, index) => (
              <li
                key={item.title}
                className="border-deep/15 border-b py-8 md:px-8 md:odd:border-r md:odd:pl-0"
              >
                <span className="spec-sh text-muted">{pad(index + 1)}</span>
                <h3 className="font-display mt-3 text-xl">{item.title}</h3>
                <p className="text-muted mt-3 max-w-xl leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* The company's word. No named people on the site (owner, 2026-11-06). */}
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <p className="label-sh text-muted">Our word</p>
          <p className="font-display mt-6 max-w-4xl text-2xl leading-snug sm:text-3xl">
            {siteConfig.signoff}
          </p>
        </Container>
      </section>

      {/* Brands, stated plainly for entity clarity */}
      <section className="py-20 sm:py-28">
        <Container>
          <p className="label-sh text-muted">Brands</p>
          <h2 className="font-display text-phi-3 mt-5 tracking-tight">
            Who we distribute.
          </h2>
          <ul className="border-deep mt-12 border-t">
            {brands.map((brand) => (
              <li
                key={brand.slug}
                className="border-deep/15 grid gap-x-8 gap-y-2 border-b py-6 sm:grid-cols-[1fr_1fr_1.618fr]"
              >
                <h3 className="font-display text-xl">{brand.name}</h3>
                <p className="label-sh text-muted self-center leading-relaxed">
                  {brand.authorization}
                  {brand.origin && ` · ${brand.origin}`}
                </p>
                <p className="text-muted leading-relaxed">{brand.blurb}</p>
              </li>
            ))}
          </ul>
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
