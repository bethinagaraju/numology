import { OrnamentalDivider } from './OrnamentalDivider';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="max-w-[1080px] pt-[205px] px-[clamp(24px,9vw,145px)] pb-[100px] max-sm:pt-[145px] max-sm:pb-[65px]">
      <span className="block text-[#c4924d] uppercase tracking-[0.23em] text-lg leading-[1.5]">{eyebrow}</span>
      <h1 className="text-[clamp(63px,8vw,120px)] leading-[0.82] tracking-[-0.05em] uppercase max-w-[1000px] my-[24px] max-sm:text-[59px] font-serif font-medium text-[#86533e]">{title}</h1>
      <p className="max-w-[610px] text-[#363637] text-[15px] leading-[1.7]">{text}</p>
      {/* <OrnamentalDivider /> */}
    </section>
  );
}
