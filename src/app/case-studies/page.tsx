import { IndexPage, indexMetadata } from "@/components/content/routes";

export const metadata = indexMetadata(
  "case-study",
  "Product Case Studies",
  "Product case studies from Shree Vaidya's work on AI agents, search and ranking, checkout, shipping networks, Medicare plan discovery and cloud self-service.",
);

export default function Page() {
  return (
    <IndexPage
      kind="case-study"
      heading="Case studies"
      intro="How I approached real product problems at VWO, Stallion Express, Unity Senior Health and BrandingArc: the context, my role, the decisions and trade-offs, and what changed. Team outcomes are described as team outcomes."
    />
  );
}
