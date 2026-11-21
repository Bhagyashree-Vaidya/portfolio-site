import type { Teardown } from "./types";

const t: Teardown = {
  slug: "best-buy-omnichannel",
  company: "Best Buy",
  product: "Online + in-store: pickup, product help, comparison",
  title: "How could Best Buy make the store and the app feel like one place?",
  metaTitle: "Best Buy Omnichannel: A Product Teardown",
  description: "A teardown of Best Buy's online and in-store experience: pickup, product help and comparison, with three ideas to make the handoff between them smoother.",
  date: "2026-11-21",
  brand: { bg: "#0046BE", ink: "#FFFFFF" },
  about: [
    "Best Buy sits in an awkward and interesting spot. People research on the app, then often want to see a TV in person or ask someone which laptop will last. A big share of online orders end with a trip to the store anyway.",
    "So the real product is the handoff: from browsing to pickup, from a question at home to an answer from a person. This teardown looks at where that handoff holds up and where it drops things.",
  ],
  facts: [
    { label: "Store pickup share", value: "About 45% of online sales were picked up in store in fiscal Q1 2027", source: "Digital Commerce 360" },
    { label: "Online share", value: "Online revenue was 31.7% of US sales in fiscal Q1 2027", source: "Digital Commerce 360" },
    { label: "Fast fulfillment", value: "70% of online orders were fulfilled within two days in fiscal Q4 2026", source: "Digital Commerce 360" },
  ],
  personas: [
    { name: "Aisha Rahman", age: 31, who: "Accountant buying her first gaming laptop", goal: "Choose a machine that will not feel slow in three years", frustration: "Spec sheets all look the same and she does not trust sponsored reviews" },
    { name: "Greg Lindqvist", age: 63, who: "Recently retired, setting up a TV and soundbar for his den", goal: "Buy it once, get it working, not think about it again", frustration: "He has to explain his room and setup again to every person he talks to" },
  ],
  journeys: [
    { name: "Comparing laptops at home", journey: "Adds three laptops to compare, reads specs, saves one", painpoint: "Compare shows numbers but not what they mean for her games or her budget", emotion: "Unsure, a bit overwhelmed" },
    { name: "Pickup day", journey: "Gets a ready-for-pickup message, drives over, waits at the counter", painpoint: "Arrival is not always clear about where to go or how long it will take", emotion: "Impatient" },
    { name: "Asking for help in store", journey: "Walks to the TV wall with notes about his room on his phone", painpoint: "The associate cannot see what he browsed or asked about online", emotion: "Starting over again" },
  ],
  ideas: [
    { title: "Plain-language compare", what: "Turn specs into a short 'good for' line per product, like 'handles new games at medium settings'", why: "Comparison helps only when people understand the difference that matters to them", tradeoff: "Simplified claims need careful sourcing or they lose credibility fast" },
    { title: "Bring my research to the store", what: "A QR code in the app that shares saved items and notes with an associate", why: "Saves the customer from repeating themselves and gives staff a head start", tradeoff: "Privacy expectations differ a lot, so it must be opt in each time" },
    { title: "Best-fit default in compare", what: "Default the compare view to a best-fit pick based on stated use and budget", why: "A clear default helps anxious buyers act; this is close to the best-value ranking I shipped for shipping options", tradeoff: "A wrong default can feel like an upsell" },
  ],
  metrics: [
    "Conversion from compare view to purchase or pickup order",
    "Median wait time from arrival to pickup handoff",
    "Share of store help conversations that start from shared app research",
    "Returns in the first 30 days for items bought after using compare",
    "Repeat purchase rate within 12 months for pickup customers",
  ],
  sources: [
    { label: "Digital Commerce 360: Best Buy Q1 FY27", url: "https://www.digitalcommerce360.com/2026/06/01/best-buy-online-sales-q1-fy27/" },
    { label: "Digital Commerce 360: Best Buy Q4 FY26", url: "https://www.digitalcommerce360.com/2026/03/03/best-buy-online-sales-q4-2025-fy26/" },
  ],
};

export default t;
