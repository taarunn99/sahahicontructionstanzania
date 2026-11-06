"use client";

import { useActionState } from "react";

import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/contact/actions";
import { BrandButton } from "@/components/ui/brand-button";

const initialState: ContactFormState = { status: "idle" };

// 16px inputs: anything smaller makes iOS Safari zoom the page on focus.
const fieldClass =
  "w-full rounded-none border-b bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted/60 focus:border-deep";

/**
 * The enquiry form. A server action with a honeypot and a two-channel
 * delivery chain (src/app/contact/actions.ts): the visitor sees an error
 * only if both channels fail, and the error shows the direct email
 * address. Enquiries never vanish silently.
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.status === "sent") {
    return (
      <div className="border-deep rounded-lg border p-10" role="status">
        <p className="font-display text-phi-2">Sent.</p>
        <p className="text-muted mt-3 leading-relaxed">
          Your enquiry is with our Dar es Salaam office. We reply by email or
          phone, whichever you gave us.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-8">
      {/* Honeypot - hidden from people, attractive to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="label-sh text-muted">Name *</span>
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="label-sh text-muted">Company</span>
          <input
            name="company"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="label-sh text-muted">Email *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="label-sh text-muted">Phone</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="label-sh text-muted leading-relaxed">
          Products, quantities or the job *
        </span>
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>

      {state.status === "error" && (
        <p role="alert" className="text-sm leading-relaxed font-medium">
          {state.message}
        </p>
      )}

      <div className="justify-self-start">
        <BrandButton type="submit" size="md" variant="light" disabled={pending}>
          {pending ? "Sending" : "Send enquiry"}
        </BrandButton>
      </div>
    </form>
  );
}
