import {
  heroPhotos,
  linePhotos,
  solutionPhotos,
  companyPhotos,
} from "@/config/images";
import { SPORTS_PATH, SYSTEMS } from "@/config/oyh-sports-systems";

/**
 * The picture a link card shows in its round window (owner, 2026-11-09: a card
 * should show where it leads). Only pictures already on the site, keyed by the
 * page they belong to. A link without one gets the plain arrow disc.
 */
const PICTURES: Record<string, string> = {
  "/": heroPhotos.home.src,
  "/products": heroPhotos.home.src,
  "/mapei": heroPhotos.mapei.src,
  "/about": companyPhotos.supply.src,
  "/projects": "/images/projects/tanzanite-bridge.webp",
  [SPORTS_PATH]: solutionPhotos["sports-flooring"].src,
  "/solutions/waterproofing": solutionPhotos.waterproofing.src,
  "/oriental-yuhong/hdpe-waterproofing":
    "/images/oriental-yuhong/hdpe/basement.webp",
  "/oriental-yuhong/pmh-3080-plus": "/images/oriental-yuhong/hdpe/roll.webp",
  "/cmci": "/images/cmci/commercial.webp",
  "/cmci/fire-rated-cement": "/images/cmci/petrochemical.webp",
  "/vasa": "/images/vasa/rooms/spc8.webp",
  "/vasa/spc-flooring": "/images/vasa/rooms/spc5.webp",
  "/vasa/lvt-flooring": "/images/vasa/rooms/lvt.webp",
  "/vasa/wall-panels": "/images/vasa/rooms/digital.webp",
  "/blog/category/waterproofing": linePhotos.waterproofing.src,
  "/blog/category/flooring": linePhotos["resin-flooring"].src,
  "/blog/category/tools-and-technique": companyPhotos.training.src,
  ...Object.fromEntries(
    Object.entries(linePhotos).map(([slug, item]) => [
      `/mapei/${slug}`,
      item.src,
    ]),
  ),
  ...Object.fromEntries(
    SYSTEMS.map((system) => [
      `${SPORTS_PATH}/${system.slug}`,
      system.picture.src,
    ]),
  ),
};

export const linkPicture = (href: string): string | undefined =>
  PICTURES[href.split("#")[0]];
