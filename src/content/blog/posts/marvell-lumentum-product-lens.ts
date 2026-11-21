import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "marvell-lumentum-product-lens",
  "title": "Marvell is buying Lumentum. What does it mean for AI data-center products?",
  "metaTitle": "Marvell and Lumentum: A Product View of AI Plumbing",
  "description": "The facts of Marvell's planned Lumentum deal, how a PM might think about custom silicon plus optics for AI data centers, and how to prepare for the role.",
  "date": "2027-02-09",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "ai infrastructure",
    "semiconductors",
    "data centers"
  ],
  "body": [
    "Here are the facts. Marvell agreed to acquire Lumentum, announced November 2, 2026, in an all-stock deal valued at about $115 billion in enterprise value. Lumentum makes optical lasers and transceivers, the parts that move data as light between machines. As of November 2026, the deal is pending and expected to close in the first half of 2028. Everything after this paragraph is my own reading, not something either company has said.",
    "Most people think about AI in terms of models and chips. A lot of the real limits sit in the plumbing: how fast data moves between processors and racks. Optics is a big part of that. From a product angle, a deal like this lets a company offer more of the path as one package. That can be simpler for a buyer. It can also make a buyer nervous about depending on one supplier for more of their stack, so the open question for a PM is how to show value without making customers feel locked in.",
    "If I were a PM there, I'd start with the long timeline. Close is expected in 2028, so the two companies operate separately for a long while. That's a good window to learn how customers actually buy each product today, who signs off, and what they test first. I've seen a version of this on software: at VWO, a benchmark separated model capability from multi-step execution failures, and it changed what we built next. Hardware buyers run their own benchmarks, and knowing what they measure tells you what the combined product has to prove.",
    "If you want to work on problems like this as a PM, learn to read a system as a chain of bottlenecks and ask which link limits the customer right now. You don't need to be an optics engineer. You do need to be able to explain, in plain words, why a faster link matters to someone training or serving a model."
  ],
  "sources": [
    {
      "label": "Light Reading: Marvell strikes $115B deal for Lumentum",
      "url": "https://lightreading.com/ai-machine-learning/marvell-strikes-115b-deal-for-lumentum"
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
