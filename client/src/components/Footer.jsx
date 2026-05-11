// src/components/Footer.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiLinkedin, FiActivity, FiGlobe, FiTerminal, FiArrowUp, FiCpu, FiHash } from 'react-icons/fi';

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [uptime, setUptime] = useState(0);

  // Real-time clock & Fake Uptime counter
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    const upTimer = setInterval(() => setUptime(prev => prev + 1), 1000);
    return () => {
      clearInterval(timer);
      clearInterval(upTimer);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.footer
      className="relative w-full bg-[#030303] text-gray-400 py-16 px-6 border-t border-white/5 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* --- DATA PULSE DIVIDER (Unified Blue) --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5">
        <motion.div
          className="h-full w-48 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(37,99,235,0.8)]"
          animate={{ x: ['-100%', '100vw'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* --- BACKGROUND GRID MASK --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3 text-white font-black tracking-tighter text-2xl italic">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full animate-pulse shadow-[0_0_15px_#2563eb]" />
              CWT_INFRA<span className="text-blue-500">.</span>
            </div>
            <p className="text-[10px] font-mono leading-relaxed uppercase tracking-[0.2em] text-gray-500 max-w-xs">
              Next-generation software engineering hub based in Nairobi. 
              Architecting secure digital portals for the modern enterprise.
            </p>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded w-fit">
               <FiHash className="text-blue-500 text-[10px]" />
               <span className="text-[9px] font-mono tracking-widest text-gray-400">BUILD_VER: 4.0.2_STABLE</span>
            </div>
          </div>

          {/* COLUMN 2: SYSTEM TELEMETRY (REAL TIME) */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8 p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] backdrop-blur-md">
            <div className="space-y-2">
              <div className="text-[8px] font-bold text-blue-500 tracking-[0.4em] uppercase">Global_Clock</div>
              <div className="text-xs font-mono text-white tabular-nums">{time}</div>
            </div>
            <div className="space-y-2">
              <div className="text-[8px] font-bold text-blue-500 tracking-[0.4em] uppercase">Latent_Ping</div>
              <div className="text-xs font-mono text-green-500">12ms_OPTIMAL</div>
            </div>
            <div className="space-y-2">
              <div className="text-[8px] font-bold text-blue-500 tracking-[0.4em] uppercase">System_Nodes</div>
              <div className="text-xs font-mono text-white">Nairobi | Ke</div>
            </div>
            <div className="space-y-2">
              <div className="text-[8px] font-bold text-indigo-400 tracking-[0.4em] uppercase">Uptime_Relay</div>
              <div className="text-xs font-mono text-indigo-400">00:0{uptime}_SEC</div>
            </div>
            <div className="space-y-2">
              <div className="text-[8px] font-bold text-indigo-400 tracking-[0.4em] uppercase">Security_Lvl</div>
              <div className="text-xs font-mono text-white">AES_256_ACTIVE</div>
            </div>
            <div className="space-y-2">
              <div className="text-[8px] font-bold text-indigo-400 tracking-[0.4em] uppercase">Environment</div>
              <div className="text-xs font-mono text-white">PRODUCTION</div>
            </div>
          </div>

          {/* COLUMN 3: SOCIAL & TOP-LINK */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end gap-8">
            <div className="flex gap-3">
              {[
                { icon: <FiGithub />, link: "#" },
                { icon: <FiTwitter />, link: "#" },
                { icon: <FiLinkedin />, link: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: 'rgba(37, 99, 235, 0.1)', borderColor: '#2563eb' }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 transition-all shadow-xl backdrop-blur-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)]"
            >
              <FiArrowUp /> Return_to_Apex
            </motion.button>
          </div>
        </div>

        {/* --- BOTTOM LEGAL & LOGISTICS --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-[9px] font-mono tracking-[0.2em] text-gray-600">
            <span className="text-gray-400 font-bold">© {new Date().getFullYear()} CODE_WORLD_TECHNOLOGIES</span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 text-green-500">
              <FiActivity className="animate-pulse" /> 
              ALL_SYSTEMS_OPERATIONAL
            </span>
            <span className="flex items-center gap-2">
              <FiCpu /> ARCH_X64_OPTIMIZED
            </span>
          </div>

          <div className="flex items-center gap-6 text-[9px] font-mono font-bold tracking-widest text-gray-500">
            <a href="/privacy" className="hover:text-blue-500 transition-colors uppercase">Privacy_Protocol</a>
            <span className="opacity-20">/</span>
            <a href="/terms" className="hover:text-blue-500 transition-colors uppercase">Legal_Compliance</a>
          </div>
        </div>
      </div>

      {/* --- SCANNING BEAM --- */}
      <motion.div
        animate={{ opacity: [0, 0.3, 0], y: ['0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none"
      />
    </motion.footer>
  );
};

export default Footer;