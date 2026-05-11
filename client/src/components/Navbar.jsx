import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { FiMenu as Menu, FiX as X, FiCpu, FiUser, FiTerminal, FiActivity } from 'react-icons/fi'; 

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
    { name: 'Home', path: '/', id: '01' },
    { name: 'About', path: '/about', id: '02' },
    { name: 'Services', path: '/services', id: '03' },
    { name: 'Projects', path: '/projects', id: '04' },
    { name: 'Contact', path: '/contact', id: '05' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-7xl flex justify-between items-center transition-all duration-500 rounded-[2rem] px-8 py-3 border ${
          scrolled
            ? 'dark:bg-[#0a0a0a]/80 bg-white/80 backdrop-blur-2xl dark:border-white/10 border-black/5 shadow-2xl shadow-blue-500/10'
            : 'bg-transparent border-transparent'
        }`}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* --- BRAND / LOGO --- */}
        <div className="flex items-center gap-4">
          <Link to="/" className="relative group flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-blue-600 rounded-xl rotate-45 group-hover:rotate-[135deg] transition-all duration-700 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <FiCpu className="text-white -rotate-45 group-hover:-rotate-[135deg] transition-all duration-700" size={20} />
              </div>
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter dark:text-white text-gray-900 leading-none">
                CWT<span className="text-blue-600">.</span>
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] font-mono text-gray-500 tracking-[0.3em] uppercase">System_Active</span>
              </div>
            </div>
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <motion.li key={item.name} className="relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative z-10 px-5 py-2.5 flex flex-col items-center group transition-colors duration-300 ${
                    isActive 
                      ? 'dark:text-white text-gray-900' 
                      : 'dark:text-gray-500 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
              >
                <span className="text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -top-1">
                  {item.id}
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">{item.name}</span>
                
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 dark:bg-white/[0.03] bg-black/[0.03] rounded-full border dark:border-white/10 border-black/5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center mr-2 px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 gap-2">
            <FiActivity className="text-blue-500 text-[10px] animate-pulse" />
            <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">NBO_Node_01</span>
          </div>

          <ThemeToggle />

          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.15em] overflow-hidden transition-all shadow-lg shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <FiTerminal className="relative z-10 group-hover:text-white transition-colors" size={14} />
              <span className="relative z-10 group-hover:text-white transition-colors hidden lg:inline">Initialize</span>
            </motion.button>
          </Link>

          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden p-2 dark:text-white text-gray-900 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[110] dark:bg-[#020202] bg-white flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 50% 50%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            <button 
              onClick={() => setMenuOpen(false)} 
              className="absolute top-10 right-10 dark:text-white text-gray-900 w-14 h-14 flex items-center justify-center rounded-full border border-black/5 dark:border-white/10"
            >
               <X size={28} />
            </button>

            <div className="flex flex-col items-start gap-6 relative z-10">
              {navLinks.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-end gap-4"
                  >
                    <span className="text-xs font-mono text-blue-500 font-bold mb-2">{item.id}</span>
                    <span className="text-5xl md:text-7xl font-black dark:text-white text-gray-900 uppercase tracking-tighter group-hover:italic group-hover:text-blue-600 transition-all">
                      {item.name}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center border-t border-black/5 dark:border-white/5 pt-8">
              <div className="flex items-center gap-3">
                <FiCpu className="text-blue-500" />
                <span className="text-[10px] font-mono text-gray-400 tracking-[0.3em] uppercase">Code World Tech Hub</span>
              </div>
              <div className="text-[10px] font-mono text-gray-500">v4.0.2</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;