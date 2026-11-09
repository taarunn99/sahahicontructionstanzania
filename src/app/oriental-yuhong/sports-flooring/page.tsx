import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "@/components/sections/cta-band";
import { Faq } from "@/components/sections/faq";
import { SportsExplorer } from "@/components/sections/oyh/sports-explorer";
import { RelatedLinks } from "@/components/sections/related-links";
import { SportsCalculator } from "@/components/sections/oyh/sports-calculator";
import { SportsChooser } from "@/components/sections/oyh/sports-chooser";
import { SportsFilms } from "@/components/sections/oyh/sports-films";
import { Downloads } from "@/components/sections/vasa/decor-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { dryingTimes, sportsBoms, sportsVideos } from "@/config/oyh-sports";
import {
  EXTRA_DOWNLOADS,
  LEAD_TIME,
  SITE,
  SPORTS_ONE_LINERS,
  SPORTS_PATH,
  STAGES,
  STEPS,
  SYSTEMS,
} from "@/config/oyh-sports-systems";
import { siteConfig, whatsappLink } from "@/config/site";
import { faqJsonLd, type FaqItem } from "@/lib/faq";

/**
 * SPORTS FLOORING. Sources: OYH's "Sports Floor Product Manual" (EN, 19 pages,
 * assets/source/oyh-sports) and the earlier "Sports Flooring Products" deck. The
 * manual prints systems, layers with OYH product codes and construction stages,
 * and no test values, so none is shown. Each system's spread of the manual is a
 * download in public/tds/oriental-yuhong/sports, cut by page, never edited.
 * Held in Dar es Salaam (owner, 2026-11-09).
 * Second round (owner's "Nazrul" folder, 2026-11-09): OYH's sports brochure, the
 * Silicone PU and Elastic Acrylic construction guides, four system lists (used
 * for consumption and packs only, prices dropped) and three construction films.
 * Data in src/config/oyh-sports.ts.
 */

const TITLE = "Sports Flooring Tanzania - Tracks, Courts, Turf | OYH";
const DESCRIPTION =
  "Sports flooring in Tanzania from Sahihi and Oriental Yuhong: plastic running tracks, silicon PU sports courts, artificial turf and EPDM surfaces, in 3D.";
const PATH = SPORTS_PATH;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Oriental Yuhong", href: "/oriental-yuhong" },
  { label: "Sports flooring", href: PATH },
];

const faq: FaqItem[] = [
  {
    q: "Which sports flooring systems does Oriental Yuhong offer?",
    lead: "Three plastic running tracks, a silicon PU court, an acrylic court, artificial turf and an EPDM surface.",
    points: SYSTEMS.map((item) => `${item.name}: ${item.buildUp}`),
  },
  {
    q: "Which running track should I choose?",
    lead: "It depends on the budget, the drainage and how hard the track is used.",
    points: [
      "All plastic: elastic polyurethane throughout, anti nail shoe scratch",
      "Breathable: lower investment cost, heavy rain does not leave standing water",
      "Hybrid: polyurethane with EPDM particles, for cost performance",
    ],
  },
  {
    q: "What does the base need to be?",
    lead: "Asphalt or concrete, more than 28 days old.",
    points: [
      "Concrete of C25 strength, laid to a 0.5 to 0.7% fall so the court drains",
      "Under a 3 m straightedge, water less than 3 mm deep at 90% of the points",
      "Flatness: 5 mm or better per 3 m",
      "Pull-off strength: above 2 MPa",
      "On asphalt, the bottom layer is PSV-102 asphalt concrete base sealing adhesive",
    ],
  },
  {
    q: "Who makes Oriental Yuhong sports flooring?",
    lead: "Oriental Yuhong, the Chinese building materials group founded in 1995. Its sports flooring range dates from 2020.",
    points: [
      "Oriental Yuhong reports 1,500,000 m² of sports surfacing completed by 2025",
      "Its brochure lists ISO three-system, World Athletics, China Athletics Association and Ten Rings certification",
      "It also makes semi-prefabricated and prefabricated tracks and a prefabricated court: ask us about them",
    ],
  },
  {
    q: "Is sports flooring available in Tanzania?",
    lead: `Yes. Sahihi holds the running tracks and silicon PU courts in Dar es Salaam. Acrylic courts, EPDM and turf are ${LEAD_TIME}.`,
    points: [
      "Send the area, the sport and the base for a written quotation",
      "Prices are not published on this site",
    ],
  },
];

