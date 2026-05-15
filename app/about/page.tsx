import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About Me
            </h1>
            <p className="text-xl text-gray-400">
              Building the future of AI-enabled products and infrastructure
            </p>
          </div>

          <div className="space-y-16">
            <div className="border-l-4 border-accent-primary pl-8">
              <h2 className="text-3xl font-bold mb-4">
                Architect <span className="text-accent-secondary">(2018-2020)</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Started my career diving deep into backend systems. Architected
                microservices, built APIs, and learned the fundamentals of
                scalable infrastructure. This foundation shaped how I think
                about product tradeoffs—nothing is designed in isolation.
              </p>
            </div>

            <div className="border-l-4 border-accent-tertiary pl-8">
              <h2 className="text-3xl font-bold mb-4">
                Product Thinker <span className="text-accent-secondary">(2020-2025)</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Transitioned to product management and built conviction around
                customer problems. Led experimentation frameworks that drove
                $10M+ revenue growth. Learned that the best products emerge from
                balancing technical possibilities with user needs.
              </p>
            </div>

            <div className="border-l-4 border-accent-primary pl-8">
              <h2 className="text-3xl font-bold mb-4">
                AI Frontier <span className="text-accent-secondary">(2026+)</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Now obsessed with AI as the next fundamental shift. Not just
                ML models, but how AI changes product design, infrastructure,
                and customer interactions. Building products that turn AI
                capabilities into tangible user value.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-dark-secondary border border-gray-700">
                <h4 className="text-lg font-bold text-accent-primary mb-2">
                  Technical Depth
                </h4>
                <p className="text-gray-400">
                  I code. I understand system design. This makes me dangerous in
                  product discussions because I don't settle for "the engineers
                  will figure it out."
                </p>
              </div>

              <div className="p-6 bg-dark-secondary border border-gray-700">
                <h4 className="text-lg font-bold text-accent-secondary mb-2">
                  Execution Obsession
                </h4>
                <p className="text-gray-400">
                  Ideas are easy. Shipping is hard. I obsess over the details
                  that separate great products from mediocre ones.
                </p>
              </div>

              <div className="p-6 bg-dark-secondary border border-gray-700">
                <h4 className="text-lg font-bold text-accent-tertiary mb-2">
                  Systems Thinking
                </h4>
                <p className="text-gray-400">
                  Products don't exist in isolation. I think about feedback
                  loops, second-order effects, and how changes ripple through
                  the system.
                </p>
              </div>

              <div className="p-6 bg-dark-secondary border border-gray-700">
                <h4 className="text-lg font-bold text-accent-primary mb-2">
                  User Empathy
                </h4>
                <p className="text-gray-400">
                  Everything starts with understanding the user. Not just
                  demographics, but their frustrations, workflows, and what
                  keeps them up at night.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 p-8 bg-dark-secondary border-2 border-accent-primary">
            <p className="text-center text-gray-300 mb-6">
              I'm looking for roles where I can apply technical depth to
              ambitious product problems. Whether it's an AI PM role, Technical
              PM, or Platform PM position—if the problem is hard and the
              mission matters, I'm interested.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-accent-primary text-dark-bg font-bold hover:bg-accent-secondary transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
