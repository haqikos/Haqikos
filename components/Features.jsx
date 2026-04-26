"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  MessageSquare, 
  Users 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Quantum Intelligence",
      description:
        "Advanced AI models that understand context and generate human-like responses with unprecedented accuracy.",
      stats: "99.9% Accuracy",
      icon: Brain,
    },
    {
      title: "Lightning Fast",
      description:
        "Real-time processing and response generation with sub-second latency for seamless user experiences.",
      stats: "< 100ms Response",
      icon: Zap,
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-grade security protocols ensuring your data remains private and protected at all times.",
      stats: "SOC 2 Compliant",
      icon: Shield,
    },
    {
      title: "Global Scale",
      description:
        "Deployed across multiple continents with 99.9% uptime and automatic failover systems.",
      stats: "99.9% Uptime",
      icon: Globe,
    },
    {
      title: "Advanced NLP",
      description:
        "State-of-the-art natural language processing with multilingual support and context awareness.",
      stats: "50+ Languages",
      icon: MessageSquare,
    },
    {
      title: "Human-Centric",
      description:
        "Designed with human interaction in mind, providing intuitive and accessible AI experiences.",
      stats: "10M+ Users",
      icon: Users,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-black" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="features-heading"
            className="text-4xl sm:text-5xl font-bold gradient-text mb-6"
          >
            Why Choose Haqikos?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for the future with cutting-edge technology that scales with
            your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="list"
          aria-label="Key features and capabilities"
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              variants={itemVariants}
              className="card group hover:scale-105 transition-transform duration-300"
              role="listitem"
              tabIndex={0}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="w-14 h-14 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,168,255,0.15)] group-hover:border-blue-500/40 transition-colors" 
                  role="img" 
                  aria-label={feature.title}
                >
                  <feature.icon size={28} color="#00A8FF" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-900 rounded-full">
                    <span className="text-sm font-medium text-white">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          role="region"
          aria-label="Platform statistics and metrics"
        >
          <div className="text-center">
            <div
              className="text-4xl font-bold gradient-text mb-2"
              aria-label="10 million plus active users"
            >
              10M+
            </div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl font-bold gradient-text mb-2"
              aria-label="500 plus enterprise clients"
            >
              500+
            </div>
            <div className="text-gray-400">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl font-bold gradient-text mb-2"
              aria-label="99.9 percent uptime"
            >
              99.9%
            </div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div
              className="text-4xl font-bold gradient-text mb-2"
              aria-label="50 plus languages supported"
            >
              50+
            </div>
            <div className="text-gray-400">Languages</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
