import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "ip-location-is-not-enough",
  "title": "Why \"we know where the user is\" is often wrong, and what to do about it",
  "metaTitle": "Why IP Location Isn't Enough, and What to Do",
  "description": "Why IP-based location is a weak signal for pricing and eligibility, when to ask for a verified ZIP or address, and how to audit where your product guesses.",
  "date": "2026-12-05",
  "category": "pm-problem",
  "tags": [
    "location",
    "personalization",
    "data quality",
    "regulated products"
  ],
  "body": [
    "IP-based location is a guess. For anything where location changes the answer, like pricing, eligibility or what's legally available, a guess isn't good enough. Use it as a starting hint at most, and ask for a verified ZIP or address before you show anything that depends on it.",
    "This came up at Unity Senior Health in Medicare plan discovery. Plans depend on where you live, and IP address doesn't reliably tell you the state. So we prioritized a verified ZIP or address. Getting it wrong would mean showing someone plans they can't actually buy, which is a bad start to a conversation about their health coverage.",
    "Think about who pays for a wrong guess. The customer pays in confusion and wasted time. The business pays in drop-off and support calls, and in a regulated space, possibly in compliance trouble too. The trade-off is friction, since asking for a ZIP is one more field. **I'd rather add one field than show a confident wrong answer.** A related rule from the same project: \"unknown\" network status must never look like \"out of network.\" It's the same idea. When you don't know something, say so plainly, and don't let the design imply a fact you don't have. Engineering can tell you how good the inferred signal is. Product decides where that's good enough.",
    "On Monday, list every place your product uses inferred location and ask what happens if it's wrong. Where the answer is \"they see the wrong price or the wrong options,\" switch to asking. Where it's \"the weather widget is a town off,\" leave it alone. Also look at your traffic from VPNs and mobile networks, since those are common reasons IP location misses. You'll probably find one or two places that should have been asking all along."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
