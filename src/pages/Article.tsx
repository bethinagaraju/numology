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
      <article className="article-body section-shell">
        <div className="article-meta">The Golden Numeralist<br />A note for reflection</div>
        <div className="prose">
          <p>Numbers have a way of giving shape to a question. In traditional numerology, a date or a name becomes a symbolic starting point — not a fixed answer, but a prompt to notice what resonates.</p>
          <h2>Begin with curiosity</h2>
          <p>The most useful interpretation is often the one that creates a thoughtful pause. It can help you name a pattern, revisit an intention or simply make room for a conversation you have been meaning to have.</p>
          <p>As with any symbolic tradition, these perspectives are personal and not scientifically proven. Take what is useful, leave what is not, and keep your own judgement at the centre.</p>
          <BookingButton label="Explore a personal session" />
        </div>
      </article>
    </>
  );
}
