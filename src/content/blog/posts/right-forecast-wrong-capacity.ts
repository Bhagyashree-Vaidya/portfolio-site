import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "right-forecast-wrong-capacity",
  "title": "Your forecast was right. Why did you still run out of capacity?",
  "metaTitle": "Right Forecast, Still Out of Capacity: Why",
  "description": "A correct demand forecast can still fail if capacity is counted wrong. Capacity is people, vehicles, time and place together. How to plan for it and check.",
  "date": "2027-01-23",
  "category": "pm-problem",
  "tags": [
    "capacity planning",
    "forecasting",
    "operations",
    "logistics"
  ],
  "body": [
    "Because capacity isn't one number. It's people, equipment, time and place all lining up at once. A forecast tells you how much demand is coming. It doesn't tell you whether you'll have the right driver in the right vehicle at the right hub when it arrives.",
    "One lesson from my time at Stallion Express: a vehicle isn't capacity without a driver. It sounds obvious written down. In planning, it's easy to count vans, or warehouse space, or shifts on a calendar, and treat that count as what you can handle. Then the forecast turns out accurate and you still fall short, because one of the pieces that has to line up with the others wasn't there. The forecast gets blamed, even though it did its job.",
    "The PM work is making the constraints visible together. Ask operations which resources have to coincide to complete one unit of work, maybe a pickup, a delivery or a support call. Then check which of those your planning tools actually track. Often one is tracked well, like vehicles, and another lives in someone's head, like who is trained, available and nearby. That missing one is your real limit. The trade-off is that holding spare capacity of every kind is expensive, so the business has to decide which shortages it can absorb and which it can't, and plan buffers for those.",
    "On Monday, pick one peak period from last year and list every resource needed to serve one customer then. Next to each, write whether you planned it in a system or by hand, and whether it ran short. If the shortfall was a resource nobody tracked, add it to the planning model before the next peak. That's usually cheaper than a better forecast."
  ],
  "related": [
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    }
  ]
};

export default post;
