// // import { PageIntro } from '@/components/PageIntro';
// // import { useRef } from 'react';
// // import { ArrowLeft, ArrowRight } from 'lucide-react';
// // import { motion } from 'framer-motion';

// // const reviews = [
// //   {
// //     text: "A beautiful space to slow down, ask better questions and see familiar patterns from a different angle.",
// //     author: "Elena R.",
// //     type: "Personal Numerology"
// //   },
// //   {
// //     text: "It gave me the clarity I was looking for during a difficult transition period in my career. Highly recommend this experience.",
// //     author: "James T.",
// //     type: "Career Reading"
// //   },
// //   {
// //     text: "The insights provided were startlingly accurate. I finally understand the recurring themes in my life.",
// //     author: "Sarah M.",
// //     type: "Life Path Analysis"
// //   },
// //   {
// //     text: "Changing the vibration of my name shifted my entire perspective. A truly transformative and guiding process.",
// //     author: "Michael K.",
// //     type: "Name Numerology"
// //   },
// //   {
// //     text: "I was skeptical at first, but the Lo Shu Grid reading highlighted strengths I didn't even realize I had.",
// //     author: "Priya S.",
// //     type: "Lo Shu Grid Analysis"
// //   },
// //   {
// //     text: "Such a calming and validating session. It felt like someone finally handed me the map to my own life.",
// //     author: "David L.",
// //     type: "Comprehensive Report"
// //   },
// //   {
// //     text: "The remedies suggested were simple yet profound. I've noticed a real shift in my daily energy and focus.",
// //     author: "Anita V.",
// //     type: "Remedies & Guidance"
// //   },
// //   {
// //     text: "Understanding my personal year number helped me stop fighting against the current and start flowing with it.",
// //     author: "Marcus J.",
// //     type: "Yearly Forecast"
// //   }
// // ];

// // export function Stories() {
// //   const scrollRef = useRef<HTMLDivElement>(null);

// //   const scroll = (direction: 'left' | 'right') => {
// //     if (scrollRef.current) {
// //       const { clientWidth } = scrollRef.current;
// //       // Scroll by the exact width of the container for a clean page turn effect
// //       const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
// //       scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// //     }
// //   };

// //   return (
// //     <>
// //       <PageIntro 
// //         eyebrow="Stories" 
// //         title="Client Stories" 
// //         text="A beautiful space to slow down, ask better questions and see familiar patterns from a different angle." 
// //       />
// //       <section className="pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">

// //         {/* Carousel Container */}
// //         <div className="relative">
// //           <div 
// //             ref={scrollRef}
// //             className="flex overflow-x-auto snap-x snap-mandatory gap-[30px] md:gap-[40px] pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
// //           >
// //             {reviews.map((review, i) => (
// //               <motion.div 
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 transition={{ duration: 0.6, delay: i * 0.1 }}
// //                 key={i} 
// //                 className="flex-none w-full md:w-[calc(50%-20px)] snap-start border border-[#C5A267]/30 bg-[#FBF7ED] p-[40px] md:p-[50px] transition-all duration-500 hover:border-[#A98243]/80 hover:shadow-[0_15px_40px_rgba(76,54,30,0.08)] hover:-translate-y-2 flex flex-col justify-between"
// //               >
// //                 <blockquote className="font-serif font-normal italic text-[22px] md:text-[26px] leading-[1.4] mb-[40px] text-[#3A2A20]">
// //                   “{review.text}”
// //                 </blockquote>
// //                 <div className="flex items-center gap-4 mt-auto">
// //                   <div className="h-px flex-1 bg-[#C5A267]/30" />
// //                   <p className="text-[#A98243] font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
// //                     {review.author} <span className="mx-2 text-[#C5A267]/50">|</span> {review.type}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* Navigation Buttons */}
// //           <div className="flex items-center justify-between md:justify-end gap-4 mt-10 border-t border-[#C5A267]/20 pt-8">
// //             <span className="text-[12px] uppercase tracking-[0.2em] text-[#8F6B36] md:hidden">Swipe to explore</span>

