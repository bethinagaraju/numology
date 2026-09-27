import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { reveal } from '@/data/siteData';

export function Intro() {
  return (
    <section className="intro section-shell">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
        <SectionHeading eyebrow="The practice" title="Numbers have a language." text="Numerology is a traditional system that interprets numbers associated with names and dates. At The Golden Numeralist, that language becomes a considered space for reflection — a way to look at your patterns with fresh eyes." />
      </motion.div>
      <div className="intro-aside">
        <span className="large-mark">∴</span>
        <p>Not a prediction.<br />A new perspective.</p>
      </div>
    </section>
  );
}
