import { siteConfig } from "@/config/site";

/**
 * WebSite structured data - the lever for the "site name" Google shows in
 * results and for tying the brand query to this domain. `name` must equal
 * og:site_name and appear verbatim in the header, footer and body.
 *
 * No SearchAction: the site has no visitor-facing search URL, and schema
 * must mirror real functionality.
 */
export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.brandName,
    alternateName: [siteConfig.shortName, siteConfig.legalName],
    url: siteConfig.url,
    inLanguage: "en",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
