import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FiCpu, FiHeart, FiDollarSign, FiSmartphone, FiActivity, FiLayers, FiGlobe, FiFileText, FiMonitor, FiSettings, FiCheckCircle } from 'react-icons/fi';

// --- 3D Tilt Component ---
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

// --- DATA ---
const services = [
  { 
    title: "POS Systems", 
    id: "SYS_RETAIL_01",
    desc: "Smart inventory, billing, and analytics engineered for high-velocity retail and hospitality modules.", 
    icon: <FiCpu />, 
    color: "#3b82f6", 
    metrics: { instances: "142 Active", uptime: "99.98%" }
  },
  { 
    title: "Healthcare Platforms", 
    id: "SYS_HEALTH_02",
    desc: "Neural-link patient and doctor management systems with integrated real-time telehealth protocols.", 
    icon: <FiHeart />, 
    color: "#10b981", 
    metrics: { instances: "84 Active", uptime: "100.0%" }
  },
  { 
    title: "M-Pesa Integration", 
    id: "SYS_PAY_03",
    desc: "Seamless financial gateway bridging local mobile liquidity with global digital application stacks.", 
    icon: <FiDollarSign />, 
    color: "#ef4444", 
    metrics: { instances: "2.4M Req/m", uptime: "99.99%" }
  },
  { 
    title: "Custom Web & Mobile", 
    id: "SYS_DEV_04",
    desc: "Bespoke high-fidelity application architecture designed for scalability and extreme user engagement.", 
    icon: <FiSmartphone />, 
    color: "#a855f7", 
    metrics: { instances: "Deployed", uptime: "Edge Optimized" }
  },
];

const pricingCategories = [
  {
    id: "web",
    title: "Web & Business",
    icon: <FiGlobe />,
    items: [
      { name: "Business Website", type: "Range", price: "KES 15,000 – 50,000" },
      { name: "Online Booking System", type: "Range", price: "KES 25,000 – 80,000" },
      { name: "E-commerce Store", type: "Range", price: "KES 30,000 – 120,000" },
      { name: "Google Business Setup", type: "Fixed", price: "KES 3,000" },
      { name: "Business Email Setup", type: "Fixed", price: "KES 2,000" },
      { name: "Domain & Hosting (Annual)", type: "Range", price: "KES 3,000 – 6,000" },
    ]
  },
  {
    id: "gov",
    title: "Gov & Registrations",
    icon: <FiFileText />,
    items: [
      { name: "KRA PIN Registration", type: "Fixed", price: "KES 700" },
      { name: "KRA Returns Filing", type: "Range", price: "KES 500 – 1,500" },
      { name: "HELB Account & Appeals", type: "Fixed", price: "KES 800" },
      { name: "eCitizen Services", type: "From", price: "From KES 300" },
      { name: "NHIF/NSSF Registration", type: "Fixed", price: "KES 500" },
      { name: "Business Name Reg", type: "Range", price: "KES 2,000 – 3,500" },
      { name: "Company Registration", type: "Range", price: "KES 8,000 – 15,000" },
    ]
  },
  {
    id: "tech",
    title: "Computer Services",
    icon: <FiMonitor />,
    items: [
      { name: "Phone Flashing/OS", type: "Range", price: "KES 1,000 – 3,000" },
      { name: "Laptop Formatting", type: "From", price: "From KES 1,000" },
      { name: "Windows + Office Install", type: "From", price: "From KES 1,500" },
      { name: "Virus Removal", type: "Range", price: "KES 500 – 1,500" },
      { name: "Data Recovery", type: "Range", price: "KES 2,000 – 5,000" },
    ]
  },
  {
    id: "systems",
    title: "Business Support",
    icon: <FiSettings />,
    items: [
      { name: "Excel Accounting Setup", type: "Range", price: "KES 3,000 – 10,000" },
      { name: "POS Setup (Shops)", type: "Range", price: "KES 5,000 – 20,000" },
      { name: "Inventory Management", type: "Range", price: "KES 10,000 – 40,000" },
      { name: "School Management System", type: "Range", price: "KES 20,000 – 100,000" },
      { name: "Hospital / Clinic System", type: "Range", price: "KES 30,000 – 150,000" },
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(pricingCategories[0]);

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden 
                 transition-colors duration-500 bg-white text-gray-900 
                 dark:bg-[#030303] dark:text-white"
    >
      {/* Background Grid */}
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
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md mb-6"
          >
            <FiLayers className="text-blue-400 text-xs" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-blue-500 dark:text-blue-400 uppercase">Operation_Capabilities_v2</span>
          </motion.div>
          
          <motion.h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-400">SOLUTIONS</span>
          </motion.h2>
          <motion.div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_#2563eb]" />
        </div>

        {/* --- SERVICE MODULES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => (
            <TiltCard key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="group relative p-8 md:p-12 h-full flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-[#0a0a0a]/60 border border-black/5 dark:border-white/10 rounded-3xl backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: service.color, boxShadow: `0 0 20px ${service.color}20` }}>
                    {service.icon}
                  </div>
                  <div className="mt-4 text-[8px] font-mono text-gray-500 tracking-widest text-center uppercase">{service.id}</div>
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                    <div className="flex items-center gap-2 text-[9px] font-mono text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      <FiActivity className="animate-pulse" /> LIVE_SYNC
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8 font-light">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/5 dark:border-white/5">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Node_Status</div>
                      <div className="text-sm font-mono opacity-80">{service.metrics.instances}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">System_Uptime</div>
                      <div className="text-sm font-mono opacity-80">{service.metrics.uptime}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* --- PRICING SECTION --- */}
        <div className="relative mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Service_Catalog</h3>
            <p className="text-gray-500 font-mono text-sm">Select a department to view deployment costs</p>
          </div>

          {/* Pricing Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 font-mono text-xs uppercase tracking-widest
                  ${activeTab.id === cat.id 
                    ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_#2563eb66]" 
                    : "bg-transparent border-black/10 dark:border-white/10 hover:border-blue-500/50"}`}
              >
                {cat.icon} {cat.title}
              </button>
            ))}
          </div>

          {/* Pricing Table */}
          <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02] backdrop-blur-md p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4"
              >
                <div className="hidden md:grid grid-cols-3 px-6 py-4 text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] border-b border-white/5">
                  <span>Service_Description</span>
                  <span className="text-center">Billing_Model</span>
                  <span className="text-right">Deployment_Fee</span>
                </div>
                
                {activeTab.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-3 items-center px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <FiCheckCircle className="text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="font-bold text-sm md:text-base">{item.name}</span>
                    </div>
                    <div className="text-center hidden md:block">
                      <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-gray-500 border border-white/5 uppercase">
                        {item.type}
                      </span>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="text-blue-600 dark:text-blue-400 font-mono font-bold tracking-tight">
                        {item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- FOOTER STATUS --- */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between p-8 border border-black/5 dark:border-white/5 rounded-2xl bg-gray-50 dark:bg-white/[0.02]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">All_Systems_Operational_Nairobi_Global</span>
          </div>
          <button 
            className="group flex items-center gap-3 px-8 py-3 bg-blue-600 text-white font-black text-[10px] tracking-[0.3em] uppercase rounded-full hover:bg-blue-400 transition-all shadow-lg shadow-blue-600/20"
            onClick={() => window.location.href = '/contact'}
          >
            Initiate Project
            <motion.span whileHover={{ x: 5 }}>→</motion.span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;