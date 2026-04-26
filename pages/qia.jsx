import Head from "next/head";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Network, 
  MessageSquare,
  Lock,
  ArrowRight,
  CheckCircle,
  XCircle,
  Sparkles,
  Bot,
  Zap,
  Globe
} from "lucide-react";
import { useEffect, useState } from "react";

const QIA_URL = "https://qia.haqikos.com";

export default function QIA() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello! I am QIA, your advanced quantum AI assistant. How can I help you reshape your workflow today?";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  const features = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Contextual Memory",
      desc: "Remembers past interactions to provide deeply contextual problem solving."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Quantum Inference",
      desc: "Leverages parallel abstraction to find solutions significantly faster."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Private & Secure",
      desc: "Zero-retention local mode ensures your data never leaves your environment."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multi-Modal",
      desc: "Analyze images, code, documents, and audio natively in one thread."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Dynamic Generation",
      desc: "Generates UI, files, and functioning code blocks instantly."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "API Ready",
      desc: "Seamlessly integrate QIA into your own applications via the API."
    }
  ];

  const comparisonRows = [
    {
      feature: "Context Window",
      qia: "Default Infinite",
      others: "Capped",
      qiaCheck: true,
      othersCheck: false
    },
    {
      feature: "Real-time Web Access",
      qia: "Yes",
      others: "Limited",
      qiaCheck: true,
      othersCheck: "partial"
    },
    {
      feature: "Data Retention",
      qia: "User Controlled",
      others: "Corporate Owned",
      qiaCheck: true,
      othersCheck: false
    },
    {
      feature: "Execution Speed",
      qia: "Ultra Low-Latency",
      others: "Standard",
      qiaCheck: true,
      othersCheck: false
    }
  ];

  return (
    <>
      <Head>
        <title>QIA Assistant - Haqikos | Experience Quantum AI</title>
        <meta
          name="description"
          content="Interact with QIA, the next generation quantum-inspired AI assistant from Haqikos. Unlimited context, multi-modal, private and blazing fast."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="QIA - Quantum AI Assistant by Haqikos" />
        <meta property="og:description" content="Experience intelligence evolved. QIA is Haqikos' flagship AI assistant." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-black">

        {/* ── Aurora Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-black min-h-[90vh] flex items-center">
          <div className="absolute inset-0 aurora-bg opacity-30" />

          {/* Floating orbs */}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"
          />
          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left — copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" /> Meet QIA v1.0
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Intelligence, <br />
                  <span className="gradient-text">Evolved.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                  Experience a quantum leap in reasoning, creativity, and problem-solving with the ultimate AI assistant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={QIA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center"
                  >
                    Start Using QIA <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="btn-secondary flex items-center justify-center"
                  >
                    See How It Works
                  </a>
                </div>
              </motion.div>

              {/* Right — animated chat mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="card border-white/10 bg-gray-900/60 shadow-2xl p-6 min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* User message */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm text-white">U</span>
                      </div>
                      <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-200">
                        Initialize core protocol. Who are you?
                      </div>
                    </div>

                    {/* QIA message */}
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-gray-800 to-gray-800/80 border border-gray-700/50 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-200 flex-1">
                        <span className="font-mono text-blue-400 font-medium">{typedText}</span>
                        {typedText !== fullText && (
                          <span className="animate-pulse text-blue-400 ml-0.5">▍</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Fake input bar */}
                  <div className="mt-8 pt-4 border-t border-gray-800 flex gap-4 items-center">
                    <div className="h-10 bg-gray-800/50 rounded-lg flex-1 border border-gray-700 flex items-center px-4">
                      <span className="text-gray-600 text-sm">Ask QIA anything...</span>
                    </div>
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 cursor-pointer hover:bg-blue-500 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 6 Feature Cards ─────────────────────────────────────────── */}
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Supercharge your productivity
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Six core capabilities that put QIA ahead of everything else you've tried.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-4 text-blue-400">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-24 bg-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold gradient-text text-center mb-20"
            >
              How It Works
            </motion.h2>

            <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8">
              {/* connector line — desktop only */}
              <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-gray-700 -translate-y-1/2 z-0" />

              {[
                { step: "1", title: "Sign Up", desc: "Create your free account in seconds.", icon: <Lock className="w-6 h-6" /> },
                { step: "2", title: "Initialize Query", desc: "Type, upload, or speak your request.", icon: <MessageSquare className="w-6 h-6" /> },
                { step: "3", title: "Get Results", desc: "Receive instant, intelligent answers.", icon: <Sparkles className="w-6 h-6" /> }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative flex flex-col items-center bg-black p-8 rounded-2xl flex-1 border border-gray-800 z-10 text-center"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 absolute -top-4 text-sm font-bold flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.8)] text-white">
                    {s.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mt-2 mb-4 text-blue-400 border border-gray-700">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison Table ─────────────────────────────────────────── */}
        <section className="py-24 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12"
            >
              The Haqikos Advantage
            </motion.h2>

            <div className="overflow-x-auto rounded-xl border border-gray-800 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-800">
                    <th className="p-4 text-gray-300 font-semibold w-1/3">Feature</th>
                    <th className="p-4 text-white font-bold w-1/3 border-l border-r border-gray-800 bg-gray-800/30">QIA</th>
                    <th className="p-4 text-gray-500 font-semibold w-1/3">Others</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900/10">
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 hover:bg-gray-900/30 transition-colors ${i === comparisonRows.length - 1 ? "border-b-0" : ""}`}
                    >
                      <td className="p-4 text-gray-300">{row.feature}</td>
                      <td className="p-4 border-l border-r border-gray-800">
                        <div className="flex items-center text-white font-medium">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {row.qia}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center text-gray-500">
                          {row.othersCheck === "partial" ? (
                            <CheckCircle className="w-4 h-4 text-green-500/50 mr-2 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-4 h-4 text-red-500/50 mr-2 flex-shrink-0" />
                          )}
                          {row.others}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ──────────────────────────────────────────────── */}
        <section className="py-24 px-4 bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black border border-blue-500/30 p-12 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden"
          >
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1 text-blue-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> Available Now
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unleash Your Potential
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Stop waiting for the future. Start engaging with intelligence that works seamlessly at the speed of thought.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={QIA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  Launch QIA Now <ArrowRight className="w-6 h-6 ml-2" />
                </a>
                <a
                  href="/api-docs"
                  className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  View API Docs
                </a>
              </div>
            </div>
          </motion.div>
        </section>

      </main>
    </>
  );
}
