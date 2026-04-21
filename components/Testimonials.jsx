"use client";

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full bg-gray-900 text-xs tracking-widest text-gray-300 mb-6">
              INDUSTRY LEADERS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
              Pioneering the quantum-AI revolution—voices from the frontier.
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Leading researchers, engineers, and visionaries share their
              insights on how Haqikos is reshaping the landscape of artificial
              intelligence and quantum computing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl p-10 shadow-lg border border-gray-800 mx-auto max-w-3xl">
            <blockquote className="text-xl text-white font-light mb-6">
              "Haqikos represents a paradigm shift in how we approach AI
              development. Their quantum-inspired algorithms and neural
              architecture optimization techniques are pushing the boundaries of
              what's possible. The way they've integrated quantum principles
              into classical machine learning frameworks is nothing short of
              revolutionary. This isn't just incremental progress—it's a
              fundamental reimagining of AI's future."
            </blockquote>
            <div className="text-white font-semibold">Dr. Sarah Chen</div>
            <div className="text-gray-400 text-sm">
              Chief AI Officer, QuantumTech Solutions
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
