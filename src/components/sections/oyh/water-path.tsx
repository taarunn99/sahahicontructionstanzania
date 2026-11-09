/**
 * Follow the water: OYH's own comparison from its HDPE brochure, drawn in house.
 * Bonded, the drop stops at the membrane. Unbonded, it runs along the gap to a
 * leak. CSS only, and stopped by reduced motion in globals.css.
 */
function Panel({
  title,
  line,
  bonded,
}: {
  title: string;
  line: string;
  bonded: boolean;
}) {
  return (
    <figure className="border-deep/20 overflow-hidden rounded-2xl border bg-white text-[#0c2a36]">
      <svg
        viewBox="0 0 420 220"
        role="img"
        aria-label={line}
        className="w-full"
      >
        <rect width="420" height="110" fill="#b6b9b7" />
        <text x="16" y="28" fontSize="14" fontWeight="700" fill="#0c2a36">
          Structural concrete
        </text>
        {!bonded && <rect y="110" width="420" height="12" fill="#ffffff" />}
        <rect
          y={bonded ? 110 : 122}
          width="420"
          height="10"
          fill="#f0efe9"
          stroke="#7a2e45"
          strokeWidth="1.5"
        />
        <text x="16" y={bonded ? 156 : 168} fontSize="13" fill="#0c2a36">
          Membrane
        </text>
        <rect y={bonded ? 170 : 182} width="420" height="60" fill="#8a7a68" />
        <circle
          className="water-drop water-drop-up"
          cx="120"
          cy="200"
          r="6"
          fill="#0078a8"
        />
        {!bonded && (
          <>
            <circle
              className="water-drop water-drop-run"
              cx="120"
              cy="116"
              r="5"
              fill="#0078a8"
            />
            <path
              d="M330 116 V60"
              stroke="#0078a8"
              strokeWidth="4"
              strokeDasharray="6 6"
              className="water-leak"
            />
            <rect x="110" y="122" width="22" height="10" fill="#0078a8" />
            <text x="250" y="52" fontSize="13" fontWeight="700" fill="#b5161c">
              Leak appears here
            </text>
          </>
        )}
      </svg>
      <figcaption className="p-5">
        <span className="font-display block text-xl">{title}</span>
        <span className="mt-1 block leading-relaxed">{line}</span>
      </figcaption>
    </figure>
  );
}

export function WaterPath() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Panel
        bonded
        title="Pre-applied"
        line="The membrane is bonded to the post-cast structural concrete. There is no gap for water to travel along."
      />
      <Panel
        bonded={false}
        title="Post-applied"
        line="Where the waterproof layer is damaged, water channels between the membrane and the concrete, and comes through somewhere else."
      />
    </div>
  );
}
