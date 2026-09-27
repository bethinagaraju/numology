import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingButton } from '@/components/BookingButton';
import { interests } from '@/data/siteData';

export function ExploreSection() {
  const [interest, setInterest] = useState('MYSELF');
  return (
    <section className="explore-section section-shell">
      <SectionHeading eyebrow="A question worth asking" title="What would you like to understand better?" />
      <div className="interest-list">
        {Object.keys(interests).map((item) => (
          <button className={interest === item ? 'active' : ''} key={item} onClick={() => setInterest(item)}>
            {item}<ArrowRight size={15} />
          </button>
        ))}
      </div>
      <div className="interest-result">
        <span className="eyebrow">{interest}</span>
        <p>{interests[interest]}</p>
        <BookingButton label="Explore this session" variant="text" />
      </div>
    </section>
  );
}
