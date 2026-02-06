// src/pages/Home.jsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiPlay, FiX, FiCpu, FiGlobe, FiZap, FiActivity } from 'react-icons/fi';

// --- Components ---

// 3D Tilt Wrapper Component
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const [stats, setStats] = useState({ users: 1240, uptime: 99.9 });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        users: prev.users + Math.floor(Math.random() * 5),
        uptime: 99.9 + (Math.random() * 0.09)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
    className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden 
               transition-colors duration-500
               bg-white text-gray-900 
               dark:bg-[#030303] dark:text-white" // <--- Use dynamic colors here
  >
    {/* Update your Grid Background to be subtle in light mode */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
        bg-[size:40px_40px]" 
      />
    </div>
      {/* --- FUTURISTIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Glowing Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* --- TOP NAV SHOWCASE (REAL TIME) --- */}
      <div className="absolute top-8 left-0 w-full px-8 flex justify-between items-center z-50 mix-blend-difference opacity-70">
        <div className="flex items-center gap-4 text-xs tracking-[0.2em] font-bold">
          <FiActivity className="text-cyan-400 animate-pulse" />
          SYSTEM_LIVE: {stats.uptime.toFixed(2)}%
        </div>
        <div className="flex items-center gap-4 text-xs tracking-[0.2em] font-bold">
          ACTIVE_NODES: {stats.users.toLocaleString()}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl px-6 pt-20 flex flex-col items-center">
        
        {/* Badge */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-400">Next-Gen Deployment</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black text-center mb-8 leading-[0.9] tracking-tighter"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          CODEWORLD <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            TECHNOLOGIES
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="max-w-2xl text-center text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Deploy scalable architecture with a futuristic stack. Optimized for 
          real-time performance and unmatched visual fidelity.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-24"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all"
          >
            <span className="relative z-10">START PROJECT</span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="px-8 py-4 border border-white/20 rounded-full font-bold backdrop-blur-sm transition-all"
          >
            VIEW BLUEPRINTS
          </motion.button>
        </motion.div>

        {/* --- 3D SHOWCASE VIDEO SECTION --- */}
        <div className="w-full max-w-5xl perspective-1000">
          <TiltCard>
            <motion.div 
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] bg-black/40 group cursor-pointer"
              onClick={() => setVideoOpen(true)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {/* Scanning Line Animation */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_15px_cyan]"
                />
              </div>

              {/* Video UI Overlays */}
              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Live_Feed_01.mp4</div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
                alt="Showcase"
                className="w-full aspect-video object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/20 group-hover:bg-black/0 transition-colors">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-20 h-20 flex items-center justify-center border border-white/30 rounded-full backdrop-blur-md">
                    <FiPlay className="ml-1 text-2xl" />
                  </div>
                </div>
                <span className="mt-4 text-xs font-bold tracking-[0.3em] text-white/70">INITIATE SHOWCASE</span>
              </div>

              {/* Decorative Tech Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-xl" />
            </motion.div>
          </TiltCard>
        </div>
      </div>

      {/* --- FULLSCREEN VIDEO MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10"
            onClick={() => setVideoOpen(false)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              whileHover={{ rotate: 90 }}
            >
              <FiX size={32} />
            </motion.button>

            <motion.div 
              className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/JODVpeexrlY?autoplay=1`}
                title="Futuristic Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER ELEMENTS --- */}
      <div className="relative z-10 w-full px-12 py-12 flex flex-wrap justify-center gap-12 mt-20 border-t border-white/5 bg-white/[0.02]">
        {[
          { icon: <FiGlobe />, label: "Global Edge" },
          { icon: <FiCpu />, label: "Neural Processing" },
          { icon: <FiZap />, label: "Instant Sync" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-white/40 grayscale hover:grayscale-0 hover:text-cyan-400 transition-all cursor-crosshair">
            {item.icon}
            <span className="text-[10px] uppercase font-bold tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Home;