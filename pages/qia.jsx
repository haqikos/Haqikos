import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
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
  Send,
  User,
  Loader2,
  RefreshCw
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function QIA() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am QIA, your advanced AI assistant from Haqikos. Ask me anything — I'm here to help you reshape your workflow." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiConfigured, setApiConfigured] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        }),
      });

      const data = await res.json();

      if (data.error) {
        if (data.error.includes("API key")) setApiConfigured(false);
        setMessages(prev => [...prev, { role: "assistant", content: `⚠️ ${data.error}` }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ Unable to connect. Please check your connection and try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{ role: "assistant", content: "Hello! I am QIA, your advanced AI assistant from Haqikos. Ask me anything — I'm here to help you reshape your workflow." }]);
  };

  const features = [
    { icon: <Network className="w-6 h-6" />, title: "Contextual Memory", desc: "Remembers past interactions to provide deeply contextual problem solving." },
    { icon: <Cpu className="w-6 h-6" />, title: "Quantum Inference", desc: "Leverages parallel abstraction to find solutions significantly faster." },
    { icon: <Lock className="w-6 h-6" />, title: "Private & Secure", desc: "Zero-retention local mode ensures your data never leaves your environment." },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Multi-Modal", desc: "Analyze images, code, documents, and audio natively in one thread." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Dynamic Generation", desc: "Generates UI, files, and functioning code blocks instantly." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "API Ready", desc: "Seamlessly integrate QIA into your own applications via the API." }
  ];

  return (
    <>
      <Head>
        <title>QIA Assistant - Haqikos | Experience Quantum AI</title>
        <meta name="description" content="Interact with QIA, the next generation quantum-inspired AI assistant from Haqikos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-black">

        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-black">
          <div className="absolute inset-0 aurora-bg opacity-20" />
          <motion.div animate={{ y: [0,-30,0], x: [0,20,0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/15 blur-3xl rounded-full" />
          <motion.div animate={{ y: [0,30,0], x: [0,-20,0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/15 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" /> QIA v1.0 — Now Live
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Intelligence, <span className="gradient-text">Evolved.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience a quantum leap in reasoning, creativity, and problem-solving. Chat with QIA directly below — no sign-up needed.
              </p>
              <a href="#chat" className="btn-primary inline-flex items-center">
                Start Chatting <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Live Chat Interface */}
        <section id="chat" className="py-16 bg-gray-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold gradient-text mb-3">Talk to QIA</h2>
              <p className="text-gray-400">Ask anything — code, research, creative, strategy.</p>
            </motion.div>

            {!apiConfigured && (
              <div className="mb-4 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm text-center">
                ⚠️ <strong>ANTHROPIC_API_KEY</strong> is not set. Add it to your <code>.env.local</code> file to enable live chat.
              </div>
            )}

            {/* Chat Window */}
            <div className="card bg-gray-900/80 border-gray-700/50 flex flex-col h-[520px]">
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">QIA Assistant</p>
                    <p className="text-green-400 text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />Online</p>
                  </div>
                </div>
                <button onClick={clearChat} className="p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-gray-800" title="Clear chat">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-700">
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                        msg.role === "assistant"
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                          : "bg-gray-700"
                      }`}>
                        {msg.role === "assistant"
                          ? <Bot className="w-4 h-4 text-white" />
                          : <User className="w-4 h-4 text-white" />
                        }
                      </div>

                      {/* Bubble */}
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === "assistant"
                          ? "bg-gray-800 text-gray-200 rounded-tl-sm border border-gray-700/50"
                          : "bg-blue-600 text-white rounded-tr-sm"
                      }`}>
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}

                  {loading && (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 border border-gray-700/50 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                        <span className="text-gray-400 text-sm">QIA is thinking...</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-3 items-end">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    placeholder="Ask QIA anything... (Enter to send, Shift+Enter for new line)"
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    style={{ minHeight: "44px", maxHeight: "140px" }}
                    onInput={(e) => {
                      e.target.style.height = "auto";
                      e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
                    }}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || loading}
                    className="w-11 h-11 flex-shrink-0 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-blue-500/20"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
                <p className="text-gray-600 text-xs mt-2 text-center">QIA may make mistakes. Verify important information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-16">Supercharge Your Productivity</h2>
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

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-20">How It Works</h2>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-gray-700 -z-10" />
              {[
                { step: "1", title: "Type Your Query", icon: <MessageSquare className="w-6 h-6"/> },
                { step: "2", title: "QIA Processes", icon: <Cpu className="w-6 h-6"/> },
                { step: "3", title: "Get Results Instantly", icon: <Sparkles className="w-6 h-6"/> }
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center bg-black p-6 rounded-2xl w-full md:w-64 border border-gray-800 relative"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 absolute -top-4 text-sm font-bold flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.8)]">
                    {s.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mt-2 mb-4 text-blue-400 border border-gray-700">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-white text-center">{s.title}</h3>
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
                  {[
                    ["Context Window", "Default Infinite", "Capped", true, false],
                    ["Real-time Web Access", "Yes", "Limited", true, true],
                    ["Data Retention", "User Controlled", "Corporate Owned", true, false],
                    ["Execution Speed", "Ultra Low-Latency", "Standard", true, false],
                  ].map(([feature, qia, other, qiaOk, otherOk], i) => (
                    <tr key={i} className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors last:border-b-0">
                      <td className="p-4 text-gray-300">{feature}</td>
                      <td className="p-4 text-white border-l border-r border-gray-800 font-medium">
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2"/>{qia}</span>
                      </td>
                      <td className="p-4 text-gray-500">
                        <span className="flex items-center">
                          {otherOk
                            ? <CheckCircle className="w-4 h-4 text-green-500/50 mr-2"/>
                            : <XCircle className="w-4 h-4 text-red-500/50 mr-2"/>
                          }
                          {other}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 px-4 bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black border border-blue-500/30 p-12 text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">Unleash Your Potential</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Stop waiting for the future. Start engaging with intelligence that works seamlessly at the speed of thought.
              </p>
              <a href="#chat" className="btn-primary inline-flex text-lg px-8 py-4">
                Chat with QIA <ArrowRight className="w-6 h-6 ml-2" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
