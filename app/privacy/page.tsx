import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl font-bold mb-12">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-accent-primary mb-4">
                Introduction
              </h2>
              <p className="text-gray-300">
                This Privacy Policy describes how bhagyashree-portfolio.vercel.app
                ("we", "us", "our", or "Site") collects, uses, and shares
                information about you when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-secondary mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                We collect minimal information through this website:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>• Contact information you voluntarily provide (name, email)</li>
                <li>
                  • Usage data through analytics (pages visited, time spent,
                  referrer)
                </li>
                <li>
                  • Technical information (IP address, browser type, device type)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-tertiary mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use collected information for:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>• Responding to your inquiries and requests</li>
                <li>
                  • Improving and optimizing our website and user experience
                </li>
                <li>• Understanding usage patterns and trends</li>
                <li>• Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-primary mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-300 mb-4">
                This site uses the following third-party services:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>
                  • Vercel for hosting and deployment (see{" "}
                  <a
                    href="https://vercel.com/privacy"
                    className="text-accent-secondary hover:underline"
                  >
                    Vercel's Privacy Policy
                  </a>
                  )
                </li>
                <li>
                  • Google Analytics for usage tracking (see{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-accent-secondary hover:underline"
                  >
                    Google's Privacy Policy
                  </a>
                  )
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-secondary mb-4">
                Cookies
              </h2>
              <p className="text-gray-300">
                We use minimal cookies. Analytics cookies may be placed by
                third-party services to track usage patterns. You can control
                cookie settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-tertiary mb-4">
                Your Rights
              </h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>• Request what personal information we hold about you</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your information</li>
                <li>
                  • Opt out of analytics tracking through your browser settings
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:bhagyashreevaidya08@gmail.com"
                  className="text-accent-secondary hover:underline"
                >
                  bhagyashreevaidya08@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-primary mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300">
                We may update this policy periodically. Continued use of the
                site following changes constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-secondary mb-4">
                Contact
              </h2>
              <p className="text-gray-300">
                Questions about this Privacy Policy? Contact us at{" "}
                <a
                  href="mailto:bhagyashreevaidya08@gmail.com"
                  className="text-accent-secondary hover:underline"
                >
                  bhagyashreevaidya08@gmail.com
                </a>
              </p>
            </section>

            <p className="text-gray-400 text-sm pt-8">
              Last updated: May 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
