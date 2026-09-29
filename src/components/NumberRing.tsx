type NumberRingProps = {
  number: number | string;
  label?: string;
  small?: boolean;
};

export function NumberRing({ number, label, small }: NumberRingProps) {
  const containerSize = small ? 'w-[80px] h-[80px] basis-[80px] max-sm:w-[70px] max-sm:h-[70px] max-sm:basis-[70px]' : 'w-[130px] h-[130px] basis-[130px] max-sm:w-[110px] max-sm:h-[110px] max-sm:basis-[110px]';
  const textSize = small ? 'text-[36px]' : 'text-[64px]';
  const labelSize = small ? 'text-[7px] mt-[8px]' : 'text-[8px] mt-[17px]';
  const insetMain = small ? 'inset-[4px]' : 'inset-[8px]';
  const insetDashed = small ? 'inset-[-4px]' : 'inset-[-8px]';

  return (
    <div className={`relative flex-none border border-[#2e1b0b] rounded-full flex flex-col items-center justify-center ${containerSize}`}>
      <div className={`absolute border border-[#2e1b0b] rounded-full ${insetMain}`} />
      <div className={`absolute border border-[#2e1b0b] rounded-full ${insetDashed} border-dashed opacity-70`} />
      <strong className={`${textSize} leading-[0.75] font-serif font-medium text-[#2e1b0b]`}>{number}</strong>
      {label && <small className={`text-[#2e1b0b] tracking-[0.14em] ${labelSize}`}>{label}</small>}
    </div>
  );
}
