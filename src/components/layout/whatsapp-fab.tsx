"use client";

/**
 * The WhatsApp floating button - the site's primary lead line, present on
 * every route, bottom-right. A dark disc with a light line-drawn glyph that
 * leads; the disc is a tight ring around it and never dominates the corner.
 * WhatsApp's own green stays off-palette. One tap opens the chat.
 */
import { usePathname } from "next/navigation";

import { siteConfig, whatsappLink } from "@/config/site";
import { isSwPath, whatsappLinkSw } from "@/config/sw-routes";

export function WhatsAppFab() {
  const sw = isSwPath(usePathname());
  return (
    <a
      href={
        sw
          ? whatsappLinkSw(
              siteConfig.contact.whatsapp,
              "bidhaa za kemikali za ujenzi",
            )
          : whatsappLink()
      }
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp - ${siteConfig.contact.phone}`}
      className="group on-dark fixed right-4 print:hidden bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-0 sm:right-7 sm:bottom-7"
    >
      <span className="bg-deep text-chalk flex size-14 items-center justify-center rounded-full shadow-2xl transition-transform duration-300 group-hover:scale-105 sm:size-16">
        <svg
          aria-hidden
          className="size-9 sm:size-11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
          <path d="M8.8 8.6c.2-.5.5-.5.7-.5h.6c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7.1.1.1.3 0 .4l-.4.6c-.1.2-.2.3 0 .6.2.3.8 1.1 1.6 1.7.9.7 1.5.9 1.8 1 .3.1.4 0 .5-.1l.6-.7c.2-.2.3-.2.6-.1l1.5.7c.3.1.4.2.4.4 0 .2 0 .9-.4 1.4-.4.5-1.3 1-1.8 1-.5.1-1.2.1-3-.6-2.4-1-4-3.4-4.1-3.6-.1-.2-1-1.3-1-2.6 0-1.2.6-1.8.8-2.1Z" />
        </svg>
      </span>
    </a>
  );
}
