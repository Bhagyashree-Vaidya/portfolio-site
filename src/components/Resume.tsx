"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Section from "./Section";

const roles = [
  {
    company: "University of Washington",
    role: "Graduate Product Developer - Starlink Satellite Data Platform",
    period: "Mar 2026 - June",
    location: "Seattle, Washington, United States · Remote",
    type: "Part-time",
    bio: "Bio - A research lab that intercepts raw satellite internet radio signals using a custom rooftop antenna dish. Because space satellites move at insane speeds, their signals get messy. This lab builds software to clean up that data and track individual satellites. So, I built the entire coding pipeline from scratch to turn messy radio waves into neat, computer-labeled satellite tracks.",
    highlights: [
      <>Navigated extreme <strong>ambiguity</strong> and exercised <strong>autonomous ownership</strong> to architect a 0→1 data-processing platform in <strong>Python and Streamlit</strong> for proprietary Starlink downlink signals, replacing manual workflows with satellite-identified datasets used daily by the research team.</>,
      <>Eliminated <strong>track-assignment collisions across overlapping Doppler-shift S-curve trajectories</strong> by implementing a two-stage pipeline using <strong>DBSCAN clustering and the Hungarian Algorithm</strong> to resolve high-density signal detections against theoretical trajectories.</>,
      <>Achieved <strong>90%+ automated detection accuracy</strong> by implementing real-time signal observability and automated regression testing queues that suppressed side-lobe leakage from 53.5 dB to 14.1 dB, cutting data turnaround time from hours to under one minute and deployed interactive analysis through Docker on GPU infrastructure.</>
    ],
  },
  {
    company: "VWO",
    role: "Senior Product Manager | US , VWO",
    period: "Mar 2025 - Sep 2025",
    location: "Remote",
    type: "Full-time",
    bio: "Bio - B2B SaaS digital optimization and enterprise split-testing platform serving 3,000+ global brands. So, I ran the product line that added autonomous AI agents to the platform, building the evaluation pipelines that automatically monitored and improved these web tests and server side testing.",
    highlights: [
      <>Owned the production-grade <strong>AI Quality &amp; Evaluations roadmap for Wandz, VWO's agentic AI layer</strong>, defining reliability standards, LLM <strong>groundedness</strong> benchmarks, and release <strong>guardrails</strong> across <strong>15K–20K production agent actions/week spanning 40–50 enterprise accounts</strong> through LLM-as-judge evaluation, failure taxonomy, and continuous quality telemetry.</>,
      <>Helped drive critical agentic-platform error rates from <strong>~9% to &lt;3.5% in two months (60%+ reduction)</strong> by introducing <strong>human-in-the-loop</strong> exception routing and <strong>AI safety</strong> validation gates that blocked incorrect context interpretation, context rot and independently verified experiment variants.</>,
      <>Reduced <strong>AI evaluation turnaround from 1–2 days to &lt;1 minute and manual QA effort by ~4–5 hours/week per evaluator and uplifted developer experience</strong> by replacing sample-based reviews with full-coverage automated scoring and a centralized evaluation application adopted daily by <strong>4 product teams / 12–15 users</strong>.</>,
      <>Redirected engineering investment from an underlying LLM upgrade to <strong>agent-harness reliability</strong> by building a benchmark that separated model capability from multi-step execution failures, enabling product teams to prioritize fixes against the failure modes affecting production customers.</>,
      <>Captured <strong>$10M in incremental annualized revenue</strong> for enterprise e-commerce merchants by steering the rollout of server-side feature experimentation capabilities; managed the execution of 50+ Server-Side tests utilizing VWO's <strong>Bayesian SmartStats engine</strong> to verify pricing relevance and lift checkout conversion rates by 4.2%</>
    ],
  },
  {
    company: "Unity Senior Health",
    role: "Senior Product Manager, Unity Senior Health",
    period: "Sept 2024 - Mar 2025",
    location: "Florida, United States · Remote",
    type: "Contract",
    bio: "Bio - B2C healthcare marketplace specializing in Medicare insurance enrollment. Healthcare laws are incredibly confusing, causing seniors to frequently get frustrated, make mistakes, or drop out of the checkout funnel. So, I designed the smart, step-by-step sign-up flow to prevent compliance errors and make picking a doctor simple.",
    highlights: [
      <>Generated <strong>300+ net-new digital enrollments within 6 months and ahead of the Annual Enrollment Period</strong> by launching the company's first end-to-end Medicare marketplace, digitizing quote, eligibility, plan comparison, and enrollment workflows while navigating provider-network and regulatory constraints by having full <strong>autonomous ownership</strong> to launch.</>,
      <>Reduced <strong>plan-selection drop-off by 32%</strong> by translating insights from <strong>50+ customer interviews and funnel/session analytics, customer discovery loops</strong> into a personalized questionnaire, ranked plan recommendations, and agent-assisted enrollment flow that simplified complex Medicare choices.</>,
      <>Reduced acquisition cost from <strong>$210 to $172 per confirmed enrollment (~18%)</strong> in a controlled 50/50 digital-first vs. agent-first cohort by using HubSpot call transcripts and Mixpanel funnel data to identify commitment concerns, then adding provider/prescription lookup and disenrollment-rights guidance to the plan-comparison flow.</>,
      <>Improved <strong>Medicare quote accuracy by 25% (61% → 76%)</strong> by defining location-resolution and provider-network matching rules that prioritized verified ZIP/address data over unreliable IP detection, while partnering with engineering to surface real-time doctor network status using refreshed insurer data.</>,
      <>Eliminated compliance violations flagged in internal reviews across <strong>12 states over 9 months</strong> by translating CMS, HIPAA, and state-specific eligibility requirements into ~40 reusable validation scenarios, guardrails, contraints, and instructions that automatically gated enrollment paths and routed ambiguous cases to licensed agents.</>
    ],
  },
  {
    company: "Stallion Express",
    role: "Senior Product Manager Stallion Express",
    period: "April 2023 - Sep 2024",
    location: "Mississauga, Ontario, Canada · Remote",
    type: "Full-time",
    bio: "Stallion Express is a high-growth B2B/B2C cross-border e-commerce logistics and shipping aggregator platform processing 5M+ annual parcels for 40,000+ active digital merchants. Managed the technical product roadmap and GTM strategy for shipping discovery, geospatial search, and multi-currency checkouts..",
    highlights: [
      <><strong>1.Reduced checkout abandonment by 14%</strong> in an A/B test by launching shipping discovery that showed customers multiple carrier options with transparent 70%+ savings comparisons, reducing uncertainty around shipping costs at checkout for a platform serving 40,000+ merchants.</>,
      <><strong>2.Spearheaded a 0-to-1 MVP proposal targeting a $9M cost-reduction opportunity for a native self-service parcel drop-off and label-management workflow across iOS and Android..</strong></>,
      <><strong>3. Increased first-shipment activation by 22%</strong> by introducing location-based personalization that identified a new user's nearest shipping hub and surfaced relevant shipping options without requiring manual location entry. and supported a total annual shipping volume of 5M+ processed parcels.</>,
      <><strong>4. Enabled 10+ new Drop &amp; Go locations</strong> across Montreal, Vancouver, and Surrey, supporting 32 regional pricing zones and $1.2M in incremental GMV, by defining requirements for location-specific carrier pricing and partnering with Engineering to replace a single global rate model with reusable regional pricing.</>,
      <><strong>5. Minimized payment friction and cross-border FX drop-offs</strong> by leading the technical integration of Stripe and PayPal multi-currency payment gateways; processed $2M+ in monthly transactional credits, allowing US and Canadian merchants to pay in native currency while eliminating a 2.5% foreign exchange transaction penalty.</>,
      <>Stakeholder Management, User Acceptance Testing and +3 skills</>
    ],
  },
  {
    company: "Branding Arc",
    role: "Senior Product Manager",
    period: "June 2018 - Apr 2023",
    location: "Florida, United States · Remote",
    type: "Full-time",
    bio: "Cloud PaaS automation firm specializing in infrastructure orchestration. So, I led the product team that designed a self-serve interface from scratch, shrinking a technical 8-hour manual setup down to a 15-minute automated click.",
    highlights: [
      <><strong>Led Engineering and UX/UI teams to build and launch a 0→1 shared services framework and AWS PaaS product in 12 months</strong>, enabling enterprise customers to create cloud infrastructure applications in <strong>&lt;4 hours</strong> through a guided self-service experience.</>,
      <><strong>Defined product vision, KPIs, PRDs, pricing, and roadmap</strong> through market research, AWS/GCP competitive analysis, customer interviews, and private-preview usage data, focusing the MVP on four AWS service types that covered ~80% of customer demand.</>,
      <><strong>Grew active customer adoption 20x, from 5 private-preview design partners to ~100 customers</strong>, by prioritizing the highest-value features, removing onboarding friction, and expanding self-service adoption through the AWS Marketplace and customer-led growth.</>,
      <><strong>Reduced 3-tier AWS deployment time by &gt;95%, from 6–8 hours to 15–20 minutes</strong>, by redesigning the guided provisioning experience to automate resource sequencing and configuration.</>,
      <><strong>Unblocked ~75% of early-access provisioning attempts</strong> by identifying resource naming as a major onboarding failure, then prioritizing real-time validation and suggestions before customers reached the end of the setup flow.</>,
      <><strong>Reduced custom engineering effort for partner integrations</strong> by defining reusable API requirements and integration patterns for 1P and 3P integrations with Engineering.</>
    ],
  },
  {
    company: "Hotelkey",
    role: "Product Management Intern — Hotelkey",
    period: "Dec 2017 to May 2018",
    location: "",
    type: "",
    bio: "Cloud-native enterprise resource planning (ERP) platform acting as the central operating system for hotels.. Their software runs the entire hotel backend- handling guest room assignments, housekeeping tasks, credit card bills, and vendor supply ordering. So, I was the product manager intern who reshaped their vendor order-management flows, making it much faster for managers to restock hotel inventory.",
    highlights: [
      <><strong>Increased customer onboarding by 25% in one quarter</strong> by shaping product strategy across core ERP workflows including purchasing, inventory, and payments, and prioritizing new features based on customer needs.</>,
      <><strong>Increased monthly active users by 30% in three months</strong> by simplifying customer onboarding through a vendor order-management workflow that consolidated key purchasing activities.</>,
      <><strong>Increased average monthly meetings by ~10%</strong> by launching a self-service "Create Meeting" capability in the web application.</>,
      <><strong>Established product planning and delivery processes</strong> by translating UX research into OKRs, epics, user stories, and Jira-ready requirements for Engineering.</>
    ],
  }
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
        <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Resume</h3>
        <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-text-primary">Experience.</h2>
      </div>
      <div className="w-full max-w-[1200px] mx-auto">

        {/* Top Bar */}
        <div className="flex items-center justify-between bg-white/60 backdrop-blur-md border border-[#F0AFC0]/40 p-5 md:px-8 mb-12 w-full rounded-2xl shadow-sm">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-text-primary tracking-tight">Resume</h2>
          <a
            href="#"
            className="bg-[#E86F93] hover:bg-[#D65D82] text-white font-medium py-2.5 px-6 rounded-md shadow-[0_8px_20px_rgba(232,111,147,0.3)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(232,111,147,0.4)] hover:-translate-y-0.5"
          >
            Download PDF
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          {/* Left Column */}
          <div className="w-full lg:w-[25%] flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl text-text-primary border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-[#E86F93] to-transparent pointer-events-none"></div>
              <h3 className="text-2xl font-display font-semibold mb-2 relative z-10 text-text-primary">Bhagyashree Vaidya</h3>
              <p className="text-[#E86F93] text-[18px] font-medium mb-2 leading-relaxed relative z-10">
                Senior Product Manager | AI Personalization & Recommendation Systems | Bayesian A/B Testing | Product Analytics | Driving Growth via Behavioral Data | MSIM (Product & AI) @ UW '26
              </p>
            </div>

            <div className="px-2 font-medium flex flex-col gap-3 text-sm">
              <a href="https://www.linkedin.com/in/bhagyashree-vaidya-6b47a811a/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
                LinkedIn <span className="text-xl">↗</span>
              </a>
              <a href="https://github.com/Bhagyashree-Vaidya" target="_blank" rel="noopener noreferrer" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
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
                      <h4 className="text-xl font-display font-semibold text-text-primary">{role.role}</h4>
                      <span className="font-mono text-xs text-text-tertiary mt-1 md:mt-0">{role.period}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mt-3">
                      <h5 className="text-[#E86F93] font-medium font-mono text-[19px] uppercase tracking-widest">{role.company}</h5>
                      <span className="text-xs text-text-muted">{role.location}{role.location && role.type ? ' · ' : ''}{role.type}</span>
                    </div>
                    {role.bio && (
                      <p className="text-sm text-text-secondary mt-2 italic">{role.bio}</p>
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
                  <motion.div
                    key={idx}
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
