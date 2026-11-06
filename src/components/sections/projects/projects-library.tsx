"use client";

import NumberFlow from "@number-flow/react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import type { Project, ProjectProduct } from "@/config/projects";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE } from "@/lib/motion";
import { cn, pad } from "@/lib/utils";

/**
 * The projects library. Every project is in the server HTML; the filters
 * only decide which cards are shown.
 *
 * Two ways in, both input-driven:
 *  - by product line (chips), and
 *  - by product: the ranking on the left is a set of buttons, each bar drawn
 *    to the number of projects that product went to. Pick one and the grid
 *    reshuffles to the sites that used it, with that product picked out on
 *    every card.
 */

type Filter =
  | { kind: "all" }
  | { kind: "line"; slug: string; label: string }
  | { kind: "product"; name: string };

const STAGES = ["bg-accent", "bg-surface", "bg-line"] as const;

export function ProjectsLibrary({
  projects,
  lines,
  ranking,
}: {
  projects: Project[];
  lines: { slug: string; label: string; count: number }[];
  ranking: (ProjectProduct & { count: number })[];
}) {
  const [filter, setFilter] = useState<Filter>({ kind: "all" });
  const reduced = useReducedMotion();

  const matches = (product: ProjectProduct) =>
    filter.kind === "line"
      ? product.line === filter.slug
      : filter.kind === "product"
        ? product.name === filter.name
        : false;
  const shown = projects
    .map((project, index) => ({ project, number: index + 1 }))
    .filter(
      ({ project }) => filter.kind === "all" || project.products.some(matches),
    );
  const most = ranking[0]?.count ?? 1;

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] lg:gap-14">
      {/* ---- Filters ------------------------------------------------------ */}
      <div
        translate="no"
        className="notranslate lg:sticky lg:top-28 lg:self-start"
      >
        <p className="font-display text-[clamp(3.24rem,8.64vw,5.04rem)] leading-[1.02]">
          <NumberFlow value={shown.length} />
        </p>
        <p
          className="label-sh text-muted mt-3 leading-relaxed"
          aria-live="polite"
        >
          {shown.length === 1 ? "Project" : "Projects"}
          {filter.kind === "line" && ` · ${filter.label}`}
          {filter.kind === "product" && ` · ${filter.name}`}
        </p>

        <fieldset className="mt-9">
          <legend className="label-sh text-muted">By line</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              aria-pressed={filter.kind === "all"}
              onClick={() => setFilter({ kind: "all" })}
              className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-4 text-sm"
            >
              All
            </button>
            {lines.map((line) => (
              <button
                key={line.slug}
                type="button"
                aria-pressed={
                  filter.kind === "line" && filter.slug === line.slug
                }
                onClick={() =>
                  setFilter({
                    kind: "line",
                    slug: line.slug,
                    label: line.label,
                  })
                }
                className="chip-sh border-deep inline-flex min-h-11 items-center gap-2.5 rounded-full border px-4 text-left text-sm"
              >
                {line.label}
                <span className="spec-sh">{line.count}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-9">
          <legend className="label-sh text-muted">
            By product, most supplied
          </legend>
          <ol className="border-deep mt-3 border-t">
            {ranking.slice(0, 8).map((product) => {
              const on =
                filter.kind === "product" && filter.name === product.name;
              return (
                <li key={product.name} className="border-deep/15 border-b">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      setFilter(
                        on
                          ? { kind: "all" }
                          : { kind: "product", name: product.name },
                      )
                    }
                    className="group relative flex min-h-11 w-full items-center justify-between gap-4 px-2 text-left"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-y-1 left-0 w-full origin-left rounded-sm transition-colors duration-300",
                        on ? "bg-deep" : "bg-surface",
                      )}
                      style={{ transform: `scaleX(${product.count / most})` }}
                    />
                    <span
                      className={cn(
                        "relative transition-colors duration-300",
                        on && "text-chalk",
                      )}
                    >
                      {product.name}
                    </span>
                    <span className="spec-sh relative">{product.count}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </fieldset>
      </div>

      {/* ---- The grid ----------------------------------------------------- */}
      <ul className="grid content-start gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map(({ project, number }) => (
            <motion.li
              key={project.name}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE.out }}
              className={cn(
                STAGES[(number - 1) % STAGES.length],
                "border-deep flex flex-col rounded-lg border p-6 sm:p-7",
              )}
            >
              <p className="spec-sh text-muted flex justify-between gap-4">
                <span>{pad(number)}</span>
                <span>{project.ongoing ? "Ongoing" : "Supplied"}</span>
              </p>
              <h3 className="font-display mt-6 text-2xl leading-[1.05] text-balance sm:text-3xl">
                {project.name}
              </h3>
              {project.client && (
                <p className="text-muted mt-2">{project.client}</p>
              )}
              <ul className="mt-7 flex flex-wrap gap-1.5">
                {project.products.map((product) => {
                  const className = cn(
                    "border-deep inline-flex min-h-9 items-center rounded-full border px-3 text-sm transition-colors duration-300",
                    matches(product)
                      ? "bg-deep text-chalk"
                      : "bg-chalk/60 hover:bg-chalk",
                  );
                  return (
                    <li key={product.name}>
                      {product.href ? (
                        <Link href={product.href} className={className}>
                          {product.name}
                        </Link>
                      ) : (
                        <span className={className}>{product.name}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
