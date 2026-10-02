import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { previewArticles } from '@/data/siteData';

export function JournalPreview() {
  return (
    <section className="pt-[140px] pb-[145px] border-t border-gold max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
      <SectionHeading eyebrow="From the journal" title="Notes on the language of numbers." />
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-[18px] my-[65px] mb-[35px]">
        {previewArticles.map((article, i) => (
          <Link className="block border-t border-muted-gold pt-[20px] relative transition-transform duration-200 hover:-translate-y-[5px] group" to={`/journal/${article.slug}`} key={article.slug}>
            <span className="text-bronze text-[10px]">0{i + 1}</span>
            <small className="block text-muted-gold uppercase tracking-[0.12em] text-[8px] mt-[50px]">{article.cat}</small>
            <h3 className="font-serif font-medium text-[31px] leading-[0.95] my-[14px]">{article.title}</h3>
            <p className="text-[#363637] text-[11px] leading-[1.7]">A quiet introduction to one of the questions that brings people to numerology.</p>
            <ArrowRight className="text-bronze mt-[16px]" size={15} />
          </Link>
        ))}
      </div>
      <Link className="inline-flex items-center justify-center gap-[12px] text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px] px-0 pb-[7px] border-b border-muted-gold text-brown" to="/journal">View the journal <ArrowRight size={15} /></Link>
    </section>
  );
}
