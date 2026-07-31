"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const values = [
  {
    title: "Technical Depth",
    description: "I code. I understand system design. This makes me dangerous in product discussions because I don't settle for hand-waving.",
  },
  {
    title: "Experimentation Obsession",
    description: "Built frameworks for running 50+ rigorous A/B tests monthly. Belief in data over intuition, always.",
  },
  {
    title: "Systems Thinking",
    description: "Products don't exist in isolation. I think about feedback loops, second-order effects, and ripple impacts.",
  },
  {
    title: "AI Fluency",
    description: "Beyond hype. I understand what ML can and can't do, where AI creates real product value, and how to build AI systems.",
  },
  {
    title: "UX Obsession",
    description: "Great products are obsessed with user problems. I run research, iterate, and measure impact relentlessly.",
  },
  {
    title: "Execution Ability",
    description: "Ideas are easy. I obsess over shipping products and moving metrics. Have shipped 20+ features with measurable impact.",
  },
];

export default function Philosophy() {
  return (
    <Section id="philosophy" title="Philosophy." subtitle="Operating Principles">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {values.map((value, idx) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
            className="group"
          >
            <div className="text-xs font-mono text-text-muted mb-4 border-b border-border-primary/50 pb-4">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <h3 className="text-xl font-medium text-text-primary mb-4 tracking-tight">
              {value.title}
            </h3>
            <p className="text-sm font-light text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-500 ease-out-expo">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
