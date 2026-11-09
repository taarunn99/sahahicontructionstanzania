"use client";

import { useRef, type PointerEvent } from "react";

/**
 * The 404's "0": the logo's own tick and sun (geometry from
 * public/brand/sahihi-mark.svg). The ring draws itself, the sun rises, the rays
 * turn, the tick drops in and keeps looking around, and the whole mark leans
 * towards the pointer. Reduced motion: the finished mark, still.
 */
export function LostMark() {
  const box = useRef<HTMLDivElement>(null);

  const lean = (event: PointerEvent<HTMLDivElement>) => {
    const el = box.current;
    if (!el || event.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (event.clientX - (r.left + r.width / 2)) / r.width;
    const y = (event.clientY - (r.top + r.height / 2)) / r.height;
    el.style.setProperty("--lean-x", `${(-y * 18).toFixed(1)}deg`);
    el.style.setProperty("--lean-y", `${(x * 18).toFixed(1)}deg`);
  };

  return (
    <div
      ref={box}
      onPointerMove={lean}
      onPointerLeave={() => {
        box.current?.style.setProperty("--lean-x", "0deg");
        box.current?.style.setProperty("--lean-y", "0deg");
      }}
      className="lost-mark inline-block [perspective:600px]"
    >
      <svg
        viewBox="4.723 6.281 47.176 47.176"
        className="lost-mark-svg block size-[0.9em] overflow-visible"
        role="img"
        aria-label="The Sahihi tick, still looking"
      >
        <g className="lost-rays">
          <path
            fill="#fdf70b"
            d="M 28.31 6.78 L 24.48 10.61 L 32.14 10.61 Z M 28.31 52.96 L 24.75 49.4 L 31.87 49.4 Z M 5.22 29.87 L 8.09 27 L 8.09 32.73 Z M 51.4 29.87 L 46.88 25.35 L 46.88 34.39 Z"
          />
        </g>
        <path
          className="lost-ring"
          pathLength={1}
          fill="none"
          strokeWidth="2.63"
          stroke="#0c6b14"
          d="M 95.96 203.79 C 95.96 224.22 79.39 240.78 58.96 240.78 C 38.53 240.78 21.96 224.22 21.96 203.79 C 21.96 183.36 38.53 166.8 58.96 166.8 C 79.39 166.8 95.96 183.36 95.96 203.79 Z"
          transform="matrix(0.464373, 0, 0, 0.464373, 0.105033, -64.629695)"
        />
        <path
          className="lost-sun"
          fill="#fdf70b"
          d="M 42.26 30 C 42.26 38.16 35.64 44.78 27.48 44.78 C 19.32 44.78 12.71 38.16 12.71 30 C 12.71 21.85 19.32 15.23 27.48 15.23 C 35.64 15.23 42.26 21.85 42.26 30 Z"
        />
        <g className="lost-tick">
          <path
            fill="#ffffff"
            strokeWidth="7.126"
            strokeLinejoin="round"
            stroke="#ffffff"
            d="M 100 165.88 L 59.25 197.84 L 38.76 185.99 L 58.8 218.05 Z"
            transform="matrix(0.464373, 0, 0, 0.464373, 0.105033, -64.629695)"
          />
          <path
            fill="#0c6b14"
            d="M 46.54 12.4 L 27.62 27.24 L 18.11 21.74 L 27.41 36.62 Z"
          />
        </g>
      </svg>
    </div>
  );
}
