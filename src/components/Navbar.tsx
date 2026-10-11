import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BookingButton } from './BookingButton';
import { navItems } from '@/data/siteData';
import logoImg from '@/assets/ChatGPT Image Oct 4, 2026, 02_58_43 PM.png';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-10px",
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren" }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <>
      <header className="h-[84px] max-sm:h-[70px] px-[clamp(24px,5vw,80px)] flex items-center gap-[42px] fixed z-50 top-0 w-full bg-[#F8F3E8]/90 border-b border-[#C5A267]/30 backdrop-blur-[15px] transition-all duration-300">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logoImg} alt="The Golden Numeralist" className="h-[80px] max-sm:h-[55px] w-auto object-contain transition-transform duration-300 hover:scale-[1.03]" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="flex ml-auto gap-[clamp(20px,3vw,44px)] text-[10px] tracking-[0.13em] uppercase max-md:hidden items-center">
          {navItems.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="relative group py-2 text-[#2B211B] font-medium transition-colors duration-300 hover:text-[#A98243]"
              onClick={() => {
                if (path.includes('#')) {
                  const id = path.split('#')[1];
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
            >
              {label}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#A98243] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* HEADER ACTIONS DESKTOP */}
        <div className="flex items-center gap-[10px] max-md:hidden">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[40px] px-[18px] border border-[#C5A267]/60 text-[#2B211B] text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:border-[#A98243] hover:text-[#A98243] hover:bg-[#A98243]/5 hover:-translate-y-[1px]"
          >
            Contact Us
          </Link>
          <BookingButton label="Book a session" className="min-h-[40px] px-[18px]" />
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="hidden max-md:flex max-md:ml-auto items-center justify-center w-[40px] h-[40px] rounded-full border border-[#C5A267]/30 text-[#A98243] bg-transparent transition-all duration-300 hover:bg-[#A98243]/10 active:scale-95"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                <X size={20} strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                <Menu size={20} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="hidden max-md:flex max-md:fixed max-md:z-[49] top-0 left-0 right-0 bottom-0 bg-[#F8F3E8] pt-[100px] flex-col p-[40px_24px] overflow-y-auto"
          >
            <div className="flex flex-col mt-[20px]">
              {navItems.map(([label, path]) => (
                <motion.div key={path} variants={itemVariants}>
                  <Link
                    to={path}
                    className="block font-serif text-[38px] leading-[1.2] text-[#2B211B] border-b border-[#C5A267]/20 py-[20px] transition-colors hover:text-[#A98243]"
                    onClick={() => {
                      setMenuOpen(false);
                      if (path.includes('#')) {
                        const id = path.split('#')[1];
                        setTimeout(() => {
                          const el = document.getElementById(id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 300);
                      }
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full justify-center min-h-[50px] inline-flex items-center border border-[#C5A267]/60 text-[#2B211B] hover:border-[#A98243] hover:text-[#A98243] text-[12px] font-semibold tracking-[0.14em] uppercase transition-all duration-300"
              >
                Contact Us
              </Link>
              <BookingButton label="Book a session" className="w-full justify-center min-h-[54px] text-[12px]" />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-auto pt-12 pb-6 text-center text-[#A98243] text-[9px] uppercase tracking-[0.2em] opacity-80">
              <p>The Golden Numeralist © {new Date().getFullYear()}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
