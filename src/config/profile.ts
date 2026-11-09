/**
 * SAHIHI COMPANY PROFILE 2026 (owner, 2026-11-09). Source PDF in
 * assets/source/profile (gitignored); the download is the same document
 * re-compressed for the web (12.4 MB to 2.9 MB), not edited. Pages rendered to
 * WebP at 820 px for the flip book. Checked: no prices.
 */
export const PROFILE_PDF = "/tds/sahihi-company-profile-2026.pdf";
export const PROFILE_SIZE = "2.9 MB";

const TITLES = [
  "Cover, Company Profile 2026",
  "Introduction",
  "Contents",
  "About Sahihi",
  "Vision and mission",
  "Hospitality, Tanzania",
  "Our commitment to Tanzania",
  "Our solutions",
  "Our global partners",
  "Mapei",
  "Mapei, the range",
  "X-Calibur",
  "X-Calibur, the range",
  "CMCI",
  "CMCI, the range",
  "Oriental Yuhong (OYH)",
  "Oriental Yuhong, the range",
  "BIHUI",
  "BIHUI, the range",
  "Leisure, Tanzania",
  "Projects",
  "On site, Dar es Salaam",
  "Where we are",
  "Get in touch",
];

export const profilePages = TITLES.map((title, index) => ({
  src: `/images/profile/page-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Sahihi company profile, page ${index + 1}: ${title}`,
  title,
}));

/** Jump points shown under the book. Page numbers are 1-based. */
export const profileChapters = [
  { label: "About", page: 4 },
  { label: "Solutions", page: 8 },
  { label: "Mapei", page: 10 },
  { label: "X-Calibur", page: 12 },
  { label: "CMCI", page: 14 },
  { label: "OYH", page: 16 },
  { label: "BIHUI", page: 18 },
  { label: "Projects", page: 21 },
  { label: "Contact", page: 24 },
];
