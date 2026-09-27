import { ArrowUpRight } from 'lucide-react';

export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe2sdjqQmIRoOmozAKSu1s9zF08a3-gqtbXuXesWd7UMfckmg/viewform';

type BookingButtonProps = { label?: string; variant?: 'solid' | 'outline' | 'text'; className?: string };

export function BookingButton({ label = 'Book a session', variant = 'solid', className = '' }: BookingButtonProps) {
  const styles = variant === 'solid' ? 'button-gold' : variant === 'outline' ? 'button-outline' : 'button-text';
  return <a className={`${styles} ${className}`} href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer"><span>{label}</span><ArrowUpRight size={15} strokeWidth={1.5} /></a>;
}
