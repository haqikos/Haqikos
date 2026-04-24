"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleTryAI = async () => {
    setIsLoading(true);
    window.location.href = "https://qia.haqikos.com";
  };

  const handleExploreTools = () => {
    document.getElementById('vision-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* tsParticles Background Elements */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#8b5cf6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-5 h-5 relative">
              <img
                src="/logo.svg"
                alt="Haqikos Logo"
                className="w-full h-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-blue-500"></div>';
                }}
              />
            </div>
            <span className="text-sm font-medium gradient-text">Quantum AI Revolution</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron gradient-text mb-6 leading-tight relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="relative z-10">Reimagining the Future of AI.</span>
            <br />
            <span className="text-white relative z-10 font-grotesk text-4xl sm:text-5xl border-b border-blue-500/0 hover:border-blue-500 transition-colors">One Model at a Time.</span>
            
            {/* Shimmer Effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shimmer" />
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
              className={`btn-primary flex items-center space-x-2`}
              onClick={handleTryAI}
              disabled={isLoading}
            >
              <span>{isLoading ? "Redirecting..." : "Explore QIA"}</span>
              {!isLoading && <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />}
            </motion.button>

            <motion.button
              className="btn-secondary flex items-center space-x-2 relative group overflow-hidden border-2 border-gray-700 bg-gray-900/50 hover:border-white transition-all duration-300"
              onClick={handleExploreTools}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Play className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Our Vision</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator bounce down */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        onClick={handleExploreTools}
      >
        <ChevronDown className="w-10 h-10 text-gray-500 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
