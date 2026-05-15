import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-dark-bg pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-5xl font-bold mb-12">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-accent-primary mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-300">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-secondary mb-4">
                Use License
              </h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on this website for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not:
              </p>
              <ul className="list-none space-y-2 text-gray-300 ml-4">
                <li>• Modifying or copying the materials</li>
                <li>
                  • Using the materials for any commercial purpose or for any
                  public display
                </li>
                <li>• Attempting to decompile or reverse engineer any software</li>
                <li>
                  • Transferring the materials to another person or "mirroring"
                  the materials on any other server
                </li>
                <li>
                  • Removing any copyright or other proprietary notations from
                  the materials
                </li>
                <li>
                  • Transferring the materials to another person or "mirroring"
                  the materials on any other server
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-tertiary mb-4">
                Disclaimer
              </h2>
              <p className="text-gray-300">
                The materials on this website are provided on an 'as is' basis.
                We make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties including, without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-primary mb-4">
                Limitations
              </h2>
              <p className="text-gray-300">
                In no event shall Bhagyashree Vaidya or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-secondary mb-4">
                Accuracy of Materials
              </h2>
              <p className="text-gray-300">
                The materials appearing on this website could include technical,
                typographical, or photographic errors. We do not warrant that
                any of the materials on this website are accurate, complete, or
                current. We may make changes to the materials contained on this
                website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-tertiary mb-4">
                Links
              </h2>
              <p className="text-gray-300">
                We have not reviewed all of the sites linked to our website and
                are not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by us of
                the site. Use of any such linked website is at the user's own
                risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-primary mb-4">
                Modifications
              </h2>
              <p className="text-gray-300">
                We may revise these terms of service for this website at any
                time without notice. By using this website, you are agreeing to
                be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-accent-secondary mb-4">
                Governing Law
              </h2>
              <p className="text-gray-300">
                These terms and conditions are governed by and construed in
                accordance with the laws of the United States, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that State or location.
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
