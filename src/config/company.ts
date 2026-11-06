import type { LineSlug } from "@/config/catalogue";
import type { FaqItem } from "@/lib/faq";

/**
 * Company content that is NOT product data: solution areas, initiatives,
 * mission and the home FAQ. Every statement here traces to the company
 * introduction letter (assets/source/owner-supplied/sahihi-intro-letter.pdf)
 * or the BRELA licence. Reworded into the site voice, never extended.
 * See docs/SOURCE-FACTS.md for the line-by-line trace.
 */

export type Solution = {
  slug: string;
  label: string;
  /** One line in the site voice. */
  lead: string;
  /** Scope list, from the letter. */
  scope: string[];
  /** Catalogue lines that serve this solution today. */
  lines: LineSlug[];
};

export const solutions: Solution[] = [
  {
    slug: "waterproofing",
    label: "Waterproofing",
    lead: "Water ingress is one of the leading causes of structural deterioration. Cementitious, polyurethane and polyurea systems keep it out.",
    scope: [
      "Basements and foundations",
      "Roofs and terraces",
      "Bathrooms, kitchens and wet areas",
      "Bridges, airports, ports and stadiums",
      "Tunnels and underground structures",
    ],
    lines: ["waterproofing", "oriental-yuhong", "x-calibur"],
  },
  {
    slug: "flooring-systems",
    label: "Flooring Systems",
    lead: "Floors that take traffic, chemicals and cleaning without breaking up.",
    scope: [
      "Epoxy flooring for pharmaceutical, laboratory and industrial spaces",
      "Polyurethane flooring for production areas and commercial kitchens",
      "SPC and LVT flooring for offices and commercial interiors",
    ],
    lines: ["resin-flooring", "primers-levelling", "x-calibur"],
  },
  {
    slug: "structural-strengthening",
    label: "Structural Strengthening & Rehabilitation",
    lead: "Existing concrete, repaired and strengthened so the structure keeps its value.",
    scope: [
      "Concrete repair and restoration",
      "Structural strengthening and reinforcement",
      "Rehabilitation of deteriorated concrete structures",
      "Restoration and preservation of heritage buildings",
    ],
    lines: ["concrete-repair"],
  },
  {
    slug: "sports-flooring",
    label: "Sports Flooring & Coatings",
    lead: "Playing surfaces for schools, clubs and professional venues.",
    scope: [
      "Stadium and sports facility coatings",
      "Basketball, netball and tennis court coatings",
      "EPDM-based sports flooring systems",
      "Synthetic grass systems",
    ],
    lines: [],
  },
  {
    slug: "mining-underground",
    label: "Mining & Underground Construction",
    lead: "Construction chemicals for difficult ground, water ingress and structural stability below the surface.",
    scope: [
      "Tunnel strengthening and stabilization",
      "Waterproofing of underground structures",
      "Ground consolidation and excavation support",
      "Protection and rehabilitation of mining infrastructure",
    ],
    lines: [],
  },
];

/** "Our Key Initiatives", from the letter. */
export const initiatives = [
  {
    title: "Building durability",
    body: "Construction chemical solutions that improve the performance, durability and service life of buildings and infrastructure.",
  },
  {
    title: "Training existing applicators",
    body: "Technical training for waterproofing, flooring and construction chemical applicators, so the product is applied the way it was designed to be.",
  },
  {
    title: "New skills and employment",
    body: "Training new applicators, young professionals and graduates in practical skills the construction industry can employ.",
  },
  {
    title: "Continuing professional development",
    body: "CPD programmes for consulting engineers, architects and other construction professionals on modern construction technologies.",
  },
  {
    title: "A nationwide network",
    body: "Appointing resellers and applicators across Tanzania to bring products, technical support and service closer to site.",
  },
] as const;

export const vision =
  "To become a leading provider of construction chemical solutions in Tanzania, recognized for product quality, technical excellence, professional training, and our commitment to building durable infrastructure.";

export const mission =
  "To enhance the life of buildings and structures by delivering innovative construction chemical solutions, developing local technical expertise, and supporting the construction industry through quality products, training, and professional service.";

/** The three capabilities named in the home statement section. */
export const capabilities = [
  {
    title: "Supply",
    body: "Mapei and X-Calibur product lines held at our Dar es Salaam warehouse, from tile adhesive to car park coatings.",
  },
  {
    title: "Technical support",
    body: "The right system for the substrate and the exposure, worked out with you before the order, not after the failure.",
  },
  {
    title: "Training",
    body: "Applicator training and CPD sessions for engineers and architects, because a membrane is only as good as the hands that lay it.",
  },
] as const;

export const homeFaq: FaqItem[] = [
  {
    q: "What does Sahihi Construction Chemicals supply?",
    lead: "Construction chemicals from Mapei, Oriental Yuhong and X-Calibur.",
    points: [
      "Tile adhesives, grouts and tile care",
      "Waterproofing membranes, tapes, waterstops and sealants",
      "Epoxy and polyurethane floor systems",
      "Repair mortars, grouts, bonding agents and chemical anchors",
    ],
  },
  {
    q: "Is Sahihi an authorized Mapei distributor in Tanzania?",
    lead: "Yes. Sahihi is an authorized distributor of Mapei in Tanzania.",
    points: [
      "Also an authorized distributor of Oriental Yuhong and X-Calibur",
      "Licensed by BRELA as Sahihi Construction Chemicals Limited",
      "Based on Coca-Cola Road, Mikocheni B, Dar es Salaam",
    ],
  },
  {
    q: "Where can I see prices?",
    lead: "Prices are quoted, not published.",
    points: [
      "Send the product names and quantities by WhatsApp or the enquiry form",
      "Tell us the application and the area so the quantity is right",
      "You receive a written quotation",
    ],
  },
  {
    q: "Do you train applicators?",
    lead: "Yes. Training is part of how the company works.",
    points: [
      "Technical training for existing waterproofing and flooring applicators",
      "Practical training for new applicators and graduates",
      "CPD programmes for consulting engineers and architects",
    ],
  },
  {
    q: "Can I become a reseller or applicator?",
    lead: "Sahihi is appointing resellers and applicators across Tanzania.",
    points: [
      "Hardware and tile businesses can apply to stock the range",
      "Applicators can apply for product training",
      "Start with a message on WhatsApp or the enquiry form",
    ],
  },
];
