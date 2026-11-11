import type { PostContent } from "@/lib/blog";

export const content: PostContent = {
  answer:
    "An epoxy floor bubbles, blisters or peels when water, trapped air or a weak surface gets between the resin and the slab. Damp rising through the concrete lifts blisters. Air escaping from open pores leaves pinholes. Laitance, dust or oil lets whole sheets come away. Prevention means checking slab moisture, air humidity and slab temperature against the data sheet, then preparing and priming the surface before any resin is mixed.",
  sections: [
    {
      h2: "What does each epoxy floor failure look like?",
      body: "Each failure leaves a different mark, so read the floor before planning a repair. A blister is a dome with the coating still whole, pushed up from underneath. Peeling is a bond that never properly formed: the resin comes away in sheets. Pinholes are small craters where air broke through the wet coat before it set.\n\nTiming helps too. Pinholes are there on day one. A floor that looked perfect and lifts after the rains points to the slab. A patch that stays soft while the rest hardens points to the mixing bucket.\n\nNo data sheet lists failures by symptom, so the causes below are our reading of the cautions Mapei prints. Treat them as the first thing to check.",
      table: {
        caption: "Epoxy floor failures: what you see, the likely cause, the prevention",
        head: ["What you see", "Likely cause", "Prevention"],
        rows: [
          [
            "Blisters, some time after laying",
            "Moisture rising through the slab",
            "Moisture 4% maximum, no rising damp",
          ],
          [
            "Dull, sticky or whitened surface",
            "Condensation, or coating in humid air",
            "Slab 3°C above dew point; keep to the air limit",
          ],
          [
            "Pinholes and craters on day one",
            "Air escaping from open pores",
            "Close pores with primer; spiked roller while wet",
          ],
          [
            "Sheets lifting cleanly",
            "Laitance, dust, oil or no primer",
            "Grind or shot-blast, vacuum, prime",
          ],
          [
            "Soft patches that never harden",
            "Part-mixed kit, or thinned resin",
            "Mix whole kits; no solvent or water",
          ],
        ],
        source:
          "Prevention from the Mapefloor FC 200 ME, Mapefloor I 300 SL ME and Primer SN data sheets. Causes are our reading of those cautions.",
      },
    },
    {
      h2: "Why does a floor blister long after it was laid?",
      body: "Usually because water is moving up through the slab and the resin will not let it out. Concrete on the ground keeps drying through its top face. Close that face with a dense coating and vapour collects at the bond line until the coat lifts.\n\nMapei's epoxy sheets and Mapefloor PU 410 set the same pair of rules: substrate moisture no higher than 4%, and no capillary rising damp. They are separate tests: a slab can have dried well and still draw water from wet ground. Rain in masika or vuli can rewet an exposed slab.\n\nThe Mapefloor I 300 SL ME and Primer SN sheets add a check with a sheet of polythene. That looks for rising damp and gives no percentage. No sheet prints how the 4% is to be read, so agree the method with Mapei technical services before the job.",
    },
    {
      h2: "What limits do Mapei's resin floor data sheets set?",
      body: "Each sheet prints its own limits, and they differ more than most applicators expect. The air humidity limit on [Mapefloor FC 200 ME](/mapei/resin-flooring/mapefloor-fc-200-me) is 75%; on Mapefloor CPU+/MF the air must be below 80%. FC 200 ME prints no dew point rule, while the next two rows print no air limit.\n\n\"Not stated\" means the sheet prints no figure, not that no limit exists. If a build-up uses several products, check every layer against its own sheet, and ask where a sheet is silent.\n\nOne rule is shared: every sheet below except Triblock P says to protect the product from water for at least 24 hours after application. Each page on our [resin flooring line](/mapei/resin-flooring) carries the full data sheet and a coverage calculator.",
      table: {
        caption: "Application limits printed on the stocked Mapei resin sheets",
        head: [
          "Product",
          "Substrate moisture",
          "Air humidity",
          "Slab against dew point",
          "Application temperature",
        ],
        rows: [
          ["Mapefloor FC 200 ME", "4% maximum", "75% maximum", "Not stated", "+5 to +35°C"],
          ["Mapefloor I 300 SL ME", "4% maximum", "Not stated", "3°C above", "+8 to +35°C"],
          ["Primer SN", "4% maximum", "Not stated", "3°C above", "+8 to +35°C"],
          [
            "Mapefloor CPU+/MF",
            "Visually dry; concrete 7 days or older",
            "Below 80%",
            "3°C above",
            "+10 to +30°C",
          ],
          ["Mapefloor PU 410", "4% maximum", "80% maximum", "3°C above", "+10 to +30°C"],
          ["Mapefloor Finish 450 ME", "4% maximum", "Not stated", "3°C above", "+10 to +35°C"],
          [
            "Triblock P",
            "Damp allowed; no free-standing water",
            "Not stated",
            "Not stated",
            "+5 to +35°C",
          ],
        ],
        source: "Mapei technical data sheets for each product",
      },
    },
    {
      h2: "Is Dar es Salaam too humid to lay an epoxy floor?",
      body: "Not outright, but the air limit is a real constraint on the coast. The climate table for Julius Nyerere International Airport (1991 to 2020) gives a mean relative humidity from 75% in September to 84% in April. Every monthly mean sits at or above the 75% printed for Mapefloor FC 200 ME. March, April and May, at 80%, 84% and 81%, reach the 80% limits on Mapefloor CPU+/MF and PU 410.\n\nA monthly mean is not your working hour, and we have neither hourly figures nor slab readings. Nobody should assume the air is within limits; read it.\n\nDew point is the temperature at which moisture in the air condenses on a surface. A slab still cool from the night can sit near it, and the 3°C margin keeps water off it. Heat matters too: mean daily maximums run from 29.7 to 32.8°C, and CPU+/MF asks for ambient temperature no higher than +30°C.",
    },
    {
      h2: "What can you do if the slab is still damp?",
      body: "You have three honest options, and an ordinary primer is not one of them. [Primer SN](/mapei/resin-flooring/primer-sn) carries the same 4% ceiling as the coating above it, so it will not hold moisture back. Pick from the list below, and do not start while the check is still failing.\n\nClear any free-standing water first, because the [Triblock P](/mapei/primers-levelling/triblock-p) sheet rules it out. If the damp comes from the ground rather than from the pour, ask Mapei technical services before choosing. Mapefloor CPU+/MF excludes capillary rising damp outright, and the Triblock P sheet speaks of damp substrates and residual humidity without naming rising damp. Keep the slab covered from rain where you can, and record the readings each day while it dries.",
      list: [
        "**Wait and recheck,** planning around masika and vuli.",
        "**Use Triblock P,** an epoxy-cementitious primer for damp substrates. Later coats follow within 24 hours to 7 days. It is rigid, so keep it off moving cracks.",
        "**Change the system to [Mapefloor CPU+/MF](/mapei/resin-flooring/mapefloor-cpu-plus-mf),** polyurethane cement, which asks for concrete at least 7 days old that appears visually dry.",
      ],
    },
    {
      h2: "How do you prevent blistering before the first drum is opened?",
      body: "Run the same checks in the same order on every job, and write the readings down. Most of what goes wrong with a resin floor is decided before the resin is mixed, and none of it can be corrected once the coat has set. These steps follow the [Mapefloor I 300 SL ME](/mapei/resin-flooring/mapefloor-i-300-sl-me) and Mapefloor FC 200 ME sheets, so check them against the sheet for your own product. Take readings at the time of application, not the day before: humidity and slab temperature move through the day, and a dry morning says nothing about a wet afternoon. Keep the record with the job file, because it is the first thing anyone will ask for if the floor later lifts.",
      steps: [
        "Confirm the concrete reaches 25 N/mm² compressive and 1.5 N/mm² tensile.",
        "Shot-blast or diamond-grind away laitance, then vacuum.",
        "Fill cracks with Eporip.",
        "Check moisture and rising damp against the chosen sheet.",
        "Read air humidity and slab temperature.",
        "Prime, and make sure no open pores remain.",
        "Mix whole kits. Never dilute.",
        "Keep water off the floor for at least 24 hours.",
      ],
    },
  ],
  faq: [
    {
      q: "Can epoxy be applied to a damp concrete floor?",
      a: "Not directly. The Mapefloor FC 200 ME and I 300 SL ME sheets rule out moisture above 4% and capillary rising damp. Triblock P is a primer made for damp substrates, though not for surfaces with free-standing water.",
    },
    {
      q: "What humidity is too high to apply an epoxy floor coating?",
      a: "It depends on the product. Mapefloor FC 200 ME says air humidity should not exceed 75%. Mapefloor PU 410 says 80% maximum and Mapefloor CPU+/MF below 80%. Some sheets print no air figure, only the 3°C dew point margin.",
    },
    {
      q: "Does a primer stop moisture coming through the slab?",
      a: "An ordinary one does not. Primer SN must not go on substrates above 4% moisture or with capillary rising damp. Triblock P is the stocked primer whose sheet describes a waterproofing treatment for damp substrates.",
    },
    {
      q: "Can a blistered epoxy floor be patched, or must it be removed?",
      a: "The data sheets we hold give no repair method for blisters, so we will not quote one. Find the moisture source first: a patch over a slab still passing damp has the same problem. Send us photographs and the readings.",
    },
  ],
  sources: [
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
      label: "Mapefloor PU 410 technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-pu-410",
    },
    {
      label: "Mapefloor Finish 450 ME technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-finish-450-me",
    },
    {
      label: "Primer SN technical data sheet, Mapei",
      url: "/mapei/resin-flooring/primer-sn",
    },
    {
      label: "Triblock P technical data sheet, Mapei",
      url: "/mapei/primers-levelling/triblock-p",
    },
    {
      label:
        "Dar es Salaam climate table, Julius Nyerere International Airport, 1991 to 2020 (Wikipedia, citing NOAA and Deutscher Wetterdienst)",
      url: "https://en.wikipedia.org/wiki/Dar_es_Salaam",
    },
  ],
};
