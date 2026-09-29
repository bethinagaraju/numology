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
      <section className="pb-[140px] grid grid-cols-2 max-md:grid-cols-1 gap-[8%] max-md:gap-[55px] items-start max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div>
          <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5]">Connect</span>
          {contactChannels.map(([label, detail, iconKey]) => {
            const Icon = iconMap[iconKey];
            return (
              <div className="flex gap-[20px] items-center border-b border-gold py-[25px]" key={label}>
                <Icon size={18} className="text-bronze" />
                <div>
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.12em] text-muted-gold m-0 mb-[5px] font-normal">{label}</h3>
                  <p className="m-0 font-serif text-[22px] leading-none">{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-cream border border-gold p-[40px] max-sm:px-[20px] max-sm:py-[30px]">
          <span className="text-bronze font-serif text-[50px] leading-[0.5] block mb-[20px]">∴</span>
          <h2 className="font-serif font-medium text-[42px] leading-[0.95] max-w-[240px]">There is no wrong place to begin.</h2>
          <p className="text-[#765a40] text-[13px] my-[20px] mb-[35px] leading-[1.6]">Tell us what you are curious about, and select the session that feels right inside the client form.</p>
          <BookingButton label="Open client assessment form" />
        </div>
      </section>
    </>
  );
}
