import Head from "next/head";


import { motion } from "framer-motion";
import { 
  Code, 
  BookOpen, 
  Zap, 
  Shield, 
  Globe, 
  Users,
  ArrowRight,
  ExternalLink,
  Terminal,
  Database
} from "lucide-react";

export default function APIDocs() {
  const apiCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Core AI APIs",
      description: "Access our advanced AI models through RESTful APIs. Generate text, analyze content, and build intelligent applications.",
      status: "Available Now",
      statusColor: "text-green-400",
      endpoints: ["/v1/chat", "/v1/completions", "/v1/embeddings", "/v1/analysis"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Processing APIs",
      description: "Process and analyze large datasets with our scalable data processing APIs. Clean, transform, and extract insights.",
      status: "Coming Soon",
      statusColor: "text-yellow-400",
      endpoints: ["/v1/process", "/v1/transform", "/v1/analyze", "/v1/export"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Safety APIs",
      description: "Integrate AI safety features into your applications. Content filtering, bias detection, and ethical AI tools.",
      status: "Coming Soon",
      statusColor: "text-yellow-400",
      endpoints: ["/v1/safety/check", "/v1/bias/detect", "/v1/ethics/validate"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-language APIs",
      description: "Build applications that work in multiple languages. Translation, localization, and cross-lingual understanding.",
      status: "Coming Soon",
      statusColor: "text-yellow-400",
      endpoints: ["/v1/translate", "/v1/detect", "/v1/localize"]
    }
  ];

  const sdkLanguages = [
    {
      name: "Python",
      version: "1.2.0",
      status: "Stable",
      statusColor: "text-green-400",
      icon: "",
      description: "Full-featured Python SDK with async support and comprehensive examples."
    },
    {
      name: "JavaScript/Node.js",
      version: "1.1.0",
      status: "Stable",
      statusColor: "text-green-400",
      icon: "🟨",
      description: "Modern JavaScript SDK with TypeScript support and browser compatibility."
    },
    {
      name: "Java",
      version: "0.9.0",
      status: "Beta",
      statusColor: "text-yellow-400",
      icon: "",
      description: "Enterprise-ready Java SDK with Spring Boot integration support."
    },
    {
      name: "Go",
      version: "0.8.0",
      status: "Beta",
      statusColor: "text-yellow-400",
      icon: "",
      description: "High-performance Go SDK optimized for microservices and cloud deployment."
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: "Get Your API Key",
      description: "Sign up for a Haqikos account and generate your API key from the dashboard.",
      code: "curl -X POST https://api.haqikos.ai/v1/auth/key"
    },
    {
      step: 2,
      title: "Install SDK",
      description: "Install the SDK for your preferred programming language.",
      code: "pip install haqikos-python"
    },
    {
      step: 3,
      title: "Make Your First Request",
      description: "Send a simple request to test your setup.",
      code: `import haqikos\n\nclient = haqikos.Client("your-api-key")\nresponse = client.chat.completions.create(\n    model="qia-1",\n    messages=[{"role": "user", "content": "Hello!"}]\n)`
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation - Haqikos | Developer Resources</title>
        <meta
          name="description"
          content="Access comprehensive API documentation, SDKs, and developer resources for building AI applications with Haqikos."
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
                API Documentation
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Build powerful AI applications with our comprehensive APIs and SDKs. 
                Get started quickly with detailed documentation, code examples, and developer tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start */}
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
                Get Started in Minutes
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these simple steps to integrate Haqikos AI into your applications.
              </p>
            </motion.div>

            <div className="space-y-8 mb-20">
              {quickStartSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <code className="text-green-400 text-sm">{step.code}</code>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* API Categories */}
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
                API Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of APIs designed for different AI use cases and applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {apiCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {category.title}
                        </h3>
                        <span className={`text-sm font-medium ${category.statusColor}`}>
                          {category.status}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-300">Key Endpoints:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.endpoints.map((endpoint, idx) => (
                            <span key={idx} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono">
                              {endpoint}
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

        {/* SDKs */}
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
                Software Development Kits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Use our official SDKs to integrate Haqikos AI into your applications quickly and easily.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {sdkLanguages.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{sdk.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {sdk.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="text-sm text-gray-400">v{sdk.version}</span>
                    <span className={`text-xs font-medium ${sdk.statusColor}`}>
                      {sdk.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {sdk.description}
                  </p>
                  <button className="btn-primary w-full">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Features */}
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
                Comprehensive Documentation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and scale AI applications with Haqikos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-800 rounded-xl text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Interactive API Reference
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Explore our APIs with interactive documentation, test endpoints directly in your browser, 
                      and see real-time responses.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Detailed parameter descriptions</li>
                      <li>• Request/response examples</li>
                      <li>• Error code explanations</li>
                      <li>• Rate limiting information</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-800 rounded-xl text-white">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Code Examples & Tutorials
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      Learn through practical examples and step-by-step tutorials covering common use cases 
                      and integration patterns.
                    </p>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Getting started guides</li>
                      <li>• Best practices</li>
                      <li>• Common patterns</li>
                      <li>• Troubleshooting tips</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Developer Tools */}
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
                Developer Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to help you develop, test, and monitor your AI applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  API Playground
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Test our APIs directly in your browser. Experiment with different parameters and see results instantly.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Monitor your API usage, track performance metrics, and analyze usage patterns in real-time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  CLI Tools
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Command-line tools for quick testing, automation, and integration with your development workflow.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Full API Documentation Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're building comprehensive API documentation that will make it easier than ever 
                to integrate Haqikos AI into your applications.
              </p>
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What's Coming
                </h3>
                <ul className="text-left space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Interactive API playground with real-time testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Comprehensive code examples in multiple languages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Advanced SDKs with full feature coverage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Developer community and support forums</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Ready to Build?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start building AI-powered applications today with Haqikos APIs and SDKs. 
                Our team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Developer Support
                </a>
                <a
                  href="/projects"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Explore Our Products
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
