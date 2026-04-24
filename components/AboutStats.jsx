"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, Target } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      const currentCount = Math.floor(end * percentage);
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={nodeRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const AboutStats = () => {
  const stats = [
    { icon: Users, number: 50, suffix: "+", label: "AI Experts" },
    { icon: Award, number: 100, suffix: "+", label: "Projects Delivered" },
    { icon: Globe, number: 25, suffix: "+", label: "Countries Served" },
    { icon: Target, number: 99, suffix: ".9%", label: "Uptime" }
  ];

  return (
    <section id="vision-section" className="py-20 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-2xl bg-black border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:border-blue-500/30 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <div className="text-4xl font-bold text-white mb-2 font-orbitron">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 uppercase tracking-widest text-xs font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStats;
