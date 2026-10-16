import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

export function NotFound() {
  return (
    <>
      <SEOHead
        customSEO={{
          title: 'Page Not Found (404) | The Golden Numeralist',
          description: 'The page you are looking for does not exist. Explore numerology consultations, tools, and insights with Namrattaa Lal.',
          noindex: true,
        }}
      />
      <section className="min-h-[70vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 text-center bg-[#FDFBF7]">
        <div className="max-w-xl mx-auto border border-[#CDA66F]/40 bg-[#FEFCF8] p-8 sm:p-14 shadow-[0_20px_60px_rgba(135,83,62,0.06)] relative overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#C5934D]/60" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C5934D]/60" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#C5934D]/60" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#C5934D]/60" />

          <div className="flex justify-center mb-6 text-[#C5934D]">
            <Compass size={42} strokeWidth={1.2} />
          </div>

          <span className="block text-[#C5934D] uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            Error 404 · Path Unknown
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl text-[#2B211B] leading-tight mb-4">
            A Pattern Unfound
          </h1>

          <p className="text-[#363637]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
            The page you are seeking does not correspond to an active coordinate in our archive. Return to explore your personal numbers or schedule a reading.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-[#87533E] bg-[#87533E] text-[#FEFCF8] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all hover:bg-[#C5934D] hover:border-[#C5934D]"
            >
              <ArrowLeft size={14} /> Return Home
            </Link>
            <Link
              to="/numerology-tools"
              className="inline-flex items-center gap-2 border border-[#CDA66F]/60 bg-transparent text-[#87533E] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all hover:border-[#87533E]"
            >
              Numerology Tools
            </Link>
            <Link
              to="/sessions"
              className="inline-flex items-center gap-2 border border-[#CDA66F]/60 bg-transparent text-[#87533E] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all hover:border-[#87533E]"
            >
              Sessions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
