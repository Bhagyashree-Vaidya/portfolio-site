import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "adcorp-alliance-product-lens",
  "title": "What does a small labour-hire acquisition teach about scheduling products?",
  "metaTitle": "Adcorp and Alliance: Lessons for Scheduling Products",
  "description": "Adcorp's BLU Australia agreed to buy Alliance Workplace Solutions, a floriculture labour-hire firm. What a niche deal like this means for scheduling tools.",
  "date": "2027-01-16",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "scheduling",
    "workforce",
    "operations"
  ],
  "body": [
    "The deal itself is small. On November 10, 2026, Adcorp's BLU Australia agreed to acquire Alliance Workplace Solutions, which supplies labour to the floriculture industry, for AUD 4.3 million including earn-outs. That's the public part. The rest of this post is my opinion about what a niche add-on like this suggests for anyone building scheduling or workforce products.",
    "Floriculture work is seasonal and perishable. Demand spikes around a few dates, and flowers don't wait for a shift to be filled. In my view, that's exactly where generic scheduling tools struggle. They're built for steady weekly rosters, not for a crew that triples for two weeks and then shrinks. A staffing company that adds a niche like this inherits clients with very specific patterns, and its systems either handle those patterns or force workarounds in spreadsheets.",
    "If I were the PM on a scheduling product there, I'd start with the gap between forecast demand and actual filled shifts during the peaks. My closest experience is at Stallion Express, where a lesson I took away was that a right forecast can still fail on capacity. A vehicle isn't capacity without a driver. Workforce scheduling has the same trap: a forecast of how many people you need is only useful if the system knows who is available, qualified and close enough to get there. I'd look at what data exists for each of those before designing any screens.",
    "If you want to work on problems like this as a PM, spend time with operations people. Ask a scheduler to walk you through their worst week of the year and what they did by hand. Write down every workaround. Those workarounds are a better product spec than most feature requests, and they'll help you in any role that touches supply and demand."
  ],
  "sources": [
    {
      "label": "Staffing Industry Analysts: Adcorp to acquire Australian floriculture staffing business",
      "url": "https://www.staffingindustry.com/news/global-daily-news/adcorp-to-acquire-australian-floriculture-staffing-business"
    }
  ],
  "related": [
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    }
  ]
};

export default post;
