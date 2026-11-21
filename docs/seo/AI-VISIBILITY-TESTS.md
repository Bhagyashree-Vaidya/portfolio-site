# AI and search visibility test protocol

A repeatable, manual way to check whether shreevaidya.com shows up or gets cited for a fixed set of queries. Run it **monthly**, ideally on the same day, and log every result, including "not tested".

## Why manual
No platform offers complete citation reporting. Search Console shows Google web search, and AI Overviews traffic is folded into it without a separate breakdown. Bing Webmaster Tools has some Copilot reporting. ChatGPT, Perplexity and Gemini provide no site-owner reporting. Results are personalized and change from run to run, so a single observation is weak evidence. Trends across several months are what count.

## Setup for each run
1. Use a signed-out or fresh browser profile where the platform allows it. Note whether you were signed in.
2. Location: note the city (results differ between Seattle and other places).
3. Type each query exactly as written. Don't add follow-up prompts.
4. Record the result **within the first answer or the first page** only.

## Query panel (8 queries)

| # | Query | Type | Target page |
|---|---|---|---|
| Q1 | Who is Shree Vaidya product manager? | Branded | / |
| Q2 | Bhagyashree Vaidya | Branded | / |
| Q3 | Wingz VWO AI agent product manager | Branded-adjacent | /case-studies/ai-agent-quality-evaluation |
| Q4 | how to evaluate an AI agent before letting it take actions | Non-branded | /insights/how-to-evaluate-ai-agents |
| Q5 | search ranking metrics for product managers NDCG MRR | Non-branded | /insights/search-ranking-metrics-for-product-managers |
| Q6 | human in the loop AI design for product managers | Non-branded | /insights/human-in-the-loop-ai-design |
| Q7 | what does a search product manager do | Non-branded | /expertise/search-product-management |
| Q8 | AI product manager Seattle e-commerce search | Local / recruiter | / |

## Platforms (6)
Google web search, Google AI Overview or AI Mode, Bing (and Copilot), ChatGPT search, Perplexity, Gemini.

## What to record

| Field | Values |
|---|---|
| Date, platform, signed in? | |
| Query # | Q1–Q8 |
| Result | `cited` (linked to shreevaidya.com) · `mentioned` (named, no link) · `absent` · `not tested` (with the reason: blocked, sign-in required, no answer) |
| Page cited | URL if cited |
| Accuracy | Did the answer state any fact about Shree incorrectly? Quote it. |
| Rank (web search only) | Position of shreevaidya.com in the organic results, or ">10" |

## Log

| Date | Platform | Signed in | Q | Result | Page cited | Rank | Accuracy notes |
|---|---|---|---|---|---|---|---|
| 2026-11 (audit) | Google AI Overview | ? | Q1 | cited | / | | baseline from the November audit |
| 2026-11 (audit) | Google AI Overview | ? | non-branded AI-eval query | absent | | | baseline from the November audit |
| 2026-11 (audit) | ChatGPT, Perplexity, Copilot, Gemini | | all | not tested | | | blocked or sign-in required |

## Reading the results
- **Branded queries** should reach `cited` on most platforms within about 60 days of indexing. If they don't, check entity consistency: LinkedIn headline, GitHub bio and the Receivables Info author bio should all match the site and link to it.
- **Non-branded queries** are aspirational. Treat any `cited` as a signal, not as a guarantee it will repeat.
- **Inaccurate facts** in an AI answer are the most important thing to catch. Fix the source page (or LinkedIn) so it states the fact clearly in one sentence.
