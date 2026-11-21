import type { Teardown } from "./types";

const t: Teardown = {
  slug: "amazon-rufus-ai-assistant",
  company: "Amazon",
  product: "Rufus, Amazon's AI shopping assistant",
  title: "How could Rufus earn more trust per answer?",
  metaTitle: "Amazon Rufus AI Assistant: A Teardown",
  description: "A teardown of Rufus, Amazon's AI shopping assistant, now Alexa for Shopping: where answers help, where trust slips, and three ideas to earn it back.",
  date: "2026-11-21",
  brand: { bg: "#007185", ink: "#FFFFFF" },
  about: [
    "Rufus is Amazon's AI shopping assistant. It answers product questions, compares items and summarizes reviews right inside the app. In May 2026 Amazon folded it into Alexa+ and renamed it Alexa for Shopping, though much of the same technology still powers it.",
    "Usage is clearly there. The open question is trust: a shopping assistant that sits on the store's own shelf has to show it is on the shopper's side, one answer at a time.",
  ],
  facts: [
    { label: "Reach", value: "More than 300 million customers used Rufus in 2025", source: "Digital Commerce 360" },
    { label: "Sales impact", value: "Nearly $12 billion in incremental annualized sales attributed to Rufus in 2025", source: "Digital Commerce 360" },
    { label: "Growth", value: "Monthly active users up 115% year over year, per Q1 2026 remarks", source: "Modern Retail" },
    { label: "Rename", value: "Renamed Alexa for Shopping on May 13, 2026", source: "GeekWire" },
  ],
  personas: [
    { name: "Leila Haddad", age: 41, who: "Pharmacist buying a stroller for her first baby", goal: "Get a straight answer on safety and fold size without reading 2,000 reviews", frustration: "She cannot tell where an answer came from or whether it is just reading the listing back" },
    { name: "Marcus Bell", age: 27, who: "Warehouse supervisor and amateur cyclist", goal: "Know whether a bike part fits his exact model", frustration: "A confident 'yes, it fits' turned out wrong once, so now he double checks everything" },
  ],
  journeys: [
    { name: "Asking a safety question", journey: "Asks 'is this stroller safe for newborns', gets a fluent paragraph", painpoint: "No clear source, so she still opens the listing and reviews to check", emotion: "Hopeful, then cautious" },
    { name: "Fit check", journey: "Asks if a derailleur fits his bike, gets a yes", painpoint: "The answer does not say how sure it is or what it based that on", emotion: "Wary after past returns" },
    { name: "Comparing two items", journey: "Asks Rufus to compare two strollers", painpoint: "The comparison leans on listing copy and feels a little like the store talking", emotion: "Polite doubt" },
  ],
  ideas: [
    { title: "Show the receipts", what: "Each answer cites its basis: listing, verified reviews, manufacturer spec or Q&A, with a tap to see it", why: "People trust answers they can check, and most will not need to", tradeoff: "Citations make answers longer and expose thin data on weaker listings" },
    { title: "Confidence and handoff for high-stakes questions", what: "For fit, safety and compatibility, show 'confirmed by spec' or 'not sure, here is how to check'", why: "A wrong confident answer costs more than an honest unsure one; similar to routing high-risk AI actions to human review", tradeoff: "More 'not sure' answers may lower short-term conversion" },
    { title: "Validation gate on factual claims", what: "Check numeric claims like dimensions and weight against structured catalog data before showing them", why: "Catches the errors that cause returns; in my own work validation gates cut an AI agent's critical errors from about 9% to under 3.5%", tradeoff: "Adds latency and needs clean catalog data to check against" },
  ],
  metrics: [
    "Return rate for items bought after an assistant answer, by question type",
    "Share of answers where the shopper taps a citation",
    "Rate of answers flagged as wrong by shoppers per 1,000 answers",
    "Repeat use of the assistant within 30 days",
    "Conversion on high-stakes questions answered with 'not sure' versus confident answers",
  ],
  sources: [
    { label: "Digital Commerce 360: Amazon Q4 2025", url: "https://www.digitalcommerce360.com/2026/02/06/amazon-sales-aws-ai-fiscal-q4-2025/" },
    { label: "Modern Retail: Rufus users up 115%", url: "https://www.modernretail.co/technology/amazon-says-its-ai-shopping-assistant-is-gaining-traction-with-rufus-users-up-115/" },
    { label: "GeekWire: Amazon unifies Alexa and Rufus", url: "https://www.geekwire.com/2026/amazon-unifies-alexa-and-rufus-as-ai-rivals-move-into-online-shopping/" },
  ],
};

export default t;
