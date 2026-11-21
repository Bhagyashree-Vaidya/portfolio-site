"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Section from "./Section";
import { PERSON, mailto } from "@/lib/site";

// Facts below follow the master résumé (Nov 2026). Do not add figures that are
// not on it. Items marked TODO need Shree's confirmation before expanding.
const roles = [
  {
    company: "University of Washington, ECE FunLab",
    role: "Graduate Product Developer, Satellite Signal Research",
    period: "Mar 2026 – Jun 2026",
    location: "Seattle, WA",
    type: "Research",
    bio: "Research lab that captures Starlink satellite downlink signals with a rooftop antenna. I built the software that turns raw, noisy captures into labeled satellite tracks researchers can use every day.",
    highlights: [
      <>Built a <strong>0-to-1 Python and Streamlit data product</strong> that compares detected satellite signals with predictive orbital models, cutting processing from <strong>hours to under a minute</strong>.</>,
      <>Reached <strong>90%+ detection accuracy</strong> using DBSCAN clustering and Hungarian-algorithm matching, with precision and recall views and error analysis so researchers can see where each detection was right or wrong.</>,
      <>Designed the full interface for signal captures, Doppler tracks, detections and predicted satellite passes, including information architecture, status indicators and error states. <a className="underline" href="https://starlink-spectrogram-tool.streamlit.app/" target="_blank" rel="noopener noreferrer">View the live Starlink Spectrogram Tool</a>.</>,
    ],
  },
  {
    company: "VWO (Wingify)",
    role: "Senior Product Manager, AI Agents",
    period: "Mar 2024 – Sep 2025",
    location: "India · Remote",
    type: "Full-time",
    bio: "B2B experimentation platform used by 3,000+ brands. I owned Wingz, VWO's agentic AI product that recommends, configures and launches A/B tests, and led search, human evaluation and experimentation work for enterprise clients.",
    highlights: [
      <>Owned <strong>Wingz end to end</strong>, a production LLM-powered A/B testing agent that automated <strong>15K–20K test configuration actions per week</strong> for 40–50 enterprise accounts.</>,
      <>Reduced <strong>critical agent errors by more than 61% in two months</strong> (from about 9% to under 3.5%) with a failure taxonomy, risk-based validation gates before execution, and human review for high-risk actions.</>,
      <>Built the AI evaluation framework with subject-matter experts, including a <strong>600-pair golden set</strong>, cutting evaluation review time from 1–2 days to under a minute.</>,
      <>Improved search and experiment-recommendation relevance with hybrid retrieval, LambdaMART learning-to-rank and cross-encoder reranking evaluated against human-labeled judgments.</>,
      <>Managed implementation for <strong>65+ enterprise clients</strong>, including warehouse-native integration with Snowflake and BigQuery, and raised <strong>trial activation 16%</strong> with an in-app checklist and onboarding sequence.</>,
    ],
  },
  {
    company: "Unity Senior Health",
    role: "Technical Member, Product (Contract)",
    period: "Sep 2023 – Mar 2024",
    location: "USA · Remote",
    type: "Contract",
    bio: "Medicare Advantage plan shopping and enrollment, through the 2024 Annual Enrollment Period. I owned the consumer plan discovery and enrollment journey, including recommendations, questionnaires, funnel analytics and compliance.",
    highlights: [
      <>Cut <strong>plan-selection drop-off 32%</strong> and acquisition cost from <strong>$210 to $172 per enrollment</strong> after 50+ customer interviews and Mixpanel funnel analysis, by redesigning recommendations, questionnaires and plan selection.</>,
      <>Reduced the plans a customer had to compare <strong>from 12 to 4</strong> with a personalized ranking based on monthly premium, in-network doctors and prescription drug coverage, validated through 4 A/B tests.</>,
      <>Redesigned enrollment intake with LLM extraction, a deterministic rules engine and human-in-the-loop review, reducing <strong>policy issuing time 35% at 99.2% accuracy</strong>.</>,
      <>Wrote <strong>40 test cases from CMS, HIPAA and TCPA rules</strong> and led UAT with 6 agents across 12 pilot states.</>,
    ],
  },
  {
    company: "Stallion Express",
    role: "Product Manager",
    period: "Apr 2020 – Sep 2023",
    location: "Mississauga, Ontario, Canada",
    type: "Full-time",
    bio: "Cross-border e-commerce shipping platform for 40,000+ merchants and 5M+ parcels a year. I worked on shipping search, ranking, pricing and omnichannel fulfillment so merchants could find affordable options and ship with less friction.",
    highlights: [
      <>Cut <strong>checkout abandonment 14%</strong> by launching multi-carrier rate comparison that showed delivery times, prices and savings side by side, with a <strong>best-value default ranking</strong> balancing cost, speed and reliability.</>,
      <>Lifted <strong>first-shipment activation 22%</strong> with location-based personalization that matched new merchants to nearby drop-off hubs and available carrier services during onboarding.</>,
      <>Launched <strong>Shipping Assist</strong>, a new vertical: after finding that merchants were often shipping in unsuitable packaging, I made packaging supplies available to buy at Drop &amp; Go locations across Canada when merchants drop off parcels, and managed the packaging-supplies catalog.</>,
      <>Expanded the <strong>Drop &amp; Go network to 10+ locations</strong> on reusable pricing infrastructure covering <strong>32 shipping zones</strong>, replacing a single rate model with location-specific carrier pricing.</>,
      <>Led the Stripe and PayPal multi-currency integration so US and Canadian merchants could pay in their own currency.</>,
    ],
  },
  {
    company: "BrandingArc",
    role: "Product Manager (May 2018 – Apr 2020); Associate Product Manager (Aug 2016 – May 2018)",
    period: "Aug 2016 – Apr 2020",
    location: "USA · Remote",
    type: "Full-time",
    bio: "Self-service AWS infrastructure platform (PaaS) for enterprise cloud teams. I took it from private preview to general availability.",
    highlights: [
      <>Grew adoption <strong>20x, from 5 design partners to about 100 customers</strong>, prioritizing the roadmap from customer interviews, usage data and competitive analysis.</>,
      <>Cut provisioning time <strong>more than 95%, from 6–8 hours to 15–20 minutes</strong>, after funnel analysis showed resource-naming and validation errors caused most failed first deployments; specified real-time pre-deployment validation.</>,
      <>Scoped the MVP to <strong>4 service types covering about 80% of customer demand</strong> using deployment and utilization data.</>,
      <>As Associate PM, built a rewards and cashback program that generated <strong>$10K in monthly revenue</strong> from 50K+ monthly sessions.</>,
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
