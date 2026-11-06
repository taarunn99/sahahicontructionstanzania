"use client";

import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { Photo } from "@/config/images";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { EASE } from "@/lib/motion";
import { cn, pad } from "@/lib/utils";

/**
 * The moving parts of the About page, laid out as a magazine issue. GSAP and
 * Motion only (AGENTS.md: patterns are rebuilt on these, no new runtimes), and
 * all the text is in the server HTML. Under reduced motion, or without
 * JavaScript, each one simply shows its finished state, except the highlight
 * and the strike lines, which stay undrawn because they only decorate.
 */

/** A round seal whose text turns with the scroll. Still at the top of the page. */
export function ScrollSeal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const seal = ref.current?.querySelector("svg");
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            // One full turn every 500 px of scroll (owner: faster).
            gsap.set(seal ?? [], { rotation: self.scroll() * 0.72 });
          },
        });
      });
    },
    { scope: ref },
  );
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "bg-surface border-deep flex size-28 items-center justify-center rounded-full border sm:size-36",
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="size-full p-1.5">
        <defs>
          <path
            id="seal-circle"
            d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0"
          />
        </defs>
        <text className="fill-deep text-[9.4px] font-semibold tracking-[0.13em] uppercase">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
    </div>
  );
}

/** A marker pen runs through the sentence, line by line, as it is scrolled. */
export function Highlighter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to("span", {
          backgroundSize: "100% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: true,
          },
        });
      });
    },
    { scope: ref },
  );
  return (
    <p ref={ref} className={className}>
      <span
        style={{
          backgroundImage: "linear-gradient(var(--surface), var(--surface))",
          backgroundRepeat: "no-repeat",
          backgroundSize: "0% 100%",
        }}
      >
        {children}
      </span>
    </p>
  );
}

/** A list of failures, crossed out one after another with the scroll. */
export function StruckList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  useGSAP(
    () => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-strike]",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            stagger: 0.5,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 70%",
              end: "bottom 40%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: ref },
  );
  return (
    <ul ref={ref} className={className}>
      {items.map((item) => (
        <li key={item} className="border-deep/15 border-b py-3">
          <span className="relative inline-block">
            {item}
            <span
              data-strike
              aria-hidden
              className="bg-accent absolute inset-x-0 top-1/2 h-[0.14em] origin-left scale-x-0 -rotate-1"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** A photograph that opens from its centre, then drifts inside its frame. */
export function ClipPhoto({
  photo,
  label,
  sizes,
  className,
}: {
  photo: Photo;
  label?: string;
  sizes: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.figure
      className={cn("relative overflow-hidden rounded-2xl", className)}
      initial={
        reduced ? false : { clipPath: "inset(14% 14% 14% 14% round 2rem)" }
      }
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1rem)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.1, ease: EASE.out }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
      />
      {label && (
        <figcaption className="bg-chalk text-deep label-sh absolute bottom-3 left-3 rounded-full px-3 py-1.5">
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}

/** A count that runs up when it comes into view. */
export function CountUp({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });
  return (
    <div
      ref={ref}
      translate="no"
      className="notranslate flex flex-col-reverse justify-end"
    >
      <dt className="label-sh mt-3 leading-relaxed">{label}</dt>
      <dd className="font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-none">
        <span className="sr-only">{value}</span>
        <span aria-hidden>
          <NumberFlow value={seen ? value : 0} />
        </span>
      </dd>
    </div>
  );
}

export type Spread = {
  slug: string;
  label: string;
  lead: string;
  photo: Photo;
};

/**
 * What we do, as a run of spreads. On a laptop the section pins and the
 * vertical scroll moves the pages sideways; on a phone (or under reduced
 * motion) it is an ordinary row you swipe, and nothing is pinned.
 */
export function SpreadRun({
  spreads,
  heading,
}: {
  spreads: Spread[];
  heading: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      gsap
        .matchMedia()
        .add(
          "(min-width: 64rem) and (min-height: 40rem) and (prefers-reduced-motion: no-preference)",
          () => {
            const list = track.current;
            const scroller = list?.parentElement;
            if (!list || !scroller) return;
            gsap.set(scroller, { overflow: "visible" });
            const distance = () =>
              Math.max(0, list.scrollWidth - scroller.clientWidth);
            gsap.to(list, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: () => `+=${distance()}`,
                pin: true,
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            });
            return () => gsap.set(scroller, { clearProps: "overflow" });
          },
        );
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="overflow-x-clip lg:flex lg:min-h-svh lg:flex-col lg:justify-center"
    >
      <div className="container-sh mb-8 lg:mb-6 lg:w-full">{heading}</div>
      <div
        tabIndex={0}
        role="region"
        aria-label="What we do"
        className="container-sh [scrollbar-width:none] overflow-x-auto lg:w-full"
      >
        <ul ref={track} className="flex w-max gap-5 pb-2 will-change-transform">
          {spreads.map((spread, index) => (
            <li
              key={spread.slug}
              className="bg-chalk border-deep grid w-[84vw] max-w-[62rem] overflow-hidden rounded-2xl border sm:w-[70vw] lg:h-[64svh] lg:w-[64vw] lg:grid-cols-[1.4fr_1fr]"
            >
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={spread.photo.src}
                  alt={spread.photo.alt}
                  fill
                  sizes="(min-width: 64rem) 38vw, 84vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
                <span className="font-display text-accent text-5xl sm:text-7xl">
                  {pad(index + 1)}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-balance sm:text-3xl">
                    {spread.label}
                  </h3>
                  <p className="text-muted mt-3 leading-relaxed">
                    {spread.lead}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export type Feature = { title: string; body: string; photo: Photo };

/**
 * Initiatives: on a laptop a photograph holds still on the left and changes as
 * each article passes the middle of the screen. On a phone each article has
 * its photograph above it.
 */
export function FeatureRun({ features }: { features: Feature[] }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const photo = features[active]?.photo;

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div className="relative hidden lg:sticky lg:top-28 lg:block lg:h-[calc(100svh-9rem)] lg:self-start">
        <div className="border-deep relative h-full overflow-hidden rounded-2xl border">
          <AnimatePresence initial={false}>
            {photo && (
              <motion.div
                key={photo.src}
                className="absolute inset-0"
                initial={reduced ? false : { opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.8, ease: EASE.out }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="spec-sh text-muted mt-2">Illustrative image.</p>
      </div>

      <ol>
        {features.map((feature, index) => (
          <motion.li
            key={feature.title}
            onViewportEnter={() => setActive(index)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
            className="border-deep/15 flex flex-col justify-center border-b py-8 lg:min-h-[62svh]"
          >
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl lg:hidden">
              <Image
                src={feature.photo.src}
                alt={feature.photo.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <span className="font-display text-accent text-5xl lg:text-7xl">
              {pad(index + 1)}
            </span>
            <h3 className="font-display text-phi-2 mt-4 leading-[1.05] text-balance">
              {feature.title}
            </h3>
            <p className="text-muted mt-4 max-w-xl leading-relaxed">
              {feature.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
