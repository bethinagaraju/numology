import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { BookingButton } from '@/components/BookingButton';
import { toolMeta } from '@/data/siteData';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    category: "The Practice",
    question: "What is The Golden Numeralist and how is it different from fortune-telling?",
    answer: "The Golden Numeralist is a personal numerology practice founded by Namrattaa Lal. Rather than deterministic fortune-telling, we approach numerology as a grounded, reflective language for personal clarity and self-awareness. We believe in conversation over prediction and curiosity over certainty—helping you uncover the innate patterns, strengths, and energetic cycles in your chart so you can make informed, conscious decisions."
  },
  {
    category: "Consultations",
    question: "How does a personal consultation work from start to finish?",
    answer: "Consultations are conducted online via 1-on-1 private video calls. Prior to your session, you complete a confidential client assessment form with your date of birth, current full name, and specific questions or challenges. Namrattaa prepares your comprehensive Lo Shu Grid and number synthesis in advance. During the call, you explore your core chart, life pillars, current timing, and practical remedies in a calm, collaborative dialogue."
  },
  {
    category: "Packages",
    question: "Which consultation package should I choose?",
    answer: "We offer three carefully structured consultation tiers to suit your needs:\n• Basic Package: Covers your core foundations— Personality Number, Destiny Number, current Personal Year forecast, and basic remedies.\n• Detailed Package: Our most popular session, exploring career direction, financial outlook, yogas in numerology, key health tendencies, and advanced remedies.\n• Comprehensive Package: Complete personal alignment including full name spelling analysis & correction, marriage/relationship compatibility, and mobile & vehicle number compatibility."
  },
  {
    category: "Preparation",
    question: "What information is needed for an accurate reading?",
    answer: "All that is required is your exact date of birth (Day, Month, and Year) and your full legal name as currently used (including any common nicknames or maiden names). An exact birth time is not mandatory for Lo Shu Grid numerology, making it fully accessible even if you do not possess birth time records."
  },
  {
    category: "Core Numbers",
    question: "What is the difference between my Personality (Driver) and Destiny (Conductor) numbers?",
    answer: "Your Personality Number (also called the Driver or Mulank) is derived strictly from your day of birth and governs your conscious identity, behavior, instinctive reactions, and how you present yourself to the world. Your Destiny Number (the Conductor or Bhagyank) is the sum of your entire date of birth (Day + Month + Year) and represents your deeper life purpose, karmic lessons, and long-term potential."
  },
  {
    category: "Name Alignment",
    question: "How does Name Numerology work, and can spelling corrections help?",
    answer: "While your date of birth is fixed at birth, your name represents your active vibrational frequency in the world. Each letter in your name corresponds to a specific numerical value. If your name totals an unfavorable compound number or conflicts with your birth numbers, subtle spelling adjustments can harmoniously balance missing elements, supporting smoother career recognition, business success, and personal confidence."
  },
  {
    category: "Compatibility",
    question: "How does Marriage and Relationship Compatibility analysis work?",
    answer: "We analyze the mutual Driver and Conductor vibrations, Lo Shu Grid planes, and elemental temperaments of both partners. Rather than offering a simplistic 'yes or no' judgment, the consultation highlights areas of natural emotional synergy, potential friction points, communication styles, and practical remedies to cultivate mutual respect, peace, and long-term marital harmony."
  },
  {
    category: "Remedies",
    question: "What kind of remedies and guidance are recommended?",
    answer: "All remedies provided in our practice are sensible, practical, and non-superstitious. Depending on missing numbers and planes in your Lo Shu Grid, recommendations may involve color alignments, elemental balance (wood, metal, water, earth, fire), favorable compass directions (via your Aura/Kua number), lifestyle habits, and customized name vibrations."
  },
  {
    category: "Timing & Cycles",
    question: "What is a Personal Year cycle and how does it assist my decision-making?",
    answer: "Personal Year numerology operates on an ongoing 9-year cycle calculated from your birth date and the current calendar year. Each year carries a unique cosmic momentum—ranging from sowing seeds and new beginnings (Year 1) to steady discipline (Year 4), dynamic change (Year 5), and culmination or completion (Year 9). Knowing your active personal year helps you time major milestones, career moves, and rest periods with confidence."
  }
];


const loShuTools = [
  'personality-number',
  'destiny-number',
  'aura-kua-number',
  'name-numerology',
  'personal-year-numerology'
];

const sections = [
  {
    title: 'Tools in LoShu Numerology',
    intro: 'A considered guide to the traditional meanings, symbolism and patterns explored through numerology.',
    slugs: loShuTools,
    startIdx: 1
  }
];

