import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { BookingButton } from '@/components/BookingButton';
import { toolMeta } from '@/data/siteData';

export function ToolDetail() {
  const { pathname } = useLocation();
  const slug = pathname.split('/').pop() ?? 'life-path';
  const meta = toolMeta[slug] ?? toolMeta['life-path'];

  return (
    <>
      <PageIntro eyebrow="THE NUMBER ARCHIVE" title={meta.title} text={meta.description} />

      {/* Educational Section */}
      <section className="max-w-[800px] mx-auto px-[clamp(24px,5vw,80px)] pb-[80px] text-center">
        <span className="block text-[#C29454] uppercase tracking-[0.2em] text-[11px] mb-[15px] font-semibold">{meta.subtitle}</span>
        <h2 className="font-serif text-[32px] text-[#171717] mb-[30px] uppercase">{meta.title}</h2>

        <div className="bg-[#FDFBF7] border border-[#E0DCD8] p-[clamp(24px,4vw,52px)] shadow-[0_20px_50px_rgba(120,83,66,0.05)]">
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#353536] font-semibold mb-[20px]">WHAT IT REPRESENTS</h3>
          <p className="text-[#785342] text-[16px] leading-[1.8] max-w-[600px] mx-auto italic mb-[10px]">"{meta.guideDescription || meta.description}"</p>

          <div className="mt-[40px] pt-[35px] border-t border-[#E0DCD8]">
            <span className="block text-[#A6865E] uppercase tracking-[0.2em] text-[10px] font-semibold mb-[25px]">EXPLORE YOUR CHART</span>
            <BookingButton label="Book a personal reading" />
          </div>
        </div>
      </section>

      {/* Related Guides Section */}
      <section className="max-w-[1000px] mx-auto px-[clamp(24px,5vw,80px)] pb-[100px]">
        <div className="border-t border-[#E0DCD8] pt-[60px] text-center">
          <h3 className="font-serif text-[20px] text-[#171717] mb-[40px] uppercase">Related Guides</h3>
          <div className="flex flex-wrap justify-center gap-[15px]">
            {Object.entries(toolMeta)
              .filter(([key, t]) => t.category === meta.category && key !== slug)
              .map(([key, t]) => (
                <Link 
                  key={key} 
                  to={`/numerology-tools/${key}`}
                  className="inline-flex items-center gap-[8px] bg-[#FEFCF8] border border-[#E0DCD8] px-[20px] py-[12px] text-[11px] uppercase tracking-[0.15em] font-medium text-[#353536] transition-all hover:border-[#C29454] hover:text-[#785342]"
                >
                  {t.title} <ArrowLeft size={12} className="rotate-180" />
                </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)] text-center">
        <Link className="inline-flex items-center justify-center gap-[12px] text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px] px-0 pb-[7px] border-b border-[#E0DCD8] text-[#785342] hover:text-[#C29454] hover:border-[#C29454]" to="/numerology-tools">
          <ArrowLeft size={15} /> RETURN TO THE NUMBER ARCHIVE
        </Link>
      </section>
    </>
  );
}
