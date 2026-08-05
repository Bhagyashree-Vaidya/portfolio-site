"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";

const achievements = [
  {
    type: "Grant",
    title: "PAMA — AI-Powered Biography Platform",
    org: "UW iSchool Startup Grant",
    detail: "Spring 2026 · Health & Wellness Category · $500",
    description: "Co-founded a collaborative, AI-powered biography platform. Families create a shared story page, invite contributors, and the AI organizes memories into a cohesive life story. Awarded as one of eight projects in the Spring 2026 cohort.",
    externalLink: "https://startup.ischool.uw.edu/grants/#:~:text=Hazarika%20(MSIM%20%E2%80%9926)-,Bhagyashree%20Vaidya,-(INFO%20%E2%80%9926)",
  },
  {
    type: "RESEARCH PAPER",
    title: "Confirmation Bias in LLM-Based AI Analytics Tools",
    org: "IMT 570 E · Data Driven Organizational Problem Solving",
    detail: "June 2026",
    description: "Mixed-methods study revealing how LLM-based analytics tools quietly confirm what managers already believe — and what actually fixes it.",
    metrics: [
      { value: "R² = 0.039", label: "Trust → Quality" },
      { value: "r = -0.47", label: "Bias Awareness" },
      { value: "34% reduction", label: "Validation Fix" }
    ],
    tags: ["Mixed Methods", "Python", "AI Governance", "LLM", "libreQDA"],
    externalLink: "/research/confirmation-bias-ai",
    externalLinkText: "Read Summary →",
    downloadLink: "/downloads/confirmation-bias-llm-analytics.pdf"
  },
];

export default function SelectedAchievements() {
  return (
    <>
      <Section id="achievements" className="!py-[20px] mt-[10vh]">
        <div className="mb-[20px]">
          <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Selected Achievements</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary">Accolades.</h2>
        </div>
        <div className="flex flex-col gap-8 mt-12 border-t border-border-primary/50 w-full max-w-[1200px] mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="group grid md:grid-cols-12 gap-8 py-12 border-b border-border-primary/50 items-start"
            >
              <div className="md:col-span-3 space-y-2">
                <span className="inline-block rounded-full border border-[#F5B5C5]/45 bg-[#FFF2EC] px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#7C3B49]">
                  {item.type}
                </span>
                <p className="text-xs font-mono text-text-muted uppercase tracking-widest pt-2">
                  {item.detail}
                </p>
              </div>
              
              <div className="md:col-span-9 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-text-primary group-hover:text-[#E86F93] transition-colors duration-500 ease-out-expo mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-mono text-text-secondary tracking-widest uppercase">
                    {item.org}
                  </p>
                </div>
                <p className="text-lg text-text-secondary font-light leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Metrics */}
                {item.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    {item.metrics.map((metric, midx) => (
                      <div key={midx} className="flex flex-col gap-1">
                        <span className="text-2xl md:text-3xl font-display font-bold text-[#E86F93]">
                          {metric.value}
                        </span>
                        <span className="text-sm font-mono text-text-secondary tracking-widest uppercase">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tidx) => (
                      <span key={tidx} className="px-3 py-1.5 text-xs font-mono rounded-full border border-[#F0AFC0]/40 bg-white/50 text-[#7C3B49] shadow-sm backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {item.externalLink && (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-lg font-medium text-[#7C3B49] hover:text-[#E86F93] transition-colors duration-300"
                    >
                      {item.externalLinkText || "View Source ↗"}
                    </a>
                  )}
                  {item.downloadLink && (
                    <a
                      href={item.downloadLink}
                      download
                      className="inline-flex items-center gap-2 rounded-full border border-[#F0AFC0]/55 bg-gradient-to-r from-[#FFF1EA] to-[#FFDCE5] px-6 py-3 text-sm font-medium text-[#7C3B49] shadow-[0_14px_34px_rgba(232,111,147,0.12)] transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-[#E86F93]/70 hover:from-[#FFE7DC] hover:to-[#FFC9DA] hover:text-[#9C2F55]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      <section id="contact" aria-hidden="true" className="relative z-10 w-full bg-bg-primary overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 text-bg-primary md:h-24">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M0 0h1440v42c-92 30-188 44-288 42-136-2-232-42-370-44-155-2-250 48-398 50C241 92 137 48 0 78V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <Image
          src="/images/Main.svg"
          alt="Paper cutout landscape"
          width={2400}
          height={883}
          unoptimized
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>
    </>
  );
}
