import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { packages } from '@/data/siteData';

export function Sessions() {
  return (
    <>
      <PageIntro 
        eyebrow="Sessions" 
        title="Personal alignment." 
        text="A considered conversation, shaped around your questions." 
      />
      <section className="pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {packages.map((pkg, i) => (
            <Link 
              key={pkg.slug}
              to={`/sessions/${pkg.slug}`}
              className="border border-gold p-[40px] transition-all duration-300 hover:bg-[rgba(242,231,213,0.4)] hover:-translate-y-[5px] flex flex-col"
            >
              <span className="text-bronze text-[10px] font-semibold mb-[20px]">0{i + 1}</span>
              <h2 className="font-serif font-medium text-[32px] leading-none mb-[15px]">{pkg.title}</h2>
              <p className="text-[#363637] text-[13px] leading-[1.6] mb-[30px] flex-1">{pkg.text}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-serif text-[18px] text-bronze">{pkg.price}</span>
                <b className="flex items-center gap-[8px] text-[10px] font-semibold uppercase tracking-[0.12em] text-bronze">Explore <ArrowRight size={14} /></b>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
