"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Section from "./Section";
import { PERSON, mailto } from "@/lib/site";

// Bullets from the master résumé (Nov 2026), review markers removed.
const roles = [
  {
    company: "University of Washington, ECE FunLab",
    role: "Graduate Product Developer, Satellite Signal Research",
    period: "Mar 2026 \u2013 Jun 2026",
    location: "On-site",
    type: "Research",
    bio: "Research lab that captures Starlink satellite signals. I built the data product that turns raw captures into labeled satellite tracks.",
    highlights: [
      "Built a 0-to-1 Python and Streamlit data product that compares detected satellite signals against predictive orbital models, cutting processing from hours to under a minute for daily research use.",
      "Reached 90%+ detection accuracy using DBSCAN clustering and Hungarian-algorithm matching, and added precision and recall views with error analysis so researchers could see where each detection was right or wrong.",
      "Designed the full interface for inspecting signal captures, Doppler tracks, detections, and predicted satellite passes, defining the information architecture, visual hierarchy, typography, color, status indicators, error states, and data-display conventions for dense workflows.",
      "Designed the signal-processing workflow that turns high-volume captures into dashboards where researchers compare multiple signals without losing context.",
    ],
  },
  {
    company: "VWO (Wingify)",
    role: "Senior Product Manager, AI Agents",
    period: "Mar 2024 \u2013 Sep 2025",
    location: "India \u00b7 Remote",
    type: "Full-time",
    bio: "B2B experimentation platform used by 3,000+ brands. I led search, A/B testing, human evaluation and AI experimentation products, and owned Wingz, VWO's agentic AI product.",
    highlights: [
      "Owned Wingz end to end, a production LLM-powered A/B testing agent that removed manual control-page design and automated 15K to 20K test configuration actions per week for 40 to 50 enterprise accounts.",
      "Drove the Wingz autonomous experimentation roadmap, aligning stakeholders on a phased launch that combined confidence-based automation with human-in-the-loop workflows.",
      "Reduced critical agent errors by more than 61% in two months by introducing risk-based validation gates for audience targeting, statistical accuracy, recommendation quality, and visual integrity, with automated checks and human review for high-risk actions.",
      "Built the AI evaluation framework with subject-matter experts, including a 600-pair golden set, cutting evaluation review time from 1 to 2 days to under a minute.",
      "Improved search and experiment-recommendation relevance with hybrid retrieval, LambdaMART ranking trained on LTR data built from human-labeled judgments, and cross-encoder reranking that selects the top 5 of 50 candidates; raised NDCG@5, reduced popularity and position bias, and improved groundedness 9% against human-labeled business-goal and user-intent benchmarks.",
      "Shipped AI-generated summaries above search results that answer \"what has worked for brands like mine,\" used by 18% of searchers, with a 4.2% checkout conversion lift reported across 50+ experiments.",
      "Managed implementation for 65+ enterprise clients automating experimentation and scaling data tracking on VWO.",
      "Owned a data-duplication risk project end to end, partnering with client data engineering leaders to connect VWO Warehouse Native directly to their Snowflake and BigQuery pipelines and aligning 200+ growth metrics across siloed teams.",
      "Led the technical migration of a Tier-1 retail client from legacy internal tools to VWO across 12 global engineering teams, accelerating feature launch times by 40%.",
      "Built server-side SDK wrappers, automated feature-flag cleanup scripts, and custom setup guides that cut customer page-load latency by 85 ms and reduced post-launch bugs by 30%, shortening time to value.",
      "Raised trial activation 16% by specifying an in-app checklist and a 5-email onboarding sequence after SQL analysis showed 58% of trial users never launched a test.",
      "Delivered a new attribution report that led marketing to move 18% of paid spend off branded search, cutting cost per sales-qualified opportunity by 15%.",
      "Wrote reporting requirements for Tableau dashboards and ran UAT with marketing, saving the growth team 4 to 5 hours per week.",
      "Trained client CSMs and VWO marketing in 4 sessions, backed by a user guide, on reading attribution reports and Bayesian test results.",
      "Restructured product content and entity formatting for LLM retrieval, associated with a 44% increase in brand recommendations across ChatGPT and Perplexity.",
      "Designed JSON-LD and Q&A schema that defined software features for AI answer engines, associated with a 31% lift in high-intent free-trial sign-ups from AI search.",
      "Translated AI-discovery data into prioritized Jira tickets for developers.",
    ],
  },
  {
    company: "Unity Senior Health",
    role: "Technical Member, Product (Contract)",
    period: "Sep 2023 \u2013 Mar 2024",
    location: "USA \u00b7 Remote",
    type: "Contract",
    bio: "Medicare Advantage plan shopping and enrollment through the 2024 Annual Enrollment Period.",
    highlights: [
      "Owned the consumer Medicare plan discovery and enrollment journey, including plan recommendations, personalized questionnaires, funnel analytics, and compliance.",
      "Cut plan-selection drop-off 32% and acquisition cost from $210 to $172 per enrollment by finding friction through 50+ customer interviews and Mixpanel funnel analysis, then redesigning plan recommendations, questionnaires, and the plan-selection experience.",
      "Reduced the plans a customer had to compare from 12 to 4 with a personalized ranking framework based on monthly premium, in-network doctors, and prescription drug coverage.",
      "Validated the redesign through 4 A/B tests on questionnaire length, recommendation order, and results-page layout before rolling out the best-performing version.",
      "Defined as-is and to-be workflows and end-to-end functional specifications for AI-assisted Medicare enrollment intake.",
      "Partnered with the engineering lead to redesign the enrollment workflow using LLM extraction, deterministic rules engines, and human-in-the-loop controls, reducing policy issuing time 35% at 99.2% enrollment accuracy.",
      "Created a quality-control, UAT, and governance framework for an AI chatbot that defined when the LLM could resolve customer requests alone and when a human should step in, reducing customer escalation tickets 11%.",
      "Documented service-area, provider-network, and drug-formulary business rules in the BRD with product, engineering, and plan operations, and reconciled 20K sample quotes in SQL; quoted-to-enrolled plan agreement rose 15%.",
      "Documented HIPAA-compliant data integration workflows, including PHI tokenization and de-identification rules, supporting secure processing of 25,000+ monthly enrollment requests with zero privacy findings.",
      "Wrote 40 test cases from CMS, HIPAA, and TCPA rules and led UAT with 6 agents across 12 pilot states.",
      "Owned technical configuration, API integrations, and rollout of the plan-selection and digital enrollment engine across 8 regional markets, accelerating member onboarding 22%.",
      "Implemented automated validation workflows that removed data-entry errors, supporting a 100% CMS compliance rating for AEP across 120,000+ applications.",
    ],
  },
  {
    company: "Stallion Express",
    role: "Product Manager",
    period: "Apr 2020 \u2013 Sep 2023",
    location: "Mississauga, Ontario, Canada",
    type: "Full-time",
    bio: "Shipping platform for e-commerce merchants. I worked on search, ranking, pricing and omnichannel fulfillment so merchants could find affordable shipping options.",
    highlights: [
      "Cut checkout abandonment 14% by launching multi-carrier rate comparison that showed delivery times, prices, and savings of 70%+ side by side.",
      "Introduced a best-value default ranking that balanced shipping cost, delivery speed, and service reliability, raising selection of the top-ranked carrier to 58%.",
      "Added faceted filters for delivery speed, tracking availability, and carrier preference, reaching 24% adoption.",
      "Launched Shipping Assist, a new vertical: after seeing merchants ship in unsuitable packaging, made packaging supplies available at Drop & Go locations across Canada and managed the packaging-supplies catalog.",
      "Lifted first-shipment activation 22% with location-based personalization that matched new merchants to nearby drop-off hubs and available carrier services during onboarding.",
      "Expanded the Drop & Go network to 10+ locations in Montreal, Vancouver, and Surrey on reusable pricing infrastructure covering 32 shipping zones.",
      "Diagnosed and fixed crawlability and indexation issues across multi-site WordPress and WooCommerce storefronts using Stallion Express shipping integrations, using Google Search Console and Ahrefs to remove orphan pages, redirect loops, broken links, and 404 errors, recovering organic visibility in Canadian and US cross-border markets.",
    ],
  },
  {
    company: "BrandingArc",
    role: "Product Manager (May 2018 \u2013 Apr 2020); Associate Product Manager (Aug 2016 \u2013 May 2018)",
    period: "Aug 2016 \u2013 Apr 2020",
    location: "USA",
    type: "Full-time",
    bio: "Self-service AWS infrastructure platform (PaaS) for enterprise cloud teams.",
    highlights: [
      "Grew adoption 20x, from 5 design partners to about 100 customers, by prioritizing the roadmap from customer interviews, usage data, competitive analysis, and product KPIs, and by tracking webinar, content, and partner-referral campaigns against trial starts and deployments.",
      "Cut provisioning time more than 95%, from 6 to 8 hours to 15 to 20 minutes, after onboarding funnel analysis showed resource naming and validation errors caused most failed first deployments; specified real-time pre-deployment validation.",
      "Scoped the MVP to 4 service types covering about 80% of customer demand using deployment and utilization data.",
      "Set up HubSpot lead scoring, nurture tracks, and GDPR consent capture (double opt-in and consent logging for EU prospects) in the first month of the role, as GDPR enforcement began in May 2018.",
      "Generated $10K in monthly revenue from 50K+ monthly sessions with a rewards and cashback program that converted 4% of active users at 20% retention and $1.20 CAC.",
      "Reduced cost per incremental purchase 18% for retail advertisers by building high-intent audiences from first-party shopping data and validating lift with a randomized holdout.",
      "Optimized multi-site WordPress architectures with custom schema markup, structured data, and XML sitemap and crawl-efficiency fixes, increasing organic search visibility.",
      "Improved Core Web Vitals 35% by streamlining heavy page builders, caching layers, and database overhead.",
      "Revamped legacy content strategy and metadata with Yoast and RankMath, guided by GA4 and Google Search Console data, driving a 115% increase in conversion-intent organic traffic.",
      "Tuned type size, weight, line height, and contrast for each of 8 font pairings, then locked readable minimums into theme options so customization could not break legibility.",
      "Built GA4 and Google Search Console reporting dashboards for WordPress clients and presented the results to client leadership, contributing to a 28% increase in client retention.",
    ],
  },
];

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    // Scroll to the second item (VWO) on initial load to make it the default
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const el = document.getElementById(`resume-item-1`);
        if (el) {
          containerRef.current.scrollTo({ top: el.offsetTop, behavior: 'instant' });
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const pages = roles.map((_, i) => i);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    // Find which item is most visible by checking the scroll position
    let active = 0;
    let minDistance = Infinity;

    pages.forEach((idx) => {
      const el = document.getElementById(`resume-item-${idx}`);
      if (el) {
        const distance = Math.abs(target.scrollTop - el.offsetTop);
        if (distance < minDistance) {
          minDistance = distance;
          active = idx;
        }
      }
    });

    setActiveIndex(active);
  };

  return (
    <Section id="resume" className="!py-[20px] mt-[10vh]">
      <div className="mb-[20px]">
        <p className="text-sm font-mono text-text-secondary uppercase tracking-widest mb-2">Resume</p>
        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">Experience.</h2>
      </div>
      <div className="w-full max-w-[1200px] mx-auto">

        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-md border border-[#F0AFC0]/40 p-5 md:px-8 mb-12 w-full rounded-2xl shadow-sm">
          <p className="text-3xl md:text-4xl font-display font-semibold text-text-primary tracking-tight">Resume</p>
          <a
            href={PERSON.resumePdf ?? mailto("Résumé request from shreevaidya.com")}
            {...(PERSON.resumePdf ? { download: true } : {})}
            className="bg-[#B83B67] hover:bg-[#9C2F55] text-white font-medium py-2.5 px-6 rounded-md shadow-[0_8px_20px_rgba(232,111,147,0.3)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(232,111,147,0.4)] hover:-translate-y-0.5"
          >
            {PERSON.resumePdf ? "Download résumé (PDF)" : "Request résumé by email"}
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Left Column */}
          <div className="w-full lg:w-[25%] flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl text-text-primary border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-[#E86F93] to-transparent pointer-events-none"></div>
              <p className="text-2xl font-display font-semibold mb-2 relative z-10 text-text-primary">Bhagyashree Vaidya</p>
              <p className="text-[#9C2F55] text-[18px] font-medium mb-2 leading-relaxed relative z-10">
                Senior Product Manager · AI agents, search & personalization · M.S. Information Management, UW &rsquo;26 · PMP
              </p>
            </div>

            <div className="px-2 font-medium flex flex-col gap-3 text-sm">
              <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
                LinkedIn <span className="text-xl">↗</span>
              </a>
              <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
                GitHub <span className="text-xl">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[75%] flex gap-4 md:gap-8 items-start">
            {/* Scrollable Box */}
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex-1 h-[594px] border-[6px] border-[#F0AFC0]/60 rounded-[2.5rem] overflow-y-auto bg-white/40 backdrop-blur-md px-6 md:px-10 shadow-sm relative scroll-smooth resume-scrollbar"
            >
              <div className="flex flex-col">
                {roles.map((role, idx) => (
                  <div key={idx} id={`resume-item-${idx}`} className="w-full min-h-[594px] py-6 shrink-0 flex flex-col justify-start border-b border-[#F0AFC0]/20 last:border-0">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-gray-200 pb-2">
                      <h3 className="text-xl font-display font-semibold text-text-primary">{role.role}</h3>
                      <span className="font-mono text-xs text-text-tertiary mt-1 md:mt-0">{role.period}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mt-3">
                      <p className="text-[#9C2F55] font-medium font-mono text-[19px] uppercase tracking-widest">{role.company}</p>
                      <span className="text-xs text-text-secondary">{role.location}{role.location && role.type ? ' · ' : ''}{role.type}</span>
                    </div>
                    {role.bio && (
                      <p className="text-[13px] text-text-secondary mt-2 italic">{role.bio}</p>
                    )}
                    <ul className="list-disc list-inside space-y-1.5 text-text-secondary leading-snug font-light text-[12px] md:text-[13px] mt-3">
                      {role.highlights.map((highlight, hidx) => (
                        <li key={hidx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex flex-col items-center justify-center gap-5 py-12 sticky top-1/3">
              {pages.map((page, idx) => {
                const isActive = activeIndex === idx;
                const distance = Math.abs(activeIndex - idx);

                // Calculate size based on distance from active index
                let sizeClass = "w-3 h-3"; // Default small
                if (isActive) sizeClass = "w-5 h-5"; // Active large
                else if (distance === 1) sizeClass = "w-4 h-4"; // Adjacent medium

                return (
                  <motion.button
                    type="button"
                    key={idx}
                    aria-label={`Show ${roles[idx].company}`}
                    aria-current={isActive ? "true" : undefined}
                    animate={{
                      backgroundColor: isActive ? "#E86F93" : "#D1D5DB",
                    }}
                    className={`${sizeClass} rounded-full cursor-pointer transition-all duration-300 shadow-sm`}
                    onClick={() => {
                      const el = document.getElementById(`resume-item-${idx}`);
                      if (el && containerRef.current) {
                        containerRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
                      }
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
