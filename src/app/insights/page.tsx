import { IndexPage, indexMetadata } from "@/components/content/routes";

export const metadata = indexMetadata(
  "insight",
  "Insights: AI Evaluation, Search, HITL",
  "Practical guides from Shree Vaidya on evaluating AI agents, choosing search ranking metrics and designing human-in-the-loop AI systems.",
);

export default function Page() {
  return (
    <IndexPage
      kind="insight"
      heading="Insights"
      intro="Practical guides drawn from shipping AI agents, search ranking and experimentation products. Each one says where my own experience ends and published research begins."
    />
  );
}
