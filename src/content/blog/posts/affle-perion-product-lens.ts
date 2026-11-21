import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "affle-perion-product-lens",
  "title": "Affle is buying Perion. What does a PM on an ad platform watch?",
  "metaTitle": "Affle Buys Perion: What an Ad Platform PM Watches",
  "description": "What Affle's planned Perion deal could mean for an ad platform's product teams, the pricing model question I'd look at first, and how to get into ad tech.",
  "date": "2026-12-11",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "ad tech",
    "pricing",
    "platforms"
  ],
  "body": [
    "The first thing I'd watch is the pricing model. Affle sells on a cost-per-converted-user basis, and Perion is an omnichannel ad tech company. When a business that charges for outcomes buys one with different channels, the product question is how outcomes get measured across all of them.",
    "The facts, as of November 2026: Affle announced on November 1, 2026 that it will acquire Perion for about $420 million in cash. It's expected to close in early 2027, and the Perion brand stays. That's the extent of what's public. There's no announced plan for merging products, so everything below is my opinion.",
    "If I were a PM on either side, I'd start with the definition of a converted user. Paying per conversion only works if advertiser and platform agree on what counts, how it's tracked, and how long the window is. Across many channels, each with its own signals, that definition can drift. I've seen how much a clear definition helps. At VWO, trial activation went up 16% after SQL showed that 58% of trial users never launched a test. That was a different kind of product, but the lesson carries over. Until we defined activation precisely, we couldn't see the drop-off, let alone fix it. An outcome-priced business lives or dies on that kind of definition.",
    "If you want to work on problems like this as a PM, learn attribution well enough to explain it to a skeptical advertiser. Pick an ad you clicked recently and try to trace what the advertiser could actually know about you afterward. Write down where the signal breaks. That's the gap these teams spend their days on, and showing you can reason about it clearly is a good start for an ad tech interview."
  ],
  "sources": [
    {
      "label": "PR Newswire: Affle to acquire Perion",
      "url": "https://www.prnewswire.com/il/news-releases/affle-to-acquire-perion-to-scale-its-cpcu-business-across-developed-markets-302925764.html"
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
