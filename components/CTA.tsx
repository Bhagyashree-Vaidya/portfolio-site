"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 bg-gradient-to-br from-dark-secondary to-dark-bg border-2 border-accent-primary"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Let's Work Together
          </h2>
          <p className="text-center text-xl text-gray-400 mb-12">
            I'm actively looking for roles where I can apply technical depth to
            ambitious product problems. Whether it's building AI products,
            scaling infrastructure, or solving hard technical problems—if the
            mission matters, I'm interested.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-dark-bg border border-gray-700">
              <p className="text-accent-primary font-bold mb-2">Email</p>
              <a
                href="mailto:bhagyashreevaidya08@gmail.com"
                className="text-gray-300 hover:text-white transition-colors break-all"
              >
                bhagyashreevaidya08@gmail.com
              </a>
            </div>

            <div className="p-6 bg-dark-bg border border-gray-700">
              <p className="text-accent-secondary font-bold mb-2">LinkedIn</p>
              <a
                href="https://linkedin.com/in/bhagyashree-vaidya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                /in/bhagyashree-vaidya
              </a>
            </div>

            <div className="p-6 bg-dark-bg border border-gray-700">
              <p className="text-accent-tertiary font-bold mb-2">GitHub</p>
              <a
                href="https://github.com/Bhagyashree-Vaidya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                /Bhagyashree-Vaidya
              </a>
            </div>

            <div className="p-6 bg-dark-bg border border-gray-700">
              <p className="text-accent-primary font-bold mb-2">Location</p>
              <p className="text-gray-300">Seattle, WA</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Typically respond within 24 hours. Open to relocation and flexible
              on timing for the right opportunity.
            </p>
            <a
              href="mailto:bhagyashreevaidya08@gmail.com"
              className="inline-block px-8 py-4 bg-accent-primary text-dark-bg font-bold hover:bg-accent-secondary transition-colors"
            >
              Start Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
