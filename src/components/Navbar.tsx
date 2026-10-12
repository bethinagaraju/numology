import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import { BookingButton, GOOGLE_FORM_URL } from './BookingButton';
import { navItems } from '@/data/siteData';
import logoImg from '@/assets/ChatGPT Image Oct 4, 2026, 02_58_43 PM.png';

const allMobileNavItems: [string, string][] = [
  ['Home', '/'],
  ...navItems,
  ['Contact Us', '/contact'],
];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  closed: { opacity: 0, y: 10 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
    if (path.includes('#')) {
      const id = path.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <>
      <header
        className="
          h-[70px]
          sm:h-[76px]
          lg:h-[84px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
          flex
          items-center
          justify-between
          fixed
          z-50
          top-0
          w-full
          bg-[#F8F3E8]/95
          border-b
          border-[#C5A267]/25
          backdrop-blur-[16px]
          transition-all
          duration-300
        "
      >
        {/* =======================================================
            LOGO & BRAND NAME
            ======================================================= */}
        <Link
          to="/"
          className="flex items-center sm:gap-2.5 lg:gap-3 group shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logoImg}
            alt="The Golden Numeralist"
            className="
              h-[42px]
              sm:h-[50px]
              lg:h-[58px]
              xl:h-[64px]
              w-auto
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.03]
              shrink-0
            "
          />
          <div className="hidden sm:flex flex-col justify-center leading-none select-none">
            <span
              className="
                font-serif
                font-semibold
                sm:text-[14px]
                md:text-[16px]
                lg:text-[18px]
                xl:text-[20px]
                tracking-[0.12em]
                sm:tracking-[0.15em]
                whitespace-nowrap
                text-[#C5934D]
                transition-colors
                duration-300
                group-hover:text-[#87533E]
              "
            >
              THE GOLDEN NUMERALIST
            </span>
          </div>
        </Link>

        {/* =======================================================
            DESKTOP NAVIGATION (Visible on >= 1024px / lg)
            ======================================================= */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto text-[11px] xl:text-[11.5px] tracking-[0.14em] uppercase font-medium">
          {navItems.map(([label, path]) => {
            const isActive =
              location.pathname === path ||
              (path.includes('#') && location.hash === `#${path.split('#')[1]}`);

            return (
              <Link
                key={path}
                to={path}
                className={`
                  relative
                  group
                  py-2
                  transition-colors
                  duration-300
                  ${isActive ? 'text-[#87533E] font-semibold' : 'text-[#2B211B] hover:text-[#A98243]'}
                `}
                onClick={() => handleNavClick(path)}
              >
                {label}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-[1.5px]
                    bg-[#A98243]
                    origin-left
                    transition-transform
                    duration-300
                    ease-out
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* =======================================================
            DESKTOP HEADER ACTIONS (Visible on >= 1024px / lg)
            ======================================================= */}
        <div className="hidden lg:flex items-center gap-3 ml-6 xl:ml-8">
          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              justify-center
              h-[40px]
              px-[18px]
              border
              border-[#C5A267]/60
              text-[#2B211B]
              text-[11px]
              font-semibold
              tracking-[0.14em]
              uppercase
              transition-all
              duration-300
              hover:border-[#A98243]
              hover:text-[#A98243]
              hover:bg-[#A98243]/5
              hover:-translate-y-[1px]
            "
          >
            Contact Us
          </Link>
          <BookingButton label="Book a session" className="h-[40px] px-[18px]" />
        </div>

        {/* =======================================================
            MOBILE & TABLET HEADER ACTIONS (Visible below 1024px)
            ======================================================= */}
        <div className="flex lg:hidden items-center gap-2.5 sm:gap-3.5">
          {/* Quick Book CTA directly in header */}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              h-[36px]
              sm:h-[38px]
              px-3.5
              sm:px-4.5
              rounded-full
              bg-[#87533E]
              hover:bg-[#963f24]
              text-[#FDFBF7]
              text-[11px]
              sm:text-[12px]
              font-medium
              tracking-[0.06em]
              shadow-[0_2px_8px_rgba(169,79,47,0.20)]
              inline-flex
              items-center
              gap-1.5
              transition-all
              duration-200
            "
          >
            <span>Book</span>
            <ArrowUpRight size={13} strokeWidth={1.8} />
          </a>

          {/* Menu Toggle Button */}
          <button
            className="
              w-[38px]
              h-[38px]
              sm:w-[42px]
              sm:h-[42px]
              rounded-full
              border
              border-[#C5A267]/35
              text-[#87533E]
              bg-[#FDFBF7]
              flex
              items-center
              justify-center
              transition-all
              duration-200
              hover:bg-[#C5A267]/10
              active:scale-95
            "
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={19} strokeWidth={1.8} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={19} strokeWidth={1.8} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* =======================================================
          MOBILE & TABLET FULL-SCREEN MENU OVERLAY
          ======================================================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="
              fixed
              inset-0
              z-40
              bg-[#FDFBF7]
              flex
              flex-col
              justify-between
              pt-[82px]
              sm:pt-[92px]
              pb-8
              px-5
              sm:px-10
              md:px-14
              lg:hidden
              overflow-y-auto
            "
          >
            {/* Subtle background sacred wheel */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-120px]
                top-[18%]
                w-[360px]
                h-[360px]
                rounded-full
                border
                border-[#C5934D]/10
              />
            "
            />

            {/* Menu Links Container */}
            <div className="flex flex-col mt-2 sm:mt-4 max-w-[600px] w-full mx-auto">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.22em] text-[#C5934D] mb-2 px-1">
                Navigation
              </span>

              {allMobileNavItems.map(([label, path]) => {
                const isActive =
                  location.pathname === path ||
                  (path.includes('#') && location.hash === `#${path.split('#')[1]}`);

                return (
                  <motion.div key={path} variants={itemVariants}>
                    <Link
                      to={path}
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        py-3
                        sm:py-3.5
                        border-b
                        border-[#C5A267]/15
                        transition-colors
                        ${isActive ? 'text-[#87533E] font-medium' : 'text-[#2B211B] hover:text-[#87533E]'}
                      `}
                      onClick={() => handleNavClick(path)}
                    >
                      <span className="font-serif text-[22px] xs:text-[24px] sm:text-[28px] leading-[1.2]">
                        {label}
                      </span>

                      <ChevronRight
                        size={17}
                        className={`
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                          ${isActive ? 'text-[#87533E] opacity-100' : 'text-[#C5934D]/50 opacity-60'}
                        `}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions Container */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 max-w-[600px] w-full mx-auto flex flex-col gap-3"
            >
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 w-full">
                {/* Contact Us button */}
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    flex-1
                    justify-center
                    h-[48px]
                    sm:h-[50px]
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-[#CDA66F]/60
                    hover:border-[#87533E]
                    bg-[#FEFCF8]
                    hover:bg-[#F8F3E8]
                    text-[#87533E]
                    text-[11px]
                    sm:text-[12px]
                    font-semibold
                    tracking-[0.16em]
                    uppercase
                    shadow-[0_2px_10px_rgba(197,147,77,0.08)]
                    transition-all
                    duration-200
                    active:scale-[0.98]
                  "
                >
                  <span>Contact Us</span>
                </Link>

                {/* Book a Session button */}
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex-1
                    justify-center
                    h-[48px]
                    sm:h-[50px]
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#87533E]
                    hover:bg-[#724330]
                    border
                    border-[#CDA66F]/40
                    text-[#FEFCF8]
                    text-[11px]
                    sm:text-[12px]
                    font-semibold
                    tracking-[0.16em]
                    uppercase
                    shadow-[0_6px_22px_rgba(135,83,62,0.26)]
                    hover:shadow-[0_8px_26px_rgba(135,83,62,0.34)]
                    transition-all
                    duration-200
                    active:scale-[0.98]
                  "
                >
                  <span>Book a Session</span>
                  <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[#FDFBF7] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight size={13} strokeWidth={2.2} />
                  </span>
                </a>
              </div>

              {/* Brand caption */}
              <p className="mt-3 text-center text-[#A98243] text-xs uppercase tracking-[0.22em] opacity-80">
                The Golden Numeralist • Namrattaa Lal
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
