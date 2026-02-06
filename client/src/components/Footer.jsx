// src/components/Footer.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiActivity, FiGlobe, FiTerminal } from 'react-icons/fi';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.footer
      className="relative w-full bg-[#030303] text-gray-400 py-12 px-6 border-t border-white/5 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* --- DATA PULSE DIVIDER --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div
          className="h-full w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_#06b6d4]"
          animate={{ x: ['-100%', '100vw'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* --- BACKGROUND HUD ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[100px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          
          {/* COLUMN 1: BRAND TERMINAL */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-black tracking-tighter text-xl italic">
              <div className="w-2 h-6 bg-cyan-500 rounded-full animate-pulse" />
              CODEWORLD_TECH
            </div>
            <p className="text-[10px] font-mono leading-relaxed max-w-xs uppercase tracking-widest text-gray-500">
              High-performance engineering for Africa's digital renaissance. 
              Architecture optimized for global scale.
            </p>
          </div>

          {/* COLUMN 2: SYSTEM TELEMETRY (REAL TIME) */}
          <div className="grid grid-cols-2 gap-4 border-l border-white/10 pl-8">
            <div className="space-y-1">
              <div className="text-[8px] font-bold text-cyan-500 tracking-widest uppercase">Global_Clock</div>
              <div className="text-sm font-mono text-white tabular-nums">{time}</div>
            </div>
            <div className="space-y-1">
              <div className="text-[8px] font-bold text-cyan-500 tracking-widest uppercase">System_Latency</div>
              <div className="text-sm font-mono text-white">14ms_STABLE</div>
            </div>
            <div className="space-y-1">
              <div className="text-[8px] font-bold text-cyan-500 tracking-widest uppercase">Active_Nodes</div>
              <div className="text-sm font-mono text-white">NBO | LOS | LDN</div>
            </div>
            <div className="space-y-1">
              <div className="text-[8px] font-bold text-cyan-500 tracking-widest uppercase">Auth_Protocol</div>
              <div className="text-sm font-mono text-white italic">v4.0_READY</div>
            </div>
          </div>

          {/* COLUMN 3: SOCIAL UPLINKS */}
          <div className="flex flex-col md:items-end gap-6">
            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600">Secure_Uplinks</div>
            <div className="flex gap-4">
              {[
                { icon: <FiGithub />, link: "#" },
                { icon: <FiTwitter />, link: "#" },
                { icon: <FiLinkedin />, link: "#" },
                { icon: <FiGlobe />, link: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all shadow-lg backdrop-blur-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[9px] font-mono tracking-widest text-gray-600">
            <span>© {new Date().getFullYear()} CODEWORLD</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-2">
              <FiActivity className="text-cyan-500 animate-pulse" /> 
              ALL_SYSTEMS_OPERATIONAL
            </span>
          </div>

          <div className="flex items-center gap-4 text-[9px] font-mono font-bold tracking-widest">
            <motion.span 
              whileHover={{ color: "#06b6d4" }}
              className="cursor-pointer transition-colors"
            >
              PRIVACY_PROTOCOL
            </motion.span>
            <span className="text-white/10">/</span>
            <motion.span 
              whileHover={{ color: "#06b6d4" }}
              className="cursor-pointer transition-colors"
            >
              TERMS_OF_SERVICE
            </motion.span>
          </div>

          <div className="text-[9px] font-mono text-gray-700">
            [ CRAFTED_BY_NEXUS_ENGINE_01 ]
          </div>
        </div>
      </div>

      {/* --- SCANNING LINE --- */}
      <motion.div
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none"
      />
    </motion.footer>
  );
};

export default Footer;