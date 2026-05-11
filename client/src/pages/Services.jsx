import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FiCpu, FiHeart, FiDollarSign, FiSmartphone, FiActivity, FiLayers, 
  FiGlobe, FiFileText, FiMonitor, FiSettings, FiCheckCircle, FiX, FiShield, FiZap, FiServer 
} from 'react-icons/fi';

// --- 3D Tilt Component ---
const TiltCard = ({ children, onClick }) => {
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
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

// --- DATA ---
const services = [
  { 
    title: "Enterprise POS Systems", 
    id: "SYS_RETAIL_01",
    desc: "Custom-built retail engines with offline-first capabilities, real-time inventory syncing, and multi-branch management.", 
    icon: <FiCpu />, 
    color: "#3b82f6", 
    metrics: { instances: "142 Active", uptime: "99.98%" },
    why: "Pricing accounts for local database encryption, thermal printer hardware integration, and cloud-sync architecture to ensure your business never stops even without internet."
  },
  { 
    title: "Healthcare Platforms", 
    id: "SYS_HEALTH_02",
    desc: "Neural-link patient and doctor management systems with integrated real-time telehealth protocols.", 
    icon: <FiHeart />, 
    color: "#10b981", 
    metrics: { instances: "84 Active", uptime: "100.0%" },
    why: "Includes HIPAA-compliant data encryption, automated prescription workflows, and high-availability server clusters to protect sensitive life-critical data."
  },
  { 
    title: "M-Pesa Integration", 
    id: "SYS_PAY_03",
    desc: "Seamless financial gateway bridging local mobile liquidity with global digital application stacks.", 
    icon: <FiDollarSign />, 
    color: "#ef4444", 
    metrics: { instances: "2.4M Req/m", uptime: "99.99%" },
    why: "Cost covers secure B2C/C2B API handshakes, instant payment notification (IPN) setup, and automated reconciliation ledgers to prevent financial leakages."
  },
  { 
    title: "Custom Web & Mobile", 
    id: "SYS_DEV_04",
    desc: "Bespoke high-fidelity application architecture designed for scalability and extreme user engagement.", 
    icon: <FiSmartphone />, 
    color: "#a855f7", 
    metrics: { instances: "Deployed", uptime: "Edge Optimized" },
    why: "We build for performance. This includes SEO optimization, PWA (Progressive Web App) features, and cross-platform compatibility (iOS/Android) using a single codebase."
  },
];

const pricingCategories = [
  {
    id: "web",
    title: "Web & Business",
    icon: <FiGlobe />,
    items: [
      { name: "Business Website", type: "Range", price: "KES 15,000 – 50,000", why: "Covers professional UI design, SEO setup, and mobile responsiveness." },
      { name: "Online Booking System", type: "Range", price: "KES 25,000 – 80,000", why: "Includes calendar sync, automated email/SMS alerts, and payment deposits." },
      { name: "E-commerce Store", type: "Range", price: "KES 30,000 – 120,000", why: "Includes inventory management, M-Pesa/Card checkout, and admin dashboard." },
      { name: "Google Business Setup", type: "Fixed", price: "KES 3,000", why: "Optimization for Google Maps and local search visibility." },
    ]
  },
  {
    id: "systems",
    title: "Software & POS",
    icon: <FiSettings />,
    items: [
        { name: "POS Development (Custom)", type: "Range", price: "KES 45,000 – 250,000", why: "Ground-up build tailored to unique business logic with dedicated database." },
        { name: "POS Setup (Ready-made)", type: "Range", price: "KES 5,000 – 20,000", why: "Installation and configuration of existing off-the-shelf POS software." },
        { name: "Hospital / Clinic System", type: "Range", price: "KES 30,000 – 150,000", why: "Patient records, billing, and pharmacy inventory modules." },
        { name: "School Management System", type: "Range", price: "KES 20,000 – 100,000", why: "Student portals, fee tracking, and report card generators." },
    ]
  },
  {
    id: "gov",
    title: "Gov & Registrations",
    icon: <FiFileText />,
    items: [
      { name: "Company Registration", type: "Range", price: "KES 8,000 – 15,000", why: "Includes CR12, Memorandum, and official registration certificates." },
      { name: "KRA PIN & Returns", type: "Range", price: "KES 700 – 1,500", why: "Professional filing to avoid penalties and ensure compliance." },
      { name: "eCitizen Services", type: "From", price: "From KES 300", why: "Handling of NTSA, DL, and Passport application processes." },
    ]
  },
  {
    id: "tech",
    title: "Computer Services",
    icon: <FiMonitor />,
    items: [
      { name: "Data Recovery", type: "Range", price: "KES 2,000 – 5,000", why: "Advanced deep-scan recovery for corrupted or deleted business files." },
      { name: "Phone Flashing/OS", type: "Range", price: "KES 1,000 – 3,000", why: "Firmware restoration and software unbricking." },
      { name: "Laptop Formatting", type: "From", price: "From KES 1,000", why: "OS installation plus essential driver & software optimization." },
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(pricingCategories[0]);
  const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <motion.section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 bg-white text-gray-900 dark:bg-[#030303] dark:text-white">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md mb-6">
            <FiLayers className="text-blue-400 text-xs" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-blue-500 dark:text-blue-400 uppercase">System_Architecture_v4</span>
          </motion.div>
          
          <motion.h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">SOLUTIONS</span>
          </motion.h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Click any module for architectural insights</p>
        </div>

        {/* --- SERVICE MODULES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => (
            <TiltCard key={index} onClick={() => setSelectedDetail(service)}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
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
                      <FiActivity className="animate-pulse" /> INFO_READY
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8 font-light">{service.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all">
                    VIEW SYSTEM SPECS <span>→</span>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* --- PRICING SECTION --- */}
        <div className="relative mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Deployment_Catalog</h3>
            <p className="text-gray-500 font-mono text-sm">Transparent pricing for premium digital infrastructure</p>
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
                {activeTab.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    onClick={() => setSelectedDetail({...item, title: item.name, desc: item.why, color: '#3b82f6'})}
                    className="grid grid-cols-1 md:grid-cols-3 items-center px-6 py-5 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all group cursor-help"
                  >
                    <div className="flex items-center gap-4">
                      <FiCheckCircle className="text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div>
                        <span className="font-bold text-sm md:text-base block">{item.name}</span>
                        <span className="text-[10px] text-gray-400 font-mono">ID: {i+100}</span>
                      </div>
                    </div>
                    <div className="text-center hidden md:block">
                      <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-gray-500 border border-white/5 uppercase">
                        {item.type}
                      </span>
                    </div>
                    <div className="text-right mt-2 md:mt-0 flex flex-col">
                      <span className="text-blue-600 dark:text-blue-400 font-mono font-bold tracking-tight">
                        {item.price}
                      </span>
                      <span className="text-[9px] text-gray-400 uppercase tracking-tighter">View breakdown</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- DETAIL MODAL POPUP --- */}
        <AnimatePresence>
          {selectedDetail && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDetail(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-white dark:bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <div className="p-8 md:p-12">
                   <button 
                    onClick={() => setSelectedDetail(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors"
                   >
                     <FiX />
                   </button>
                   
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-blue-500/10 text-blue-500">
                        {selectedDetail.icon || <FiZap />}
                      </div>
                      <div>
                        <h4 className="text-3xl font-black">{selectedDetail.title}</h4>
                        <p className="text-blue-500 font-mono text-xs uppercase">Service Detail & Billing Logic</p>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/5">
                        <h5 className="text-sm font-bold uppercase mb-3 flex items-center gap-2">
                          <FiShield className="text-blue-500" /> Architectural Value
                        </h5>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                          {selectedDetail.why || selectedDetail.desc}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                          <FiServer className="mb-2 text-blue-500" />
                          <div className="text-[10px] uppercase text-gray-400">Scalability</div>
                          <div className="font-bold">Enterprise Ready</div>
                        </div>
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                          <FiActivity className="mb-2 text-green-500" />
                          <div className="text-[10px] uppercase text-gray-400">Support</div>
                          <div className="font-bold">24/7 Monitoring</div>
                        </div>
                      </div>

                      <button 
                        onClick={() => window.location.href = '/contact'}
                        className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20"
                      >
                        Request Quote for this Module
                      </button>
                   </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- FOOTER STATUS --- */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between p-8 border border-black/5 dark:border-white/5 rounded-2xl bg-gray-50 dark:bg-white/[0.02]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Global_Operations_Online</span>
          </div>
          <button className="group flex items-center gap-3 px-8 py-3 bg-blue-600 text-white font-black text-[10px] tracking-[0.3em] uppercase rounded-full hover:bg-blue-400 transition-all" onClick={() => window.location.href = '/contact'}>
            Start Development
            <motion.span whileHover={{ x: 5 }}>→</motion.span>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;