"use client";

import NumberFlow from "@number-flow/react";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { BrandButton } from "@/components/ui/brand-button";
import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { cn, pad } from "@/lib/utils";

/**
 * The lines dial - the home page's scroll-driven set piece, ported from the
 * gcbuae product wheel (DESIGN-HANDOFF.md 9.6).
 *
 * Desktop: the section pins and a dial of line names turns with the scroll,
 * one detent per line; the card changes to that line's solid stage, the
 * product count rolls and a very quiet detent tick plays. Clicking a name
 * glides (through Lenis) to its detent.
 *
 * Phones, tablets and reduced motion: no pin. A chip row selects the line.
 * Pins are a desktop pattern (handoff 9.4 law 10).
 *
 * All six cards are in the server HTML with their links; only the active
 * one is shown, the rest are `inert`.
 */

export type DialItem = {
  slug: string;
  /** Short name for the dial. */
  short: string;
  label: string;
  brand: string;
  blurb: string;
  count: number;
  /** A few product names from the line. */
  names: string[];
  href: string;
  /** Stage class for the card: bg-accent, bg-line or bg-surface. */
  stage: string;
};

const STEP_DEG = 14;
const RADIUS = 440;
const DESKTOP =
  "(min-width: 64rem) and (prefers-reduced-motion: no-preference)";

const emptySubscribe = () => () => {};

let audioContext: AudioContext | null = null;

