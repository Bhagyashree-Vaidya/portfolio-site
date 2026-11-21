// A short blog post: a heading (the problem) and a few paragraphs (how a PM
// would work through it). Inline text supports **bold** and [text](url).

export type BlogCategory = "pm-problem" | "m-and-a";

export type BlogPost = {
  slug: string;
  /** Visible H1, phrased as the problem or question. */
  title: string;
  /** <title>; the site appends " | Shree Vaidya". Keep under ~55 chars. */
  metaTitle: string;
  /** Meta description, ~150 characters. */
  description: string;
  /** Publish date (YYYY-MM-DD, Pacific time). The post stays hidden until then. */
  date: string;
  category: BlogCategory;
  tags: string[];
  /** 2–4 short paragraphs. */
  body: string[];
  /** Required for M&A posts: where the deal facts come from. */
  sources?: { label: string; url: string }[];
  /** Optional links to related pages on this site. */
  related?: { href: string; label: string }[];
};
