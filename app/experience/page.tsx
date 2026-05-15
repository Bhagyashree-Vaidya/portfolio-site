import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  const roles = [
    {
      company: "VWO",
      role: "Senior Product Manager",
      period: "2022-2025",
      location: "Remote",
      description:
        "Led product strategy for core experimentation and conversion optimization platform serving 5000+ customers globally.",
      achievements: [
        "Drove $10M+ revenue growth through systematic experimentation framework and BNPL integration",
        "Scaled experimentation throughput from 5 to 50+ concurrent tests/month without quality degradation",
        "Built analytics pipeline supporting 100M+ events/day with sub-second query latency",
        "Mentored team of 4 PMs and established product culture around data-driven decision making",
      ],
    },
    {
      company: "University of Washington",
      role: "Graduate Student Researcher",
      period: "2021-2023",
      location: "Seattle, WA",
      description:
        "Conducted research on satellite signal detection and communication systems in Prof. Sumit Roy's lab.",
      achievements: [
        "Built ML pipeline achieving 90%+ accuracy on Starlink satellite detection across 4000+ satellites",
        "Implemented real-time signal processing system reducing manual work by 8+ hours/week",
        "Published findings in top-tier conferences and collaborated with industry partners",
        "Advised undergraduate researchers on signal processing and machine learning applications",
      ],
    },
    {
      company: "Stallion Express",
      role: "Product Manager",
      period: "2020-2021",
      location: "India",
      description:
        "Built logistics optimization product for supply chain customers, scaling from 0 to profitability.",
      achievements: [
        "Scaled platform to 35% MoM traffic growth and 5% customer growth through product optimization",
        "Reduced fulfillment processing time by 50% through intelligent routing and automation",
        "Designed and shipped 3 major product features with 90%+ team adoption",
        "Conducted market research across 15 logistics companies to validate product-market fit",
      ],
    },
    {
      company: "Epicenter",
      role: "Senior Software Engineer",
      period: "2018-2020",
      location: "Bangalore, India",
      description:
        "Built backend systems and infrastructure for SaaS platform serving enterprise customers.",
      achievements: [
        "Architected microservices system handling 10M+ requests/day with <100ms latency",
        "Led migration from monolith to Kubernetes, reducing deployment time from hours to minutes",
        "Built real-time analytics system processing 100M+ events/day",
        "Mentored 5 junior engineers and established engineering best practices",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Experience</h1>
            <p className="text-xl text-gray-400">
              6+ years building products, scaling infrastructure, and driving impact
            </p>
          </div>

          <div className="space-y-12">
            {roles.map((role, idx) => (
              <div key={idx} className="border-l-4 border-accent-primary pl-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold">{role.role}</h3>
                    <p className="text-accent-secondary font-semibold">
                      {role.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-3">
                  {role.period} · {role.location}
                </p>

                <p className="text-gray-300 mb-4">{role.description}</p>

                <ul className="space-y-2">
                  {role.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="flex gap-3">
                      <span className="text-accent-tertiary font-bold flex-shrink-0">
                        →
                      </span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-dark-secondary border-2 border-accent-primary">
            <h3 className="text-2xl font-bold mb-4">Skills & Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-accent-primary font-bold mb-2">
                  Product & Strategy
                </h4>
                <p className="text-gray-400 text-sm">
                  Product strategy, Go-to-market, User research, OKRs,
                  Experimentation, Analytics
                </p>
              </div>
              <div>
                <h4 className="text-accent-secondary font-bold mb-2">
                  Technical
                </h4>
                <p className="text-gray-400 text-sm">
                  Python, Node.js, PostgreSQL, Kubernetes, AWS, Signal
                  processing, Machine Learning
                </p>
              </div>
              <div>
                <h4 className="text-accent-tertiary font-bold mb-2">Data & AI</h4>
                <p className="text-gray-400 text-sm">
                  Statistical testing, A/B testing, ML systems, LLMs, Data
                  pipelines, Analytics
                </p>
              </div>
              <div>
                <h4 className="text-accent-primary font-bold mb-2">
                  Leadership
                </h4>
                <p className="text-gray-400 text-sm">
                  Team mentoring, Cross-functional collaboration, Project
                  management, Documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
