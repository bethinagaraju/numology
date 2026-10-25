import { Phone, Mail, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/PageIntro';
import founderImg from '@/assets/founder-2.jpg';

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
          <div className="space-y-3 border-t border-[#CDA66F]/25 pt-4">
            {/* WhatsApp Direct - UAE */}
            <a
              href="https://wa.me/971585636156?text=Hello%20Namrattaa%2C%20I%20would%20like%20to%20inquire%20about%20a%20numerology%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3 md:p-3.5 rounded-[12px] border border-[#25D366]/40 bg-[#F6FBF7] transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_4px_18px_rgba(37,211,102,0.12)] group"
            >
              <div className="w-10 h-10 rounded-full border border-[#25D366]/50 flex items-center justify-center text-white bg-[#25D366] transition-transform group-hover:scale-105 shrink-0 shadow-sm">
                <MessageCircle size={18} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#1E7E34] font-semibold block leading-tight">
                    WhatsApp (UAE & Intl)
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#25D366]/15 text-[#1b6b2c] font-medium">
                    🇦🇪 00971
                  </span>
                </div>
                <span className="font-serif text-[17px] md:text-[18px] text-[#2B211B] group-hover:text-[#1E7E34] transition-colors block truncate font-medium">
                  +971 58 563 6156
                </span>
                <span className="text-[11px] text-[#666] block">
                  Click to chat directly on WhatsApp
                </span>
              </div>
              <ArrowUpRight size={16} className="text-[#1E7E34] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>

            {/* WhatsApp Direct - India */}
            <a
              href="https://wa.me/919810789604?text=Hello%20Namrattaa%2C%20I%20would%20like%20to%20inquire%20about%20a%20numerology%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3 md:p-3.5 rounded-[12px] border border-[#25D366]/40 bg-[#F6FBF7] transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_4px_18px_rgba(37,211,102,0.12)] group"
            >
              <div className="w-10 h-10 rounded-full border border-[#25D366]/50 flex items-center justify-center text-white bg-[#25D366] transition-transform group-hover:scale-105 shrink-0 shadow-sm">
                <MessageCircle size={18} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#1E7E34] font-semibold block leading-tight">
                    WhatsApp (India)
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#25D366]/15 text-[#1b6b2c] font-medium">
                    🇮🇳 0091
                  </span>
                </div>
                <span className="font-serif text-[17px] md:text-[18px] text-[#2B211B] group-hover:text-[#1E7E34] transition-colors block truncate font-medium">
                  +91 98107 89604
                </span>
                <span className="text-[11px] text-[#666] block">
                  Click to chat directly on WhatsApp
                </span>
              </div>
              <ArrowUpRight size={16} className="text-[#1E7E34] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>

            {/* Direct Call / Mobile Numbers */}
            {/* <div className="p-3 md:p-3.5 rounded-[12px] border border-[#CDA66F]/30 bg-[#FDFBF7]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full border border-[#CDA66F]/50 flex items-center justify-center text-[#87533E] bg-[#FEFCF8] shrink-0">
                  <Phone size={13} strokeWidth={1.5} />
                </div>
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#C5934D] font-semibold block leading-tight">
                  Direct Phone Call
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-9">
                <a
                  href="tel:+971585636156"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#FEFCF8] border border-[#CDA66F]/20 text-[#2B211B] hover:text-[#87533E] hover:border-[#87533E]/40 transition-colors text-[13px] font-serif"
                >
                  <span>🇦🇪 +971 58 563 6156</span>
                  <ArrowUpRight size={12} className="text-[#C5934D]" />
                </a>
                <a
                  href="tel:+919810789604"
                  className="flex items-center justify-between p-2 rounded-lg bg-[#FEFCF8] border border-[#CDA66F]/20 text-[#2B211B] hover:text-[#87533E] hover:border-[#87533E]/40 transition-colors text-[13px] font-serif"
                >
                  <span>🇮🇳 +91 98107 89604</span>
                  <ArrowUpRight size={12} className="text-[#C5934D]" />
                </a>
              </div>
            </div> */}

            {/* Email Address */}
            <a
              href="mailto:Info@Namrattaa.com"
              className="flex items-center gap-3.5 p-3 md:p-3.5 rounded-[12px] border border-[#CDA66F]/30 bg-[#FDFBF7] transition-all duration-300 hover:border-[#C5934D] hover:shadow-[0_4px_15px_rgba(197,147,77,0.08)] group"
            >
              <div className="w-9 h-9 rounded-full border border-[#CDA66F]/50 flex items-center justify-center text-[#87533E] bg-[#FEFCF8] transition-colors group-hover:bg-[#87533E] group-hover:text-[#FDFBF7] shrink-0">
                <Mail size={16} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#C5934D] font-semibold block leading-tight">
                  Email Address
                </span>
                <span className="font-serif text-[16px] md:text-[17px] text-[#2B211B] group-hover:text-[#87533E] transition-colors block truncate">
                  Info@Namrattaa.com
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
