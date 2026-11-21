import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "workday-honeydew-product-lens",
  "title": "Workday is buying Honeydew. Why a semantic layer matters for AI agents",
  "metaTitle": "Workday and Honeydew: Why Semantic Layers Matter",
  "description": "What Workday's planned Honeydew deal says about AI agents and governed metrics, where I'd focus first as a PM, and how to build skills for this work.",
  "date": "2026-12-07",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "ai agents",
    "semantic layer",
    "business intelligence"
  ],
  "body": [
    "A semantic layer is a shared definition of what your metrics mean. It matters for AI agents because an agent asked for a number will compute one, and without an agreed definition, two agents (or an agent and a dashboard) can give two different answers. On November 18, 2026, Workday announced its intent to acquire Honeydew, a semantic layer for AI and BI. The deal is expected to close by January 2027, and the price wasn't disclosed.",
    "The stated plan is to combine Honeydew with Workday Data Cloud so AI agents and BI tools give consistent answers from governed metric definitions. If I were on the team, I'd look first at **who owns each definition**. A metric like headcount sounds simple until finance, HR and a hiring manager each count contractors differently. Software can store a definition. Getting people to agree on it is the harder part, and the product has to make that agreement easy to record and hard to quietly bypass.",
    "I've seen why this matters from the agent side. At VWO, false \"winners\" were one of the top three failure categories for Wingz, our A/B testing agent. Whatever the cause in a given case, the lesson I took was that an agent stating a wrong result with confidence does more damage than one that says it isn't sure. Consistent definitions won't fix every failure like that, but they remove one way for an agent to be confidently wrong, which is worth a lot when people act on the answer.",
    "For PMs who want this kind of work: learn how metrics get defined and governed. Displaying them is the easy part. Pick one metric your company reports and trace it from the raw table to the slide where it shows up. Write down every place someone made a choice along the way, like a filter or a date cutoff. That exercise covers a lot of what a semantic layer product has to handle, and it'll make you better at reading anyone's dashboard."
  ],
  "sources": [
    {
      "label": "Workday: Workday announces intent to acquire Honeydew",
      "url": "https://newsroom.workday.com/2026-11-18-Workday-Announces-Intent-to-Acquire-Honeydew,-a-Semantic-Layer-for-AI-and-Business-Intelligence"
    }
  ],
  "related": [
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    },
    {
      "href": "/case-studies/ai-agent-quality-evaluation",
      "label": "Case study: AI agent quality evaluation"
    }
  ]
};

export default post;
