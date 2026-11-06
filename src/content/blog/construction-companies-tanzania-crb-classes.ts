import type { PostContent } from "@/lib/blog";

/**
 * How contractor registration works in Tanzania, and how to check a firm.
 * Primary query: construction companies in Tanzania.
 *
 * Every CRB fact is from docs/research/blog/06-tanzania-context.md section
 * 2.3 (R rows), read on crb.go.tz on 2026-11-06. The class limits in money are
 * deliberately NOT printed (owner, 2026-11-06: no prices on the website);
 * the post explains them and links to CRB's own table.
 * Deliberately left out: the penalty figures (CRB's wording reads like a
 * typo and the Act was not opened), registration fees, the 14-day project
 * deadline, and all AQRB links (its site carried a third-party gambling
 * link when read). The ERB register is not linked because the research
 * could not confirm it works. Sahihi is a supplier: no CRB registration is
 * implied, no firm is named, none is recommended or ranked.
 */
export const content: PostContent = {
  answer:
    "Construction companies in Tanzania must be registered with the Contractors Registration Board (CRB). CRB sorts them by type and class: seven classes for building, civil, electrical and mechanical firms, three for specialists, with Class One the highest. Each class caps the value of a single contract. Check any firm on CRB's public list before you sign. We supply materials and do not build, so this is a guide, not a ranking.",
  sections: [
    {
      h2: "Who is allowed to build in Tanzania?",
      body: [
        'A registered contractor. CRB states the rule in these words: "Any project involving construction, erection, installation or alteration of any structure or other works connected therewith, for public, commercial use or otherwise shall be executed/carried out by a Registered Contractor." The wording is not limited to public or commercial jobs.',
        "CRB is the regulator for the registration, regulation and development of contractors, under the Contractors Registration Act, Cap 235. It has zonal offices in Dar es Salaam, Mwanza, Dodoma, Mbeya and Arusha. To register, a firm needs three basics: registration with BRELA as a limited company, partnership or sole proprietor; at least one shareholder or partner with the minimum technical qualification, called the Technical Director; and proof of an office, workshop and yard.",
        "The rule reaches the client too. CRB states that carrying out this work unregistered is an offence, and that it is also an offence for employers or developers to engage an unregistered person or firm, with a fine, imprisonment or both. We do not repeat the penalty figures, because CRB's summary of them appears to contain a typing error and we have not read the Act itself. It is listed on [CRB's legislation page](https://www.crb.go.tz/Legislation); take legal advice on anything that turns on it.",
      ].join("\n\n"),
    },
    {
      h2: "How does CRB sort contractors?",
      body: [
        "CRB sorts every contractor three ways: by category, by type and by class. Category is about ownership. A local contractor has the majority of its authorised shares owned by citizens of Tanzania; any other firm is foreign, and foreign contractors are registered in Class One only.",
        "Type is about the work. Building contractors do residential, commercial and industrial buildings, single and multi-storey, with their external works. Specialist contractors work in named trades. Under the building heading, CRB's list includes concreting works, concrete treatment and repairs, waterproofing installations, paving, interior decoration and the conservation of old buildings.",
        "Class is about the size of contract a firm may take. Read the type and the class together: a high class in electrical work says nothing about a firm's standing as a building contractor.",
      ].join("\n\n"),
      table: {
        caption: "The three ways CRB sorts a contractor.",
        head: ["Sorted by", "Options", "Rule"],
        rows: [
          [
            "Category",
            "Local, foreign",
            "Local means majority of authorised shares owned by citizens. Foreign firms: Class One only",
          ],
          [
            "Type",
            "Building, civil, electrical, mechanical, specialist",
            "Shows what work the registration covers. Read it with the class",
          ],
          [
            "Class",
            "One to seven; specialists one to three",
            "Class One is the highest in all cases",
          ],
        ],
        source: "CRB, Registration of Contractors page, read 6 November 2026",
      },
    },
    {
      h2: "What are the CRB class limits?",
      body: [
        "A class limit is the most a single contract can be worth for a firm in that class, and CRB counts materials, labour and taxes in that value. Add all three before you compare a quote with the limit. A labour-only figure can look comfortably inside a class while the whole job is not.",
        "Class One has no limit, and the ceiling falls with each class below it. Building, civil, electrical, mechanical and specialist firms each have their own ceilings, so a firm's type matters as much as its class. CRB says limits are revised from time to time and publishes them as [a table on its website](https://www.crb.go.tz/storage/topnavimage/contractorstablea.JPG). Read the current one there before you rely on it.",
        "CRB also limits height for the three lowest building classes. Watch the Swahili count: ghorofa moja means one upper floor, which makes a two-storey building.",
      ].join("\n\n"),
      list: [
        "**Class Seven:** not allowed to build storey buildings.",
        "**Class Six:** restricted to two-storey buildings (ghorofa moja).",
        "**Class Five:** restricted to four-storey buildings (ghorofa tatu).",
      ],
    },
    {
      h2: "What a CRB class tells you, and what it does not",
      body: [
        "A class tells you the size of job a firm is allowed to take. It is not a review of its workmanship. The 2022 by-laws score a class out of 100 on staff, plant and equipment, office, safety gear, financial status and experience, and the weighting shifts as you go up. At Classes Six and Seven, financial status and experience score nothing. Experience only carries points at Class One, and then 10 out of 100.",
        "So a low class does not mean poor work, and a high class does not promise good work. Ask to see similar finished jobs, whatever the class.",
        "Two routes let a firm work beyond its own registration. The Board may, in exceptional circumstances and on application by clients, let a contractor work above its limit, restricted to one class above its current class. Joint ventures can be temporarily registered for the duration of the works, with each partner registered first. If a contractor says either applies to your job, ask for the paperwork.",
      ].join("\n\n"),
    },
    {
      h2: "How do I check a contractor before signing?",
      body: [
        "Search the firm on [CRB's contractor list](https://www.crb.go.tz/contractordetails), which is public and takes a company name, registration number or keyword. It ran to 269 pages of 50 rows when we read it, so use the search box rather than browsing the pages.",
        "Do not settle for a certificate handed across a table. CRB can cancel a registration, among other reasons for failing to pay the annual subscription for a year, failing to meet current criteria, or fraud in obtaining it. A certificate only shows what was true on the day it was issued. The list and a visit to a live site tell you far more. If a firm will not give you its registration number, treat that as your answer.",
      ].join("\n\n"),
      steps: [
        "Get the full company name and CRB registration number in writing.",
        "Search the list and compare the name, number, type, class, category, address and town with what you were given.",
        "Make sure the company on the list is the company named in your contract.",
        "Add materials, labour and taxes, then compare the total with the class limit for that type. Check the storey limit too.",
        "Visit one of the firm's live sites. CRB requires a signboard with the project information and a CRB registration sticker on it, a hoarded and secured site, protective equipment for every employee, an accident register, and fire-fighting and hygiene facilities.",
        "If an engineer is named on the job, ask for the registration number and category. The Engineers Registration Board registers professional, consulting and graduate engineers and engineering technicians.",
      ],
    },
    {
      h2: "When should you ask for a waterproofing or finishing specialist?",
      body: [
        'Ask whenever your main contractor plans to pass this work to someone else. The 2022 by-laws name waterproofing as its own specialist class: "Water Proofing Installation - Waterproofing of basement, roofs, walls, and swimming pools". The same schedule lists finishing and decorations, including painting and floor and wall finishing, and bathroom and kitchen remodelling.',
        "This matters because these trades fail quietly. A membrane applied too thin looks the same on the day as one applied properly, and the leak appears after the first rains, with tiles already on top. The people who hold the roller decide the result.",
        "So ask who will physically apply it: the main contractor's own team, or another firm? If it is another firm, run the same check on the list. Specialists have their own, lower ceilings, so compare a specialist's class with its own part of the work, not with your whole contract.",
      ].join("\n\n"),
    },
    {
      h2: "What should you ask a contractor about waterproofing, adhesives and materials?",
      body: [
        'Ask for named products and data sheets, and write the answers into the contract. A line such as "waterproofing as required" leaves the choice to whoever is buying on the day, and it gives you nothing to measure the work against.',
        "None of these questions needs an engineer's training, because the answers are printed on the data sheet. You are simply checking that the person pricing your job has read it. The Tanzania Bureau of Standards' compulsory list includes tile adhesives and grouts (the ISO 13007 text) and liquid membranes beneath tiling (ISO 13007-5), so asking for a class is a normal request. A standard number on a quote is not proof on its own: ask for the document behind it.",
      ].join("\n\n"),
      list: [
        "**Waterproofing system.** Which product, on which surfaces, how many coats, what final thickness? Compare the answer with the printed sheets on our [waterproofing line](/mapei/waterproofing). [Mapelastic Easy](/mapei/waterproofing/mapelastic-easy), for one, needs at least two coats and a final thickness of at least 2 mm.",
        "**Wait before tiling.** What does the sheet say, and does the programme allow it? The wait varies widely: 3 to 4 hours on Mapelastic AquaDefense, at least 5 days on Mapelastic Easy.",
        "**Rain plan.** Mapelastic Easy must be protected from rain for the first 24 hours. What will cover it, and who decides to stop work?",
        "**Tile adhesive class.** Which class for which tile and location? Our [tile adhesive line](/mapei/tile-adhesives-grouts) runs from C1 to C2TE S1. The class is printed on the sheet, so ask to see it.",
        "**Concrete repair.** If there is spalled concrete or exposed steel, what is the method and which [repair materials](/mapei/concrete-repair)? Painting over it is not a repair.",
        "**Resin floors.** What are the limits for moisture and air humidity? [Resin floor](/mapei/resin-flooring) sheets print them. Mapefloor FC 200 ME gives 4% substrate moisture and 75% air humidity.",
        "**Testing and changes.** Will wet rooms and roofs be flood-tested before finishes go on? Will any change of product be agreed with you in writing?",
      ],
    },
  ],
  faq: [
    {
      q: "How many CRB contractor classes are there?",
      a: "Seven for building, civil, electrical and mechanical contractors, and three for specialist contractors. Class One is the highest in every case. Foreign contractors are registered in Class One only.",
    },
    {
      q: "How do I check if a contractor is registered with CRB?",
      a: "Search CRB's public contractor list at crb.go.tz/contractordetails by company name, registration number or keyword. Compare the type and class shown with the job, and make sure the listed company is the one signing your contract.",
    },
    {
      q: "What can a Class Seven building contractor take on?",
      a: "Single contracts up to the lowest ceiling in CRB's table, counting materials, labour and taxes. Class Seven contractors are not allowed to build storey buildings. Read the current ceiling on CRB's website.",
    },
    {
      q: "Can you recommend a contractor?",
      a: "No. We supply construction chemicals and do not build, and we do not rank or recommend contractors. We can explain a data sheet and what a specification should say, and CRB's list will show you who is registered.",
    },
  ],
  sources: [
    {
      label: "CRB, Registration of Contractors",
      url: "https://www.crb.go.tz/CoreFunction/RegistrationOfContractors",
    },
    {
      label: "CRB, Regulation of Contractors",
      url: "https://www.crb.go.tz/CoreFunction/RegulationOfContractors",
    },
    {
      label: "CRB class limit table (image)",
      url: "https://www.crb.go.tz/storage/topnavimage/contractorstablea.JPG",
    },
    {
      label: "CRB, types of contractors (image)",
      url: "https://www.crb.go.tz/storage/topnavimage/TypesOfContractorsa.JPG",
    },
    {
      label: "CRB contractor list",
      url: "https://www.crb.go.tz/contractordetails",
    },
    {
      label: "CRB, Frequently asked questions",
      url: "https://www.crb.go.tz/FAQs",
    },
    {
      label: "CRB, Introduction",
      url: "https://www.crb.go.tz/AboutCRB/Introduction",
    },
    {
      label: "CRB, Legislation",
      url: "https://www.crb.go.tz/Legislation",
    },
    {
      label:
        "Contractors Registration (Amendment) By-Laws, 2022, Government Notice No. 744",
      url: "https://www.crb.go.tz/download/alllegislations/The%20Contractors%20Registration%20(Amendments)%20Bylaws%20(GN%20No.%20744%20of%202022).pdf",
    },
    {
      label: "Engineers Registration Board",
      url: "https://www.erb.go.tz/",
    },
    {
      label: "TBS, list of compulsory standards as of October 2026",
      url: "https://www.tbs.go.tz/uploads/text-editor/files/LIST%20OF%20COMPULSORY%20TANZANIA%20STANDARD_1793265667.pdf",
    },
    {
      label: "Mapelastic Easy technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-easy",
    },
    {
      label: "Mapelastic AquaDefense technical data sheet, Mapei",
      url: "/mapei/waterproofing/mapelastic-aquadefense",
    },
    {
      label: "Mapefloor FC 200 ME technical data sheet, Mapei",
      url: "/mapei/resin-flooring/mapefloor-fc-200-me",
    },
  ],
};
