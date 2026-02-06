// src/pages/Contact.jsx
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiMessageSquare, FiTerminal } from 'react-icons/fi';

// --- Components ---

// 3D Tilt Wrapper (Consistent with Home/About for brand cohesion)
const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate data transmission
    setTimeout(() => setIsSubmitting(false), 3000);
  };

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
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none z-10" />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT: CONTACT INTEL --- */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 text-cyan-500 mb-6">
            <FiTerminal className="text-2xl" />
            <span className="text-xs font-mono tracking-[0.4em] uppercase">Uplink Status: Ready</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
            ESTABLISH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CONNECTION</span>
          </h1>

          <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            Initialize a direct communication channel. Our response algorithms are optimized for 24-hour turnaround.
          </p>

          <div className="space-y-8">
            {[
              { icon: <FiMail />, label: "Encrypted Mail", val: "hello@nexus.tech" },
              { icon: <FiMapPin />, label: "Neural Hub", val: "Nakuru / Nairobi / Remote" },
              { icon: <FiMessageSquare />, label: "Protocol", val: "Direct Message Access" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</div>
                  <div className="text-lg font-medium text-white/90">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT: 3D FORM TERMINAL --- */}
        <TiltCard>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/20 to-transparent"
          >
            <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl p-8 md:p-12 rounded-3xl">
              
              {/* Form UI Header */}
              <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Secure_Packet_v2.0</div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold ml-1">Identity</label>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold ml-1">Channel</label>
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-cyan-500 font-bold ml-1">Payload</label>
                  <textarea 
                    rows="4"
                    placeholder="Describe your vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-gray-600 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 rounded-xl bg-cyan-500 text-black font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 overflow-hidden group"
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <span>Transmit Signal</span>
                      <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                  
                  {/* Shimmer Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"
                  />
                </motion.button>
              </form>

              {/* Status Bar */}
              <div className="mt-8 flex items-center justify-between text-[8px] font-mono text-gray-600 tracking-tighter">
                <div>ENCRYPTION: AES-256</div>
                <div>LOCAL_TIME: {new Date().toLocaleTimeString()}</div>
                <div>PACKET_STATUS: {isSubmitting ? 'SENDING...' : 'IDLE'}</div>
              </div>
            </div>
          </motion.div>
        </TiltCard>
      </div>

      {/* Adding Custom Tailwind Animation for Shimmer */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.section>
  );
};

export default Contact;