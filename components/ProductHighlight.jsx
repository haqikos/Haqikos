"use client";

import { motion } from "framer-motion";

const ProductHighlight = () => {
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
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900 text-xs tracking-widest text-gray-300 mb-6">
            QUANTUM AI
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Where Quantum Meets Intelligence
          </h2>
          <p className="text-lg text-gray-400">
            Bridging the gap between quantum computing and artificial
            intelligence to unlock unprecedented computational power.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Quantum Demo Mockup */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-black/90 rounded-2xl p-8 shadow-lg border border-gray-800 max-w-lg mx-auto mb-8 lg:mb-0">
              <div className="text-center text-white font-semibold mb-6">
                Quantum Neural Interface
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 text-white text-sm">
                  <div className="text-gray-400 mb-2">
                    Input: "Optimize quantum circuit for protein folding"
                  </div>
                  <div className="text-white">
                    Processing quantum superposition states...
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-4 text-white text-sm">
                  <div className="text-gray-400 mb-2">
                    Quantum State: |ψ⟩ = α|0⟩ + β|1⟩
                  </div>
                  <div className="text-white">
                    Entanglement detected across 512 qubits
                  </div>
                </div>
                <div className="bg-gray-600 rounded-lg p-4 text-white text-sm">
                  <div className="text-gray-400 mb-2">
                    Output: Optimized circuit with 73% efficiency gain
                  </div>
                  <div className="text-white">
                    Classical equivalent: 2.3x faster than state-of-the-art
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Description */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-md mx-auto text-center lg:text-left">
              <div className="text-3xl font-bold text-white mb-2">
                Quantum Neural Networks
              </div>
              <div className="text-gray-400 mb-6">
                The next evolution of artificial intelligence
              </div>
              <div className="text-gray-300 mb-8">
                Haqikos Quantum Neural Networks combine the probabilistic nature
                of quantum computing with the pattern recognition capabilities
                of deep learning. Our hybrid quantum-classical architectures
                enable breakthroughs in optimization, cryptography, and
                scientific discovery that were previously impossible.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-all">
                  Experience Quantum AI
                </button>
                <button className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-black transition-all">
                  Explore Research &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
