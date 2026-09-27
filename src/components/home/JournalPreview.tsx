import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { previewArticles } from '@/data/siteData';

export function JournalPreview() {
  return (
    <section className="journal-preview section-shell">
      <SectionHeading eyebrow="From the journal" title="Notes on the language of numbers." />
      <div className="journal-grid">
        {previewArticles.map((article, i) => (
          <Link className="journal-card" to={`/journal/${article.slug}`} key={article.slug}>
            <span>0{i + 1}</span>
            <small>{article.cat}</small>
            <h3>{article.title}</h3>
            <p>A quiet introduction to one of the questions that brings people to numerology.</p>
            <ArrowRight size={15} />
          </Link>
        ))}
      </div>
      <Link className="button-text" to="/journal">View the journal <ArrowRight size={15} /></Link>
    </section>
  );
}
