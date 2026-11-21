import type { Doc } from "../types";

const doc: Doc = {
  kind: "insight",
  slug: "human-in-the-loop-ai-design",
  title: "Designing human-in-the-loop AI systems",
  metaTitle: "Designing Human-in-the-Loop AI Systems",
  description:
    "How to design human-in-the-loop AI: when to route to people, risk tiers, confidence thresholds, review queues, override rates and graduating to autonomy.",
  answer:
    "A human-in-the-loop AI system lets the model handle routine cases and sends risky, uncertain or ambiguous ones to a person. Design it with three routing triggers (risk tier, confidence threshold, ambiguity), a review queue that shows reviewers the evidence they need, and metrics for escalation and override rates. Increase autonomy one category at a time, only when error rates stay below the agreed threshold.",
  published: "2026-11-21",
  updated: "2026-11-21",
  tags: ["Human-in-the-loop", "AI safety", "AI agents", "Workflow design"],
  sections: [
    {
      id: "definition",
      heading: "What is a human-in-the-loop AI system?",
      blocks: [
        {
          type: "p",
          text: "A **human-in-the-loop (HITL) AI system** is one where people review, correct or approve some of the model's outputs before they take effect. The goal is not to have humans check everything. It is to put human judgment exactly where the cost of a model error is high or where the model cannot tell whether it is right.",
        },
        {
          type: "p",
          text: "Done well, HITL lets a team ship an AI feature earlier and more safely. Done poorly, it creates a queue nobody can keep up with, or a review step that approves everything by habit. This guide covers the design choices in between, with examples from my work at VWO and Unity Senior Health.",
        },
      ],
    },
    {
      id: "when-to-route",
      heading: "When to route a case to a human",
      blocks: [
        {
          type: "p",
          text: "Use three independent triggers. Any one of them can send a case to review.",
        },
        {
          type: "table",
          head: ["Trigger", "Question it answers", "Example"],
          rows: [
            ["Risk tier", "How bad is it if this is wrong?", "An action that changes what live customers see is high-risk at any confidence."],
            ["Confidence threshold", "How sure is the system?", "An extraction with a low confidence score goes to review."],
            ["Ambiguity", "Is the input itself unclear or out of scope?", "A request the model was never designed to handle, or one where experts would disagree."],
          ],
        },
        {
          type: "p",
          text: "**Risk tiers** come first. Sort actions into tiers by customer, financial or regulatory impact, ideally using the same severity scale as your failure taxonomy (see [How to evaluate an AI agent](/insights/how-to-evaluate-ai-agents)). The top tier gets human approval regardless of confidence until you have evidence it is safe.",
        },
        {
          type: "p",
          text: "**Confidence thresholds** apply within the lower tiers. Model confidence scores are often poorly calibrated, so set thresholds empirically: on a labeled sample, find the score above which the error rate is acceptable for that tier. Revisit the threshold when the model or prompt changes.",
        },
        {
          type: "p",
          text: "**Ambiguity** catches cases that confidence misses. A model can be confidently wrong on inputs unlike its training or evaluation data. Deterministic rules that detect out-of-scope requests are often more reliable than the model's own uncertainty.",
        },
      ],
    },
    {
      id: "review-queue",
      heading: "Designing the review queue",
      blocks: [
        {
          type: "list",
          items: [
            "**Show the evidence, not just the answer.** Put the source document, the extracted field and the rule it triggered side by side so the reviewer can verify rather than guess.",
            "**Say why it was routed.** \"High-risk action\" and \"low confidence on field X\" lead to different checks.",
            "**Make correction cheap.** Editing a field should be as fast as approving it, or reviewers will approve to save time.",
            "**Set a service level.** Decide how long a case can wait and what happens when it times out. Defaulting to auto-approve on timeout defeats the purpose.",
            "**Capture the decision as data.** Every approval, edit and rejection is a label you can use to recalibrate thresholds and improve the model.",
          ],
        },
      ],
    },
    {
      id: "rubber-stamping",
      heading: "Avoiding rubber-stamping",
      blocks: [
        {
          type: "p",
          text: "**Automation bias** is the tendency to over-trust automated suggestions. In a review queue it shows up as rubber-stamping: reviewers approve nearly everything, especially when the model is usually right. The review step then adds latency without adding safety.",
        },
        {
          type: "list",
          items: [
            "**Seed known errors.** Insert a small number of cases with known mistakes and track whether reviewers catch them.",
            "**Watch approval speed.** Approvals that take far less time than it takes to read the evidence are a warning sign.",
            "**Keep the queue small.** If reviewers see hundreds of cases a day, tighten routing so they see fewer, riskier ones.",
            "**Rotate and calibrate reviewers.** Measure agreement between reviewers, for example with Cohen's kappa, and retrain when it drops.",
          ],
        },
      ],
    },
    {
      id: "metrics",
      heading: "Measuring escalation and override rates",
      blocks: [
        {
          type: "table",
          head: ["Metric", "Definition", "How to read it"],
          rows: [
            ["Escalation rate", "Cases routed to a human ÷ all cases", "Too high: thresholds too strict or model too weak. Too low: check that risky cases are not slipping through."],
            ["Override rate", "Cases where the reviewer changed or rejected the AI output ÷ reviewed cases", "Near zero can mean rubber-stamping or over-routing. High means the model is not ready for that tier."],
            ["Post-review error rate", "Errors found after human approval ÷ approved cases", "The real measure of whether review works."],
            ["Seeded-error catch rate", "Known errors caught ÷ known errors inserted", "Direct test of reviewer attention."],
            ["Time to decision", "Median and p95 time a case waits in the queue", "Determines whether HITL is workable at volume."],
          ],
        },
        {
          type: "p",
          text: "Read escalation and override rates together. A falling escalation rate is good news only if the post-review and downstream error rates stay flat or fall.",
        },
      ],
    },
    {
      id: "graduating",
      heading: "Graduating to autonomy",
      blocks: [
        {
          type: "p",
          text: "Autonomy should be granted per category, not per product. A workflow can be fully automatic for low-risk configuration while high-risk changes still need approval.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Shadow mode.** The AI proposes; a human does the work. Compare the two.",
            "**Approve-to-execute.** The AI does the work; a human approves before it takes effect.",
            "**Execute with sampling.** The AI acts alone; humans review a sample and all flagged cases.",
            "**Autonomous with monitoring.** The AI acts alone; automated checks and alerts catch regressions, with a fast path to roll back.",
          ],
        },
        {
          type: "p",
          text: "Move a category up a stage only when its error rate has held below the agreed threshold for a sustained period, pre-execution checks are in place, and mistakes can be detected and reversed. Move it back down when evaluations regress.",
        },
      ],
    },
    {
      id: "worked-examples",
      heading: "Worked examples from production",
      blocks: [
        {
          type: "p",
          text: "**Wingz at VWO.** Wingz is an LLM-powered agent that recommends, configures and launches A/B tests. I drove a phased roadmap that combined confidence-based automation with human-in-the-loop workflows. High-risk actions were routed to human review. When evaluations showed some tests targeted the wrong page, I paused a fully automatic launch, and human approval (stage 2 above) shipped first. We accepted more latency and a lower fully autonomous completion rate in exchange for reliability. Ambiguous cases in evaluation also went to humans rather than the LLM judge. The full story is in the [AI agent quality evaluation case study](/case-studies/ai-agent-quality-evaluation).",
        },
        {
          type: "p",
          text: "**Enrollment at Unity Senior Health.** With the engineering lead, I redesigned the Medicare enrollment workflow as LLM extraction plus a deterministic rules engine plus human-in-the-loop review. The design point is that the LLM did not have the final say on its own: deterministic rules and human review sat between extraction and an issued policy. Policy issuing time fell 35% at 99.2% enrollment accuracy.",
        },
        {
          type: "p",
          text: "**Chatbot handoff at Unity Senior Health.** I built a QC/UAT framework that defined when the LLM chatbot could resolve a customer request alone and when a human should step in. Customer escalation tickets fell 11%. Separately, compliance testing for the enrollment work used 40 test cases drawn from CMS, HIPAA and TCPA rules, with UAT involving 6 agents across 12 pilot states. More on that work is in the [Medicare plan discovery case study](/case-studies/medicare-plan-discovery).",
        },
        {
          type: "metrics",
          items: [
            { value: "−35%", label: "Policy issuing time (Unity)", note: "At 99.2% enrollment accuracy." },
            { value: "−11%", label: "Customer escalation tickets (Unity)", note: "After chatbot handoff rules." },
            { value: "Paused", label: "Fully automatic launch (Wingz)", note: "Human approval shipped first." },
          ],
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
            "**Routing on confidence alone.** A confident model can still take a high-impact wrong action. Risk tier should override confidence.",
            "**Treating fewer escalations as a pure win.** Check that the cases no longer escalated are actually resolved correctly.",
            "**Designing the queue last.** If reviewers lack evidence on screen, review becomes guessing or rubber-stamping.",
            "**Graduating the whole product at once.** Promote one category at a time and keep the ability to step back.",
            "**Leaving compliance out of design.** At Unity I assumed disclaimer placement could be identical on mobile and desktop. It could not, which cost about five days. Compliance joined design reviews earlier afterward.",
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
          text: "My examples come from a B2B experimentation agent and a regulated consumer enrollment flow. I do not have published override-rate or seeded-error figures from my own work; those metrics are recommendations, not results I can show. I did not build the underlying models or pipelines, and I have not designed HITL for real-time, safety-critical physical systems, where timing constraints change the design.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the difference between human-in-the-loop and human-on-the-loop?",
      a: "Human-in-the-loop means a person approves or corrects outputs before they take effect. Human-on-the-loop means the system acts on its own while a person monitors and can intervene. Many products move from the first to the second as evidence builds.",
    },
    {
      q: "How do I set a confidence threshold?",
      a: "Use a labeled sample. Plot error rate against the model's confidence score, and choose the score above which the error rate is acceptable for that risk tier. Recheck it whenever the model or prompt changes.",
    },
    {
      q: "What override rate is healthy?",
      a: "There is no single number. A rate near zero often signals rubber-stamping or over-routing, and a high rate signals the model is not ready. Track the trend and pair it with post-review error rates.",
    },
    {
      q: "Does human review slow everything down?",
      a: "It adds latency to the cases it touches. Keep review for high-risk and uncertain cases, and accept that cost explicitly, as we did on Wingz when we traded a lower autonomous completion rate for reliability.",
    },
  ],
  sources: [
    { label: "Human-in-the-loop, Wikipedia", url: "https://en.wikipedia.org/wiki/Human-in-the-loop" },
    { label: "Automation bias, Wikipedia", url: "https://en.wikipedia.org/wiki/Automation_bias" },
    { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    { label: "Cohen's kappa, Wikipedia", url: "https://en.wikipedia.org/wiki/Cohen%27s_kappa" },
  ],
  related: [
    { href: "/case-studies/ai-agent-quality-evaluation", label: "Case study: AI agent quality evaluation" },
    { href: "/case-studies/medicare-plan-discovery", label: "Case study: Medicare plan discovery" },
    { href: "/insights/how-to-evaluate-ai-agents", label: "How to evaluate an AI agent before you let it act" },
    { href: "/expertise/ai-product-management", label: "AI product management" },
  ],
};

export default doc;
