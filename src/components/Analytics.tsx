"use client";

import Script from "next/script";
import { useEffect } from "react";

// GA4 loads only when NEXT_PUBLIC_GA_ID is set (e.g. "G-XXXXXXX" in Vercel env vars).
// Conversion events tracked: contact_email, resume_request / resume_download,
// linkedin_click, github_click, outbound_click. Each carries the page path and
// the link's on-page placement (data-placement or nearest section id).
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-05VQGLHBFH";

type Gtag = (...args: unknown[]) => void;

function classify(a: HTMLAnchorElement): string | null {
  const href = a.getAttribute("href") ?? "";
  if (href.startsWith("mailto:")) return /r%C3%A9sum%C3%A9|resume/i.test(href) ? "resume_request" : "contact_email";
  if (/\.pdf($|\?)/i.test(href) && /resume/i.test(href)) return "resume_download";
  if (href.includes("linkedin.com")) return "linkedin_click";
  if (href.includes("github.com")) return "github_click";
  if (/^https?:\/\//.test(href) && !href.includes("shreevaidya.com")) return "outbound_click";
  return null;
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const event = classify(a as HTMLAnchorElement);
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (!event || !gtag) return;
      gtag("event", event, {
        page_path: location.pathname,
        placement: a.getAttribute("data-placement") ?? a.closest("section,footer,header")?.id ?? "unknown",
        link_url: a.getAttribute("href"),
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GA_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
