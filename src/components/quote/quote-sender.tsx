"use client";

import { useId, useState } from "react";

import { QuoteList } from "@/components/quote/quote-list";
import { siteConfig } from "@/config/site";
import {
  quoteCount,
  quoteMailHref,
  quoteMessage,
  quoteWhatsAppHref,
  useQuote,
  type QuoteDetails,
} from "@/lib/quote";
import { cn } from "@/lib/utils";

/**
 * The send step on /quote: the list, a few lines about the job and the
 * sender, and the message written out so they see exactly what goes.
 * Three ways out (owner, 2026-11-14): WhatsApp, email, copy. Nothing is
 * posted to the site; every button hands the text to the visitor's own
 * app. The fields are optional and stay in the browser.
 */

const FIELD =
  "border-deep bg-background w-full rounded-none border-b py-2.5 text-base outline-none focus:border-b-2";

function Field({
  label,
  value,
  onChange,
  textarea = false,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="label-sh text-muted leading-relaxed">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={2}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(FIELD, "resize-y")}
        />
      ) : (
        <input
          id={id}
          type="text"
          autoComplete={autoComplete}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={FIELD}
        />
      )}
    </div>
  );
}

export function QuoteSender({
  layout = "wide",
}: {
  /** "rail": one narrow column (the yellow rail on /quote); the message
   * preview folds away under "See the message". */
  layout?: "wide" | "rail";
}) {
  const items = useQuote();
  const [details, setDetails] = useState<QuoteDetails>({
    name: "",
    company: "",
    phone: "",
    town: "",
    job: "",
    extra: "",
  });
  const [copied, setCopied] = useState<"idle" | "done" | "failed">("idle");
  const set = (patch: Partial<QuoteDetails>) =>
    setDetails((current) => ({ ...current, ...patch }));

  const message = quoteMessage(items, details);
  const count = items.length;
  const packs = quoteCount(items);
  const ready = count > 0 || details.extra.trim().length > 0;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied("done");
    } catch {
      setCopied("failed");
    }
    window.setTimeout(() => setCopied("idle"), 2500);
  };

  const rail = layout === "rail";
  const actions = (
    <>
      <a
        href={quoteWhatsAppHref(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!ready}
        className={cn(
          "hover:bg-deep inline-flex min-h-12 items-center justify-center rounded-full bg-(--pop-red) px-6 text-center font-semibold text-white transition-colors",
          !ready && "pointer-events-none opacity-40",
        )}
      >
        Send it on WhatsApp&ensp;&rarr;
      </a>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <a
          href={quoteMailHref(message, count)}
          aria-disabled={!ready}
          className={cn(
            "border-deep chip-sh inline-flex min-h-12 items-center justify-center rounded-full border px-4 text-center text-sm font-semibold",
            !ready && "pointer-events-none opacity-40",
          )}
        >
          Send by email
        </a>
        <button
          type="button"
          onClick={copy}
          disabled={!ready}
          className="border-deep chip-sh inline-flex min-h-12 items-center justify-center rounded-full border px-4 text-center text-sm font-semibold disabled:opacity-40"
        >
          {copied === "done"
            ? "Copied"
            : copied === "failed"
              ? "Select and copy"
              : "Copy the text"}
        </button>
      </div>
      <p className="text-muted mt-3 text-center text-xs leading-relaxed">
        Prices come back in the reply, for your job and quantities. Nothing is
        sent until you press a button.
      </p>
    </>
  );

  if (rail) {
    return (
      <div translate="no" className="notranslate">
        <h2 className="font-display text-2xl leading-tight">
          Your list
          {count > 0 && (
            <span className="ml-3 text-base font-normal">
              {count} product{count === 1 ? "" : "s"}, {packs} pack
              {packs === 1 ? "" : "s"}
            </span>
          )}
        </h2>
        <QuoteList items={items} compact className="mt-4" />
        <div className="mt-7 grid gap-5">
          <Field
            label="Something not on the list"
            value={details.extra}
            onChange={(extra) => set({ extra })}
            textarea
          />
          <Field
            label="The job (what, where, how big)"
            value={details.job}
            onChange={(job) => set({ job })}
            textarea
          />
          <Field
            label="Delivery town or site"
            value={details.town}
            onChange={(town) => set({ town })}
            autoComplete="address-level2"
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="Your name"
              value={details.name}
              onChange={(name) => set({ name })}
              autoComplete="name"
            />
            <Field
              label="Phone"
              value={details.phone}
              onChange={(phone) => set({ phone })}
              autoComplete="tel"
            />
          </div>
          <Field
            label="Company"
            value={details.company}
            onChange={(company) => set({ company })}
            autoComplete="organization"
          />
        </div>
        <div className="mt-7 flex flex-col">{actions}</div>
        <details className="border-deep/20 mt-5 border-t pt-3">
          <summary className="label-sh cursor-pointer py-2">
            See the message
          </summary>
          <pre
            aria-live="polite"
            className="bg-deep text-chalk mt-2 max-h-72 overflow-auto rounded-xl px-4 py-3 font-sans text-sm leading-relaxed whitespace-pre-wrap"
          >
            {message}
          </pre>
        </details>
      </div>
    );
  }

  return (
    <div
      translate="no"
      className="notranslate grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14"
    >
      <div>
        <h3 className="font-display text-2xl">
          Your list
          {count > 0 && (
            <span className="text-muted ml-3 text-base font-normal">
              {count} product{count === 1 ? "" : "s"}, {packs} pack
              {packs === 1 ? "" : "s"}
            </span>
          )}
        </h3>
        <QuoteList items={items} className="mt-5" />

        <div className="mt-10 grid gap-7 sm:grid-cols-2">
          <Field
            label="Something not on the list"
            value={details.extra}
            onChange={(extra) => set({ extra })}
            textarea
          />
          <Field
            label="The job (what, where, how big)"
            value={details.job}
            onChange={(job) => set({ job })}
            textarea
          />
          <Field
            label="Delivery town or site"
            value={details.town}
            onChange={(town) => set({ town })}
            autoComplete="address-level2"
          />
          <Field
            label="Your name"
            value={details.name}
            onChange={(name) => set({ name })}
            autoComplete="name"
          />
          <Field
            label="Company"
            value={details.company}
            onChange={(company) => set({ company })}
            autoComplete="organization"
          />
          <Field
            label="Phone, for the reply"
            value={details.phone}
            onChange={(phone) => set({ phone })}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="border-deep bg-chalk flex h-fit flex-col rounded-2xl border p-5 sm:p-7 lg:sticky lg:top-24">
        <p className="spec-sh text-muted flex justify-between gap-4">
          <span>{siteConfig.brandName}</span>
          <span>{siteConfig.contact.phone}</span>
        </p>
        <pre
          aria-live="polite"
          className="bg-deep text-chalk mt-5 mb-5 max-h-80 overflow-auto rounded-2xl rounded-br-md px-4 py-3 font-sans text-sm leading-relaxed whitespace-pre-wrap"
        >
          {message}
        </pre>
        {actions}
      </div>
    </div>
  );
}
