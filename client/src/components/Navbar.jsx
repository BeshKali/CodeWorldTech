import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

// Icons from react-icons to match your other pages
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
            ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
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
              <div className="w-8 h-8 bg-cyan-500 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                <FiCpu className="text-black -rotate-45 group-hover:-rotate-90 transition-transform" size={18} />
              </div>
              <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tighter text-white leading-none">CODEWORLD</span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[8px] font-mono text-cyan-500 tracking-[0.2em] uppercase">System_Live</span>
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
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10 backdrop-blur-md"
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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors"
            >
              <FiUser size={14} />
              <span className="hidden lg:inline">Access Terminal</span>
            </motion.button>
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white">
               <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-black text-white uppercase italic hover:text-cyan-500 transition-colors"
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