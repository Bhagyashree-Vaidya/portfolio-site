import type { Doc } from "../types";

const doc: Doc = {
  kind: "case-study",
  slug: "ai-agent-quality-evaluation",
  title: "Cutting AI agent errors by 61% at VWO with evaluation gates and human review",
  metaTitle: "Cutting AI agent errors 61% at VWO",
  description:
    "How I cut critical errors in VWO's Wingz AI agent from about 9% to under 3.5% of actions with a failure taxonomy, validation gates and LLM-as-judge evals.",
  answer:
    "Wingz, VWO's LLM-powered agent that recommends, configures and launches A/B tests, was making critical errors on about 9% of its actions. I built a failure taxonomy, ranked failures by frequency and severity, and set risk-based validation gates, human review for high-risk actions and an evaluation suite every release had to pass. Within two months critical errors fell to under 3.5% of actions, a reduction of more than 61%.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["Agentic AI", "AI evaluation", "Human-in-the-loop", "LLM-as-judge", "B2B SaaS"],
  facts: [
    { label: "Company", value: "VWO (Wingify), a B2B experimentation platform used by 3,000+ brands" },
    { label: "Role", value: "Senior Product Manager, AI Agents" },
    { label: "Dates", value: "Mar 2024 – Sep 2025 (remote, India)" },
    {
      label: "Scope",
      value:
        "Wingz end to end: a production agentic AI product automating 15K–20K test configuration actions per week for 40–50 enterprise accounts",
    },
  ],
  sections: [
    {
      id: "context",
      heading: "Business context",
      blocks: [
        {
          type: "p",
          text: "VWO is a B2B experimentation (A/B testing) platform used by more than 3,000 brands. I owned **Wingz**, VWO's production LLM-powered agent that recommends, configures and launches A/B tests. Wingz removed the need for customers to design control pages by hand, and at the time of this work it was automating 15,000 to 20,000 test configuration actions per week across 40 to 50 enterprise accounts.",
        },
        {
          type: "p",
          text: "I also drove the Wingz autonomous experimentation roadmap. The plan was a phased launch that combined confidence-based automation with human-in-the-loop workflows, so that the agent would earn more autonomy as it proved it could be trusted with it.",
        },
      ],
    },
    {
      id: "problem",
      heading: "Customer problem",
      blocks: [
        {
          type: "p",
          text: "An agent that only suggests can be wrong cheaply. An agent that configures and launches tests on a customer's live site cannot. About 9% of all Wingz actions in a given week were critical errors, measured against every action the agent took that week.",
        },
        {
          type: "p",
          text: "For an experimentation customer, these errors are not cosmetic. A test aimed at the wrong audience or page produces data about the wrong thing. A result read the wrong way can declare a false winner. Before Wingz could take on more autonomy, those failure rates had to come down, and we needed a way to know they had.",
        },
      ],
    },
    {
      id: "role",
      heading: "My role and what I owned",
      blocks: [
        {
          type: "p",
          text: "The split of ownership mattered on this project, so I want to be precise about it.",
        },
        {
          type: "list",
          items: [
            "**I owned:** the failure taxonomy, the severity thresholds, the evaluation strategy, roadmap priority, and the release-gate policy: nothing shipped without passing the evaluation suite.",
            "**Engineering owned:** the scoring pipeline, the model calls and the infrastructure.",
            "**Subject-matter experts** worked with us to build the evaluation set, including a 600-pair golden set.",
          ],
        },
      ],
    },
    {
      id: "discovery",
      heading: "Discovery and research",
      blocks: [
        {
          type: "p",
          text: "The first job was to turn \"the agent makes mistakes\" into something we could prioritize. I built a failure taxonomy that started with 12 categories and grew to 13. Each category was ranked by frequency multiplied by severity, so a rare but damaging failure could outrank a common but harmless one.",
        },
        {
          type: "p",
          text: "Three categories rose to the top:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Targeting misconfiguration:** the test is set up for the wrong audience or page.",
            "**Result misinterpretation:** the agent declares a false \"winner\".",
            "**Multi-step context loss:** the agent reports that it did one thing but actually did another.",
          ],
        },
        {
          type: "p",
          text: "The other finding was about how we measured quality at all. Before this work, quality checks relied on manual sampling. Each reviewer spent 4 to 5 hours a week on it, and the samples covered less than 1% of agent actions. That was too slow and too thin to steer a product taking thousands of actions a week.",
        },
      ],
    },
    {
      id: "decisions",
      heading: "Decisions and trade-offs",
      blocks: [
        {
          type: "list",
          items: [
            "**Re-verification only where risk was highest.** Engineering wanted every action re-verified. I limited re-verification to the top two risk categories to keep latency and cost under control.",
            "**Reliability over autonomy.** We accepted more latency and a lower fully autonomous completion rate in exchange for fewer critical errors. For a product acting on customer sites, I judged that the right trade.",
            "**A reliability sprint instead of a model upgrade.** A model upgrade was planned. I persuaded leadership to redirect that effort into a reliability sprint on the agent harness. The argument rested on a benchmark that separated model capability from multi-step execution failures. That split let us discuss the two kinds of failure separately, instead of treating every error as something a stronger model would fix.",
            "**Pausing the fully automatic launch.** Evaluations showed that some tests targeted the wrong page. I paused the fully automatic launch and shipped the human-approval version first.",
          ],
        },
      ],
    },
    {
      id: "execution",
      heading: "How we built and shipped it",
      blocks: [
        {
          type: "p",
          text: "**Risk-based validation gates.** We put validation gates on four areas: audience targeting, statistical accuracy, recommendation quality and visual integrity. The most important single change was moving targeting validation from after an action executed to a hard check **before** it executes. Catching a bad configuration after launch is a cleanup job; catching it before is a non-event.",
        },
        {
          type: "p",
          text: "**Human review for high-risk actions.** Actions in the highest-risk categories were routed to a human for review instead of executing automatically. This is what made the phased roadmap workable: autonomy could grow category by category as each one proved itself.",
        },
        {
          type: "p",
          text: "**Automated evaluation with an LLM judge.** An LLM-as-judge scored every agent action asynchronously, so scoring did not slow the agent down. Periodic human samples checked the judge for drift, and ambiguous cases went to humans. The 600-pair golden set built with subject-matter experts gave us a fixed reference for whether the judge and the agent were getting better or worse.",
        },
        {
          type: "p",
          text: "**A release gate.** The evaluation suite became a release gate under the policy I owned: no change shipped without passing it.",
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
            { value: ">61%", label: "Reduction in critical agent errors", note: "In two months" },
            { value: "~9% → <3.5%", label: "Critical errors as a share of all agent actions", note: "Denominator: all agent actions that week" },
            { value: "<1% → 100%", label: "Share of actions scored", note: "Manual sampling replaced by full-coverage automated scoring" },
            { value: "1–2 days → <1 min", label: "Evaluation review time" },
            { value: "4", label: "Product teams using the scoring daily" },
          ],
        },
        {
          type: "p",
          text: "Beyond the error rate, the evaluation system changed how teams worked. Manual sampling that cost each reviewer 4 to 5 hours a week was replaced by automated scoring of every action in under a minute, and four product teams used it daily.",
        },
        {
          type: "callout",
          title: "How to read these numbers",
          text: "This was not a controlled experiment. Other changes shipped in the same window, including targeting bug fixes and a prompt-template update. New accounts joined, and the mix of actions the agent took shifted. The evidence that my prioritization contributed is that the categories I prioritized fell faster than the ones I did not. I treat the 61% as a team result that my work shaped, not one I can claim alone.",
        },
      ],
    },
    {
      id: "lessons",
      heading: "What I learned",
      blocks: [
        {
          type: "p",
          text: "**My first taxonomy was incomplete.** It missed multi-step context loss entirely. An engineer caught it, and we re-scored the backlog with the new category in place. Once added, it ranked among the top three categories. The lesson I took is that a taxonomy is a hypothesis, and the people closest to the system should be able to challenge it easily.",
        },
        {
          type: "p",
          text: "**Not everything got solved.** Context loss was still the least mature category when I left in September 2025. Of the top three categories, it was the one with the least mature controls.",
        },
        {
          type: "p",
          text: "**Separate model capability from execution.** The benchmark that split model capability from multi-step execution failures was what changed leadership's mind about the model upgrade. Without that split, \"use a better model\" is the default answer to every agent problem, and it is often the wrong one.",
        },
        {
          type: "p",
          text: "During the same period I also worked on search ranking and relevance evaluation at VWO; that work is covered on the [search product management](/expertise/search-product-management) page.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What did you personally own versus the team?",
      a: "I owned the failure taxonomy, severity thresholds, evaluation strategy, roadmap priority and the release-gate policy. Engineering owned the scoring pipeline, model calls and infrastructure. The golden set was built with subject-matter experts.",
    },
    {
      q: "How do you know the error reduction came from your work?",
      a: "I can't prove it fully. Targeting bug fixes and a prompt-template update shipped in the same window, new accounts joined and the action mix shifted. The supporting evidence is that the categories I prioritized fell faster than the others. It was not a controlled experiment.",
    },
    {
      q: "Why not re-verify every agent action?",
      a: "Engineering proposed it. I limited re-verification to the top two risk categories because verifying everything would have added latency and cost across all actions, most of which were low risk.",
    },
    {
      q: "Why did you pause the fully automatic launch?",
      a: "Evaluations showed that some tests targeted the wrong page. We shipped the human-approval flow first so a person confirmed launches while the targeting problem was addressed.",
    },
  ],
  sources: [
    { label: "Zheng et al. (2023), Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (arXiv)", url: "https://arxiv.org/abs/2306.05685" },
    { label: "Human-in-the-loop (Wikipedia)", url: "https://en.wikipedia.org/wiki/Human-in-the-loop" },
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  ],
  related: [
    { href: "/expertise/ai-product-management", label: "AI product management" },
    { href: "/insights/how-to-evaluate-ai-agents", label: "How to evaluate AI agents" },
    { href: "/insights/human-in-the-loop-ai-design", label: "Human-in-the-loop AI design" },
    { href: "/expertise/search-product-management", label: "Search product management" },
  ],
};

export default doc;
