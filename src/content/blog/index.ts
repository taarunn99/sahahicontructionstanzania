import type { PostContent } from "@/lib/blog";

import { content as cementitiousVsLiquidMembraneWaterproofing } from "./cementitious-vs-liquid-membrane-waterproofing";
import { content as constructionCompaniesTanzaniaCrbClasses } from "./construction-companies-tanzania-crb-classes";
import { content as epoxyFloorThickness } from "./epoxy-floor-thickness";
import { content as epoxyGroutVsCementGrout } from "./epoxy-grout-vs-cement-grout";
import { content as howToGroutABasePlate } from "./how-to-grout-a-base-plate";
import { content as howToMixTileAdhesive } from "./how-to-mix-tile-adhesive";
import { content as jointSealantWidthDepthCoverage } from "./joint-sealant-width-depth-coverage";
import { content as keraflexMaxiS1VsAdesilexP7VsKerabondT } from "./keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t";
import { content as mapeiWaitingTimesBeforeTilingGroutingWalking } from "./mapei-waiting-times-before-tiling-grouting-walking";
import { content as masikaVuliBuildersRainCalendar } from "./masika-vuli-builders-rain-calendar";
import { content as screedOrSelfLevellingCompound } from "./screed-or-self-levelling-compound";
import { content as selfLevellingCompoundPerSquareMetre } from "./self-levelling-compound-per-square-metre";
import { content as spallingConcreteRepair } from "./spalling-concrete-repair";
import { content as tileAdhesivePerSquareMetre } from "./tile-adhesive-per-square-metre";
import { content as tileAdhesiveVsSandAndCement } from "./tile-adhesive-vs-sand-and-cement";
import { content as trowelNotchSizeForTileSize } from "./trowel-notch-size-for-tile-size";
import { content as undergroundWaterTankWaterproofing } from "./underground-water-tank-waterproofing";
import { content as waterproofingCoveragePerSquareMetre } from "./waterproofing-coverage-per-square-metre";
import { content as whenToTileOnSelfLevellingCompound } from "./when-to-tile-on-self-levelling-compound";
import { content as whyEpoxyFloorsBlisterAndPeel } from "./why-epoxy-floors-blister-and-peel";
import { content as whyFloorTilesPopUp } from "./why-floor-tiles-pop-up";
import { content as whyHiddenRoofHousesLeak } from "./why-hidden-roof-houses-leak";

/**
 * The words of every post, keyed by slug. One import per post file; a post
 * in the registry (src/config/blog.ts) with no entry here fails the build
 * in src/app/blog/[slug]/page.tsx.
 */
export const postContent: Record<string, PostContent> = {
  "cementitious-vs-liquid-membrane-waterproofing":
    cementitiousVsLiquidMembraneWaterproofing,
  "construction-companies-tanzania-crb-classes":
    constructionCompaniesTanzaniaCrbClasses,
  "epoxy-floor-thickness": epoxyFloorThickness,
  "epoxy-grout-vs-cement-grout": epoxyGroutVsCementGrout,
  "how-to-grout-a-base-plate": howToGroutABasePlate,
  "how-to-mix-tile-adhesive": howToMixTileAdhesive,
  "joint-sealant-width-depth-coverage": jointSealantWidthDepthCoverage,
  "keraflex-maxi-s1-vs-adesilex-p7-vs-kerabond-t":
    keraflexMaxiS1VsAdesilexP7VsKerabondT,
  "mapei-waiting-times-before-tiling-grouting-walking":
    mapeiWaitingTimesBeforeTilingGroutingWalking,
  "masika-vuli-builders-rain-calendar": masikaVuliBuildersRainCalendar,
  "screed-or-self-levelling-compound": screedOrSelfLevellingCompound,
  "self-levelling-compound-per-square-metre":
    selfLevellingCompoundPerSquareMetre,
  "spalling-concrete-repair": spallingConcreteRepair,
  "tile-adhesive-per-square-metre": tileAdhesivePerSquareMetre,
  "tile-adhesive-vs-sand-and-cement": tileAdhesiveVsSandAndCement,
  "trowel-notch-size-for-tile-size": trowelNotchSizeForTileSize,
  "underground-water-tank-waterproofing": undergroundWaterTankWaterproofing,
  "waterproofing-coverage-per-square-metre":
    waterproofingCoveragePerSquareMetre,
  "when-to-tile-on-self-levelling-compound": whenToTileOnSelfLevellingCompound,
  "why-epoxy-floors-blister-and-peel": whyEpoxyFloorsBlisterAndPeel,
  "why-floor-tiles-pop-up": whyFloorTilesPopUp,
  "why-hidden-roof-houses-leak": whyHiddenRoofHousesLeak,
};
