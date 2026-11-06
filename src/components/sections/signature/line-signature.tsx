import { SplitHeading } from "@/components/motion/split-heading";
import { BuildUpDrawing } from "@/components/ui/build-up-drawing";
import { Container } from "@/components/ui/container";
import type { LineSlug } from "@/config/catalogue";
import {
  buildUpData,
  defectData,
  gaugeData,
  notchData,
  pourData,
} from "@/config/mapei-signature";

import { BuildUpExplorer } from "./build-up-explorer";
import { DefectMap } from "./defect-map";
import { LevelPour } from "./level-pour";
import { NotchCoverage } from "./notch-coverage";
import { ThicknessGauge } from "./thickness-gauge";

/**
 * One signature element per Mapei line (DESIGN-CONCEPT.md section 6): a
 * hands-on instrument taken from the way that product is actually sold.
 * Server component: it builds the element's data from the catalogue and the
 * coverage models and hands it to the client island as props.
 *
 * The heading and the sentence under it are the only copy here. SEO copy
 * never lives inside the element itself.
 */

const COPY: Partial<
  Record<LineSlug, { name: string; heading: string; body: string }>
> = {
  "tile-adhesives-grouts": {
    name: "Notch and coverage",
    heading: "Bigger tile, deeper notch, more bags.",
    body: "Pick the tile size and set the floor area. The trowel changes, and so does what the floor consumes.",
  },
  "primers-levelling": {
    name: "The pour",
    heading: "Pour it to the millimetre.",
    body: "Drag the surface of the compound up or down. Every millimetre has a weight, and the bags follow.",
  },
  "concrete-repair": {
    name: "Defect map",
    heading: "Diagnose first.",
    body: "Five conditions on one concrete frame. Pick the one on your site and the repair draws itself in.",
  },
  "resin-flooring": {
    name: "Thickness gauge",
    heading: "A resin floor is a thickness.",
    body: "Slide from a roll coat to six millimetres. The section redraws to scale and the system changes with it.",
  },
  waterproofing: {
    name: "The build-up",
    heading: "What goes on top of what.",
    body: "Turn it, pull the layers apart and pick one to see what we stock for it.",
  },
};

function Element({ slug }: { slug: LineSlug }) {
  switch (slug) {
    case "tile-adhesives-grouts":
      return <NotchCoverage data={notchData()} />;
    case "primers-levelling":
      return <LevelPour data={pourData()} />;
    case "concrete-repair":
      return <DefectMap defects={defectData()} />;
    case "resin-flooring":
      return <ThicknessGauge stops={gaugeData()} />;
    case "waterproofing":
      return (
        <BuildUpExplorer layers={buildUpData()}>
          <BuildUpDrawing tone="light" />
        </BuildUpExplorer>
      );
    default:
      return null;
  }
}

export function LineSignature({
  slug,
  override,
}: {
  slug: LineSlug;
  /** Swahili pages pass their own words; the tool itself stays in English. */
  override?: { label: string; heading: string; body: string };
}) {
  const english = COPY[slug];
  if (!english) return null;
  const copy = {
    label: override?.label ?? `Hands on · ${english.name}`,
    heading: override?.heading ?? english.heading,
    body: override?.body ?? english.body,
  };
  return (
    <section className="border-deep border-b py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.618fr_1fr] lg:items-end">
          <div>
            <p className="label-sh text-muted">{copy.label}</p>
            <SplitHeading
              as="h2"
              className="font-display text-phi-3 mt-5 tracking-tight text-balance"
            >
              {copy.heading}
            </SplitHeading>
          </div>
          <p className="text-muted leading-relaxed">{copy.body}</p>
        </div>
        <div className="mt-10 sm:mt-12">
          <Element slug={slug} />
        </div>
      </Container>
    </section>
  );
}
