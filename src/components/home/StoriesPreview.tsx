// // import { Link } from 'react-router-dom';
// // import { ArrowRight, ArrowLeft } from 'lucide-react';
// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const reviews = [
// //   {
// //     text: "A beautiful space to slow down, ask better questions and see familiar patterns from a different angle.",
// //     author: "Elena R.",
// //     type: "Personal Numerology"
// //   },
// //   {
// //     text: "It gave me the clarity I was looking for during a difficult transition period in my career.",
// //     author: "James T.",
// //     type: "Career Reading"
// //   },
// //   {
// //     text: "The insights provided were startlingly accurate. I finally understand the recurring themes in my life.",
// //     author: "Sarah M.",
// //     type: "Life Path Analysis"
// //   },
// //   {
// //     text: "Changing the vibration of my name shifted my entire perspective. A truly transformative process.",
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
// //     text: "The remedies suggested were simple yet profound. I've noticed a real shift in my daily energy.",
// //     author: "Anita V.",
// //     type: "Remedies & Guidance"
// //   },
// //   {
// //     text: "Understanding my personal year number helped me stop fighting against the current and start flowing.",
// //     author: "Marcus J.",
// //     type: "Yearly Forecast"
// //   }
// // ];

// // export function StoriesPreview() {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % reviews.length);
// //     }, 3500);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
// //   const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

// //   return (
// //     <section className="pt-[130px] pb-[150px] border-t border-[#C5A267]/30 max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)] max-md:py-[100px] overflow-hidden">
// //       <div className="grid grid-cols-[0.3fr_1.5fr_0.5fr] gap-[8%] items-start max-md:grid-cols-1 max-md:gap-[50px]">

// //         {/* Giant Quote */}
// //         <div className="font-serif text-[150px] leading-[0.6] text-bronze/40 pt-[40px] select-none">
// //           “
// //         </div>

// //         {/* Carousel Content */}
// //         <div className="relative flex flex-col justify-between">
// //           <div>
// //             <span className="block text-bronze uppercase tracking-[0.23em] text-[10px] leading-[1.5]">
// //               Stories from the other side
// //             </span>

// //             <div className="mt-[25px] mb-[35px] min-h-[220px] md:min-h-[160px]">
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={currentIndex}
// //                   initial={{ opacity: 0, y: 15 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -15 }}
// //                   transition={{ duration: 0.5, ease: "easeInOut" }}
// //                 >
// //                   <blockquote className="font-serif font-medium text-[clamp(28px,3.5vw,48px)] leading-[1.15] text-brown max-w-[780px]">
// //                     “{reviews[currentIndex].text}”
// //                   </blockquote>
// //                   <p className="text-[#363637] text-[11px] uppercase tracking-[0.12em] mt-[30px]">
// //                     {reviews[currentIndex].author} · {reviews[currentIndex].type}
// //                   </p>
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //           </div>

// //           <div className="flex items-center justify-between mt-auto">
// //             <Link className="inline-flex items-center justify-center gap-[12px] text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-[2px] px-0 pb-[7px] border-b border-muted-gold text-brown hover:text-bronze" to="/stories">
// //               Read client stories <ArrowRight size={15} />
// //             </Link>

// //             {/* Mobile Navigation */}
// //             <div className="flex gap-4 md:hidden">
// //               <button onClick={prevSlide} className="text-bronze hover:text-brown transition-colors">
// //                 <ArrowLeft size={22} strokeWidth={1.5} />
// //               </button>
// //               <button onClick={nextSlide} className="text-bronze hover:text-brown transition-colors">
// //                 <ArrowRight size={22} strokeWidth={1.5} />
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Counter and Desktop Navigation */}
// //         <div className="text-right tracking-[0.15em] max-md:hidden">
// //           <div className="flex items-center justify-end gap-5 mb-[30px] text-bronze">
// //             <button onClick={prevSlide} className="hover:text-brown transition-colors">
// //               <ArrowLeft size={20} strokeWidth={1.5} />
// //             </button>
// //             <button onClick={nextSlide} className="hover:text-brown transition-colors">
// //               <ArrowRight size={20} strokeWidth={1.5} />
// //             </button>
// //           </div>
// //           <div className="text-[10px] text-bronze">
// //             <span className="font-serif text-[20px] text-brown">
// //               {String(currentIndex + 1).padStart(2, '0')}
// //             </span>
// //             <span className="mx-2">/</span>
// //             <span>{String(reviews.length).padStart(2, '0')}</span>
// //           </div>
// //           <div className="h-[120px] w-[1px] bg-gradient-to-b from-muted-gold to-transparent ml-auto mt-[20px]" />
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }




