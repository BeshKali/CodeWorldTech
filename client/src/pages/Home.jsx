// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiPlay, FiX, FiCpu, FiGlobe, FiZap, FiActivity, FiShield, FiMonitor, FiDatabase } from 'react-icons/fi';

// --- 3D Tilt Wrapper Component ---
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [stats, setStats] = useState({ systems: 214, processed: 1240 });

  // Simulate real-time service activity
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        systems: prev.systems + (Math.random() > 0.8 ? 1 : 0),
        processed: prev.processed + Math.floor(Math.random() * 3)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden 
                 transition-colors duration-500 bg-white text-gray-900 
                 dark:bg-[#030303] dark:text-white"
    >
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
          bg-[size:40px_40px]" 
        />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* --- REAL-TIME STATUS HUD --- */}
      <div className="absolute top-8 left-0 w-full px-8 flex justify-between items-center z-50 opacity-60">
        <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] font-mono">
          <FiActivity className="text-blue-500 animate-pulse" />
          SYSTEMS_ACTIVE: {stats.systems}
        </div>
        <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] font-mono">
          REQUESTS_PROCESSED: {stats.processed.toLocaleString()}
        </div>
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl px-6 pt-20 flex flex-col items-center">
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-600 dark:text-blue-400">Integrated Tech Solutions</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black text-center mb-6 leading-[0.85] tracking-tighter"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          CODE WORLD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-gray-400">
            TECHNOLOGIES
          </span>
        </motion.h1>

        <motion.p 
          className="max-w-3xl text-center text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Engineering the future of Business. From <span className="text-blue-600 dark:text-blue-400 font-medium">Custom Web Ecosystems</span> and 
          <span className="text-blue-600 dark:text-blue-400 font-medium"> Government Digital Onboarding</span> to 
          Advanced <span className="text-blue-600 dark:text-blue-400 font-medium">POS Support Systems.</span>
        </motion.p>

        {/* CTA Section */}
        <motion.div className="flex flex-wrap justify-center gap-6 mb-24">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all shadow-[0_0_20px_#2563eb44]"
            onClick={() => window.location.href = '/services'}
          >
            <span className="relative z-10 uppercase tracking-widest text-xs">Explore Services</span>
            <div className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            onClick={() => window.location.href = '/contact'}
            className="px-10 py-4 border border-black/10 dark:border-white/20 rounded-full font-bold backdrop-blur-sm transition-all text-xs uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5"
          >
            Get Quote
          </motion.button>
        </motion.div>

        {/* --- DYNAMIC CIRCUIT SHOWCASE (The Video you provided) --- */}
        <div className="w-full max-w-5xl perspective-1000">
          <TiltCard>
            <motion.div 
              className="relative rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl bg-black group cursor-pointer"
              onClick={() => setVideoOpen(true)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Circuit Video Implementation */}
              <div className="absolute inset-0 z-10 bg-blue-600/10 mix-blend-overlay pointer-events-none" />
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              >
                {/* Assuming you named your circuit video "circuit-bg.mp4" in your public folder */}
                <source src="/circuit-bg.mp4" type="video/mp4" />
                {/* Fallback image if video fails */}
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070" alt="Tech Background" />
              </video>

              {/* HUD Overlays */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 animate-pulse" />
                  <div className="relative w-24 h-24 flex items-center justify-center border border-white/30 rounded-full backdrop-blur-xl">
                    <FiPlay className="ml-1 text-3xl text-white" />
                  </div>
                </div>
                <div className="mt-6 text-[10px] font-mono tracking-[0.5em] text-white/70 uppercase">Initialize_Core_Visuals</div>
              </div>

              {/* Decorative Brackets */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-blue-500/50 rounded-tl-2xl" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-blue-500/50 rounded-br-2xl" />
            </motion.div>
          </TiltCard>
        </div>
      </div>

      {/* --- SERVICE CATEGORY BAR --- */}
      <div className="relative z-10 w-full px-12 py-12 flex flex-wrap justify-center gap-12 mt-20 border-t border-black/5 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
        {[
          { icon: <FiGlobe />, label: "Web Setup" },
          { icon: <FiShield />, label: "Gov Bridge" },
          { icon: <FiMonitor />, label: "Tech Support" },
          { icon: <FiDatabase />, label: "Business Systems" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-all cursor-crosshair group">
            <span className="p-2 rounded-lg bg-black/5 dark:bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                {item.icon}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono">{item.label}</span>
          </div>
        ))}
      </div>

      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4"
            onClick={() => setVideoOpen(false)}
          >
            <motion.button className="absolute top-8 right-8 text-white/50 hover:text-white" whileHover={{ rotate: 90 }}>
              <FiX size={32} />
            </motion.button>
            <motion.div 
              className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
               {/* Place the full version or a different demo video here */}
               <video autoPlay controls className="w-full h-full">
                  <source src="/circuit-bg.mp4" type="video/mp4" />
               </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Home;