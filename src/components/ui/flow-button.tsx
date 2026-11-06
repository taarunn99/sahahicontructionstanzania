import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * FLOW BUTTON - the site's main call to action (owner, 2026-11-06, from a
 * component he supplied). An outlined pill; on hover or keyboard focus a
 * disc grows from its centre and fills it, the label slides across, the
 * arrow on the right leaves and a second arrow arrives from the left, and
 * the pill's corners tighten.
 *
 * Colours are not set here. The outline, the label and the disc take the
 * text colour of whatever stage the button sits on (--foreground), and
 * the label on the filled state takes --flow-on (see globals.css): Ink
 * outline filling Ink with white text on light grounds; white outline
 * filling white with Ink text on the Blue and Green stages; and the same
 * again in each brand's palette on brand pages.
 *
 * Renders a real <a> for a route or a URL (crawlable, opens in a new tab
 * when it leaves the site) and a <button> otherwise. No JavaScript: the
 * whole effect is CSS, transform and opacity apart from the two arrows.
 */

const SIZES = {
  sm: "min-h-10 px-7 text-xs",
  md: "min-h-12 px-9 text-sm",
  lg: "min-h-14 px-11 text-sm sm:text-base",
} as const;

export type FlowButtonProps = {
  children: ReactNode;
  href?: string;
  size?: keyof typeof SIZES;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  /** Passed to the anchor, e.g. a file name for a download. */
  download?: string;
};

export function FlowButton({
  children,
  href,
  size = "md",
  type = "button",
  onClick,
  disabled,
  className,
  download,
}: FlowButtonProps) {
  const classes = cn(
    "flow-button group relative inline-flex max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1.5px] font-semibold transition-[border-radius,color,border-color,scale] duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-xl focus-visible:rounded-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-60",
    SIZES[size],
    className,
  );

  const content = (
    <>
      {/* The arrow that arrives from the left */}
      <ArrowRight
        aria-hidden
        className="absolute left-[-25%] z-[2] size-4 transition-[left] duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-focus-visible:left-4"
      />
      <span className="relative z-[1] -translate-x-2.5 text-center transition-transform duration-[800ms] ease-out group-hover:translate-x-2.5 group-focus-visible:translate-x-2.5">
        {children}
      </span>
      {/* The disc that fills the pill */}
      <span
        aria-hidden
        className="flow-fill absolute top-1/2 left-1/2 aspect-square w-[135%] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full opacity-0 transition-[scale,opacity] duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
      />
      {/* The arrow that leaves to the right */}
      <ArrowRight
        aria-hidden
        className="absolute right-4 z-[2] size-4 transition-[right] duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-focus-visible:right-[-25%]"
      />
    </>
  );

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return external || download ? (
      <a
        href={href}
        className={classes}
        download={download}
        {...(href.startsWith("http") && !download
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
