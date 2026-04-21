import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Calendar,
  ArrowRight
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email, company) when you contact us or use our services",
        "Usage data and analytics to improve our AI systems",
        "Technical information about your device and browser",
        "Communication records when you interact with our support team"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and improve our AI services and products",
        "Respond to your inquiries and provide customer support",
        "Send important updates about our services",
        "Analyze usage patterns to enhance user experience",
        "Ensure security and prevent fraud"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share data with trusted service providers who assist in operating our services",
        "Information may be disclosed if required by law or to protect our rights",
        "Aggregated, anonymized data may be used for research and development"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmission is encrypted using SSL/TLS protocols",
        "Regular security audits and vulnerability assessments",
        "Access to personal data is strictly limited to authorized personnel"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request correction of inaccurate data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications",
        "Data portability in a machine-readable format"
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain your data only as long as necessary to provide our services",
        "Account data is kept while your account is active",
        "Analytics data is anonymized after 24 months",
        "Legal requirements may require longer retention periods"
      ]
    }
  ];

  const cookies = [
    {
      name: "Essential Cookies",
      purpose: "Required for basic website functionality",
      duration: "Session"
    },
    {
      name: "Analytics Cookies",
      purpose: "Help us understand how visitors use our website",
      duration: "2 years"
    },
    {
      name: "Preference Cookies",
      purpose: "Remember your settings and preferences",
      duration: "1 year"
    }
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Haqikos | Data Protection & Privacy</title>
        <meta
          name="description"
          content="Learn how Haqikos protects your privacy and handles your data. Our comprehensive privacy policy ensures transparency and data security."
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
                Privacy Policy
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Your privacy is fundamental to us. Learn how we collect, use, and protect 
                your information while delivering cutting-edge AI solutions.
              </p>
              <div className="mt-8 flex items-center justify-center text-gray-400">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
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
                Our Commitment to Privacy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At Haqikos, we believe privacy is a fundamental human right. We are committed 
                to transparency, security, and giving you control over your personal information.
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
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                    <Shield className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data Protection
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We implement industry-leading security measures to protect your information 
                  from unauthorized access, alteration, or disclosure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                    <Eye className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Transparency
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We are clear about what data we collect, how we use it, and who we share it with. 
                  No hidden agendas, no surprises.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                    <Lock className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Your Control
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  You have the right to access, correct, or delete your personal information 
                  at any time. We respect your choices.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Policy Details */}
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
                Privacy Policy Details
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive information about how we handle your data and protect your privacy.
              </p>
            </motion.div>

            <div className="space-y-8 mb-20">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookies */}
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
                Cookie Policy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cookies to enhance your experience and improve our services. 
                Learn about the types of cookies we use and how to manage them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {cookies.map((cookie, index) => (
                <motion.div
                  key={cookie.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {cookie.name}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {cookie.purpose}
                  </p>
                  <div className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                    Duration: {cookie.duration}
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
              <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Managing Cookies
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  You can control and manage cookies through your browser settings. 
                  Most browsers allow you to block or delete cookies, though this may 
                  affect website functionality.
                </p>
                <p className="text-gray-400">
                  For more information about managing cookies, visit 
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                    allaboutcookies.org
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* International Data Transfers */}
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
                International Data Transfers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                As a global company, we may transfer your data across international borders 
                while maintaining the highest privacy standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Globe className="w-6 h-6 mr-2" />
                    Global Operations
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our services are available worldwide, and we maintain data centers 
                    in multiple countries to ensure optimal performance and reliability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-2" />
                    Privacy Standards
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We ensure that all international data transfers comply with applicable 
                    privacy laws and maintain consistent protection standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have questions about this privacy policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:privacy@haqikos.ai"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Email Privacy Team
                  <ArrowRight className="w-5 h-5 ml-2" />
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
