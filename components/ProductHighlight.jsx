"use client";

import { motion } from "framer-motion";
import { Bot, ArrowRight, Code, Shield, Cloud } from "lucide-react";

const ProductHighlight = () => {
  const products = [
    {
      title: "QIA",
      description: "Our flagship quantum-inspired AI assistant. Unlimited context, multi-modal.",
      icon: <Bot className="w-8 h-8" />,
      badges: [{ label: "Live Now", type: "success" }],
      link: "/qia",
      btnText: "Try QIA"
    },
    {
      title: "Haqikos OS",
      description: "An operating system built from the ground up prioritizing AI-first workflows.",
      icon: <Code className="w-8 h-8" />,
      badges: [{ label: "Coming Soon", type: "muted" }],
      link: "#",
      btnText: "Learn More"
    },
    {
      title: "AI Security Suite",
      description: "Zero-day vulnerability detection systems trained on global heuristic anomalies.",
      icon: <Shield className="w-8 h-8" />,
      badges: [{ label: "Coming Soon", type: "muted" }],
      link: "#",
      btnText: "Learn More"
    },
    {
      title: "Global Node API",
      description: "Decentralized AI inference network powering our next-generation ecosystem.",
      icon: <Cloud className="w-8 h-8" />,
      badges: [{ label: "Coming Soon", type: "muted" }],
      link: "#",
      btnText: "Learn More"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-xs font-semibold tracking-widest text-blue-400 mb-6">
            CORE PRODUCTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ecosystem Overview
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the tools that drive Haqikos. From fully-featured assistants to comprehensive node networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card flex flex-col group relative overflow-hidden"
            >
              {/* Product Badges */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {product.badges.map(b => (
                  <span 
                    key={b.label} 
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 flex items-center rounded-sm ${
                      b.type === 'success' 
                        ? 'bg-green-500/10 text-green-400 border border-green-500/40 shadow-[0_0_10px_rgba(34,197,94,0.3)] animate-pulse' 
                        : 'bg-gray-800 text-gray-500 border border-gray-700'
                    }`}
                  >
                    {b.type === 'success' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2"></span>}
                    {b.label}
                  </span>
                ))}
              </div>

              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gray-800 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {product.title}
              </h3>

              <p className="text-gray-400 mb-8 flex-grow">
                {product.description}
              </p>

              <a 
                href={product.link}
                className={`inline-flex items-center mt-auto font-medium transition-colors ${
                  product.badges.some(b => b.type === 'success')
                    ? 'text-white hover:text-blue-400' 
                    : 'text-gray-500 pointer-events-none'
                }`}
              >
                {product.btnText}
                {product.badges.some(b => b.type === 'success') && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
