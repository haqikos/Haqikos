import Head from "next/head";


import { motion } from "framer-motion";
import { Target, Eye, Zap, Users, Globe, Shield } from "lucide-react";

export default function VisionMission() {
  const visionPoints = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Democratizing AI",
      description:
        "Making advanced artificial intelligence accessible to everyone, from individual developers to large enterprises.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Accelerating Innovation",
      description:
        "Empowering researchers and developers to build the next generation of AI applications faster than ever before.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "Creating AI solutions that address real-world challenges across industries and communities worldwide.",
    },
  ];

  const missionValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Pursuing the highest standards in AI research, development, and deployment.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "Fostering partnerships with researchers, developers, and organizations worldwide.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Responsibility",
      description:
        "Ensuring AI development follows ethical principles and benefits humanity.",
    },
  ];

  return (
    <>
      <Head>
        <title>Vision & Mission - Haqikos | Shaping the Future of AI</title>
        <meta
          name="description"
          content="Discover Haqikos' vision for democratizing AI and our mission to accelerate innovation while ensuring responsible development."
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
                Our Vision & Mission
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Shaping the future of artificial intelligence through
                innovation, collaboration, and responsible development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
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
                Our Vision
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We envision a world where artificial intelligence enhances human
                capabilities, solves complex problems, and creates opportunities
                for everyone.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-800 rounded-xl text-white group-hover:bg-gray-700 transition-colors duration-300">
                      {point.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
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
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                To build and deploy the most advanced AI systems while ensuring
                they are safe, beneficial, and accessible to all of humanity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {missionValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
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

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Our Commitment
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Haqikos, we are committed to advancing AI technology
                  responsibly. We believe that AI should augment human
                  intelligence, not replace it. Our research and development
                  focus on creating systems that are transparent, accountable,
                  and aligned with human values.
                </p>
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
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're a researcher, developer, or AI enthusiast,
                there's a place for you in our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Explore Careers
                </a>
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
