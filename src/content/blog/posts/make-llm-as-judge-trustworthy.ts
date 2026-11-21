import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "make-llm-as-judge-trustworthy",
  "title": "How do you make an LLM judge trustworthy?",
  "metaTitle": "How to Make an LLM Judge Trustworthy",
  "description": "How to make an LLM-as-judge evaluator worth trusting: calibrate it against human labels, keep a golden set, sample its output, and watch it for drift.",
  "date": "2026-12-13",
  "category": "pm-problem",
  "tags": [
    "llm evaluation",
    "ai agents",
    "golden set",
    "quality"
  ],
  "body": [
    "You make an LLM judge trustworthy the same way you'd trust a new reviewer: compare its calls against people you already trust, on cases where you know the answer, and keep checking. A judge that agrees with your humans most of the time, on the cases that matter, earns a place in the loop. One you never checked is just a second model with opinions.",
    "At VWO we built a 600-pair golden set for Wingz, our agent that sets up A/B tests. Each pair had a request and a known good answer, labeled by people. That set gave us something to calibrate any automated grader against. It also changed the pace of the work. Eval review went from 1 to 2 days to under a minute, which meant engineering could check a change the same afternoon instead of waiting for a review cycle.",
    "A few habits help. Measure agreement between the judge and human labels, and look at where they disagree, not just the overall rate. Judges often fail in patterns, like rewarding confident writing or missing a subtle wrong value. Give the judge a narrow question per check rather than one big score, since narrow questions are easier to verify. Keep sampling a small share of the judge's verdicts for human review every week, because the model you're judging changes and the judge can drift with it. Whoever owns quality should own that sample. If nobody owns it, it stops.",
    "This week, take fifty cases your judge has scored and have two people label them blind. Compare. If the judge disagrees with both people on the same kind of case, write that case type down, fix the prompt or split the check, and run it again. If you can't find two people with time to label fifty cases, that's useful to know too. The judge is only as good as the labels behind it."
  ],
  "related": [
    {
      "href": "/insights/how-to-evaluate-ai-agents",
      "label": "How to evaluate AI agents"
    }
  ]
};

export default post;
