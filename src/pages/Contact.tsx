import { Instagram, Play, Youtube } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { BookingButton } from '@/components/BookingButton';
import { contactChannels } from '@/data/siteData';

const iconMap: Record<string, typeof Instagram> = {
  Instagram,
  Youtube,
  Play,
};

export function Contact() {
  return (
    <>
      <PageIntro eyebrow="Get in touch" title="Begin with a question." text="Online sessions are available. For bookings, share your details through the client assessment form." />
      <section className="contact-grid section-shell">
        <div>
          <span className="eyebrow">Connect</span>
          {contactChannels.map(([label, detail, iconKey]) => {
            const Icon = iconMap[iconKey];
            return (
              <div className="contact-line" key={label}>
                <Icon size={18} />
                <div>
                  <h3>{label}</h3>
                  <p>{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="contact-note">
          <span className="large-mark">∴</span>
          <h2>There is no wrong place to begin.</h2>
          <p>Tell us what you are curious about, and select the session that feels right inside the client form.</p>
          <BookingButton label="Open client assessment form" />
        </div>
      </section>
    </>
  );
}
