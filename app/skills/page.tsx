import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Product & Go-to-Market",
      accent: "text-accent-primary",
      skills: [
        "Product Strategy",
        "Business Model Design",
        "Go-to-market Strategy",
        "Customer Discovery",
        "Market Sizing",
        "Competitive Analysis",
        "Product Roadmapping",
        "Requirements Definition",
        "Wireframing & Prototyping",
      ],
    },
    {
      title: "Analytics & Data",
      accent: "text-accent-secondary",
      skills: [
        "A/B Testing",
        "Statistical Analysis",
        "Experimentation Design",
        "SQL",
        "Data Visualization",
        "Amplitude / Mixpanel",
        "Google Analytics",
        "Cohort Analysis",
        "Funnel Analysis",
      ],
    },
    {
      title: "Technical & Engineering",
      accent: "text-accent-tertiary",
      skills: [
        "Python",
        "JavaScript / Node.js",
        "PostgreSQL / SQL",
        "System Design",
        "Microservices",
        "API Design",
        "Kubernetes",
        "AWS",
        "Docker",
      ],
    },
    {
      title: "AI & Machine Learning",
      accent: "text-accent-primary",
      skills: [
        "Machine Learning Systems",
        "Deep Learning (TensorFlow)",
        "Signal Processing",
        "LLMs & Prompt Engineering",
        "Model Evaluation",
        "Feature Engineering",
        "Data Pipelines",
        "MLOps",
        "Neural Networks",
      ],
    },
    {
      title: "Design & User Experience",
      accent: "text-accent-secondary",
      skills: [
        "UX Research",
        "User Testing",
        "Information Architecture",
        "Interaction Design",
        "Design Systems",
        "Figma",
        "Accessibility (a11y)",
        "Mobile UX",
        "Conversion Optimization",
      ],
    },
    {
      title: "Infrastructure & DevOps",
      accent: "text-accent-tertiary",
      skills: [
        "AWS (EC2, S3, RDS, Lambda)",
        "Kubernetes",
        "Docker",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Observability",
        "Performance Optimization",
        "Security Best Practices",
        "Database Design",
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Skills</h1>
            <p className="text-xl text-gray-400">
              Technical depth combined with product intuition and strategic thinking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 bg-dark-secondary border-2 border-gray-700 hover:border-accent-primary transition-colors"
              >
                <h3 className={`text-xl font-bold mb-4 ${category.accent}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-dark-bg border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-dark-secondary border-2 border-accent-primary">
            <h2 className="text-3xl font-bold mb-8">What Sets Me Apart</h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-accent-primary mb-2">
                  🔧 Technical Depth
                </h4>
                <p className="text-gray-300">
                  I don't just understand technology—I've built systems at scale.
                  This means I can have genuine technical conversations with your
                  engineering team and make informed tradeoff decisions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-accent-secondary mb-2">
                  📊 Experimentation Culture
                </h4>
                <p className="text-gray-300">
                  Built from the ground up frameworks for running rigorous A/B
                  tests. Not just running tests, but building the scientific
                  thinking that powers good product decisions.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-accent-tertiary mb-2">
                  🧠 AI Fluency
                </h4>
                <p className="text-gray-300">
                  Beyond hype. I understand what ML can and can't do, how to
                  evaluate AI systems, and where AI creates real product value
                  vs. where it's novelty.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-accent-primary mb-2">
                  🚀 Execution Obsession
                </h4>
                <p className="text-gray-300">
                  Ideas are cheap. I obsess over getting to shipped product and
                  real user impact. Have shipped 20+ features, each with
                  measurable impact.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-accent-secondary mb-2">
                  🎯 Systems Thinking
                </h4>
                <p className="text-gray-300">
                  Product decisions don't happen in isolation. I think about
                  feedback loops, second-order effects, and how changes ripple
                  through your entire system.
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
