import type { Teardown } from "./types";

const t: Teardown = {
  slug: "airbnb-search-and-trust",
  company: "Airbnb",
  product: "Search, pricing transparency and booking trust",
  title: "How could Airbnb make the price you see feel like the price you pay?",
  metaTitle: "Airbnb Search and Trust: A Teardown",
  description: "A teardown of Airbnb search, total price display and booking trust: what changed in 2025, what still feels uncertain, and three ideas to close the gap.",
  date: "2026-11-21",
  brand: { bg: "#C62F3D", ink: "#FFFFFF" },
  about: [
    "Airbnb search has two jobs: help you find a place you like, and help you believe the place and the price are real. In April 2025 Airbnb made total price display the default for guests worldwide, so search results show the stay cost with fees included, before taxes.",
    "That fixed a big source of sticker shock. What is left is quieter: comparing listings with different rules, house fees and cancellation terms, and trusting that the photos match the room.",
  ],
  facts: [
    { label: "Total price display", value: "Made standard for guests worldwide in April 2025, showing all fees before taxes", source: "Airbnb Newsroom" },
    { label: "Early use", value: "Almost 17 million guests had used the optional total price toggle before it became default", source: "Airbnb Newsroom" },
    { label: "Origins", value: "First launched in 2019 in parts of Europe, Australia, Canada and Korea", source: "Airbnb Newsroom" },
  ],
  personas: [
    { name: "Priya Nair", age: 34, who: "Product designer planning a group trip for six friends", goal: "Book one place that fits the budget everyone agreed on", frustration: "Splitting a total that shifts with taxes and dates makes her the bad guy in the group chat" },
    { name: "Tom Becker", age: 58, who: "Retired engineer booking his first Airbnb for a family wedding", goal: "Pick a place close to the venue that will not surprise him", frustration: "He cannot tell which listings are flexible and which will keep his money if plans change" },
  ],
  journeys: [
    { name: "Comparing three listings", journey: "Opens three tabs, scrolls each for rules, fees and cancellation terms", painpoint: "Price is comparable now, but the terms behind it are not side by side", emotion: "Tired, a bit suspicious" },
    { name: "Checkout total", journey: "Picks dates, reaches checkout, sees taxes added", painpoint: "The final number is higher than the search price, even if the reason is fair", emotion: "A small jolt of doubt" },
    { name: "Arrival day", journey: "Checks the listing again before driving out", painpoint: "Older photos and vague check-in steps make him wonder what he will find", emotion: "Anxious" },
  ],
  ideas: [
    { title: "A compare tray", what: "Save up to four listings into a tray that lines up total price, cancellation terms, check-in and rules", why: "Most of the trust work happens in that cross-tab comparison, so meet people there", tradeoff: "Side by side views can push hosts to compete only on price and terms" },
    { title: "Taxes in the search estimate", what: "Show an estimated total with taxes in search where local tax is predictable", why: "Removes the last surprise between search and checkout", tradeoff: "Estimates can be wrong, and a wrong estimate costs more trust than none" },
    { title: "Photo freshness badge", what: "Mark listings whose photos were verified or updated in the last year", why: "Gives first-time guests a simple trust signal beyond star ratings", tradeoff: "Hosts with older photos may feel penalized even when nothing changed" },
  ],
  metrics: [
    "Gap between search price and checkout price, and how often guests back out at that step",
    "Time from first search to booking for groups and first-time guests",
    "Use of the compare tray and conversion from tray to booking",
    "Support contacts about unexpected fees or misleading photos per 1,000 stays",
    "Share of bookings on listings with refreshed photos",
  ],
  sources: [
    { label: "Airbnb: Total price display is now standard", url: "https://news.airbnb.com/total-price-display-is-now-standard-globally" },
    { label: "TechCrunch on total price display", url: "https://techcrunch.com/2025/04/21/airbnb-will-automatically-display-total-price-to-all-users/" },
  ],
};

export default t;
