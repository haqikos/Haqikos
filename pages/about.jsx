import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  TrendingUp, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Building2,
  Calendar,
  MapPin
} from 'lucide-react';

const AboutPage = () => {
  const companyStats = [
    { icon: Users, number: "50+", label: "AI Experts" },
    { icon: Award, number: "100+", label: "Projects Delivered" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: Target, number: "99.9%", label: "Uptime" }
  ];

  const companyValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring new frontiers and breakthrough technologies."
    },
    {
      icon: Users,
      title: "Human-Centric AI",
      description: "Our AI solutions are designed to augment human capabilities, not replace them, ensuring technology serves humanity."
    },
    {
      icon: CheckCircle,
      title: "Quality & Reliability",
      description: "We maintain the highest standards in our AI systems, ensuring accuracy, security, and dependability in every solution."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're committed to making AI accessible worldwide, bridging technological gaps and empowering diverse communities."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      expertise: "Machine Learning, Neural Networks",
      experience: "15+ years in AI research",
      avatar: "‍"
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      expertise: "Full-Stack Development, AI Infrastructure",
      experience: "12+ years in software engineering",
      avatar: "‍"
    },
    {
      name: "Dr. James Kim",
      role: "Research Director",
      expertise: "Computer Vision, Deep Learning",
      experience: "18+ years in AI academia",
      avatar: "‍"
    },
    {
      name: "Priya Patel",
      role: "Product Strategy Lead",
      expertise: "AI Product Management, UX Design",
      experience: "10+ years in tech products",
      avatar: "‍"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Haqikos was established with a vision to democratize AI technology"
    },
    {
      year: "2021",
      title: "First AI Product Launch",
      description: "Released our flagship QIA AI assistant to the market"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Secured $25M in funding to accelerate AI research and development"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to 25+ countries with localized AI solutions"
    },
    {
      year: "2024",
      title: "AI Breakthrough",
      description: "Achieved breakthrough in multimodal AI understanding and reasoning"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>About Us - Haqikos | Advanced AI Company</title>
        <meta name="description" content="Learn about Haqikos, our mission to democratize AI technology, our team of experts, and our journey in advancing artificial intelligence." />
        <meta name="keywords" content="Haqikos, AI company, artificial intelligence, machine learning, AI research, AI experts" />
        <meta property="og:title" content="About Us - Haqikos | Advanced AI Company" />
        <meta property="og:description" content="Learn about Haqikos, our mission to democratize AI technology, our team of experts, and our journey in advancing artificial intelligence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haqikos.ai/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Haqikos | Advanced AI Company" />
        <meta name="twitter:description" content="Learn about Haqikos, our mission to democratize AI technology, our team of experts, and our journey in advancing artificial intelligence." />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Haqikos
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're building the future of artificial intelligence, one breakthrough at a time. 
            Our mission is to democratize AI technology and make it accessible to everyone.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/vision-mission" className="btn-primary">
              Our Vision & Mission
            </a>
            <a href="/careers" className="btn-secondary">
              Join Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {companyStats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded in 2020, Haqikos emerged from a simple yet powerful vision: to make artificial intelligence 
                accessible to everyone, not just large corporations or research institutions.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                What started as a small team of AI researchers and engineers has grown into a global force for 
                AI innovation. We've delivered over 100 AI solutions across 25+ countries, helping businesses, 
                governments, and individuals harness the power of artificial intelligence.
              </p>
              <p className="text-lg text-gray-300">
                Today, we continue to push the boundaries of what's possible with AI, always keeping our core 
                mission at heart: democratizing AI technology for the betterment of humanity.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl"></div>
              <div className="relative p-8 rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                <Building2 className="w-16 h-16 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Why Haqikos?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Cutting-edge AI research and development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Global team of AI experts and researchers
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Proven track record of successful AI implementations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Commitment to ethical and responsible AI development
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do, from our research to our relationships with clients and partners.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {companyValues.map((value, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of AI experts, researchers, and engineers are the driving force behind Haqikos' success.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-300 mb-2 text-sm">{member.expertise}</p>
                <p className="text-gray-400 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Founder's Note Card */}
          <motion.div
            className="mt-12 bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-500/20 border-4 border-gray-800 flex items-center justify-center flex-shrink-0 text-7xl overflow-hidden">
                ‍
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">A Note from Our Founder</h3>
                <p className="text-gray-400 italic mb-6 leading-relaxed text-lg">
                  "Artificial intelligence shouldn't be a cold, mechanical tool. It should act as an extension of human creativity, capability, and empathy. When we founded Haqikos, our core belief was that the intersection of human and machine intelligence represents the next fundamental leap for society. I'm incredibly proud of what this team has built, and more importantly, where we are headed."
                </p>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xl">Harsh Vashishtha</span>
                  <span className="text-blue-400">Founder & CEO, Haqikos</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="/careers" className="btn-primary inline-flex items-center">
              Join Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 bg-gray-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to global AI leadership - here's how we've grown and evolved over the years.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-400 font-semibold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card bg-gray-900 p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Reach Out To Us</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Want to get in touch with our team directly? Send an email and we'll get back to you shortly.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Name" className="w-full bg-gray-800 border fill-white text-white border-gray-700 rounded-lg p-3 outline-none focus:border-blue-500" required />
              <input type="email" placeholder="Email" className="w-full bg-gray-800 border fill-white text-white border-gray-700 rounded-lg p-3 outline-none focus:border-blue-500" required />
              <textarea placeholder="Message" rows={4} className="w-full bg-gray-800 border fill-white text-white border-gray-700 rounded-lg p-3 outline-none focus:border-blue-500" required></textarea>
              <button 
                type="submit"
                onClick={() => window.location.href = "mailto:contact@haqikos.com"}
                className="btn-primary w-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                Send Message via Mail client
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
