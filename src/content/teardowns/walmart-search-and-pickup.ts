import type { Teardown } from "./types";

const t: Teardown = {
  slug: "walmart-search-and-pickup",
  company: "Walmart",
  product: "Search, substitutions and pickup/delivery",
  title: "How could Walmart make substitutions feel like a good call?",
  metaTitle: "Walmart Search and Pickup: A Teardown",
  description: "A teardown of Walmart grocery search, substitutions, pickup and delivery: what fast delivery fixed, what still surprises, and three ideas to build trust.",
  date: "2026-11-21",
  brand: { bg: "#0053A6", ink: "#FFFFFF" },
  about: [
    "Walmart has turned its stores into fast fulfillment centers. Most US households can now get a delivery in a few hours, and pickup is part of a normal week for a lot of families.",
    "Speed is mostly solved. The moments that shape trust now are smaller: finding the right item in search, and what happens when the item you picked is out of stock.",
  ],
  facts: [
    { label: "Delivery reach", value: "95% of US households can get delivery in three hours or less, per Walmart", source: "Axios" },
    { label: "Fast orders", value: "About 35% of US store-fulfilled digital orders were delivered in under three hours", source: "SupplyChain247" },
    { label: "Sparky", value: "AI shopping assistant launched in the Walmart app in June 2025", source: "Walmart Corporate" },
  ],
  personas: [
    { name: "Tasha Green", age: 42, who: "Single mom of three who does a weekly pickup order", goal: "Get the whole week's groceries in one order without surprises", frustration: "A swap from her kid's specific cereal can mean a rough morning" },
    { name: "Raj Patel", age: 67, who: "Retiree with diabetes who orders delivery to avoid crowded aisles", goal: "Get the low-sugar versions he chose, every time", frustration: "A substitute that looks similar can be the wrong thing for his diet" },
  ],
  journeys: [
    { name: "Building the weekly cart", journey: "Searches 'milk', scrolls through sizes and brands, reorders from history", painpoint: "Search mixes sizes and types, so finding her exact usual item takes effort", emotion: "Routine, a little tired" },
    { name: "Substitution notice", journey: "Gets a message that an item was swapped, approves or rejects at pickup", painpoint: "The swap reason is unclear and the decision has to be made fast in the car", emotion: "Rushed" },
    { name: "Dietary swap", journey: "Unpacks delivery, finds a regular version instead of low sugar", painpoint: "The substitute matched brand and size but not the reason he chose it", emotion: "Frustrated, less trusting" },
  ],
  ideas: [
    { title: "Swap rules per item", what: "Let shoppers set 'same brand only', 'any brand, same diet tag' or 'no swaps' on items they care about", why: "Captures the reason behind a choice, which is what a good substitute needs", tradeoff: "More settings, and stricter rules mean more out-of-stock gaps" },
    { title: "Approve swaps before the drive", what: "Push swap choices as soon as a picker flags them, with a best-fit default", why: "Decisions at home are calmer than decisions in a parking spot", tradeoff: "Waiting on replies can slow picking if defaults are not used" },
    { title: "Usual item first in search", what: "Pin the shopper's usual version at the top of results for staple queries", why: "Most weekly searches are re-finding, not discovering", tradeoff: "Less space for new or promoted items" },
  ],
  metrics: [
    "Substitution acceptance rate, by item category and swap rule",
    "Share of substitution decisions made before pickup or delivery",
    "Refunds and complaints tied to substitutions per 1,000 orders",
    "Time to build a weekly cart for repeat customers",
    "Weekly order retention for households with dietary swap rules set",
  ],
  sources: [
    { label: "Axios: Walmart says faster delivery is changing how people shop", url: "https://www.axios.com/2026/05/21/walmart-30-minute-delivery-shopping" },
    { label: "SupplyChain247: 35% in under three hours", url: "https://www.supplychain247.com/article/walmart-now-delivering-35-of-digital-orders-in-under-three-hours" },
    { label: "Walmart: Meet Sparky", url: "https://corporate.walmart.com/news/2025/06/06/walmart-the-future-of-shopping-is-agentic-meet-sparky" },
  ],
};

export default t;
