import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  FileText, 
  Shield, 
  Users, 
  Globe, 
  Calendar,
  ArrowRight,
  AlertTriangle
} from "lucide-react";

export default function Terms() {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Haqikos services, you agree to be bound by these Terms and Conditions.",
        "If you do not agree to these terms, you must not use our services.",
        "We reserve the right to modify these terms at any time, with notice to users.",
        "Continued use of services after changes constitutes acceptance of new terms."
      ]
    },
    {
      title: "Description of Services",
      content: [
        "Haqikos provides AI-powered software solutions, research tools, and consulting services.",
        "Our services include but are not limited to AI models, APIs, development platforms, and research collaboration.",
        "Services are provided 'as is' and may be subject to availability and technical limitations.",
        "We may modify, suspend, or discontinue services with reasonable notice."
      ]
    },
    {
      title: "User Accounts and Registration",
      content: [
        "You must provide accurate and complete information when creating an account.",
        "You are responsible for maintaining the security of your account credentials.",
        "You must notify us immediately of any unauthorized use of your account.",
        "We reserve the right to terminate accounts that violate these terms."
      ]
    },
    {
      title: "Acceptable Use Policy",
      content: [
        "You may not use our services for illegal, harmful, or unauthorized purposes.",
        "You must not attempt to reverse engineer, hack, or compromise our systems.",
        "You may not use services to generate harmful, misleading, or inappropriate content.",
        "Respect intellectual property rights and do not infringe on others' content."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content, software, and technology on our platform remain our property.",
        "You retain ownership of content you create using our services.",
        "You grant us a license to use your content to provide and improve services.",
        "Our trademarks and branding may not be used without written permission."
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for details.",
        "We collect and process data as described in our Privacy Policy.",
        "You consent to our data practices by using our services.",
        "We implement appropriate security measures to protect your data."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our services are provided without warranties of any kind.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "Our total liability is limited to the amount you paid for services in the past 12 months.",
        "Some jurisdictions do not allow liability limitations, so these may not apply to you."
      ]
    },
    {
      title: "Termination",
      content: [
        "You may terminate your account at any time by contacting us.",
        "We may terminate accounts for violations of these terms.",
        "Upon termination, your right to use services ceases immediately.",
        "Provisions that should survive termination will remain in effect."
      ]
    }
  ];

  const prohibitedUses = [
    "Generating harmful, violent, or illegal content",
    "Attempting to manipulate or deceive users",
    "Violating intellectual property rights",
    "Using services for spam or harassment",
    "Attempting to gain unauthorized access to systems",
    "Violating applicable laws or regulations"
  ];

  const userObligations = [
    "Provide accurate and truthful information",
    "Maintain account security and confidentiality",
    "Comply with all applicable laws and regulations",
    "Respect intellectual property rights",
    "Report security vulnerabilities responsibly",
    "Use services in accordance with these terms"
  ];

  return (
    <>
      <Head>
        <title>Terms & Conditions - Haqikos | Legal Terms of Service</title>
        <meta
          name="description"
          content="Read Haqikos' Terms & Conditions to understand the legal terms for using our AI services and platform."
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
                Terms & Conditions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services. 
                They outline the legal agreement between you and Haqikos.
              </p>
              <div className="mt-8 flex items-center justify-center text-gray-400">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Important Notice */}
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
                Important Legal Notice
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These terms govern your use of Haqikos services. 
                By using our services, you agree to be bound by these terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="card border-yellow-500/30 bg-yellow-500/10">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Legal Disclaimer
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      This document contains important legal information. While we strive to make 
                      these terms clear and understandable, they are legally binding. If you have 
                      questions about these terms, please consult with a legal professional or 
                      contact our legal team.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Details */}
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
                Terms & Conditions Details
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive legal terms that govern your use of Haqikos services and platform.
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

        {/* Prohibited Uses */}
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
                Prohibited Uses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                To maintain a safe and ethical environment, certain uses of our services are strictly prohibited.
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
                    <AlertTriangle className="w-6 h-6 mr-2 text-red-400" />
                    What You Cannot Do
                  </h3>
                  <ul className="space-y-2">
                    {prohibitedUses.map((use, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-green-400" />
                    Your Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {userObligations.map((obligation, idx) => (
                      <li key={idx} className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{obligation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Governing Law */}
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
                Governing Law & Disputes
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding how legal disputes are resolved and which laws apply to our relationship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-6 h-6 mr-2" />
                  Governing Law
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  These terms are governed by the laws of the State of California, United States, 
                  without regard to conflict of law principles. Any disputes will be resolved 
                  in the courts of San Francisco County, California.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Dispute Resolution
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We encourage resolving disputes through direct communication. If that fails, 
                  disputes will be resolved through binding arbitration in San Francisco, 
                  California, in accordance with the American Arbitration Association rules.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Changes to Terms */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Changes to These Terms
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We may update these terms from time to time. We will notify you of any material 
                changes through our website, email, or other communication methods.
              </p>
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Notification Process
                </h3>
                <ul className="text-left space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Email notifications for significant changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Website updates with change summaries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>30-day advance notice for material changes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Continued use constitutes acceptance of new terms</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have questions about these terms and conditions or need clarification 
                on any legal matters, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Legal Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:legal@haqikos.ai"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Email Legal Department
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
