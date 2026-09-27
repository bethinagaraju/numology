import { PageIntro } from '@/components/PageIntro';
import { FinalCta } from '@/components/FinalCta';
import { BookingButton } from '@/components/BookingButton';
import { packages, serviceTypes } from '@/data/siteData';

export function Sessions() {
  return (
    <>
      <PageIntro eyebrow="Signature sessions" title="Choose your journey." text="Begin where your question is. Every session is designed as a thoughtful conversation around the numbers you bring." />
      <section className="session-list section-shell">
        {packages.map((item, i) => (
          <article className="session-row" key={item.slug}>
            <span className="session-number">0{i + 1}</span>
            <div>
              <span className="eyebrow">{i === 1 ? 'Most popular' : 'Signature session'}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <strong>{item.price}</strong>
            <BookingButton label="Choose package" variant="outline" />
          </article>
        ))}
        {serviceTypes.map((title, i) => (
          <article className="service-row" key={title}>
            <span>0{i + 4}</span>
            <h3>{title}</h3>
            <p>A personal consultation for exploring this question through a traditional numerology lens.</p>
            <BookingButton label="Request session" variant="text" />
          </article>
        ))}
      </section>
      <FinalCta />
    </>
  );
}
