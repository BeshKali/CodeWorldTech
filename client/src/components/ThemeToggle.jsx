import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiZap } from 'react-icons/fi';

const ThemeToggle = () => {
  // Set Dark Theme as the absolute default
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.theme === 'dark') {
      return 'dark';
    }
    // Default to dark theme for a more modern, sleek UI-
    return 'dark'; //- if you want light theme just update the line from "dark" to "light"
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="flex items-center gap-3">
      {/* HUD Mode Label */}
      <div className="hidden lg:flex flex-col items-end">
        <span className="text-[7px] font-mono tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase leading-none mb-1 transition-colors">
          Mode_Protocol
        </span>
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            // Changed light theme text to amber-600 for high visibility/contrast
            className={`text-[9px] font-mono font-bold uppercase tracking-widest ${
              theme === 'dark' ? 'text-purple-400' : 'text-amber-600'
            }`}
          >
            {theme === 'dark' ? 'Dark_Matter' : 'Solar_Energy'}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* --- THE 3D TOGGLE SWITCH --- */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        // Adjusted light mode to a clean white track with inner shadow for better modern UI
        className={`relative w-14 h-7 rounded-full p-1 transition-all duration-500 border ${
          theme === 'dark' 
            ? 'bg-purple-950/30 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' 
            : 'bg-white border-gray-200 shadow-inner'
        } backdrop-blur-md overflow-hidden`}
        aria-label="Toggle System Mode"
      >
        {/* Internal Moving Scanline */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className={`absolute inset-y-0 w-1/2 skew-x-12 bg-gradient-to-r from-transparent ${
            theme === 'dark' ? 'via-white/10' : 'via-gray-400/10'
          } to-transparent`}
        />

        {/* The Animated Knob */}
        <div className={`flex items-center h-full w-full ${theme === 'dark' ? 'justify-end' : 'justify-start'}`}>
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`relative w-5 h-5 rounded-full flex items-center justify-center shadow-lg ${
              theme === 'dark' 
                ? 'bg-purple-500 shadow-purple-500/50' 
                : 'bg-amber-500 shadow-amber-500/40' // Bright sun aesthetic for light mode
            }`}
          >
            {/* Knob Glow */}
            <div className="absolute inset-0 rounded-full blur-[5px] opacity-60 bg-inherit" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {theme === 'dark' ? (
                  <FiMoon className="text-white text-[10px]" />
                ) : (
                  <FiSun className="text-white text-[10px]" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.button>

      {/* Auxiliary Icon */}
      <div className={`transition-colors duration-500 ${theme === 'dark' ? 'text-purple-400 animate-pulse' : 'text-amber-500'}`}>
        <FiZap size={14} />
      </div>
    </div>
  );
};

export default ThemeToggle;