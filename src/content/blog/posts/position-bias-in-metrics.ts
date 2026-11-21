import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "position-bias-in-metrics",
  "title": "Is your top result good, or just first?",
  "metaTitle": "Position Bias: Is Your Top Result Good or Just First?",
  "description": "How to tell whether your top result is actually good or just benefits from being first: position bias in clicks, and how interleaving and holdouts help.",
  "date": "2027-01-05",
  "category": "pm-problem",
  "tags": [
    "position bias",
    "ranking",
    "metrics",
    "experimentation"
  ],
  "body": [
    "Often you can't tell from clicks alone. People pick the first option partly because it's first. So a high click or pick rate on your top result tells you the position is powerful, and only hints at whether the result is good. To separate the two, you need to change positions on purpose.",
    "At Stallion Express, 58% of merchants picked the top-ranked shipping option in our rate comparison. It would be easy to read that as proof the best-value ranking was right. I wouldn't read it that way, because position helps explain the number. Some share of those merchants would have picked whatever was on top. What the number does show is that the default carried a lot of weight, which raises the stakes on getting it right.",
    "There are a few ways to get closer to the truth. Interleaving mixes results from two rankings into one list and sees which ranking's items people choose. It's sensitive and needs less traffic than a full A/B test. A holdout keeps a small group on an older or random order, so you can see how choices change when the ranking does. You can also randomize the order of the top two or three results for a small share of traffic and measure how much picks follow position. That gives you a rough sense of how much position bias you're dealing with. Each method has a cost. Randomizing order, even briefly, gives some customers a worse experience, so keep the share small and the test short.",
    "This week, check whether your metrics separate position from preference at all. If your top result's pick rate is your main quality signal, add one test that varies the order for a small slice of traffic. Compare what people pick when the same option sits in second place. The gap between those numbers is the part of your success that comes from being first."
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