// //             <div className="flex gap-4">
// //               <button 
// //                 onClick={() => scroll('left')}
// //                 className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A267]/50 bg-[#F8F3E8] text-[#A98243] transition-all duration-300 hover:bg-[#A98243] hover:text-[#F8F3E8] hover:scale-105"
// //                 aria-label="Previous story"
// //               >
// //                 <ArrowLeft size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
// //               </button>
// //               <button 
// //                 onClick={() => scroll('right')}
// //                 className="group flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A267]/50 bg-[#F8F3E8] text-[#A98243] transition-all duration-300 hover:bg-[#A98243] hover:text-[#F8F3E8] hover:scale-105"
// //                 aria-label="Next story"
// //               >
// //                 <ArrowRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //       </section>
// //     </>
// //   );
// // }



// import { PageIntro } from '@/components/PageIntro';
// import { useRef } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const reviews = [
//   {
//     text: "A beautiful space to slow down, ask better questions and see familiar patterns from a different angle.",
//     author: "Elena R.",
//     type: "Personal Numerology",
//   },
//   {
//     text: "It gave me the clarity I was looking for during a difficult transition period in my career. Highly recommend this experience.",
//     author: "James T.",
//     type: "Career Reading",
//   },
//   {
//     text: "The insights provided were startlingly accurate. I finally understand the recurring themes in my life.",
//     author: "Sarah M.",
//     type: "Life Path Analysis",
//   },
//   {
//     text: "Changing the vibration of my name shifted my entire perspective. A truly transformative and guiding process.",
//     author: "Michael K.",
//     type: "Name Numerology",
//   },
//   {
//     text: "I was skeptical at first, but the Lo Shu Grid reading highlighted strengths I didn't even realize I had.",
//     author: "Priya S.",
//     type: "Lo Shu Grid Analysis",
//   },
//   {
//     text: "Such a calming and validating session. It felt like someone finally handed me the map to my own life.",
//     author: "David L.",
//     type: "Comprehensive Report",
//   },
//   {
//     text: "The remedies suggested were simple yet profound. I've noticed a real shift in my daily energy and focus.",
//     author: "Anita V.",
//     type: "Remedies & Guidance",
//   },
//   {
//     text: "Understanding my personal year number helped me stop fighting against the current and start flowing with it.",
//     author: "Marcus J.",
//     type: "Yearly Forecast",
//   },
// ];

// export function Stories() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollRef.current) {
//       const { clientWidth } = scrollRef.current;

//       // Scroll by the exact width of the container for a clean page turn effect
//       const scrollAmount =
//         direction === 'left' ? -clientWidth : clientWidth;

//       scrollRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <>
//       <PageIntro
//         eyebrow="Stories"
//         title="Client Stories"
//         text="A beautiful space to slow down, ask better questions and see familiar patterns from a different angle."
//       />

//       <section className="pb-[140px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
//         {/* Carousel Container */}
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto snap-x snap-mandatory gap-[30px] md:gap-[40px] pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//           >
//             {reviews.map((review, i) => (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 key={i}
//                 className="
//                   flex-none
//                   w-full
//                   md:w-[calc(50%-20px)]
//                   snap-start
//                   border
//                   border-[#CDA66F]/50
//                   bg-[#FEFCF8]
//                   p-[40px]
//                   md:p-[50px]
//                   transition-all
//                   duration-500
//                   hover:border-[#C5934D]
//                   hover:shadow-[0_15px_40px_rgba(135,83,62,0.10)]
//                   hover:-translate-y-2
//                   flex
//                   flex-col
//                   justify-between
//                 "
//               >
//                 {/* Review */}
//                 <blockquote
//                   className="
//                     font-serif
//                     font-normal
//                     italic
//                     text-[22px]
//                     md:text-[26px]
//                     leading-[1.4]
//                     mb-[40px]
//                     text-[#363637]
//                   "
//                 >
//                   “{review.text}”
//                 </blockquote>

//                 {/* Author */}
//                 <div className="flex items-center gap-4 mt-auto">
//                   <div className="h-px flex-1 bg-[#CDA66F]/50" />

