# Experiment: contact and résumé placement

**Question:** Does a persistent "Contact / Résumé" button in the navigation bar raise the share of visits that contact Shree or request her résumé?

## Why this test
Contact paths now exist in the hero, the Experience header, the footer and every content page CTA. The open question is whether an always-visible header button adds conversions or just moves them from the footer.

## Design
- **Type:** sequential before/after (the traffic is too low for a split test to reach significance in a reasonable time). Run 4 weeks with variant A (current), then 4 weeks with variant B.
- **Variant B:** add a "Contact" button styled as the primary button at the right of the navigation bar, with `data-placement="nav-cta"`.
- **Primary metric:** visits with at least one key event (`contact_email`, `resume_request`, `resume_download`, `linkedin_click`) ÷ total visits, from GA4.
- **Secondary:** share of key events by `placement`. Did B add new conversions or only move them?
- **Guardrails:** bounce rate and average engagement time shouldn't drop.
- **Minimum data:** don't read the results until each period has at least 300 visits. Otherwise extend the run.

## Limits
Before/after tests can be confounded by job-market seasonality, new backlinks or a LinkedIn post that sends traffic. Note any such event in the log and treat the result as directional.

## Log
| Period | Variant | Visits | Visits with key event | Rate | Notes |
|---|---|---|---|---|---|
