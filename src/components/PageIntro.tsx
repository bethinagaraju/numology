type PageIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  return (
    <section className="max-w-[1080px] pt-[130px] xs:pt-[145px] sm:pt-[175px] md:pt-[205px] pb-10 sm:pb-16 md:pb-[90px] px-5 xs:px-6 sm:px-10 md:px-[clamp(24px,7vw,120px)]">
      {/* Eyebrow */}
      <span className="block text-[#c4924d] uppercase tracking-[0.20em] sm:tracking-[0.25em] text-[11px] xs:text-[12px] sm:text-[13px] md:text-sm font-semibold sm:font-medium leading-[1.5]">
        {eyebrow}
      </span>

      {/* Main Title - Responsive fluid typography that never clips on mobile */}
      <h1 className="font-serif font-medium text-[#87533E] uppercase text-[32px] xs:text-[40px] sm:text-[54px] md:text-[74px] lg:text-[96px] xl:text-[108px] leading-[1.02] sm:leading-[0.92] md:leading-[0.84] tracking-[-0.03em] sm:tracking-[-0.045em] max-w-[1000px] my-4 sm:my-6 break-words">
        {title}
      </h1>

      {/* Description */}
      <p className="max-w-[610px] text-[#363637]/85 text-[13px] sm:text-[14px] md:text-[15px] leading-[1.65] sm:leading-[1.7]">
        {text}
      </p>
    </section>
  );
}
