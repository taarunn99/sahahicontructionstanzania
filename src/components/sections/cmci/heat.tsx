import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { FireBeam } from "@/components/three-d/fire-beam";
import { cn } from "@/lib/utils";

/**
 * The heat: a dark stage with a glow that breathes and embers that rise, in CSS
 * only, so it runs on the first paint without a script. Stopped by reduced
 * motion in globals.css. Positions are fixed so the markup never changes.
 */
const EMBERS = [
  [4, 0.2, 5.2, 3],
  [11, 1.4, 6.4, 4],
  [18, 3.1, 4.6, 2],
  [25, 0.8, 7.1, 5],
  [33, 2.2, 5.5, 3],
  [41, 4.1, 6.2, 2],
  [48, 1.1, 4.9, 4],
  [56, 3.4, 6.8, 3],
  [63, 0.5, 5.3, 5],
  [71, 2.7, 7.4, 2],
  [79, 1.8, 4.7, 3],
  [86, 3.8, 6.1, 4],
  [93, 0.9, 5.8, 2],
  [97, 2.4, 6.6, 3],
] as const;

export function Embers() {
  return (
    <span aria-hidden className="ember-field">
      {EMBERS.map(([left, delay, duration, size]) => (
        <span
          key={left}
          className="ember"
          style={{
            left: `${left}%`,
            width: size,
            height: size,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </span>
  );
}

/** A heat stage holding the beam: used on the hub, products and product pages. */
export function HeatBand({
  label,
  heading,
  children,
  className,
}: {
  label: string;
  heading: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("heat-stage on-dark py-14 sm:py-20", className)}>
      <Embers />
      <Container className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-14">
        <div className="min-w-0">
          <p className="label-sh text-white/85">{label}</p>
          <h2 className="font-display text-phi-3 mt-4 leading-[1.05] text-balance text-white">
            {heading}
          </h2>
          <div className="mt-5 text-white/90">{children}</div>
        </div>
        <FireBeam />
      </Container>
    </section>
  );
}
