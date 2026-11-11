/**
 * Where these fireproofing types have been used: rows from the maker's
 * commercial fireproofing reference list (2020) and the Monokote catalogue,
 * supplied by the owner on 2026-11-11. Copied as printed: project, type,
 * country. Sahihi did not supply or apply these jobs, and the page says so.
 * The maker is not named (GOVERNANCE.md).
 */

export const FIRE_REFERENCES_SOURCE =
  "Reference list, commercial fireproofing, 2020";

export const fireReferenceCountries = [
  "Saudi Arabia",
  "Kuwait",
  "Bahrain",
  "Qatar",
  "UAE",
  "Egypt",
  "Oman",
  "Jordan",
];

export type FireReference = {
  project: string;
  type: string;
  country: string;
  kind: "Airport" | "Tower" | "Hotel" | "Government" | "Plant";
};

export const fireReferences: FireReference[] = [
  {
    project: "Bahrain International Airport, New Terminal",
    type: "MK-6/HY",
    country: "Bahrain",
    kind: "Airport",
  },
  {
    project: "KFIA Control Tower, Dammam",
    type: "MK-6/HY",
    country: "Saudi Arabia",
    kind: "Airport",
  },
  {
    project: "KFIA Hangar Extension",
    type: "Z-106/HY",
    country: "Saudi Arabia",
    kind: "Airport",
  },
  { project: "Zamil Tower", type: "Z-106", country: "Bahrain", kind: "Tower" },
  {
    project: "Hamoud Tower",
    type: "MK-6/HY",
    country: "Kuwait",
    kind: "Tower",
  },
  { project: "Salam Towers", type: "MK-6/HY", country: "Qatar", kind: "Tower" },
  {
    project: "Kuwait Sheraton Hotel",
    type: "MK-6/HY",
    country: "Kuwait",
    kind: "Hotel",
  },
  {
    project: "Meridian Hotel",
    type: "MK-6/HY",
    country: "Kuwait",
    kind: "Hotel",
  },
  {
    project: "Sheraton Heliopolis Hotel",
    type: "MK-6",
    country: "Egypt",
    kind: "Hotel",
  },
  {
    project: "Ministry of Finance",
    type: "MK-6/HY",
    country: "Bahrain",
    kind: "Government",
  },
  {
    project: "Desalination Plant",
    type: "MK-6/HY",
    country: "Bahrain",
    kind: "Plant",
  },
];
