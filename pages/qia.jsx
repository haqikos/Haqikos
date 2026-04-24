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
  Bot
} from "lucide-react";
import { useEffect, useState } from "react";

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

  return (
    <>
      <Head>
        <title>QIA Assistant - Haqikos | Experience Quantum AI</title>
        <meta
          name="description"
          content="Interact with QIA, the next generation quantum-inspired AI assistant."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-black">        
        {/* Aurora Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-black min-h-[90vh] flex items-center">
          <div className="absolute inset-0 aurora-bg opacity-30"></div>
          
          {/* Floating orbs */}
          <motion.div 
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }} 
            transition={{ duration: 6, repeat: Infinity }} 
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }} 
            transition={{ duration: 7, repeat: Infinity }} 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4 mr-2" /> Meet QIA v1.0
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Intelligence, <br/>
                  <span className="gradient-text">Evolved.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                  Experience a quantum leap in reasoning, creativity, and problem-solving with the ultimate AI assistant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://qia.haqikos.com" className="btn-primary flex items-center justify-center">
                    Start Using QIA <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a href="#how-it-works" className="btn-secondary flex items-center justify-center">
                    See How It Works
                  </a>
                </div>
              </motion.div>

              {/* Chat Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="card border-white/10 bg-gray-900/60 shadow-2xl p-6 min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm">U</span>
                      </div>
                      <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-200">
                        Initialize core protocol. Who are you?
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gradient-to-r from-gray-800 to-gray-800/80 border border-gray-700/50 rounded-2xl rounded-tl-sm p-4 text-sm text-gray-200">
                        <span className="font-mono text-blue-400 font-medium">{typedText}</span>
                        {typedText !== fullText && <span className="animate-pulse">_</span>}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-gray-800 flex gap-4">
                    <div className="h-10 bg-gray-800/50 rounded-lg flex-1 border border-gray-700"></div>
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features 3x2 Grid */}
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-16">Supercharge your productivity</h2>
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

        {/* How It Works line */}
        <section id="how-it-works" className="py-24 bg-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-20">How It Works</h2>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-gray-700 -z-10" />
              
              {[
                { step: "1", title: "Sign Up", icon: <Lock className="w-6 h-6"/> },
                { step: "2", title: "Initialize Query", icon: <MessageSquare className="w-6 h-6"/> },
                { step: "3", title: "Get Results", icon: <Sparkles className="w-6 h-6"/> }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center bg-black p-6 rounded-2xl w-full md:w-64 border border-gray-800 mb-8 md:mb-0 relative"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 absolute -top-4 text-sm font-bold flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.8)]">
                    {s.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mt-2 mb-4 text-blue-400 border border-gray-700">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-12">The Haqikos Advantage</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                <thead>
                  <tr className="bg-gray-900 border-b border-gray-800">
                    <th className="p-4 text-gray-300 font-semibold w-1/3">Feature</th>
                    <th className="p-4 text-blue-400 font-bold w-1/3 border-l border-r border-gray-800 bg-gray-800/30">QIA</th>
                    <th className="p-4 text-gray-500 font-semibold w-1/3">Others</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900/10">
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 text-gray-300">Context Window</td>
                    <td className="p-4 text-white border-l border-r border-gray-800 font-medium flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Default Infinite</td>
                    <td className="p-4 text-gray-500 flex items-center"><XCircle className="w-4 h-4 text-red-500/50 mr-2"/> Capped</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 text-gray-300">Real-time Web Access</td>
                    <td className="p-4 text-white border-l border-r border-gray-800 font-medium flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Yes</td>
                    <td className="p-4 text-gray-500 flex items-center"><CheckCircle className="w-4 h-4 text-green-500/50 mr-2"/> Limited</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 text-gray-300">Data Retention</td>
                    <td className="p-4 text-white border-l border-r border-gray-800 font-medium flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> User Controlled</td>
                    <td className="p-4 text-gray-500 flex items-center"><XCircle className="w-4 h-4 text-red-500/50 mr-2"/> Corporate Owned</td>
                  </tr>
                  <tr className="hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 text-gray-300">Execution Speed</td>
                    <td className="p-4 text-white border-l border-r border-gray-800 font-medium flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/> Ultra Low-Latency</td>
                    <td className="p-4 text-gray-500 flex items-center"><XCircle className="w-4 h-4 text-red-500/50 mr-2"/> Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Full CTA Banner */}
        <section className="py-24 px-4 bg-black">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black border border-blue-500/30 p-12 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">Unleash Your Potential</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Stop waiting for the future. Start engaging with intelligence that works seamlessly at the speed of thought.
              </p>
              <a href="https://qia.haqikos.com" className="btn-primary inline-flex text-lg px-8 py-4">
                Launch QIA Now <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </div>
          </motion.div>
        </section>      </main>
    </>
  );
}
