// src/pages/Services.jsx
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiCpu, FiHeart, FiDollarSign, FiSmartphone, FiActivity, FiLayers } from 'react-icons/fi';

// --- 3D Tilt Component (Consistent across the site) ---
const TiltCard = ({ children }) => {
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

const services = [
  { 
    title: "POS Systems", 
    id: "SYS_RETAIL_01",
    desc: "Smart inventory, billing, and analytics engineered for high-velocity retail and hospitality modules.", 
    icon: <FiCpu />, 
    color: "#3b82f6", // blue-500
    metrics: { instances: "142 Active", uptime: "99.98%" }
  },
  { 
    title: "Healthcare Platforms", 
    id: "SYS_HEALTH_02",
    desc: "Neural-link patient and doctor management systems with integrated real-time telehealth protocols.", 
    icon: <FiHeart />, 
    color: "#10b981", // green-500
    metrics: { instances: "84 Active", uptime: "100.0%" }
  },
  { 
    title: "M-Pesa Integration", 
    id: "SYS_PAY_03",
    desc: "Seamless financial gateway bridging local mobile liquidity with global digital application stacks.", 
    icon: <FiDollarSign />, 
    color: "#ef4444", // red-500
    metrics: { instances: "2.4M Req/m", uptime: "99.99%" }
  },
  { 
    title: "Custom Web & Mobile", 
    id: "SYS_DEV_04",
    desc: "Bespoke high-fidelity application architecture designed for scalability and extreme user engagement.", 
    icon: <FiSmartphone />, 
    color: "#a855f7", // purple-500
    metrics: { instances: "Deployed", uptime: "Edge Optimized" }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const Services = () => (
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      
      {/* --- HEADER --- */}
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
        >
          <FiLayers className="text-blue-400 text-xs" />
          <span className="text-[10px] font-mono tracking-[0.4em] text-blue-400 uppercase">Operation_Capabilities_v2</span>
        </motion.div>
        
        <motion.h2
          className="text-5xl md:text-8xl font-black tracking-tighter mb-6"
          variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 }}}
        >
          CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">SOLUTIONS</span>
        </motion.h2>
        <motion.div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_#2563eb]" />
      </div>

      {/* --- SERVICE MODULES GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <TiltCard key={index}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.01 }}
              className="group relative p-8 md:p-12 h-full flex flex-col md:flex-row gap-8 bg-[#0a0a0a]/60 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-white/20 transition-all duration-500"
            >
              {/* Corner Accent Glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: service.color }}
              />

              {/* Icon / Visual HUD */}
              <div className="relative flex-shrink-0">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110"
                  style={{ color: service.color, boxShadow: `0 0 20px ${service.color}15` }}
                >
                  {service.icon}
                  {/* Decorative Scan Line on Icon */}
                  <motion.div 
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-white/20 z-10"
                  />
                </div>
                
                {/* Module ID Watermark */}
                <div className="mt-4 text-[8px] font-mono text-gray-600 tracking-widest text-center uppercase">
                  {service.id}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                    <FiActivity className="animate-pulse" /> LIVE_SYNC
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light max-w-md">
                  {service.desc}
                </p>

                {/* Simulated Telemetry HUD */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 font-bold">Node_Status</div>
                    <div className="text-sm font-mono text-white/80">{service.metrics.instances}</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 font-bold">System_Uptime</div>
                    <div className="text-sm font-mono text-white/80">{service.metrics.uptime}</div>
                  </div>
                </div>
              </div>

              {/* Interactive Hover Border */}
              <div 
                className="absolute inset-0 border-b-4 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                style={{ borderColor: service.color }}
              />
            </motion.div>
          </TiltCard>
        ))}
      </div>

      {/* --- FOOTER STATUS --- */}
      <motion.div 
        className="mt-20 flex flex-col md:flex-row items-center justify-between p-8 border border-white/5 rounded-2xl bg-white/[0.02]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">All_Systems_Operational_Nairobi_Global</span>
        </div>
        <button 
          className="group flex items-center gap-3 px-8 py-3 bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase rounded-full hover:bg-cyan-400 transition-all"
          onClick={() => window.location.href = '/contact'}
        >
          Request Custom Module
          <motion.span whileHover={{ x: 5 }}>→</motion.span>
        </button>
      </motion.div>
    </div>
  </motion.section>
);

export default Services;