import { useLocation } from 'react-router-dom';
import { PageIntro } from '@/components/PageIntro';
import { BookingButton } from '@/components/BookingButton';
import { articles } from '@/data/siteData';

export function Article() {
  const { pathname } = useLocation();
  const article = articles.find((a) => pathname.includes(a.slug)) ?? articles[0];
  
  return (
    <>
      <PageIntro eyebrow={article.category} title={article.title} text={article.text} />
      <article className="pb-[140px] grid grid-cols-2 max-md:grid-cols-1 gap-[8%] max-md:gap-[35px] items-start max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="text-muted-gold text-[11px] uppercase tracking-[0.14em] leading-[1.8] pt-[15px] border-t border-gold">The Golden Numeralist<br />A note for reflection</div>
        <div className="m-0 [&_p]:text-[#363637] [&_p]:text-[13px] [&_p]:leading-[1.75] [&_p]:mb-[24px] [&_p]:max-w-[520px]">
          {article.content ? (
            article.content.map((block, idx) => {
              if (block.type === 'h2') {
                return <h2 key={idx} className="font-serif font-medium text-[38px] leading-[0.95] mt-[55px] mb-[25px] text-[#2B211B]">{block.text}</h2>;
              }
              return <p key={idx}>{block.text}</p>;
            })
          ) : (
            <>
              <p>Numbers have a way of giving shape to a question. In traditional numerology, a date or a name becomes a symbolic starting point — not a fixed answer, but a prompt to notice what resonates.</p>
              <h2 className="font-serif font-medium text-[38px] leading-[0.95] mt-[55px] mb-[25px] text-[#2B211B]">Begin with curiosity</h2>
              <p>The most useful interpretation is often the one that creates a thoughtful pause. It can help you name a pattern, revisit an intention or simply make room for a conversation you have been meaning to have.</p>
              <p>As with any symbolic tradition, these perspectives are personal and not scientifically proven. Take what is useful, leave what is not, and keep your own judgement at the centre.</p>
            </>
          )}
          <div className="mt-[40px]">
            <BookingButton label="Explore a personal session" />
          </div>
        </div>
      </article>
    </>
  );
}
