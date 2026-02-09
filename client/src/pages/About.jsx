// src/pages/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiUsers, FiCpu, FiShield, FiTarget, FiBox, FiActivity, FiLayers, FiZap, FiSettings, FiGlobe, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import Testimonials from '../components/Testimonials';
import CEO from "../assets/CEO.jpg";
import CMO from "../assets/CMO.jpeg";

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

// Founders Data
const founders = [
  {
    id: "ID_CORE_CEO_01",
    name: "KABERERE MWANIKI",
    role: "Chief Executive Officer & Lead Solutions Architect",
    bio: "Founder and lead architect at Code World Technologies. Specializes in business systems, web platforms, and digital transformation for SMEs in Kenya. Passionate about using technology to simplify operations and grow local businesses.",
    image: CEO,
    links: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: "ID_CORE_CMO_02",
    name: "PURITY NJERI",
    role: "Chief Marketing Officer",
    bio: "Marketing strategist focused on digital branding, customer growth, and online visibility. Leads client outreach, social media campaigns, and business development for Code World Technologies.",
    image: CMO,
    links: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

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
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
          bg-[size:40px_40px]" 
        />
        <motion.div style={{ y: yRange }} className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-32 text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md">
              <FiLayers className="text-blue-500 text-xs" />
              <span className="text-[10px] font-mono tracking-[0.4em] text-blue-600 dark:text-blue-400 uppercase">Operation_Intelligence_v2.0</span>
            </div>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-400">COLLECTIVE</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            Code World Technologies is a multi-disciplinary <span className="text-black dark:text-white font-medium"> Tech Hub </span> engineered to simplify digital complexity.
          </motion.p>
        </header>

        {/* --- CORE DOMAINS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <FiGlobe />, title: "Digital Presence", desc: "Full-stack website development designed for Kenyan market scalability.", color: "text-blue-500" },
            { icon: <FiShield />, title: "Gov-Tech Bridge", desc: "Professional KRA, eCitizen, and business registration compliance.", color: "text-purple-500" },
            { icon: <FiSettings />, title: "Business Systems", desc: "Implementation of custom POS and Inventory Management modules.", color: "text-emerald-500" }
          ].map((card, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-[#0a0a0a]/60 border border-black/5 dark:border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/50">
              <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 ${card.color} mb-6 shadow-sm`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{card.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- MISSION MODULE --- */}
        <motion.div variants={itemVariants} className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-32">
          <div className="bg-gray-50 dark:bg-[#0a0a0a]/80 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-black/5 dark:border-white/5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 text-blue-500">
                <FiTarget className="text-2xl" />
                <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase">Primary_Objective</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Bridging the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 italic">Digital Divide.</span></h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10 font-light">Empowering Kenyan entrepreneurs by removing technical barriers to entry.</p>
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
            {/* Neural Hub Visual */}
            <div className="flex-1 w-full flex justify-center scale-75 md:scale-100">
               <div className="relative w-72 h-72">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full" />
                  <FiZap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-blue-500/50" />
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- NEW SECTION: CORE INTELLIGENCE (Founders) --- */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 italic">Core_Intelligence</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-blue-500/50" />
              <p className="text-gray-500 text-xs font-mono tracking-[0.3em]">SYSTEM_ARCHITECTS</p>
              <div className="h-px w-12 bg-blue-500/50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative group p-8 rounded-[2rem] bg-gray-50 dark:bg-[#0a0a0a]/60 border border-black/5 dark:border-white/10 backdrop-blur-xl overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[50px] group-hover:bg-blue-600/10 transition-colors" />
                
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                  {/* Founder Image */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-blue-600/20 group-hover:border-blue-500 transition-colors">
                      <img src={founder.image} alt={founder.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-lg shadow-lg">
                      <FiShield className="text-xs" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-center md:text-left">
                    <div className="text-[10px] font-mono text-blue-500 font-bold mb-1 tracking-widest">{founder.id}</div>
                    <h3 className="text-2xl font-black tracking-tight mb-1">{founder.name}</h3>
                    <div className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">{founder.role}</div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 font-light">{founder.bio}</p>
                    
                    {/* Social Uplinks */}
                    <div className="flex justify-center md:justify-start gap-4">
                      <a href={founder.links.linkedin} className="text-gray-400 hover:text-blue-500 transition-colors"><FiLinkedin /></a>
                      <a href={founder.links.github} className="text-gray-400 hover:text-blue-500 transition-colors"><FiGithub /></a>
                      <a href={founder.links.twitter} className="text-gray-400 hover:text-blue-500 transition-colors"><FiTwitter /></a>
                    </div>
                  </div>
                </div>

                {/* Status HUD */}
                <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-[8px] font-mono text-gray-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    STATUS: ACTIVE_NODE
                  </div>
                  <div>LEVEL: FOUNDER_ACCESS</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- TESTIMONIALS SECTION --- */}
        <motion.div variants={itemVariants} className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter italic">Incoming_Signals</h2>
            <p className="text-gray-500 text-xs font-mono tracking-[0.3em]">VERIFIED_CLIENT_FEEDBACK</p>
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
          <span className="text-[10px] font-mono text-gray-400 uppercase">© {new Date().getFullYear()} Code World Tech. All Systems Operational.</span>
        </div>
      </div>
    </motion.section>
  );
};

export default About;