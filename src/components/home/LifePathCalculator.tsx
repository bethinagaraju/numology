import { useState } from 'react';
import lifepathBg from '@/assets/lifepathbg.png';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { OrnamentalDivider } from '@/components/OrnamentalDivider';
import { NumberRing } from '@/components/NumberRing';
import { BookingButton } from '@/components/BookingButton';
import { getInterpretation } from '@/data/numerologyInterpretations';
import { calculateLifePathNumber } from '@/utils/numerologyUtils';

export function LifePathCalculator() {
  const [birth, setBirth] = useState({ day: '', month: '', year: '' });
  const [lifePath, setLifePath] = useState<number | null>(null);

  const revealLifePath = () => {
    const values = [birth.day, birth.month, birth.year].map(Number);
    if (values.every((value) => value > 0)) {
      setLifePath(calculateLifePathNumber(values[0], values[1], values[2]));
    }
  };

  return (
    <section className="relative pt-16 pb-16 overflow-hidden" id="calculator">
      <div className="relative z-10 grid grid-cols-[0.9fr_1.1fr] max-md:grid-cols-1 gap-[10%] max-md:gap-[55px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="border border-gold/30 p-[clamp(24px,4vw,52px)] self-center shadow-2xl shadow-brown/10 relative overflow-hidden">
          {/* Background Image Layer for Card */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.8]"
            style={{ backgroundImage: `url(${lifepathBg})` }}
          />
          {/* Ivory translucent overlay veil */}
          <div className="absolute inset-0 z-0 bg-ivory/10 backdrop-blur-[1px]" />

          {/* Subtle architectural corners */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-gold/40" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-gold/40" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-gold/40" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-gold/40" />

          {!lifePath ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
              <div className="flex gap-[14px] max-sm:gap-[8px]">
                <label className="text-[10px] tracking-[0.18em] uppercase text-brown/70 font-semibold">Day
                  <input className="block border-0 border-b border-gold/40 w-full pt-[15px] pb-[11px] outline-none text-dark bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-gold transition-colors placeholder:text-brown/20" type="number" min={1} max={31} placeholder="14" value={birth.day} onChange={(e) => setBirth({ ...birth, day: e.target.value })} />
                </label>
                <label className="text-[10px] tracking-[0.18em] uppercase text-brown/70 font-semibold">Month
                  <input className="block border-0 border-b border-gold/40 w-full pt-[15px] pb-[11px] outline-none text-dark bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-gold transition-colors placeholder:text-brown/20" type="number" min={1} max={12} placeholder="08" value={birth.month} onChange={(e) => setBirth({ ...birth, month: e.target.value })} />
                </label>
                <label className="text-[10px] tracking-[0.18em] uppercase text-brown/70 font-semibold">Year
                  <input className="block border-0 border-b border-gold/40 w-full pt-[15px] pb-[11px] outline-none text-dark bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-gold transition-colors placeholder:text-brown/20" type="number" min={1900} max={2100} placeholder="1998" value={birth.year} onChange={(e) => setBirth({ ...birth, year: e.target.value })} />
                </label>
              </div>
              <button className="mt-[32px] inline-flex items-center justify-center gap-[12px] min-h-[48px] px-[28px] border border-transparent text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:-translate-y-[2px] bg-dark text-ivory shadow-lg shadow-dark/20 hover:shadow-xl hover:shadow-dark/30" onClick={revealLifePath}>Reveal my number <ArrowRight size={15} /></button>
            </motion.div>
          ) : (
            <motion.div className="relative z-10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} aria-live="polite">
              <button onClick={() => setLifePath(null)} className="flex items-center gap-[6px] text-[10px] uppercase tracking-[0.15em] font-semibold text-brown/70 hover:text-dark transition-colors mb-[28px]">
                <ArrowLeft size={14} /> Back
              </button>
              <div className="flex flex-col items-center text-center gap-[20px]">
                <NumberRing number={lifePath} label="LIFE PATH" small />
                <div className="flex flex-col items-center">
                  <span className="block text-black uppercase tracking-[0.23em] text-[10px] leading-[1.5] font-bold">Your Life Path number</span>
                  <h3 className="font-serif font-medium text-dark text-[39px] my-[9px] mb-[7px] leading-none max-sm:text-[33px]">{getInterpretation(lifePath).title}</h3>
                  <p className="m-0 mb-[17px] text-[13px] text-brown/80 leading-[1.7] max-w-[400px]">{getInterpretation(lifePath).summary}</p>
                  <BookingButton label="Explore a personal reading" variant="text" />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="[&_h2]:text-[clamp(46px,5vw,70px)]">
          <SectionHeading eyebrow="Your first step" title="Discover your Life Path number." text="Begin with your date of birth and explore the traditional numerology interpretation associated with your Life Path Number." />
          <OrnamentalDivider />
          {/* <span className="text-[#c4a062] text-[14px] leading-[1.6] block max-w-[500px]">Your result is a starting point for reflection, not a fixed definition.</span> */}
        </div>
      </div>
    </section>
  );
}
