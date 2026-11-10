import { LostMark } from "@/components/sections/lost-mark";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";

/**
 * Branded 404 (owner, 2026-11-09: more creative, the logo animated, and two
 * buttons only). The "0" is the logo's tick and sun, looking for the page.
 * Next serves it with a real 404 status and noindex.
 */
export default function NotFound() {
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <section className="flex min-h-[78vh] items-center pt-32 pb-20 short:pt-24 short:pb-12">
        <Container className="text-center">
          <p className="label-sh text-muted">Page not found</p>
          <p
            aria-label="404"
            className="font-display text-deep mt-6 flex items-center justify-center gap-[0.04em] text-[clamp(5rem,min(26vw,30svh),17rem)] leading-none tracking-tight"
          >
            <span aria-hidden>4</span>
            <LostMark />
            <span aria-hidden>4</span>
          </p>
          <h1 className="font-display text-phi-3 mx-auto mt-8 max-w-2xl tracking-tight text-balance">
            Our tick looked everywhere. This page isn&apos;t here.
          </h1>
          <p className="text-muted mx-auto mt-4 max-w-md leading-relaxed">
            The address may have changed. Start again from the home page, or
            tell us what you were after.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <FlowButton href="/">Back to the home page</FlowButton>
            <FlowButton href="/contact">Contact us</FlowButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
