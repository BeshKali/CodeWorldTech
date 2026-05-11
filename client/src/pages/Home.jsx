// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiPlay, FiX, FiCpu, FiGlobe, FiZap, FiActivity, FiShield, FiMonitor, FiDatabase, FiArrowRight } from 'react-icons/fi';

import vid from '../assets/CWT.mp4'; 

// --- 3D Tilt Wrapper Component ---
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full transition-transform duration-200 ease-out"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [stats, setStats] = useState({ systems: 214, processed: 1240 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        systems: prev.systems + (Math.random() > 0.8 ? 1 : 0),
        processed: prev.processed + Math.floor(Math.random() * 5)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden 
                 bg-white text-gray-900 dark:bg-[#020202] dark:text-white transition-colors duration-700"
    >
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Gradient */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
        
        {/* High-Tech Grid */}
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
          bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      {/* --- STATUS HUD (TOP BAR) --- */}
      <div className="absolute top-10 left-0 w-full px-10 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[9px] tracking-[0.4em] font-mono text-blue-500 font-bold">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            LIVE_DATAFEED
          </div>
          <div className="text-[10px] font-mono opacity-40">NODES_ACTIVE: {stats.systems}</div>
        </div>
        <div className="text-right flex flex-col gap-1">
          <div className="text-[9px] tracking-[0.4em] font-mono opacity-40 uppercase">Global_Traffic</div>
          <div className="text-[11px] font-mono text-blue-500">REQ_VOL: {stats.processed.toLocaleString()}</div>
        </div>
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl px-6 pt-32 pb-20 flex flex-col items-center">
        
        {/* Floating Badge */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="group px-5 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl mb-10 flex items-center gap-3 hover:border-blue-500/50 transition-colors cursor-default"
        >
          <FiZap className="text-blue-500 group-hover:scale-125 transition-transform" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-black opacity-70">Next-Gen Digital Infrastructure</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black text-center mb-8 leading-[0.9] tracking-tighter"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20 }}
        >
          CODE WORLD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-500 bg-[length:200%_auto] animate-gradient-x">
            TECHNOLOGIES
          </span>
        </motion.h1>

        <motion.p 
          className="max-w-2xl text-center text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Architecting robust <span className="text-black dark:text-white font-medium">software ecosystems</span>. 
          We specialize in high-performance POS, secure government integrations, and scalable web platforms.
        </motion.p>

        {/* CTA Group */}
        <motion.div className="flex flex-col sm:flex-row justify-center gap-5 mb-24">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl overflow-hidden shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)]"
            onClick={() => window.location.href = '/services'}
          >
            <span className="relative z-10 uppercase tracking-widest text-xs flex items-center gap-2">
              Our Capabilities <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </motion.button>
          
          <motion.button
            onClick={() => window.location.href = '/contact'}
            className="px-12 py-5 border border-black/10 dark:border-white/10 rounded-2xl font-bold backdrop-blur-md transition-all text-xs uppercase tracking-widest hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
          >
            Request Quote
          </motion.button>
        </motion.div>

        {/* --- VIDEO HUD DISPLAY --- */}
        <div className="w-full max-w-5xl perspective-2000">
          <TiltCard>
            <motion.div 
              className="relative rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-black group"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* Internal HUD Elements */}
              <div className="absolute top-6 left-6 z-30 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="px-3 py-1 rounded bg-blue-600 text-[8px] font-mono font-bold text-white uppercase tracking-tighter">Secure_Connection</div>
                <div className="text-[8px] font-mono text-white/50 uppercase tracking-widest">Protocol: HTTPS/V3</div>
              </div>

              {/* Video Content */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <video 
                autoPlay muted loop playsInline
                className="w-full aspect-video object-cover opacity-60 group-hover:opacity-90 transition-all duration-1000 scale-105 group-hover:scale-100"
              >
                <source src={vid} type="video/mp4" />
              </video>

              {/* Central Play Button */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <motion.button 
                  onClick={() => setVideoOpen(true)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-24 h-24 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl transition-all group-hover:border-blue-500/50 group-hover:bg-blue-500/10"
                >
                  <FiPlay className="ml-1 text-4xl text-white group-hover:text-blue-400 transition-colors" />
                  <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
                </motion.button>
                <div className="mt-8 text-[9px] font-mono tracking-[0.6em] text-white/40 uppercase group-hover:text-blue-400 transition-colors">Launch_System_Overview</div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 p-8">
                <div className="w-10 h-10 border-t-2 border-l-2 border-white/20 rounded-tl-xl" />
              </div>
              <div className="absolute bottom-0 right-0 p-8">
                <div className="w-10 h-10 border-b-2 border-r-2 border-white/20 rounded-br-xl" />
              </div>
            </motion.div>
          </TiltCard>
        </div>
      </div>

      {/* --- SERVICE DOCKBAR --- */}
      <div className="relative z-10 w-full px-6 py-16 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01] backdrop-blur-md">
        {[
          { icon: <FiGlobe />, label: "Web Ecosystems" },
          { icon: <FiShield />, label: "Gov Portals" },
          { icon: <FiMonitor />, label: "POS Hardware" },
          { icon: <FiDatabase />, label: "Core Systems" }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="flex items-center gap-4 text-gray-400 hover:text-blue-500 transition-all cursor-pointer group"
          >
            <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/5 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl group-hover:shadow-blue-500/20">
                {item.icon}
            </span>
            <span className="text-[10px] uppercase font-black tracking-[0.2em] font-mono">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* --- FULLSCREEN MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-6"
            onClick={() => setVideoOpen(false)}
          >
            <motion.button 
                className="absolute top-10 right-10 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all" 
                whileHover={{ rotate: 90 }}
            >
              <FiX size={24} />
            </motion.button>
            <motion.div 
              className="relative w-full h-full max-w-4xl aspect-video rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.2)]"
              initial={{ scale: 0.9, y:0}}
              animate={{ scale: 1, y: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
               <video autoPlay controls className="w-full h-full object-contain rounded-[2rem]">
                  <source src={vid} type="video/mp4" />
               </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default Home;