# Staged: items that need Shree

These were skipped on purpose because they need your accounts, your confirmation of a fact, or your approval. Everything else in Weeks 2–12 is done in code.

## A. Accounts and settings (only you can do these)

| # | What | Where | Then |
|---|---|---|---|
| A1 | Merge PR #2, then this PR, and deploy | GitHub / Vercel | |
| A2 | Change the apex redirect `shreevaidya.com → www` from 307 to **308 permanent** | Vercel → Project → Settings → Domains | |
| A3 | Verify the domain in **Google Search Console** (DNS TXT record preferred) | search.google.com/search-console | Or set the env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel and redeploy |
| A4 | Verify in **Bing Webmaster Tools** (you can import from Search Console) | bing.com/webmasters | Or set `NEXT_PUBLIC_BING_SITE_VERIFICATION` |
| A5 | Submit `https://www.shreevaidya.com/sitemap.xml` in both | | Check Pages / Index coverage weekly for 4 weeks |
| A6 | Create a **GA4** property, then set `NEXT_PUBLIC_GA_ID=G-…` in Vercel | analytics.google.com | Mark `contact_email`, `resume_request`, `resume_download` and `linkedin_click` as key events |
| A7 | Optional: Vercel Speed Insights for real-user Core Web Vitals | Vercel dashboard | |

## B. Facts to confirm (left off the site until you confirm)

| # | Question | Current handling |
|---|---|---|
| B1 | **Résumé PDF** (no phone number, no review markers). Save as `public/Shree_Vaidya_Resume.pdf` and set `resumePdf` in `src/lib/site.ts` | Buttons say "Request résumé by email" |
| B2 | **One LinkedIn URL**: `/in/bhagyashree-vaidya-6b47a811a/` (used now) or `/in/shree-vaidya` (on the résumé)? | Site URL kept |
| B3 | **Years of experience**: 8+ or 9+? | Copy says "in product since 2016" |
| B4 | **Stallion Drop & Go**: GMV ($1.2M vs $5M) and the city names (your notes say "never confirmed") | Omitted |
| B5 | **Shipping Assist metrics**: any number (sales, attach rate, damage or claims reduction, number of SKUs)? | Case study says the metrics aren't published |
| B6 | **HotelKey**: Dec 2015 – May 2016 or Dec 2017 – May 2018? Keep it at all? | Removed from Experience |
| B7 | **CBAP and PMI-PBA** certifications: real and current? | Not shown |
| B8 | **VWO**: the "$10M incremental revenue" and "4.2% checkout lift" are modelled or partial-credit figures, so they're excluded. Any number you can defend for the search reranking's business impact? | Only NDCG and kappa are shown |
| B9 | **AEO results at VWO** ("44% more brand recommendations", "31% sign-up lift") | Excluded (attribution is "associated with") |
| B10 | **Team sizes** at VWO, Unity and Stallion (BrandingArc: about 8 → 12 engineers and 2 designers is used, from your prep notes) | Omitted where unknown |
| B11 | **PAMA**: the "$500" grant amount and "one of 8 funded projects" | Page unchanged; please confirm |
| B12 | **Unity**: the 61→76% quote accuracy, "zero violations in 12 states" and "100% CMS compliance" appear in different sources with different framings | Excluded |

## C. Approvals and judgment calls

| # | Item |
|---|---|
| C1 | **Read every case study** for accuracy and confidentiality before merging. They were written only from your master résumé, your who-is-she file and the parts of your prep notes not marked mock or role-play. |
| C2 | **Starlink project video** shows your browser tab bar, including a UW email inbox tab. Re-record or crop it if that's a concern. |
| C3 | **Product teardowns** (Zomato, Amazon) are now labeled as independent teardowns; the Spotify, Airbnb and Netflix placeholder decks were removed. Add real ones back when you have them. |
| C4 | **Other carousel projects** (OwnerView, The Great Courtroom, SpinFlix, Neighbourhood Care Exchange) need accurate one-line descriptions; the current ones read as generic. |
| C5 | **GPTBot / training crawlers**: the site currently allows all crawlers. If you'd rather not be used for model training while staying in AI search, add a `GPTBot` disallow rule (see the comment in `src/app/robots.ts`). |

| C6 | **VWO search ownership.** The search expertise page marks the ranking stack, model-size choice, human-evaluation gate and bias reduction as **"Contributed"** (engineering built the models). Change them to "Owned" if you owned those decisions. |
| C7 | **Interpretive lines to confirm.** These state reasoning rather than a recorded fact: "Cheapest-first could have put slow or less reliable services at the top" (checkout case study); "less direct control over each location" as the partner-storefront trade-off (Drop & Go); and "context loss ranked among the top three" once it was added (VWO case study). |
| C8 | **Illustrative numbers** in the insights (the NDCG and MRR worked examples, the kappa example and the frequency × severity scores) are labeled as examples, not production data. Confirm you're comfortable with the Wingz category names appearing in that example table. |
| C9 | **Pre-existing lint errors** (unescaped quotes, unused imports) remain in the research, PAMA, TreeStory and carousel files. They're harmless to the build, and fixing them is optional cleanup. |

## D. Outreach (only you can send these)
See the authority table in [GROWTH-PLAN.md](GROWTH-PLAN.md): Receivables Info byline link, podcast episode link, UW iSchool and FunLab profile pages.
