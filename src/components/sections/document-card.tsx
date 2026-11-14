import Image from "next/image";

import { TiltCard } from "@/components/motion/tilt-card";
import { ViewOnlyGuard } from "@/components/sections/view-only-guard";
import { cn } from "@/lib/utils";

/**
 * A document shown as issued: the paper in a white card with a little
 * lean toward the pointer, a turning ring of text behind one corner, and
 * a caption saying who issued it. Used for the X-Calibur certificate on
 * the hub and for the papers on /about. Server component; the lean is the
 * one client island (fine pointers only, nothing under reduced motion).
 * Colours come from the parent: the ring takes `ringClassName`.
 *
 * `viewOnly` (owner, 2026-11-14, for the business licence): the picture
 * cannot be dragged or right-click saved, a transparent layer sits over
 * it so the browser's menu never targets the image, and a faint "view
 * only" mark is laid over it in CSS (the file itself is untouched).
 */

export function RingOfText({
  text,
  id,
  className,
}: {
  text: string;
  /** Unique per ring on the page: the textPath needs its own path id. */
  id: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      className={cn(
        "absolute -top-10 -right-6 size-36 animate-[spin_48s_linear_infinite] motion-reduce:animate-none sm:-top-12 sm:-right-10 sm:size-44",
        className,
      )}
    >
      <defs>
        <path
          id={id}
          d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
        />
      </defs>
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 5"
      />
      <text
        fill="currentColor"
        className="font-display"
        fontSize="17"
        fontWeight="800"
        letterSpacing="3.2"
      >
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  );
}

export function DocumentCard({
  image,
  caption,
  ring,
  ringId,
  ringClassName,
  className,
  viewOnly = false,
  sizes = "(min-width: 64rem) 40vw, (min-width: 40rem) 28rem, 100vw",
}: {
  image: { src: string; width: number; height: number; alt: string };
  caption: string;
  ring: string;
  ringId: string;
  ringClassName?: string;
  className?: string;
  viewOnly?: boolean;
  sizes?: string;
}) {
  const picture = (
    <div className="relative">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        draggable={!viewOnly}
        className={cn("h-auto w-full rounded-sm", viewOnly && "select-none")}
      />
      {viewOnly && (
        <div
          aria-hidden
          className="absolute inset-0 flex flex-col items-center justify-around overflow-hidden rounded-sm select-none"
        >
          {[0, 1, 2].map((row) => (
            <span
              key={row}
              className="font-display text-deep/15 -rotate-[24deg] text-2xl font-extrabold tracking-[0.3em] whitespace-nowrap uppercase sm:text-3xl"
            >
              View only · sahihicc.com
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={cn("relative", className)}>
      <RingOfText text={ring} id={ringId} className={ringClassName} />
      <TiltCard className="relative">
        <figure className="rotate-[-1.5deg] rounded-md bg-white p-3 shadow-[0_30px_60px_-20px_rgba(12,42,54,0.55)] transition-transform duration-700 hover:rotate-0 sm:p-4">
          {viewOnly ? <ViewOnlyGuard>{picture}</ViewOnlyGuard> : picture}
          <figcaption className="spec-sh text-muted mt-3 px-1 pb-1 leading-relaxed">
            {caption}
          </figcaption>
        </figure>
      </TiltCard>
    </div>
  );
}
