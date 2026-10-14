type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, text, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <div className={`max-w-[720px] ${alignClass}`}>
      <span className="block text-[#C5934D] uppercase tracking-[0.22em] text-[11px] sm:text-[13px] md:text-sm font-semibold leading-[1.5]">
        {eyebrow}
      </span>
      <h2 className="my-3 sm:my-4 md:my-[18px] text-[30px] xs:text-[36px] sm:text-[46px] md:text-[62px] lg:text-[76px] text-[#87533E] tracking-[-0.035em] sm:tracking-[-0.04em] leading-[1.05] sm:leading-[0.95] md:leading-[0.88] uppercase font-serif font-medium break-words">
        {title}
      </h2>
      {text && (
        <p className="text-[#363637]/85 text-[13px] sm:text-[14px] max-w-[610px] leading-[1.65] sm:leading-[1.7]">
          {text}
        </p>
      )}
    </div>
  );
}
