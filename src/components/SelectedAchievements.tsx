"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const achievements = [
  {
    type: "Grant",
    title: "PAMA: AI-Powered Biography Platform",
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
    description: "Mixed-methods study revealing how LLM-based analytics tools quietly confirm what managers already believe, and what actually fixes it.",
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
    <Section id="achievements" className="!py-10">
      <div className="mb-5">
        <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-1">Selected Achievements</h3>
        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary">Accolades.</h2>
      </div>
      <div className="grid w-full gap-5 md:grid-cols-2">
        {achievements.map((item, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
            className="flex flex-col rounded-[24px] border border-border-primary/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm md:p-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#F5B5C5]/45 bg-[#FFF2EC] px-3 py-0.5 text-[11px] font-mono uppercase tracking-widest text-[#7C3B49]">{item.type}</span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted">{item.detail}</span>
            </div>
            <h3 className="mt-3 text-xl font-display font-semibold tracking-tight text-text-primary md:text-2xl">{item.title}</h3>
            <p className="mt-1 text-xs font-mono uppercase tracking-widest text-text-secondary">{item.org}</p>
            <p className="mt-3 text-[15px] font-light leading-relaxed text-text-secondary">{item.description}</p>
            {item.metrics && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                {item.metrics.map((m, i) => (
                  <div key={i}>
                    <p className="text-base font-display font-bold text-[#C2456E] md:text-lg">{m.value}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-text-secondary">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
              {item.externalLink && (
                <a href={item.externalLink} target={item.externalLink.startsWith("/") ? undefined : "_blank"} rel="noopener noreferrer" className="text-sm font-medium text-[#7C3B49] hover:text-[#E86F93]">
                  {item.externalLinkText || "View source ↗"}
                </a>
              )}
              {item.downloadLink && (
                <a href={item.downloadLink} download className="rounded-full border border-[#F0AFC0]/55 bg-[#FFF1EA] px-4 py-1.5 text-xs font-medium text-[#7C3B49] hover:text-[#9C2F55]">
                  Download PDF
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
