import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

export function AboutStrip() {
  return (
    <section className="about-strip section-shell">
      <div className="portrait-placeholder">
        <span>NL</span>
        <small>PORTRAIT PLACEHOLDER</small>
      </div>
      <div>
        <SectionHeading eyebrow="The person behind the numbers" title="Meet Namrattaa Lal." text="The Golden Numeralist is a personal practice rooted in curiosity, care and the belief that a considered question can open a new way of seeing." />
        <p className="editable-copy">Biography, experience and consultation philosophy can be refined here with Namrattaa's final approved profile.</p>
        <Link className="button-text" to="/about">Meet Namrattaa <ArrowRight size={15} /></Link>
      </div>
      <div className="stats-row">
        <div><strong>XX<span>+</span></strong><small>SESSIONS</small></div>
        <div><strong>XX<span>+</span></strong><small>YEARS EXPERIENCE</small></div>
        <div><strong>XX</strong><small>AREAS OF GUIDANCE</small></div>
      </div>
    </section>
  );
}
