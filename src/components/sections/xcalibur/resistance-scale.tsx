"use client";

import { useId, useState } from "react";

import { grades, type Grade } from "@/config/x-calibur-antistatic";
import { cn } from "@/lib/utils";

/**
 * The resistance scale: what makes a floor conductive, dissipative or
 * neither, on X-Calibur's own numbers. A logarithmic axis from 10^4 to
 * 10^10 ohms with the two grades as solid bands; a probe the visitor slides
 * reads out the resistance and names the grade it falls in. The sheet's
 * two sentences and the base coat checks are in the HTML under it, so the
 * page says the same thing with no script. Nothing animates.
 */

const LOG_MIN = 4;
const LOG_MAX = 10;
const STEPS = 600; // one step per hundredth of a decade

const pct = (ohms: number) =>
  ((Math.log10(ohms) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * 100;

/** "2.3 x 10^5" as mantissa and exponent. */
function sci(ohms: number) {
  const exponent = Math.floor(Math.log10(ohms));
  const mantissa = ohms / 10 ** exponent;
  return { mantissa: mantissa.toFixed(1), exponent };
}

function Sci({ ohms }: { ohms: number }) {
  const { mantissa, exponent } = sci(ohms);
  return (
    <span className="tabular-nums">
      {mantissa} x 10<sup>{exponent}</sup>
    </span>
  );
}

function gradeAt(ohms: number): {
  grade: Grade | null;
  words: string;
} {
  for (const grade of grades) {
    if (ohms >= grade.min && ohms <= grade.max)
      return { grade, words: `inside the ${grade.name.toLowerCase()} (${grade.id})` };
  }
  if (ohms < grades[0].min)
    return { grade: null, words: "below the conductive grade's range" };
  if (ohms > grades[1].max)
    return { grade: null, words: "above the dissipative grade's range" };
  return {
    grade: null,
    words: "between the two grades: neither conductive nor dissipative by the sheet",
  };
}

export function ResistanceScale() {
  const id = useId();
  // Start in the middle of the conductive band.
  const [step, setStep] = useState(
    Math.round(
      ((Math.log10(Math.sqrt(grades[0].min * grades[0].max)) - LOG_MIN) /
        (LOG_MAX - LOG_MIN)) *
        STEPS,
    ),
  );
  const ohms = 10 ** (LOG_MIN + (step / STEPS) * (LOG_MAX - LOG_MIN));
  const at = gradeAt(ohms);
  const left = (step / STEPS) * 100;

  return (
    <div
      translate="no"
      className="notranslate border-deep grid overflow-hidden rounded-2xl border bg-white lg:grid-cols-[1.4fr_1fr]"
    >
      <div className="min-w-0 p-5 sm:p-7">
        <p className="spec-sh text-muted flex justify-between gap-4">
          <span>Resistance to ground, ohms, logarithmic</span>
          <span>Slide the probe</span>
        </p>

        {/* The axis: decades, the two bands, the probe. */}
        <div className="relative mt-10 h-28">
          <div
            aria-hidden
            className="bg-deep/10 absolute inset-x-0 top-12 h-3 rounded-full"
          />
          {grades.map((grade) => (
            <div
              key={grade.id}
              aria-hidden
              style={{
                left: `${pct(grade.min)}%`,
                width: `${pct(grade.max) - pct(grade.min)}%`,
              }}
              className={cn(
                "absolute top-10 h-7 rounded-md",
                grade.id === "CG" ? "bg-brand" : "bg-deep",
              )}
            >
              <span className="label-sh absolute -top-7 left-0 whitespace-nowrap text-xs">
                {grade.id}
              </span>
            </div>
          ))}
          {Array.from({ length: LOG_MAX - LOG_MIN + 1 }, (_, i) => {
            const exponent = LOG_MIN + i;
            return (
              <span
                key={exponent}
                aria-hidden
                style={{ left: `${(i / (LOG_MAX - LOG_MIN)) * 100}%` }}
                className="spec-sh text-muted absolute top-20 -translate-x-1/2 text-xs tabular-nums"
              >
                10<sup>{exponent}</sup>
              </span>
            );
          })}
          <span
            aria-hidden
            style={{ left: `${left}%` }}
            className="border-chalk bg-deep absolute top-[2.1rem] size-7 -translate-x-1/2 rounded-full border-4 shadow-md"
          />
          <input
            id={id}
            type="range"
            min={0}
            max={STEPS}
            step={1}
            value={step}
            onChange={(event) => setStep(event.target.valueAsNumber)}
            aria-label="Resistance to ground"
            aria-valuetext={`${sci(ohms).mantissa} times ten to the ${sci(ohms).exponent} ohms, ${at.words}`}
            className="absolute inset-x-0 top-6 h-11 w-full cursor-pointer opacity-0"
          />
        </div>

        <p className="mt-2 text-sm leading-relaxed">
          {grades.map((grade) => (
            <span key={grade.id} className="mr-4 inline-flex items-center gap-2">
              <span
                aria-hidden
                className={cn(
                  "inline-block size-3 rounded-sm",
                  grade.id === "CG" ? "bg-brand" : "bg-deep",
                )}
              />
              {grade.name}: {grade.range}
            </span>
          ))}
        </p>
      </div>

      <div
        aria-live="polite"
        className="bg-surface border-deep flex min-w-0 flex-col border-t p-5 sm:p-7 lg:border-t-0 lg:border-l"
      >
        <p className="label-sh text-muted">The probe reads</p>
        <p className="font-display mt-3 text-4xl leading-none sm:text-5xl">
          <Sci ohms={ohms} /> <span className="text-2xl">ohms</span>
        </p>
        <p className="mt-4 text-lg leading-snug font-semibold">
          {at.words.charAt(0).toUpperCase() + at.words.slice(1)}.
        </p>
        {at.grade ? (
          <p className="text-muted mt-3 text-sm leading-relaxed">
            Before the top coat goes on, the {at.grade.name.toLowerCase()} base
            coat should read {at.grade.baseCheck} to earth (method statement
            9.0). The finished floor is tested after 2 days to ASTM F150, one
            reading at least every 50 m².
          </p>
        ) : (
          <p className="text-muted mt-3 text-sm leading-relaxed">
            X-Tech AntiStatic SLE is supplied in two grades, conductive and
            dissipative; the ESD team specifies which the floor needs.
          </p>
        )}
        <dl className="border-deep/20 mt-auto border-t pt-5 text-sm">
          {grades.map((grade) => (
            <div key={grade.id} className="mb-3">
              <dt className="font-semibold">
                {grade.name} ({grade.id})
              </dt>
              <dd className="text-muted leading-relaxed">{grade.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