export default function SportsFlooringPage() {
  return (
    <main className="brand-oriental-yuhong theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}${PATH}`,
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: SYSTEMS.length,
              itemListElement: SYSTEMS.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: `Oriental Yuhong ${item.name}`,
                  description: item.buildUp,
                  brand: { "@type": "Brand", name: "Oriental Yuhong" },
                  image: `${siteConfig.url}${item.picture.src}`,
                },
              })),
            },
          },
          faqJsonLd(faq),
        ]}
      />

      <section className="bg-accent">
        <Container className="pt-28 pb-14 sm:pt-36 sm:pb-20">
          <Breadcrumb items={crumbs} />
          <p className="label-sh mt-10">Oriental Yuhong · Tanzania</p>
          <h1 className="font-display mt-5 text-[clamp(2rem,7.4vw,5.25rem)] leading-[1.02] uppercase">
            Sports flooring in Tanzania.
          </h1>
          <p className="text-phi-1 mt-7 max-w-3xl leading-snug font-light">
            Oriental Yuhong running tracks, sports courts and artificial turf
            from {siteConfig.brandName}. Tracks and silicon PU courts are held
            in Dar es Salaam; acrylic courts, EPDM and turf are {LEAD_TIME}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <FlowButton href={whatsappLink("OYH sports flooring")}>
              Request a quote
            </FlowButton>
            <FlowButton href="#materials">Work out the materials</FlowButton>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Seven systems</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Pick a system. Pull it apart.
          </h2>
          <div className="mt-8">
            <SportsExplorer systems={SYSTEMS} />
          </div>
        </Container>
      </section>

      <section className="bg-accent py-14 sm:py-20">
        <Container>
          <p className="label-sh">Which one where</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Tell us the place. See the fit.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Oriental Yuhong&apos;s own selection table, one place at a time.
          </p>
          <div className="mt-8 max-w-3xl">
            <SportsChooser />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <h2 className="font-display text-phi-3 tracking-tight">
            What each one is made of.
          </h2>
          <dl className="border-deep mt-8 border-t">
            {SYSTEMS.map((item) => (
              <div
                key={item.slug}
                id={`system-${item.slug}`}
                className="border-deep/20 grid scroll-mt-28 gap-2 border-b py-4 md:grid-cols-[17rem_1fr]"
              >
                <dt className="font-bold">
                  <Link href={`${PATH}/${item.slug}`} className="underline">
                    {item.name}
                  </Link>
                  {item.aka && (
                    <span className="text-muted block text-sm font-normal">
                      Also called {item.aka}
                    </span>
                  )}
                </dt>
                <dd className="leading-relaxed">
                  {item.buildUp}
                  <span className="text-muted mt-1 block text-sm">
                    {item.layers
                      .map((layer) => layer.note)
                      .filter((note) => note?.includes("PSV"))
                      .join(" · ")}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Oriental Yuhong&apos;s films</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Watch one go down, step by step.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            A track, a court and a turf pitch, from bare base to line marking.
            Jump to any step.
          </p>
          <div className="mt-8">
            <SportsFilms videos={sportsVideos} />
          </div>
        </Container>
      </section>

      <section className="bg-line py-14 sm:py-20">
        <Container>
          <p className="label-sh">From the manual</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            The construction stages.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {STAGES.map((stage) => (
              <div key={stage.title}>
                <h3 className="font-display text-xl">{stage.title}</h3>
                <ol className="mt-4 space-y-2">
                  {stage.steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-3 rounded-xl bg-white/10 p-3"
                    >
                      <span className="spec-sh">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-snug font-semibold">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="materials"
        className="bg-surface scroll-mt-28 py-14 sm:py-20"
      >
        <Container>
          <p className="label-sh text-muted">Materials</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            What your area takes.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed">
            Pick the system, the build-up and the base, enter the area. Every
            product, in kg and in packs.
          </p>
          <div className="mt-8">
            <SportsCalculator boms={sportsBoms} />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">From the construction guides</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Before the first coat.
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-xl">The site</h3>
              <ul className="mt-4 space-y-3 leading-relaxed">
                {SITE.map((item) => (
                  <li key={item} className="border-deep/15 border-l-4 pl-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              {Object.entries(dryingTimes).map(([system, rows]) => (
                <div key={system}>
                  <h3 className="font-display text-xl">{system}: drying</h3>
                  <table className="mt-4 w-full text-left text-sm">
                    <thead>
                      <tr className="border-deep border-b">
                        <th scope="col" className="py-2 font-bold">
                          Layer
                        </th>
                        <th scope="col" className="py-2 font-bold">
                          Surface dry
                        </th>
                        <th scope="col" className="py-2 font-bold">
                          Next coat
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map(([layer, dry, recoat]) => (
                        <tr key={layer} className="border-deep/15 border-b">
                          <th scope="row" className="py-2 font-semibold">
                            {layer}
                          </th>
                          <td className="spec-sh py-2">{dry}</td>
                          <td className="spec-sh py-2">{recoat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              <p className="text-muted text-sm">
                At 23°C and 50% relative humidity. Cooler or more humid days
                take longer.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">On site</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            How an EPDM granule surface goes down.
          </h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="border-deep/15 overflow-hidden rounded-2xl border bg-white"
              >
                <span className="relative block aspect-[3/2]">
                  <Image
                    src={step.picture.src}
                    alt={step.picture.alt}
                    fill
                    sizes="(min-width: 64rem) 32vw, (min-width: 40rem) 48vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <div className="p-5">
                  <p className="spec-sh text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-1 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="manual" className="bg-surface scroll-mt-28 py-14 sm:py-20">
        <Container>
          <p className="label-sh text-muted">Downloads</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight">
            The brochure, the guides, the manual.
          </h2>
          <Downloads
            items={[
              ...EXTRA_DOWNLOADS,
              ...SYSTEMS.flatMap((item) =>
                item.download
                  ? [
                      {
                        file: item.download.file,
                        label: `${item.name}, Oriental Yuhong`,
                        pages: item.download.pages,
                        note: item.download.size,
                      },
                    ]
                  : [],
              ),
            ]}
          />
          <p className="text-muted mt-5 max-w-3xl text-sm leading-relaxed">
            Oriental Yuhong&apos;s own documents, unaltered: the brochure, the
            two court construction guides, and each system&apos;s pages of the
            Sports Floor Product Manual. For the EPDM surface, ask us.
          </p>
        </Container>
      </section>

      <RelatedLinks
        label="One page per system"
        heading="Open a system."
        links={[
          ...SYSTEMS.map((item) => ({
            label: item.name,
            href: `${PATH}/${item.slug}`,
            sub: SPORTS_ONE_LINERS[item.slug],
            picture: item.picture.src,
          })),
          {
            label: "OYH products in East Africa",
            href: "/oriental-yuhong",
            sub: "Every Oriental Yuhong product",
          },
        ]}
      />

      <Faq items={faq} heading="Sports flooring, in short." />

      <CtaBand
        label="Sports flooring in Tanzania"
        heading="Send the area and the sport."
        body="Tell us the size, the sport and what the base is. You get a system recommendation and a written quotation from our Dar es Salaam office."
        topic="OYH sports flooring"
      />
    </main>
  );
}
