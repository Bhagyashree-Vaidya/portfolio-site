"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const findings = [
  {
    number: "1",
    headline: "It's not about trust",
    stat: "R² = 0.039",
    detail: 'Trust level explained under 4% of decision quality. Interventions focused on making people "trust AI less" are aimed at the wrong lever.',
  },
  {
    number: "2",
    headline: "The Awareness Shield",
    stat: "r = -0.47, p = 0.01",
    detail: "The better someone could identify AI bias, the less they accepted output uncritically. Bias awareness is a measurable protective factor.",
  },
  {
    number: "3",
    headline: "The Validation Vacuum",
    stat: "34% reduction",
    detail: "Moving from no validation process to a formal one cut blind acceptance by 34% — the single highest-ROI action in the dataset.",
  },
  {
    number: "4",
    headline: "The protection is unactivated",
    stat: "2 of 6",
    detail: "Only 2 of 6 interviewees named confirmation bias unprompted. The safeguard exists in teams; no one is actively holding it.",
  },
  {
    number: "5",
    headline: "The structural gap",
    stat: "2.5x faster",
    detail: "Organizations deploy AI approximately 2.5x faster than they build guardrails for it.",
  },
];

const recommendations = [
  "Human-in-the-loop review for high-impact AI-assisted decisions",
  "Source-data validation before acting on AI insights — the 34% fix",
  "Bias-awareness training as part of AI onboarding, not optional",
  "Approved-tool governance policy at the org level",
  "Structured peer review + quarterly post-decision audits — governance decays as fast as models do",
];

const tags = [
  "Research",
  "Mixed Methods",
  "Python",
  "Statistical Analysis",
  "AI Governance",
  "LLM",
  "Product Strategy",
  "Data Analysis",
  "libreQDA",
];

const team = [
  "Elliot Forst",
  "Sunayana Hazarika",
  "Anjuta K",
  "Kuntala Sarkar",
  "Harsh Vardhan",
  "Della Zhang",
  "Hritvik Gaur",
  "Bhagyashree Vaidya",
];

