import type { Teardown } from "./types";

const t: Teardown = {
  slug: "amazon-shopping-search",
  company: "Amazon",
  product: "Amazon Shopping app: search and product discovery",
  title: "How could Amazon search help people choose instead of scroll?",
  metaTitle: "Amazon Search and Discovery: A Teardown",
  description: "A teardown of search and discovery in the Amazon Shopping app: why it is fast but crowded, and three ideas to help shoppers choose with less scrolling.",
  date: "2026-11-21",
  brand: { bg: "#FF9900", ink: "#1F2540" },
  about: [
    "Amazon search is very good at one thing: if you know what you want, you get it fast. Where it struggles is the middle case, when you know the problem but not the product.",
    "Amazon has been adding new ways in, like camera search with Lens Live and an AI assistant inside search results. The results page itself is still dense with sponsored slots, near-duplicate listings and badges that look alike.",
  ],
  facts: [
    { label: "Lens Live", value: "Real-time camera search launched in September 2025 for tens of millions of US customers", source: "About Amazon" },
    { label: "Classic Lens options", value: "Customers can still take a photo, upload an image or scan a barcode", source: "About Amazon" },
    { label: "AI assistant effect", value: "Customers who used Rufus were about 60% more likely to complete a purchase, per Amazon", source: "Digital Commerce 360" },
  ],
  personas: [
    { name: "Rosa Delgado", age: 38, who: "Working parent who shops on her phone in short bursts", goal: "Find a decent lunchbox that will survive a year of second grade", frustration: "Page one is full of listings that look identical with different brand names" },
    { name: "Kevin Cho", age: 24, who: "First apartment, furnishing on a tight budget", goal: "Find a desk lamp that matches one he saw at a friend's place", frustration: "He does not know what the style is called, so typed search misses" },
  ],
  journeys: [
    { name: "Searching 'kids lunchbox'", journey: "Types query, scrolls past sponsored rows, opens five listings", painpoint: "Many results look like the same product, so ratings stop meaning much", emotion: "Skeptical, rushed" },
    { name: "Camera search", journey: "Points Lens at the lamp, gets a carousel of matches", painpoint: "Matches are close in look but vary wildly in price and quality with little to separate them", emotion: "Impressed, then unsure" },
    { name: "Filters", journey: "Applies 4 stars and up, Prime, under $25", painpoint: "Filters cut the list but do not explain which item is the best fit", emotion: "Still scrolling" },
  ],
  ideas: [
    { title: "Collapse near-duplicates", what: "Group listings that look like the same item into one card with a 'see sellers' option", why: "Fewer look-alikes means each choice carries more information", tradeoff: "Sellers who rely on volume of listings will push back" },
    { title: "Fewer, clearer picks up top", what: "A small 'good, better, best' row for problem-style queries", why: "Narrowing choices helps people decide; cutting 12 Medicare plans to 4 reduced drop-off 32% in my own work", tradeoff: "Takes space from sponsored placements that pay for a lot" },
    { title: "Why this matched", what: "One line on camera search cards, like 'same shape and finish, metal base'", why: "Helps people trust a visual match and compare it fairly", tradeoff: "Explanations may expose weak matches more clearly" },
  ],
  metrics: [
    "Time from first search to add to cart for problem-style queries",
    "Number of product pages opened per purchase",
    "Return rate for items bought from camera search versus typed search",
    "Click-through and conversion on the good, better, best row",
    "Share of search sessions that end with no purchase and no saved item",
  ],
  sources: [
    { label: "About Amazon: Lens Live", url: "https://aboutamazon.com/news/retail/search-image-amazon-lens-live-shopping-rufus" },
    { label: "TechCrunch: Amazon launches Lens Live", url: "https://techcrunch.com/2025/09/02/amazon-launches-lens-live-an-ai-powered-shopping-tool-for-use-in-the-real-world" },
    { label: "Digital Commerce 360: Amazon Q4 2025", url: "https://www.digitalcommerce360.com/2026/02/06/amazon-sales-aws-ai-fiscal-q4-2025/" },
  ],
};

export default t;
