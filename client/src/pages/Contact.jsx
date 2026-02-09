// src/pages/Contact.jsx
import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiMessageSquare, FiTerminal, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// --- 3D Tilt Component ---
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

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('IDLE');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('SENDING');

    // VITE FIX: Use import.meta.env instead of process.env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Uplink Error: Environmental variables not found.");
      setStatus('ERROR');
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' });

    const templateParams = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
      time: timestamp 
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
          setStatus('SUCCESS');
          setTimeout(() => setStatus('IDLE'), 5000);
          form.current.reset();
      })
      .catch((error) => {
          console.error("Transmission Error:", error);
          setStatus('ERROR');
          setTimeout(() => setStatus('IDLE'), 5000);
      });
  };

  return (
    <motion.section
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden 
                 transition-colors duration-500 bg-white text-gray-900 
                 dark:bg-[#030303] dark:text-white px-6 py-24"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] 
          bg-[size:40px_40px]" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-6">
            <FiTerminal className="text-2xl" />
            <span className="text-[10px] font-mono tracking-[0.4em] uppercase font-bold">Uplink Status: Ready</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase">
            Establish <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-400">Connection</span>
          </h1>

          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:border-blue-500/50 group-hover:text-blue-500 transition-all">
                <FiMail />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Service_Channels</div>
                <div className="text-sm md:text-base font-bold opacity-80">codeworldtechnologies@gmail.com</div>
                <div className="text-sm md:text-base font-bold opacity-80">h42k3rb35h@gmail.com</div>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 group-hover:border-blue-500/50 group-hover:text-blue-500 transition-all">
                <FiMessageSquare />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Uplink_Protocol</div>
                <div className="text-base font-bold opacity-80">+254 799 997 867</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <div className="relative h-full">
            <TiltCard>
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="relative p-[1px] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-blue-500/20 to-transparent"
            >
                <div className="bg-white dark:bg-[#0a0a0a]/95 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-black/5 dark:border-white/10">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">Identity</label>
                            <input name="user_name" type="text" placeholder="Full Name" className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 transition-all text-sm" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">Channel</label>
                            <input name="user_email" type="email" placeholder="Email@domain.com" className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 transition-all text-sm" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">Payload</label>
                        <textarea name="message" rows="5" placeholder="System Requirements..." className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500/50 transition-all text-sm resize-none" required />
                    </div>

                    <motion.button
                        disabled={status === 'SENDING'}
                        whileHover={{ scale: 1.01 }}
                        className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-3 transition-all
                            ${status === 'SUCCESS' ? 'bg-green-600 text-white' : status === 'ERROR' ? 'bg-red-600 text-white' : 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'}
                        `}
                    >
                        {status === 'SENDING' ? "Transmitting..." : status === 'SUCCESS' ? "Signal Sent" : "Transmit Signal"} <FiSend />
                    </motion.button>
                </form>
                </div>
            </motion.div>
            </TiltCard>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;