// import { Link } from 'react-router-dom';
// import { ArrowRight, ArrowLeft } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const reviews = [
//   {
//     text: "A beautiful space to slow down, ask better questions and see familiar patterns from a different angle.",
//     author: "Elena R.",
//     type: "Personal Numerology"
//   },
//   {
//     text: "It gave me the clarity I was looking for during a difficult transition period in my career.",
//     author: "James T.",
//     type: "Career Reading"
//   },
//   {
//     text: "The insights provided were startlingly accurate. I finally understand the recurring themes in my life.",
//     author: "Sarah M.",
//     type: "Life Path Analysis"
//   },
//   {
//     text: "Changing the vibration of my name shifted my entire perspective. A truly transformative process.",
//     author: "Michael K.",
//     type: "Name Numerology"
//   },
//   {
//     text: "I was skeptical at first, but the Lo Shu Grid reading highlighted strengths I didn't even realize I had.",
//     author: "Priya S.",
//     type: "Lo Shu Grid Analysis"
//   },
//   {
//     text: "Such a calming and validating session. It felt like someone finally handed me the map to my own life.",
//     author: "David L.",
//     type: "Comprehensive Report"
//   },
//   {
//     text: "The remedies suggested were simple yet profound. I've noticed a real shift in my daily energy.",
//     author: "Anita V.",
//     type: "Remedies & Guidance"
//   },
//   {
//     text: "Understanding my personal year number helped me stop fighting against the current and start flowing.",
//     author: "Marcus J.",
//     type: "Yearly Forecast"
//   }
// ];

// export function StoriesPreview() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % reviews.length);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % reviews.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
//   };

//   const currentReview = reviews[currentIndex];

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#FDFBF7]
//         border-t border-[#C5934D]/20
//         pt-[125px]
//         pb-[145px]
//         max-w-[1240px]
//         mx-auto
//         px-[clamp(24px,5vw,80px)]
//         max-md:py-[100px]
//       "
//     >
//       {/* Decorative background circle */}
//       <div
//         className="
//           absolute
//           -right-[170px]
//           top-[80px]
//           w-[430px]
//           h-[430px]
//           rounded-full
//           border
//           border-[#C5934D]/10
//           pointer-events-none
//         "
//       />

//       <div
//         className="
//           absolute
//           -right-[110px]
//           top-[140px]
//           w-[310px]
//           h-[310px]
//           rounded-full
//           border
//           border-dashed
//           border-[#C5934D]/10
//           pointer-events-none
//         "
//       />

//       {/* Small decorative diamond */}
//       <motion.div
//         className="
//           absolute
//           left-[7%]
//           bottom-[100px]
//           w-[10px]
//           h-[10px]
//           rotate-45
//           bg-[#87533E]
//           opacity-30
//           pointer-events-none
//         "
//         animate={{
//           rotate: [45, 135, 45],
//           opacity: [0.2, 0.4, 0.2]
//         }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           ease: 'easeInOut'
//         }}
//       />

//       <div
//         className="
//           relative
//           z-10
//           grid
//           grid-cols-[0.25fr_1.55fr_0.45fr]
//           gap-[7%]
//           items-start
//           max-md:grid-cols-1
//           max-md:gap-[55px]
//         "
//       >
//         {/* Giant Quote */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="
//             font-serif
//             text-[150px]
//             leading-[0.6]
//             text-[#C5934D]/25
//             pt-[35px]
//             select-none
//             max-md:hidden
//           "
//         >
//           “
//         </motion.div>

//         {/* Main Carousel */}
//         <div className="relative flex flex-col min-w-0">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="
//               block
//               text-[#87533E]
//               uppercase
//               tracking-[0.24em]
//               text-[10px]
//               leading-[1.5]
//               font-medium
//             "
//           >
//             Stories from the other side
//           </motion.span>