//                   <p className="text-[#87533E] font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.15em] whitespace-nowrap">
//                     {review.author}

//                     <span className="mx-2 text-[#CDA66F]">
//                       |
//                     </span>

//                     {review.type}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex items-center justify-between md:justify-end gap-4 mt-10 border-t border-[#CDA66F]/40 pt-8">
//             <span className="text-[12px] uppercase tracking-[0.2em] text-[#87533E] md:hidden">
//               Swipe to explore
//             </span>

//             <div className="flex gap-4">
//               {/* Previous */}
//               <button
//                 onClick={() => scroll('left')}
//                 className="
//                   group
//                   flex
//                   h-14
//                   w-14
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#CDA66F]
//                   bg-[#F2EFEB]
//                   text-[#87533E]
//                   transition-all
//                   duration-300
//                   hover:bg-[#C5934D]
//                   hover:text-[#FEFCF8]
//                   hover:scale-105
//                 "
//                 aria-label="Previous story"
//               >
//                 <ArrowLeft
//                   size={20}
//                   strokeWidth={1.5}
//                   className="transition-transform duration-300 group-hover:-translate-x-1"
//                 />
//               </button>

//               {/* Next */}
//               <button
//                 onClick={() => scroll('right')}
//                 className="
//                   group
//                   flex
//                   h-14
//                   w-14
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#CDA66F]
//                   bg-[#F2EFEB]
//                   text-[#87533E]
//                   transition-all
//                   duration-300
//                   hover:bg-[#C5934D]
//                   hover:text-[#FEFCF8]
//                   hover:scale-105
//                 "
//                 aria-label="Next story"
//               >
//                 <ArrowRight
//                   size={20}
//                   strokeWidth={1.5}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { PageIntro } from "@/components/PageIntro";

interface ReviewItem {
  text: string;
  author: string;
  type: string;
}

interface ActiveReview extends ReviewItem {
  number?: string;
}

const reviews: ReviewItem[] = [
  {
    "text": "I had a wonderful session with Namrattaa and truly found it insightful and meaningful. She is extremely knowledgeable and explained everything so clearly, precisely, and in such a lovely way. The session helped me understand my personality, strengths, and certain aspects of myself on a much deeper level. What I especially appreciated was how she guided me on how to work with these qualities and challenges to create more balance and harmony in my life. I came away with a much better understanding of myself and some really valuable perspectives to reflect on. Highly recommend her for anyone looking for an insightful and well explained numerology session!",
    "author": "Grateful Client",
    "type": "testimonial"
  },
  {
    "text": "I had a wonderful and insightful session with Namrattaa Lal. She explained the science of numerology beautifully and went into depth while interpreting my specific chart. The session was detailed and gave me a much better understanding of my life, my strengths, areas where I can improve, and how to navigate things more consciously. I loved how clearly and practically everything was explained. The remedies suggested were also very straightforward, simple, and easy to implement in everyday life.",
    "author": "Anonymous Client",
    "type": "testimonial"
  },
  {
    "text": "I had a wonderful experience with the numerologist Namrattaa. The consultation was very insightful, detailed, and positive. I truly appreciated the time, patience, and professionalism throughout the session. The guidance was explained clearly and gave me a lot to think about. Thank you for such a pleasant experience and excellent service. I would definitely recommend your service to others!",
    "author": "Rinki Mitra",
    "type": "testimonial"
  },
  {
    "text": "Thank you so much for your guidance Namrattaa Lal. I can actually relate many of your readings to my own thinking, feelings and life, so guidance like this would help one realize what is actually meant for them. It gives a good guidance on one's qualities and how they can learn and move forward. My heart feels light thank you so much Namrattaa Lal. And yes I have noted on some active steps you have given me to move better and will do it!",
    "author": "Kaveri",
    "type": "numerology-reading"
  },
  {
    "text": "Talking with Namrattaa about my reading and numbers, I realised and came to know what exactly numbers stands for and tells us about our personality and life happenings, remedies are so simple which we should adopt in life, thank you so much Namrattaa for giving me new perspective in life.",
    "author": "Anonymous Client",
    "type": "numerology-feedback"
  },
  {
    "text": "Did a wonderful Numerology session with Namrattaa Lal ❤️ Was quite amazed by your knowledge",
    "author": "Kanika",
    "type": "testimonial"
  }
];

