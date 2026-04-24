import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Users, 
  Building, 
  Globe,
  Send,
  Clock,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });

  const [selectedSubject, setSelectedSubject] = useState("general");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
    setSelectedSubject("general");
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send us a message and we'll get back to you within 24 hours.",
      contact: "contact@haqikos.ai",
      action: "Send Email",
      link: "mailto:contact@haqikos.ai"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our team during business hours.",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      link: "tel:+15551234567"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team in real-time.",
      contact: "Available 24/7",
      action: "Start Chat",
      link: "#"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 AI Boulevard, San Francisco, CA 94105",
      type: "Headquarters",
      icon: "🏢"
    },
    {
      city: "New York",
      country: "United States",
      address: "456 Innovation Street, New York, NY 10001",
      type: "Research Office",
      icon: "🏛️"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "789 Tech Lane, London, EC1A 1BB",
      type: "European Hub",
      icon: "🇬🇧"
    }
  ];

  const departments = [
    {
      name: "Sales & Partnerships",
      description: "For business inquiries, partnerships, and enterprise solutions",
      email: "sales@haqikos.ai",
      response: "Response within 4 hours"
    },
    {
      name: "Technical Support",
      description: "For technical questions, API support, and integration help",
      email: "support@haqikos.ai",
      response: "Response within 2 hours"
    },
    {
      name: "Research Collaboration",
      description: "For academic partnerships and research opportunities",
      email: "research@haqikos.ai",
      response: "Response within 24 hours"
    },
    {
      name: "Media & Press",
      description: "For press inquiries, interviews, and media requests",
      email: "press@haqikos.ai",
      response: "Response within 6 hours"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Haqikos | Get in Touch</title>
        <meta
          name="description"
          content="Contact Haqikos for business inquiries, technical support, research collaboration, or general questions. Our team is here to help."
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
                Get in Touch
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Have questions about our AI solutions? Want to collaborate on research? 
                Need technical support? We're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
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
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the best way to reach us based on your needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-lg font-medium text-white mb-4">
                    {method.contact}
                  </div>
                  <a
                    href={method.link}
                    className="btn-primary inline-flex items-center w-full justify-center"
                  >
                    {method.action}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="card max-w-2xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Business</option>
                  <option value="support">Technical Support</option>
                  <option value="research">Research Collaboration</option>
                  <option value="press">Media & Press</option>
                  <option value="careers">Careers & Jobs</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </motion.form>
          </div>
        </section>

        {/* Departments */}
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
                Contact by Department
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Reach out to the right team for faster response times.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {dept.name}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {dept.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          {dept.email}
                        </a>
                        <span className="text-sm text-gray-500">{dept.response}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
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
                Our Offices
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visit us at one of our global locations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{office.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {office.city}
                  </h3>
                  <p className="text-gray-400 mb-2">{office.country}</p>
                  <p className="text-gray-500 text-sm mb-4">{office.type}</p>
                  <div className="flex items-center justify-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
                Business Hours
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team is available during these hours to assist you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card max-w-2xl mx-auto"
            >
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-white font-medium">{schedule.day}</span>
                    </div>
                    <span className="text-gray-400">{schedule.hours}</span>
                  </div>
                ))}
              </div>
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
                Whether you have a question, want to explore our solutions, 
                or are ready to collaborate, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/projects"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Explore Our Solutions
                </a>
                <a
                  href="/careers"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Join Our Team
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
