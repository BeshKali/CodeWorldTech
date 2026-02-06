// src/pages/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiUsers, FiCpu, FiShield, FiTarget, FiBox } from 'react-icons/fi';
import Testimonials from '../components/Testimonials';

// Variants for staggered entrance
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
      {/* --- FUTURISTIC BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
        
        {/* Animated Gradient Spotlights */}
        <motion.div 
          style={{ y: yRange }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-24 text-center">
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-3 py-1 text-[10px] font-bold tracking-[0.4em] uppercase border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 rounded-sm">
              Intelligence Unit
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">COLLECTIVE</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-10"
          />

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We are more than a studio. We are a high-performance engine of 
            <span className="text-white font-medium"> developers, designers, and strategists</span> 
            engineered to solve complex problems through code and creativity.
          </motion.p>
        </header>

        {/* --- CORE CAPABILITIES (GRID) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <FiCpu />, title: "Precision Engineering", desc: "Building scalable backend architectures that never sleep." },
            { icon: <FiUsers />, title: "Human-Centric UX", desc: "Crafting interfaces that bridge the gap between machine and emotion." },
            { icon: <FiShield />, title: "Market Resilience", desc: "Navigating Africa's dynamic digital landscape with robust solutions." }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{card.desc}</p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 p-2 opacity-20">
                <FiBox className="text-4xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- THE MISSION (WIDE MODULE) --- */}
        <motion.div 
          variants={itemVariants}
          className="relative rounded-3xl p-1 px-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-32"
        >
          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 text-purple-400">
                <FiTarget className="text-2xl" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase">Primary Objective</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Transforming Ambition into <br /> 
                <span className="text-cyan-500 italic">Digital Reality.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our focus is on the African tech renaissance. By leveraging 
                next-gen stacks, we help regional startups and global enterprises 
                dominate the market with products that are efficient, secure, and world-class.
              </p>
              <div className="flex gap-10">
                <div>
                  <div className="text-3xl font-bold text-white">99%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Uptime Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Modules Deployed</div>
                </div>
              </div>
            </div>
            
            {/* Visual Element: Abstract Circuit */}
            <div className="flex-1 w-full flex justify-center">
               <div className="relative w-64 h-64">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border border-purple-500/20 rounded-full flex items-center justify-center"
                  >
                     <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse" />
                     <FiCpu className="absolute text-5xl text-white/80" />
                  </motion.div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- TESTIMONIALS SECTION --- */}
        <motion.div variants={itemVariants} className="relative py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2 uppercase tracking-tighter italic">Incoming Signals</h2>
            <p className="text-gray-500 text-sm font-mono tracking-widest">VERIFIED_CLIENT_FEEDBACK</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 p-4">
            <Testimonials />
          </div>
        </motion.div>

      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </motion.section>
  );
};

export default About;