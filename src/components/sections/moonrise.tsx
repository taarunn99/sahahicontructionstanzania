"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

import { Container } from "@/components/ui/container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { gsap, useGSAP } from "@/lib/gsap";
import scene from "@/config/kilimanjaro.json";

const SUMMIT_M = 5895; // Uhuru Peak, Kilimanjaro
const HIDDEN = 80; // moon offset (% of its own height) that puts it behind the mountain

/**
 * The close of the contact page (owner, 2026-11-09): the owner's photograph of
 * the full moon on Kilimanjaro, split into layers by scripts/build-kilimanjaro.py.
 * Scrolling raises the moon from behind the mountain onto the summit while an
 * altitude count climbs to 5,895 m; the moon can be pulled down by mouse or
 * finger and springs back. The moon sits in a layer clipped to the sky, so it
 * really goes behind the ridge. Reduced motion: the finished picture, still.
 */
export function Moonrise() {
  const reduced = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const rise = useRef<HTMLDivElement>(null);
  const pull = useRef<HTMLButtonElement>(null);
  const night = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const drag = useRef<{ start: number; height: number } | null>(null);
  const moved = useRef(false);

  useGSAP(
    () => {
      if (reduced || !root.current) return;
      const state = { m: 0 };
      const timeline = gsap.timeline({
        defaults: { ease: "none", duration: 1 },
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          end: "center 55%",
          scrub: 0.6,
        },
      });
      timeline
        .fromTo(rise.current, { yPercent: HIDDEN }, { yPercent: 0 }, 0)
        .fromTo(night.current, { opacity: 0.5 }, { opacity: 0 }, 0)
        .fromTo(glow.current, { opacity: 0 }, { opacity: 1 }, 0.35)
        .fromTo(
          state,
          { m: 0 },
          {
            m: SUMMIT_M,
            onUpdate: () => {
              if (count.current)
                count.current.textContent = Math.round(state.m).toLocaleString(
                  "en-GB",
                );
            },
          },
          0,
        );
    },
    { scope: root, dependencies: [reduced] },
  );

  const onDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (reduced || !root.current) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    gsap.killTweensOf(pull.current);
    moved.current = false;
    drag.current = {
      start: event.clientY - Number(gsap.getProperty(pull.current, "y")),
      height: root.current.getBoundingClientRect().height,
    };
  };
  const onMove = (event: PointerEvent<HTMLButtonElement>) => {
    const d = drag.current;
    if (!d) return;
    const raw = event.clientY - d.start;
    if (Math.abs(raw) > 4) moved.current = true;
    // Down freely to behind the mountain; up only a little, with resistance.
    const y = raw < 0 ? raw * 0.15 : Math.min(raw, d.height * 0.32);
    gsap.set(pull.current, { y });
  };
  const onUp = () => {
    if (!drag.current) return;
    drag.current = null;
    gsap.to(pull.current, {
      y: 0,
      duration: 1.6,
      ease: "elastic.out(1, 0.4)",
    });
  };
  // Keyboard and a plain tap: the moon sinks and rises again.
  const onClick = () => {
    if (reduced || moved.current) {
      moved.current = false;
      return;
    }
    gsap
      .timeline()
      .to(pull.current, {
        y: () => (root.current?.offsetHeight ?? 400) * 0.3,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(pull.current, { y: 0, duration: 1.6, ease: "elastic.out(1, 0.4)" });
  };

  const { moon, summit, sky } = scene;

  return (
    <section className="bg-deep text-chalk py-20 sm:py-28" translate="no">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="label-sh opacity-80">Tanzania · Kilimanjaro</p>
            <h2 className="font-display text-phi-3 mt-5 tracking-tight text-balance">
              Built to last a lifetime.
            </h2>
            <p className="mt-5 leading-relaxed opacity-85">
              The mountain has stood over Tanzania longer than anyone has
              counted. Build with the same idea in mind.
            </p>
          </div>
          <p
            className="spec-sh tabular-nums"
            aria-label={`Altitude ${SUMMIT_M.toLocaleString("en-GB")} metres`}
          >
            <span className="block text-sm opacity-70">Altitude</span>
            <span className="font-display text-4xl sm:text-5xl">
              <span ref={count}>
                {reduced ? SUMMIT_M.toLocaleString("en-GB") : "0"}
              </span>{" "}
              m
            </span>
          </p>
        </div>

        <div
          ref={root}
          className="relative mt-10 aspect-[1080/742] w-full overflow-hidden rounded-3xl select-none"
        >
          <Image
            src="/images/contact/kilimanjaro-base.webp"
            alt="Kilimanjaro's snow-capped summit above acacia trees in the evening light"
            fill
            unoptimized
            sizes="(min-width: 80rem) 1216px, 100vw"
            className="object-cover"
          />

          {/* The sky only: the moon is hidden wherever the mountain is. */}
          <div className="absolute inset-0" style={{ clipPath: sky }}>
            <div
              ref={rise}
              className="absolute"
              style={{
                left: `${moon.left}%`,
                top: `${moon.top}%`,
                width: `${moon.width}%`,
                aspectRatio: "1",
              }}
            >
              <button
                ref={pull}
                type="button"
                onPointerDown={onDown}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onUp}
                onClick={onClick}
                aria-label="The full moon: pull it down or press to watch it rise again"
                className="block size-full cursor-grab touch-none rounded-full outline-none focus-visible:ring-4 focus-visible:ring-white/60 active:cursor-grabbing"
              >
                <Image
                  src="/images/contact/kilimanjaro-moon.webp"
                  alt="The full moon"
                  width={moon.pixels}
                  height={moon.pixels}
                  unoptimized
                  draggable={false}
                  className="size-full"
                />
              </button>
            </div>
          </div>

          {/* Moonlight on the snow as the moon arrives */}
          <div
            ref={glow}
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-screen"
            style={{
              opacity: reduced ? 1 : 0,
              background: `radial-gradient(28% 22% at ${summit.x}% ${summit.y}%, rgba(255,190,120,0.35), transparent 70%)`,
            }}
          />
          {/* Dusk before the moon is up */}
          <div
            ref={night}
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-black"
            style={{ opacity: reduced ? 0 : 0.5 }}
          />
        </div>

        <p className="mt-4 text-sm opacity-70">
          Pull the moon down. It always comes back.
        </p>
      </Container>
    </section>
  );
}
