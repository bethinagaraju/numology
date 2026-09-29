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
      <section className="pb-[100px] grid grid-cols-[0.8fr_1.2fr] gap-[8%] max-md:grid-cols-1 max-md:gap-[35px] items-start max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="bg-cream border border-gold p-[clamp(24px,4vw,52px)] flex flex-col">
          <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5] mb-[20px]">{meta.placeholder}</span>
          {isDate ? (
            <div className="flex gap-[14px] max-sm:gap-[8px]">
              <label className="text-[10px] tracking-[0.18em] uppercase">Day
                <input className="block border-0 border-b border-muted-gold w-full pt-[15px] pb-[11px] outline-none text-brown bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-bronze" type="number" placeholder="14" value={values.one} onChange={(e) => setValues({ ...values, one: e.target.value })} />
              </label>
              <label className="text-[10px] tracking-[0.18em] uppercase">Month
                <input className="block border-0 border-b border-muted-gold w-full pt-[15px] pb-[11px] outline-none text-brown bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-bronze" type="number" placeholder="08" value={values.two} onChange={(e) => setValues({ ...values, two: e.target.value })} />
              </label>
              <label className="text-[10px] tracking-[0.18em] uppercase">Year
                <input className="block border-0 border-b border-muted-gold w-full pt-[15px] pb-[11px] outline-none text-brown bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-bronze" type="number" placeholder="1998" value={values.three} onChange={(e) => setValues({ ...values, three: e.target.value })} />
              </label>
            </div>
          ) : (
            <input className="block border-0 border-b border-muted-gold w-full pt-[15px] pb-[11px] mb-[30px] outline-none text-brown bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-bronze" placeholder={meta.placeholder} value={values.one} onChange={(e) => setValues({ ...values, one: e.target.value })} />
          )}
          <button className="inline-flex items-center justify-center gap-[12px] min-h-[48px] px-[21px] border border-transparent text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px] bg-dark text-ivory mt-[32px]" onClick={calculate}>Reveal my number <ArrowRight size={15} /></button>
          <small className="text-muted-gold text-[9px] mt-[20px] leading-[1.5] text-center">Calculations use the configurable Pythagorean system.</small>
        </div>
        {result && interpretation ? (
          <motion.div className="bg-ivory border border-gold p-[clamp(24px,4vw,52px)] grid grid-cols-[130px_1fr] max-sm:grid-cols-1 gap-[40px] items-start" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} aria-live="polite">
            <NumberRing number={result} label={meta.title} />
            <div>
              <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5]">Traditional interpretation</span>
              <h2 className="font-serif font-medium text-[48px] leading-none my-[15px] mb-[20px]">{interpretation.title}</h2>
              <p className="text-[#765a40] text-[13px] leading-[1.7] mb-[30px]">{interpretation.summary}</p>
              <div className="flex gap-[10px] flex-wrap mb-[40px]">
                {interpretation.themes.map((theme) => (
                  <span className="border border-muted-gold rounded-[40px] py-[6px] px-[14px] text-[9px] tracking-[0.12em] uppercase text-bronze" key={theme}>{theme}</span>
                ))}
              </div>
              <BookingButton label="Book a personal reading" />
            </div>
          </motion.div>
        ) : (
          <div className="border border-dashed border-gold rounded-[12px] flex flex-col items-center justify-center h-full min-h-[350px] text-muted-gold">
            <Sparkles size={18} />
            <p className="mt-[15px] text-[11px]">Your result will appear here.</p>
          </div>
        )}
      </section>
      <section className="pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <Link className="inline-flex items-center justify-center gap-[12px] text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px] px-0 pb-[7px] border-b border-muted-gold text-brown" to="/numerology-tools"><ArrowLeft size={15} />Explore all tools</Link>
      </section>
    </>
  );
}
