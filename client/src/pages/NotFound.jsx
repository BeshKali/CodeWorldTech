// src/pages/NotFound.jsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiAlertTriangle, FiTerminal, FiSearch } from 'react-icons/fi';

const NotFound = () => {
  // --- 3D MOUSE TRACKING ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden p-6"
    >
      {/* --- VOID BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]" />
        
        {/* Lost Data Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* --- MAIN 404 DISPLAY --- */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        
        {/* Diagnostic HUD Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3 mb-8 px-4 py-1.5 border border-red-500/30 bg-red-500/5 rounded-full"
        >
          <FiAlertTriangle className="text-red-500 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.4em] text-red-500 uppercase font-bold">
            Critical_Error: Page_Not_Initialized
          </span>
        </motion.div>

        {/* 3D Tilted 404 Text */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative perspective-1000 mb-12"
        >
          {/* Shadow Layer */}
          <h1 className="text-[15rem] md:text-[25rem] font-black leading-none text-white/[0.02] absolute -inset-2 select-none">
            404
          </h1>
          
          {/* Main Glitch Text */}
          <motion.h1 
            className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 relative"
            animate={{ 
              textShadow: [
                "2px 2px 0px #ff000080, -2px -2px 0px #00ffff80",
                "-2px 2px 0px #ff000080, 2px -2px 0px #00ffff80",
                "2px -2px 0px #ff000080, -2px 2px 0px #00ffff80"
              ]
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            404
          </motion.h1>

          {/* Floating HUD Elements around 404 */}
          <motion.div 
            style={{ translateZ: "50px" }}
            className="absolute top-1/4 -right-12 hidden lg:block"
          >
            <div className="p-4 border border-white/10 bg-black/60 backdrop-blur-md rounded-xl font-mono text-[8px] space-y-1">
              <div className="text-cyan-500">SEARCH_STATUS: NULL</div>
              <div className="text-gray-500">INDEXING_VOID... 100%</div>
              <div className="text-red-500">TARGET_NOT_FOUND</div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- ACTIONS & DESCRIPTION --- */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
            YOU'VE REACHED THE <span className="text-cyan-500 italic">EDGE OF THE GRID.</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
            The coordinate you requested does not exist in our current deployment. 
            Redirecting to home base is advised.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-xs tracking-widest uppercase rounded-xl transition-all"
              >
                <FiHome size={16} /> Return to Command
              </motion.button>
            </Link>
            
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-xs tracking-widest uppercase transition-all"
            >
              <FiSearch size={16} /> Re-scan Logic
            </button>
          </div>
        </motion.div>

        {/* --- BOTTOM TERMINAL LOG --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8 }}
          className="mt-20 w-full max-w-2xl border-t border-white/5 pt-6 hidden md:flex justify-between items-center text-[8px] font-mono uppercase tracking-[0.3em]"
        >
          <div className="flex items-center gap-2">
            <FiTerminal /> Trace_Route: [0x000] - [VOID]
          </div>
          <div>Uptime: 99.99%</div>
          <div className="text-cyan-500 animate-pulse">Scanning_For_Input...</div>
        </motion.div>

      </div>

      {/* Background Scanning Line */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute w-full h-[2px] bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20 pointer-events-none"
      />
    </motion.section>
  );
};

export default NotFound;