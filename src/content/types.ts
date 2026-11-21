// Content model for case studies, expertise pages and insight articles.
// Inline text supports **bold** and [link text](url) only.

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; title?: string; text: string }
  | { type: "metrics"; items: { value: string; label: string; note?: string }[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type DocSection = {
  /** Anchor id, kebab-case. */
  id: string;
  heading: string;
  blocks: Block[];
};

export type DocKind = "case-study" | "expertise" | "insight";

export type Doc = {
  kind: DocKind;
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> (the site appends " | Shree Vaidya"). Keep under ~60 chars total. */
  metaTitle: string;
  /** Meta description, ~150 characters. */
  description: string;
  /** 40–80 word direct answer shown at the top of the page. */
  answer: string;
  /** ISO date first published. */
  published: string;
  /** ISO date last meaningfully updated. */
  updated: string;
  /** Short labels shown on cards. */
  tags: string[];
  /** Case studies only: the at-a-glance facts. */
  facts?: { label: string; value: string }[];
  sections: DocSection[];
  faqs?: { q: string; a: string }[];
  sources?: { label: string; url: string }[];
  related: { href: string; label: string }[];
};
