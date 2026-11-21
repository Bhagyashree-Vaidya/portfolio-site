import type { BlogPost } from "../types";

const post: BlogPost = {
  "slug": "zero-result-searches",
  "title": "What are zero-result searches telling you?",
  "metaTitle": "What Zero-Result Searches Are Telling You",
  "description": "Zero-result searches usually point to one of three things: a vocabulary gap, a catalog gap, or a bug. How to tell them apart and what each one asks of you.",
  "date": "2027-01-08",
  "category": "pm-problem",
  "tags": [
    "search",
    "zero results",
    "catalog",
    "discovery"
  ],
  "body": [
    "A zero-result search is a customer telling you, in their own words, what they wanted and didn't find. Most of the time it falls into one of three buckets: they used a word your index doesn't know, you don't carry the thing, or something is broken. Each bucket has a different owner and a different fix.",
    "Vocabulary gaps are the most common and the cheapest to fix. People type synonyms, misspellings, plurals and brand nicknames. Synonym lists, spelling tolerance and vector retrieval all help here. At VWO, search used hybrid BM25 plus vector retrieval, partly because keyword matching alone misses queries phrased differently from the content. Catalog gaps are a different conversation. If lots of people search for something you don't offer, that's demand data for whoever owns the catalog or the roadmap. Search can't fix it, and it shouldn't pretend to by showing loosely related results.",
    "Bugs are the third bucket and the one teams catch last. A broken filter, an indexing job that failed overnight, a locale setting that drops accented characters. If your zero-result rate jumps suddenly, assume a bug before you assume customers changed. The trade-off across all three is how hard you push for some result over an honest empty page. A helpful empty state with suggestions can be better than ten irrelevant results, because irrelevant results teach people your search doesn't work.",
    "On Monday, pull last month's zero-result queries and sort them by count. Take the top 50 and label each one: vocabulary, catalog or bug. That one-hour exercise usually gives you a short fix list for engineering, a demand list for merchandising, and maybe one alert you should set up so the next indexing failure doesn't go unnoticed for a week."
  ],
  "related": [
    {
      "href": "/expertise/search-product-management",
      "label": "Search product management"
    },
    {
      "href": "/insights/search-ranking-metrics-for-product-managers",
      "label": "Search ranking metrics for PMs"
    }
  ]
};

export default post;
