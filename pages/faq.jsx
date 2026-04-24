import Head from "next/head";


import { motion } from "framer-motion";
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp,
  MessageSquare,
  Users,
  Shield,
  Zap
} from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      name: "General Questions",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          id: "general-1",
          question: "What is Haqikos?",
          answer: "Haqikos is an advanced AI company focused on building intelligent systems that understand, learn, and adapt. We develop cutting-edge AI solutions including quantum AI assistants, NLP tools, and enterprise AI platforms."
        },
        {
          id: "general-2",
          question: "How is Haqikos different from other AI companies?",
          answer: "Haqikos stands out through our focus on quantum AI principles, commitment to AI safety and ethics, and our unique approach to democratizing AI technology. We combine cutting-edge research with practical, scalable solutions."
        },
        {
          id: "general-3",
          question: "Where is Haqikos located?",
          answer: "Our headquarters is in San Francisco, California, with additional offices in New York and London. We also have remote team members worldwide, allowing us to serve clients globally."
        }
      ]
    },
    {
      name: "AI Products & Services",
      icon: <Zap className="w-6 h-6" />,
      questions: [
        {
          id: "products-1",
          question: "What AI products does Haqikos offer?",
          answer: "We offer QIA (Quantum AI Assistant), NLP Toolkit, AI Development Platform, and upcoming products like Quantum Database and AI Security Suite. Each product is designed to solve specific AI challenges."
        },
        {
          id: "products-2",
          question: "How can I try Haqikos AI services?",
          answer: "You can start by contacting our sales team for a demo, or visit our products page to learn more about specific solutions. We offer free trials for many of our services."
        },
        {
          id: "products-3",
          question: "Do you offer custom AI solutions?",
          answer: "Yes, we provide custom AI development services for enterprise clients. Our team works closely with you to understand your specific needs and develop tailored AI solutions."
        },
        {
          id: "products-4",
          question: "What industries do you serve?",
          answer: "We serve healthcare, finance, education, technology, and many other industries. Our AI solutions are designed to be adaptable across different sectors and use cases."
        }
      ]
    },
    {
      name: "Technical & Development",
      icon: <MessageSquare className="w-6 h-6" />,
      questions: [
        {
          id: "technical-1",
          question: "What programming languages do you support?",
          answer: "We support Python, JavaScript, Java, C++, and other major programming languages. Our APIs are RESTful and can be integrated with any language that supports HTTP requests."
        },
        {
          id: "technical-2",
          question: "Do you provide API documentation?",
          answer: "Yes, we provide comprehensive API documentation, SDKs, and code examples. Our developer portal includes tutorials, best practices, and integration guides."
        },
        {
          id: "technical-3",
          question: "How do you ensure AI model accuracy?",
          answer: "We use rigorous testing protocols, continuous monitoring, and regular model updates. Our models undergo extensive validation and are trained on high-quality, diverse datasets."
        },
        {
          id: "technical-4",
          question: "What security measures do you have in place?",
          answer: "We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with SOC 2, GDPR, and other standards."
        }
      ]
    },
    {
      name: "Pricing & Plans",
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          id: "pricing-1",
          question: "What are your pricing options?",
          answer: "We offer flexible pricing including pay-per-use, subscription plans, and enterprise pricing. Contact our sales team for a custom quote based on your specific needs."
        },
        {
          id: "pricing-2",
          question: "Do you offer discounts for startups or educational institutions?",
          answer: "Yes, we offer special pricing for startups, educational institutions, and non-profit organizations. We believe in making AI accessible to organizations that are driving positive change."
        },
        {
          id: "pricing-3",
          question: "Is there a free tier available?",
          answer: "We offer free trials and limited free tiers for many of our services. This allows you to test our solutions before committing to a paid plan."
        }
      ]
    },
    {
      name: "AI Safety & Ethics",
      icon: <Shield className="w-6 h-6" />,
      questions: [
        {
          id: "safety-1",
          question: "How does Haqikos ensure AI safety?",
          answer: "AI safety is core to our mission. We implement multiple layers of safety measures including content filtering, bias detection, and continuous monitoring. Our research team focuses specifically on AI alignment and safety."
        },
        {
          id: "safety-2",
          question: "What ethical guidelines do you follow?",
          answer: "We follow comprehensive ethical guidelines that prioritize human well-being, transparency, and accountability. Our AI systems are designed to augment human capabilities, not replace them."
        },
        {
          id: "safety-3",
          question: "How do you handle data privacy?",
          answer: "We take data privacy seriously and comply with all relevant regulations. We never sell your data and implement strict access controls. See our Privacy Policy for detailed information."
        }
      ]
    },
    {
      name: "Support & Contact",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          id: "support-1",
          question: "How can I get technical support?",
          answer: "We offer multiple support channels including email support, live chat, and dedicated support for enterprise clients. Our technical team is available during business hours with 24/7 emergency support for critical issues."
        },
        {
          id: "support-2",
          question: "What are your response times?",
          answer: "We aim to respond to general inquiries within 24 hours, technical support within 2-4 hours, and critical issues within 1 hour. Enterprise clients receive priority support."
        },
        {
          id: "support-3",
          question: "Do you offer training and onboarding?",
          answer: "Yes, we provide comprehensive training programs, onboarding sessions, and ongoing support to ensure you get the most value from our AI solutions."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.name }))
  );

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>FAQ - Haqikos | Frequently Asked Questions</title>
        <meta
          name="description"
          content="Find answers to common questions about Haqikos' AI services, products, pricing, and technical support. Get the information you need quickly and easily."
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Find answers to common questions about our AI services, products, and platform. 
                Can't find what you're looking for? Contact our support team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search */}
        <section className="py-12 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {searchTerm ? (
              // Search Results
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
                  Search Results
                </h2>
                <div className="space-y-4">
                  {filteredQuestions.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="card cursor-pointer group"
                      onClick={() => toggleItem(item.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-sm text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-200">
                            {item.question}
                          </h3>
                        </div>
                        <div className="ml-4">
                          {openItems.has(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                      {openItems.has(item.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-700"
                        >
                          <p className="text-gray-400 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
                {filteredQuestions.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center py-20"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-semibold text-white mb-2">No results found</h3>
                    <p className="text-gray-400">Try adjusting your search terms or browse our FAQ categories below.</p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              // Category View
              <div className="space-y-16">
                {faqCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                  >
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="p-2 bg-gray-800 rounded-lg text-white">
                        {category.icon}
                      </div>
                      <h2 className="text-3xl font-bold gradient-text">
                        {category.name}
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      {category.questions.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="card cursor-pointer group"
                          onClick={() => toggleItem(item.id)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors duration-200">
                              {item.question}
                            </h3>
                            <div className="ml-4">
                              {openItems.has(item.id) ? (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          </div>
                          {openItems.has(item.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-700"
                            >
                              <p className="text-gray-400 leading-relaxed">
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find the answer you're looking for? Our support team is here to help. 
                Get in touch with us and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Support
                </a>
                <a
                  href="/blog"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Browse Resources
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
