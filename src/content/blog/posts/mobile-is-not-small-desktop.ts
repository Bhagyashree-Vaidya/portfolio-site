import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "mobile-is-not-small-desktop",
  "title": "Why do mobile and desktop need different product decisions?",
  "metaTitle": "Why Mobile and Desktop Need Different Decisions",
  "description": "Why a mobile screen is not a small desktop, how placement, attention and rules differ, and a simple way to catch layout problems before they cost days.",
  "date": "2027-02-19",
  "category": "pm-problem",
  "tags": [
    "mobile",
    "ux",
    "responsive design",
    "product decisions"
  ],
  "body": [
    "Mobile isn't a smaller desktop. People use it in different moments, with less attention, one thumb and a lot less room. Anything that depends on placement, like a disclosure, a comparison or a warning, needs its own decision for mobile. If you design once and shrink it, the important parts tend to end up below the fold or squeezed out.",
    "At Unity Senior Health, working on Medicare plan discovery, I assumed disclaimer placement could match on mobile and desktop. It couldn't, and reworking it cost about 5 days. In regulated products, where a disclosure appears is part of the requirement, not a styling detail. A disclaimer that sits right next to a price on desktop can end up two screens away on a phone. That's a different product, even if the words are identical.",
    "So treat each screen size as its own set of decisions. What must be visible without scrolling? On desktop you can show a comparison side by side. On mobile, you might need to show one option at a time with a clear way to switch, which changes how people compare. What's the main action, and can a thumb reach it? Which content can move behind a tap without breaking a rule or hiding something people need? Engineering and design should be in that conversation early, because responsive layouts often have constraints nobody sees until the build. The trade-off is effort. Separate decisions mean more design work and more testing. Usually that's cheaper than rework found during review.",
    "On your next feature, ask design to show the mobile version first, not last. Then list every element that has to appear near something else, like a price and its fine print, and check that pairing on the smallest screen you support. If a pairing breaks, sort it out before engineering starts, while it's still a quick change."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    }
  ]
};

export default post;