//           {/* Small decorative divider */}
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: 55 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.15 }}
//             className="
//               h-[1px]
//               bg-[#C5934D]
//               mt-[18px]
//               mb-[28px]
//             "
//           />

//           <div className="min-h-[250px] md:min-h-[220px]">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -18 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: 'easeInOut'
//                 }}
//               >
//                 {/* Quote */}
//                 <blockquote
//                   className="
//                     relative
//                     font-serif
//                     font-medium
//                     text-[clamp(28px,3.4vw,47px)]
//                     leading-[1.16]
//                     text-[#363637]
//                     max-w-[800px]
//                   "
//                 >
//                   <span className="text-[#87533E]">“</span>
//                   {currentReview.text}
//                   <span className="text-[#87533E]">”</span>
//                 </blockquote>

//                 {/* Author */}
//                 <div className="mt-[32px] flex items-center gap-[12px]">
//                   <span
//                     className="
//                       block
//                       w-[28px]
//                       h-[1px]
//                       bg-[#C5934D]
//                     "
//                   />

//                   <p
//                     className="
//                       text-[#363637]
//                       text-[10px]
//                       uppercase
//                       tracking-[0.15em]
//                     "
//                   >
//                     {currentReview.author}
//                   </p>

//                   <span className="text-[#C5934D] text-[10px]">
//                     ·
//                   </span>

//                   <p
//                     className="
//                       text-[#87533E]
//                       text-[10px]
//                       uppercase
//                       tracking-[0.13em]
//                     "
//                   >
//                     {currentReview.type}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Bottom controls */}
//           <div
//             className="
//               flex
//               items-center
//               justify-between
//               mt-auto
//               pt-[25px]
//               border-t
//               border-[#C5934D]/20
//             "
//           >
//             <Link
//               className="
//                 group
//                 inline-flex
//                 items-center
//                 justify-center
//                 gap-[11px]
//                 text-[10px]
//                 font-semibold
//                 tracking-[0.14em]
//                 uppercase
//                 text-[#363637]
//                 transition-all
//                 duration-200
//                 hover:text-[#87533E]
//               "
//               to="/stories"
//             >
//               <span className="border-b border-[#C5934D] pb-[6px]">
//                 Read client stories
//               </span>

//               <ArrowRight
//                 size={15}
//                 className="
//                   transition-transform
//                   duration-200
//                   group-hover:translate-x-[4px]
//                 "
//               />
//             </Link>

//             {/* Mobile Navigation */}
//             <div className="flex gap-[10px] md:hidden">
//               <button
//                 onClick={prevSlide}
//                 aria-label="Previous story"
//                 className="
//                   flex
//                   items-center
//                   justify-center
//                   w-[38px]
//                   h-[38px]
//                   rounded-full
//                   border
//                   border-[#C5934D]/50
//                   text-[#87533E]
//                   transition-all
//                   duration-200
//                   hover:bg-[#87533E]
//                   hover:text-[#FDFBF7]
//                 "
//               >
//                 <ArrowLeft size={17} strokeWidth={1.5} />
//               </button>

//               <button
//                 onClick={nextSlide}
//                 aria-label="Next story"
//                 className="
//                   flex
//                   items-center
//                   justify-center
//                   w-[38px]
//                   h-[38px]
//                   rounded-full
//                   border
//                   border-[#C5934D]/50
//                   text-[#87533E]
//                   transition-all
//                   duration-200
//                   hover:bg-[#87533E]
//                   hover:text-[#FDFBF7]
//                 "
//               >
//                 <ArrowRight size={17} strokeWidth={1.5} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Desktop Counter / Navigation */}
//         <motion.div
//           initial={{ opacity: 0, x: 15 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="
//             text-right
//             tracking-[0.15em]
//             max-md:hidden
//           "
//         >
//           {/* Navigation */}
//           <div className="flex items-center justify-end gap-[9px] mb-[32px]">
//             <button
//               onClick={prevSlide}
//               aria-label="Previous story"
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 w-[38px]
//                 h-[38px]
//                 rounded-full
//                 border
//                 border-[#C5934D]/40
//                 text-[#87533E]
//                 transition-all
//                 duration-200
//                 hover:bg-[#87533E]
//                 hover:text-[#FDFBF7]
//               "
//             >
//               <ArrowLeft size={17} strokeWidth={1.5} />
//             </button>

