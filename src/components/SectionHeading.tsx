type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, text, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <div className={`max-w-[680px] ${alignClass}`}>
      <span className="block text-[#c5a163] uppercase tracking-[0.23em] text-2xl leading-[1.5] font-bold">{eyebrow}</span>
      <h2 className="my-[18px] text-[clamp(50px,6vw,82px)] text-dark max-sm:text-[48px] tracking-[-0.04em] leading-[0.88] uppercase font-serif font-medium">{title}</h2>
      {text && <p className="text-black text-[14px] max-w-[610px] leading-[1.7]">{text}</p>}
    </div>
  );
}
