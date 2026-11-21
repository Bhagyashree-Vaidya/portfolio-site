import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "palo-alto-applied-compute-product-lens",
  "title": "Palo Alto Networks is buying Applied Compute. Will security buyers tune AI models?",
  "metaTitle": "Palo Alto Networks and Applied Compute: A PM View",
  "description": "What Palo Alto Networks' planned Applied Compute deal means for security product teams, where I'd focus first as a PM, and how to prepare for this work.",
  "date": "2026-12-14",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "ai models",
    "security",
    "enterprise software"
  ],
  "body": [
    "Some will, but I'd expect most security buyers to want results, not a tuning console. As of November 2026, Palo Alto Networks plans to acquire Applied Compute, which works on post-training and inference for open-weight models. The product question is how much of that capability customers should see directly.",
    "The facts: the deal was announced November 18, 2026, for $4.5 billion in stock. Applied Compute focuses on post-training and inference for open-weight models. That's what has been made public. How it will be packaged inside Palo Alto's products hasn't been announced, so the rest of this is my opinion.",
    "If I were a PM there, I'd start by separating two things buyers might want: a better model, and a more reliable system around the model. They're easy to mix up. At VWO we had a model upgrade planned for Wingz, our agent that launches A/B tests. A benchmark showed that many failures came from multi-step execution, not from what the model could do. So we redirected that effort to an agent-harness reliability sprint. In security, I'd want the same split before promising anything. If a customer's problem is that alerts get handled inconsistently, tuning the model may help less than better checks around it. A security team also has to explain decisions to auditors, which pushes toward fewer knobs, clearer defaults, and good logs.",
    "If you want to work on problems like this as a PM, practice telling model problems apart from system problems. Take any AI feature you use and write down three failures you've seen. For each, guess whether a smarter model would fix it or whether better checks, data, or workflow would. Then ask yourself how you'd test that guess. That habit is most of what these roles need."
  ],
  "sources": [
    {
      "label": "SecurityWeek: Palo Alto Networks to buy AI startup Applied Compute",
      "url": "https://securityweek.com/palo-alto-networks-to-buy-ai-startup-applied-compute-for-4-5-billion"
    }
  ],
  "related": [
    {
      "href": "/expertise/ai-product-management",
      "label": "AI product management"
    }
  ]
};

export default post;
