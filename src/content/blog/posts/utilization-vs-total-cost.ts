import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "utilization-vs-total-cost",
  "title": "Utilization or total cost: which KPI should win?",
  "metaTitle": "Utilization vs Total Cost: Which KPI Should Win",
  "description": "High utilization can hide a worse total cost. How to tell operational KPIs from business KPIs, why they disagree, and how a PM can decide which one leads.",
  "date": "2027-01-24",
  "category": "pm-problem",
  "tags": [
    "metrics",
    "kpis",
    "operations",
    "trade-offs"
  ],
  "body": [
    "Total cost should usually win, with utilization as a diagnostic underneath it. Utilization tells you how busy an asset is. Total cost tells you what the business pays to get the work done. When they disagree, the business number is the one customers and finance actually feel.",
    "The disagreement is common in anything with physical assets, like vehicles, machines or space. Push utilization up and you might add longer routes, more wear, overtime, or missed service windows that cost you customers. Each truck looks busy. The operation as a whole gets more expensive. The reverse happens too: a team keeps spare capacity idle, utilization looks poor, and total cost is lower because they stopped paying for emergency fixes. A dashboard that only shows utilization will reward the first team and question the second.",
    "This is a question of who owns which number. Operations teams often own utilization because they can see and change it daily. Finance owns total cost but sees it monthly, after the fact. Product sits in the middle, especially if you build the tools that schedule or route the work. My view is that the tool's main goal should be the total cost per unit of work, like cost per delivery or per job, and utilization should show up as one input. Neither number is wrong. They answer different questions, and the tool should be clear about which one it's built to improve.",
    "On Monday, pick your main operational KPI and write down what it costs the business when it goes up. If you can't answer, pair it with a cost-per-unit metric in your next review. Watch both for a month. If they move in opposite directions, you've found a trade-off worth bringing to leadership before someone optimizes the wrong one."
  ],
  "related": [
    {
      "href": "/case-studies/drop-off-network-and-shipping-assist",
      "label": "Case study: drop-off network and Shipping Assist"
    }
  ]
};

export default post;
