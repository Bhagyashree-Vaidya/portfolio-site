"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Starlink Satellite Detection",
      subtitle: "ML pipeline for satellite signal tracking",
      description:
        "Built real-time ML system achieving 90%+ accuracy in detecting and tracking Starlink satellites across a constellation of 4000+. Implemented signal processing pipeline with CNN model achieving production-grade reliability.",
      metrics: [
        { label: "Accuracy", value: "90%+" },
        { label: "Satellites Tracked", value: "4000+" },
        { label: "Manual Work Saved", value: "8+ hrs/week" },
      ],
      tags: ["Machine Learning", "Signal Processing", "Python", "Real-time Systems"],
      slug: "starlink-satellite-tracking",
      borderColor: "border-accent-primary",
    },
    {
      title: "VWO Conversion Platform",
      subtitle: "$10M+ revenue through optimization",
      description:
        "Drove $10M+ revenue growth by building systematic experimentation framework for VWO's core product. Designed and ran 50+ rigorous A/B tests with statistical rigor. Optimized BNPL adoption with 30% lift.",
      metrics: [
        { label: "Revenue Generated", value: "$10M+" },
        { label: "Experiments Run", value: "50+" },
        { label: "BNPL Lift", value: "30%" },
      ],
      tags: ["Product Strategy", "Data Analysis", "Experimentation", "Analytics"],
      slug: "vwo-conversion-optimization",
      borderColor: "border-accent-secondary",
    },
    {
      title: "Stallion Express Scale",
      subtitle: "35% MoM growth through automation",
      description:
        "Scaled logistics platform to 35% MoM traffic growth by implementing intelligent routing optimization and automated fulfillment. Reduced fulfillment processing time by 50% through product-level improvements.",
      metrics: [
        { label: "Traffic Growth", value: "35% MoM" },
        { label: "Customer Growth", value: "5%" },
        { label: "Fulfillment Reduction", value: "50%" },
      ],
      tags: ["Product Management", "Optimization", "Logistics", "Automation"],
      slug: "stallion-growth",
      borderColor: "border-accent-tertiary",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Deep dives into problems solved and impact delivered
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center`}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div
                  className={`p-8 bg-dark-secondary border-2 ${project.borderColor}`}
                >
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className={`font-semibold mb-4 ${project.borderColor.replace("border-", "text-")}`}>
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-6">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-xl font-bold text-accent-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-dark-bg border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="text-accent-primary font-bold hover:text-accent-secondary transition-colors"
                  >
                    Read Case Study →
                  </Link>
                </div>
              </div>

              <div
                className={`h-64 bg-gradient-to-br from-dark-secondary to-dark-bg border-2 ${project.borderColor} flex items-center justify-center ${
                  idx % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="text-center text-gray-500">
                  <div className="text-4xl font-bold mb-2">
                    {project.metrics[0].value}
                  </div>
                  <p className="text-sm">{project.metrics[0].label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
