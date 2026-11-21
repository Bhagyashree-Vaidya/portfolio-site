# Measurement plan

How to tell whether the site is working. Nothing here is collected until the accounts in [NEEDS-INPUT.md](NEEDS-INPUT.md) are set up.

## North-star metric
**Qualified inquiries per month**: emails or LinkedIn messages from recruiters or hiring managers that mention the site or arrive after a tracked site visit. Log each one by hand in the inquiry log below; no tool measures this for you.

## Where each KPI comes from

| KPI | Source | How |
|---|---|---|
| Branded impressions and position | Google Search Console → Performance | Filter queries with regex `(?i)shree|bhagyashree|vaidya` |
| Non-branded impressions and clicks | Search Console → Performance | Same filter, set to "Doesn't match regex" |
| Position by query group | Search Console | Filter by each group's regex (table below) and export monthly |
| Indexed pages | Search Console → Pages | Target: every sitemap URL is indexed; check "Why pages aren't indexed" |
| Bing coverage | Bing Webmaster Tools → Search Performance / URL inspection | Bing also feeds Copilot and ChatGPT search |
| Core Web Vitals (real users) | Search Console → Core Web Vitals; PageSpeed Insights field data | May say "not enough data" for months on a low-traffic site. That's expected |
| Lab performance | Lighthouse (mobile, 3-run median) | Run before and after every release |
| Contact conversions | GA4 events `contact_email`, `resume_request`, `resume_download`, `linkedin_click` | Mark them as key events in GA4 → Admin → Events |
| Organic landing pages | GA4 → Reports → Landing page, filtered to session source "google" or "bing" | |
| AI-platform referrals | GA4 → Traffic acquisition, session source contains `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com`, `gemini.google.com`, `claude.ai` | Undercounts: many AI apps strip referrers |
| AI answer visibility | Manual test panel ([AI-VISIBILITY-TESTS.md](AI-VISIBILITY-TESTS.md)) | Monthly, same queries, logged |

## Query groups (Search Console regex)

| Group | Regex | Primary page |
|---|---|---|
| Branded | `(?i)shree|bhagyashree|vaidya` | / |
| AI PM / evaluation | `(?i)(ai|llm|agent).*(product manager|pm|evaluat|hallucinat|grounded|human.in.the.loop)` | /expertise/ai-product-management, /insights/how-to-evaluate-ai-agents |
| Search PM / ranking | `(?i)(search|ranking|relevance|ndcg|mrr|zero.result)` | /expertise/search-product-management, /insights/search-ranking-metrics-for-product-managers |
| E-commerce / omnichannel | `(?i)(omnichannel|ecommerce|e-commerce|checkout|retail|bopis|shipping)` | /expertise/ecommerce-omnichannel-product-management |
| Case-study intent | `(?i)(case study|wingz|vwo|stallion|unity senior)` | /case-studies/* |

## Baseline (record once Search Console has 28 days of data)

| Metric | Baseline date | Value | 30 days | 60 days | 90 days |
|---|---|---|---|---|---|
| Branded impressions (28d) | | | | | |
| Branded avg position | | | | | |
| Non-branded impressions (28d) | | | | | |
| Non-branded clicks (28d) | | | | | |
| Indexed pages / sitemap URLs | | | | | |
| Lighthouse mobile perf (home) | 2026-11-21 | see PR | | | |
| Key events (contact + résumé), 28d | | | | | |
| Qualified inquiries (28d) | | | | | |

## Inquiry log (manual)

| Date | Channel | Who (role, company type) | Mentioned site? | Landing page if known | Outcome |
|---|---|---|---|---|---|

## Guardrails
- Don't read meaning into weekly swings at low volume. Compare 28-day windows.
- A rise in impressions without clicks usually means a page ranks low or answers the question in the snippet. Check position before you rewrite anything.
- Only claim AI-citation results you actually observed and logged.
