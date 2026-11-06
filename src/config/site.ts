/**
 * Single source of truth for company details that appear in metadata,
 * structured data, the header and the footer. Company facts come from the
 * owner-supplied documents (business card, intro letter, BRELA licence) -
 * see docs/SOURCE-FACTS.md. Never restate a company detail anywhere else.
 */

const url = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahihicc.com"
).replace(/\/$/, "");

export const siteConfig = {
  /** Common name. */
  name: "Sahihi Construction Chemicals",
  /** The concise brand - Google's site-name candidate. Feeds WebSite schema
   *  `name` and og:site_name; must appear verbatim in header, footer, body. */
  brandName: "Sahihi Construction Chemicals",
  shortName: "Sahihi",
  /** Exact wording of BRELA business licence no. 20000209142. */
  legalName: "Sahihi Construction Chemicals Limited",
  /** Every branded query buyers may type - reconciled to ONE entity. */
  alternateNames: [
    "Sahihi",
    "Sahihi CC",
    "Sahihi Construction Chemicals Limited",
    "Sahihi Construction Chemicals Tanzania",
  ],
  /** As printed on the logo lockup. */
  tagline: "Enhance Your Building Life",
  /** As signed off in the company introduction letter. */
  signoff: "Building Better. Protecting Longer.",
  description:
    "Construction chemicals in Tanzania from Sahihi, authorized Mapei distributor: tile adhesives, waterproofing, epoxy flooring and concrete repair, Dar es Salaam.",
  url,
  locale: "en_TZ",
  language: "en",
  contact: {
    email: "info@sahihicc.com",
    phone: "+255 704 722 705",
    /** Digits only, for wa.me links. OWNER TO CONFIRM this number is on
     *  WhatsApp Business (docs/OPEN-QUESTIONS.md Q6). */
    whatsapp: "255704722705",
    whatsappGreeting:
      "Hello Sahihi Construction Chemicals - I would like to enquire about",
  },
  address: {
    street: "Coca-Cola Road, Mikocheni B Light Industrial Area",
    ward: "Mikocheni",
    district: "Kinondoni",
    city: "Dar es Salaam",
    region: "Dar es Salaam",
    postalCode: "",
    country: "TZ",
    countryName: "Tanzania",
  },
  /** Google Maps directions to the address above. Replace the destination
   *  with the Business Profile place id once the profile exists. */
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Coca-Cola%20Road%2C%20Mikocheni%20B%2C%20Dar%20es%20Salaam%2C%20Tanzania",
  /** Empty until the owner supplies them; empty values drop out of schema. */
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    googleBusiness: "",
  },
  /** The BRELA licence is a public display document; its number is shown
   *  on /about. The tax number on it is deliberately NOT in this file or
   *  anywhere on the site. */
  registration: {
    licenceNumber: "20000209142",
    issuer: "Business Registrations and Licensing Agency (BRELA)",
  },
  /** Countries named in schema areaServed. Tanzania only until the owner
   *  confirms cross-border supply (docs/OPEN-QUESTIONS.md Q4). */
  areaServed: ["TZ"],
  // No named people on the site (owner, 2026-11-06: "remove director").
  /** Only routes that exist. A link in the chrome never 404s. */
  nav: [
    { label: "Home", href: "/" },
    { label: "Mapei", href: "/mapei" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contactRecipient: "info@sahihicc.com",
} as const;

export type SiteConfig = typeof siteConfig;

/** wa.me link with a prefilled, topic-specific opener. */
export function whatsappLink(topic = "your construction chemical range") {
  const text = `${siteConfig.contact.whatsappGreeting} ${topic}.`;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}
