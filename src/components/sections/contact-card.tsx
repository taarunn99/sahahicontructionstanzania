"use client";

import { useEffect, useRef } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

import { Container } from "@/components/ui/container";
import { siteConfig, whatsappLink } from "@/config/site";

/**
 * The home page's contact card (owner, 2026-11-06, after a reference he
 * supplied): one rounded card, an eyebrow, a two-line headline with its
 * second line in the accent colour and a square full stop, the email
 * address as one large underlined link, and pill buttons. Beside it a
 * huge disc rises out of the card's edge. In Sahihi's colours that disc is
 * the logo's yellow sun on the Blue stage.
 *
 * The sun and its ring lean a few pixels towards the cursor, and a small
 * ring follows it inside the card. Mouse only, transform only, one
 * animation frame per move; nothing happens on touch or under reduced
 * motion. The text never overlaps the sun: on phones the sun rises from
 * the bottom edge under the buttons, on wide screens it sits to the right.
 *
 * The headline answers the scroll (owner, 2026-11-06): each line starts
 * faint and fills with the logo's blue from left to right as the card
 * comes up the screen, the first line then the second; once both are full
 * the fill becomes a gradient of the logo's colours (blue, yellow, green)
 * that keeps flowing across the letters. The card is the dark Ink ground
 * for this, because that is the ground all three logo colours read on
 * (5.7:1 or better). Without JavaScript, and under reduced motion, the
 * headline is simply fully filled.
 *
 * It is the last section of the page, so it stays opaque, full-width and
 * in normal flow (the fixed footer reveal depends on that).
 */

const MAIL_SUBJECT = "Enquiry from sahihicc.com";

function MailIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
      <path d="m3 6 7 5 7-5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
      <path d="M9 8.5c.2 2.9 2.6 5.8 6 6.5l1-1.800-2.200-1-.9.9c-1.100-.5-1.900-1.400-2.400-2.400l.9-.9-1-2.300Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 3.5h3l1.300 3.500-1.800 1.200a9 9 0 0 0 5.300 5.300l1.200-1.800 3.500 1.300v3a1.500 1.500 0 0 1-1.500 1.500A12.500 12.500 0 0 1 2.500 5 1.500 1.500 0 0 1 4 3.500Z" />
    </svg>
  );
}

const PILL =
  "inline-flex min-h-12 items-center gap-2.5 rounded-full px-6 font-medium transition-transform duration-300 hover:-translate-y-0.5";

export function ContactCard({
  copy = {
    eyebrow: "Contact",
    lineOne: "Let's build",
    lineTwo: "together.",
    email: "Email us",
    whatsapp: "WhatsApp us",
  },
  whatsappHref,
}: {
  copy?: {
    eyebrow: string;
    lineOne: string;
    lineTwo: string;
    email: string;
    whatsapp: string;
  };
  /** Replaces the English WhatsApp opener (Swahili pages). */
  whatsappHref?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The headline fill: scrubbed to the scroll, then handed to CSS.
  useGSAP(
    () => {
      const heading = headingRef.current;
      if (!heading) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lines = gsap.utils.toArray<HTMLElement>("[data-fill]", heading);
        const set = (progress: number) => {
          lines.forEach((line, index) => {
            const share = Math.min(
              1,
              Math.max(0, progress * lines.length - index),
            );
            line.style.setProperty("--p", share.toFixed(3));
          });
          heading.dataset.flow = progress >= 0.999 ? "true" : "false";
        };
        set(0);
        const trigger = ScrollTrigger.create({
          trigger: heading,
          start: "top 88%",
          end: "top 42%",
          scrub: 0.4,
          onUpdate: (self) => set(self.progress),
          onRefresh: (self) => set(self.progress),
        });
        return () => {
          trigger.kill();
          lines.forEach((line) => line.style.removeProperty("--p"));
          heading.dataset.flow = "true";
        };
      });
    },
    { scope: cardRef },
  );

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!fine.matches) return;

    let frame = 0;
    let point = { x: 0, y: 0, inside: false };
    const apply = () => {
      frame = 0;
      const box = card.getBoundingClientRect();
      const mx = ((point.x - box.left) / box.width) * 2 - 1;
      const my = ((point.y - box.top) / box.height) * 2 - 1;
      card.style.setProperty("--mx", mx.toFixed(3));
      card.style.setProperty("--my", my.toFixed(3));
      card.style.setProperty("--px", `${(point.x - box.left).toFixed(0)}px`);
      card.style.setProperty("--py", `${(point.y - box.top).toFixed(0)}px`);
      card.dataset.pointer = point.inside ? "in" : "out";
    };
    const onMove = (event: PointerEvent) => {
      point = { x: event.clientX, y: event.clientY, inside: true };
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      point = { ...point, inside: false };
      card.style.setProperty("--mx", "0");
      card.style.setProperty("--my", "0");
      card.dataset.pointer = "out";
    };
    card.addEventListener("pointermove", onMove);
    card.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(MAIL_SUBJECT)}`;

  return (
    <section className="bg-background py-16 sm:py-24">
      <Container>
        <div
          ref={cardRef}
          data-pointer="out"
          className="contact-card bg-deep text-chalk relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
        >
          {/* The sun and its ring. Decorative. */}
          <div aria-hidden className="contact-card-sun">
            <span className="contact-card-ring" />
            <span className="contact-card-disc bg-surface" />
          </div>
          {/* The small ring that follows the cursor */}
          <span aria-hidden className="contact-card-dot" />

          <div className="relative z-10 px-7 pt-12 pb-52 sm:px-12 sm:pt-16 sm:pb-64 lg:max-w-[58%] lg:px-20 lg:py-24">
            <p className="label-sh">{copy.eyebrow}</p>
            <h2
              ref={headingRef}
              data-flow="true"
              className="contact-card-heading font-display mt-7 text-[clamp(2.6rem,9.5vw,5.75rem)] leading-[1.02]"
            >
              <span data-fill className="block">
                {copy.lineOne}
              </span>
              <span data-fill className="block">
                {copy.lineTwo}
              </span>
            </h2>
            <p className="mt-9">
              <a
                href={mailto}
                className="decoration-surface text-[clamp(1.25rem,4.4vw,2rem)] font-medium break-all underline decoration-[3px] underline-offset-[0.35em] transition-opacity hover:opacity-80"
              >
                {siteConfig.contact.email}
              </a>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={mailto} className={`${PILL} bg-chalk`}>
                <MailIcon />
                {copy.email}
              </a>
              <a
                href={whatsappHref ?? whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`${PILL} bg-accent`}
              >
                <WhatsAppIcon />
                {copy.whatsapp}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className={`${PILL} border-chalk border`}
              >
                <PhoneIcon />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
