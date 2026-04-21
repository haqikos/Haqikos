import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Zap, 
  Globe, 
  Shield, 
  Brain,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Research Scientist",
      department: "Research",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150K - $200K",
      description: "Lead groundbreaking research in AGI and quantum AI, publishing papers and contributing to our mission.",
      requirements: ["PhD in Computer Science, AI, or related field", "Strong publication record", "Experience with large language models", "Python, PyTorch, TensorFlow"],
      benefits: ["Competitive salary", "Equity package", "Health insurance", "Flexible work arrangements"]
    },
    {
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120K - $160K",
      description: "Build and deploy production ML models, optimize performance, and scale our AI infrastructure.",
      requirements: ["MS/PhD in ML, CS, or related field", "Production ML experience", "Kubernetes, Docker", "Python, Go, or Rust"],
      benefits: ["Competitive salary", "Equity package", "Health insurance", "Remote work options"]
    },
    {
      title: "AI Safety Researcher",
      department: "Safety & Ethics",
      location: "New York, NY",
      type: "Full-time",
      experience: "2+ years",
      salary: "$100K - $140K",
      description: "Research and develop methods to ensure AI systems are safe, aligned, and beneficial to humanity.",
      requirements: ["Background in AI safety, ethics, or philosophy", "Strong analytical skills", "Experience with AI systems", "Academic or industry experience"],
      benefits: ["Competitive salary", "Equity package", "Health insurance", "Conference attendance"]
    },
    {
      title: "Frontend Developer",
      department: "Product",
      location: "Austin, TX",
      type: "Full-time",
      experience: "2+ years",
      salary: "$90K - $130K",
      description: "Build beautiful, responsive user interfaces for our AI products and internal tools.",
      requirements: ["React, Next.js, TypeScript", "CSS, Tailwind CSS", "User experience design", "Performance optimization"],
      benefits: ["Competitive salary", "Equity package", "Health insurance", "Professional development"]
    }
  ];

  const internshipPrograms = [
    {
      title: "AI Research Intern",
      duration: "12 weeks",
      location: "San Francisco, CA",
      stipend: "$8,000/month",
      description: "Work alongside our research team on cutting-edge AI projects and contribute to published papers.",
      requirements: ["Currently pursuing MS/PhD", "Strong academic background", "Python programming", "ML/AI coursework"],
      projects: ["Quantum AI algorithms", "AGI research", "NLP improvements", "AI safety"]
    },
    {
      title: "Software Engineering Intern",
      duration: "12 weeks",
      location: "Remote",
      stipend: "$7,000/month",
      description: "Build production-ready features for our AI platform and learn from experienced engineers.",
      requirements: ["Currently pursuing BS/MS", "Strong programming skills", "Data structures & algorithms", "Web development"],
      projects: ["API development", "Frontend features", "Testing & automation", "Performance optimization"]
    },
    {
      title: "AI Ethics Intern",
      duration: "8 weeks",
      location: "New York, NY",
      stipend: "$6,000/month",
      description: "Research AI safety, ethics, and policy implications while working with our safety team.",
      requirements: ["Currently pursuing degree", "Interest in AI ethics", "Research experience", "Strong writing skills"],
      projects: ["Safety frameworks", "Policy research", "Ethics guidelines", "Risk assessment"]
    }
  ];

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Intellectual Excellence",
      description: "We pursue the highest standards in everything we do, from research to product development."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centered",
      description: "Our AI systems are designed to augment human capabilities and benefit all of humanity."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We encourage bold thinking and breakthrough ideas that push the boundaries of what's possible."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We're building AI solutions that will transform industries and improve lives worldwide."
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Above-market salaries, equity packages, and performance bonuses"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team & Culture",
      description: "Collaborative environment, regular team events, and strong community"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Professional development, conference attendance, and continuous learning"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Haqikos | Join the AI Revolution</title>
        <meta
          name="description"
          content="Join Haqikos and help shape the future of AI. Explore career opportunities, internships, and become part of our mission to advance artificial intelligence."
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
                Join the AI Revolution
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Help us build the future of artificial intelligence. Join a team of brilliant minds 
                working on the most important technological challenge of our time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
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
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and shape our culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
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
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team and help shape the future of AI technology.
              </p>
            </motion.div>

            <div className="space-y-6 mb-20">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group hover:scale-102 transition-transform duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-200">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                          {position.department}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-2" />
                          {position.experience}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {position.salary}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-center">
                              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {position.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-400 flex items-center">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:ml-8 lg:mt-0 mt-6">
                      <a
                        href="/contact"
                        className="btn-primary inline-flex items-center w-full lg:w-auto justify-center"
                      >
                        Apply Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internship Programs */}
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
                Internship Programs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Gain hands-on experience working on cutting-edge AI projects with our world-class team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {internshipPrograms.map((internship, index) => (
                <motion.div
                  key={internship.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {internship.title}
                    </h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                      {internship.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {internship.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {internship.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {internship.stipend}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {internship.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Projects:</h4>
                    <ul className="space-y-1">
                      {internship.projects.map((project, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="btn-secondary inline-flex items-center w-full justify-center"
                  >
                    Apply for Internship
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Why Join Haqikos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we offer a mission and a community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Ready to Make History?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in building the future of artificial intelligence. 
                Your work will impact billions of lives and shape the course of human history.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Get in Touch
                </a>
                <a
                  href="/about"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Learn More About Us
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
