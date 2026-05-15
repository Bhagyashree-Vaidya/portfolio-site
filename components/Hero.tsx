"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-dark-secondary border border-accent-primary text-accent-primary text-sm font-semibold">
              AI-ENABLED PRODUCT MANAGER
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Build{" "}
            <span className="bg-gradient-to-r from-accent-primary via-accent-tertiary to-accent-secondary bg-clip-text text-transparent">
              systems
            </span>{" "}
            that scale
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            6+ years building AI-powered products, optimizing infrastructure,
            and driving $10M+ revenue growth. I combine technical depth with
            product intuition to solve hard problems.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="/case-studies"
              className="px-8 py-4 bg-accent-primary text-dark-bg font-bold hover:bg-accent-secondary transition-colors text-center"
            >
              View Case Studies
            </Link>
            <a
              href="mailto:bhagyashreevaidya08@gmail.com"
              className="px-8 py-4 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-dark-bg transition-colors text-center font-semibold"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent-primary">$10M+</div>
              <p className="text-gray-400 text-sm">Revenue Generated</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-secondary">90%+</div>
              <p className="text-gray-400 text-sm">ML Accuracy</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-tertiary">150+</div>
              <p className="text-gray-400 text-sm">Infrastructure Migrations</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="p-6 bg-dark-secondary border-2 border-accent-primary">
            <div className="text-accent-primary font-bold mb-2">Starlink</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Built ML pipeline detecting 4000+ satellites with 90%+ accuracy.
              Saved 8+ hours/week of manual work.
            </p>
          </div>

          <div className="p-6 bg-dark-secondary border-2 border-accent-secondary">
            <div className="text-accent-secondary font-bold mb-2">VWO</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Drove $10M+ revenue through experimentation framework and BNPL
              optimization. Ran 50+ rigorous A/B tests.
            </p>
          </div>

          <div className="p-6 bg-dark-secondary border-2 border-accent-tertiary">
            <div className="text-accent-tertiary font-bold mb-2">
              Stallion Express
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Scaled logistics platform to 35% MoM growth. Reduced fulfillment
              time by 50% through intelligent automation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
