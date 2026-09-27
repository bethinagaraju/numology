import { ArrowDown } from 'lucide-react';
import { BookingButton } from '@/components/BookingButton';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">A modern practice in traditional numerology</span>
        <h1>Your numbers.<br /><em>Your pattern.</em><br />Your story.</h1>
        <p>Explore the traditional language of numbers through personalized sessions designed for reflection, clarity and deeper self-understanding.</p>
        <div className="hero-actions">
          <a href="#calculator" className="button-gold">Discover your number <ArrowDown size={15} /></a>
          <BookingButton label="Book a session" variant="outline" />
        </div>
        <div className="signature">THE GOLDEN NUMERALIST <span>BY NAMRATTAA LAL</span></div>
      </div>
      <div className="hero-art">
        <div className="art-orbit orbit-large" />
        <div className="art-orbit orbit-small" />
        <div className="hero-center">
          <span>THE LANGUAGE</span>
          <strong>OF NUMBERS</strong>
          <i>01 — 09</i>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n, i) => (
          <span className={`orbit-number n${i + 1}`} key={n}>{n}</span>
        ))}
        <div className="art-star">✦</div>
      </div>
      <div className="scroll-cue"><span />Scroll to explore</div>
    </section>
  );
}