export default function ConfirmationBiasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <Link
            href="/#achievements"
            className="text-[#E86F93] hover:text-[#9C2F55] mb-8 inline-flex items-center gap-2 font-mono text-sm tracking-widest transition-colors"
          >
            ← BACK TO RESEARCH
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 text-xs font-mono font-bold bg-[#E86F93] text-white rounded-full">
                GRADUATE RESEARCH
              </span>
              <span className="text-text-muted text-sm font-mono tracking-widest uppercase">
                University of Washington · 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-text-primary tracking-tight">
              Confirmation Bias in AI Analytics Tools
            </h1>
            <p className="text-2xl text-text-secondary font-light leading-relaxed mb-8">
              Mixed-methods study revealing how LLM-based analytics tools
              quietly confirm what managers already believe — and what actually
              fixes it.
            </p>
            <a
              href="/downloads/confirmation-bias-llm-analytics.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#F0AFC0]/55 bg-gradient-to-r from-[#FFF1EA] to-[#FFDCE5] px-6 py-3.5 text-sm font-medium text-[#7C3B49] shadow-[0_14px_34px_rgba(232,111,147,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#E86F93]/70 hover:from-[#FFE7DC] hover:to-[#FFC9DA] hover:text-[#9C2F55]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Full Paper (PDF, 64 pages)
            </a>
          </motion.div>

          {/* Hero video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <div className="border-[4px] border-[#F0AFC0]/40 rounded-[2rem] bg-white/40 shadow-sm overflow-hidden relative">
              <div className="flex items-center gap-2 px-6 py-4 bg-[#FFF5F0] border-b border-[#F0AFC0]/40">
                <div className="flex gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-text-muted font-mono ml-4 uppercase tracking-widest">
                  Animated Research Poster — GSAP + CSS Grid + SVG
                </span>
              </div>
              <video
                src="/videos/LLM.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">Overview</h2>
            <div className="space-y-6 text-lg text-text-secondary font-light leading-relaxed">
              <p>
                AI analytics platforms promise data-driven decisions. But when
                the model predicting your next insight was trained to complete
                plausible text, it tends to surface what you're already
                looking for.
              </p>
              <p>
                This study investigated confirmation bias in LLM-based analytics
                tools used by managers at mid-to-large tech companies — and
                found that the common fix (telling people to "trust AI
                less") explains less than 4% of the problem.
              </p>
            </div>
          </motion.section>

          {/* The Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">The Problem</h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 font-light">
              Managers increasingly rely on LLM-based platforms to interpret
              business data. The way these tools generate text creates a subtle
              but measurable risk: the AI quietly confirms what the user already
              believes. The standard mitigation — a diverse team to challenge
              interpretations — isn't realistic for teams of one or two.
            </p>
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border-l-[6px] border-[#E86F93] shadow-sm relative overflow-hidden">
               <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
               <div className="relative z-10">
                <p className="text-[#E86F93] font-mono tracking-widest text-sm uppercase font-bold mb-3">
                  Research Question
                </p>
                <p className="text-text-primary text-xl md:text-2xl font-display leading-relaxed font-medium">
                  "Where exactly do AI-literacy gaps appear in how managers write
                  prompts and read outputs, and what governance practices close
                  those gaps?"
                </p>
              </div>
            </div>
          </motion.section>

          {/* Methods */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">Methods</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Approach", value: "Mixed methods — quantitative + qualitative" },
                { label: "Surveys", value: "29 participants, 24 variables" },
                { label: "Statistical analysis", value: "Pearson's r, Python" },
                { label: "Interviews", value: "6 in-depth interviews" },
                { label: "Coding tool", value: "libreQDA" },
                {
                  label: "Output",
                  value: "8 themes · 45 codes · 156 snippets across 314 code applications",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="p-6 rounded-[1.5rem] bg-white/60 border border-[#F0AFC0]/50 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-xs font-mono tracking-widest uppercase text-text-muted mb-2">{row.label}</div>
                  <div className="text-text-primary font-medium text-lg leading-snug">{row.value}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Key Findings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">Key Findings</h2>
            <div className="space-y-6">
              {findings.map((f, idx) => (
                <motion.div
                  key={f.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border border-[#F0AFC0]/40 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-[1rem] flex items-center justify-center bg-gradient-to-br from-[#E86F93] to-[#C1456A] text-white font-display font-bold text-2xl shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform">
                      {f.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-2xl font-display font-bold text-text-primary">{f.headline}</h3>
                        <span className="px-3 py-1 text-sm font-mono font-bold bg-white/60 border border-[#F0AFC0]/60 text-[#E86F93] rounded-full shadow-sm">
                          {f.stat}
                        </span>
                      </div>
                      <p className="text-text-secondary font-light text-lg leading-relaxed">{f.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What I Built */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-text-primary">What I Built</h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed">
              An animated research poster translating all findings into a visual
              format for non-academic audiences — built with GSAP, CSS Grid, and
              inline SVG. Designed for screen-recording and LinkedIn
              distribution.
            </p>
          </motion.section>

          {/* Recommendations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">Recommendations</h2>
            <div className="space-y-6">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border border-[#F0AFC0]/60 text-[#E86F93] font-display font-bold flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <p className="text-text-primary font-light leading-relaxed text-lg pt-1">{rec}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* What I Learned */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#E86F93] to-[#C1456A] text-white shadow-lg relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-display font-bold mb-6 opacity-90">What I Learned</h2>
                 <p className="text-xl md:text-2xl font-display font-medium leading-relaxed opacity-100">
                  The gap isn't between people who trust AI and people who
                  don't. It's between organizations that have structured
                  processes for validating AI output and those that don't. The
                  fix is institutional, not individual.
                 </p>
               </div>
            </div>
          </motion.section>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-mono rounded-full border border-[#F0AFC0]/40 bg-white/50 text-[#7C3B49] shadow-sm backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 p-10 rounded-[2.5rem] bg-white/50 border-[4px] border-[#F0AFC0]/30 shadow-sm"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-text-primary">Team</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {team.map((name) => (
                <span
                  key={name}
                  className={`px-4 py-2 rounded-full text-sm font-mono tracking-wide ${
                    name === "Bhagyashree Vaidya"
                      ? "bg-gradient-to-r from-[#E86F93] to-[#C1456A] text-white font-bold shadow-md"
                      : "bg-white border border-[#F0AFC0]/50 text-text-secondary"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="text-text-muted text-sm font-mono uppercase tracking-widest">
              University of Washington, MS Information Management, 2026
            </p>
          </motion.section>

          {/* CTA */}
          <div className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-[#FFF1EA] to-[#FFDCE5] border-[6px] border-white text-center shadow-[0_20px_60px_rgba(232,111,147,0.15)] mt-24 relative overflow-hidden">
             <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
             <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 text-text-primary tracking-tight">
                Want to discuss more?
              </h3>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#E86F93] px-10 py-5 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-[#9C2F55] focus:outline-none focus:ring-4 focus:ring-[#F0AFC0]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
