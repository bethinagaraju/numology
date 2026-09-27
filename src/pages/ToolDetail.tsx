import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageIntro } from '@/components/PageIntro';
import { NumberRing } from '@/components/NumberRing';
import { BookingButton } from '@/components/BookingButton';
import { getInterpretation } from '@/data/numerologyInterpretations';
import { toolMeta } from '@/data/siteData';
import {
  calculateBusinessNameNumber,
  calculateCompatibility,
  calculateDestinyNumber,
  calculateLifePathNumber,
  calculateMobileNumber,
  calculateNameNumber,
  calculatePersonalityNumber,
  calculateSoulUrgeNumber,
  calculateVehicleNumber,
} from '@/utils/numerologyUtils';

export function ToolDetail() {
  const { pathname } = useLocation();
  const slug = pathname.split('/').pop() ?? 'life-path';
  const meta = toolMeta[slug] ?? toolMeta['life-path'];
  const [values, setValues] = useState({ one: '', two: '', three: '' });
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    let value = 0;
    if (slug === 'life-path' || slug === 'personal-year') {
      value = calculateLifePathNumber(Number(values.one), Number(values.two), Number(values.three));
    } else if (slug === 'destiny') {
      value = calculateDestinyNumber(values.one);
    } else if (slug === 'soul-urge') {
      value = calculateSoulUrgeNumber(values.one);
    } else if (slug === 'personality') {
      value = calculatePersonalityNumber(values.one);
    } else if (slug === 'name-number') {
      value = calculateNameNumber(values.one);
    } else if (slug === 'business-name') {
      value = calculateBusinessNameNumber(values.one);
    } else if (slug === 'mobile') {
      value = calculateMobileNumber(values.one);
    } else if (slug === 'vehicle') {
      value = calculateVehicleNumber(values.one);
    } else {
      const pair = calculateCompatibility(
        { day: Number(values.one), month: Number(values.two), year: Number(values.three) },
        { day: Number(values.one) + 1, month: Number(values.two), year: Number(values.three) }
      );
      value = pair.combined;
    }
    setResult(value || null);
  };

  const isDate = slug === 'life-path' || slug === 'personal-year' || slug === 'compatibility';
  const interpretation = result ? getInterpretation(result) : null;

  return (
    <>
      <PageIntro eyebrow="Numerology tool" title={meta.title} text={meta.description} />
      <section className="tool-workspace section-shell">
        <div className="tool-form">
          <span className="eyebrow">{meta.placeholder}</span>
          {isDate ? (
            <div className="date-inputs">
              <label>Day
                <input type="number" placeholder="14" value={values.one} onChange={(e) => setValues({ ...values, one: e.target.value })} />
              </label>
              <label>Month
                <input type="number" placeholder="08" value={values.two} onChange={(e) => setValues({ ...values, two: e.target.value })} />
              </label>
              <label>Year
                <input type="number" placeholder="1998" value={values.three} onChange={(e) => setValues({ ...values, three: e.target.value })} />
              </label>
            </div>
          ) : (
            <input className="wide-input" placeholder={meta.placeholder} value={values.one} onChange={(e) => setValues({ ...values, one: e.target.value })} />
          )}
          <button className="button-dark" onClick={calculate}>Reveal my number <ArrowRight size={15} /></button>
          <small>Calculations use the configurable Pythagorean system.</small>
        </div>
        {result && interpretation ? (
          <motion.div className="tool-result" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} aria-live="polite">
            <NumberRing number={result} label={meta.title} />
            <div>
              <span className="eyebrow">Traditional interpretation</span>
              <h2>{interpretation.title}</h2>
              <p>{interpretation.summary}</p>
              <div className="theme-tags">
                {interpretation.themes.map((theme) => (
                  <span key={theme}>{theme}</span>
                ))}
              </div>
              <BookingButton label="Book a personal reading" />
            </div>
          </motion.div>
        ) : (
          <div className="empty-result">
            <Sparkles size={18} />
            <p>Your result will appear here.</p>
          </div>
        )}
      </section>
      <section className="section-shell tool-back">
        <Link className="button-text" to="/numerology-tools"><ArrowLeft size={15} />Explore all tools</Link>
      </section>
    </>
  );
}
