"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

type Fbq = ((...args: unknown[]) => void) & { callMethod?: unknown };
declare global {
  interface Window {
    fbq?: Fbq;
  }
}

const RAW = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
/** Digits only: the ID is written into an inline script. */
const ID = /^\d{5,20}$/.test(RAW) ? RAW : undefined;

/**
 * Meta Pixel, off until NEXT_PUBLIC_META_PIXEL_ID is set (Vercel, production).
 * Loads after the page is idle (lazyOnload), so Lighthouse and the first screen
 * never wait for it. Events: PageView on every route, Contact on a WhatsApp,
 * phone or email click. No personal data is sent.
 */
export function MetaPixel() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (!ID) return;
    if (first.current) {
      first.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  useEffect(() => {
    if (!ID) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (/^(https:\/\/wa\.me|tel:|mailto:)/.test(href)) {
        window.fbq?.("track", "Contact", {
          method: href.startsWith("tel:")
            ? "phone"
            : href.startsWith("mailto:")
              ? "email"
              : "whatsapp",
        });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!ID) return null;
  return (
    <>
      <Script id="meta-pixel" strategy="lazyOnload">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${ID}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
