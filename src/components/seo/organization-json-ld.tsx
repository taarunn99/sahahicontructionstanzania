import { brands } from "@/config/brands";
import { siteConfig } from "@/config/site";

/**
 * Organization + LocalBusiness structured data, site-wide.
 *
 * Unfilled siteConfig fields resolve to `undefined` so JSON.stringify drops
 * them - Google treats empty-string values as malformed rather than absent.
 * Every value here is also visible on the site (header, footer, /about,
 * /contact): schema only ever mirrors visible content.
 */
export function OrganizationJsonLd() {
  const { address, contact, social } = siteConfig;
  const sameAs = Object.values(social).filter(Boolean);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    // Common name first, the exact BRELA licence name in legalName, and
    // every branded query buyers type in alternateName so Google
    // reconciles them to ONE entity.
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.alternateNames,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    // Google requires >=112px square for Organization logo; apple-icon is
    // 180x180 and served at a stable path (no build hash).
    logo: `${siteConfig.url}/apple-icon.png`,
    image: `${siteConfig.url}/opengraph-image.jpg`,
    description: siteConfig.description,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street || undefined,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode || undefined,
      addressCountry: address.country,
    },
    areaServed: siteConfig.areaServed.map((code) => ({
      "@type": "Country",
      name: code,
    })),
    // The brands this business distributes - entity clarity for
    // "<brand> distributor Tanzania" queries.
    brand: brands.map((brand) => ({ "@type": "Brand", name: brand.name })),
    // Named on /about; the full Person node is on that page.
    employee: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about#director`,
      name: siteConfig.director.name,
      jobTitle: siteConfig.director.title,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phone,
        email: contact.email,
        contactType: "sales",
        areaServed: siteConfig.areaServed,
        availableLanguage: ["en", "sw"],
      },
    ],
  };

  if (sameAs.length > 0) {
    jsonLd.sameAs = sameAs;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Escaping `<` keeps a stray "</script>" in any config value from
        // closing the tag early.
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
