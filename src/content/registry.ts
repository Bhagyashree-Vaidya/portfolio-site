import type { Doc, DocKind } from "./types";
import case_studies_ai_agent_quality_evaluation from "./case-studies/ai-agent-quality-evaluation";
import case_studies_checkout_shipping_discovery from "./case-studies/checkout-shipping-discovery";
import case_studies_drop_off_network_and_shipping_assist from "./case-studies/drop-off-network-and-shipping-assist";
import case_studies_medicare_plan_discovery from "./case-studies/medicare-plan-discovery";
import case_studies_self_service_cloud_provisioning from "./case-studies/self-service-cloud-provisioning";
import expertise_ai_product_management from "./expertise/ai-product-management";
import expertise_search_product_management from "./expertise/search-product-management";
import expertise_ecommerce_omnichannel_product_management from "./expertise/ecommerce-omnichannel-product-management";
import insights_how_to_evaluate_ai_agents from "./insights/how-to-evaluate-ai-agents";
import insights_search_ranking_metrics_for_product_managers from "./insights/search-ranking-metrics-for-product-managers";
import insights_human_in_the_loop_ai_design from "./insights/human-in-the-loop-ai-design";

export const KIND_META: Record<DocKind, { base: string; label: string; singular: string }> = {
  "case-study": { base: "/case-studies", label: "Case studies", singular: "Case study" },
  expertise: { base: "/expertise", label: "Expertise", singular: "Expertise" },
  insight: { base: "/insights", label: "Insights", singular: "Insight" },
};

export const CASE_STUDIES: Doc[] = [case_studies_ai_agent_quality_evaluation, case_studies_checkout_shipping_discovery, case_studies_drop_off_network_and_shipping_assist, case_studies_medicare_plan_discovery, case_studies_self_service_cloud_provisioning];
export const EXPERTISE: Doc[] = [expertise_ai_product_management, expertise_search_product_management, expertise_ecommerce_omnichannel_product_management];
export const INSIGHTS: Doc[] = [insights_how_to_evaluate_ai_agents, insights_search_ranking_metrics_for_product_managers, insights_human_in_the_loop_ai_design];

export const DOCS_BY_KIND: Record<DocKind, Doc[]> = {
  "case-study": CASE_STUDIES,
  expertise: EXPERTISE,
  insight: INSIGHTS,
};

export const ALL_DOCS: Doc[] = [...CASE_STUDIES, ...EXPERTISE, ...INSIGHTS];

export const docPath = (d: Doc) => `${KIND_META[d.kind].base}/${d.slug}`;

export function getDoc(kind: DocKind, slug: string) {
  return DOCS_BY_KIND[kind].find((d) => d.slug === slug);
}
