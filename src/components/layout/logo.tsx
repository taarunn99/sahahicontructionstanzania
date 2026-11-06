/**
 * The Sahihi lockup (tick mark + SAHIHI + "CONSTRUCTION CHEMICALS LIMITED").
 * Paths are copied byte-for-byte from the owner's business card by
 * scripts/extract-brand-svgs.py into /public/brand/sahihi-sprite.svg and
 * referenced with <use>, so the 20 KB of outlines is one cached file rather
 * than inline HTML on every page.
 *
 * The mark and wordmark keep their brand colours on every ground. Only the
 * small descriptor line is `currentColor`, so it reads on both the light
 * ground and dark stages.
 */
const RATIO = { logo: 3.5576, mark: 1 } as const;

export function Logo({
  className,
  variant = "logo",
  title,
}: {
  className?: string;
  variant?: keyof typeof RATIO;
  /** Set when the logo is the only content of a link or heading. */
  title?: string;
}) {
  return (
    <svg
      className={className}
      style={{ aspectRatio: RATIO[variant] }}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <use href={`/brand/sahihi-sprite.svg#${variant}`} />
    </svg>
  );
}
