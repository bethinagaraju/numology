import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { articles } from '@/data/siteData';

export function Journal() {
  return (
    <>
      <PageIntro eyebrow="The journal" title="Notes on the language of numbers." text="Editorial reflections on traditional numerology, personal questions and the art of looking again." />
      <section className="pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        {articles.concat(articles).map((article, i) => (
          <Link className="flex items-center gap-[60px] py-[45px] border-t border-gold transition-all duration-300 hover:pl-[20px] hover:bg-[rgba(242,231,213,0.3)] max-md:flex-col max-md:items-start max-md:gap-[25px] max-md:py-[35px] group" to={`/journal/${article.slug}`} key={`${article.slug}-${i}`}>
            <span className="text-bronze text-[10px] w-[30px]">0{(i % 3) + 1}</span>
            <div className="flex-1 max-w-[680px]">
              <small className="text-muted-gold uppercase tracking-[0.12em] text-[9px]">{article.category}</small>
              <h2 className="font-serif font-medium text-[42px] leading-none my-[15px] max-sm:text-[34px]">{article.title}</h2>
              <p className="text-[#765a40] text-[13px] m-0 leading-[1.6]">{article.text}</p>
            </div>
            <ArrowRight className="text-bronze transition-transform duration-300 group-hover:translate-x-[10px]" size={16} />
          </Link>
        ))}
      </section>
    </>
  );
}
