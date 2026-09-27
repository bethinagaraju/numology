import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BookingButton } from './BookingButton';
import { navItems } from '@/data/siteData';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="navbar">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span>THE GOLDEN NUMERALIST</span>
          <small>BY NAMRATTAA LAL</small>
        </Link>
        <nav className="desktop-nav">
          {navItems.map(([label, path]) => (
            <Link key={path} to={path}>{label}</Link>
          ))}
        </nav>
        <BookingButton label="Book a session" className="nav-cta" />
        <button className="menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {navItems.map(([label, path]) => (
              <Link key={path} to={path} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
            <BookingButton label="Book a session" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
