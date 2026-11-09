"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Container } from "@/components/ui/container";
import { siteConfig, whatsappLink } from "@/config/site";

/**
 * Branded error page for anything that throws while a page renders. The header
 * and footer stay, the visitor can retry, and every way to reach us is here.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <section className="flex min-h-[70vh] items-center pt-40 pb-24">
        <Container>
          <p className="label-sh text-muted">Something went wrong</p>
          <h1 className="font-display text-phi-4 mt-4 max-w-2xl tracking-tight text-balance">
            This page did not load.
          </h1>
          <p className="text-muted mt-6 max-w-xl leading-relaxed">
            Try again. If it keeps happening, the catalogue and the office are
            one step away.
            {error.digest && (
              <span className="spec-sh mt-2 block">
                Reference {error.digest}
              </span>
            )}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={reset}
              className="bg-deep text-chalk inline-flex min-h-11 items-center rounded-full px-6 text-sm font-bold"
            >
              Try again
            </button>
            {[
              { href: "/", label: "Home page" },
              { href: "/products", label: "Browse products" },
              { href: "/contact", label: "Contact us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappLink("a page on the website that did not load")}
              className="chip-sh border-deep inline-flex min-h-11 items-center rounded-full border px-5 text-sm"
            >
              WhatsApp {siteConfig.brandName}
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
