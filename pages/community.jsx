import Head from "next/head";


import { motion } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Globe, 
  Calendar,
  ArrowRight,
  ExternalLink,
  Heart,
  Zap,
  Mail,
  Clock
} from "lucide-react";

export default function Community() {
  const communityFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discussion Forums",
      description: "Join conversations about AI research, development, and applications. Share insights and learn from experts.",
      status: "Coming Soon",
      statusColor: "text-yellow-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Groups",
      description: "Connect with like-minded developers, researchers, and AI enthusiasts in your area or field of interest.",
      status: "Coming Soon",
      statusColor: "text-yellow-400"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Project Showcase",
      description: "Share your AI projects, get feedback, and discover innovative applications built with Haqikos tools.",
      status: "Coming Soon",
      statusColor: "text-yellow-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Events",
      description: "Participate in virtual and in-person events, workshops, and conferences around the world.",
      status: "Coming Soon",
      statusColor: "text-yellow-400"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Safety Workshop",
      date: "March 15, 2024",
      time: "2:00 PM PST",
      type: "Virtual",
      description: "Learn about AI safety principles and best practices for building responsible AI systems.",
      registration: "Open"
    },
    {
      title: "Quantum AI Meetup",
      date: "March 22, 2024",
      time: "6:00 PM PST",
      type: "In-Person",
      location: "San Francisco, CA",
      description: "Network with quantum AI researchers and explore the future of quantum computing in AI.",
      registration: "Open"
    },
    {
      title: "Developer Hackathon",
      date: "April 5-7, 2024",
      time: "48 hours",
      type: "Hybrid",
      description: "Build innovative AI applications using Haqikos tools. Prizes and recognition for winners.",
      registration: "Coming Soon"
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Countries", value: "45+", icon: <Globe className="w-6 h-6" /> },
    { label: "Projects Shared", value: "500+", icon: <Lightbulb className="w-6 h-6" /> },
    { label: "Events Hosted", value: "100+", icon: <Calendar className="w-6 h-6" /> }
  ];

  return (
    <>
      <Head>
        <title>Community - Haqikos | Join the AI Community</title>
        <meta
          name="description"
          content="Join the Haqikos community of AI researchers, developers, and enthusiasts. Connect, collaborate, and shape the future of AI together."
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
                Join Our Community
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Connect with AI researchers, developers, and enthusiasts from around the world. 
                Share knowledge, collaborate on projects, and shape the future of AI together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Stats */}
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
                Our Growing Community
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of AI enthusiasts who are already part of our global community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Features */}
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
                Community Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the tools and platforms that will help you connect, collaborate, and grow 
                within the Haqikos community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">
                          {feature.title}
                        </h3>
                        <span className={`text-sm font-medium ${feature.statusColor}`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
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
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Mark your calendar for these exciting community events and opportunities to connect.
              </p>
            </motion.div>

            <div className="space-y-6 mb-20">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
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
                          {event.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.registration === 'Open' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {event.registration}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Zap className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Globe className="w-4 h-4 mr-2" />
                          {event.type}
                          {event.location && ` - ${event.location}`}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    
                    <div className="lg:ml-8 lg:mt-0 mt-6">
                      <button className="btn-primary w-full lg:w-auto">
                        {event.registration === 'Open' ? 'Register Now' : 'Get Notified'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
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
                Get Involved Today
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                There are many ways to become part of our community and contribute to the future of AI.
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
                  <Mail className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Join Mailing List
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Stay updated with community news, events, and opportunities. Be the first to know when new features launch.
                </p>
                <button className="btn-primary w-full">
                  Subscribe
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Volunteer
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Help organize events, moderate discussions, or contribute to community projects. Every contribution matters.
                </p>
                <button className="btn-secondary w-full">
                  Get Started
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">
                  <Lightbulb className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Share Ideas
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Have suggestions for community features or events? We'd love to hear your ideas and feedback.
                </p>
                <button className="btn-primary w-full">
                  Submit Ideas
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Clock className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">
                Community Platform Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're building a comprehensive community platform that will revolutionize how AI enthusiasts 
                connect and collaborate. Get ready for an amazing experience!
              </p>
              <div className="card max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What to Expect
                </h3>
                <ul className="text-left space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Real-time discussion forums and chat rooms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Project collaboration tools and version control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>AI model sharing and collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>Mentorship programs and learning paths</span>
                  </li>
                </ul>
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
                Ready to Join?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of a community that's shaping the future of artificial intelligence. 
                Connect, learn, and grow with fellow AI enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Get in Touch
                </a>
                <a
                  href="/blog"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Read Our Blog
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
