import { BookingButton } from './BookingButton';

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-ornament">✦</div>
      <span className="eyebrow">Begin with a question</span>
      <h2>What would you like<br /><em>to understand better?</em></h2>
      <BookingButton label="Book a personal session" />
      <p>You'll be taken to our secure client assessment form to share your details and select your package.</p>
    </section>
  );
}
