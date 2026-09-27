import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function StoriesPreview() {
  return (
    <section className="stories-preview section-shell">
      <div className="quote-mark">“</div>
      <div>
        <span className="eyebrow">Stories from the other side</span>
        <blockquote>“A beautiful space to slow down, ask better questions and see familiar patterns from a different angle.”</blockquote>
        <p>Placeholder story · Personal Numerology</p>
        <Link className="button-text" to="/stories">Read client stories <ArrowRight size={15} /></Link>
      </div>
      <div className="story-side">
        <span>01 / 03</span>
        <div className="story-lines" />
      </div>
    </section>
  );
}
