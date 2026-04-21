"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleTryAI = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleExploreTools = () => {
    // Navigate to tools section or page
    console.log("Exploring tools...");
  };

  const handleJoinRevolution = () => {
    // Navigate to signup or community page
    console.log("Joining revolution...");
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black"></div>

        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-700 rounded-full"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-gray-700 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-gray-700 rounded-full"></div>
        </div>

        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            role="status"
            aria-label="Current status: Quantum AI Revolution"
          >
            <div className="w-5 h-5 relative">
              <img
                src="/logo.svg"
                alt="Haqikos Logo"
                className="w-full h-full"
              />
            </div>
            <span className="text-sm text-gray-300">Quantum AI Revolution</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Reimagining the Future of AI.
            <br />
            <span className="text-white">One Model at a Time.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building intelligent systems that understand, learn, and adapt –
            with Haqikos, the next-gen AI powerhouse.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              className={`btn-primary flex items-center space-x-2 ${
                isLoading ? "btn-loading" : ""
              }`}
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              onClick={handleTryAI}
              disabled={isLoading}
              aria-label="Try our AI platform"
            >
              <span>{isLoading ? "Loading..." : "Try Our AI"}</span>
              {!isLoading && <ArrowRight className="w-5 h-5" />}
            </motion.button>

            <motion.button
              className="btn-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreTools}
              aria-label="Explore our AI tools and features"
            >
              <Play className="w-5 h-5" />
              <span>Explore Our Tools</span>
            </motion.button>

            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleJoinRevolution}
              aria-label="Join the AI revolution community"
            >
              Join the Revolution
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            role="region"
            aria-label="Platform statistics"
          >
            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                aria-label="10 million plus active users"
              >
                10M+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                aria-label="99.9 percent uptime"
              >
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                aria-label="50 plus countries"
              >
                50+
              </div>
              <div className="text-gray-400">Countries</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
