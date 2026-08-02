"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Section from "./Section";

const roles = [
  {
    company: "UW Starlink - AI Research & Signal Intelligence",
    role: "Graduate Product Developer",
    period: "Mar 2026 - Present",
    highlights: [
      <>Designed and shipped a <strong>full-stack data processing tool (Python + Streamlit)</strong> that takes raw satellite signal captures and outputs cleaned, labeled, analysis-ready data, replacing a manual workflow that previously took researchers <strong>hours per dataset</strong></>,
      <>Built an interactive visualization layer with <strong>14 user-configurable parameters</strong>, enabling researchers to tune detection sensitivity in real time, adopted after a single demo to the PI and PhD team</>,
      <>Engineered a detection pipeline that automatically identifies individual Starlink satellite tracks from noisy sensor data with <strong>90%+ accuracy</strong>, processing datasets that contain signals from <strong>4,000+ constellation satellites</strong></>,
      <>Integrated with the team's existing Doppler prediction codebase (orbital mechanics models) to enable <strong>automated matching</strong> between measured signals and theoretical satellite positions</>,
      <>Scoped the full product roadmap from <strong>prototype to production</strong>: real data adaptation, correspondence matching, persistent database for cross-session analysis, and Docker deployment on the lab's GPU server</>
    ],
  },
  {
    company: "VWO - Enterprise Experimentation",
    role: "Senior Product Manager",
    period: "May 2025 - Sep 2025",
    highlights: [
      <>Secured <strong>8 net-new enterprise client accounts</strong> in the North American market by leading technical product strategy on Fortune 500 sales calls alongside Account Executives and Business Development teams to resolve complex procurement roadblocks</>,
      <>Captured <strong>$10M in incremental annualized revenue</strong> for enterprise e-commerce merchants by designing and launching server-side Feature Experimentation and Web Rollout capabilities across third-party search engines and high-volume checkout funnels</>,
      <>Increased user checkout conversion rates by <strong>4.2%</strong> by deploying <strong>50+ Bayesian and frequentist</strong> Server-Side A/B experiments using VWO's SmartStats engine to improve plan-selection pricing relevance and product discoverability</>,
      <>Co-engineered VWO's core recommendation engine roadmap by integrating AI-driven predictive modeling (Wandz / Personalize frameworks) to automate audience segmentation and deliver context-aware product suggestions</>,
      <>Engineered VWO's plug-and-play third-party ecosystem by productizing native data stream integrations with Twilio Segment, RudderStack, Mixpanel, Amplitude, and HubSpot; eliminated manual tracking script configurations to accelerate time-to-value for enterprise marketing teams</>,
      <>Reduced enterprise sales cycle duration by <strong>15%</strong> by translating complex client-side architecture requirements into standardized, scalable feature roadmaps that eliminated custom engineering overhead</>,
      <>Defended product roadmap decisions to C-suite and VP-level stakeholders by producing bi-weekly telemetry presentations analyzing user behavioral funnels, interface drop-offs, and commercial ARR impact metrics</>
    ],
  },
  {
    company: "Unity Senior Health",
    role: "Product Manager",
    period: "Oct 2024 - Apr 2025",
    highlights: [
      <>Launched a 0-to-1 Medicare insurance marketplace platform within a <strong>6-month timeline</strong>, transforming a manual workflow into an intuitive, self-serve digital decision-journey that captured <strong>300+ net-new organic enrollments</strong> ahead of the peak Annual Enrollment Period</>,
      <>Reduced checkout friction and user drop-offs by <strong>32%</strong> by conducting <strong>50+ direct customer interviews</strong> using the Jobs-to-be-Done framework to isolate and redesign interface areas causing cognitive overload during plan selection</>,
      <>Lowered customer acquisition costs by <strong>18%</strong> by partnering with pre-sales agents to analyze live phone objections and lead drop-offs and build a transparent plan-comparison that resolved user anxieties natively</>,
      <>Shipped a location-based personalization feature that dynamically mapped senior IP/ZIP data directly to localized in-network doctors and regional Medicare Advantage networks, eliminating a massive consumer pain point and driving a <strong>25% lift in quote accuracy</strong></>,
      <>Maintained a <strong>100% platform compliance rate</strong> across all states by designing backend database validation logic that natively enforces CMS communication guardrails, HIPAA data privacy frameworks, and TCPA consent laws</>,
      <>Analyzed user drop-offs and behavioral analytics across <strong>10,000+ early quote</strong> and eligibility search flows; data-prioritized high-impact UX enhancements that achieved <strong>300+ net-new organic digital enrollments</strong> within the post-launch quarter</>
    ],
  },
  {
    company: "Stallion Express",
    role: "Product Engineer",
    period: "Aug 2023 - Sep 2024",
    highlights: [
      <>Launched shipping option discovery, carrier search, &amp; shipping recommendations, reducing checkout friction through a proprietary linear-programming multi-carrier selection engine for <strong>40,000+ active e-commerce merchants</strong>; drove a <strong>14% decrease in cart abandonment</strong> by highlighting <strong>instant 70%+ savings</strong> against national carriers</>,
      <>Owned the technical roadmap, designed search routing models via Elasticsearch, Algolia, and BM25; utilized Bayesian AB testing across <strong>3.5M+ simulated search queries</strong> to increase checkout conversion rates by <strong>4.2%</strong> and directly lift platform ARR by <strong>$450K</strong></>,
      <>Drove local user adoption and <strong>accelerated onboarding by 22%</strong> by designing a geospatial, IP-to-GPS location personalization feature that mapped new users to their closest physical hub; reduced discovery-to-first-shipment latency and supported a total annual shipping volume of <strong>5M+ processed parcels</strong></>,
      <>Enabled the successful launch of <strong>10+ new "Drop &amp; Go" locations</strong> across the Montreal, Vancouver, and Surrey markets by rewriting backend database pricing logic to support 32 distinct regional pricing zones, ensuring <strong>100% billing accuracy</strong> and capturing <strong>$1.2M in new regional GMV</strong></>,
      <>Minimized payment friction and cross-border FX drop-offs by leading the technical integration of Stripe and PayPal multi-currency payment gateways; processed <strong>$2M+ in monthly transactional credits</strong>, allowing US and Canadian merchants to pay in native currency while <strong>eliminating a 2.5% foreign exchange transaction penalty</strong></>,
      <>Analyzed user behavioral funnels and clickstream data drops across web and mobile platforms using mixpanel/behavioral analytics; identified and prioritized 4 critical search-relevance bugs, resulting in a <strong>sustained 5% month-over-month growth rate</strong> in total customer lifetime value</>
    ],
  },
  {
    company: "Branding Arc",
    role: "Technical Program Manager - Cloud Migration",
    period: "Mar 2020 - Apr 2023",
    highlights: [
      <>Achieved a <strong>100% successful end-to-end migration program</strong> of 150+ legacy on-premises websites to AWS cloud infrastructure, ensuring business continuity by coordinating cross-functional teams to replace legacy hardware with using c5.large instances, and Amazon RDS</>,
      <>Established a <strong>zero-downtime delivery framework</strong> for a 150-site fleet by designing and implementing automated CI/CD pipelines, Auto Scaling groups, and Elastic Load Balancing, <strong>reducing deployment time by 40%</strong></>,
      <>Secured <strong>100% of corporate cloud environments</strong> against external cyber threats by architecting a multi-layered security topology using AWS VPC, custom subnets, and Sucuri firewalls to ensure strict GLBA data privacy and PCI-DSS payment compliance</>,
      <>Eliminated <strong>20+ hours of weekly manual work</strong> by engineering custom task automation scripts in Bash, transforming complex infrastructure provisioning into repeatable, standardized workflows</>
    ],
  },
  {
    company: "Branding Arc",
    role: "Program Manager - Digital Portfolio & E-Commerce",
    period: "Mar 2020 - May 2020",
    highlights: [
      <>Launched <strong>10+ revenue-generating B2B products</strong> for the debt collection and asset management sectors within a single quarter, integrating critical FDCPA and TCPA communication guardrails into the software architecture</>,
      <>Maintained <strong>100% system availability and compliance</strong> across 150+ enterprise websites by centralizing governance, automated backups, and real-time security checks via Orion ManageWP SaaS</>,
      <>Streamlined global payment collection capabilities across multiple digital products by engineering secure custom payment portals and integrating Stripe, PayPal, and Razorpay APIs</>,
      <>Defined and monitored critical technical KPIs, improved core platform search rankings by driving Google Web Vitals scores into the <strong>"Good" range (90+)</strong>; slashed LCP by 40% (under 2.5s), reduced First Input Delay (FID) to &lt;100ms, and eliminated visual instability (0.0 CLS), resulting in a <strong>10% decrease in bounce rate</strong> while structuring user data pipelines to respect CCPA data-deletion (DSAR) requests</>
    ],
  },
  {
    company: "Convoma X, Digital Marketing Agency",
    role: "UI/UX Designer",
    period: "Jun 2018 - Dec 2019",
    highlights: [
      <>Managed <strong>50k+ monthly website sessions</strong> for a fashion e-commerce brand, optimizing the platform to capture <strong>12,000 Monthly Active Loyalty Users</strong>. By implementing a rewards and cashback ecosystem, I drove a <strong>4% order conversion rate</strong> among active users, lowered the bounce rate, and maintained a <strong>20% retention rate</strong>. Operating at a <strong>$1.20 USD CAC</strong> and a <strong>$0.83 ARPU</strong>, the strategy consistently generated <strong>$9,960 USD in monthly revenue</strong></>,
      <>Integrated marketing campaign tools with websites like Mailchimp, Hubspots, Yoast SEO, etc</>,
      <>Spearheaded SEMrush SEO audits and technical strategy implementations to systematically boost organic search engine discovery and rankings</>,
      <>Partnered with cross-functional teams to deploy data-backed marketing campaigns via Mailchimp and Google Analytics to maximize visitor retention</>,
      <>Designed and launched a high-conversion e-commerce platform based on user-need and funnel analysis, driving <strong>1,000+ completed transactions</strong> in the first month and boosting engagement metrics by <strong>20%</strong></>
    ],
  }
];

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <Section id="resume" className="!py-[20px]">
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
          <div className="w-full lg:w-[35%] flex flex-col gap-8">
            <div className="bg-white p-8 rounded-2xl text-text-primary border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-br from-[#E86F93] to-transparent pointer-events-none"></div>
              <h3 className="text-2xl font-display font-semibold mb-2 relative z-10 text-text-primary">Bhagyashree Vaidya</h3>
              <p className="text-[#E86F93] text-sm font-medium mb-2 leading-relaxed relative z-10">
                Senior Product Manager | AI Personalization & Recommendation Systems | Bayesian A/B Testing | Product Analytics | Driving Growth via Behavioral Data | MSIM (Product & AI) @ UW '26
              </p>
            </div>

            <div className="px-2 font-medium flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
                Linkedin <span className="text-xl">↗</span>
              </a>
              <a href="#" className="hover:text-[#E86F93] transition-colors flex items-center gap-2">
                Git link <span className="text-xl">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[65%] flex gap-4 md:gap-8 items-start">
            {/* Scrollable Box */}
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex-1 h-[660px] border-[6px] border-[#F0AFC0]/60 rounded-[2.5rem] overflow-y-auto bg-white/40 backdrop-blur-md px-6 md:px-10 shadow-sm relative scroll-smooth"
            >
              <div className="flex flex-col">
                {roles.map((role, idx) => (
                  <div key={idx} id={`resume-item-${idx}`} className="w-full min-h-[660px] py-6 shrink-0 flex flex-col justify-start border-b border-[#F0AFC0]/20 last:border-0">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-gray-200 pb-2">
                      <h4 className="text-xl font-display font-semibold text-text-primary">{role.role}</h4>
                      <span className="font-mono text-xs text-text-tertiary mt-1 md:mt-0">{role.period}</span>
                    </div>
                    <h5 className="text-[#E86F93] font-medium font-mono text-[19px] uppercase tracking-widest mt-3">{role.company}</h5>
                    <ul className="list-disc list-inside space-y-1.5 text-text-secondary leading-snug font-light text-[13px] md:text-sm mt-2">
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
