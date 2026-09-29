import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingButton } from '@/components/BookingButton';
import { interests } from '@/data/siteData';

export function ExploreSection() {
  const [interest, setInterest] = useState('MYSELF');
  return (
    <section className="pt-[140px] pb-[140px] border-t border-gold grid grid-cols-2 max-md:grid-cols-1 gap-[10%] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
      <div className="col-span-2 max-md:col-span-1">
        <SectionHeading eyebrow="A question worth asking" title="What would you like to understand better?" />
      </div>
      <div className="flex flex-col border-t border-gold">
        {Object.keys(interests).map((item) => (
          <button className={`flex justify-between bg-transparent border-0 border-b border-gold py-[15px] text-left tracking-[0.12em] text-[11px] transition-all duration-200 ${interest === item ? 'text-bronze pl-[10px]' : 'text-brown hover:text-bronze hover:pl-[10px]'}`} key={item} onClick={() => setInterest(item)}>
            {item}<ArrowRight size={15} />
          </button>
        ))}
      </div>
      <div className="self-center border-l border-gold pl-[48px] max-md:mt-[25px]">
        <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5]">{interest}</span>
        <p className="font-serif font-medium text-[34px] leading-[1.05] my-[20px] mb-[30px] max-w-[430px]">{interests[interest]}</p>
        <BookingButton label="Explore this session" variant="text" />
      </div>
    </section>
  );
}
