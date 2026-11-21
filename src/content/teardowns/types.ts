// Independent product teardowns (not employer work), in the style of the Zomato deck.
// Inline text supports **bold** and [text](url).

export type Teardown = {
  slug: string;
  company: string;
  /** e.g. "Rufus, Amazon's shopping assistant" */
  product: string;
  /** H1, phrased as the question the teardown answers. */
  title: string;
  metaTitle: string;
  description: string;
  date: string;
  /** Brand background and the text color that reads on it (white or navy). */
  brand: { bg: string; ink: "#FFFFFF" | "#1F2540" };
  /** 2 to 3 short paragraphs of public context. Only facts you can source. */
  about: string[];
  /** Key public facts, each with a source. */
  facts: { label: string; value: string; source: string }[];
  /** Illustrative personas (clearly made up). */
  personas: { name: string; age: number; who: string; goal: string; frustration: string }[];
  /** Journeys that show where the product works and where it doesn't. */
  journeys: { name: string; journey: string; painpoint: string; emotion: string }[];
  /** What I'd build or test. */
  ideas: { title: string; what: string; why: string; tradeoff: string }[];
  /** How I'd know it worked. */
  metrics: string[];
  sources: { label: string; url: string }[];
};