//             <button
//               onClick={nextSlide}
//               aria-label="Next story"
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 w-[38px]
//                 h-[38px]
//                 rounded-full
//                 border
//                 border-[#C5934D]/40
//                 text-[#87533E]
//                 transition-all
//                 duration-200
//                 hover:bg-[#87533E]
//                 hover:text-[#FDFBF7]
//               "
//             >
//               <ArrowRight size={17} strokeWidth={1.5} />
//             </button>
//           </div>

//           {/* Counter */}
//           <div className="text-[10px] text-[#87533E]">
//             <span
//               className="
//                 font-serif
//                 text-[22px]
//                 text-[#363637]
//               "
//             >
//               {String(currentIndex + 1).padStart(2, '0')}
//             </span>

//             <span className="mx-[8px] text-[#C5934D]">
//               /
//             </span>

//             <span>
//               {String(reviews.length).padStart(2, '0')}
//             </span>
//           </div>

//           {/* Vertical ornament */}
//           <div
//             className="
//               h-[125px]
//               w-[1px]
//               bg-gradient-to-b
//               from-[#C5934D]
//               to-transparent
//               ml-auto
//               mt-[22px]
//               opacity-60
//             "
//           />

//           {/* Tiny ornament */}
//           <div className="flex justify-end mt-[12px]">
//             <span
//               className="
//                 w-[6px]
//                 h-[6px]
//                 rotate-45
//                 border
//                 border-[#87533E]
//                 opacity-50
//               "
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FDFBF7]
        border-t border-[#C5934D]/20
        pt-[125px]
        pb-[145px]
        max-w-[1240px]
        mx-auto
        px-[clamp(24px,5vw,80px)]
        max-md:py-[100px]
      "
    >
      {/* Decorative outer circle */}
      <div
        className="
          absolute
          -right-[170px]
          top-[80px]
          w-[430px]
          h-[430px]
          rounded-full
          border
          border-[#C5934D]/10
          pointer-events-none
        "
      />

      {/* Decorative dashed circle */}
      <div
        className="
          absolute
          -right-[110px]
          top-[140px]
          w-[310px]
          h-[310px]
          rounded-full
          border
          border-dashed
          border-[#87533E]/10
          pointer-events-none
        "
      />

      {/* Terracotta decorative diamond */}
      <motion.div
        className="
          absolute
          left-[7%]
          bottom-[100px]
          w-[10px]
          h-[10px]
          rotate-45
          bg-[#87533E]
          opacity-30
          pointer-events-none
        "
        animate={{
          rotate: [45, 135, 45],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div
        className="
          relative
          z-10
          grid
          grid-cols-[0.25fr_1.55fr_0.45fr]
          gap-[7%]
          items-start
          max-md:grid-cols-1
          max-md:gap-[55px]
        "
      >
        {/* Giant Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            font-serif
            text-[150px]
            leading-[0.6]
            text-[#87533E]/20
            pt-[35px]
            select-none
            max-md:hidden
          "
        >
          “
        </motion.div>

        {/* Main Carousel */}
        <div className="relative flex flex-col min-w-0">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              block
              text-[#87533E]
              uppercase
              tracking-[0.24em]
              text-[10px]
              leading-[1.5]
              font-medium
            "
          >
            Stories from the other side
          </motion.span>

          {/* Terracotta divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 55 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              h-[1px]
              bg-[#87533E]
              mt-[18px]
              mb-[28px]
            "
          />

          {/* Review */}
          <div className="min-h-[250px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
              >
                <blockquote
                  className="
                    relative
                    font-serif
                    font-medium
                    text-[clamp(28px,3.4vw,47px)]
                    leading-[1.16]
                    text-[#363637]
                    max-w-[800px]
                  "
                >
                  <span className="text-[#87533E]">“</span>
                  {currentReview.text}
                  <span className="text-[#87533E]">”</span>
                </blockquote>

                {/* Author / Service */}
                <div className="mt-[32px] flex items-center gap-[12px] flex-wrap">

                  <span
                    className="
                      block
                      w-[28px]
                      h-[1px]
                      bg-[#C5934D]
                    "
                  />

                  <p
                    className="
                      text-[#363637]
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                    "
                  >
                    {currentReview.author}
                  </p>

                  <span className="text-[#C5934D] text-[10px]">
                    ·
                  </span>

                  <p
                    className="
                      text-[#87533E]
                      text-[10px]
                      uppercase
                      tracking-[0.13em]
                      font-medium
                    "
                  >
                    {currentReview.type}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Controls */}
          <div
            className="
              flex
              items-center
              justify-between
              mt-auto
              pt-[25px]
              border-t
              border-[#C5934D]/20
            "
          >
            {/* Stories Link */}
            <Link
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-[11px]
                text-[10px]
                font-semibold
                tracking-[0.14em]
                uppercase
                text-[#363637]
                transition-all
                duration-200
                hover:text-[#87533E]
              "
              to="/stories"
            >
              <span
                className="
                  border-b
                  border-[#87533E]
                  pb-[6px]
                "
              >
                Read client stories
              </span>

              <ArrowRight
                size={15}
                className="
                  text-[#87533E]
                  transition-transform
                  duration-200
                  group-hover:translate-x-[4px]
                "
              />
            </Link>

            {/* Mobile Navigation */}
            <div className="flex gap-[10px] md:hidden">

              <button
                onClick={prevSlide}
                aria-label="Previous story"
                className="
                  flex
                  items-center
                  justify-center
                  w-[38px]
                  h-[38px]
                  rounded-full
                  border
                  border-[#87533E]/40
                  text-[#87533E]
                  transition-all
                  duration-200
                  hover:bg-[#87533E]
                  hover:text-[#FDFBF7]
                "
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.5}
                />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next story"
                className="
                  flex
                  items-center
                  justify-center
                  w-[38px]
                  h-[38px]
                  rounded-full
                  border
                  border-[#87533E]/40
                  text-[#87533E]
                  transition-all
                  duration-200
                  hover:bg-[#87533E]
                  hover:text-[#FDFBF7]
                "
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                />
              </button>

            </div>
          </div>
        </div>

        {/* Desktop Counter / Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-right
            tracking-[0.15em]
            max-md:hidden
          "
        >
          {/* Navigation */}
          <div
            className="
              flex
              items-center
              justify-end
              gap-[9px]
              mb-[32px]
            "
          >
            <button
              onClick={prevSlide}
              aria-label="Previous story"
              className="
                flex
                items-center
                justify-center
                w-[38px]
                h-[38px]
                rounded-full
                border
                border-[#87533E]/40
                text-[#87533E]
                transition-all
                duration-200
                hover:bg-[#87533E]
                hover:text-[#FDFBF7]
              "
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.5}
              />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next story"
              className="
                flex
                items-center
                justify-center
                w-[38px]
                h-[38px]
                rounded-full
                border
                border-[#87533E]/40
                text-[#87533E]
                transition-all
                duration-200
                hover:bg-[#87533E]
                hover:text-[#FDFBF7]
              "
            >
              <ArrowRight
                size={17}
                strokeWidth={1.5}
              />
            </button>
          </div>

          {/* Counter */}
          <div className="text-[10px] text-[#87533E]">
            <span
              className="
                font-serif
                text-[22px]
                text-[#363637]
              "
            >
              {String(currentIndex + 1).padStart(2, '0')}
            </span>

            <span className="mx-[8px] text-[#C5934D]">
              /
            </span>

            <span>
              {String(reviews.length).padStart(2, '0')}
            </span>
          </div>

          {/* Vertical Gold Ornament */}
          <div
            className="
              h-[125px]
              w-[1px]
              bg-gradient-to-b
              from-[#C5934D]
              to-transparent
              ml-auto
              mt-[22px]
              opacity-60
            "
          />

          {/* Terracotta Diamond */}
          <div className="flex justify-end mt-[12px]">
            <span
              className="
                w-[6px]
                h-[6px]
                rotate-45
                border
                border-[#87533E]
                opacity-60
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}