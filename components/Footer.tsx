import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-primary to-accent-tertiary bg-clip-text text-transparent">
                BV
              </span>
            </h3>
            <p className="text-gray-400 text-sm">
              AI-enabled product manager. Shipping products that matter.
            </p>
          </div>

          <div>
            <h4 className="text-accent-primary font-bold mb-3">Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent-secondary font-bold mb-3">Social</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/bhagyashree-vaidya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Bhagyashree-Vaidya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent-tertiary font-bold mb-3">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a
                  href="mailto:bhagyashreevaidya08@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  bhagyashreevaidya08@gmail.com
                </a>
              </p>
              <p>Seattle, WA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Bhagyashree Vaidya. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
