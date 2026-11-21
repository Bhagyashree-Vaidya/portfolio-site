import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "tpg-bill-product-lens",
  "title": "TPG is taking BILL private with Corpay. What changes for the product?",
  "metaTitle": "TPG and Corpay Take BILL Private: A Product View",
  "description": "What the pending TPG and Corpay deal for BILL means for its product teams, where I'd look first as a PM, and how to get into payments platform work.",
  "date": "2026-12-08",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "payments",
    "smb software",
    "platforms"
  ],
  "body": [
    "For customers, probably not much yet. As of November 2026 the deal is pending, so the honest answer is that BILL's product should look the same next month as it does today. The interesting part is the ownership picture, because it hints at where product questions will come up later.",
    "Here are the facts. TPG, with Corpay as a minority partner, agreed to take BILL private. It was announced November 19, 2026, at about $6.0 billion, or $63.25 a share. BILL makes accounts payable and receivable automation for small and midsize businesses. TPG and Corpay also co-own AvidXchange, which works in a nearby space. That's all that's public. Nobody has said the two products will be combined, and I won't guess that they will.",
    "My opinion, as someone outside the company: if I were a PM there, I'd start by mapping which customers touch both sides of a payment. An AP tool and an AR tool meet when one business pays another. That's a network question, and networks reward the team that makes the second customer's experience easy. At Stallion Express we served 40,000+ merchants, and one lesson there was that every physical hand-off needs a tracking event. I'd want the same picture here before anyone writes a roadmap. Who sends money, who receives it, and where does it get stuck?",
    "If you want to work on problems like this as a PM, get comfortable with payment states. Pick an invoice tool you use and write down every status an invoice can have, from draft to paid to disputed. Then mark the one a small business owner would find most confusing. Doing that well, with real customers, is close to the daily work on a platform like this. Private ownership can mean longer planning horizons, so patience with slow, careful work helps too."
  ],
  "sources": [
    {
      "label": "Dealroom: BILL to go private in $6B buyout led by TPG with Corpay",
      "url": "https://dealroom.co/news/174514-bill-to-go-private-in-6b-buyout-led-by-tpg-with-corpay/"
    }
  ],
  "related": [
    {
      "href": "/expertise/ecommerce-omnichannel-product-management",
      "label": "Ecommerce and omnichannel product management"
    }
  ]
};

export default post;
