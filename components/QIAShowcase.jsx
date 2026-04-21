"use client";

import { motion } from "framer-motion";
import {
  Brain,
  MessageSquare,
  Zap,
  Shield,
  ArrowRight,
  Play,
} from "lucide-react";

const QIAShowcase = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Quantum Processing",
      description:
        "Advanced quantum algorithms for unprecedented computational power",
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Human-like dialogue with context awareness and memory",
    },
    {
      icon: Zap,
      title: "Real-time Learning",
      description: "Continuously improves and adapts to user preferences",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "End-to-end encryption with zero data retention",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/20 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gray-400/20 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-sm text-white mb-6">
            <Brain className="w-4 h-4" />
            <span>Flagship Product</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Meet QIA
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The Quantum Intelligent Assistant that redefines human-AI
            interaction.
            <br />
            <span className="text-white font-semibold">Powered by Haqikos</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - QIA Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card p-8 relative">
              {/* Chat Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-900 rounded-2xl p-4 max-w-xs">
                      <p className="text-white text-sm">
                        Hello! I'm QIA, your quantum intelligent assistant. How
                        can I help you today?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 justify-end">
                  <div className="flex-1 flex justify-end">
                    <div className="bg-white rounded-2xl p-4 max-w-xs">
                      <p className="text-black text-sm">
                        Can you help me analyze this dataset?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-200 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-black" />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-900 rounded-2xl p-4 max-w-xs">
                      <p className="text-white text-sm">
                        Absolutely! I can process and analyze your dataset using
                        quantum algorithms for deeper insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typing indicator */}
              <div className="flex items-center space-x-2 mt-4 ml-11">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span className="text-gray-400 text-sm">
                  QIA is thinking...
                </span>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border border-white/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 border border-gray-400/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Right Side - Capabilities */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="btn-primary group flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2" />
                <span>Try QIA Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              <motion.button
                className="btn-secondary group flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QIAShowcase;
