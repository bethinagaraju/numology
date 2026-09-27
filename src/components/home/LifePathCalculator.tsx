import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
    <section className="calculator-section section-shell" id="calculator">
      <div className="calculator-intro">
        <SectionHeading eyebrow="Your first step" title="Discover your Life Path number." text="Begin with your date of birth and explore the traditional numerology interpretation associated with your Life Path Number." />
        <OrnamentalDivider />
        <span className="small-note">Your result is a starting point for reflection, not a fixed definition.</span>
      </div>
      <div className="calculator-panel">
        <div className="date-inputs">
          <label>Day
            <input type="number" min={1} max={31} placeholder="14" value={birth.day} onChange={(e) => setBirth({ ...birth, day: e.target.value })} />
          </label>
          <label>Month
            <input type="number" min={1} max={12} placeholder="08" value={birth.month} onChange={(e) => setBirth({ ...birth, month: e.target.value })} />
          </label>
          <label>Year
            <input type="number" min={1900} max={2100} placeholder="1998" value={birth.year} onChange={(e) => setBirth({ ...birth, year: e.target.value })} />
          </label>
        </div>
        <button className="button-dark" onClick={revealLifePath}>Reveal my number <ArrowRight size={15} /></button>
        {lifePath && (
          <motion.div className="result-inline" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} aria-live="polite">
            <NumberRing number={lifePath} label="LIFE PATH" />
            <div>
              <span className="eyebrow">Your Life Path number</span>
              <h3>{getInterpretation(lifePath).title}</h3>
              <p>{getInterpretation(lifePath).summary}</p>
              <BookingButton label="Explore a personal reading" variant="text" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
