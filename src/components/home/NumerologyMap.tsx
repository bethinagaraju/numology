import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingButton } from '@/components/BookingButton';
import { mapItems } from '@/data/siteData';

export function NumerologyMap() {
  const [selectedMap, setSelectedMap] = useState(mapItems[0]);

  const pointPositions = [
    'top-0 left-[41%]',
    'top-[17%] right-[7%]',
    'bottom-[14%] right-[6%]',
    'bottom-[2%] left-[37%]',
    'top-[20%] left-[6%]',
  ];

  return (
    <section className="pt-[126px] pb-[138px] border-t border-gold max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
      <SectionHeading eyebrow="A closer look" title="The numerology map." text="Each number offers a different lens. Select a point on the map to explore what it traditionally represents." align="center" />
      <div className="grid grid-cols-[1.1fr_0.9fr] max-md:grid-cols-1 items-center gap-[10%] mt-[70px]">
        <div className="relative w-[min(100%,500px)] max-sm:w-[94vw] aspect-square border border-gold rounded-full mx-auto before:content-[''] before:absolute before:inset-[12%] before:border before:border-[rgba(183,153,111,0.45)] before:rounded-full after:content-[''] after:absolute after:inset-[31%] after:border after:border-dashed after:border-[rgba(183,153,111,0.45)] after:rounded-full">
          <div className="absolute inset-[20%] bg-[linear-gradient(45deg,transparent_49.8%,var(--gold)_50%,transparent_50.2%),linear-gradient(-45deg,transparent_49.8%,var(--gold)_50%,transparent_50.2%)] opacity-60" />
          <div className="absolute z-[1] w-[30%] aspect-square rounded-full border border-bronze bg-ivory top-[35%] left-[35%] flex flex-col justify-center text-center text-[8px] tracking-[0.15em] leading-[1.2]">YOUR<br /><strong className="font-serif font-medium text-[19px] tracking-normal">NUMBERS</strong></div>
          {mapItems.map((item, index) => {
            const isActive = selectedMap.label === item.label;
            return (
              <button key={item.label} className={`absolute z-[2] bg-ivory border-0 text-[9px] tracking-[0.13em] px-[7px] py-[4px] max-sm:text-[7px] ${pointPositions[index]} ${isActive ? 'text-bronze' : 'text-brown'}`} onClick={() => setSelectedMap(item)}>
                <span className={`block border border-muted-gold rounded-full w-[26px] h-[26px] pt-[7px] mx-auto mb-[6px] font-serif font-medium text-[16px] max-sm:w-[21px] max-sm:h-[21px] max-sm:pt-[5px] max-sm:text-[13px] ${isActive ? 'bg-bronze text-ivory' : ''}`}>{index + 1}</span>{item.label}
              </button>
            );
          })}
        </div>
        <div className="border-l border-gold pl-[48px] max-md:mt-[15px] max-sm:pl-[25px]">
          <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5]">{selectedMap.label}</span>
          <h3 className="font-serif font-medium text-[44px] leading-[0.95] my-[17px]">{selectedMap.text.split('.')[0]}.</h3>
          <p className="max-w-[380px] text-[#363637] text-[13px]">{selectedMap.text}</p>
          <dl className="border-t border-gold my-[30px]">
            <div className="flex justify-between border-b border-gold py-[15px] gap-[20px]"><dt className="text-muted-gold text-[10px] uppercase tracking-[0.1em]">Traditionally calculated from</dt><dd className="m-0 text-[11px] text-right">{selectedMap.calc}</dd></div>
            <div className="flex justify-between border-b border-gold py-[15px] gap-[20px]"><dt className="text-muted-gold text-[10px] uppercase tracking-[0.1em]">Relevant consultation</dt><dd className="m-0 text-[11px] text-right">{selectedMap.session}</dd></div>
          </dl>
          <BookingButton label="Explore this session" variant="outline" />
        </div>
      </div>
    </section>
  );
}
