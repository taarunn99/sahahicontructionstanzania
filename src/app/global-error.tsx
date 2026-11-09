"use client";

/**
 * Last resort, when the root layout itself fails: no fonts, no Tailwind
 * guaranteed, so plain inline styles. Same message, same ways out.
 */
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#fafbf8",
          color: "#0c2a36",
          fontFamily: "system-ui, sans-serif",
          padding: "24px",
        }}
      >
        <main style={{ maxWidth: 560 }}>
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: 12,
            }}
          >
            Sahihi Construction Chemicals
          </p>
          <h1 style={{ fontSize: 36, lineHeight: 1.1, margin: "12px 0" }}>
            The site did not load.
          </h1>
          <p style={{ lineHeight: 1.6 }}>
            Please try again. You can also email info@sahihicc.com.
          </p>
          <p
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 24,
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: 0,
                background: "#0c2a36",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Try again
            </button>
            {/* A full reload on purpose: the layout itself has failed. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid #0c2a36",
                color: "inherit",
              }}
            >
              Home page
            </a>
          </p>
        </main>
      </body>
    </html>
  );
}
