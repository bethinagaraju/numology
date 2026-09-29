import { PageIntro } from '@/components/PageIntro';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    text: "A beautiful space to slow down, ask better questions and see familiar patterns from a different angle.",
    author: "Elena R.",
    type: "Personal Numerology"
  },
  {
    text: "It gave me the clarity I was looking for during a difficult transition period in my career. Highly recommend this experience.",
    author: "James T.",
    type: "Career Reading"
  },
  {
    text: "The insights provided were startlingly accurate. I finally understand the recurring themes in my life.",
    author: "Sarah M.",
    type: "Life Path Analysis"
  },
  {
    text: "Changing the vibration of my name shifted my entire perspective. A truly transformative and guiding process.",
    author: "Michael K.",
    type: "Name Numerology"
  },
  {
    text: "I was skeptical at first, but the Lo Shu Grid reading highlighted strengths I didn't even realize I had.",
    author: "Priya S.",
    type: "Lo Shu Grid Analysis"
  },
  {
    text: "Such a calming and validating session. It felt like someone finally handed me the map to my own life.",
    author: "David L.",
    type: "Comprehensive Report"
  },
  {
    text: "The remedies suggested were simple yet profound. I've noticed a real shift in my daily energy and focus.",
    author: "Anita V.",
    type: "Remedies & Guidance"
  },
  {
    text: "Understanding my personal year number helped me stop fighting against the current and start flowing with it.",
    author: "Marcus J.",
    type: "Yearly Forecast"
  }
];

export function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scroll by the exact width of the container for a clean page turn effect
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <PageIntro 
        eyebrow="Stories" 
        title="Client Stories" 
        text="A beautiful space to slow down, ask better questions and see familiar patterns from a different angle." 
      />
      <section className="pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
        
        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-[30px] md:gap-[40px] pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={i} 
                className="flex-none w-full md:w-[calc(50%-20px)] snap-start border border-[#C5A267]/30 bg-[#FBF7ED] p-[40px] md:p-[50px] transition-all duration-500 hover:border-[#A98243]/80 hover:shadow-[0_15px_40px_rgba(76,54,30,0.08)] hover:-translate-y-2 flex flex-col justify-between"
              >
                <blockquote className="font-serif font-normal italic text-[22px] md:text-[26px] leading-[1.4] mb-[40px] text-[#3A2A20]">
                  “{review.text}”
                </blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-px flex-1 bg-[#C5A267]/30" />
                  <p className="text-[#A98243] font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
                    {review.author} <span className="mx-2 text-[#C5A267]/50">|</span> {review.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between md:justify-end gap-4 mt-10 border-t border-[#C5A267]/20 pt-8">
            <span className="text-[12px] uppercase tracking-[0.2em] text-[#8F6B36] md:hidden">Swipe to explore</span>
            
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A267]/50 bg-[#F8F3E8] text-[#A98243] transition-all duration-300 hover:bg-[#A98243] hover:text-[#F8F3E8] hover:scale-105"
                aria-label="Previous story"
              >
                <ArrowLeft size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A267]/50 bg-[#F8F3E8] text-[#A98243] transition-all duration-300 hover:bg-[#A98243] hover:text-[#F8F3E8] hover:scale-105"
                aria-label="Next story"
              >
                <ArrowRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
