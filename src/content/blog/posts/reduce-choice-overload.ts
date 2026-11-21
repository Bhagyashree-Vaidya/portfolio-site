import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "reduce-choice-overload",
  "title": "How do you help customers choose when there are too many options?",
  "metaTitle": "How to Help Customers Choose From Too Many Options",
  "description": "How to cut a long list of options down to the few that fit each customer, explain why, and keep trust, with results from a Medicare plan discovery project.",
  "date": "2026-11-29",
  "category": "pm-problem",
  "tags": [
    "choice overload",
    "personalization",
    "ranking",
    "ux"
  ],
  "body": [
    "Help people choose by finding the few questions they're actually trying to answer, then ranking options against those questions. Show fewer choices up front, explain why they're there, and keep the full list one click away. Taking options away without saying why tends to feel like a trick.",
    "At Unity Senior Health, Medicare shoppers saw 12 plans and many left without choosing. We ran 50+ interviews, and three questions dominated: are my doctors in network, are my drugs covered, and what will I pay monthly. We built personalized ranking that brought 12 plans down to 4, explained the criteria, and kept a \"show all plans\" option. We validated it with 4 A/B tests. Plan-selection drop-off went down 32%, and cost per enrollment went from $210 to $172.",
    "Two details mattered a lot. First, **\"unknown\" must never look like \"out of network.\"** If you don't know whether a doctor is covered, say that, and don't let the design imply a no. Second, in a regulated space compliance is part of the product. I assumed disclaimer placement could match on mobile and desktop. It couldn't, and that cost us about 5 days. After that I brought compliance into design reviews earlier. The bigger trade-off is speed versus trust. A short ranked list is faster to use, and it only works if people believe the ranking is on their side. That's why explaining the criteria matters as much as the ranking itself.",
    "On Monday, pull up your own long list and ask five customers what they'd need to know to pick one. Write down their exact words. If the same two or three questions keep coming back, you've got your ranking criteria. If the answers are all over the place, the list may need better filters before it needs a ranking."
  ],
  "related": [
    {
      "href": "/case-studies/medicare-plan-discovery",
      "label": "Case study: Medicare plan discovery"
    },
    {
      "href": "/expertise/search-product-management",
      "label": "Search product management"
    }
  ]
};

export default post;
