import type { PostContent } from "@/lib/blog";

/**
 * When the rains fall, by region, and what to schedule around them.
 * Primary query: masika and vuli rainy season.
 *
 * Season facts: Tanzania Meteorological Authority, as read on 2026-11-06 in
 * docs/research/blog/06-tanzania-context.md section 2.1. TMA's Act makes it
 * an offence to spread weather information from unofficial sources, so the
 * outlook paragraph only quotes TMA, dated and linked, and the post makes
 * no forecast of its own. No station month-by-month normals: TMA does not
 * give them. Refresh the outlook paragraph each season.
 *
 * Product limits: src/content/mapei, oriental-yuhong and x-calibur JSON.
 * Computed: 5 days + 14 days = 19 days (Mapelastic Easy, Keraflex Maxi S1).
 */
export const content: PostContent = {
  answer:
    "Masika is the long rains, typically March to May. Vuli is the short rains, October to December. Both fall in Tanzania's two-season areas, including Dar es Salaam, Tanga, Zanzibar, Arusha and Mwanza. The south, centre and west get one season, msimu, from November to April or May. June to September is dry across the country, which makes it the safest window for exposed work.",
  sections: [
    {
      h2: "Which regions get masika and vuli, and which get msimu?",
      body: [
        "The north and the coast get two rainy seasons; the south, centre and west get one. That is how the Tanzania Meteorological Authority (TMA) divides the country, and it decides your building programme before anything else about the weather does. A roofer in Dar es Salaam and a roofer in Mbeya work to different calendars: the first has a gap in January and February that the second does not.",
        "Two places cross the line. TMA puts northern Morogoro in the two-season area and southern Morogoro in the one-season area. Its seasonal outlooks also count the north of Kigoma, meaning Kakonko and Kibondo districts, as two-season, along with Geita and Mafia island. Find your region in the table before you fix a start date.",
      ].join("\n\n"),
      table: {
        caption: "Tanzania's rainy seasons by region, as TMA defines them.",
        head: ["Area", "Regions", "Rainy seasons"],
        rows: [
          [
            "Northern coast",
            "Dar es Salaam, Pwani with Mafia, Tanga, north Morogoro, Unguja, Pemba",
            "Vuli Oct to Dec; masika Mar to May",
          ],
          [
            "North-east highlands",
            "Kilimanjaro, Arusha, Manyara",
            "Vuli Oct to Dec; masika Mar to May",
          ],
          [
            "Lake Victoria basin",
            "Mwanza, Shinyanga, Simiyu, Kagera, Mara, Geita",
            "Vuli Oct to Dec; masika Mar to May",
          ],
          [
            "South",
            "Ruvuma, Mtwara, Lindi, south Morogoro",
            "Msimu, Nov to Apr or May",
          ],
          [
            "South-west highlands",
            "Mbeya, Songwe, Njombe, Iringa, Rukwa",
            "Msimu, Nov to Apr or May",
          ],
          ["Centre", "Dodoma, Singida", "Msimu, Nov to Apr or May"],
          [
            "West",
            "Katavi, Tabora, Kigoma (north Kigoma is two-season)",
            "Msimu, Nov to Apr or May",
          ],
        ],
        source:
          "TMA, Statement on the Status of Tanzania Climate in 2025, sections 3.2 and 8.1.2; Vuli 2026 outlook, section 1",
      },
    },
    {
      h2: "What can you build in each part of the year?",
      body: [
        "Exposed work belongs in June to September, which TMA calls dry months for the entire country. Dry does not mean rainless: on gridded data for 1981 to 2010 in the University of Cape Town's climate profile, Dar es Salaam still gets less than 100 mm across those four months, not nothing, so keep the covers on site.",
        "January and February are the second window, in two-season areas only. TMA calls them relatively dry, not dry. They also come in the hot season, which TMA runs from October to February or March. In Dar es Salaam the mean daily maximum in those months is 32.8°C, the highest of any season. Several sheets stop at +35°C, and Mapefloor I 300 SL ME applies that to the substrate as well as the air. A slab in full sun runs hotter than the air, so measure it.",
      ].join("\n\n"),
      table: {
        caption: "The year in five windows, with what each one suits.",
        head: ["Months", "Two-season areas", "One-season areas", "Plan for"],
        rows: [
          [
            "Jan to Feb",
            "Relatively dry",
            "Rain",
            "Two-season areas: short exposed jobs, early or late in the day",
          ],
          [
            "Mar to May",
            "Masika",
            "Rain, ending Apr or May",
            "Interior work; keep materials dry",
          ],
          [
            "Jun to Sep",
            "Dry",
            "Dry",
            "Roofs, terraces, external waterproofing, pours",
          ],
          [
            "Oct",
            "Vuli begins",
            "Rain starts in Nov",
            "One-season areas: last exposed jobs. Heat returns",
          ],
          ["Nov to Dec", "Vuli", "Msimu", "Interior work; keep materials dry"],
        ],
        source:
          "Seasons and temperature: TMA Climate Statement 2025, sections 8.1.1 and 8.1.2. Planning column: our advice",
      },
    },
    {
      h2: "How heavy does the rain get?",
      body: [
        "Heavy enough that a bad day matters more than the seasonal average. TMA treats 50 mm or more in 24 hours as severe weather, and in 2025 it recorded 119 such events, 20 of them above 100 mm. April had the most (33), then March (32). In Dar es Salaam, the same climate profile found that daily rain intensity in March to May rose by nearly 6 mm per day per decade, while the number of rain days fell by almost 4 per decade. So masika can mean fewer wet days, each one worse.",
        "Seasons also vary from year to year. Masika 2025 reached 125.6% of average nationally, while Vuli 2025 reached 88.9%.",
        "For this season, read TMA and nobody else. Its [Vuli 2026 outlook](https://www.meteo.go.tz/uploads/documents/sw-1788331982-Mwelekeo%20wa%20Mvua%20za%20Vuli%202026.pdf), issued on 18 August 2026, expects a strong El Nino to affect the season. On the northern coast it expected rain from the first or second week of October, ending in January 2027, although vuli normally ends in December. If that holds, January there will not be the usual drier window. TMA's advice to builders: plan around the forecast, move plant and materials out of valleys before the rain, and buy early and store the materials that spoil when damp, such as cement and steel bars.",
      ].join("\n\n"),
    },
    {
      h2: "When should you waterproof a roof?",
      body: [
        "Finish before the rains, and leave room for the drying the data sheet asks for. In two-season areas that means by the end of September; in one-season areas, before November, or earlier if TMA's outlook for your region says so.",
        "Moisture is the catch. [YHColorWall-5300](/oriental-yuhong/yhcolorwall-5300), a liquid membrane for exterior walls and roofs, asks for substrate moisture of 4% or less and gives 72 hours at +30°C before the applied product is ready for use. A slab soaked yesterday will not meet that today. [Mapelastic Easy](/mapei/waterproofing/mapelastic-easy), for terraces and balconies, must be protected from rain for the first 24 hours. YHCoat-1000, which lists flat roofs, says to protect fresh material from rain, stops at +35°C, and gives no traffickable finish, so it needs a levelling screed. [X-Shield FlexPruf](/x-calibur/x-shield-flexpruf) lists roof waterproofing among its uses.",
        "One product to keep off roofs: [Antipluviol](/mapei/waterproofing/antipluviol) is a water-repellent for walls, and its sheet rules out terraces and flat roofs. Linked product pages carry the data sheet and a coverage calculator.",
      ].join("\n\n"),
    },
    {
      h2: "When should you pour and cure concrete?",
      body: [
        "Pour when you can keep the slab covered and wet afterwards, which for large exposed slabs means June to September. Rain on a fresh surface adds water to the top of the concrete, where the finish and the next trade's bond depend on it. In the hot months the problem reverses: sun and wind take water out too early. TMA also warns of soil erosion and flood damage to work in progress.",
        "Curing belongs on the programme; take the period from your engineer's specification. Idrocrete KR 1000, a crystallising admixture, only gives guaranteed results in concrete with a water/cement ratio below 0.5 and adequate wet curing. Keraflex Maxi S1 and Mapelastic Easy both exclude concrete that is not sufficiently cured, and Mapefloor CPU+/MF excludes concrete younger than 7 days.",
        "Store bagged goods off the floor and under cover. Mapeset and Mapegrout T60 ME both warn that shelf life may be reduced at high temperature or high humidity.",
      ].join("\n\n"),
    },
    {
      h2: "When should you tile a terrace?",
      body: [
        "Start early enough that the whole build-up finishes before the rains, and count backwards from them. A terrace is a cured slab, a membrane and a tile bed, each with its own wait.",
        "Using Mapelastic Easy and [Keraflex Maxi S1](/mapei/tile-adhesives-grouts/keraflex-maxi-s1) as the example: wait at least 5 days after the membrane before laying tiles, then the adhesive sheet gives 24 hours before grouting floor joints and foot traffic, and 14 days to ready for service. That is 5 + 14 = 19 days from the last coat of membrane to a terrace in service, before counting the tiling days. The Mapelastic Easy sheet notes that its 5 days can change with the weather. Cover freshly laid tiles if rain threatens.",
        "Keraflex Maxi S1 applies between +5°C and +40°C with an open time above 30 minutes, but a hot slab in wind can skin the adhesive sooner. Lift a tile now and then and check the back is fully covered. For a final sealer, UltraCare Stain Protector W Plus should not go on surfaces in direct sun or if rain is forecast within the next few hours.",
      ].join("\n\n"),
    },
    {
      h2: "Can you lay a resin floor in humid months?",
      body: [
        "Sometimes, but the calendar will not tell you when; a hygrometer will. [Mapefloor FC 200 ME](/mapei/resin-flooring/mapefloor-fc-200-me) says air relative humidity should not be greater than 75%. A published study of Dar es Salaam gives monthly relative humidity of 77 to 86% over the year. So the monthly figures sit above that limit all year, and the dry season does not solve it.",
        "Humidity moves through the day. The same study's simulation of four Dar es Salaam districts in February ran from 55% to 83%, highest at 10:00 and lowest at 16:00. That is a model, not a promise, but it explains why you measure on the day, in the room, before mixing. Check the dew point too: a slab cooler than the air can collect condensation.",
        "Then test the floor. FC 200 ME and Primer SN exclude substrates above 4% moisture or with capillary rising damp. The Mapefloor I 300 SL ME sheet prints no air humidity figure, but rules out damp substrates. Book the moisture test before you book the crew.",
      ].join("\n\n"),
      note: "These dates describe the normal pattern. For any forecast, follow TMA's current outlook for your region.",
    },
  ],
  faq: [
    {
      q: "When is the rainy season in Dar es Salaam?",
      a: "Dar es Salaam has two: vuli, October to December, and masika, March to May. January and February are relatively dry and June to September is dry. Check TMA's current outlook, because a season can start late or run on.",
    },
    {
      q: "What is the difference between masika, vuli and msimu?",
      a: "Masika is the long rains and vuli the short rains, both in two-season areas. Msimu is the single rainy season of the south, centre and west, running from November to April or May.",
    },
    {
      q: "What is the best time to waterproof a roof in Tanzania?",
      a: "June to September, which TMA describes as dry across the country. Finish before October in two-season areas. The slab must meet the data sheet's moisture limit, and the new coating needs protection from rain for as long as its sheet requires.",
    },
    {
      q: "Can I apply an epoxy floor in humid weather?",
      a: "Only if the readings on the day are within the data sheet's limits. Mapefloor FC 200 ME sets 75% air relative humidity and 4% substrate moisture. Measure in the room before mixing, and postpone if either figure is exceeded.",
    },
  ],
  sources: [
    {
      label:
        "TMA, Statement on the Status of Tanzania Climate in 2025 (reference period 1991 to 2020)",
      url: "https://www.meteo.go.tz/uploads/documents/sw-1776847672-Climate%20Statement%202025.pdf",
    },
    {
      label: "TMA, Mwelekeo wa Mvua za Vuli 2026, issued 18 August 2026",
      url: "https://www.meteo.go.tz/uploads/documents/sw-1788331982-Mwelekeo%20wa%20Mvua%20za%20Vuli%202026.pdf",
    },
    {
      label: "TMA, Seasonal weather forecasts index",
      url: "https://www.meteo.go.tz/publications/seasonal-weather-forecast",
    },
    {
      label:
        "University of Cape Town, Dar es Salaam Climate Profile: Full Technical Version, November 2017",
      url: "https://assets.publishing.service.gov.uk/media/5f89cf44d3bf7f49a725e58b/Dar_climate_profile_full_technical_v2.pdf",
    },
    {
      label:
        "Yahia et al. (2018), International Journal of Biometeorology 62, 373-385",
      url: "https://europepmc.org/article/PMC/PMC5854744",
    },
    {
      label: "YHColorWall-5300 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcolorwall-5300",
    },
    {
      label: "YHCoat-1000 technical data sheet, Oriental Yuhong",
      url: "/oriental-yuhong/yhcoat-1000",
    },
    {
      label: "X-Shield FlexPruf technical data sheet, X-Calibur",
      url: "/x-calibur/x-shield-flexpruf",
    },
    {
      label: "Mapelastic Easy technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-easy",
    },
    {
      label: "Antipluviol technical data sheet, Mapei",
      url: "/mapei/waterproofing/antipluviol",
    },
    {
      label: "Idrocrete KR 1000 technical data sheet, Mapei",
      url: "/mapei/waterproofing/idrocrete-kr-1000",
    },
    {
      label: "Keraflex Maxi S1 technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/keraflex-maxi-s1",
    },
    {
      label: "UltraCare Stain Protector W Plus technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/ultracare-stain-protector-w-plus",
    },
    {
      label: "Mapeset technical data sheet, Mapei",
      url: "/mapei/tile-adhesives-grouts/mapeset",
    },
    {
      label: "Mapegrout T60 ME technical data sheet, Mapei",
      url: "/mapei/concrete-repair/mapegrout-t60",
    },
    {
      label: "Mapefloor FC 200 ME technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-fc-200-me",
    },
    {
      label: "Mapefloor I 300 SL ME technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-i-300-sl-me",
    },
    {
      label: "Mapefloor CPU+/MF technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-cpu-plus-mf",
    },
    {
      label: "Primer SN technical data sheet, Mapei",
      url: "/mapei/resin-flooring/primer-sn",
    },
  ],
};