/** A quiet, damped detent: closer to a haptic than a click. */
function playTick() {
  try {
    // The context is only created by a click or a key press (see the
    // effect below), so a visitor who only scrolls hears nothing and the
    // browser never logs an autoplay warning.
    if (audioContext?.state !== "running") return;
    const t = audioContext.currentTime;
    const tock = audioContext.createOscillator();
    const gain = audioContext.createGain();
    tock.type = "sine";
    tock.frequency.setValueAtTime(1050, t);
    tock.frequency.exponentialRampToValueAtTime(650, t + 0.018);
    gain.gain.setValueAtTime(0.018, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
    tock.connect(gain).connect(audioContext.destination);
    tock.start(t);
    tock.stop(t + 0.035);
  } catch {
    // No audio available: the dial works silently.
  }
}

export function LinesDial({
  items,
  copy = {
    catalogue: "The catalogue",
    products: "products",
    heading: "What is on the racks.",
    productsLabel: "Products",
    open: "Open the line",
  },
}: {
  items: DialItem[];
  copy?: {
    catalogue: string;
    products: string;
    heading: string;
    productsLabel: string;
    open: string;
  };
}) {
  const count = items.length;
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const indexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const active = items[activeIndex];

  const commitIndex = (index: number) => {
    if (indexRef.current === index) return;
    indexRef.current = index;
    playTick();
    setActiveIndex(index);
  };

  // Programmatic scrolls go through Lenis, never a raw window scroll: Lenis
  // keeps its own target and would yank a foreign scroll back next frame.
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);
  useEffect(() => {
    const unlock = () => {
      try {
        audioContext ??= new AudioContext();
        void audioContext.resume();
      } catch {
        // No audio available.
      }
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);
  const snapping = useRef(false);
  const guard = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const glideTo = (target: number, seconds: number) => {
    const activeLenis = lenisRef.current;
    if (!activeLenis) {
      window.scrollTo({ top: target, behavior: "smooth" });
      return;
    }
    snapping.current = true;
    clearTimeout(guard.current);
    activeLenis.scrollTo(target, {
      duration: seconds,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      onComplete: () => {
        snapping.current = false;
      },
    });
    // Lenis drops a programmatic scroll on user input without calling
    // onComplete: never leave the guard stuck.
    guard.current = setTimeout(
      () => {
        snapping.current = false;
      },
      seconds * 1000 + 150,
    );
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const apply = (position: number) => {
        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const distance = Math.abs(i - position);
          el.style.transform = `rotate(${(i - position) * STEP_DEG}deg) translateX(${RADIUS}px)`;
          el.style.opacity =
            distance > 2.2 ? "0" : String(Math.max(0, 1 - distance * 0.32));
          el.style.pointerEvents = distance > 2.2 ? "none" : "";
        });
      };

      const mm = gsap.matchMedia();
      mm.add(DESKTOP, () => {
        // ScrollTrigger's own snap waits for native scroll-end, which Lenis
        // delays: snap by hand once updates go quiet between detents.
        let snapTimer: ReturnType<typeof setTimeout> | undefined;
        const queueSnap = (st: ScrollTrigger) => {
          if (snapping.current) return;
          clearTimeout(snapTimer);
          snapTimer = setTimeout(() => {
            if (snapping.current) return;
            const position = st.progress * (count - 1);
            const nearest = Math.round(position);
            if (Math.abs(position - nearest) < 0.02) return;
            glideTo(
              st.start + (nearest / (count - 1)) * (st.end - st.start),
              0.6,
            );
          }, 200);
        };

        const st = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${(count - 1) * 45}%`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          fastScrollEnd: true,
          onUpdate: (self) => {
            const position = self.progress * (count - 1);
            apply(position);
            commitIndex(Math.round(position));
            queueSnap(self);
          },
        });
        triggerRef.current = st;
        apply(st.progress * (count - 1));

        return () => {
          clearTimeout(snapTimer);
          clearTimeout(guard.current);
          snapping.current = false;
          triggerRef.current = null;
          st.kill();
        };
      });
    },
    { scope: sectionRef },
  );

  /** Dial-name click (glides the scroll) or chip tap (just selects). */
  const select = (index: number) => {
    const st = triggerRef.current;
    if (st) {
      glideTo(st.start + (index / (count - 1)) * (st.end - st.start), 0.9);
    } else {
      commitIndex(index);
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Product lines"
      translate="no"
      className="notranslate bg-background relative flex flex-col justify-center overflow-hidden py-20 sm:py-28 lg:min-h-svh lg:py-24"
    >
      <Container>
        <p className="label-sh text-muted">
          {copy.catalogue} · {items.reduce((sum, item) => sum + item.count, 0)}{" "}
          {copy.products}
        </p>
        <h2 className="font-display text-phi-3 mt-5 tracking-tight">
          {copy.heading}
        </h2>
      </Container>

      <Container className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        {/* Dial: desktop only, turned by the scroll. The pivot sits off the
            left edge; the active name lies on the horizontal. */}
        {!reduced && (
          <div
            className="relative hidden h-[26rem] lg:block"
            role="listbox"
            aria-label="Product lines"
            aria-activedescendant={`dial-${active.slug}`}
          >
            <div className="absolute top-1/2 left-[-360px]">
              {items.map((item, index) => (
                <button
                  key={item.slug}
                  id={`dial-${item.slug}`}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  onClick={() => select(index)}
                  className={cn(
                    "font-display absolute top-0 left-0 origin-left text-2xl tracking-tight whitespace-nowrap transition-colors duration-500 xl:text-3xl",
                    index === activeIndex
                      ? "text-foreground"
                      : "text-foreground/40 hover:text-foreground/75",
                  )}
                  // The pose ships as an inline style for the server render
                  // only. Once mounted the prop is withdrawn, so a re-render
                  // can never overwrite the transforms the scroll code writes.
                  style={
                    mounted
                      ? undefined
                      : {
                          transform: `rotate(${index * STEP_DEG}deg) translateX(${RADIUS}px)`,
                          opacity: index > 2 ? 0 : 1 - index * 0.32,
                        }
                  }
                >
                  {index === activeIndex && (
                    <span
                      aria-hidden
                      className="bg-deep absolute top-1/2 -left-14 block h-px w-10"
                    />
                  )}
                  {item.short}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chip row: phones, tablets and reduced motion */}
        <div
          className={cn(
            "-mx-(--gutter) overflow-x-auto px-(--gutter)",
            !reduced && "lg:hidden",
          )}
        >
          <div className="flex w-max gap-2.5 pb-2">
            {items.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                aria-pressed={index === activeIndex}
                onClick={() => select(index)}
                className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm whitespace-nowrap"
              >
                {item.short}
              </button>
            ))}
          </div>
        </div>

        {/* The card. Every layer is mounted and in the HTML with its link;
            a grid stack lets the tallest one set the height, so changing
            line never moves the page. */}
        <div className="border-deep relative grid overflow-hidden rounded-lg border">
          {items.map((item, index) => {
            const on = index === activeIndex;
            return (
              <article
                key={item.slug}
                inert={!on}
                aria-hidden={!on}
                className={cn(
                  // Each layer carries its own stage class, so the text
                  // colour follows the stage (white on Blue and Green).
                  item.stage,
                  "relative col-start-1 row-start-1 flex flex-col p-7 transition-opacity duration-500 sm:p-10",
                  on ? "z-10 opacity-100" : "opacity-0",
                )}
              >
                <p className="spec-sh text-muted flex justify-between gap-4">
                  <span>
                    {pad(index + 1)} / {pad(count)}
                  </span>
                  <span>{item.brand}</span>
                </p>
                <p className="font-display mt-8 text-[clamp(3.24rem,9.36vw,6.12rem)] leading-[1.02]">
                  <NumberFlow value={on ? item.count : 0} />
                </p>
                <p className="label-sh text-muted mt-3">{copy.productsLabel}</p>
                <h3 className="font-display mt-8 text-2xl leading-tight sm:text-3xl">
                  {item.label}
                </h3>
                <p className="text-muted mt-4 max-w-lg leading-relaxed">
                  {item.blurb}
                </p>
                <p className="spec-sh mt-5 leading-relaxed">
                  {item.names.join(" · ")}
                </p>
                <div className="mt-9">
                  {/* Only the card on show gets the WebGL button: six hidden
                      ones would each open a graphics context. The others
                      keep a plain link, so every line is still in the HTML. */}
                  {on ? (
                    <BrandButton href={item.href} variant="solid">
                      {copy.open}
                    </BrandButton>
                  ) : (
                    <Link href={item.href}>{copy.open}</Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
