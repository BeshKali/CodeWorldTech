// src/pages/Projects.jsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLayers, FiActivity, FiBox, FiCpu, FiTerminal, FiDatabase } from 'react-icons/fi';

// --- 3D Tilt Component ---
const ProjectTiltCard = ({ children }) => {
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
      className="relative w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const projects = [
  {
    title: "Mifugo Smart",
    id: "SYS_AGRI_001",
    desc: "AI-driven livestock management system. Optimizing productivity through predictive health analytics and M-Pesa integrated liquidity.",
    stack: ["React", "Node.js", "M-Pesa API", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
    liveLink: "https://mifugosmart.vercel.app/",
    repoLink: "#",
    status: "98% Optimized",
    type: "Production"
  },
  {
    title: "CareConnect",
    id: "SYS_HEALTH_002",
    desc: "Neural-support interface leveraging NLP to bridge the gap between patient urgency and clinical response in remote areas.",
    stack: ["Python", "Dialogflow", "Twilio", "Firebase"],
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    liveLink: "https://care-connect-sage.vercel.app/",
    repoLink: "#",
    status: "Active Uplink",
    type: "Enterprise"
  },
  {
    title: "RetailFlow POS",
    id: "SYS_BIZ_003",
    desc: "Custom inventory architecture for high-velocity retail, featuring real-time stock sync and automated accounting ledgers.",
    stack: ["Vue.js", "Django", "PostgreSQL", "Leaflet.js"],
    imageUrl: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    liveLink: "#",
    repoLink: "#",
    status: "Deployed",
    type: "Internal Module"
  },
];

const Projects = () => (
<motion.section
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
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
  </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md mb-6"
        >
          <FiLayers className="text-blue-500 text-xs" />
          <span className="text-[10px] font-mono tracking-[0.4em] text-blue-600 dark:text-blue-400 uppercase">Core_Modules_Archive</span>
        </motion.div>
        
        <motion.h2
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-400">Impact</span>
        </motion.h2>
        <motion.div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_#2563eb]" />
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light text-lg">
          A catalogue of high-performance digital solutions designed for 
          <span className="text-black dark:text-white font-medium italic"> regional scalability </span> 
          and market resilience.
        </p>
      </div>

      {/* --- PROJECT GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectTiltCard key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative h-full flex flex-col bg-gray-50 dark:bg-[#0a0a0a]/60 border border-black/5 dark:border-white/10 rounded-[2rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl backdrop-blur-xl"
            >
              {/* Image Viewport */}
              <div className="relative h-60 overflow-hidden border-b border-black/5 dark:border-white/10">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 dark:from-[#0a0a0a] to-transparent opacity-80" />
                
                {/* Telemetry Overlays */}
                <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                  <div className="text-[9px] font-mono text-blue-500 bg-white dark:bg-black/40 px-3 py-1 rounded-full border border-blue-500/20 backdrop-blur-md font-bold">
                    ID: {project.id}
                  </div>
                  <div className="text-[9px] font-mono text-gray-400 bg-white dark:bg-black/40 px-3 py-1 rounded-full border border-black/5 dark:border-white/5 backdrop-blur-md uppercase">
                    TYPE: {project.type}
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 z-20">
                    <div className="flex items-center gap-2 text-[9px] font-mono text-white/70 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                        <FiActivity className="text-blue-500 animate-pulse" /> {project.status}
                    </div>
                </div>

                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {project.desc}
                </p>

                {/* Stack HUD */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.stack.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-gray-500 dark:text-white/60 text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg group-hover:border-blue-500/30 group-hover:text-blue-500 transition-all">
                        {tech}
                        </span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-8 pt-8 border-t border-black/5 dark:border-white/5">
                  <motion.a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-[10px] font-mono font-black tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 hover:text-black dark:hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiBox /> Live_Uplink
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    className="flex items-center gap-2 text-[10px] font-mono font-black tracking-[0.2em] uppercase text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiDatabase /> Ledger
                  </motion.a>
                </div>
              </div>

              {/* Glowing Corner Accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-600/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </ProjectTiltCard>
        ))}
      </div>

      {/* --- FOOTER CTA --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 text-center p-16 rounded-[3rem] border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] backdrop-blur-md"
      >
        <FiTerminal className="text-5xl text-blue-600 mx-auto mb-8 animate-bounce" />
        <h4 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">Ready to deploy?</h4>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto font-light">Join the network of optimized businesses using Code World infrastructure.</p>
        <button 
          className="px-12 py-4 bg-blue-600 text-white font-black text-[10px] tracking-[0.4em] uppercase rounded-full hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20"
          onClick={() => window.location.href = '/contact'}
        >
          Initialize Collaboration
        </button>
      </motion.div>
    </div>

    {/* Footer Status Bar */}
    <div className="w-full border-t border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#050505] py-6 px-12 mt-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Archive_Status: Online</span>
            </div>
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest hidden md:block">Code World Tech Hub © {new Date().getFullYear()}</span>
        </div>
    </div>
</motion.section>
);

export default Projects;