const GoldStars = ({ small = false }: { small?: boolean }) => (
  <div className={`flex ${small ? "gap-0.5" : "gap-1"}`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={small ? 11 : 13}
        fill="currentColor"
        strokeWidth={0}
        className="text-[#C5934D]"
      />
    ))}
  </div>
);

export function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeReview, setActiveReview] = useState<ActiveReview | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveReview(null);
      }
    };
    if (activeReview) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeReview]);

  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const amount = isMobile ? container.clientWidth * 0.88 : container.clientWidth / 2 + 12;

    if (direction === "right") {
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 25;
      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: amount, behavior: "smooth" });
      }
    } else {
      const isAtStart = container.scrollLeft <= 25;
      if (isAtStart) {
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -amount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (activeReview || isPaused) return;

    const timer = setInterval(() => {
      scroll("right");
    }, 4000);

    return () => clearInterval(timer);
  }, [activeReview, isPaused]);

  return (
    <>
      {/* ============================================================
          PAGE INTRO
      ============================================================ */}

      <PageIntro
        eyebrow="Client Love"
        title="Words From the Journey"
        text="Every reading is a deeply personal experience. These are a few reflections from clients who have explored their numbers, patterns and possibilities with Namrattaa."
      />

      {/* ============================================================
          MAIN
      ============================================================ */}

      <section className="relative overflow-hidden bg-[#FEFCF8] pb-[140px]">

        {/* ========================================================
            BACKGROUND ORNAMENTS
        ======================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Top glow */}
          <div
            className="
              absolute
              left-1/2
              top-[-250px]
              h-[550px]
              w-[550px]
              -translate-x-1/2
              rounded-full
              bg-[#D8993E]/[0.055]
              blur-[100px]
            "
          />

          {/* Left glow */}
          <div
            className="
              absolute
              left-[-250px]
              top-[600px]
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#A85030]/[0.035]
              blur-[110px]
            "
          />

          {/* Right glow */}
          <div
            className="
              absolute
              right-[-250px]
              top-[1100px]
              h-[550px]
              w-[550px]
              rounded-full
              bg-[#D8993E]/[0.04]
              blur-[120px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-[clamp(24px,5vw,80px)]">

          {/* ========================================================
              INTRO ORNAMENT
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex justify-center"
          >
            <div className="flex items-center gap-4">

              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C5934D]/60" />

              <span className="text-xl text-[#C5934D]">✦</span>

              <span className="font-serif text-sm uppercase tracking-[0.25em] text-[#87533E]">
                Real Words · Real Experiences
              </span>

              <span className="text-xl text-[#C5934D]">✦</span>

              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C5934D]/60" />

            </div>
          </motion.div>

          {/* ========================================================
              FEATURED TESTIMONIAL
          ======================================================== */}

          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="
              group
              relative
              overflow-hidden
              border
              border-[#C5934D]/40
              bg-[#F8F3E8]
              shadow-[0_30px_90px_rgba(88,55,25,0.10)]
            "
          >

            {/* Luxury inner border */}

            <div className="pointer-events-none absolute inset-[9px] border border-[#C5934D]/20" />

            {/* Corner ornaments */}

            <div className="absolute left-4 top-4 h-14 w-14 border-l border-t border-[#C5934D]/50" />

            <div className="absolute right-4 top-4 h-14 w-14 border-r border-t border-[#C5934D]/50" />

            <div className="absolute bottom-4 left-4 h-14 w-14 border-b border-l border-[#C5934D]/50" />

            <div className="absolute bottom-4 right-4 h-14 w-14 border-b border-r border-[#C5934D]/50" />

            {/* Decorative quote */}

            <div
              className=" 
                pointer-events-none
                absolute
                left-8
                top-5
                font-serif
                text-[180px]
                leading-none
                text-[#C5934D]/[0.08]
              "
            >
              “
            </div>

            <div className="relative z-10 px-8 py-16 md:px-24 md:py-24">

              {/* Stars */}

              <div className="mb-8 flex justify-center">
                <GoldStars />
              </div>

              {/* Review */}

              <blockquote
                className="
                  mx-auto
                  max-w-[920px]
                  text-center
                  font-serif
                  text-2xl
                  italic
                  leading-[1.65]
                  text-[#373535]
                  md:text-2xl
                  lg:text-3xl
                "
              >
                “I had a wonderful experience with the numerologist Namratta.
                The consultation was very insightful, detailed, and positive.
                I truly appreciated the time, patience, and professionalism
                throughout the session. The guidance was explained clearly and
                gave me a lot to think about. Thank you for such a pleasant
                experience and excellent service. I would definitely recommend
                your service to others!”
              </blockquote>

              {/* Divider */}

              <div className="mx-auto my-9 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#C5934D]/40" />
                <span className="text-[#C5934D]">❖</span>
                <span className="h-px w-12 bg-[#C5934D]/40" />
              </div>

              {/* Author */}

              <div className="text-center">

                <h3 className="font-serif text-2xl text-[#87533E]">
                  Rinki Mitra
                </h3>

              </div>

            </div>
          </motion.article>



          <div className="relative pt-16">

            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className="
                flex
                snap-x
                snap-mandatory
                gap-6
                overflow-x-auto
                pb-8
                [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >

              {reviews.slice(1).map((review, index) => {
                const reviewNumber = String(index + 2).padStart(2, "0");
                const isLong = review.text.length > 140;

                return (
                  <motion.article
                    key={`${review.author}-${index}`}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.07,
                    }}
                    className="
                      group
                      relative
                      flex
                      min-h-[390px]
                      w-[88%]
                      flex-none
                      snap-start
                      flex-col
                      justify-between
                      overflow-hidden
                      border
                      border-[#CDA66F]/35
                      bg-white/65
                      p-8
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-[#C5934D]/80
                      hover:bg-white
                      hover:shadow-[0_25px_60px_rgba(88,55,25,0.10)]
                      sm:w-[70%]
                      md:w-[calc(50%-12px)]
                      md:p-10
                    "
                  >
                    {/* Top gold line */}
                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        h-[2px]
                        w-full
                        origin-left
                        scale-x-0
                        bg-gradient-to-r
                        from-[#A85030]
                        via-[#D8993E]
                        to-[#A85030]
                        transition-transform
                        duration-700
                        group-hover:scale-x-100
                      "
                    />

                    {/* Floating quote */}
                    <div className="absolute right-7 top-6 text-[#C5934D]/10">
                      <Quote size={60} strokeWidth={0.7} />
                    </div>

                    <div>
                      {/* Number & Stars */}
                      <div className="mb-7 flex items-center justify-between">
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#CDA66F]/40
                            font-serif
                            text-sm
                            text-[#A98243]
                          "
                        >
                          {reviewNumber}
                        </span>

                        <GoldStars small />
                      </div>

                      {/* Review Clamped to 4 lines */}
                      <blockquote
                        onClick={() => {
                          if (isLong) {
                            setActiveReview({ ...review, number: reviewNumber });
                          }
                        }}
                        title={isLong ? "Click to read full review" : undefined}
                        className={`
                          font-serif
                          text-[18px]
                          italic
                          leading-[1.7]
                          text-[#373535]
                          md:text-[20px]
                          line-clamp-4
                          ${isLong ? "cursor-pointer transition-colors duration-200 hover:text-[#87533E]" : ""}
                        `}
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        “{review.text}”
                      </blockquote>

                      {/* Read More button */}
                      {isLong && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveReview({ ...review, number: reviewNumber });
                          }}
                          className="
                            mt-3.5
                            inline-flex
                            items-center
                            gap-1.5
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-[#87533E]
                            transition-colors
                            duration-200
                            hover:text-[#C5934D]
                            group/btn
                          "
                        >
                          <span className="border-b border-[#87533E]/40 pb-0.5 transition-colors group-hover/btn:border-[#C5934D]">
                            Read more
                          </span>
                          <span className="text-xs transition-transform duration-200 group-hover/btn:translate-x-1">
                            →
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Author */}
                    <div className="mt-8">
                      <div className="mb-6 h-px bg-gradient-to-r from-[#CDA66F]/50 via-[#CDA66F]/20 to-transparent" />

                      <div className="flex items-end justify-between">
                        <div>
                          <p className="font-serif text-xl text-[#87533E]">
                            {review.author}
                          </p>

                          <p className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#A98243]">
                            {review.type}
                          </p>
                        </div>

                        <span className="font-serif text-5xl leading-none text-[#C5934D]/15">
                          ”
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}

            </div>

            {/* ======================================================
                NAVIGATION
            ====================================================== */}

            <div className="mt-5 flex items-center justify-between border-t border-[#CDA66F]/25 pt-7">

              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#A98243]">
                  Explore
                </p>

                <p className="mt-1 font-serif text-sm italic text-[#373535]/60">
                  More client experiences
                </p>
              </div>

              <div className="flex gap-3">

                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Previous testimonial"
                  className="
                    group
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#CDA66F]/60
                    bg-[#FEFCF8]
                    text-[#87533E]
                    transition-all
                    duration-300
                    hover:border-[#87533E]
                    hover:bg-[#87533E]
                    hover:text-[#FEFCF8]
                  "
                >
                  <ArrowLeft
                    size={17}
                    strokeWidth={1.3}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Next testimonial"
                  className="
                    group
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#CDA66F]/60
                    bg-[#FEFCF8]
                    text-[#87533E]
                    transition-all
                    duration-300
                    hover:border-[#87533E]
                    hover:bg-[#87533E]
                    hover:text-[#FEFCF8]
                  "
                >
                  <ArrowRight
                    size={17}
                    strokeWidth={1.3}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </div>
            </div>

          </div>

          {/* ========================================================
              THREE PILLARS
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              mt-28
              grid
              overflow-hidden
              border
              border-[#CDA66F]/30
              bg-[#F8F3E8]
              md:grid-cols-3
            "
          >

            {[
              {
                number: "01",
                title: "Understand",
                text: "Discover the patterns and qualities reflected through your numbers.",
              },
              {
                number: "02",
                title: "Reflect",
                text: "Gain a deeper perspective on your experiences, strengths and challenges.",
              },
              {
                number: "03",
                title: "Move Forward",
                text: "Use practical guidance to create greater awareness and balance.",
              },
            ].map((item, index) => (

              <div
                key={item.number}
                className={`
                  relative
                  p-10
                  text-center
                  md:p-12
                  ${index !== 2
                    ? "border-b border-[#CDA66F]/25 md:border-b-0 md:border-r"
                    : ""
                  }
                `}
              >

                <span className="font-serif text-sm text-[#C5934D]/70">
                  {item.number}
                </span>

                <h3 className="mt-4 font-serif text-2xl text-[#87533E]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[250px] text-sm leading-6 text-[#373535]/60">
                  {item.text}
                </p>

              </div>

            ))}

          </motion.div>

          {/* ========================================================
              FINAL CTA
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              mt-28
              overflow-hidden
              border
              border-[#C5934D]/50
              bg-[#87533E]
              px-7
              py-16
              text-center
              shadow-[0_30px_80px_rgba(88,55,25,0.15)]
              md:px-16
              md:py-20
            "
          >

            {/* Gold glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D8993E]/10
                blur-[90px]
              "
            />

            {/* Inner border */}

            <div className="pointer-events-none absolute inset-4 border border-[#D8993E]/25 md:inset-6" />

            <div className="relative z-10">

              <div className="mb-6 flex justify-center">
                <Sparkles
                  size={20}
                  strokeWidth={1}
                  className="text-[#D8993E]"
                />
              </div>

              <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-[#D8993E]">
                Your Journey Begins Here
              </p>

              <h2
                className="
                  font-serif
                  text-3xl
                  leading-tight
                  text-[#FEFCF8]
                  md:text-5xl
                "
              >
                What will your numbers
                <br />
                reveal about you?
              </h2>

              <p className="mx-auto mt-5 max-w-[540px] text-sm leading-7 text-[#FEFCF8]/65 md:text-base">
                Explore your unique numerological patterns and gain a deeper
                understanding of your journey with a personalised session.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2sdjqQmIRoOmozAKSu1s9zF08a3-gqtbXuXesWd7UMfckmg/viewform"
                className="
                  group
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[#D8993E]
                  bg-[#D8993E]
                  px-8
                  py-4
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#373535]
                  transition-all
                  duration-300
                  hover:bg-[#FEFCF8]
                  hover:text-[#87533E]
                "
              >
                Book a Numerology Session

                <ArrowRight
                  size={15}
                  strokeWidth={1.2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================
          POP CARD MODAL - FULL REVIEW
      ============================================================ */}
      <AnimatePresence>
        {activeReview && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="active-review-author"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            {/* Backdrop with warm dark blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveReview(null)}
              className="fixed inset-0 bg-[#241710]/70 backdrop-blur-md"
            />

            {/* Pop Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="
                relative
                z-10
                flex
                max-h-[88vh]
                w-full
                max-w-[650px]
                flex-col
                overflow-hidden
                border
                border-[#C5934D]/60
                bg-[#FEFCF8]
                shadow-[0_30px_90px_rgba(36,23,16,0.35)]
              "
            >
              {/* Top luxury line */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#A85030] via-[#D8993E] to-[#A85030]" />

              {/* Inner decorative border */}
              <div className="pointer-events-none absolute inset-3 border border-[#C5934D]/25 sm:inset-4" />

              {/* Corner brackets */}
              <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-[#C5934D]/60" />
              <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-[#C5934D]/60" />
              <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#C5934D]/60" />
              <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#C5934D]/60" />

              {/* Decorative watermark quote */}
              <div className="pointer-events-none absolute right-8 top-10 select-none font-serif text-[140px] leading-none text-[#C5934D]/[0.07]">
                “
              </div>

              {/* Scrollable Content */}
              <div className="relative z-10 flex flex-col overflow-y-auto px-7 py-8 sm:px-11 sm:py-10 [scrollbar-width:thin]">
                {/* Header: badge, stars, close button */}
                <div className="flex items-center justify-between border-b border-[#CDA66F]/30 pb-5">
                  <div className="flex items-center gap-3">
                    {activeReview.number && (
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#CDA66F]/50 bg-[#F8F3E8] font-serif text-sm font-medium text-[#A98243]">
                        {activeReview.number}
                      </span>
                    )}
                    <GoldStars />
                    <span className="ml-1 hidden font-serif text-xs uppercase tracking-[0.2em] text-[#87533E]/70 sm:inline">
                      Client Story
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveReview(null)}
                    aria-label="Close review details"
                    className="
                      group/close
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#CDA66F]/50
                      bg-[#F8F3E8]
                      text-[#87533E]
                      transition-all
                      duration-200
                      hover:border-[#87533E]
                      hover:bg-[#87533E]
                      hover:text-[#FEFCF8]
                      hover:scale-105
                    "
                  >
                    <X size={16} strokeWidth={1.8} className="transition-transform duration-200 group-hover/close:rotate-90" />
                  </button>
                </div>

                {/* Total Review Text */}
                <div className="py-7 sm:py-8">
                  <blockquote className="font-serif text-[19px] italic leading-[1.75] text-[#373535] sm:text-[21px] md:text-[22px]">
                    “{activeReview.text}”
                  </blockquote>
                </div>

                {/* Divider */}
                <div className="mx-auto my-2 flex items-center justify-center gap-3">
                  <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#C5934D]/60" />
                  <span className="text-xs text-[#C5934D]">❖</span>
                  <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#C5934D]/60" />
                </div>

                {/* Footer / Author */}
                <div className="pt-4 text-center">
                  <h3 id="active-review-author" className="font-serif text-2xl text-[#87533E] sm:text-3xl">
                    {activeReview.author}
                  </h3>
                  {activeReview.type && (
                    <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[#A98243]">
                      {activeReview.type}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}