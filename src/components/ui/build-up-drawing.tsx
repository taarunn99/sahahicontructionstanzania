import { cn } from "@/lib/utils";

/**
 * The house illustration: an exploded build-up drawn as hairline isometric
 * layers (slab, primer, membrane, mesh, membrane, adhesive, tile). Pure
 * server-rendered SVG - no request, no JS, nothing to hydrate - so it can
 * sit in the first screen without touching LCP.
 *
 * It is ILLUSTRATIVE: a generic tiled wet-area build-up, not a
 * specification. The caption says so wherever it is used. This is also the
 * static fallback that the Three.js build-up (DESIGN-CONCEPT.md section 6)
 * will mount over on capable devices.
 */

const LAYERS = [
  { label: "Tile", t: 9, tone: "chalk" },
  { label: "Tile adhesive", t: 6, tone: "chalk" },
  { label: "Membrane, second coat", t: 4, tone: "accent" },
  { label: "Reinforcing mesh", t: 1.5, tone: "accent", mesh: true },
  { label: "Membrane, first coat", t: 4, tone: "accent" },
  { label: "Primer", t: 2, tone: "chalk" },
  { label: "Concrete slab", t: 22, tone: "chalk" },
] as const;

// Isometric rhombus: half-width W, half-height H, centred on CX.
const W = 150;
const H = 62;
const CX = 190;
const GAP = 30;
const TOP = 70;

const round = (n: number) => Math.round(n * 100) / 100;
const pts = (list: [number, number][]) =>
  list.map(([x, y]) => `${round(x)},${round(y)}`).join(" ");

export function BuildUpDrawing({
  className,
  tone = "dark",
}: {
  className?: string;
  /** "dark" draws in chalk for the dark footer-style grounds; "light"
   *  draws in Ink for Chalk and the pastel stages. */
  tone?: "dark" | "light";
}) {
  const ink = tone === "dark" ? "var(--chalk)" : "var(--deep)";
  // Dark tone (on the Green and Blue stages): the membrane layers are
  // stroked in Signal Yellow; the Blue accent would vanish on those grounds.
  // Light tone: every stroke is Ink, and the membrane layers are picked out
  // with a solid Chalk fill instead.
  const accent = tone === "dark" ? "var(--surface)" : "var(--deep)";
  const membraneFill = tone === "dark" ? "var(--surface)" : "var(--chalk)";
  const membraneOpacity = tone === "dark" ? 0.22 : 0.85;

  const drawn = LAYERS.reduce<{ y: number; layer: (typeof LAYERS)[number] }[]>(
    (acc, layer) => {
      const previous = acc[acc.length - 1];
      const y = previous ? previous.y + previous.layer.t + GAP : TOP;
      return [...acc, { y, layer }];
    },
    [],
  );
  const last = drawn[drawn.length - 1];
  const height = last.y + last.layer.t + H + 24;

  return (
    <svg
      viewBox={`0 0 560 ${round(height)}`}
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Exploded drawing of a tiled waterproofing build-up: concrete slab, primer, two membrane coats with a reinforcing mesh between them, tile adhesive and tile"
      fill="none"
      strokeWidth="1"
      strokeLinejoin="round"
    >
      {/* Vertical assembly axis */}
      <line
        x1={CX}
        y1={TOP - H - 22}
        x2={CX}
        y2={round(height - 8)}
        stroke={ink}
        strokeOpacity="0.28"
        strokeDasharray="2 5"
      />
      {drawn.map(({ y, layer }, index) => {
        const stroke = layer.tone === "accent" ? accent : ink;
        const top: [number, number][] = [
          [CX, y - H],
          [CX + W, y],
          [CX, y + H],
          [CX - W, y],
        ];
        const left: [number, number][] = [
          [CX - W, y],
          [CX, y + H],
          [CX, y + H + layer.t],
          [CX - W, y + layer.t],
        ];
        const right: [number, number][] = [
          [CX + W, y],
          [CX, y + H],
          [CX, y + H + layer.t],
          [CX + W, y + layer.t],
        ];
        return (
          <g key={layer.label} data-layer>
            <polygon
              points={pts(top)}
              stroke={stroke}
              fill={layer.tone === "accent" ? membraneFill : stroke}
              fillOpacity={layer.tone === "accent" ? membraneOpacity : 0.03}
            />
            <polygon points={pts(left)} stroke={stroke} />
            <polygon points={pts(right)} stroke={stroke} />
            {"mesh" in layer &&
              [0.2, 0.4, 0.6, 0.8].map((f) => (
                <g key={f} stroke={stroke} strokeOpacity="0.7">
                  <line
                    x1={round(CX - W + W * f)}
                    y1={round(y - H * f)}
                    x2={round(CX + W * f)}
                    y2={round(y + H - H * f)}
                  />
                  <line
                    x1={round(CX - W + W * f)}
                    y1={round(y + H * f)}
                    x2={round(CX + W * f)}
                    y2={round(y - H + H * f)}
                  />
                </g>
              ))}
            {/* Leader line + label, title-block style */}
            <g data-label>
              <line
                x1={CX + W}
                y1={round(y + layer.t / 2)}
                x2={CX + W + 34}
                y2={round(y + layer.t / 2)}
                stroke={ink}
                strokeOpacity="0.45"
              />
              <text
                x={CX + W + 42}
                y={round(y + layer.t / 2 - 3)}
                fill={ink}
                fillOpacity="0.75"
                fontFamily="var(--font-mono)"
                fontSize="10"
                letterSpacing="1"
              >
                {String(LAYERS.length - index).padStart(2, "0")}
              </text>
              <text
                x={CX + W + 42}
                y={round(y + layer.t / 2 + 12)}
                fill={ink}
                fontFamily="var(--font-sans-variable), sans-serif"
                fontSize="14"
              >
                {layer.label}
              </text>
            </g>
          </g>
        );
      })}
    </svg>
  );
}
