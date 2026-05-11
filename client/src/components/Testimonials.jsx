// src/components/Testimonials.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiActivity, FiShield, FiTerminal, FiDatabase, FiCpu } from 'react-icons/fi';

const testimonials = [
  { 
    id: 1, 
    name: "Grace M.", 
    role: "Founder, NexaStream", 
    quote: "The deployment speed was unprecedented. They turned a complex vision into a high-performance reality in record time.", 
    avatar: "https://img.freepik.com/free-photo/african-senior-woman_23-2148833112.jpg",
    signal: "98% Efficiency",
    node: "NX_GATEWAY_04"
  },
  { 
    id: 2, 
    name: "Moses T.", 
    role: "CTO, AgriPulse", 
    quote: "The inventory logic and real-time analytics have completely transformed our operational oversight. Pure engineering brilliance.", 
    avatar: "https://img.freepik.com/free-photo/handsome-sensitive-man-portrait_23-2149509828.jpg",
    signal: "Verified Node",
    node: "AP_CORE_ALPHA"
  },
  { 
    id: 3, 
    name: "Achieng L.", 
    role: "Admin, HealthBridge", 
    quote: "Finally, a platform that understands the nuance of medical data security while maintaining a fluid user experience.", 
    avatar: "https://img.freepik.com/free-photo/medium-shot-beautiful-african-woman-posing_23-2151438119.jpg",
    signal: "Secured Uplink",
    node: "HB_ENCRYPT_L2"
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? 30 : -30,
    filter: "blur(10px)",
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
      rotateY: { duration: 0.5 }
    }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 30 : -30,
    filter: "blur(10px)",
    transition: { opacity: { duration: 0.3 }, x: { duration: 0.4 } }
  })
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([(page + newDirection + testimonials.length) % testimonials.length, newDirection]);
  };

  const current = testimonials[page];

  return (
    <div className="relative w-full py-16 flex flex-col items-center">
      
      {/* --- HEADER HUD --- */}
      <div className="flex flex-col items-center gap-2 mb-16">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-blue-500" />
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-blue-600 dark:text-blue-400 font-black">Incoming_Relay_Data</span>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-blue-500" />
        </div>
        <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest opacity-50">Archive_0x{current.id}77_Stable</div>
      </div>

      <div className="relative w-full max-w-5xl h-[480px] flex items-center justify-center perspective-[2000px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full max-w-3xl"
          >
            {/* --- MAIN GLASS CARD --- */}
            <div className="relative p-[1px] rounded-[3rem] bg-gradient-to-br from-blue-500/20 via-transparent to-indigo-500/20 backdrop-blur-3xl overflow-hidden group">
              
              <div className="relative z-10 bg-white/70 dark:bg-[#080808]/90 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center border border-black/5 dark:border-white/5 shadow-2xl">
                
                {/* Biometric Avatar HUD */}
                <div className="relative flex-shrink-0">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-15px] border-t-2 border-l border-blue-500/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-8px] border-b-2 border-r border-indigo-500/30 rounded-full"
                  />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-tr from-blue-600 to-indigo-400">
                    <img 
                      src={current.avatar} 
                      alt={current.name} 
                      className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-black/10 dark:border-white/10"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center shadow-lg animate-pulse">
                    <FiShield size={16} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-3 mb-6">
                    <FiDatabase className="text-blue-500 opacity-50" />
                    <span className="text-[10px] font-mono text-gray-400 tracking-[0.3em] uppercase">Status: {current.signal}</span>
                  </div>

                  <div className="relative mb-8">
                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-light leading-relaxed italic tracking-tight">
                      "{current.quote}"
                    </p>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-3xl font-black tracking-tighter uppercase text-blue-600 dark:text-white">
                      {current.name}
                    </h4>
                    <p className="text-[11px] font-mono tracking-[0.4em] text-indigo-500 uppercase font-bold">
                      {current.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical HUD Corners */}
              <div className="absolute top-8 left-8 text-blue-500/20"><FiCpu size={40} /></div>
              <div className="absolute bottom-10 right-10 text-indigo-500/20 font-mono text-[8px] tracking-[1em] vertical-text">ENCRYPT_DATA</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- CONTROLS RE-ENGINEERED --- */}
      <div className="mt-16 flex flex-col items-center gap-10">
        <div className="flex items-center gap-12">
          <motion.button
            whileHover={{ scale: 1.1, x: -8 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-white hover:border-blue-500 hover:text-blue-500 transition-all shadow-xl backdrop-blur-md"
          >
            <FiChevronLeft size={28} />
          </motion.button>

          {/* Progress Indicators */}
          <div className="flex gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                className="group relative flex flex-col items-center gap-2"
              >
                <span className={`text-[8px] font-mono font-bold transition-colors ${page === i ? 'text-blue-500' : 'text-gray-400 opacity-0 group-hover:opacity-100'}`}>0{i+1}</span>
                <div className={`h-1.5 transition-all duration-500 rounded-full ${
                  page === i ? 'w-12 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]' : 'w-4 bg-gray-300 dark:bg-white/10'
                }`} />
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 8 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-white hover:border-blue-500 hover:text-blue-500 transition-all shadow-xl backdrop-blur-md"
          >
            <FiChevronRight size={28} />
          </motion.button>
        </div>

        <div className="flex items-center gap-4 px-6 py-2 rounded-full border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] text-[9px] font-mono text-gray-400 tracking-[0.3em] uppercase">
          <FiTerminal className="text-blue-500" /> 
          Node_Location: <span className="text-blue-500 font-black">{current.node}</span>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;