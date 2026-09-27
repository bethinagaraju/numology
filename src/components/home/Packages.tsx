import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingButton } from '@/components/BookingButton';
import { packageData } from '@/data/siteData';

export function Packages() {
  return (
    <section className="packages-section section-shell">
      <SectionHeading eyebrow="Signature sessions" title="Choose your journey." text="Three ways to begin. Select your package inside the client assessment form after following the button below." align="center" />
      <div className="package-grid">
        {packageData.map((pkg, i) => (
          <article className={`package ${i === 1 ? 'featured' : ''}`} key={pkg.name}>
            {i === 1 && <span className="popular">Most popular</span>}
            <span className="package-index">0{i + 1}</span>
            <h3>{pkg.name}</h3>
            <strong>{pkg.price}</strong>
            <span className="package-focus">{pkg.focus}</span>
            <ul>
              {pkg.items.map((item) => (
                <li key={item}><Check size={13} />{item}</li>
              ))}
            </ul>
            <BookingButton label="Continue to client form" variant="text" />
            <small>You will select your package in the client assessment form.</small>
          </article>
        ))}
      </div>
    </section>
  );
}
