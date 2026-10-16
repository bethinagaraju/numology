import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Sessions } from '@/pages/Sessions';
import { SessionDetail } from '@/pages/SessionDetail';
import { Tools } from '@/pages/Tools';
import { ToolDetail } from '@/pages/ToolDetail';
import { Stories } from '@/pages/Stories';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEOHead } from '@/components/SEOHead';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export function SiteLayout() {
  return (
    <div className="overflow-hidden">
      <SEOHead />
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/sessions/:slug" element={<SessionDetail />} />
            <Route path="/detailed-package" element={<SessionDetail />} />
            <Route path="/basic-package" element={<SessionDetail />} />
            <Route path="/comprehensive-package" element={<SessionDetail />} />
            <Route path="/numerology-tools" element={<Tools />} />
            <Route path="/numerology-tools/:tool" element={<ToolDetail />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
