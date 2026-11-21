import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "fox-roku-product-lens",
  "title": "Fox now owns Roku. What does a PM on that platform worry about?",
  "metaTitle": "Fox Owns Roku: What a Platform PM Watches",
  "description": "What Fox's completed Roku acquisition could mean for platform product teams, why ranking neutrality needs a metric, and how PMs can prepare for this work.",
  "date": "2026-12-03",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "streaming",
    "platforms",
    "ranking"
  ],
  "body": [
    "The deal is done. Fox completed its roughly $22 billion acquisition of Roku on November 6, 2026, and Roku now sits in a division with Tubi and Fox One. If I were a PM on Roku's platform, the first thing on my mind would be keeping the platform neutral in a way partners can actually check.",
    "Fox has pledged to keep Roku open to competitors' content. A pledge like that gets kept or broken in product decisions, every day. Home screen rows, search results and recommendations all decide what people see first. Each of those is a ranking, and every ranking has an owner who can tilt it, on purpose or by accident. At Stallion Express we ranked shipping carriers with a best-value default, and 58% of merchants picked the top option. Position explains part of that. I'd expect the top row on a TV home screen to have a similar pull, which is why **neutral needs a written definition and a metric**, or it drifts.",
    "The other public number is about $400 million of run-rate cost synergies that Fox expects within two years. I don't know where those savings will come from. If some of them come from shared systems across Roku, Tubi and Fox One, the PM question is which shared parts touch ranking or partner data, and how to keep them separate enough to back up the open-platform pledge. That's a conversation I'd want to have with engineering and legal early, before a shared system gets built and it's awkward to unwind.",
    "For PMs who want platform work like this: get good at writing rules for systems other companies depend on. Practice on something small. Take a marketplace you use, write down how you'd define fair placement for sellers, and pick one metric that would show if it slipped. The definition is usually the easy part. Choosing a metric you'd be willing to publish is where it gets hard."
  ],
  "sources": [
    {
      "label": "TheWrap: Fox completes $22 billion Roku acquisition",
      "url": "https://www.thewrap.com/industry-news/deals-ma/fox-completes-22-billion-roku-acquisition/"
    }
  ],
  "related": [
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for product managers"
    },
    {
      "href": "/case-studies/checkout-shipping-discovery",
      "label": "Case study: checkout shipping discovery"
    }
  ]
};

export default post;
