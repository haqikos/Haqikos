import Head from "next/head";
import { motion } from "framer-motion";
import { 
  Bot, 
  Smartphone, 
  Monitor, 
  Database, 
  Shield, 
  Globe, 
  Brain,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function Projects() {
  const activeProjects = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "QIA",
      description: "Our flagship AI assistant powered by quantum computing principles, delivering human-like conversations and problem-solving capabilities.",
      tags: ["React", "Next.js", "Python", "TensorFlow", "Quantum UI"],
      status: "Live",
      statusColor: "text-green-400 border-green-500/30 bg-green-500/10",
      link: "https://qia.haqikos.com"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Haqikos Android App",
      description: "Bringing the power of Haqikos AI to native mobile environments for edge computing and local intelligence.",
      tags: ["React Native", "Kotlin", "TensorFlow Lite", "Firebase"],
      status: "In Development",
      statusColor: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
      link: "#"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "HAQIKOS OS",
      description: "An operating system built from the ground up prioritizing AI-first workflows and deep hardware integration.",
      tags: ["Rust", "C++", "Vulkan", "AI Kernel"],
      status: "Concept Phase",
      statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      link: "#"
    }
  ];

  const upcomingProjects = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Quantum Database",
      description: "Next-generation database leveraging quantum algorithms for instantaneous queries across exabytes of data.",
      tags: ["Q#", "Go", "Distributed Systems"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Suite",
      description: "Zero-day vulnerability detection systems trained on global heuristic anomalies.",
      tags: ["Python", "Rust", "Neural Networks"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Node Network",
      description: "Decentralized AI inference network powering our next-generation ecosystem.",
      tags: ["Web3", "Solidity", "Node.js"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Cognitive API",
      description: "Developer tools to integrate Haqikos reasoning engines directly into third-party apps.",
      tags: ["GraphQL", "REST", "TypeScript"]
    }
  ];

  return (
    <>
      <Head>
        <title>Projects - Haqikos | Active & Upcoming Developments</title>
        <meta
          name="description"
          content="Explore Haqikos' active portfolio, including QIA, internal development concepts, and future global network tools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-black">        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
                Our Projects
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A transparent look into our active ecosystem, tools currently in rigorous development, and what we plan next.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Active Projects */}
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
                Active Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {activeProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:-translate-y-1 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full border font-medium ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200 group/link"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Grid */}
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
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card relative group hover:-translate-y-1 transition-transform duration-300 opacity-80 hover:opacity-100"
                >
                  <div className="p-3 bg-gray-800 rounded-xl text-white inline-block mb-4">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-gray-800 text-gray-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>      </main>
    </>
  );
}
