import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Bot, 
  MessageSquare, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Globe, 
  Brain,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function Products() {
  const currentProducts = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "QIA - Quantum AI Assistant",
      description: "Our flagship AI assistant powered by quantum computing principles, delivering human-like conversations and problem-solving capabilities.",
      features: ["Natural language processing", "Context awareness", "Multi-modal interactions", "Real-time learning"],
      status: "Available Now",
      statusColor: "text-green-400",
      link: "/products/qia",
      comingSoon: false
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "NLP Toolkit",
      description: "Advanced natural language processing tools for developers, researchers, and businesses.",
      features: ["Text analysis", "Sentiment detection", "Language translation", "Entity recognition"],
      status: "Available Now",
      statusColor: "text-green-400",
      link: "/products/nlp-toolkit",
      comingSoon: false
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Development Platform",
      description: "Comprehensive platform for building, training, and deploying AI models at scale.",
      features: ["Model training", "AutoML", "Deployment tools", "Monitoring"],
      status: "Available Now",
      statusColor: "text-green-400",
      link: "/products/ai-platform",
      comingSoon: false
    }
  ];

  const upcomingProducts = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Quantum Database",
      description: "Next-generation database system leveraging quantum computing for unprecedented speed and efficiency.",
      features: ["Quantum encryption", "Instant queries", "Scalable architecture", "AI optimization"],
      status: "Coming Q2 2024",
      statusColor: "text-yellow-400",
      link: "/products/quantum-database",
      comingSoon: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Suite",
      description: "Comprehensive security solutions powered by AI to protect against emerging cyber threats.",
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Zero-trust security"],
      status: "Coming Q3 2024",
      statusColor: "text-yellow-400",
      link: "/products/ai-security",
      comingSoon: true
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global AI Network",
      description: "Distributed AI computing network enabling edge computing and real-time AI processing worldwide.",
      features: ["Edge computing", "Global distribution", "Low latency", "Scalable infrastructure"],
      status: "Coming Q4 2024",
      statusColor: "text-yellow-400",
      link: "/products/global-network",
      comingSoon: true
    }
  ];

  const researchAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AGI Research",
      description: "Pioneering research in artificial general intelligence and consciousness."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum AI",
      description: "Exploring the intersection of quantum computing and artificial intelligence."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Advanced NLP",
      description: "Pushing the boundaries of natural language understanding and generation."
    }
  ];

  return (
    <>
      <Head>
        <title>AI Products & Services - Haqikos | Next-Generation AI Solutions</title>
        <meta
          name="description"
          content="Explore Haqikos' comprehensive suite of AI products and services, from quantum AI assistants to enterprise development platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
                AI Products & Services
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive suite of AI solutions designed to transform 
                industries and empower innovation across the globe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Products */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Available Now
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our flagship products that are already transforming how people work with AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {currentProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {product.icon}
                    </div>
                    <span className={`text-sm font-medium ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={product.link}
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Products */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary AI technologies that will redefine what's possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {upcomingProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                >
                  {product.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {product.icon}
                    </div>
                    <span className={`text-sm font-medium ${product.statusColor}`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="inline-flex items-center text-gray-500 cursor-not-allowed">
                    Coming Soon
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Research & Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge research areas that push the boundaries of AI technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <a
                href="/research"
                className="btn-primary inline-flex items-center"
              >
                Explore Research
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers and businesses already using Haqikos AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Sales
                </a>
                <a
                  href="/api-docs"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  View API Docs
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
