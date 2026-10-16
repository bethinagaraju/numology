import { PageIntro } from '@/components/PageIntro';
import { SectionHeading } from '@/components/SectionHeading';
import { OrnamentalDivider } from '@/components/OrnamentalDivider';
import { FinalCta } from '@/components/FinalCta';
import { BookingButton } from '@/components/BookingButton';
import founderImg from '@/assets/founder-2.jpg';

export function About() {
  return (
    <>
      <PageIntro
        eyebrow="The Practice"
        title="A considered approach to the language of numbers."
        text="The Golden Numeralist is a personal numerology practice founded by Namrattaa Lal, creating calm space for reflection, curiosity, and meaningful personal direction."
      />

      <section className="pt-[40px] pb-[140px] grid grid-cols-2 max-md:grid-cols-1 gap-[8%] max-md:gap-[55px] items-center max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="relative overflow-hidden border border-[#CDA66F]/50 bg-[#FEFCF8] p-3 shadow-[0_16px_45px_rgba(197,147,77,0.10)] max-md:max-w-[380px] mx-auto w-full">
          <div className="aspect-[3/4] overflow-hidden bg-[#F4EFE9]">
            <img
              src={founderImg}
              alt="Namrattaa Lal - Master Numerologist & Founder of The Golden Numeralist"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="pt-3 pb-1 text-center">
            <h3 className="font-serif text-2xl text-[#2B211B]">Namrattaa Lal</h3>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5934D] font-medium block mt-0.5">
              Master Numerologist
            </span>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Namrattaa Lal"
            title="The person behind the numbers."
            text="Guiding individuals across India, the UAE, and worldwide through the ancient wisdom of Lo Shu Numerology and harmonic name vibration."
          />
          <OrnamentalDivider />
          <div className="my-[25px] mb-[45px] [&_p]:text-[#363637] [&_p]:text-[14px] [&_p]:leading-[1.8] [&_p]:mb-[20px] [&_p]:max-w-[540px]">
            <p>
              Numerology has long served as a profound symbolic framework for self-reflection and personal timing. In our practice, we approach it with genuine warmth, clarity, and care — holding each reading as an empowering invitation to self-discovery rather than rigid, superstitious prediction.
            </p>
            <p>
              Every consultation is uniquely shaped around the individual: understanding your Driver (Personality) and Conductor (Destiny) numbers, resolving energetic tensions through practical remedies, and aligning your active name vibration to support career success, relationship harmony, and inner peace.
            </p>
          </div>
          <BookingButton label="Book a consultation with Namrattaa" />
        </div>
      </section>

      <section className="border-t border-[#CDA66F]/40 pt-[120px] pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <SectionHeading
          eyebrow="The Philosophy"
          title="Insight, without certainty."
          text="Numerology sessions are offered for thoughtful reflection, clarity, and personal guidance. They complement conscious decision-making in personal and professional life."
          align="center"
        />
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-[8%] max-md:gap-[45px] mt-[80px] text-center">
          {[
            {
              title: 'Curiosity over certainty',
              desc: 'Exploring the natural frequencies and rhythms that shape your strengths and personal timing.'
            },
            {
              title: 'Conversation over prediction',
              desc: 'A grounded dialogue centered on your questions, career milestones, and practical life choices.'
            },
            {
              title: 'Clarity over noise',
              desc: 'Sensible, actionable remedies and harmonic alignments designed for everyday modern life.'
            }
          ].map((item, i) => (
            <div key={item.title} className="p-6 border border-[#CDA66F]/25 bg-[#FEFCF8]/60">
              <span className="text-[#C5934D] font-serif text-[13px] tracking-[0.2em] font-medium">0{i + 1}</span>
              <h3 className="font-serif font-medium text-[22px] leading-[1.2] my-[16px] text-[#2B211B]">{item.title}</h3>
              <p className="text-[#363637]/80 text-[13px] max-w-[280px] mx-auto my-0 leading-[1.65]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
