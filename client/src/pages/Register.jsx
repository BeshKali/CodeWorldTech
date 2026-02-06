// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiUser, FiMail, FiLock, FiShield, FiCpu, FiChevronRight, FiTerminal } from "react-icons/fi";

// --- 3D Tilt Component (Consistent with your site's brand) ---
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
      className="relative w-full max-w-lg"
    >
      {children}
    </motion.div>
  );
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Customer");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("IDLE_PENDING");
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setIsRegistering(true);
    setStatus("INIT_IDENTITY_SYNC...");

    try {
      setStatus("UPLINKING_TO_FIREBASE...");
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      setStatus("GENERATING_SECURE_TOKEN...");
      const idToken = await getIdToken(user);

      setStatus("ENCRYPTING_BIO_DATA...");
      // FIXED: Changed method to POST. Body is not standard for GET requests.
      const res = await fetch("http://localhost:5000/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, username, role }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("ACCESS_GRANTED_WELCOME");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        throw new Error(data.error || "Uplink Failure");
      }
    } catch (err) {
      setError(err.message.replace("Firebase:", "").trim());
      setIsRegistering(false);
      setStatus("PROTOCOL_TERMINATED");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#030303] text-white overflow-hidden p-6">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Neon Bio-Circuit Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <TiltCard>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-white/5"
        >
          <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-3xl p-8 md:p-12 shadow-2xl">
            
            {/* Header / Biometric Scan HUD */}
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="relative w-20 h-20 mb-6 flex items-center justify-center border border-purple-500/30 rounded-full">
                <FiCpu className="text-3xl text-purple-400" />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-10px] border-t-2 border-r-2 border-purple-500/20 rounded-full" 
                />
              </div>
              <h1 className="text-4xl font-black tracking-tighter uppercase italic">Identity Initializer</h1>
              <div className="flex items-center gap-2 mt-2 opacity-50">
                <FiTerminal className="text-xs" />
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase">{status}</span>
              </div>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              {/* Username Input */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">Identity_Handle</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="User_Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Email & Password Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">Comm_Channel</label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-purple-500/50 transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">Access_Clearance</label>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="password"
                      placeholder="Pass_Key"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-purple-500/50 transition-all"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Role Selection HUD */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">System_Role</label>
                <div className="grid grid-cols-3 gap-3">
                  {["Customer", "Developer", "Partner"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-3 rounded-lg border text-[10px] font-bold tracking-widest uppercase transition-all ${
                        role === r 
                        ? "bg-purple-600 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
                        : "bg-white/5 border-white/10 text-gray-500 hover:border-white/20"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isRegistering}
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(168,85,247,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full py-4 rounded-xl bg-purple-600 text-white font-black tracking-[0.2em] uppercase flex items-center justify-center gap-2 overflow-hidden group/btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isRegistering ? "SYCHRONIZING..." : "INITIALIZE_UPLINK"}
                  <FiChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 mix-blend-overlay opacity-20" />
              </motion.button>
            </form>

            {/* Error Message Module */}
            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-[10px] font-mono text-center uppercase tracking-widest"
                >
                  [CRITICAL_FAILURE]: {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* System Log Footer */}
            <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-gray-600 uppercase">
              <div className="flex items-center gap-2">
                <FiShield className="text-purple-500" /> Secure Encryption: Active
              </div>
              <div>Packet Version: Identity_v4.2</div>
            </div>

          </div>
        </motion.div>
      </TiltCard>

      {/* Background Scanning Animation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-20">
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="h-full w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent shadow-[0_0_20px_purple]"
        />
      </div>
    </div>
  );
};

export default Register;