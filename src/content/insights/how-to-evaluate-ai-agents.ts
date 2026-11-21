import type { Doc } from "../types";

const doc: Doc = {
  kind: "insight",
  slug: "how-to-evaluate-ai-agents",
  title: "How to evaluate an AI agent before you let it act",
  metaTitle: "How to Evaluate an AI Agent Before It Acts",
  description:
    "A practical guide to AI agent evaluation: failure taxonomies, frequency × severity, golden sets, LLM judges with human calibration, and release gates.",
  answer:
    "Evaluate an AI agent by the actions it takes, not only the text it writes. Build a failure taxonomy from real traces, rank categories by frequency × severity, create an expert-labeled golden set, score every action with an LLM judge calibrated against human reviewers, and block releases that fail. For high-risk actions, validate before execution and measure the gap between what the agent says it did and what happened.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["AI agents", "LLM evaluation", "Release gates", "AI quality"],
  sections: [
    {
      id: "definition",
      heading: "What is AI agent evaluation?",
      blocks: [
        {
          type: "p",
          text: "**AI agent evaluation** is the practice of measuring whether an agent completes tasks correctly and safely across multiple steps, including the actions it takes in other systems. It differs from evaluating a chatbot in one important way: the unit of quality is the **action**, not the response. An agent that writes a perfect explanation and then changes the wrong setting has failed.",
        },
        {
          type: "p",
          text: "This guide is a working method, not a benchmark survey. It draws on what I did as the product manager for Wingz, VWO's production LLM-powered agent that recommends, configures and launches A/B tests. For a broader overview of the AI PM role, see [AI product management](/expertise/ai-product-management).",
        },
      ],
    },
    {
      id: "framework",
      heading: "The framework: six steps from traces to release gates",
      blocks: [
        {
          type: "list",
          ordered: true,
          items: [
            "**Collect real traces.** Pull a sample of complete agent runs: inputs, intermediate steps, tool calls, final state. Synthetic examples come later.",
            "**Build a failure taxonomy.** Group what went wrong into named, mutually understandable categories. Expect it to change.",
            "**Rank by frequency × severity.** A rare failure that corrupts customer data can outrank a common cosmetic one.",
            "**Create a golden set.** Inputs with expert-agreed correct outcomes, covering every high-severity category.",
            "**Score at scale, calibrate with humans.** An LLM-as-judge or rule checks score every action; humans check the judge.",
            "**Gate releases and pre-validate risky actions.** Nothing ships without passing; the riskiest checks run before execution, not after.",
          ],
        },
      ],
    },
    {
      id: "failure-taxonomy",
      heading: "Step 1–3: build and rank a failure taxonomy",
      blocks: [
        {
          type: "p",
          text: "A taxonomy turns \"the agent is sometimes wrong\" into a list you can prioritize. Good categories describe the **failure**, not the cause: \"targeted the wrong audience\" rather than \"prompt issue\". Each category needs a one-line definition and two or three examples so reviewers label consistently.",
        },
        {
          type: "p",
          text: "Then score each category. Frequency is the share of actions in that category over a fixed window. Severity is a rating of customer harm, decided with domain experts. Multiply them to get a priority score, and revisit both numbers each cycle.",
        },
        {
          type: "table",
          caption: "Illustrative scoring sheet. Category names are from Wingz; the scores here are examples, not production data.",
          head: ["Category", "Frequency (1–5)", "Severity (1–5)", "Priority"],
          rows: [
            ["Targeting misconfiguration", "4", "5", "20"],
            ["Result misinterpretation (false winner)", "3", "5", "15"],
            ["Multi-step context loss (says X, does Y)", "3", "4", "12"],
            ["Cosmetic copy issue", "5", "1", "5"],
          ],
        },
        {
          type: "p",
          text: "On Wingz the taxonomy started at 12 categories and grew to 13. The top three by frequency × severity were targeting misconfiguration, result misinterpretation (declaring a false winner) and multi-step context loss.",
        },
      ],
    },
    {
      id: "golden-sets-and-judges",
      heading: "Step 4–5: golden sets, LLM-as-judge and human calibration",
      blocks: [
        {
          type: "p",
          text: "A **golden set** is a fixed collection of inputs with agreed correct outcomes. Build it with subject-matter experts, not only engineers, because experts know which mistakes matter. Weight it toward high-severity categories. Version it, and add every new failure you find in production.",
        },
        {
          type: "p",
          text: "Manual review does not scale. An **LLM-as-judge** reads each action with a rubric and returns a score and a reason. Research has found strong LLM judges can agree with human preferences at rates comparable to agreement between humans, but also documents biases such as favoring certain positions or longer answers. So the judge needs a check.",
        },
        {
          type: "p",
          text: "Calibrate with **Cohen's kappa**, which measures agreement between two raters after removing agreement expected by chance: κ = (observed agreement − chance agreement) ÷ (1 − chance agreement). If a judge and a human agree on 85% of items and chance agreement is 50%, κ = 0.70. Track kappa between the judge and human samples over time; a drop means drift. Send items the judge marks as ambiguous straight to people.",
        },
      ],
    },
    {
      id: "release-gates",
      heading: "Step 6: release gates and pre-execution validation",
      blocks: [
        {
          type: "p",
          text: "A **release gate** is a rule that a change cannot ship unless it passes the evaluation suite. It sounds obvious. The hard part is agreeing on the threshold and holding it when a launch date is close. Write the policy down before you need it.",
        },
        {
          type: "p",
          text: "**Pre-execution validation** matters more for agents than for any other AI product. A check that runs after an action has already changed a live system only tells you about the damage. For the highest-severity categories, run a hard check before the action executes and block or route it to a person if it fails.",
        },
        {
          type: "p",
          text: "Re-verification has a cost in latency and compute. Apply it where severity justifies it rather than everywhere.",
        },
      ],
    },
    {
      id: "say-do-gap",
      heading: "Measuring the say-do gap",
      blocks: [
        {
          type: "p",
          text: "The **say-do gap** is the difference between what an agent reports it did and what the system of record shows. It is the agent version of hallucination: the summary is fluent and wrong about the agent's own actions. It is easy to miss, because the agent's own log looks fine.",
        },
        {
          type: "list",
          items: [
            "Capture the agent's claimed actions as structured data, not just prose.",
            "After the run, read the actual state from the target system (configuration, records, settings).",
            "Compare claimed versus actual, field by field. A mismatch is a say-do failure.",
            "Report it as a rate per multi-step run, because it compounds with the number of steps.",
          ],
        },
      ],
    },
    {
      id: "metrics",
      heading: "Metrics to track",
      blocks: [
        {
          type: "table",
          head: ["Metric", "Definition", "Why it matters"],
          rows: [
            ["Critical error rate", "Critical failures ÷ all agent actions in the period", "Headline measure of customer harm"],
            ["Category error rates", "Failures per taxonomy category ÷ all actions", "Shows whether prioritized work is landing"],
            ["Judge–human agreement", "Cohen's kappa on a human-reviewed sample", "Detects judge drift"],
            ["Say-do mismatch rate", "Runs where claimed and actual state differ ÷ multi-step runs", "Catches context loss"],
            ["Autonomous completion rate", "Tasks finished with no human step ÷ all tasks", "Tracks progress toward autonomy, read with error rate"],
            ["Evaluation latency", "Time from change to scored results", "Determines whether teams actually use the evals"],
          ],
        },
        {
          type: "p",
          text: "Always state the denominator. \"Errors fell\" means little if the action mix changed in the same period.",
        },
      ],
    },
    {
      id: "worked-example",
      heading: "Worked example: Wingz at VWO",
      blocks: [
        {
          type: "p",
          text: "Wingz automated 15K–20K test configuration actions per week for 40–50 enterprise accounts. I owned the failure taxonomy, severity thresholds, evaluation strategy, roadmap priority and the release-gate policy. Engineering owned the scoring pipeline, model calls and infrastructure.",
        },
        {
          type: "metrics",
          items: [
            { value: "~9% → <3.5%", label: "Critical agent errors, share of all actions", note: "More than 61% reduction in two months. Not a controlled experiment." },
            { value: "<1% → every action", label: "Coverage of agent actions scored", note: "Manual sampling took 4–5 hours a week per reviewer. Automated scoring runs in under a minute and is used daily by four product teams." },
            { value: "600 pairs", label: "Golden set built with subject-matter experts", note: "Evaluation review time went from 1–2 days to under a minute." },
          ],
        },
        {
          type: "list",
          items: [
            "**Pre-execution check.** Targeting validation moved to a hard check before an action executes, rather than after.",
            "**Scoped re-verification.** Engineering wanted re-verification on every action. I limited it to the top two risk categories to control latency and cost.",
            "**Reliability over autonomy.** We accepted more latency and a lower fully autonomous completion rate in exchange for reliability. High-risk actions went to human review.",
            "**Paused auto-launch.** Evaluations showed some tests targeted the wrong page, so I paused a fully automatic launch. Human approval shipped first.",
            "**Harness before model.** A benchmark that separated model capability from multi-step execution failures persuaded leadership to redirect a planned model upgrade to an agent-harness reliability sprint.",
          ],
        },
        {
          type: "callout",
          title: "Attribution caveats",
          text: "Other changes shipped in the same window, including targeting bug fixes and a prompt-template update. New accounts joined and the action mix shifted. The evidence for the evaluation work is that the categories I prioritized fell faster than the ones I did not.",
        },
        {
          type: "p",
          text: "The full story is in the [AI agent quality evaluation case study](/case-studies/ai-agent-quality-evaluation).",
        },
      ],
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      blocks: [
        {
          type: "list",
          items: [
            "**Treating the first taxonomy as final.** My first Wingz taxonomy missed multi-step context loss. An engineer caught it and we re-scored the backlog. It was still the least mature category when I left in September 2025.",
            "**Upgrading the model to fix a harness problem.** Many agent failures come from state handling between steps, not model capability. Measure them separately.",
            "**Validating after the fact.** Post-hoc checks are useful for reporting but do not protect customers from the riskiest actions.",
            "**Trusting the judge without calibration.** An uncalibrated LLM judge can drift quietly and produce confident, wrong scores.",
            "**Reporting a rate without a stable denominator.** Shifts in volume or action mix can create or hide improvements.",
          ],
        },
      ],
    },
    {
      id: "limits",
      heading: "Limits of this guide",
      blocks: [
        {
          type: "p",
          text: "This method comes from one production agent in a B2B experimentation product, where actions are configuration changes. I did not build the scoring pipeline, and the error reduction was not measured in a controlled experiment. I have not applied this to agents that handle payments or open-ended web browsing, where severity scales and review paths would differ.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "How big should a golden set be?",
      a: "Big enough to cover every high-severity failure category with several examples each, and small enough that experts can maintain it. On Wingz it was 600 pairs. Coverage of risky categories matters more than raw size.",
    },
    {
      q: "Is LLM-as-judge reliable enough for release decisions?",
      a: "Only with calibration. Check agreement against human samples on a schedule, route ambiguous cases to people, and keep the judge's rubric under version control like any other test.",
    },
    {
      q: "What is the difference between model evaluation and agent evaluation?",
      a: "Model evaluation measures a model's capability on fixed tasks. Agent evaluation measures the whole system, including tools, memory and state between steps. An agent can fail on a task the model handles well in isolation.",
    },
    {
      q: "When is an agent ready to act without human approval?",
      a: "When a category's error rate is consistently below the threshold you agreed for its severity, pre-execution checks are in place, and you can detect and reverse mistakes quickly. See the guide on human-in-the-loop design for graduation criteria.",
    },
  ],
  sources: [
    { label: "Zheng et al. (2023), Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (arXiv)", url: "https://arxiv.org/abs/2306.05685" },
    { label: "Liu et al. (2023), AgentBench: Evaluating LLMs as Agents (arXiv)", url: "https://arxiv.org/abs/2308.03688" },
    { label: "Cohen's kappa, Wikipedia", url: "https://en.wikipedia.org/wiki/Cohen%27s_kappa" },
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
  ],
  related: [
    { href: "/case-studies/ai-agent-quality-evaluation", label: "Case study: AI agent quality evaluation" },
    { href: "/insights/human-in-the-loop-ai-design", label: "Designing human-in-the-loop AI systems" },
    { href: "/expertise/ai-product-management", label: "AI product management" },
    { href: "/research/confirmation-bias-ai", label: "Research: Confirmation bias in LLM-based AI analytics tools" },
  ],
};

export default doc;
