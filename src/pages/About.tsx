import { PageIntro } from '@/components/PageIntro';
import { SectionHeading } from '@/components/SectionHeading';
import { OrnamentalDivider } from '@/components/OrnamentalDivider';
import { FinalCta } from '@/components/FinalCta';
import { BookingButton } from '@/components/BookingButton';

export function About() {
  return (
    <>
      <PageIntro eyebrow="The practice" title="A considered approach to the language of numbers." text="The Golden Numeralist is a personal numerology practice by Namrattaa Lal, creating calm space for reflection, curiosity and meaningful conversation." />
      <section className="pt-[40px] pb-[140px] grid grid-cols-2 max-md:grid-cols-1 gap-[8%] max-md:gap-[55px] items-start max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="aspect-[0.7] bg-champagne border border-gold flex flex-col items-center justify-center text-bronze max-md:max-w-[380px]">
          <span className="font-serif text-[100px] border border-bronze rounded-full w-[150px] h-[150px] grid place-items-center text-bronze">NL</span>
          <small className="tracking-[0.2em] text-[8px] mt-[24px] text-bronze">PORTRAIT PLACEHOLDER</small>
        </div>
        <div>
          <SectionHeading eyebrow="Namrattaa Lal" title="The person behind the numbers." text="Biography, experience and certifications can be replaced here with the consultant's final approved profile." />
          <OrnamentalDivider />
          <div className="my-[25px] mb-[45px] [&_p]:text-[#363637] [&_p]:text-[13px] [&_p]:leading-[1.75] [&_p]:mb-[24px] [&_p]:max-w-[520px]">
            <p>Numerology has long been used as a symbolic language for self-reflection. This practice approaches it with warmth and care, holding each interpretation as an invitation rather than a fixed answer.</p>
            <p>Every consultation is shaped around the person in front of the numbers — their question, their context and the perspective they are seeking.</p>
          </div>
          <BookingButton label="Meet Namrattaa" />
        </div>
      </section>
      <section className="border-t border-gold pt-[135px] pb-[155px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <SectionHeading eyebrow="The philosophy" title="Insight, without certainty." text="Numerology sessions are offered for personal reflection and guidance. They do not replace professional medical, legal, financial, psychological or other professional advice." align="center" />
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[10%] max-md:gap-[55px] mt-[90px] text-center">
          {['Curiosity over certainty', 'Conversation over prediction', 'Clarity over noise'].map((value, i) => (
            <div key={value}>
              <span className="text-bronze text-[10px] tracking-[0.15em]">0{i + 1}</span>
              <h3 className="font-serif font-medium text-[26px] leading-[1.1] my-[18px] mb-[14px]">{value}</h3>
              <p className="text-[#363637] text-[11px] max-w-[250px] mx-auto my-0 leading-[1.6]">A grounded, human way to explore the questions behind your numbers.</p>
            </div>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
