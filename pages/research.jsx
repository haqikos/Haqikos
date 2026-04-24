import Head from "next/head";


import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  MessageSquare, 
  Code, 
  Database, 
  Shield, 
  Globe, 
  Users,
  BookOpen,
  Award,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function Research() {
  const researchAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial General Intelligence",
      description: "Pioneering research in AGI, exploring consciousness, reasoning, and human-like intelligence.",
      focus: ["Cognitive architectures", "Reasoning systems", "Learning paradigms"],
      status: "Active Research"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quantum AI",
      description: "Exploring the intersection of quantum computing and artificial intelligence for breakthrough performance.",
      focus: ["Quantum algorithms", "Quantum neural networks", "Quantum optimization"],
      status: "Breakthrough Phase"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Advanced NLP",
      description: "Pushing the boundaries of natural language understanding, generation, and multilingual processing.",
      focus: ["Language models", "Semantic understanding", "Cross-lingual transfer"],
      status: "Production Ready"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Lab R-2.0 (Confidential)",
      description: "Classified next-generation computing frameworks.",
      focus: ["Neural Linkages", "Exascale Processing", "Undisclosed"],
      status: "Upcoming Area",
      restricted: true
    }
  ];

  const recentPapers = [
    {
      title: "Quantum Neural Networks: A New Paradigm for AI",
      authors: "Dr. Sarah Chen, Dr. Michael Rodriguez, Dr. Alex Kim",
      journal: "Nature AI",
      year: 2024,
      abstract: "We present a novel approach to neural network architecture leveraging quantum computing principles...",
      doi: "10.1038/s41586-024-01234-5",
      citations: 45
    },
    {
      title: "Towards AGI: A Unified Framework for Intelligence",
      authors: "Dr. James Wilson, Dr. Elena Petrov, Dr. David Lee",
      journal: "Science",
      year: 2024,
      abstract: "This paper proposes a unified theoretical framework for artificial general intelligence...",
      doi: "10.1126/science.abc1234",
      citations: 78
    },
    {
      title: "Multilingual AI: Breaking Language Barriers",
      authors: "Dr. Maria Garcia, Dr. Raj Patel, Dr. Wei Zhang",
      journal: "ICLR",
      year: 2024,
      abstract: "We introduce a new approach to multilingual AI that achieves human-level performance...",
      doi: "10.48550/arXiv.2401.12345",
      citations: 32
    }
  ];

  const partnerships = [
    {
      name: "MIT AI Lab",
      description: "Collaborative research in AGI and cognitive architectures",
      logo: "🏛️"
    },
    {
      name: "Stanford AI Institute",
      description: "Joint projects in quantum AI and machine learning",
      logo: "🎓"
    },
    {
      name: "Google Research",
      description: "Partnership in large language models and NLP",
      logo: "🔍"
    },
    {
      name: "OpenAI",
      description: "Collaborative work on AI safety and alignment",
      logo: "🤖"
    }
  ];

  return (
    <>
      <Head>
        <title>Research & Innovation - Haqikos | Advancing AI Technology</title>
        <meta
          name="description"
          content="Explore Haqikos' cutting-edge research in AGI, quantum AI, NLP, and AI safety. Discover our latest papers, partnerships, and breakthroughs."
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
                Research & Innovation
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pushing the boundaries of artificial intelligence through groundbreaking research, 
                innovative partnerships, and a commitment to advancing human knowledge.
              </p>
            </motion.div>
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
                Research Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our multidisciplinary research spans the most critical and promising areas of AI development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                >
                  {area.restricted && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-gray-900/80 backdrop-blur-md">
                      <Shield className="w-12 h-12 text-red-500 mb-2 opacity-80" />
                      <span className="text-red-400 font-bold tracking-widest uppercase border border-red-500/50 px-4 py-2 rounded shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                        Access Restricted
                      </span>
                    </div>
                  )}
                  <div className={`flex items-start space-x-4 ${area.restricted ? 'opacity-30 blur-sm pointer-events-none' : ''}`}>
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {area.title}
                        </h3>
                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                          area.status === 'Active Research' ? 'bg-blue-500/20 text-blue-400' :
                          area.status === 'Breakthrough Phase' ? 'bg-purple-500/20 text-purple-400' :
                          area.status === 'Production Ready' ? 'bg-green-500/20 text-green-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {area.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {area.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Research Focus:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.focus.map((focus, idx) => (
                            <span key={idx} className="text-[10px] bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Papers */}
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
                Recent Publications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our latest research contributions to the global AI community.
              </p>
            </motion.div>

            <div className="space-y-6 mb-20">
              {recentPapers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-102 transition-transform duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors duration-200">
                        {paper.title}
                      </h3>
                      <p className="text-gray-400 mb-2">
                        <span className="font-medium">Authors:</span> {paper.authors}
                      </p>
                      <p className="text-gray-400 mb-3">
                        <span className="font-medium">Journal:</span> {paper.journal} ({paper.year})
                      </p>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {paper.abstract}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">DOI: {paper.doi}</span>
                        <span className="text-sm text-gray-400">{paper.citations} citations</span>
                      </div>
                    </div>
                    <div className="ml-6">
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
                      >
                        View Paper
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
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
                href="/blog"
                className="btn-primary inline-flex items-center"
              >
                View All Publications
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Research Partnerships */}
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
                Research Partnerships
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Collaborating with leading institutions worldwide to accelerate AI research and development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {partnerships.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {partner.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
                Join Our Research Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for brilliant minds to join our research efforts. 
                Whether you're a researcher, student, or industry professional, 
                there's a place for you in our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Contact Research Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
