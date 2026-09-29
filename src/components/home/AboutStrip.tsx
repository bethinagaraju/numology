import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

export function AboutStrip() {
  return (
    <section className="pt-[140px] pb-[140px] grid grid-cols-[0.65fr_1.1fr_0.55fr] gap-[8%] max-md:grid-cols-1 max-md:gap-[55px] items-center border-t border-gold max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
      <div className="aspect-[0.8] bg-champagne border border-gold flex flex-col items-center justify-center color-bronze max-md:max-w-[380px]">
        <span className="font-serif text-[100px] border border-bronze rounded-full w-[150px] h-[150px] grid place-items-center text-bronze">NL</span>
        <small className="tracking-[0.2em] text-[8px] mt-[24px] text-bronze">PORTRAIT PLACEHOLDER</small>
      </div>
      <div className="[&_h2]:text-[clamp(48px,5vw,72px)]">
        <SectionHeading eyebrow="The person behind the numbers" title="Meet Namrattaa Lal." text="The Golden Numeralist is a personal practice rooted in curiosity, care and the belief that a considered question can open a new way of seeing." />
        <p className="text-[12px] text-muted-gold my-[30px]">Biography, experience and consultation philosophy can be refined here with Namrattaa's final approved profile.</p>
        <Link className="inline-flex items-center justify-center gap-[12px] text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px] px-0 pb-[7px] border-b border-muted-gold text-brown" to="/about">Meet Namrattaa <ArrowRight size={15} /></Link>
      </div>
      <div className="col-start-2 col-end-4 flex gap-[8%] border-t border-gold pt-[26px] max-md:col-auto max-sm:gap-[22px]">
        <div><strong className="block font-serif text-[47px] font-medium leading-[1] max-sm:text-[34px]">XX<span className="text-bronze">+</span></strong><small className="text-[8px] tracking-[0.15em] max-sm:text-[7px]">SESSIONS</small></div>
        <div><strong className="block font-serif text-[47px] font-medium leading-[1] max-sm:text-[34px]">XX<span className="text-bronze">+</span></strong><small className="text-[8px] tracking-[0.15em] max-sm:text-[7px]">YEARS EXPERIENCE</small></div>
        <div><strong className="block font-serif text-[47px] font-medium leading-[1] max-sm:text-[34px]">XX</strong><small className="text-[8px] tracking-[0.15em] max-sm:text-[7px]">AREAS OF GUIDANCE</small></div>
      </div>
    </section>
  );
}
