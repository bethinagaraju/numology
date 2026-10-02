import { ArrowUpRight } from 'lucide-react';

export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe2sdjqQmIRoOmozAKSu1s9zF08a3-gqtbXuXesWd7UMfckmg/viewform';

type BookingButtonProps = { label?: string; variant?: 'solid' | 'outline' | 'text'; className?: string };

export function BookingButton({ label = 'Book a session', variant = 'solid', className = '' }: BookingButtonProps) {
  const base = 'inline-flex items-center justify-center gap-[12px] text-[12px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px]';
  const solid = 'min-h-[60px] px-[20px] border border-transparent bg-[#a88143] text-ivory';
  const outline = 'min-h-[60px] px-[20px] border border-muted-gold text-brown hover:bg-champagne';
  const text = 'px-0 pb-[7px] border-b border-muted-gold text-[#a88143]';
  const styles = variant === 'solid' ? solid : variant === 'outline' ? outline : text;
  return <a className={`${base} ${styles} ${className}`} href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"><span>{label}</span><ArrowUpRight size={15} strokeWidth={1.5} /></a>;
}
