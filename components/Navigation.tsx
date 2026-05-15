"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-accent-primary to-accent-tertiary bg-clip-text text-transparent">
            BV
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/experience" className="text-gray-300 hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="/resume" className="text-gray-300 hover:text-white transition-colors">
            Resume
          </Link>
          <a
            href="mailto:bhagyashreevaidya08@gmail.com"
            className="px-6 py-2 bg-accent-primary text-dark-bg font-bold hover:bg-accent-secondary transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <Link href="/about" className="block text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/experience" className="block text-gray-300 hover:text-white">
              Experience
            </Link>
            <Link href="/case-studies" className="block text-gray-300 hover:text-white">
              Case Studies
            </Link>
            <Link href="/skills" className="block text-gray-300 hover:text-white">
              Skills
            </Link>
            <Link href="/resume" className="block text-gray-300 hover:text-white">
              Resume
            </Link>
            <a
              href="mailto:bhagyashreevaidya08@gmail.com"
              className="block px-4 py-2 bg-accent-primary text-dark-bg font-bold hover:bg-accent-secondary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
