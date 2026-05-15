import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Resume</h1>
            <a
              href="/resume.pdf"
              className="px-6 py-2 bg-accent-primary text-dark-bg font-bold hover:bg-accent-secondary transition-colors"
            >
              Download PDF
            </a>
          </div>

          <div className="bg-dark-secondary p-8 border-2 border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-2">Bhagyashree Vaidya</h2>
            <p className="text-accent-primary font-semibold mb-3">
              AI-Enabled Product Manager | Product Strategy | ML Systems
            </p>
            <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
              <span>📍 Seattle, WA</span>
              <span>📧 bhagyashreevaidya08@gmail.com</span>
              <span>🔗 linkedin.com/in/bhagyashree-vaidya</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold mb-4 text-accent-primary">
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
                AI-enabled product manager with 6+ years of experience building
                scalable products, leading technical teams, and driving business
                impact. Proven ability to combine technical depth with product
                strategy to solve complex problems. Experience across ML systems,
                experimentation platforms, logistics optimization, and
                infrastructure scaling. Track record of delivering $10M+ revenue
                growth and 90%+ accuracy ML systems.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-accent-secondary">
                Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg">
                    Senior Product Manager at VWO
                  </h4>
                  <p className="text-gray-400 text-sm">2022 - 2025 | Remote</p>
                  <ul className="mt-2 space-y-1 text-gray-300">
                    <li>
                      • Drove $10M+ revenue growth through systematic
                      experimentation framework
                    </li>
                    <li>
                      • Scaled experimentation throughput to 50+ concurrent
                      tests/month
                    </li>
                    <li>
                      • Built analytics pipeline supporting 100M+ events/day
                    </li>
                    <li>• Mentored team of 4 PMs on data-driven decision making</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Graduate Research Student</h4>
                  <p className="text-gray-400 text-sm">
                    2021 - 2023 | University of Washington, Seattle, WA
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-300">
                    <li>
                      • Built ML pipeline achieving 90%+ accuracy on Starlink
                      satellite detection
                    </li>
                    <li>
                      • Implemented real-time signal processing system reducing
                      manual work by 8+ hours/week
                    </li>
                    <li>
                      • Published research in top-tier conferences on signal
                      detection
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Product Manager at Stallion Express</h4>
                  <p className="text-gray-400 text-sm">2020 - 2021 | India</p>
                  <ul className="mt-2 space-y-1 text-gray-300">
                    <li>• Scaled platform to 35% MoM growth and 5% customer growth</li>
                    <li>
                      • Reduced fulfillment processing time by 50% through
                      intelligent routing
                    </li>
                    <li>
                      • Designed and shipped 3 major features with 90%+ adoption
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Senior Software Engineer at Epicenter
                  </h4>
                  <p className="text-gray-400 text-sm">2018 - 2020 | Bangalore, India</p>
                  <ul className="mt-2 space-y-1 text-gray-300">
                    <li>• Architected microservices handling 10M+ requests/day</li>
                    <li>
                      • Led migration from monolith to Kubernetes, reducing
                      deployment time
                    </li>
                    <li>• Built analytics system processing 100M+ events/day</li>
                    <li>• Mentored 5 junior engineers on best practices</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-accent-tertiary">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-lg">
                    Master of Science in Electrical & Computer Engineering
                  </h4>
                  <p className="text-gray-400 text-sm">
                    University of Washington | 2021-2023
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    Bachelor of Technology in Electronics & Communication
                  </h4>
                  <p className="text-gray-400 text-sm">
                    VIT University, India | 2014-2018
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4 text-accent-primary">
                Key Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-accent-secondary font-semibold mb-2">
                    Product & Strategy
                  </p>
                  <p className="text-gray-400 text-sm">
                    Product strategy, GTM, OKRs, Experimentation, Analytics,
                    Customer research
                  </p>
                </div>
                <div>
                  <p className="text-accent-tertiary font-semibold mb-2">
                    Technical
                  </p>
                  <p className="text-gray-400 text-sm">
                    Python, Node.js, PostgreSQL, Kubernetes, AWS, ML systems
                  </p>
                </div>
                <div>
                  <p className="text-accent-primary font-semibold mb-2">
                    AI & ML
                  </p>
                  <p className="text-gray-400 text-sm">
                    ML Systems, Deep Learning, Signal Processing, LLMs, Data
                    pipelines
                  </p>
                </div>
                <div>
                  <p className="text-accent-secondary font-semibold mb-2">
                    Leadership
                  </p>
                  <p className="text-gray-400 text-sm">
                    Team mentoring, Cross-functional collaboration, Project
                    management
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p>References available upon request</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
