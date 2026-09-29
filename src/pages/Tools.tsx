import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import { NumberRing } from '@/components/NumberRing';
import { toolMeta } from '@/data/siteData';

export function Tools() {
  return (
    <>
      <PageIntro eyebrow="Interactive tools" title="Explore your numbers." text="Use these interactive tools to explore traditional numerology calculations. Each result is a prompt for reflection, not a promise about the future." />
      <section className="pb-[140px] grid grid-cols-2 max-md:grid-cols-1 gap-[40px] max-md:gap-[30px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        {Object.entries(toolMeta).map(([slug, tool], i) => (
          <Link to={`/numerology-tools/${slug}`} className="relative border-t border-gold pt-[50px] px-0 pb-[30px] flex flex-col items-center text-center bg-transparent transition-all duration-300 hover:bg-[rgba(242,231,213,0.4)] hover:-translate-y-[5px] [&>div]:!w-[90px] [&>div]:!h-[90px] [&>div]:!basis-[90px] [&>div]:!border-[rgba(183,153,111,0.4)]" key={slug}>
            <span className="absolute top-[15px] left-[15px] text-bronze text-[10px] font-semibold">0{i + 1}</span>
            <NumberRing number={i + 1} />
            <h2 className="font-serif font-medium text-[38px] leading-none my-[35px] mb-[15px]">{tool.title}</h2>
            <p className="text-[#765a40] text-[13px] max-w-[320px] leading-[1.6] mb-[30px] flex-1">{tool.description}</p>
            <b className="flex items-center gap-[8px] text-[10px] font-semibold uppercase tracking-[0.12em] text-bronze">Calculate <ArrowRight size={14} /></b>
          </Link>
        ))}
      </section>
    </>
  );
}
