import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { BookingButton } from '@/components/BookingButton';
import { toolMeta } from '@/data/siteData';

const coreNumbers = ['life-path', 'destiny', 'soul-urge', 'personality'];
const personalCycles = ['personal-year'];
const everydayNumerology = ['name-number', 'compatibility', 'business-name', 'mobile', 'vehicle'];

const sections = [
  { title: 'CORE NUMBERS', intro: 'The foundational numbers traditionally explored in a numerology chart.', slugs: coreNumbers, startIdx: 1 },
  { title: 'PERSONAL CYCLES', intro: '', slugs: personalCycles, startIdx: 5 },
  { title: 'EVERYDAY NUMEROLOGY', intro: '', slugs: everydayNumerology, startIdx: 6 }
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
