// src/components/Testimonials.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiActivity, FiShield, FiTerminal } from 'react-icons/fi';

const testimonials = [
  { 
    id: 1, 
    name: "Grace M.", 
    role: "Founder, NexaStream", 
    quote: "The deployment speed was unprecedented. They turned a complex vision into a high-performance reality in record time.", 
    avatar: "https://img.freepik.com/free-photo/african-senior-woman_23-2148833112.jpg",
    signal: "98% Efficiency"
  },
  { 
    id: 2, 
    name: "Moses T.", 
    role: "CTO, AgriPulse", 
    quote: "The inventory logic and real-time analytics have completely transformed our operational oversight. Pure engineering brilliance.", 
    avatar: "https://img.freepik.com/free-photo/handsome-sensitive-man-portrait_23-2149509828.jpg",
    signal: "Verified Node"
  },
  { 
    id: 3, 
    name: "Achieng L.", 
    role: "Admin, HealthBridge", 
    quote: "Finally, a platform that understands the nuance of medical data security while maintaining a fluid user experience.", 
    avatar: "https://img.freepik.com/free-photo/medium-shot-beautiful-african-woman-posing_23-2151438119.jpg",
    signal: "Secured Uplink"
  },
];

const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.5,
    rotateY: direction > 0 ? 45 : -45,
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
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
      rotateY: { duration: 0.5 }
    }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    scale: 0.5,
    rotateY: direction < 0 ? 45 : -45,
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
    <div className="relative w-full py-12 flex flex-col items-center">
      
      {/* Header HUD */}
      <div className="flex items-center gap-4 mb-12 opacity-60">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500" />
        <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-cyan-400">Neural_Feedback_Relay</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>

      <div className="relative w-full max-w-4xl h-[450px] flex items-center justify-center perspective-[1200px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full max-w-2xl"
          >
            {/* The Main Card */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* Scanning Light Effect */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-12 pointer-events-none"
              />

              <div className="relative z-10 p-8 sm:p-12 flex flex-col items-center text-center">
                
                {/* Biometric Avatar HUD */}
                <div className="relative mb-8">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-12px] border-t-2 border-l-2 border-cyan-500/30 rounded-full"
                  />
                  <div className="relative w-24 h-24 rounded-full p-1 border border-white/20 bg-black/40">
                    <img 
                      src={current.avatar} 
                      alt={current.name} 
                      className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-black p-1 rounded-md">
                    <FiShield size={12} />
                  </div>
                </div>

                {/* Quote with Encryption brackets */}
                <div className="relative mb-8">
                  <span className="absolute -top-4 -left-4 text-4xl text-cyan-500/30 font-serif">"</span>
                  <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic">
                    {current.quote}
                  </p>
                  <span className="absolute -bottom-4 -right-4 text-4xl text-cyan-500/30 font-serif">"</span>
                </div>

                {/* Metadata HUD */}
                <div className="space-y-1">
                  <h4 className="text-xl font-black tracking-tighter text-white uppercase">{current.name}</h4>
                  <p className="text-[10px] font-mono tracking-[0.3em] text-cyan-500 uppercase">{current.role}</p>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-8 pt-6 border-t border-white/5 w-full flex justify-between items-center text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <FiActivity className="text-cyan-500 animate-pulse" />
                    Signal: {current.signal}
                  </div>
                  <div>Ver_ID: 0x882_{page}</div>
                </div>
              </div>

              {/* Decorative HUD Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 rounded-br-3xl" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- CONTROLS --- */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-8">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
          >
            <FiChevronLeft size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > page ? 1 : -1])}
                className={`h-1 transition-all duration-500 rounded-full ${
                  page === i ? 'w-8 bg-cyan-500' : 'w-2 bg-white/10 hover:bg-white/30'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
          >
            <FiChevronRight size={24} />
          </motion.button>
        </div>

        <div className="flex items-center gap-2 text-[9px] font-mono text-gray-600 tracking-[0.4em] uppercase">
          <FiTerminal /> Manual_Override_Enabled
        </div>
      </div>
    </div>
  );
};

export default Testimonials;