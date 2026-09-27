import { PageIntro } from '@/components/PageIntro';
import { SectionHeading } from '@/components/SectionHeading';
import { OrnamentalDivider } from '@/components/OrnamentalDivider';
import { FinalCta } from '@/components/FinalCta';
import { BookingButton } from '@/components/BookingButton';

export function About() {
  return (
    <>
      <PageIntro eyebrow="The practice" title="A considered approach to the language of numbers." text="The Golden Numeralist is a personal numerology practice by Namrattaa Lal, creating calm space for reflection, curiosity and meaningful conversation." />
      <section className="editorial-page section-shell two-column">
        <div className="portrait-placeholder tall">
          <span>NL</span>
          <small>PORTRAIT PLACEHOLDER</small>
        </div>
        <div>
          <SectionHeading eyebrow="Namrattaa Lal" title="The person behind the numbers." text="Biography, experience and certifications can be replaced here with the consultant's final approved profile." />
          <OrnamentalDivider />
          <div className="prose">
            <p>Numerology has long been used as a symbolic language for self-reflection. This practice approaches it with warmth and care, holding each interpretation as an invitation rather than a fixed answer.</p>
            <p>Every consultation is shaped around the person in front of the numbers — their question, their context and the perspective they are seeking.</p>
          </div>
          <BookingButton label="Meet Namrattaa" />
        </div>
      </section>
      <section className="philosophy section-shell">
        <SectionHeading eyebrow="The philosophy" title="Insight, without certainty." text="Numerology sessions are offered for personal reflection and guidance. They do not replace professional medical, legal, financial, psychological or other professional advice." align="center" />
        <div className="values-grid">
          {['Curiosity over certainty', 'Conversation over prediction', 'Clarity over noise'].map((value, i) => (
            <div key={value}>
              <span>0{i + 1}</span>
              <h3>{value}</h3>
              <p>A grounded, human way to explore the questions behind your numbers.</p>
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
