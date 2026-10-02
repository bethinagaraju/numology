import { BookingButton } from './BookingButton';

export function FinalCta() {
  return (
    <section className="py-[165px] px-[24px] text-center border-t border-gold relative max-sm:py-[120px]">
      <div className="text-bronze text-[14px] mb-[24px]">✦</div>
      <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5]">Begin with a question</span>
      <h2 className="text-[clamp(52px,7vw,100px)] tracking-[-0.03em] leading-[0.9] uppercase my-[25px] mb-[35px] max-sm:text-[45px] font-serif font-medium">What would you like<br /><em className="font-serif italic text-[#aa5637]">to understand better<span>?</span></em></h2>
      <BookingButton label="Book a personal session" />
      <p className="max-w-[320px] mx-auto mt-[28px] text-[11px] text-[#363637]">You'll be taken to our secure client assessment form to share your details and select your package.</p>
    </section>
  );
}
