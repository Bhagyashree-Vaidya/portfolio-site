import type { BlogPost } from "./types";
import { POSTS } from "./posts/index";

// Today's date in Pacific time, as YYYY-MM-DD.
export function todayPT(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

export const isPublished = (p: BlogPost, today = todayPT()) => p.date <= today;

/** All posts, newest first, including scheduled ones. */
export const ALL_POSTS: BlogPost[] = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

/** Posts whose date has arrived, newest first. */
export function publishedPosts(today = todayPT()) {
  return ALL_POSTS.filter((p) => isPublished(p, today));
}

export function getPost(slug: string) {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export const postPath = (p: BlogPost) => `/blog/${p.slug}`;

export const CATEGORY_LABEL: Record<BlogPost["category"], string> = {
  "pm-problem": "Product problem",
  "m-and-a": "M&A, product lens",
};