function ArchiveRing({ num }: { num: number }) {
  const roman = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'][num - 1] || num;
  return (
    <div className="relative w-[110px] h-[110px] mt-0 flex items-center justify-center">
      {/* Outer dotted ring with rotation animation */}
      <div className="absolute inset-[-15px] rounded-full border-[1px] border-dashed border-[#CDA66F]/60 transition-transform duration-[1500ms] ease-in-out group-hover:rotate-[180deg]" />

      {/* 4 Stars/Dots (Top, Bottom, Left, Right) */}
      <div className="absolute -top-[21px] left-1/2 -translate-x-1/2 text-[#C5934D] text-[12px] leading-none transition-transform duration-700 group-hover:-translate-y-[2px]">✦</div>
      <div className="absolute -bottom-[21px] left-1/2 -translate-x-1/2 text-[#C5934D] text-[12px] leading-none transition-transform duration-700 group-hover:translate-y-[2px]">✦</div>
      <div className="absolute top-1/2 -left-[17px] -translate-y-1/2 w-[4px] h-[4px] bg-[#CDA66F] rounded-full transition-transform duration-700 group-hover:-translate-x-[2px]"></div>
      <div className="absolute top-1/2 -right-[17px] -translate-y-1/2 w-[4px] h-[4px] bg-[#CDA66F] rounded-full transition-transform duration-700 group-hover:translate-x-[2px]"></div>

      {/* Animated SVG circular border drawing */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 110 110">
        {/* Base transparent ring */}
        <circle cx="55" cy="55" r="54" fill="none" stroke="#CDA66F" strokeWidth="1" strokeOpacity="0.3" />
        {/* Animated stroke ring */}
        <circle
          cx="55" cy="55" r="54"
          fill="none" stroke="#C5934D" strokeWidth="1.5"
          strokeDasharray="340"
          className="[stroke-dashoffset:340] group-hover:[stroke-dashoffset:0] transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
      </svg>

      {/* Inner circle with gradient and shadow */}
      <div className="absolute inset-[5px] rounded-full bg-gradient-to-br from-[#FDFBF7] via-[#F4EFE9] to-[#EBE4DB] border-[2px] border-[#C5934D]/40 shadow-[inset_0_0_10px_rgba(255,255,255,0.8),_0_5px_15px_rgba(197,147,77,0.2)] flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
        <span className="font-serif text-[42px] text-[#87533E]">{roman}</span>
      </div>
    </div>
  );
}

export function Tools() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <PageIntro eyebrow="THE NUMBER ARCHIVE" title="UNDERSTAND YOUR NUMBERS." text="A considered guide to the traditional meanings, symbolism and patterns explored through numerology." />

      <div className="max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)] pb-[120px]">
        {sections.map((section) => (
          <section key={section.title} className="mb-[100px]">
            <div className="mb-[50px]">
              <h2 className="font-serif text-[28px] text-[#363637] mb-[10px]">{section.title}</h2>
              {section.intro && <p className="text-[#87533E] text-[15px]">{section.intro}</p>}
            </div>

            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[30px]">
              {section.slugs.map((slug, idx) => {
                const tool = toolMeta[slug];
                const numberStr = (section.startIdx + idx).toString().padStart(2, '0');
                return (
                  <Link
                    to={`/numerology-tools/${slug}`}
                    key={slug}
                    className="
                      group relative flex flex-col items-center text-center
                      border border-[#CDA66F]/40 rounded-[24px] p-[40px] pt-[50px]
                      bg-[#FEFCF8] shadow-[0_5px_30px_rgba(197,147,77,0.05)]
                      transition-all duration-500 overflow-hidden
                      hover:shadow-[0_20px_50px_rgba(197,147,77,0.15)] hover:-translate-y-[4px] hover:border-[#C5934D]/70
                    "
                  >


                    {/* Number Ring */}
                    <ArchiveRing num={section.startIdx + idx} />

                    {/* Title */}
                    <h3 className="font-serif font-medium text-[30px] uppercase leading-[1.15] mt-8 mb-4 text-[#363637] transition-colors duration-300 group-hover:text-[#87533E] max-w-[220px]">
                      {tool.title}
                    </h3>

                    {/* Divider */}
                    <div className="flex items-center justify-center w-full max-w-[120px] mb-[20px]">
                      <div className="h-[1px] flex-1 bg-[#CDA66F]/40"></div>
                      <div className="text-[#C5934D] mx-[12px] text-[10px] leading-none">✦</div>
                      <div className="h-[1px] flex-1 bg-[#CDA66F]/40"></div>
                    </div>

                    {/* Subtitle */}
                    <span className="block text-[#C5934D] text-[11px] uppercase tracking-[0.2em] mb-[40px] flex-1">
                      {tool.subtitle}
                    </span>

                    {/* Button */}
                    <span className="
                      inline-flex items-center gap-[10px] text-[11px] font-medium uppercase tracking-[0.18em] 
                      bg-[#87533E] text-white px-[32px] py-[14px] rounded-full
                      transition-all duration-300 relative z-10
                      group-hover:bg-[#C5934D] shadow-[0_4px_15px_rgba(135,83,62,0.15)] group-hover:shadow-none
                    ">
                      READ THE GUIDE <ArrowRight size={14} strokeWidth={1.5} />
                    </span>

                    {/* Bottom Left Decorative Elements */}
                    <div className="absolute bottom-0 left-0 w-[180px] h-[180px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                      <div className="absolute -bottom-[80px] -left-[80px] w-[220px] h-[220px] border-[1px] border-[#CDA66F]/40 rounded-full"></div>
                      <div className="absolute -bottom-[20px] -left-[20px] w-[120px] h-[120px] border-[1px] border-[#CDA66F]/40 rounded-full"></div>
                      <div className="absolute bottom-[40px] left-[40px] w-[6px] h-[6px] bg-[#CDA66F]/60 rounded-full"></div>
                      <div className="absolute -bottom-[50px] -left-[50px] w-[140px] h-[140px] bg-[#CDA66F] rounded-full opacity-10 blur-[2px]"></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        {/* =====================================================
            FAQ SECTION (COMPREHENSIVE WEBSITE & PRACTICE FAQ)
            ===================================================== */}
        <section className="mb-[100px] border-t border-[#CDA66F]/40 pt-[90px]">
          <div className="text-center max-w-[720px] mx-auto mb-[45px]">
            <span className="block text-[#C5934D] text-[11px] font-semibold uppercase tracking-[0.25em] mb-[12px]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-[32px] md:text-[42px] text-[#363637] tracking-tight mb-[16px]">
              Everything You Need to Know
            </h2>
            <p className="text-[#87533E] text-[15px] leading-[1.7]">
              A comprehensive guide to consultations, session packages, Lo Shu Grid analysis, name alignment, and our philosophy.
            </p>
          </div>

          <div className="max-w-[880px] mx-auto space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="border border-[#CDA66F]/35 rounded-[18px] bg-[#FEFCF8] overflow-hidden transition-all duration-300 hover:border-[#C5934D]/70 shadow-[0_4px_20px_rgba(197,147,77,0.04)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full py-[22px] px-[26px] md:px-[32px] flex items-center justify-between text-left gap-5 transition-colors duration-300 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 flex-wrap">

                      <span className="font-serif text-[18px] md:text-[20px] text-[#363637] group-hover:text-[#87533E] transition-colors duration-300 leading-[1.4] block">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#CDA66F]/40 flex items-center justify-center transition-all duration-300 ${isOpen
                        ? 'bg-[#87533E] text-[#FDFBF7] border-[#87533E] rotate-180'
                        : 'text-[#87533E] group-hover:border-[#C5934D] group-hover:bg-[#FDFBF7]'
                        }`}
                    >
                      <ChevronDown size={16} strokeWidth={2} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-[26px] md:px-[32px] pb-[26px] pt-3 border-t border-[#CDA66F]/20 text-[#363637]/85 text-[14px] md:text-[15px] leading-[1.75] space-y-2.5">
                      {faq.answer.split('\n').map((line, idx) => {
                        if (line.startsWith('•')) {
                          return (
                            <div key={idx} className="flex items-start gap-2.5 pl-2 text-[#363637]">
                              <span className="text-[#C5934D] mt-1 shrink-0 text-[10px]">✦</span>
                              <span>{line.replace(/^•\s*/, '')}</span>
                            </div>
                          );
                        }
                        return <p key={idx}>{line}</p>;
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            CLOSING CTA (PRESERVED)
            ===================================================== */}
        <div className="border-t border-[#CDA66F]/40 pt-[80px] text-center flex flex-col items-center">
          <span className="block text-[#C5934D] text-[11px] font-semibold uppercase tracking-[0.2em] mb-[20px]">CURIOUS ABOUT YOUR OWN NUMBERS?</span>
          <p className="text-[#363637] text-[16px] max-w-[500px] leading-[1.6] mb-[40px]">
            Begin with a personal numerology reading and explore the patterns traditionally associated with your chart.
          </p>
          <BookingButton label="BOOK A SESSION" />
        </div>
      </div>
    </div>
  );
}
