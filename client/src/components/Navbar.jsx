// src/components/Navbar.jsx
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // or use Heroicons or react-icons

const navItemVariants = {
  hover: {
    scale: 1.1,
    y: -2,
    color: "rgb(59 130 246)",
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
  },
};

const brandVariants = {
  hover: {
    scale: 1.05,
    textShadow: "0px 0px 8px rgb(59 130 246 / 0.5)",
    transition: { type: 'spring', stiffness: 300 },
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 py-4 flex justify-between items-center transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl'
          : 'bg-white/70 dark:bg-gray-900/70 shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
    >
      {/* Brand */}
      <motion.div
        className="text-2xl font-bold text-gray-800 dark:text-white"
        variants={brandVariants}
        whileHover="hover"
      >
        <Link to="/">CodeWorld Technologies</Link>
      </motion.div>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-3 sm:gap-6">
        {navLinks.map((item) => (
          <motion.li key={item} variants={navItemVariants} whileHover="hover" whileTap="tap">
            <NavLink
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-sm sm:text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`
              }
            >
              {item}
            </NavLink>
          </motion.li>
        ))}
        <ThemeToggle />
      </ul>

      {/* Hamburger Menu (mobile) */}
      <div className="md:hidden flex items-center gap-3">
        <ThemeToggle />
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 dark:text-white">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
    {menuOpen && (
  <motion.div
    className="absolute top-[100%] left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex flex-col gap-4 md:hidden"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ type: 'spring', stiffness: 150 }}
  >
    {navLinks.map((item) => (
      <NavLink
        key={item}
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        onClick={() => setMenuOpen(false)}
        className={({ isActive }) =>
          `block text-base font-medium transition-colors duration-300 ${
            isActive
              ? 'text-blue-600 dark:text-blue-400'
              : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
          }`
        }
      >
        {item}
      </NavLink>
    ))}
  </motion.div>
)}

    </motion.nav>
  );
};

export default Navbar;
