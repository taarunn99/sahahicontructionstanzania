import { ProfileBook } from "@/components/sections/profile-book";
import { Container } from "@/components/ui/container";
import { FlowButton } from "@/components/ui/flow-button";
import { PROFILE_PDF, PROFILE_SIZE } from "@/config/profile";
import { cn } from "@/lib/utils";

/** The company profile, as a book, with the PDF to keep. Home and /products. */
export function ProfileSection({ className }: { className?: string }) {
  return (
    <section
      id="company-profile"
      className={cn("scroll-mt-28 overflow-hidden py-16 sm:py-24", className)}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-sh text-muted">Company profile 2026</p>
          <h2 className="font-display text-phi-3 mt-4 tracking-tight text-balance">
            Read us like a book.
          </h2>
          <p className="mt-4 leading-relaxed">
            Who we are, the five brands we distribute, our solutions and our
            projects across Tanzania, in 24 pages. Turn the pages, or take the
            PDF with you.
          </p>
        </div>
        <div className="mt-10">
          <ProfileBook />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <FlowButton
            href={PROFILE_PDF}
            download="sahihi-company-profile-2026.pdf"
          >
            Download the profile
            <span className="sr-only"> (PDF, 24 pages, {PROFILE_SIZE})</span>
          </FlowButton>
        </div>
        <p className="spec-sh text-muted mt-3 text-center">
          PDF · 24 pages · {PROFILE_SIZE}
        </p>
      </Container>
    </section>
  );
}
