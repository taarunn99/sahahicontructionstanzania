"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";

/**
 * A card that leans a few degrees toward the pointer, like a sheet held up
 * to the light. Fine pointers only (phones get the static card), transform
 * only, and nothing under reduced motion. The server renders the card
 * exactly where it stands; this adds the lean on hover and nothing else.
 */
export function TiltCard({
  children,
  className,
  max = 6,
}: {
  children: React.ReactNode;
  className?: string;
  /** Largest lean, in degrees. */
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const lean = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    el.style.transform = `perspective(1200px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
  };

  const rest = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={lean}
      onPointerLeave={rest}
      className={cn(
        "transition-transform duration-500 ease-out will-change-transform",
        className,
      )}
    >
      {children}
    </div>
  );
}
