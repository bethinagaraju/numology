import { Phone, Mail, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import founderImg from '@/assets/founder-2.png';

export function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Get in touch"
        title="Begin with a question."
        text="Online sessions and personalized numerology consultations are available. Reach out directly via mobile or email to schedule your session."
      />

      <section className="pb-[90px] md:pb-[110px] grid grid-cols-2 max-md:grid-cols-1 gap-[6%] max-md:gap-[40px] items-center max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        {/* =====================================================
            COLUMN 1: FOUNDER IMAGE (founder-2.png)
            ===================================================== */}
        <div className="relative group max-w-[460px] mx-auto w-full">
          <div className="relative overflow-hidden border border-[#CDA66F]/50 bg-[#FEFCF8] p-2.5 shadow-[0_12px_36px_rgba(197,147,77,0.08)] transition-all duration-500 hover:border-[#C5934D]/80">
            {/* Image container */}
            <div className="relative overflow-hidden aspect-[3/4] max-h-[450px] w-full bg-[#F4EFE9]">
              <img
                src={founderImg}
                alt="Namrattaa Lal - The Golden Numeralist"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Subtle caption */}
            <div className="pt-3 pb-1 text-center">
              <h3 className="font-serif text-4xl text-[#2B211B] leading-tight">
                Namrattaa Lal
              </h3>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#C5934D] font-medium mt-0.5 block">
                The Golden Numeralist
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            COLUMN 2: CONTACT DETAILS (MOBILE & EMAIL)
            ===================================================== */}
        <div className="bg-[#FEFCF8] border border-[#CDA66F]/50 p-[30px] md:p-[38px] max-sm:px-[20px] max-sm:py-[26px] shadow-[0_12px_36px_rgba(197,147,77,0.06)]">
          <span className="text-[#87533E] font-serif text-[38px] leading-[0.5] block mb-[12px]">∴</span>

          <h2 className="font-serif font-medium text-[30px] md:text-[34px] leading-[1.1] text-[#2B211B] mb-[12px]">
            There is no wrong place to begin.
          </h2>

          <p className="text-[#363637]/80 text-[13px] leading-[1.65] mb-[22px]">
            Connect directly with Namrattaa to inquire about sessions, discuss your numbers, or book your personalized consultation.
          </p>

          {/* Contact Methods List */}
          <div className="space-y-2.5 border-t border-[#CDA66F]/25 pt-4">
            {/* Mobile / Phone */}
            <a
              href="tel:+971585636156"
              className="flex items-center gap-3.5 p-3 md:p-3.5 rounded-[12px] border border-[#CDA66F]/30 bg-[#FDFBF7] transition-all duration-300 hover:border-[#C5934D] hover:shadow-[0_4px_15px_rgba(197,147,77,0.08)] group"
            >
              <div className="w-9 h-9 rounded-full border border-[#CDA66F]/50 flex items-center justify-center text-[#87533E] bg-[#FEFCF8] transition-colors group-hover:bg-[#87533E] group-hover:text-[#FDFBF7] shrink-0">
                <Phone size={16} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#C5934D] font-semibold block leading-tight">
                  Direct Call / Mobile
                </span>
                <span className="font-serif text-[17px] md:text-[18px] text-[#2B211B] group-hover:text-[#87533E] transition-colors block truncate">
                  +971 58 563 6156
                </span>
              </div>
              <ArrowUpRight size={15} className="text-[#C5934D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>

            {/* Email Address */}
            <a
              href="mailto:Namrata.lal123@gmail.com"
              className="flex items-center gap-3.5 p-3 md:p-3.5 rounded-[12px] border border-[#CDA66F]/30 bg-[#FDFBF7] transition-all duration-300 hover:border-[#C5934D] hover:shadow-[0_4px_15px_rgba(197,147,77,0.08)] group"
            >
              <div className="w-9 h-9 rounded-full border border-[#CDA66F]/50 flex items-center justify-center text-[#87533E] bg-[#FEFCF8] transition-colors group-hover:bg-[#87533E] group-hover:text-[#FDFBF7] shrink-0">
                <Mail size={16} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#C5934D] font-semibold block leading-tight">
                  Email Address
                </span>
                <span className="font-serif text-[17px] md:text-[18px] text-[#2B211B] group-hover:text-[#87533E] transition-colors block truncate">
                  Namrata.lal123@gmail.com
                </span>
              </div>
              <ArrowUpRight size={15} className="text-[#C5934D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/971585636156"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3 md:p-3.5 rounded-[12px] border border-[#CDA66F]/30 bg-[#FDFBF7] transition-all duration-300 hover:border-[#C5934D] hover:shadow-[0_4px_15px_rgba(197,147,77,0.08)] group"
            >
              <div className="w-9 h-9 rounded-full border border-[#CDA66F]/50 flex items-center justify-center text-[#87533E] bg-[#FEFCF8] transition-colors group-hover:bg-[#87533E] group-hover:text-[#FDFBF7] shrink-0">
                <MessageCircle size={16} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#C5934D] font-semibold block leading-tight">
                  WhatsApp Direct
                </span>
                <span className="font-serif text-[17px] md:text-[18px] text-[#2B211B] group-hover:text-[#87533E] transition-colors block truncate">
                  Chat on WhatsApp (+971 58 563 6156)
                </span>
              </div>
              <ArrowUpRight size={15} className="text-[#C5934D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-5 pt-4 border-t border-[#CDA66F]/25 flex items-center justify-between text-[11px] text-[#363637]/75">
            <span className="uppercase tracking-[0.14em] text-[9px] text-[#C5934D] font-medium">Follow</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/thegoldennumeralist009?vrfl=MXQ2MGxuczJmZWg0MA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-[#87533E]"
              >
                <Instagram size={13} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
