import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

// Icons from react-icons
import { FiMenu as Menu, FiX as X, FiCpu, FiUser } from 'react-icons/fi'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl flex justify-between items-center transition-all duration-500 rounded-2xl px-6 py-3 border ${
          scrolled
            ? 'dark:bg-black/60 bg-white/70 backdrop-blur-xl dark:border-white/10 border-gray-200 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link to="/" className="relative group flex items-center gap-2">
            <div className="relative">
              {/* Adapts to Amber in Light mode, Cyan in Dark mode */}
              <div className="w-8 h-8 dark:bg-cyan-500 bg-amber-500 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                <FiCpu className="dark:text-black text-white -rotate-45 group-hover:-rotate-90 transition-transform" size={18} />
              </div>
              <div className="absolute inset-0 dark:bg-cyan-400 bg-amber-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter dark:text-white text-gray-900 leading-none transition-colors duration-300">
                CODEWORLD
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full dark:bg-cyan-500 bg-amber-500 animate-pulse" />
                <span className="text-[8px] font-mono dark:text-cyan-500 text-amber-600 tracking-[0.2em] uppercase transition-colors duration-300">
                  System_Live
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <motion.li key={item.name} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative z-10 px-4 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive 
                      ? 'dark:text-white text-gray-900' 
                      : 'dark:text-gray-400 text-gray-500 dark:hover:text-white hover:text-amber-600'
                  }`
                }
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    // Adapts active pill background for Light/Dark modes
                    className="absolute inset-0 dark:bg-white/10 bg-gray-200/60 rounded-full border dark:border-white/10 border-gray-300/50 backdrop-blur-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Adapts button colors to ensure perfect contrast in both themes
              className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-white bg-gray-900 dark:text-black text-white text-[10px] font-black uppercase tracking-widest dark:hover:bg-cyan-400 hover:bg-amber-500 transition-colors duration-300"
            >
              <FiUser size={14} />
              <span className="hidden lg:inline">Access Terminal</span>
            </motion.button>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden dark:text-white text-gray-900 transition-colors">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            // White overlay for light mode, Black overlay for dark mode
            className="fixed inset-0 z-[110] dark:bg-black/95 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 dark:text-white text-gray-900 transition-colors">
               <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-black dark:text-white text-gray-900 uppercase italic dark:hover:text-cyan-500 hover:text-amber-500 transition-colors duration-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;