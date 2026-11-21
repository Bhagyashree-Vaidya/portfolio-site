import type { Metadata } from "next";
import { jsonLdString, pageJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confirmation Bias in LLM Analytics Tools",
  description:
    "Shree Vaidya's June 2026 mixed-methods study of how LLM analytics tools can reinforce managers' existing beliefs, and a validation step that reduced it.",
  alternates: { canonical: "/research/confirmation-bias-ai" },
  openGraph: { url: "/research/confirmation-bias-ai", type: "article" },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            pageJsonLd({
              path: "/research/confirmation-bias-ai",
              name: "Confirmation Bias in LLM-Based AI Analytics Tools",
              type: "ScholarlyArticle",
              extra: {
                headline: "Confirmation Bias in LLM-Based AI Analytics Tools",
                datePublished: "2026-06",
                encoding: {
                  "@type": "MediaObject",
                  contentUrl: "https://www.shreevaidya.com/downloads/confirmation-bias-llm-analytics.pdf",
                  encodingFormat: "application/pdf",
                },
              },
            }),
          ),
        }}
      />
      {children}
    </>
  );
}
