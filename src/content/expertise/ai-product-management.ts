import type { Doc } from "../types";

const doc: Doc = {
  kind: "expertise",
  slug: "ai-product-management",
  title: "AI product management: agents, evaluation and reliability",
  metaTitle: "AI Product Management: Agents and Evaluation",
  description:
    "What an AI product manager does for LLM agents: evaluation, quality metrics, groundedness, confidence thresholds and human review, with production evidence.",
  answer:
    "An AI product manager decides what an AI system should do, how its quality will be measured, and when it is safe to let it act. In practice that means defining failure categories, building evaluation sets with experts, setting release gates and confidence thresholds, and routing risky actions to people. The model is one part of the product; the harness, the metrics and the review paths around it decide whether customers can trust it.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["AI product management", "AI agents", "LLM evaluation", "Human-in-the-loop"],
  sections: [
    {
      id: "what-an-ai-pm-does",
      heading: "What does an AI product manager do?",
      blocks: [
        {
          type: "p",
          text: "The job overlaps with any product role: understand the customer problem, decide what to build, and measure whether it worked. What changes with AI is that the output is probabilistic. The same input can produce different answers, and a confident answer can be wrong. So a large share of the work moves from specifying features to specifying **acceptable behavior** and proving the system meets it.",
        },
        {
          type: "list",
          items: [
            "**Product strategy for agents.** Choose which tasks the agent should own, which it should only suggest, and which stay with people. Autonomy is a product decision, not a model setting.",
            "**Evaluation.** Define what good looks like, build a labeled reference set with subject-matter experts, and score the system against it on every change.",
            "**Quality metrics.** Pick a small set of metrics tied to customer harm: critical error rate, task completion, groundedness for generated text, and latency.",
            "**Reliability and safety.** Decide which checks run before an action executes, which run after, and what the system does when a check fails.",
            "**Human-in-the-loop design.** Set confidence thresholds and risk tiers that send uncertain or high-impact cases to a reviewer.",
            "**Experimentation and adoption.** Ship in phases, A/B test where possible, and track whether people actually use and trust the feature.",
          ],
        },
      ],
    },
    {
      id: "how-pms-evaluate-agents",
      heading: "How do product managers evaluate AI agents?",
      blocks: [
        {
          type: "p",
          text: "An agent is harder to evaluate than a chatbot because it takes actions across several steps. A wrong sentence is a quality problem; a wrong action can change a customer's live configuration. A workable evaluation approach has five parts:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "A **failure taxonomy**: named categories of things that go wrong, built from real traces rather than guesses.",
            "A **priority order**: rank categories by frequency × severity so the team fixes what hurts customers most.",
            "A **golden set**: inputs with expert-agreed correct outcomes, used as a regression suite.",
            "**Scalable scoring**: an LLM-as-judge or rule checks that score every action, with periodic human samples to check the judge for drift.",
            "**Release gates**: a policy that nothing ships unless it passes the evaluation suite.",
          ],
        },
        {
          type: "p",
          text: "The step-by-step version, including how to measure the gap between what an agent says it did and what it actually did, is in [How to evaluate an AI agent before you let it act](/insights/how-to-evaluate-ai-agents).",
        },
      ],
    },
    {
      id: "hallucination-and-groundedness",
      heading: "How do AI product managers measure hallucinations and groundedness?",
      blocks: [
        {
          type: "p",
          text: "**Hallucination** is output that is fluent but not supported by facts or by the source material the system was given. **Groundedness** (often called faithfulness in research) is a generation metric: of the claims in a response, what share can be traced to the retrieved context or provided documents. It says nothing about whether retrieval found the right documents in the first place. That is a separate retrieval metric, such as context relevance or recall.",
        },
        {
          type: "p",
          text: "Keeping the two apart matters for diagnosis. A low groundedness score points at the generation step (the model added claims). A grounded answer that is still wrong usually points at retrieval (the model faithfully summarized the wrong source).",
        },
        {
          type: "list",
          items: [
            "Break a response into individual claims, then check each claim against the provided context. Groundedness = supported claims ÷ total claims.",
            "Use an LLM-as-judge for coverage and a human-labeled sample to calibrate it. Track agreement between judge and humans over time.",
            "For agents, extend the idea to actions: does the agent's description of what it did match the system's record of what happened?",
            "Report rates against a clear denominator (per response, per claim or per action) so the number cannot drift quietly.",
          ],
        },
        {
          type: "callout",
          title: "Where my experience sits",
          text: "I have not owned a retrieval-augmented generation product with a published groundedness metric. The closest production work is on Wingz, where two of the top three failure categories were result misinterpretation (declaring a false winner) and multi-step context loss (the agent says it did X but did Y). Both are forms of unsupported output, measured on actions rather than on text.",
        },
      ],
    },
    {
      id: "confidence-and-human-review",
      heading: "Confidence thresholds and human-in-the-loop",
      blocks: [
        {
          type: "p",
          text: "Confidence thresholds decide which outputs the system handles alone and which go to a person. They work best combined with risk tiers: a low-risk action can proceed at moderate confidence, while a high-risk action may need review at any confidence. The design questions are what triggers review, who reviews, how fast, and how you prevent reviewers from approving everything by habit.",
        },
        {
          type: "p",
          text: "I cover queue design, override rates and how to graduate a workflow to more autonomy in [Designing human-in-the-loop AI systems](/insights/human-in-the-loop-ai-design).",
        },
      ],
    },
    {
      id: "owned-vs-studied",
      heading: "What I have owned in production vs. studied",
      blocks: [
        {
          type: "p",
          text: "This table separates work I owned, work I contributed to as part of a team, and topics I know from study rather than production.",
        },
        {
          type: "table",
          head: ["Area", "My role", "Evidence"],
          rows: [
            [
              "Agent failure taxonomy and severity thresholds",
              "**Owned** (VWO, Wingz)",
              "Taxonomy grew from 12 to 13 categories, ranked by frequency × severity. Critical agent errors fell from about 9% to under 3.5% of actions in two months (more than 61%). Other changes shipped in the same window, so this is not a controlled result.",
            ],
            [
              "Evaluation strategy and release-gate policy",
              "**Owned** (VWO, Wingz)",
              "Nothing shipped without passing the eval suite. A 600-pair golden set built with subject-matter experts; evaluation review time went from 1–2 days to under a minute.",
            ],
            [
              "LLM-as-judge scoring pipeline",
              "**Contributed** (engineering built the pipeline, model calls and infrastructure)",
              "Every agent action scored asynchronously, replacing manual sampling that covered under 1% of actions. Used daily by four product teams.",
            ],
            [
              "Pre-execution validation and human review of high-risk actions",
              "**Owned** (VWO, Wingz)",
              "Targeting validation moved to a hard check before an action executes. High-risk actions routed to human review. Paused a fully automatic launch; human approval shipped first.",
            ],
            [
              "Roadmap and reliability trade-offs",
              "**Owned** (VWO, Wingz)",
              "Redirected a planned model upgrade to an agent-harness reliability sprint, using a benchmark that separated model capability from multi-step execution failures.",
            ],
            [
              "LLM extraction with rules and human review",
              "**Contributed** (redesigned with the engineering lead, Unity Senior Health)",
              "Policy issuing time down 35% at 99.2% enrollment accuracy.",
            ],
            [
              "Chatbot governance (when AI resolves, when a human steps in)",
              "**Owned** QC/UAT framework (Unity Senior Health)",
              "Customer escalation tickets down 11%.",
            ],
            [
              "Adoption of an AI-adjacent product",
              "**Owned** (VWO)",
              "SQL analysis showed 58% of trial users never launched a test; an in-app checklist and 5-email onboarding sequence raised trial activation 16%.",
            ],
            [
              "Groundedness and hallucination metrics for RAG text",
              "**Studied**",
              "General method described above, with sources. No production metric of my own to report.",
            ],
            [
              "Model training and fine-tuning",
              "**Studied**",
              "Not my role. I worked on evaluation, thresholds and product decisions around models others built.",
            ],
            [
              "Bias in AI-assisted analysis",
              "**Studied** (graduate research)",
              "[Confirmation bias in LLM-based AI analytics tools](/research/confirmation-bias-ai), June 2026.",
            ],
          ],
        },
      ],
    },
    {
      id: "case-studies",
      heading: "Case studies with the full story",
      blocks: [
        {
          type: "list",
          items: [
            "[AI agent quality evaluation](/case-studies/ai-agent-quality-evaluation): how the Wingz failure taxonomy, golden set and release gates came together, including the category the first taxonomy missed.",
            "[Medicare plan discovery](/case-studies/medicare-plan-discovery): LLM extraction plus a rules engine plus human review in enrollment, and chatbot handoff rules.",
            "[Self-service cloud provisioning](/case-studies/self-service-cloud-provisioning): an earlier example of pre-deployment validation, applied to infrastructure rather than AI.",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is groundedness the same as accuracy?",
      a: "No. Groundedness measures whether a generated answer is supported by the context it was given. An answer can be fully grounded in the wrong document and still be inaccurate. Measure retrieval quality separately.",
    },
    {
      q: "What is the most useful first metric for an AI agent?",
      a: "A critical error rate with a fixed denominator, such as the share of all agent actions in a week that caused a customer-visible problem. It is simple to explain and maps directly to harm. Add category-level rates once you have a failure taxonomy.",
    },
    {
      q: "Can an LLM judge replace human reviewers?",
      a: "It can replace most manual sampling, but it needs human calibration. On Wingz, an LLM-as-judge scored every action and periodic human samples checked it for drift, with ambiguous cases sent to people.",
    },
    {
      q: "Do AI product managers need to code?",
      a: "They need enough technical depth to read traces, question evaluation design and reason about latency and cost. On my teams, engineering built the scoring pipelines and model integrations; I owned what was measured and what the release bar was.",
    },
  ],
  sources: [
    { label: "Zheng et al. (2023), Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (arXiv)", url: "https://arxiv.org/abs/2306.05685" },
    { label: "Es et al. (2023), RAGAS: Automated Evaluation of Retrieval Augmented Generation (arXiv)", url: "https://arxiv.org/abs/2309.15217" },
    { label: "Hallucination (artificial intelligence), Wikipedia", url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)" },
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { label: "Human-in-the-loop, Wikipedia", url: "https://en.wikipedia.org/wiki/Human-in-the-loop" },
  ],
  related: [
    { href: "/insights/how-to-evaluate-ai-agents", label: "How to evaluate an AI agent before you let it act" },
    { href: "/insights/human-in-the-loop-ai-design", label: "Designing human-in-the-loop AI systems" },
    { href: "/case-studies/ai-agent-quality-evaluation", label: "Case study: AI agent quality evaluation" },
    { href: "/case-studies/medicare-plan-discovery", label: "Case study: Medicare plan discovery" },
    { href: "/expertise/search-product-management", label: "Search product management" },
  ],
};

export default doc;
