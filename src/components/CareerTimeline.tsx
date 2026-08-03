"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Section from "./Section";

const dummyHighlights = [
  "Lorem ipsum dummy text with note - add only metric and impact.",
  "Lorem ipsum dummy text with note - add only metric and impact."
];

const roles = [
  {
    company: "UW Starlink",
    role: "Graduate Product Developer",
    period: "Mar 2026 - Present",
    highlights: dummyHighlights,
  },
  {
    company: "VWO",
    role: "Senior Product Manager",
    period: "May 2025 - Sep 2025",
    highlights: dummyHighlights,
  },
  {
    company: "Unity Senior Health",
    role: "Product Manager",
    period: "Oct 2024 - Apr 2025",
    highlights: dummyHighlights,
  },
  {
    company: "Stallion Express",
    role: "Product Engineer",
    period: "Aug 2023 - Sep 2024",
    highlights: dummyHighlights,
  },
  {
    company: "Epicenter",
    role: "Software Engineer",
    period: "Mar 2020 - Apr 2023",
    highlights: dummyHighlights,
  },
  {
    company: "Convoma X",
    role: "UI/UX Designer",
    period: "Jun 2018 - Dec 2019",
    highlights: dummyHighlights,
  }
];

export default function CareerTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Section id="timeline" className="!py-[20px] mt-[10vh]">
      <div className="mb-[20px]">
        <h3 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-2">Career Timeline</h3>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-text-primary">Trajectory.</h2>
      </div>

      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col border-t border-border-primary/50">
          {roles.map((role, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group border-b border-border-primary/50"
              >
                <button 
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className={`flex w-full flex-col gap-4 rounded-[2rem] px-5 py-8 text-left transition-all duration-500 ease-out-expo md:flex-row md:items-baseline md:gap-12 md:px-7 md:py-10 ${
                    isExpanded
                      ? "bg-gradient-to-r from-[#FFF1EA] to-[#FFDCE5] shadow-[0_18px_42px_rgba(232,111,147,0.12)]"
                      : "hover:bg-[#FFF5F0] hover:shadow-[0_14px_34px_rgba(232,111,147,0.08)]"
                  }`}
                >
                  <div className="md:w-1/4 font-mono text-xs text-text-muted uppercase tracking-widest shrink-0">
                    {role.period}
                  </div>
                  <div className="md:w-3/4 flex flex-col md:flex-row md:items-baseline justify-between gap-4 w-full">
                    <h3 className="text-2xl md:text-3xl font-display font-medium text-text-primary tracking-tight">
                      {role.role}
                    </h3>
                    <span className="font-mono text-sm text-text-secondary tracking-widest">
                      {role.company}
                    </span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-12 px-5 md:px-0 md:pl-[calc(25%+3rem)] space-y-8">
                        {role.highlights.map((highlight, hidx) => (
                          <p key={hidx} className="text-lg text-text-secondary font-light leading-relaxed">
                            {highlight}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
