"use client";

import { motion } from "framer-motion";

export default function ValueProposition() {
  const values = [
    {
      title: "Technical Depth",
      description:
        "I code. I understand system design. This makes me dangerous in product discussions because I don't settle for hand-waving.",
      accent: "text-accent-primary",
      borderColor: "border-accent-primary",
    },
    {
      title: "Experimentation Obsession",
      description:
        "Built frameworks for running 50+ rigorous A/B tests monthly. Belief in data over intuition, always.",
      accent: "text-accent-secondary",
      borderColor: "border-accent-secondary",
    },
    {
      title: "Systems Thinking",
      description:
        "Products don't exist in isolation. I think about feedback loops, second-order effects, and ripple impacts.",
      accent: "text-accent-tertiary",
      borderColor: "border-accent-tertiary",
    },
    {
      title: "AI Fluency",
      description:
        "Beyond hype. I understand what ML can and can't do, where AI creates real product value, and how to build AI systems.",
      accent: "text-accent-primary",
      borderColor: "border-accent-primary",
    },
    {
      title: "UX Obsession",
      description:
        "Great products are obsessed with user problems. I run research, iterate, and measure impact relentlessly.",
      accent: "text-accent-secondary",
      borderColor: "border-accent-secondary",
    },
    {
      title: "Execution Ability",
      description:
        "Ideas are easy. I obsess over shipping products and moving metrics. Have shipped 20+ features with measurable impact.",
      accent: "text-accent-tertiary",
      borderColor: "border-accent-tertiary",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-xl text-gray-400">
            Six dimensions of product thinking that drive outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 bg-dark-bg border-2 ${value.borderColor} hover:bg-dark-secondary transition-all`}
            >
              <h3 className={`text-lg font-bold mb-3 ${value.accent}`}>
                {value.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
