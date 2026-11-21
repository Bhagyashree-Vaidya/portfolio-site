# 30 / 60 / 90-day growth plan (from Nov 21, 2026)

Status key: ✅ done in code (PRs #2 and this one) · 🟡 needs Shree (see [NEEDS-INPUT.md](NEEDS-INPUT.md)) · ⏳ scheduled

## Days 1–30 (to Dec 21): foundation
- ✅ Visible experience, contact and résumé paths, H1, metadata, canonicals, sitemap, robots, redirects (PR #2)
- ✅ Homepage weight: hero, tree, footer and project videos converted and right-sized; videos load only when scrolled into view
- ✅ Structured data: Person, WebSite, ProfilePage, Article, CollectionPage, BreadcrumbList
- ✅ 5 HTML case studies, 3 expertise pages, 3 insight articles, plus hub pages and internal links
- ✅ `/llms.txt`, GA4 hooks, Search Console and Bing verification hooks
- 🟡 Merge and deploy; set the Vercel apex redirect to 308; verify Search Console and Bing; submit the sitemap
- 🟡 Review every case study for accuracy and confidentiality before merging
- 🟡 Résumé PDF; one LinkedIn URL everywhere

## Days 31–60 (to Jan 20): indexing and authority
- ⏳ Weekly: Search Console → Pages. Request indexing for any key URL still "Discovered, not indexed"
- ⏳ Record the 28-day baseline in [MEASUREMENT.md](MEASUREMENT.md)
- 🟡 **Entity consistency.** Use the same headline ("Senior Product Manager, AI & Search, Seattle") and the same photo on LinkedIn, GitHub and the Receivables Info author bio, each linking to shreevaidya.com. Add a GitHub profile README with the short bio
- 🟡 **Backlinks you already earned.** Ask Receivables Info to link your author byline to shreevaidya.com. Ask Adam Parks's podcast to link "Shree Vaidya" in the episode notes. Then add those URLs to `sameAs` in `src/lib/site.ts`
- 🟡 **UW.** Ask the iSchool (MSIM alumni or student spotlight) and the ECE FunLab people page for a profile that links to the site
- ⏳ First AI-visibility panel run ([AI-VISIBILITY-TESTS.md](AI-VISIBILITY-TESTS.md))

## Days 61–90 (to Feb 19): evidence and one experiment
- ⏳ Run the contact/résumé placement experiment ([EXPERIMENT-CONTACT-PLACEMENT.md](EXPERIMENT-CONTACT-PLACEMENT.md))
- ⏳ Second AI-visibility run; compare with the first
- ⏳ Refresh the pages that get impressions but rank 8–20: add the missing sub-question as an H2 with a direct answer
- 🟡 One new insight article per month, chosen from Search Console queries that already show impressions. Candidates: "How to prioritize a retail customer journey", "Writing a failure taxonomy for an LLM product", "Shipping cost transparency and checkout abandonment"

## Authority opportunities (legitimate only)

| Opportunity | Why it fits | Effort |
|---|---|---|
| Receivables Info author page + byline link | Already published 3 articles there | Low (one email) |
| Podcast episode page link | Already recorded | Low |
| UW iSchool MSIM spotlight or Capstone page | Real affiliation, .edu link | Medium |
| UW ECE FunLab people page | Real research role | Low |
| Guest post on Mind the Product, Product Coalition or Lenny's community | AI-evaluation and HITL content is in demand | Medium |
| Talk at a Seattle PM meetup (e.g. ProductTank Seattle) on AI-agent evaluation | Local + topical; produces an event page | Medium |
| Open-source: publish an anonymized failure-taxonomy template or eval checklist on GitHub | Citable artifact linking back | Medium |

Don't buy links, swap links in networks, or publish near-duplicate pages for keyword variants.
