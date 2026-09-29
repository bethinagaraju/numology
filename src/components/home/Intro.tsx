import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { reveal } from '@/data/siteData';

export function Intro() {
  return (
    <section className="relative pt-[146px] pb-[130px] border-b border-gold/30">
      <div className="grid grid-cols-[2fr_1fr] max-md:grid-cols-1 gap-[12%] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
          <SectionHeading eyebrow="The practice" title="Numbers have a language." text="Numerology is a traditional system that interprets numbers associated with names and dates. At The Golden Numeralist, that language becomes a considered space for reflection — a way to look at your patterns with fresh eyes." />
        </motion.div>
        <div className="self-end relative pl-[40px] max-md:mt-[50px] max-md:pl-[30px]">
          {/* Aesthetic border line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#c5a163]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[40px] bg-[#c5a163]" />
          </div>

          <span className="text-[#c5a163] font-serif text-[68px] leading-[0.5] block mb-[16px]">∴</span>
          <p className="font-serif text-[26px] text-dark leading-[1.2]">Not a prediction.<br /><span className="italic text-brown/80">A new perspective.</span></p>
        </div>
      </div>
    </section>
  );
}
