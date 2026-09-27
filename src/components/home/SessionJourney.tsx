import { SectionHeading } from '@/components/SectionHeading';
import { journeySteps } from '@/data/siteData';

export function SessionJourney() {
  return (
    <section className="journey-section section-shell">
      <SectionHeading eyebrow="The experience" title="Your session, reimagined." text="A thoughtful process, from first detail to the insight you take with you." align="center" />
      <div className="timeline">
        {journeySteps.map((item, i) => (
          <div className="timeline-step" key={item.step}>
            <span>0{i + 1}</span>
            <i />
            <h3>{item.step}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
