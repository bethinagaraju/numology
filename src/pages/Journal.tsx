import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { articles } from '@/data/siteData';

export function Journal() {
  return (
    <>
      <PageIntro eyebrow="The journal" title="Notes on the language of numbers." text="Editorial reflections on traditional numerology, personal questions and the art of looking again." />
      <section className="article-list section-shell">
        {articles.concat(articles).map((article, i) => (
          <Link className="article-row" to={`/journal/${article.slug}`} key={`${article.slug}-${i}`}>
            <span>0{(i % 3) + 1}</span>
            <div>
              <small>{article.category}</small>
              <h2>{article.title}</h2>
              <p>{article.text}</p>
            </div>
            <ArrowRight size={16} />
          </Link>
        ))}
      </section>
    </>
  );
}
