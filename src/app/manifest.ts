import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.brandName,
    // The same words as the home description (siteConfig.description).
    description:
      "Construction chemicals in Tanzania from Sahihi, authorized Mapei distributor: tile adhesives, waterproofing, epoxy flooring and concrete repair, Dar es Salaam.",
    start_url: "/",
    display: "browser",
    background_color: "#fafbf8",
    theme_color: "#fafbf8",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
