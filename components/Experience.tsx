"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const roles = [
    {
      company: "VWO",
      role: "Senior Product Manager",
      period: "2022 - 2025",
      highlights: [
        "Drove $10M+ revenue growth through experimentation framework",
        "Scaled testing throughput to 50+ concurrent tests/month",
        "Built 100M+ events/day analytics pipeline",
      ],
    },
    {
      company: "UW Starlink Lab",
      role: "Graduate Researcher",
      period: "2021 - 2023",
      highlights: [
        "90%+ accuracy ML pipeline for satellite detection",
        "Real-time signal processing system",
        "Published research in top-tier conferences",
      ],
    },
    {
      company: "Stallion Express",
      role: "Product Manager",
      period: "2020 - 2021",
      highlights: [
        "35% MoM traffic growth through product optimization",
        "50% fulfillment time reduction",
        "Built market fit from zero to profitable",
      ],
    },
  ];

  const skills = [
    {
      category: "Product",
      items: ["Strategy", "Roadmapping", "OKRs", "Discovery", "GTM"],
    },
    {
      category: "Data",
      items: ["A/B Testing", "SQL", "Analytics", "Statistics", "Experimentation"],
    },
    {
      category: "Technical",
      items: ["Python", "Node.js", "Kubernetes", "AWS", "Microservices"],
    },
    {
      category: "AI/ML",
      items: ["Deep Learning", "Signal Processing", "LLMs", "Model Evaluation", "MLOps"],
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Experience & Background
            </h2>

            <div className="space-y-12">
              {roles.map((role, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-accent-primary pl-6 relative"
                >
                  <div className="absolute -left-3 w-5 h-5 bg-accent-primary rounded-full"></div>
                  <h3 className="text-2xl font-bold">{role.role}</h3>
                  <p className="text-accent-secondary font-semibold">
                    {role.company}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{role.period}</p>
                  <ul className="space-y-2">
                    {role.highlights.map((highlight, hidx) => (
                      <li key={hidx} className="text-gray-300 flex gap-3">
                        <span className="text-accent-primary">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skillGroup, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-accent-primary font-bold text-sm mb-2">
                      {skillGroup.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs bg-dark-secondary border border-gray-600 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
