import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    text: "A beautiful space to slow down, ask better questions and see familiar patterns from a different angle.",
    author: "Elena R.",
    type: "Personal Numerology"
  },
  {
    text: "It gave me the clarity I was looking for during a difficult transition period in my career.",
    author: "James T.",
    type: "Career Reading"
  },
  {
    text: "The insights provided were startlingly accurate. I finally understand the recurring themes in my life.",
    author: "Sarah M.",
    type: "Life Path Analysis"
  },
  {
    text: "Changing the vibration of my name shifted my entire perspective. A truly transformative process.",
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
    text: "The remedies suggested were simple yet profound. I've noticed a real shift in my daily energy.",
    author: "Anita V.",
    type: "Remedies & Guidance"
  },
  {
    text: "Understanding my personal year number helped me stop fighting against the current and start flowing.",
    author: "Marcus J.",
    type: "Yearly Forecast"
  }
];

export function StoriesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="pt-[130px] pb-[150px] border-t border-[#C5A267]/30 max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)] max-md:py-[100px] overflow-hidden">
      <div className="grid grid-cols-[0.3fr_1.5fr_0.5fr] gap-[8%] items-start max-md:grid-cols-1 max-md:gap-[50px]">

        {/* Giant Quote */}
        <div className="font-serif text-[150px] leading-[0.6] text-bronze/40 pt-[40px] select-none">
          “
        </div>

        {/* Carousel Content */}
        <div className="relative flex flex-col justify-between">
          <div>
            <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5]">
              Stories from the other side
            </span>

            <div className="mt-[25px] mb-[35px] min-h-[220px] md:min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <blockquote className="font-serif font-medium text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-brown max-w-[780px]">
                    “{reviews[currentIndex].text}”
                  </blockquote>
                  <p className="text-[#765a40] text-[11px] uppercase tracking-[0.12em] mt-[30px]">
                    {reviews[currentIndex].author} · {reviews[currentIndex].type}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <Link className="inline-flex items-center justify-center gap-[12px] text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px] px-0 pb-[7px] border-b border-muted-gold text-brown hover:text-bronze" to="/stories">
              Read client stories <ArrowRight size={15} />
            </Link>

            {/* Mobile Navigation */}
            <div className="flex gap-4 md:hidden">
              <button onClick={prevSlide} className="text-bronze hover:text-brown transition-colors">
                <ArrowLeft size={22} strokeWidth={1.5} />
              </button>
              <button onClick={nextSlide} className="text-bronze hover:text-brown transition-colors">
                <ArrowRight size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Counter and Desktop Navigation */}
        <div className="text-right tracking-[0.15em] max-md:hidden">
          <div className="flex items-center justify-end gap-5 mb-[30px] text-bronze">
            <button onClick={prevSlide} className="hover:text-brown transition-colors">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button onClick={nextSlide} className="hover:text-brown transition-colors">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
          <div className="text-[10px] text-bronze">
            <span className="font-serif text-[20px] text-brown">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="mx-2">/</span>
            <span>{String(reviews.length).padStart(2, '0')}</span>
          </div>
          <div className="h-[120px] w-[1px] bg-gradient-to-b from-muted-gold to-transparent ml-auto mt-[20px]" />
        </div>

      </div>
    </section>
  );
}
