import type { Doc } from "../types";

const doc: Doc = {
  kind: "case-study",
  slug: "medicare-plan-discovery",
  title: "Cutting Medicare plan-selection drop-off 32% at Unity Senior Health by showing 4 plans instead of 12",
  metaTitle: "Cutting Medicare plan drop-off by 32%",
  description:
    "How personalized ranking cut Medicare Advantage plan choices from 12 to 4, reduced drop-off 32% and lowered acquisition cost per enrollment from $210 to $172.",
  answer:
    "Medicare Advantage shoppers at Unity Senior Health were shown 12 plans at once, and many left without choosing. After 50+ interviews and funnel analysis, I reduced the comparison to 4 plans ranked on monthly premium, in-network doctors and drug coverage, with the ranking explained and a \"show all plans\" option. Four A/B tests later, plan-selection drop-off fell 32% and acquisition cost per enrollment fell from $210 to $172.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["Healthcare", "Personalization", "Ranking", "Compliance", "Human-in-the-loop"],
  facts: [
    { label: "Company", value: "Unity Senior Health" },
    { label: "Role", value: "Technical Member, Product (Contract)" },
    { label: "Dates", value: "Sep 2023 – Mar 2024 (remote, USA)" },
    {
      label: "Scope",
      value: "Consumer Medicare Advantage plan discovery and enrollment through the 2024 Annual Enrollment Period: recommendations, questionnaires, funnel analytics, compliance",
    },
  ],
  sections: [
    {
      id: "context",
      heading: "Business context",
      blocks: [
        {
          type: "p",
          text: "Unity Senior Health helps people shop for and enroll in Medicare Advantage plans. My work covered the 2024 Annual Enrollment Period (AEP), which starts on October 15. I owned the consumer plan discovery and enrollment journey: plan recommendations, personalized questionnaires, funnel analytics and compliance.",
        },
      ],
    },
    {
      id: "problem",
      heading: "Customer problem",
      blocks: [
        {
          type: "p",
          text: "Shoppers were shown 12 plans at once. Many left without choosing any of them. For an older adult comparing benefits that affect their health care and budget, twelve options side by side is a lot to take in.",
        },
      ],
    },
    {
      id: "discovery",
      heading: "Discovery and research",
      blocks: [
        {
          type: "p",
          text: "I combined more than 50 customer interviews with funnel analysis in Mixpanel. Three questions dominated what shoppers wanted to know:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Are my doctors in network?",
            "Are my drugs covered?",
            "What will I pay each month?",
          ],
        },
        {
          type: "p",
          text: "A second insight was emotional rather than informational: shoppers were afraid of making a choice they could not undo. That shaped where reassurance went in the flow, not just what the plan cards said.",
        },
      ],
    },
    {
      id: "constraints",
      heading: "Constraints",
      blocks: [
        {
          type: "list",
          items: [
            "**A fixed season.** AEP starts October 15, so the work had to be ready for a date that does not move.",
            "**Regulation.** The journey had to meet CMS, HIPAA and TCPA rules.",
            "**The audience.** Shoppers were older adults, which meant usability testing with that group, not assumptions about it.",
            "**Location data.** Plans depend on where the shopper lives, and the obvious signal for that turned out to be unreliable (see below).",
          ],
        },
      ],
    },
    {
      id: "decisions",
      heading: "Decisions and trade-offs",
      blocks: [
        {
          type: "p",
          text: "**Four plans, ranked and explained.** I reduced the comparison from 12 plans to 4, using personalized ranking on the three things shoppers asked about: monthly premium, in-network doctors and prescription drug coverage. The ranking criteria were explained on the page, and a \"show all plans\" option kept the full list one click away. Hiding plans without saying why would have traded one kind of distrust for another.",
        },
        {
          type: "p",
          text: "**Reassurance next to the decision.** Because the fear was about irreversibility, information about special enrollment and disenrollment rights was placed near the enrollment call to action, where the hesitation happened.",
        },
        {
          type: "p",
          text: "**Verified ZIP over IP.** IP address does not reliably identify which state a shopper is in, and in Medicare the state determines which plans exist. We prioritized verified ZIP and address data.",
        },
        {
          type: "p",
          text: "**\"Unknown\" is not \"out of network\".** When a doctor's network status was unknown, the interface must not make it look like the doctor was out of network. Those are different facts, and conflating them could push someone away from a plan that suits them.",
        },
      ],
    },
    {
      id: "execution",
      heading: "How we built and shipped it",
      blocks: [
        {
          type: "p",
          text: "**Staged rollout.** Changes went out in stages rather than all at once, with usability testing with older adults alongside.",
        },
        {
          type: "p",
          text: "**Enrollment workflow.** With the engineering lead, I redesigned the enrollment workflow around three parts: an LLM to extract information, a deterministic rules engine to apply the rules, and human-in-the-loop review. The LLM handled reading; the rules engine handled decisions that must be consistent; people handled what the system could not settle.",
        },
        {
          type: "p",
          text: "**Chatbot governance.** For the AI chatbot, we put in place a QC and UAT framework defining when the LLM could resolve a customer request on its own and when a human should step in.",
        },
        {
          type: "p",
          text: "**Compliance testing.** Compliance was built into testing with 40 test cases drawn from CMS, HIPAA and TCPA rules, and UAT ran with 6 agents across 12 pilot states.",
        },
      ],
    },
    {
      id: "validation",
      heading: "Experimentation and validation",
      blocks: [
        {
          type: "p",
          text: "The plan discovery changes were validated with 4 A/B tests covering questionnaire length, recommendation order and results-page layout. Usability testing with older adults ran alongside the experiments, and the staged rollout limited exposure while results came in.",
        },
      ],
    },
    {
      id: "outcomes",
      heading: "Outcomes",
      blocks: [
        {
          type: "metrics",
          items: [
            { value: "−32%", label: "Plan-selection drop-off" },
            { value: "$210 → $172", label: "Acquisition cost per enrollment" },
            { value: "12 → 4", label: "Plans shown for comparison", note: "With a \"show all plans\" option" },
            { value: "−35%", label: "Policy issuing time", note: "At 99.2% enrollment accuracy" },
            { value: "−11%", label: "Customer escalation tickets", note: "After chatbot QC/UAT framework" },
          ],
        },
        {
          type: "callout",
          title: "How to read these numbers",
          text: "The issuing-time and accuracy results came from an enrollment workflow I redesigned together with the engineering lead, so they are a shared result. Not everything improved: mobile conversion still trailed desktop.",
        },
      ],
    },
    {
      id: "lessons",
      heading: "What I learned",
      blocks: [
        {
          type: "p",
          text: "**Mobile and desktop disclaimers are not the same problem.** I assumed disclaimer placement could be identical on mobile and desktop. It could not, and fixing it cost about 5 days. After that, compliance joined design reviews earlier instead of reviewing finished screens.",
        },
        {
          type: "p",
          text: "**Check the data you think you have.** IP-based location seems like a reasonable default, but it does not reliably identify a shopper's state. In a product where the state determines which plans are available, location had to come from verified ZIP or address data.",
        },
        {
          type: "p",
          text: "**Fewer choices only work if people trust the cut.** Reducing 12 plans to 4 worked alongside explained ranking criteria and a visible way to see everything. The explanation is part of the feature, not decoration on it.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Why show 4 plans instead of all 12?",
      a: "Interviews and funnel data showed shoppers leaving without choosing when faced with 12 plans. Ranking on the three questions they cared about (premium, doctors, drugs) and showing 4, with the criteria explained and a \"show all plans\" option, cut plan-selection drop-off 32%.",
    },
    {
      q: "How did you use AI in a regulated enrollment workflow?",
      a: "With the engineering lead, I designed a workflow where an LLM extracts information, a deterministic rules engine applies the rules, and humans review what the system cannot settle. Policy issuing time fell 35% at 99.2% enrollment accuracy.",
    },
    {
      q: "What went wrong?",
      a: "I assumed disclaimer placement could match across mobile and desktop. It couldn't, which cost about 5 days, and we brought compliance into design reviews earlier afterward. Mobile conversion also still trailed desktop.",
    },
  ],
  sources: [
    { label: "Medicare Advantage (Wikipedia)", url: "https://en.wikipedia.org/wiki/Medicare_Advantage" },
    { label: "Human-in-the-loop (Wikipedia)", url: "https://en.wikipedia.org/wiki/Human-in-the-loop" },
  ],
  related: [
    { href: "/expertise/ai-product-management", label: "AI product management" },
    { href: "/insights/human-in-the-loop-ai-design", label: "Human-in-the-loop AI design" },
    { href: "/expertise/search-product-management", label: "Search, ranking and personalization" },
    { href: "/case-studies/ai-agent-quality-evaluation", label: "Making an AI agent reliable at VWO" },
  ],
};

export default doc;
