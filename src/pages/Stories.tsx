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

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { useRef } from "react";
import { PageIntro } from "@/components/PageIntro";

const reviews = [
  {
    text: "An incredibly insightful experience. Namrattaa explained each number with great clarity and helped me understand how they connect with my personality, strengths and life journey.",
    author: "Ashis",
    type: "Numerology Session",
  },
  {
    text: "A wonderful and meaningful session. Namrattaa explained everything so clearly and helped me understand my personality, strengths and certain aspects of myself on a much deeper level.",
    author: "Grateful Client",
    type: "Numerology Reading",
  },
  {
    text: "I had a wonderful Numerology session with Namrattaa Lal. I was truly amazed by her knowledge and the depth of her insights.",
    author: "Kanika",
    type: "Numerology Session",
  },
  {
    text: "The session gave me a much better understanding of my life, my strengths and areas where I can improve. Everything was explained clearly and the remedies suggested were simple and practical.",
    author: "Rinki Mitra",
    type: "Numerology Reading",
  },
  {
    text: "I could genuinely relate many of the readings to my own thinking, feelings and life. Her guidance gave me a new perspective and practical steps to move forward.",
    author: "Kaveri",
    type: "Numerology Guidance",
  },
  {
    text: "The consultation was insightful, detailed and positive. I truly appreciated the time, patience and professionalism throughout the session.",
    author: "Grateful Client",
    type: "Numerology Consultation",
  },
  {
    text: "Talking with Namrattaa helped me understand what numbers represent and how they connect with personality and life happenings. The simple remedies gave me a fresh perspective on life.",
    author: "Grateful Client",
    type: "Numerology Reading",
  },
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

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.clientWidth * 0.85;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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
                  text-[25px]
                  italic
                  leading-[1.65]
                  text-[#373535]
                  md:text-[34px]
                  lg:text-[39px]
                "
              >
                “An incredibly insightful experience. Namrattaa explained each
                number with great clarity and helped me understand how they
                connect with my personality, strengths and life journey.”
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
                  Ashis
                </h3>

                <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#A98243]">
                  Numerology Session
                </p>

              </div>

            </div>
          </motion.article>

          {/* ========================================================
              TRUST STRIP
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 py-14 md:flex-row md:gap-10"
          >

            <div className="flex items-center gap-2">
              <GoldStars />
              <span className="ml-2 text-xs uppercase tracking-[0.15em] text-[#87533E]">
                Client Experiences
              </span>
            </div>

            <span className="hidden h-4 w-px bg-[#CDA66F]/50 md:block" />

            <p className="text-center font-serif text-sm italic text-[#373535]/60">
              “A journey toward deeper self-understanding.”
            </p>

          </motion.div>

          {/* ========================================================
              SECTION TITLE
          ======================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >

            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#A98243]">
              From Our Clients
            </p>

            <h2 className="font-serif text-3xl text-[#373535] md:text-5xl">
              Stories of Insight &amp; Transformation
            </h2>

            <div className="mx-auto mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-14 bg-[#CDA66F]/40" />
              <span className="text-[#C5934D]">✦</span>
              <span className="h-px w-14 bg-[#CDA66F]/40" />
            </div>

          </motion.div>

          {/* ========================================================
              CAROUSEL
          ======================================================== */}

          <div className="relative">

            <div
              ref={scrollRef}
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

              {reviews.slice(1).map((review, index) => (

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
                    min-h-[410px]
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

                    {/* Number */}

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
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      <GoldStars small />

                    </div>

                    {/* Review */}

                    <blockquote
                      className="
                        font-serif
                        text-[18px]
                        italic
                        leading-[1.7]
                        text-[#373535]
                        md:text-[20px]
                      "
                    >
                      “{review.text}”
                    </blockquote>

                  </div>

                  {/* Author */}

                  <div className="mt-10">

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

              ))}

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
                  ${
                    index !== 2
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
    </>
  );
}