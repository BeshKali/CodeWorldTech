// src/pages/About.jsx
import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FiUsers, FiCpu, FiShield, FiTarget, FiBox, FiActivity, FiLayers, 
  FiZap, FiSettings, FiGlobe, FiLinkedin, FiGithub, FiTwitter, FiArrowUpRight, FiX 
} from 'react-icons/fi';
import Testimonials from '../components/Testimonials';
import CEO from "../assets/CEO.jpg";
import CMO from "../assets/CMO.jpeg";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 60 } 
  },
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const [activeProfile, setActiveProfile] = useState(null);

  const founders = [
    {
      id: "UID_ARCHITECT_01",
      name: "KABERERE MWANIKI",
      role: "CEO & Lead Solutions Architect",
      bio: "Founder and lead architect at Code World Technologies. Specializes in business systems, web platforms, and digital transformation for SMEs in Kenya.",
      stack: ["React/Next.js", "Python/Django", "AWS Architecture", "POS Logic"],
      image: CEO,
      links: { linkedin: "#", github: "#", twitter: "#" },
    },
    {
      id: "UID_STRATEGIST_02",
      name: "PURITY NJERI",
      role: "Chief Marketing Officer",
      bio: "Marketing strategist focused on digital branding, customer growth, and online visibility. Leads client outreach and business development.",
      stack: ["Digital Branding", "Growth Hacking", "SEO/SEM", "UI/UX Strategy"],
      image: CMO,
      links: { linkedin: "#", github: "#", twitter: "#" },
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative min-h-screen w-full flex flex-col items-center overflow-hidden transition-colors duration-700 bg-white text-gray-900 dark:bg-[#020202] dark:text-white"
    >
      {/* --- HIGH-TECH BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
          bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
        <motion.div style={{ y: yRange }} className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-32 text-center">
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-blue-600 dark:text-blue-400 uppercase font-black">Archive_Protocol_v4.0</span>
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.8]">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-500 bg-[length:200%_auto] animate-gradient-x italic">COLLECTIVE</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Engineered in Nairobi. Deploying <span className="text-black dark:text-white font-medium">Digital Infrastructure</span> that transforms business logic into scalable ecosystems.
          </motion.p>
        </header>

        {/* --- CORE DOMAINS (TILT EFFECT CARDS) --- */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
          {[
            { icon: <FiGlobe />, title: "Digital Presence", desc: "Enterprise-grade web platforms built with React and Next.js.", color: "blue" },
            { icon: <FiShield />, title: "Gov-Tech Bridge", desc: "Secure digital onboarding for KRA, HELB, and Business Registrations.", color: "indigo" },
            { icon: <FiSettings />, title: "Business Logic", desc: "Custom POS modules and ERP systems designed for high-velocity retail.", color: "emerald" }
          ].map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              whileHover={{ y: -8 }}
              className="group relative p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#080808] border border-black/5 dark:border-white/10 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 text-blue-500 mb-8 shadow-sm group-hover:scale-110 group-hover:text-white group-hover:bg-blue-600 transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{card.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-light">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- MISSION RE-ENGINEERED --- */}
        <motion.div variants={itemVariants} className="relative rounded-[3.5rem] overflow-hidden border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#050505] mb-40">
           <div className="absolute top-0 right-0 p-12 opacity-10">
              <FiZap size={200} className="text-blue-500" />
           </div>
           
           <div className="p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                 <div className="inline-flex items-center gap-3 text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                    <FiTarget /> Core_Objective_Active
                 </div>
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                    ERASING <br /> 
                    <span className="text-blue-600 italic">TECHNICAL</span> BARRIERS.
                 </h2>
                 <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed max-w-lg">
                    We provide the code so you can provide the vision. Our mission is to bridge the gap between complex government APIs and local business accessibility.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-12 pt-10 border-t border-black/5 dark:border-white/5">
                    <div>
                      <div className="text-5xl font-black text-blue-600">500+</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-2">Systems_Deployed</div>
                    </div>
                    <div>
                      <div className="text-5xl font-black text-indigo-500">24/7</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-2">Uptime_Monitoring</div>
                    </div>
                 </div>
              </div>

              {/* Reactive Visual */}
              <div className="flex-1 flex justify-center relative">
                 <div className="relative w-80 h-80">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
                      className="absolute inset-0 border-[1px] border-dashed border-blue-500/30 rounded-full" 
                    />
                    <motion.div 
                      animate={{ rotate: -360 }} 
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
                      className="absolute inset-4 border-[1px] border-blue-500/10 rounded-full shadow-[inset_0_0_50px_rgba(37,99,235,0.1)]" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-32 h-32 rounded-full bg-blue-600/10 backdrop-blur-3xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_80px_rgba(37,99,235,0.2)]">
                          <FiCpu className="text-5xl text-blue-500 animate-pulse" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* --- CORE INTELLIGENCE (PERSONNEL) --- */}
        <div className="mb-40">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 italic">System_Architects</h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {founders.map((founder, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onClick={() => setActiveProfile(founder)}
                className="group relative cursor-pointer p-8 rounded-[3rem] bg-gray-50 dark:bg-[#080808] border border-black/5 dark:border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-blue-500/50"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiArrowUpRight className="text-blue-500 text-2xl" />
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-blue-600/20 p-2 bg-white dark:bg-white/5">
                      <img src={founder.image} alt={founder.name} className="w-full h-full object-cover rounded-2xl grayscale-0 group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-xl flex items-center justify-center shadow-lg">
                      <FiShield size={14} />
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-blue-500 font-bold mb-2 tracking-[0.3em] uppercase">{founder.id}</div>
                  <h3 className="text-3xl font-black tracking-tight mb-2 uppercase">{founder.name}</h3>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em] mb-6">{founder.role}</div>
                  
                  <div className="flex gap-4 mb-8">
                    <FiLinkedin className="text-gray-400 hover:text-blue-500 transition-colors" />
                    <FiGithub className="text-gray-400 hover:text-blue-500 transition-colors" />
                    <FiTwitter className="text-gray-400 hover:text-blue-500 transition-colors" />
                  </div>

                  <div className="w-full pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-[9px] font-mono text-gray-400">
                    <div className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> STATUS: ONLINE
                    </div>
                    <div className="uppercase">Click for stack_specs</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- TESTIMONIALS --- */}
        <motion.div variants={itemVariants} className="relative mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Verified_Signals</h2>
            <p className="text-gray-400 text-xs font-mono tracking-[0.4em] uppercase">Client Deployment Feedback</p>
          </div>
          <div className="bg-gray-50/50 dark:bg-white/[0.02] backdrop-blur-xl rounded-[3rem] border border-black/5 dark:border-white/10 p-6 md:p-16">
            <Testimonials />
          </div>
        </motion.div>

      </div>

      {/* --- PROFILE POPUP MODAL --- */}
      <AnimatePresence>
        {activeProfile && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               onClick={() => setActiveProfile(null)}
               className="absolute inset-0 bg-black/90 backdrop-blur-md"
             />
             <motion.div 
               initial={{ scale: 0.9, opacity: 0, y: 20 }}
               animate={{ scale: 1, opacity: 1, y: 0 }}
               exit={{ scale: 0.9, opacity: 0, y: 20 }}
               className="relative w-full max-w-2xl bg-white dark:bg-[#0d0d0d] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
             >
                <button onClick={() => setActiveProfile(null)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"><FiX size={24} /></button>
                <div className="p-10 md:p-16">
                   <div className="flex items-center gap-6 mb-10">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-blue-500">
                         <img src={activeProfile.image} className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <h4 className="text-3xl font-black">{activeProfile.name}</h4>
                         <p className="text-blue-500 font-mono text-xs uppercase tracking-widest">{activeProfile.role}</p>
                      </div>
                   </div>
                   
                   <div className="space-y-8">
                      <div>
                        <h5 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] mb-3">Professional_Bio</h5>
                        <p className="text-gray-500 dark:text-gray-300 leading-relaxed font-light">{activeProfile.bio}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em] mb-4">Core_Tech_Stack</h5>
                        <div className="flex flex-wrap gap-2">
                           {activeProfile.stack.map((tech, i) => (
                             <span key={i} className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-mono font-bold">
                               {tech}
                             </span>
                           ))}
                        </div>
                      </div>

                      <button className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                         Direct Uplink / Contact
                      </button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- DOCK STATUS BAR --- */}
      <footer className="w-full border-t border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#050505] py-8 px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
               <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white dark:border-black" />
               <div className="w-6 h-6 rounded-full bg-indigo-500 border-2 border-white dark:border-black" />
            </div>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em]">Operational_Nodes: Nairobi_Hub_01</span>
          </div>
          <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">© {new Date().getFullYear()} Code World Tech | Encryption Active</span>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </motion.section>
  );
};

export default About;