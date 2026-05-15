import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-400">
              I typically respond within 24 hours. Let me know what you're
              thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a
              href="mailto:bhagyashreevaidya08@gmail.com"
              className="p-8 bg-dark-secondary border-2 border-gray-700 hover:border-accent-primary transition-colors"
            >
              <div className="text-accent-primary font-bold text-lg mb-2">
                Email
              </div>
              <div className="text-gray-300 break-all">
                bhagyashreevaidya08@gmail.com
              </div>
            </a>

            <a
              href="https://linkedin.com/in/bhagyashree-vaidya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-dark-secondary border-2 border-gray-700 hover:border-accent-primary transition-colors"
            >
              <div className="text-accent-secondary font-bold text-lg mb-2">
                LinkedIn
              </div>
              <div className="text-gray-300">linkedin.com/in/bhagyashree-vaidya</div>
            </a>

            <a
              href="https://github.com/Bhagyashree-Vaidya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-dark-secondary border-2 border-gray-700 hover:border-accent-primary transition-colors"
            >
              <div className="text-accent-tertiary font-bold text-lg mb-2">
                GitHub
              </div>
              <div className="text-gray-300">github.com/Bhagyashree-Vaidya</div>
            </a>

            <div className="p-8 bg-dark-secondary border-2 border-gray-700">
              <div className="text-accent-primary font-bold text-lg mb-2">
                Location
              </div>
              <div className="text-gray-300">Seattle, WA</div>
            </div>
          </div>

          <div className="p-8 bg-dark-secondary border-2 border-accent-primary">
            <h2 className="text-2xl font-bold mb-6">What I'm Looking For</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent-secondary font-bold">✓</span>
                <span className="text-gray-300">
                  AI Product Manager / Technical Product Manager roles
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-secondary font-bold">✓</span>
                <span className="text-gray-300">Platform PM positions at infrastructure-focused companies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-secondary font-bold">✓</span>
                <span className="text-gray-300">Advisory roles at AI/ML focused startups</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent-secondary font-bold">✓</span>
                <span className="text-gray-300">
                  Technical leadership opportunities combining product strategy and engineering
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p>
              Open to relocation and flexible on timing for the right opportunity.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
