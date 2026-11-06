import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb, breadcrumbJsonLd } from "@/components/ui/breadcrumb";
import { Container } from "@/components/ui/container";
import { siteConfig, whatsappLink } from "@/config/site";

const TITLE = "Contact Sahihi - Mapei Quotes & Supply, Dar es Salaam";
const DESCRIPTION =
  "Request a quotation for Mapei, Oriental Yuhong or X-Calibur products. WhatsApp, call or email Sahihi Construction Chemicals on Coca-Cola Road, Dar es Salaam.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/contact" },
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const { contact, address } = siteConfig;

// Each channel is a real link with its value as visible text.
const channels = [
  {
    label: "WhatsApp",
    value: contact.phone,
    href: whatsappLink(),
    external: true,
    note: "The fastest route to a quotation",
  },
  {
    label: "Telephone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s+/g, "")}`,
    note: "Sales and technical enquiries",
  },
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    note: "Send drawings, BOQs and specifications",
  },
  {
    label: "Visit",
    value: `${address.street}, ${address.city}`,
    href: siteConfig.mapsUrl,
    external: true,
    note: "Directions in Google Maps",
  },
];

export default function ContactPage() {
  return (
    <main className="theme-light bg-background text-foreground flex-1">
      <JsonLd
        graph={[
          breadcrumbJsonLd(crumbs),
          {
            "@type": "ContactPage",
            name: TITLE,
            description: DESCRIPTION,
            url: `${siteConfig.url}/contact`,
            about: { "@id": `${siteConfig.url}/#organization` },
          },
        ]}
      />

      <section className="pt-32 pb-14 sm:pt-40">
        <Container>
          <Breadcrumb items={crumbs} />
          <h1 className="font-display text-phi-4 mt-8 max-w-4xl tracking-tight text-balance">
            Send the job. Get the system.
          </h1>
          <p className="text-phi-1 mt-8 max-w-3xl leading-relaxed font-light">
            Product names and quantities are enough for a quotation. If you only
            know the problem, describe it: the surface, the area and where the
            water or the load comes from.
          </p>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <ul className="border-deep grid border-t sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <li
                key={channel.label}
                className="border-deep/15 border-b sm:odd:border-r lg:border-r lg:last:border-r-0"
              >
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:bg-surface/50 block h-full py-7 transition-colors sm:px-6 lg:first:pl-0"
                >
                  <span className="label-sh text-muted">{channel.label}</span>
                  <span className="font-display mt-4 block text-xl leading-snug break-words">
                    {channel.value}
                  </span>
                  <span className="text-muted mt-3 block text-sm leading-relaxed">
                    {channel.note}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.618fr]">
            <div>
              <p className="label-sh text-muted">Enquiry form</p>
              <h2 className="font-display text-phi-3 mt-5 tracking-tight">
                Write to us.
              </h2>
              <p className="text-muted mt-6 max-w-md leading-relaxed">
                Contractors, applicators, consultants, developers and resellers:
                tell us who you are and what the project needs.
              </p>
              <address className="border-deep/15 mt-10 border-t pt-6 leading-relaxed not-italic">
                {siteConfig.legalName}
                <br />
                {address.street}
                <br />
                {address.district}, {address.city}
                <br />
                {address.countryName}
              </address>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
