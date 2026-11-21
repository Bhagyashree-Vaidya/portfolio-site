// Text versions of the slide-deck teardowns shown in the homepage carousel.
// Each deck gets a crawlable page at /teardowns/decks/[id] so search and AI
// engines can read and quote it (slide images alone are not indexable text).

export type DeckTeardown = {
  id: string; // matches caseStudiesData id and the /#teardown-[id] anchor
  company: string;
  title: string;
  metaTitle: string;
  description: string;
  accent: string;
  summary: string[];
  personas: { name: string; need: string; pain: string }[];
  journeys: { moment: string; pain: string; feeling: string }[];
  ideas: { title: string; what: string; why: string; tradeoff: string }[];
  metrics: string[];
  sources: string[];
};

export const DECKS: DeckTeardown[] = [
  {
    id: "staples",
    company: "Staples",
    title: "Staples: one store, three very different visits",
    metaTitle: "Staples Omnichannel Teardown: Pickup, Passport Photos, Appointments",
    description:
      "A product teardown of Staples' omnichannel experience: bulk order pickup, walk-in passport photos and tech appointments, with three ideas to make every visit easier and how to measure them.",
    accent: "#CC0000",
    summary: [
      "Staples stores double as service hubs: print, passport photos, tech help and shipping, on top of buy online, pick up in store. The store, the site and the app have to feel like one experience.",
      "Three customers walk in with three different jobs. Each journey breaks at a different point, so each needs a different fix.",
    ],
    personas: [
      { name: "Maya, small business owner", need: "Orders 20 boxes of paper and toner online, picks up in store, wants it ready on time and loaded fast.", pain: "Not sure the whole order is in; long counter wait." },
      { name: "Daniel, parent", need: "Walks in for passport photos for two kids and wants them right the first time.", pain: "No idea of the wait; worried the photo gets rejected." },
      { name: "Priya, remote worker", need: "Booked a laptop help appointment and wants to be seen on time by someone who knows the issue.", pain: "Has to explain the problem again at the desk." },
    ],
    journeys: [
      { moment: "Bulk pickup: order online, wait for the ready text, find the counter", pain: "Is it all in? Long counter wait.", feeling: "Anxious, rushed" },
      { moment: "Passport photo: walk in, find an associate, take the photo", pain: "Unknown wait; fear of rejection.", feeling: "Unsure" },
      { moment: "Appointment: book online, arrive, explain again", pain: "Context lost at the desk.", feeling: "Frustrated" },
    ],
    ideas: [
      { title: "Smart pickup", what: "Item-level order status, curbside or locker for bulk orders, and an I'm-here button.", why: "Removes the waiting and guessing.", tradeoff: "Store labor for staging." },
      { title: "Photo check before you leave", what: "A text when it is your turn, plus an automated rule check on the photo.", why: "Fewer rejected passports, less idle time.", tradeoff: "Device cost per store." },
      { title: "Appointment memory", what: "The issue typed at booking appears on the associate's tablet, with reminders and easy rescheduling.", why: "No repeating yourself.", tradeoff: "Booking and store systems must be linked." },
    ],
    metrics: ["Pickup: ready-on-time rate and arrival-to-handoff time", "Passport photos: wait time, retake and rejection rate", "Appointments: no-show rate and time to resolution", "Across all three: repeat visits within 60 days and satisfaction after the visit"],
    sources: ["Staples.com services pages", "Staples press releases"],
  },
  {
    id: "bestbuy",
    company: "Best Buy",
    title: "Best Buy: they know what they want, not what to type",
    metaTitle: "Best Buy Search Teardown: Search Bar, Assistant Chat and AI Discovery",
    description:
      "A product teardown of how Best Buy shoppers search: the search bar, the assistant chatbot and AI-powered discovery, and how one shared understanding of intent could help shoppers find the right product.",
    accent: "#0046BE",
    summary: [
      "Best Buy sells big-ticket, spec-heavy products: TVs, laptops, appliances. Shoppers often know what they want but not the words to look for it, and a wrong pick means returns and lost trust.",
      "Shoppers now start in three places: the search bar, the blue assistant chatbot, or AI-powered discovery. Each is useful, but they do not share what the shopper already said.",
    ],
    personas: [
      { name: "Sam, searcher", need: "Types \"gaming laptop under 1200\" and wants fast, filterable results.", pain: "Keywords miss what he means; hundreds of results and jargon filters." },
      { name: "Lena, asker", need: "Tells the assistant her mom needs a simple tablet for video calls and wants a plain-language answer.", pain: "Chat answers do not connect to stock, price or pickup." },
      { name: "Raj, explorer", need: "Wants a TV setup for a bright living room and browses with AI discovery for ideas.", pain: "Inspiring ideas, but hard to compare or buy." },
    ],
    journeys: [
      { moment: "Searcher starts with keywords", pain: "Results do not match intent.", feeling: "Overwhelmed" },
      { moment: "Asker asks for help", pain: "Answer is disconnected from stock and pickup.", feeling: "Unsure" },
      { moment: "Explorer looks for ideas", pain: "Hard to move from inspiration to a choice.", feeling: "Excited, then stuck" },
    ],
    ideas: [
      { title: "One intent layer", what: "Search, chat and AI discovery share the same understanding of the shopper's need.", why: "Same answer wherever you start.", tradeoff: "Shared model and data work." },
      { title: "Need-based filters", what: "Filters like \"bright room\", \"for kids\" and \"quiet\" map to real specs.", why: "Shoppers speak in needs, not specs.", tradeoff: "Careful labeling." },
      { title: "Confident shortlist", what: "Top three picks with why each fits, live stock and pickup time.", why: "Fewer choices, fewer returns.", tradeoff: "Less browsing upsell." },
    ],
    metrics: ["Search: zero-result and reformulation rate", "Chat and AI discovery: hand-off to product page and add to cart", "Shortlist: conversion and 30-day return rate", "Overall: time to purchase and repeat visits"],
    sources: ["Best Buy corporate news", "Best Buy press releases"],
  },
  {
    id: "walmart",
    company: "Walmart",
    title: "Walmart: the weekly grocery order is a trust test",
    metaTitle: "Walmart Grocery Teardown: Pickup, Delivery and Substitutions",
    description:
      "A product teardown of Walmart online grocery pickup and delivery: where substitutions, delivery windows and first orders break trust, and three ideas to keep the weekly habit.",
    accent: "#0071CE",
    summary: [
      "Walmart is the largest US grocer, with app ordering, curbside pickup, home delivery and the Walmart+ membership. Groceries are frequent, perishable and personal.",
      "One bad substitution can undo a weekly habit, so the order has to arrive complete, fresh and without surprises.",
    ],
    personas: [
      { name: "Maria, working parent", need: "Weekly pickup on the way home; wants it complete and on time.", pain: "Finds surprise substitutions at the car." },
      { name: "Jordan, Walmart+ member", need: "Delivery several times a week; wants a reliable window and fresh produce.", pain: "Windows slip and produce quality varies." },
      { name: "Ellen, retiree", need: "New to online orders; wants it simple and to know what she is getting.", pain: "Too many steps and unclear substitution choices." },
    ],
    journeys: [
      { moment: "Pickup", pain: "Surprise substitutions at the car.", feeling: "Annoyed" },
      { moment: "Delivery", pain: "Windows slip; produce varies.", feeling: "Let down" },
      { moment: "First order", pain: "Too many steps; unclear choices.", feeling: "Unsure" },
    ],
    ideas: [
      { title: "Smart substitutions", what: "Learn preferences, ask before swapping, approve in one tap.", why: "No surprises.", tradeoff: "More prompts to answer." },
      { title: "Freshness promise", what: "Pick-quality notes and easy in-app refunds for produce.", why: "Trust in perishables.", tradeoff: "Refund cost." },
      { title: "Guided first order", what: "Reorder lists and a simple checkout for new shoppers.", why: "Build the habit early.", tradeoff: "Less upsell." },
    ],
    metrics: ["Substitution acceptance and refund rate", "On-time pickup and delivery rate", "First-order completion and second-order rate", "Weekly repeat orders and Walmart+ retention"],
    sources: ["Walmart corporate news", "Walmart press releases"],
  },
  {
    id: "rufus",
    company: "Amazon",
    title: "Rufus: earning trust on every answer",
    metaTitle: "Amazon Rufus Teardown: AI Shopping Assistant Trust and Citations",
    description:
      "A product teardown of Rufus (now Alexa for Shopping), Amazon's AI shopping assistant: why trust is the open question, and three ideas to earn it on every answer, with how to measure success.",
    accent: "#F29B05",
    summary: [
      "Rufus is Amazon's AI shopping assistant for product Q&A, comparisons and review summaries. Amazon has reported 300M+ customers used it in 2025, about $12B in incremental annualized sales, and monthly users up 115% in Q1 2026. In May 2026 it was folded into Alexa+ as Alexa for Shopping.",
      "The open question is trust: an assistant on the store's own shelf has to show it is on the shopper's side.",
    ],
    personas: [
      { name: "Leila, 41, pharmacist buying a first stroller", need: "A straight answer on safety and fold size without reading 2,000 reviews.", pain: "She cannot tell where an answer came from." },
      { name: "Marcus, 27, warehouse supervisor and cyclist", need: "To know whether a bike part fits his exact model.", pain: "A confident yes was wrong once, so now he double checks everything." },
    ],
    journeys: [
      { moment: "Asks if a stroller is safe for newborns and gets a fluent paragraph", pain: "No clear source, so she still checks the listing.", feeling: "Hopeful, then cautious" },
      { moment: "Asks if a derailleur fits his bike and gets a yes", pain: "No sign of how sure it is or what it is based on.", feeling: "Wary after past returns" },
      { moment: "Asks Rufus to compare two strollers", pain: "The comparison leans on listing copy and feels like the store talking.", feeling: "Polite doubt" },
    ],
    ideas: [
      { title: "Show the receipts", what: "Cite the listing, verified reviews, manufacturer specs and Q&A behind each answer.", why: "People trust answers they can check.", tradeoff: "Longer answers; exposes thin data." },
      { title: "Confidence and handoff for high-stakes questions", what: "Say when it is not sure and route to specs or a person.", why: "A wrong confident answer costs more than an honest unsure one.", tradeoff: "May lower short-term conversion." },
      { title: "Validation gate on factual claims", what: "Check fit, safety and spec claims before showing them.", why: "Catches errors that cause returns. Gates like this cut my AI agent's critical errors from 9% to under 3.5%.", tradeoff: "Adds latency; needs clean catalog data." },
    ],
    metrics: ["Return rate for items bought after an assistant answer, by question type", "Share of answers where the shopper taps a citation", "Answers flagged as wrong per 1,000 answers", "Repeat use within 30 days", "Conversion on high-stakes questions answered not sure versus confident"],
    sources: ["Amazon press releases and earnings commentary", "Digital Commerce 360", "Modern Retail", "GeekWire"],
  },
  {
    id: "rover",
    company: "Rover",
    title: "Rover: who is right for my dogs?",
    metaTitle: "Rover Search Teardown: Matching Pet Sitters on Fit and Trust",
    description:
      "A product teardown of Rover's sitter search: why owners need the right sitter for their dog rather than fifty five-star profiles, and how fit-based ranking and honest updates build confidence.",
    accent: "#00BD70",
    summary: [
      "I have two Australian Shepherds, Ozzie and Sam. Dogs cannot call you and say something is wrong, so owners hand over the leash and trust a stranger to notice what they would.",
      "The hard part is knowing the difference before you book. Owners do not want fifty highly rated sitters; they want to know who is right for their dogs and why.",
    ],
    personas: [
      { name: "Priya, two energetic herding dogs", need: "A sitter used to high-energy breeds.", pain: "Fifty five-star profiles look the same." },
      { name: "Tom, anxious rescue", need: "Someone home most of the day.", pain: "The details that matter are buried in reviews." },
      { name: "Aisha, first-time owner", need: "Frequent updates to feel calm.", pain: "Cheerful updates may hide stress." },
    ],
    journeys: [
      { moment: "Search", pain: "Too many great profiles.", feeling: "Overwhelmed" },
      { moment: "Compare", pain: "Finding the right details in reviews is hard.", feeling: "Unsure" },
      { moment: "During the stay", pain: "Updates may not show what really matters.", feeling: "Worried" },
    ],
    ideas: [
      { title: "Fit-based ranking", what: "Match on breed, energy, temperament and time at home.", why: "Right for this dog, not just best overall.", tradeoff: "Needs more profile data." },
      { title: "Why this sitter", what: "Plain-language reasons pulled from reviews and history.", why: "Confidence, not just stars.", tradeoff: "Must stay accurate." },
      { title: "Honest stay updates", what: "Structured check-ins on food, water, walks and mood.", why: "Real peace of mind.", tradeoff: "More work for sitters." },
    ],
    metrics: ["Search-to-booking conversion and time to book", "Repeat bookings with the same sitter", "Owner confidence score after the stay", "Cancellations and support tickets per stay"],
    sources: ["Rover press and public help pages"],
  },
  {
    id: "chewy",
    company: "Chewy",
    title: "Chewy: never run out, never guess",
    metaTitle: "Chewy Teardown: Autoship, Pharmacy Refills and Pet-Parent Care",
    description:
      "A product teardown of Chewy's Autoship, pharmacy and pet-parent experience: where timing, vet approvals and new-puppy choices break down, and three ideas to fix them.",
    accent: "#1C49C2",
    summary: [
      "Chewy is a large US online retailer for pet food, supplies and pharmacy. Autoship drives repeat orders and its customer service is known for care.",
      "Pet needs change with age, weight and health, so a fixed schedule and a static catalog fall short of a caring relationship.",
    ],
    personas: [
      { name: "Nina, two Aussies", need: "Big food bags on Autoship that arrive before the bag runs out.", pain: "The fixed schedule does not match how fast food runs out." },
      { name: "Marcus, senior cat on meds", need: "Monthly refills without chasing the vet.", pain: "Vet approval delays and unclear status." },
      { name: "Jenna, new puppy", need: "To know what to buy next as needs change every month.", pain: "Too many choices and no guidance by age." },
    ],
    journeys: [
      { moment: "Autoship", pain: "Shipments don't match how fast food runs out.", feeling: "Stressed" },
      { moment: "Pharmacy", pain: "Vet approval takes long and status is unclear.", feeling: "Anxious" },
      { moment: "New puppy", pain: "Too many choices and no guidance by age.", feeling: "Lost" },
    ],
    ideas: [
      { title: "Smart Autoship", what: "Adjust timing from actual usage and pet size.", why: "Never run out.", tradeoff: "More shipment changes." },
      { title: "Pharmacy tracker", what: "Clear refill and vet-approval status with helpful nudges.", why: "Less worry.", tradeoff: "Vet integration work." },
      { title: "Life-stage guide", what: "What your pet needs next, by age and breed.", why: "Confident choices.", tradeoff: "Must stay unbiased." },
    ],
    metrics: ["Autoship retention and skip or cancel rate", "Out-of-food incidents reported", "Prescription time to fill", "Repeat purchase and satisfaction per pet"],
    sources: ["Chewy investor relations", "Chewy press releases"],
  },
];

export const getDeck = (id: string) => DECKS.find((d) => d.id === id);
