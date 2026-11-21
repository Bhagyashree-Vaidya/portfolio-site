import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "fibt-dominion-product-lens",
  "title": "FIBT is buying Dominion Bank. How do you enter a new state with a digital product?",
  "metaTitle": "FIBT and Dominion Bank: Entering a New State",
  "description": "First International Bank & Trust agreed to acquire Dominion Bank in Dallas, its first move into Texas. What a PM thinks about when entering a new market.",
  "date": "2027-01-31",
  "category": "m-and-a",
  "tags": [
    "m&a",
    "banking",
    "market entry",
    "localization"
  ],
  "body": [
    "The facts: First International Bank & Trust announced around November 10, 2026 that it will acquire Dominion Bank in Dallas, with closing expected in the first quarter of 2027. It's FIBT's first entry into Texas. As of November 2026 the deal is pending. Everything after this is my opinion about entering a new state with a digital product, not anything the banks have announced.",
    "Entering a new state sounds like a sales question. In my view, it's just as much a product question. Rules, disclosures and product terms can differ by state, and customers in a new market won't know your brand at all. The digital experience has to work for people who arrive with zero trust. That means plain explanations, local proof like branches and staff, and no surprises in the fine print. An acquisition helps because it brings existing customers and a local name, but those customers also judge you against the bank they chose.",
    "If I were the PM, I'd start with how the product decides which state rules apply to someone. My closest experience is from Unity Senior Health, where Medicare plans depend on where you live. IP address doesn't reliably tell you someone's state, so we prioritized verified ZIP or address. For a bank, getting location wrong could mean showing the wrong rates or disclosures. I'd also bring compliance into design reviews early. That lesson came from Unity, where disclosure placement couldn't match across mobile and desktop and it cost about five days.",
    "If you want to work on problems like this as a PM, learn how regulation shapes product in one industry. Pick a product you use and find the state-specific terms in its disclosures. Ask how the product knows which ones to show you. That question opens up most of the real work in market entry, and few PMs ask it early enough."
  ],
  "sources": [
    {
      "label": "FinTech Futures: FIBT expands into Texas with Dominion Bank acquisition",
      "url": "https://www.fintechfutures.com/m-a/fibt-expands-into-texas-with-dominion-bank-acquisition"
    }
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
