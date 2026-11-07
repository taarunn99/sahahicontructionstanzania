"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

/**
 * The range ranked by dry density, lightest to heaviest. Each bar grows as it
 * scrolls into view. Every row is a link and every figure is in the HTML.
 */
export function DensityLadder({
  rows,
}: {
  rows: { name: string; href: string; density: number; type: string }[];
}) {
  const reduce = useReducedMotion();
  const heaviest = Math.max(...rows.map((row) => row.density));
  return (
    <ol className="border-deep border-t" translate="no">
      {rows.map((row) => (
        <li key={row.href} className="border-deep/20 border-b">
          <Link
            href={row.href}
            className="group grid min-h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-2 py-4 lg:grid-cols-[17rem_minmax(0,1fr)_7rem]"
          >
            <span className="font-display text-lg leading-tight">
              <span className="u-line">{row.name}</span>
            </span>
            <span className="spec-sh text-right lg:order-last">
              {row.density} kg/m3
            </span>
            <span className="bg-deep/10 col-span-2 block h-3 overflow-hidden rounded-full lg:col-span-1">
              <motion.span
                className="bg-brand block h-full origin-left rounded-full"
                style={{ width: `${(row.density / heaviest) * 100}%` }}
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
