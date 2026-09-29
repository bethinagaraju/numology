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
import { Journal } from '@/pages/Journal';
import { Article } from '@/pages/Article';
import { Stories } from '@/pages/Stories';
import { Contact } from '@/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export function SiteLayout() {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sessions" element={<Sessions />} />
            <Route path="/sessions/:slug" element={<SessionDetail />} />
            <Route path="/numerology-tools" element={<Tools />} />
            <Route path="/numerology-tools/:tool" element={<ToolDetail />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<Article />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
