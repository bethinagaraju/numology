import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUpRight, X } from 'lucide-react';
import { whatsappContacts } from '@/data/siteData';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto">
      {/* Popover Card for choosing between UAE and India numbers */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="
              absolute
              bottom-[68px]
              right-0
              w-[290px]
              sm:w-[320px]
              rounded-2xl
              bg-[#FEFCF8]
              border
              border-[#CDA66F]/40
              shadow-[0_12px_40px_rgba(43,33,27,0.18)]
              overflow-hidden
              p-4
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#CDA66F]/25">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-serif text-[15px] font-medium text-[#2B211B]">
                  Chat on WhatsApp
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-black/5 flex items-center justify-center text-[#87533E] transition-colors"
                aria-label="Close WhatsApp options"
              >
                <X size={15} />
              </button>
            </div>

            <p className="text-[11px] text-[#363637]/75 mt-2 mb-3 leading-relaxed">
              Connect directly with Namrattaa Lal for inquiries or consultation bookings. Select your preferred number:
            </p>

            {/* List of direct WhatsApp numbers */}
            <div className="space-y-2">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.cleanNumber}
                  href={contact.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    p-2.5
                    rounded-xl
                    border
                    border-[#25D366]/30
                    bg-[#F6FBF7]
                    hover:border-[#25D366]
                    hover:bg-[#EDF8F0]
                    transition-all
                    duration-200
                    group
                  "
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-xl shrink-0" aria-hidden="true">
                      {contact.flag}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] uppercase font-semibold text-[#1E7E34] tracking-wider">
                          {contact.country}
                        </span>
                        <span className="text-[9px] text-[#777] font-mono">
                          ({contact.intlFormat.split('-')[0]})
                        </span>
                      </div>
                      <div className="font-serif text-[15px] text-[#2B211B] group-hover:text-[#1E7E34] transition-colors font-medium truncate">
                        {contact.display}
                      </div>
                    </div>
                  </div>

                  <span className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110">
                    <ArrowUpRight size={14} strokeWidth={2.2} />
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-3 pt-2 text-center border-t border-[#CDA66F]/15">
              <span className="text-[9px] uppercase tracking-[0.18em] text-[#C5934D]">
                The Golden Numeralist • Online Sessions
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.aside
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center group"
      >
        {/* Tooltip on hover (desktop) when popup is closed */}
        {!isOpen && (
          <span
            className="
              hidden
              sm:inline-block
              mr-3
              px-3.5
              py-1.5
              rounded-full
              bg-[#FEFCF8]
              text-[#363637]
              border
              border-[#CDA66F]/40
              shadow-[0_4px_16px_rgba(0,0,0,0.08)]
              font-sans
              text-[11px]
              font-medium
              tracking-wider
              opacity-0
              group-hover:opacity-100
              translate-x-2
              group-hover:translate-x-0
              transition-all
              duration-300
              pointer-events-none
              whitespace-nowrap
            "
          >
            Chat on WhatsApp
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Direct WhatsApp contact options"
          className="
            relative
            flex
            items-center
            justify-center
            w-[52px]
            h-[52px]
            sm:w-[58px]
            sm:h-[58px]
            rounded-full
            bg-[#25D366]
            text-white
            shadow-[0_6px_22px_rgba(37,211,102,0.42)]
            hover:shadow-[0_8px_28px_rgba(37,211,102,0.55)]
            transition-all
            duration-300
            hover:scale-108
            active:scale-95
            cursor-pointer
          "
        >
          {/* Subtle breathing radar ring */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-[#25D366]
              opacity-30
              animate-ping
              pointer-events-none
            "
          />

          {/* WhatsApp Vector Icon or Close Icon */}
          {isOpen ? (
            <X size={26} strokeWidth={2.4} className="relative z-10" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="30"
              height="30"
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform duration-300 group-hover:scale-105"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}
        </button>
      </motion.aside>
    </div>
  );
}
