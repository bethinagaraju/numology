import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingButton } from '@/components/BookingButton';
import { packageData } from '@/data/siteData';

export function Packages() {
  return (
    <section className="pt-[140px] pb-[145px] border-t border-gold max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
      <SectionHeading eyebrow="Signature sessions" title="Choose your journey." text="Three ways to begin. Select your package inside the client assessment form after following the button below." align="center" />
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-[18px] mt-[70px]">
        {packageData.map((pkg, i) => (
          <article className={`border border-gold p-[30px] min-h-[430px] flex flex-col relative bg-[rgba(242,231,213,0.3)] max-sm:min-h-[390px] ${i === 1 ? 'bg-cream border-bronze -translate-y-[15px] max-sm:translate-y-0' : ''}`} key={pkg.name}>
            {i === 1 && <span className="absolute top-0 right-0 bg-bronze text-ivory px-[12px] py-[8px] uppercase text-[8px] tracking-[0.14em]">Most popular</span>}
            <span className="text-bronze text-[10px] tracking-[0.15em]">0{i + 1}</span>
            <h3 className="font-serif font-medium text-[37px] leading-[0.95] mt-[40px] mb-[15px]">{pkg.name}</h3>
            <strong className="font-serif font-medium text-[31px]">{pkg.price}</strong>
            <span className="text-bronze text-[10px] uppercase tracking-[0.12em] my-[12px] mb-[22px]">{pkg.focus}</span>
            <ul className="list-none py-[15px] m-0 border-t border-gold flex-1">
              {pkg.items.map((item) => (
                <li key={item} className="flex items-center gap-[8px] text-[11px] py-[7px]"><Check size={13} className="text-bronze" />{item}</li>
              ))}
            </ul>
            <BookingButton label="Continue to client form" variant="text" />
            <small className="mt-[18px] text-muted-gold text-[9px] leading-[1.5]">You will select your package in the client assessment form.</small>
          </article>
        ))}
      </div>
    </section>
  );
}
