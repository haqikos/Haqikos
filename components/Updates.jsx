"use client";

import { motion } from "framer-motion";

const updates = [
  {
    label: "Product Launch",
    title: "QIA 2.0: Quantum Intelligence Assistant",
    description:
      "Introducing our next-generation quantum AI assistant with enhanced reasoning capabilities and improved quantum-classical integration.",
    date: "March 2024",
    link: "#",
  },
  {
    label: "Research Breakthrough",
    title: "Quantum Neural Architecture Optimization",
    description:
      "Our team achieved a 47% improvement in quantum circuit efficiency through novel neural architecture search techniques.",
    date: "February 2024",
    link: "#",
  },
  {
    label: "Partnership",
    title: "Strategic Alliance with QuantumTech Labs",
    description:
      "Announcing a groundbreaking partnership to advance quantum-AI research and develop next-generation computing solutions.",
    date: "January 2024",
    link: "#",
  },
];

const Updates = () => {
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
            Latest Updates
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Stay informed about our latest breakthroughs, product launches,
            research milestones, and strategic partnerships that are shaping the
            future of quantum AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.link}
              className="block bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl p-8 shadow-lg border border-gray-800 group hover:border-white transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs uppercase tracking-widest text-gray-400">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500">{item.date}</div>
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {item.title}
              </div>
              <div className="text-gray-400 mb-4">{item.description}</div>
              <div className="text-sm text-white font-semibold group-hover:underline">
                Read More &rarr;
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
