"use client";

import { motion } from "framer-motion";

const research = [
  {
    label: "Quantum AI",
    title: "Quantum-Classical Hybrid Architectures",
    description:
      "Pioneering research on hybrid quantum-classical neural networks that leverage quantum superposition and entanglement for enhanced computational capabilities.",
    link: "#",
  },
  {
    label: "AI Safety",
    title: "Quantum-Resistant AI Alignment",
    description:
      "Developing novel approaches to AI alignment that remain robust even in quantum computing environments, ensuring safe and controllable AI systems.",
    link: "#",
  },
  {
    label: "Frontier Research",
    title: "Quantum Neural Evolution",
    description:
      "Exploring evolutionary algorithms that operate in quantum space, enabling AI systems to evolve and adapt at unprecedented speeds and scales.",
    link: "#",
  },
];

const ResearchCards = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Quantum AI Research Lab
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our research initiative explores the intersection of quantum
            computing and artificial intelligence, pushing the boundaries of
            what's possible in both fields. From hybrid architectures to
            quantum-resistant safety protocols, we're building the foundation
            for the next generation of intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {research.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              className="block bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl p-8 shadow-lg border border-gray-800 group hover:border-white transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                {item.label}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {item.title}
              </div>
              <div className="text-gray-400 mb-4">{item.description}</div>
              <div className="text-sm text-white font-semibold group-hover:underline">
                Explore Research &rarr;
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchCards;
