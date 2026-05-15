import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

interface CaseStudy {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: { label: string; value: string }[];
  learnings: string[];
  technologies: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  "starlink-satellite-tracking": {
    title: "Starlink Satellite Detection Pipeline",
    subtitle: "ML system for detecting and tracking 4000+ satellites with 90%+ accuracy",
    challenge:
      "Manual satellite signal detection was consuming 8+ hours per week across the team. The existing system could only handle a fraction of the satellite constellation and had inconsistent accuracy across different signal types.",
    solution:
      "Built an ML pipeline using signal processing and deep learning to automatically detect satellite signals. Implemented feature extraction from raw signal data, trained a CNN model on historical observations, and created a real-time detection system. Integrated with existing tracking infrastructure and built monitoring dashboards.",
    impact: [
      { label: "Accuracy Improvement", value: "90%+" },
      { label: "Satellites Tracked", value: "4000+" },
      { label: "Manual Work Reduced", value: "8+ hrs/week" },
      { label: "System Uptime", value: "99.8%" },
    ],
    learnings: [
      "Signal processing requires domain expertise—worked closely with RF engineers to understand noise characteristics",
      "Model generalization is critical when dealing with real-world signals across seasons and weather",
      "Monitoring and alerting are as important as the model itself—false negatives caused bigger issues than false positives",
      "Starting with a simple baseline and iterating beats trying to build the perfect system from day one",
    ],
    technologies: ["Python", "TensorFlow", "Signal Processing", "PostgreSQL", "Kubernetes"],
  },
  "vwo-conversion-optimization": {
    title: "VWO Conversion Rate Optimization",
    subtitle: "Drove $10M+ revenue through experimentation and BNPL optimization",
    challenge:
      "VWO had high traffic but struggled with conversion. The team was running ad-hoc tests without a systematic framework. Buy Now Pay Later (BNPL) adoption was low, limiting potential revenue uplift.",
    solution:
      "Built an end-to-end experimentation framework including power calculation, sample size estimation, and statistical rigor requirements. Designed and ran 50+ experiments systematically across checkout flow, payment methods, and trust signals. Specifically optimized BNPL positioning and made it the default for qualifying customers.",
    impact: [
      { label: "Revenue Generated", value: "$10M+" },
      { label: "Experiments Run", value: "50+" },
      { label: "BNPL Adoption Lift", value: "30%" },
      { label: "AOV Increase", value: "4%" },
    ],
    learnings: [
      "Statistical rigor prevents costly mistakes—we caught several false positives early because we had proper sample sizing",
      "Customer segments respond differently—checkout optimization that works for Tier 1 cities didn't work for Tier 2",
      "Velocity + rigor is possible—we ran experiments weekly without sacrificing statistical validity",
      "Behavioral patterns matter more than demographic segments in optimization",
    ],
    technologies: ["Python", "R", "SQL", "A/B Testing", "Amplitude", "Stripe API"],
  },
  "stallion-growth": {
    title: "Stallion Express Scale",
    subtitle: "Scaled logistics platform to 35% MoM growth with efficiency improvements",
    challenge:
      "Stallion Express faced fulfillment bottlenecks causing delivery delays. Manual routing and sorting consumed 50% of fulfillment time. Traffic was growing but infrastructure couldn't keep pace efficiently.",
    solution:
      "Implemented intelligent routing optimization using local search algorithms. Built automated package sorting system with barcode scanning. Redesigned fulfillment workflow to reduce manual touchpoints. Scaled infrastructure horizontally while optimizing costs.",
    impact: [
      { label: "Traffic Growth", value: "35% MoM" },
      { label: "Customer Growth", value: "5%" },
      { label: "Fulfillment Time Reduction", value: "50%" },
      { label: "Cost per Shipment", value: "-25%" },
    ],
    learnings: [
      "Operations and product must align—the best tech solution fails without operational buy-in",
      "Incremental rollouts are critical in logistics—we launched in one city first to catch issues",
      "Data from the field is gold—delivery partners' feedback drove the most impactful optimizations",
      "UX for logistics systems is often overlooked but determines adoption speed",
    ],
    technologies: ["Node.js", "React", "Google Maps API", "PostgreSQL", "AWS", "Machine Learning"],
  },
};

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-dark-bg pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/case-studies" className="text-accent-primary hover:text-accent-secondary">
              ← Back to Case Studies
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <Link
            href="/case-studies"
            className="text-accent-primary hover:text-accent-secondary mb-8 inline-block"
          >
            ← Back to Case Studies
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{study.title}</h1>
            <p className="text-xl text-gray-400">{study.subtitle}</p>
          </div>

          <div className="mb-16 p-8 bg-dark-secondary border-2 border-accent-primary">
            <h2 className="text-2xl font-bold mb-4">Impact Metrics</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {study.impact.map((metric) => (
                <div key={metric.label}>
                  <div className="text-4xl font-bold text-accent-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4">Challenge</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {study.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Solution</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {study.solution}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
              <ul className="space-y-4">
                {study.learnings.map((learning, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-accent-secondary font-bold flex-shrink-0">
                      •
                    </span>
                    <span className="text-gray-300">{learning}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-dark-bg border border-gray-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-16 p-8 bg-dark-secondary border-2 border-accent-primary text-center">
            <h3 className="text-2xl font-bold mb-4">Want to discuss more?</h3>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-accent-primary text-dark-bg font-bold hover:bg-accent-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CaseStudyPage;
