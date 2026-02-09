// src/pages/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiUsers, FiCpu, FiShield, FiTarget, FiBox, FiActivity, FiLayers, FiZap, FiSettings, FiGlobe } from 'react-icons/fi';
import Testimonials from '../components/Testimonials';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 80 } 
  },
};

const About = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden 
                 transition-colors duration-500
                 bg-white text-gray-900 
                 dark:bg-[#030303] dark:text-white"
    >
      {/* --- DYNAMIC BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
          bg-[size:40px_40px]" 
        />
        
        {/* Animated Gradient Spotlights */}
        <motion.div 
          style={{ y: yRange }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-32 text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md">
              <FiLayers className="text-blue-500 text-xs" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-blue-600 dark:text-blue-400 uppercase">
                Operation_Intelligence_v2.0
              </span>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-400">COLLECTIVE</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-blue-600 mx-auto mb-10 shadow-[0_0_15px_#2563eb]"
          />

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Code World Technologies is a multi-disciplinary 
            <span className="text-black dark:text-white font-medium"> Tech Hub </span> 
            engineered to simplify digital complexity from government onboarding to high-scale business systems.
          </motion.p>
        </header>

        {/* --- CORE DOMAINS (Updated with your Services) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
                icon: <FiGlobe />, 
                title: "Digital Presence", 
                desc: "Full-stack website development and E-commerce architecture designed for Kenyan market scalability.", 
                color: "text-blue-500" 
            },
            { 
                icon: <FiShield />, 
                title: "Gov-Tech Bridge", 
                desc: "Professional KRA, eCitizen, and business registration services ensuring 100% compliance with digital mandates.", 
                color: "text-purple-500" 
            },
            { 
                icon: <FiSettings />, 
                title: "Business Systems", 
                desc: "Implementation of custom POS, Inventory Management, and Accounting modules for retail and hospitality.", 
                color: "text-emerald-500" 
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-[#0a0a0a]/60 border border-black/5 dark:border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 ${card.color} mb-6 transition-transform group-hover:scale-110 shadow-sm`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{card.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-6">{card.desc}</p>
              <div className="flex items-center gap-2 text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                <FiActivity className="animate-pulse" /> Operational_Sync
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MISSION MODULE --- */}
        <motion.div 
          variants={itemVariants}
          className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-32"
        >
          <div className="bg-gray-50 dark:bg-[#0a0a0a]/80 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-black/5 dark:border-white/5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 text-blue-500">
                <FiTarget className="text-2xl" />
                <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase">Primary_Objective</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">
                Bridging the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 italic">Digital Divide.</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10 font-light">
                Our mission is to empower Kenyan entrepreneurs by removing the technical barriers to entry. 
                Whether you need a KRA filing or a custom-built Hospital Management System, we deliver precision.
              </p>
              
              {/* Telemetry Stats (Updated Values) */}
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-black/5 dark:border-white/5">
                <div>
                  <div className="text-4xl font-mono font-black text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Successful_Registrations</div>
                </div>
                <div>
                  <div className="text-4xl font-mono font-black text-purple-600 dark:text-purple-400">150+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Deployed_Systems</div>
                </div>
              </div>
            </div>
            
            {/* Visual Element: Neural Hub */}
            <div className="flex-1 w-full flex justify-center scale-75 md:scale-100">
               <div className="relative w-72 h-72">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border border-purple-500/10 rounded-full flex items-center justify-center"
                  >
                     <div className="w-40 h-40 rounded-full bg-blue-500/5 blur-3xl animate-pulse" />
                     <FiZap className="absolute text-6xl text-blue-500/50" />
                  </motion.div>
                  {/* Floating Data Nodes */}
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 left-1/2 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
                  <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-4 left-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- TESTIMONIALS SECTION --- */}
        <motion.div variants={itemVariants} className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic">Incoming_Signals</h2>
            <div className="flex items-center justify-center gap-2">
               <div className="h-px w-12 bg-blue-500/50" />
               <p className="text-gray-500 text-xs font-mono tracking-[0.3em]">VERIFIED_CLIENT_FEEDBACK</p>
               <div className="h-px w-12 bg-blue-500/50" />
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-white/[0.02] backdrop-blur-md rounded-[2rem] border border-black/5 dark:border-white/5 p-6 md:p-12 overflow-hidden">
            <Testimonials />
          </div>
        </motion.div>

      </div>

      {/* --- FOOTER STATUS BAR --- */}
      <div className="w-full border-t border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#050505] py-6 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Node: Nairobi_East_Processing_Hub</span>
          </div>
          <span className="text-[10px] font-mono text-gray-400">© {new Date().getFullYear()} Code World Technologies. All Systems Operational.</span>
        </div>
      </div>
    </motion.section>
  );
};

export default About;