import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { BookingButton } from '@/components/BookingButton';
import { packages } from '@/data/siteData';

export function SessionDetail() {
  const { pathname } = useLocation();
  const item = packages.find((p) => pathname.includes(p.slug)) ?? packages[0];
  const expectations = ['Your details and intention', 'A personal number analysis', 'A guided consultation', 'Insights and reflective prompts'];
  return (
    <>
      <PageIntro eyebrow="A signature session" title={item.title} text={item.text} />
      <section className="editorial-page section-shell detail-grid">
        <div>
          <span className="price-large">{item.price}</span>
          <p className="lead">A calm, considered session for making space around your question and exploring the traditional interpretations connected to your numbers.</p>
          <BookingButton label="Continue to client form" />
        </div>
        <div className="detail-list">
          <h3>What to expect</h3>
          {expectations.map((x) => (
            <p key={x}><Check size={14} />{x}</p>
          ))}
          <h3>Good to know</h3>
          <p>All interpretations are offered as traditional perspectives for personal reflection, not as fixed predictions or professional advice.</p>
        </div>
      </section>
    </>
  );
}
