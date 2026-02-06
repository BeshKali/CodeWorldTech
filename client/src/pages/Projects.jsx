// src/pages/Projects.jsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiExternalLink, FiGithub, FiLayers, FiActivity, FiBox, FiCpu } from 'react-icons/fi';

// --- 3D Tilt Component (Consistent across the app) ---
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
    id: "MOD_001",
    desc: "AI-driven livestock management system. Optimizing productivity through predictive health analytics and real-time market integration.",
    stack: ["React", "Node.js", "M-Pesa API", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
    liveLink: "#",
    repoLink: "#",
    status: "98% Optimized"
  },
  {
    title: "CareConnect",
    id: "MOD_002",
    desc: "Neural-support chatbot interface leveraging Twilio and NLP to bridge the gap between patient urgency and clinical response.",
    stack: ["Python", "Dialogflow", "Twilio", "Firebase"],
    imageUrl: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    liveLink: "#",
    repoLink: "#",
    status: "Active Uplink"
  },
  {
    title: "Farmily",
    id: "MOD_003",
    desc: "Decentralized marketplace infrastructure connecting primary producers to urban consumer hubs with transparent pricing protocols.",
    stack: ["Vue.js", "Django", "PostgreSQL", "Leaflet.js"],
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    liveLink: "#",
    repoLink: "#",
    status: "Deployed"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const Projects = () => (
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
    {/* --- BACKGROUND GRAPHICS --- */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6"
        >
          <FiLayers className="text-cyan-400 text-xs" />
          <span className="text-[10px] font-mono tracking-[0.4em] text-cyan-400 uppercase">Core_Modules_Archive</span>
        </motion.div>
        
        <motion.h2
          className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 }}}
        >
          ENGINEERED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">IMPACT</span>
        </motion.h2>
        <motion.p className="text-gray-500 max-w-xl mx-auto font-light text-lg">
          A catalogue of high-performance digital solutions designed for scalability and market resilience.
        </motion.p>
      </div>

      {/* --- PROJECT GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectTiltCard key={index}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative h-full flex flex-col bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl"
            >
              {/* Image Viewport */}
              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
                  <div className="text-[8px] font-mono text-cyan-400/80 bg-black/40 px-2 py-0.5 rounded border border-cyan-500/20 backdrop-blur-md">
                    SRC: {project.id}
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 z-20">
                    <div className="flex items-center gap-2 text-[8px] font-mono text-white/50 bg-black/40 px-2 py-1 rounded-full backdrop-blur-md">
                        <FiActivity className="text-cyan-500 animate-pulse" /> {project.status}
                    </div>
                </div>

                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Content Box */}
              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {project.desc}
                </p>

                {/* Tech Stack Modules */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 text-white/60 text-[9px] font-bold uppercase tracking-widest rounded group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                  <motion.a
                    href={project.liveLink}
                    className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-500 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <FiBox /> Deployment
                  </motion.a>
                  <motion.a
                    href={project.repoLink}
                    className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <FiGithub /> Source
                  </motion.a>
                </div>

                {/* Background ID Watermark */}
                <div className="absolute -bottom-4 -right-4 text-7xl font-black text-white/[0.02] pointer-events-none select-none italic">
                  {index + 1}
                </div>
              </div>

              {/* Border Trace Animation (Hover) */}
              <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/20 transition-all duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          </ProjectTiltCard>
        ))}
      </div>

      {/* --- FOOTER CTA --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-24 text-center p-12 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent"
      >
        <FiCpu className="text-4xl text-gray-700 mx-auto mb-6" />
        <h4 className="text-xl font-bold mb-4 italic">HAVE A SYSTEM TO BUILD?</h4>
        <button className="px-8 py-3 bg-white text-black font-black text-xs tracking-widest uppercase rounded-full hover:bg-cyan-400 transition-colors">
          Initialize Collaboration
        </button>
      </motion.div>
    </div>
  </motion.section>
);

export default Projects;