// // // import { useState } from 'react';
// // // import lifepathBg from '@/assets/lifepathbg.png';
// // // import { ArrowRight, ArrowLeft } from 'lucide-react';
// // // import { motion } from 'framer-motion';
// // // import { SectionHeading } from '@/components/SectionHeading';
// // // import { OrnamentalDivider } from '@/components/OrnamentalDivider';
// // // import { NumberRing } from '@/components/NumberRing';
// // // import { BookingButton } from '@/components/BookingButton';
// // // import { getInterpretation } from '@/data/numerologyInterpretations';
// // // import { calculateLifePathNumber } from '@/utils/numerologyUtils';

// // // export function LifePathCalculator() {
// // //   const [birth, setBirth] = useState({ day: '', month: '', year: '' });
// // //   const [lifePath, setLifePath] = useState<number | null>(null);

// // //   const revealLifePath = () => {
// // //     const values = [birth.day, birth.month, birth.year].map(Number);
// // //     if (values.every((value) => value > 0)) {
// // //       setLifePath(calculateLifePathNumber(values[0], values[1], values[2]));
// // //     }
// // //   };

// // //   return (
// // //     <section className="relative pt-16 pb-16 overflow-hidden" id="calculator">
// // //       <div className="relative z-10 grid grid-cols-[0.9fr_1.1fr] max-md:grid-cols-1 gap-[10%] max-md:gap-[55px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
// // //         <div className="border border-gold/30 p-[clamp(24px,4vw,52px)] self-center shadow-2xl shadow-brown/10 relative overflow-hidden">
// // //           {/* Background Image Layer for Card */}
// // //           <div
// // //             className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.8]"
// // //             style={{ backgroundImage: `url(${lifepathBg})` }}
// // //           />
// // //           {/* Ivory translucent overlay veil */}
// // //           <div className="absolute inset-0 z-0 bg-ivory/10 backdrop-blur-[1px]" />

// // //           {/* Subtle architectural corners */}
// // //           <div className="absolute top-3 left-3 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-gold/40" />
// // //           <div className="absolute top-3 right-3 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-gold/40" />
// // //           <div className="absolute bottom-3 left-3 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-gold/40" />
// // //           <div className="absolute bottom-3 right-3 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-gold/40" />

// // //           {!lifePath ? (
// // //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative z-10">
// // //               <div className="flex gap-[14px] max-sm:gap-[8px]">
// // //                 <label className="text-[10px] tracking-[0.18em] uppercase text-brown/70 font-semibold">Day
// // //                   <input className="block border-0 border-b border-gold/40 w-full pt-[15px] pb-[11px] outline-none text-dark bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-gold transition-colors placeholder:text-brown/20" type="number" min={1} max={31} placeholder="14" value={birth.day} onChange={(e) => setBirth({ ...birth, day: e.target.value })} />
// // //                 </label>
// // //                 <label className="text-[10px] tracking-[0.18em] uppercase text-brown/70 font-semibold">Month
// // //                   <input className="block border-0 border-b border-gold/40 w-full pt-[15px] pb-[11px] outline-none text-dark bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-gold transition-colors placeholder:text-brown/20" type="number" min={1} max={12} placeholder="08" value={birth.month} onChange={(e) => setBirth({ ...birth, month: e.target.value })} />
// // //                 </label>
// // //                 <label className="text-[10px] tracking-[0.18em] uppercase text-brown/70 font-semibold">Year
// // //                   <input className="block border-0 border-b border-gold/40 w-full pt-[15px] pb-[11px] outline-none text-dark bg-transparent font-serif text-[30px] max-sm:text-[24px] focus:border-gold transition-colors placeholder:text-brown/20" type="number" min={1900} max={2100} placeholder="1998" value={birth.year} onChange={(e) => setBirth({ ...birth, year: e.target.value })} />
// // //                 </label>
// // //               </div>
// // //               <button className="mt-[32px] inline-flex items-center justify-center gap-[12px] min-h-[48px] px-[28px] border border-transparent text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 hover:-translate-y-[2px] bg-dark text-ivory shadow-lg shadow-dark/20 hover:shadow-xl hover:shadow-dark/30" onClick={revealLifePath}>Reveal my number <ArrowRight size={15} /></button>
// // //             </motion.div>
// // //           ) : (
// // //             <motion.div className="relative z-10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} aria-live="polite">
// // //               <button onClick={() => setLifePath(null)} className="flex items-center gap-[6px] text-[10px] uppercase tracking-[0.15em] font-semibold text-brown/70 hover:text-dark transition-colors mb-[28px]">
// // //                 <ArrowLeft size={14} /> Back
// // //               </button>
// // //               <div className="flex flex-col items-center text-center gap-[20px]">
// // //                 <NumberRing number={lifePath} label="LIFE PATH" small />
// // //                 <div className="flex flex-col items-center">
// // //                   <span className="block text-black uppercase tracking-[0.23em] text-[10px] leading-[1.5] font-bold">Your Life Path number</span>
// // //                   <h3 className="font-serif font-medium text-dark text-[39px] my-[9px] mb-[7px] leading-none max-sm:text-[33px]">{getInterpretation(lifePath).title}</h3>
// // //                   <p className="m-0 mb-[17px] text-[13px] text-brown/80 leading-[1.7] max-w-[400px]">{getInterpretation(lifePath).summary}</p>
// // //                   <BookingButton label="Explore a personal reading" variant="text" />
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           )}
// // //         </div>

// // //         <div className="[&_h2]:text-[clamp(46px,5vw,70px)]">
// // //           <SectionHeading eyebrow="Your first step" title="Discover your Life Path number." text="Begin with your date of birth and explore the traditional numerology interpretation associated with your Life Path Number." />
// // //           <OrnamentalDivider />
// // //           {/* <span className="text-[#c4a062] text-[14px] leading-[1.6] block max-w-[500px]">Your result is a starting point for reflection, not a fixed definition.</span> */}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // import { useState } from 'react';
// // import lifepathBg from '@/assets/lifepathbg.png';
// // import { ArrowRight, ArrowLeft } from 'lucide-react';
// // import { motion } from 'framer-motion';
// // import { SectionHeading } from '@/components/SectionHeading';
// // import { OrnamentalDivider } from '@/components/OrnamentalDivider';
// // import { NumberRing } from '@/components/NumberRing';
// // import { BookingButton } from '@/components/BookingButton';
// // import { getInterpretation } from '@/data/numerologyInterpretations';
// // import { calculateLifePathNumber } from '@/utils/numerologyUtils';

// // export function LifePathCalculator() {
// //   const [birth, setBirth] = useState({
// //     day: '',
// //     month: '',
// //     year: '',
// //   });

// //   const [lifePath, setLifePath] = useState<number | null>(null);

// //   const revealLifePath = () => {
// //     const values = [birth.day, birth.month, birth.year].map(Number);

// //     if (values.every((value) => value > 0)) {
// //       setLifePath(
// //         calculateLifePathNumber(
// //           values[0],
// //           values[1],
// //           values[2]
// //         )
// //       );
// //     }
// //   };

// //   return (
// //     <section
// //       id="calculator"
// //       className="
// //         relative
// //         overflow-hidden
// //         bg-[#FDFBF7]
// //         pt-[120px]
// //         pb-[125px]
// //         border-b
// //         border-[#C5934D]/20
// //       "
// //     >

// //       {/* =====================================================
// //           BACKGROUND DECORATION
// //           ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-[280px]
// //           top-[50%]
// //           -translate-y-1/2
// //           h-[650px]
// //           w-[650px]
// //           rounded-full
// //           border
// //           border-[#C5934D]/10
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-[220px]
// //           top-[50%]
// //           -translate-y-1/2
// //           h-[520px]
// //           w-[520px]
// //           rounded-full
// //           border
// //           border-dashed
// //           border-[#C5934D]/10
// //         "
// //       />

// //       {/* Decorative diamonds */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-[6%]
// //           top-[18%]
// //           h-[7px]
// //           w-[7px]
// //           rotate-45
// //           bg-[#87533E]
// //           opacity-60
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           right-[7%]
// //           bottom-[18%]
// //           h-[7px]
// //           w-[7px]
// //           rotate-45
// //           bg-[#87533E]
// //           opacity-50
// //         "
// //       />


// //       {/* =====================================================
// //           MAIN CONTENT
// //           ===================================================== */}

// //       <div
// //         className="
// //           relative
// //           z-10
// //           grid
// //           grid-cols-[0.95fr_1.05fr]
// //           max-md:grid-cols-1
// //           gap-[10%]
// //           max-md:gap-[65px]
// //           max-w-[1240px]
// //           mx-auto
// //           px-[clamp(24px,5vw,80px)]
// //         "
// //       >

// //         {/* =================================================
// //             CALCULATOR CARD
// //             ================================================= */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{
// //             duration: 0.8,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //           className="
// //             relative
// //             self-center
// //             overflow-hidden
// //             border
// //             border-[#C5934D]/35
// //             bg-[#f8f1e7]
// //             shadow-[0_20px_60px_rgba(92,60,30,0.10)]
// //           "
// //         >

// //           {/* =================================================
// //               BACKGROUND IMAGE
// //               ================================================= */}

// //           <div
// //             className="
// //               absolute
// //               inset-0
// //               z-0
// //               bg-cover
// //               bg-center
// //               bg-no-repeat
// //               opacity-[0.35]
// //             "
// //             style={{
// //               backgroundImage: `url(${lifepathBg})`,
// //             }}
// //           />

// //           {/* Warm overlay */}
// //           <div
// //             className="
// //               absolute
// //               inset-0
// //               z-0
// //               bg-[#FDFBF7]/75
// //               backdrop-blur-[1px]
// //             "
// //           />

// //           {/* Subtle inner border */}
// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               inset-[10px]
// //               z-10
// //               border
// //               border-[#C5934D]/15
// //             "
// //           />

// //           {/* Architectural corners */}

// //           <div
// //             className="
// //               absolute
// //               left-4
// //               top-4
// //               z-20
// //               h-4
// //               w-4
// //               border-l
// //               border-t
// //               border-[#C5934D]/60
// //             "
// //           />

// //           <div
// //             className="
// //               absolute
// //               right-4
// //               top-4
// //               z-20
// //               h-4
// //               w-4
// //               border-r
// //               border-t
// //               border-[#C5934D]/60
// //             "
// //           />

// //           <div
// //             className="
// //               absolute
// //               bottom-4
// //               left-4
// //               z-20
// //               h-4
// //               w-4
// //               border-b
// //               border-l
// //               border-[#C5934D]/60
// //             "
// //           />

// //           <div
// //             className="
// //               absolute
// //               bottom-4
// //               right-4
// //               z-20
// //               h-4
// //               w-4
// //               border-b
// //               border-r
// //               border-[#C5934D]/60
// //             "
// //           />


// //           {/* =================================================
// //               CALCULATOR CONTENT
// //               ================================================= */}

// //           {!lifePath ? (

// //             <motion.div
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               className="
// //                 relative
// //                 z-20
// //                 p-[clamp(30px,4vw,52px)]
// //               "
// //             >

// //               {/* Small label */}

// //               <div
// //                 className="
// //                   mb-7
// //                   flex
// //                   items-center
// //                   gap-3
// //                 "
// //               >

// //                 <div
// //                   className="
// //                     h-[1px]
// //                     w-[35px]
// //                     bg-[#C5934D]
// //                   "
// //                 />

// //                 <span
// //                   className="
// //                     text-[10px]
// //                     font-semibold
// //                     uppercase
// //                     tracking-[0.22em]
// //                     text-[#87533E]
// //                   "
// //                 >
// //                   Life Path Calculator
// //                 </span>

// //               </div>


// //               {/* Intro */}

// //               <h3
// //                 className="
// //                   font-serif
// //                   text-[34px]
// //                   sm:text-[38px]
// //                   leading-[1.05]
// //                   tracking-[-0.02em]
// //                   text-[#363637]
// //                 "
// //               >
// //                 Enter your
// //                 <br />
// //                 date of birth.
// //               </h3>

// //               <p
// //                 className="
// //                   mt-4
// //                   max-w-[390px]
// //                   text-[13px]
// //                   leading-[1.7]
// //                   text-[#363637]
// //                 "
// //               >
// //                 Discover the traditional numerology interpretation
// //                 associated with your Life Path number.
// //               </p>


// //               {/* =================================================
// //                   DATE INPUTS
// //                   ================================================= */}

// //               <div
// //                 className="
// //                   mt-9
// //                   grid
// //                   grid-cols-3
// //                   gap-[14px]
// //                   max-sm:gap-[9px]
// //                 "
// //               >

// //                 {/* Day */}

// //                 <label
// //                   className="
// //                     text-[10px]
// //                     font-semibold
// //                     uppercase
// //                     tracking-[0.18em]
// //                     text-[#765c48]
// //                   "
// //                 >
// //                   Day

// //                   <input
// //                     className="
// //                       mt-3
// //                       block
// //                       w-full
// //                       border-0
// //                       border-b
// //                       border-[#C5934D]/45
// //                       bg-transparent
// //                       pb-3
// //                       pt-1
// //                       font-serif
// //                       text-[30px]
// //                       text-[#363637]
// //                       outline-none
// //                       transition-colors
// //                       placeholder:text-[#8a6f5a]/25
// //                       focus:border-[#87533E]
// //                       max-sm:text-[24px]
// //                     "
// //                     type="number"
// //                     min={1}
// //                     max={31}
// //                     placeholder="14"
// //                     value={birth.day}
// //                     onChange={(e) =>
// //                       setBirth({
// //                         ...birth,
// //                         day: e.target.value,
// //                       })
// //                     }
// //                   />
// //                 </label>


// //                 {/* Month */}

// //                 <label
// //                   className="
// //                     text-[10px]
// //                     font-semibold
// //                     uppercase
// //                     tracking-[0.18em]
// //                     text-[#765c48]
// //                   "
// //                 >
// //                   Month

// //                   <input
// //                     className="
// //                       mt-3
// //                       block
// //                       w-full
// //                       border-0
// //                       border-b
// //                       border-[#C5934D]/45
// //                       bg-transparent
// //                       pb-3
// //                       pt-1
// //                       font-serif
// //                       text-[30px]
// //                       text-[#363637]
// //                       outline-none
// //                       transition-colors
// //                       placeholder:text-[#8a6f5a]/25
// //                       focus:border-[#87533E]
// //                       max-sm:text-[24px]
// //                     "
// //                     type="number"
// //                     min={1}
// //                     max={12}
// //                     placeholder="08"
// //                     value={birth.month}
// //                     onChange={(e) =>
// //                       setBirth({
// //                         ...birth,
// //                         month: e.target.value,
// //                       })
// //                     }
// //                   />
// //                 </label>


// //                 {/* Year */}

// //                 <label
// //                   className="
// //                     text-[10px]
// //                     font-semibold
// //                     uppercase
// //                     tracking-[0.18em]
// //                     text-[#765c48]
// //                   "
// //                 >
// //                   Year

// //                   <input
// //                     className="
// //                       mt-3
// //                       block
// //                       w-full
// //                       border-0
// //                       border-b
// //                       border-[#C5934D]/45
// //                       bg-transparent
// //                       pb-3
// //                       pt-1
// //                       font-serif
// //                       text-[30px]
// //                       text-[#363637]
// //                       outline-none
// //                       transition-colors
// //                       placeholder:text-[#8a6f5a]/25
// //                       focus:border-[#87533E]
// //                       max-sm:text-[24px]
// //                     "
// //                     type="number"
// //                     min={1900}
// //                     max={2100}
// //                     placeholder="1998"
// //                     value={birth.year}
// //                     onChange={(e) =>
// //                       setBirth({
// //                         ...birth,
// //                         year: e.target.value,
// //                       })
// //                     }
// //                   />
// //                 </label>

// //               </div>


// //               {/* =================================================
// //                   REVEAL BUTTON
// //                   ================================================= */}

// //               <button
// //                 onClick={revealLifePath}
// //                 className="
// //                   group
// //                   mt-9
// //                   inline-flex
// //                   min-h-[50px]
// //                   items-center
// //                   justify-center
// //                   gap-3
// //                   rounded-full
// //                   bg-[#87533E]
// //                   px-7
// //                   text-[11px]
// //                   font-semibold
// //                   uppercase
// //                   tracking-[0.14em]
// //                   text-[#FDFBF7]
// //                   shadow-[0_8px_22px_rgba(169,79,47,0.22)]
// //                   transition-all
// //                   duration-300
// //                   hover:-translate-y-[2px]
// //                   hover:bg-[#963f24]
// //                   hover:shadow-[0_12px_28px_rgba(169,79,47,0.30)]
// //                 "
// //               >
// //                 <span>
// //                   Reveal my number
// //                 </span>

// //                 <ArrowRight
// //                   size={15}
// //                   className="
// //                     transition-transform
// //                     duration-300
// //                     group-hover:translate-x-1
// //                   "
// //                 />
// //               </button>

// //             </motion.div>

// //           ) : (

// //             /* =================================================
// //                RESULT
// //                ================================================= */

// //             <motion.div
// //               className="
// //                 relative
// //                 z-20
// //                 p-[clamp(30px,4vw,52px)]
// //               "
// //               initial={{
// //                 opacity: 0,
// //                 y: 12,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               aria-live="polite"
// //             >

// //               {/* Back */}

// //               <button
// //                 onClick={() => setLifePath(null)}
// //                 className="
// //                   group
// //                   mb-8
// //                   flex
// //                   items-center
// //                   gap-2
// //                   text-[10px]
// //                   font-semibold
// //                   uppercase
// //                   tracking-[0.15em]
// //                   text-[#765c48]
// //                   transition-colors
// //                   hover:text-[#87533E]
// //                 "
// //               >
// //                 <ArrowLeft
// //                   size={14}
// //                   className="
// //                     transition-transform
// //                     group-hover:-translate-x-1
// //                   "
// //                 />

// //                 Back
// //               </button>


// //               {/* Result */}

// //               <div
// //                 className="
// //                   flex
// //                   flex-col
// //                   items-center
// //                   gap-6
// //                   text-center
// //                 "
// //               >

// //                 <NumberRing
// //                   number={lifePath}
// //                   label="LIFE PATH"
// //                   small
// //                 />


// //                 <div
// //                   className="
// //                     flex
// //                     flex-col
// //                     items-center
// //                   "
// //                 >

// //                   <span
// //                     className="
// //                       block
// //                       text-[10px]
// //                       font-bold
// //                       uppercase
// //                       tracking-[0.23em]
// //                       leading-[1.5]
// //                       text-[#87533E]
// //                     "
// //                   >
// //                     Your Life Path number
// //                   </span>


// //                   <h3
// //                     className="
// //                       my-[10px]
// //                       mb-[7px]
// //                       font-serif
// //                       text-[38px]
// //                       font-medium
// //                       leading-none
// //                       tracking-[-0.02em]
// //                       text-[#363637]
// //                       max-sm:text-[32px]
// //                     "
// //                   >
// //                     {getInterpretation(lifePath).title}
// //                   </h3>


// //                   <p
// //                     className="
// //                       m-0
// //                       mb-5
// //                       max-w-[400px]
// //                       text-[13px]
// //                       leading-[1.7]
// //                       text-[#363637]
// //                     "
// //                   >
// //                     {getInterpretation(lifePath).summary}
// //                   </p>


// //                   <BookingButton
// //                     label="Explore a personal reading"
// //                     variant="text"
// //                   />

// //                 </div>

// //               </div>

// //             </motion.div>

// //           )}

// //         </motion.div>


// //         {/* =====================================================
// //             RIGHT CONTENT
// //             ===================================================== */}

// //         <motion.div
// //           initial={{
// //             opacity: 0,
// //             x: 25,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             x: 0,
// //           }}
// //           viewport={{
// //             once: true,
// //           }}
// //           transition={{
// //             duration: 0.8,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //           className="
// //             self-center
// //             [&_h2]:text-[clamp(46px,5vw,70px)]
// //           "
// //         >

// //           <SectionHeading
// //             eyebrow="Your first step"
// //             title="Discover your Life Path number."
// //             text="Begin with your date of birth and explore the traditional numerology interpretation associated with your Life Path Number."
// //           />

// //           <div className="mt-8">
// //             <OrnamentalDivider />
// //           </div>


// //           {/* Supporting statement */}

// //           <div
// //             className="
// //               mt-7
// //               flex
// //               items-start
// //               gap-4
// //             "
// //           >

// //             <div
// //               className="
// //                 mt-[7px]
// //                 h-[7px]
// //                 w-[7px]
// //                 shrink-0
// //                 rotate-45
// //                 bg-[#87533E]
// //               "
// //             />

// //             <span
// //               className="
// //                 block
// //                 max-w-[500px]
// //                 text-[14px]
// //                 leading-[1.7]
// //                 text-[#8a6f5a]
// //               "
// //             >
// //               Your result is a starting point for reflection,
// //               offering a different way to look at the patterns
// //               associated with your birth date.
// //             </span>

// //           </div>

// //         </motion.div>

// //       </div>

// //     </section>
// //   );
// // }




// import { useState } from 'react';
// import lifepathBg from '@/assets/lifepathbg.png';
// import { ArrowRight, ArrowLeft } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { SectionHeading } from '@/components/SectionHeading';
// import { OrnamentalDivider } from '@/components/OrnamentalDivider';
// import { NumberRing } from '@/components/NumberRing';
// import { BookingButton } from '@/components/BookingButton';
// import { getInterpretation } from '@/data/numerologyInterpretations';
// import { calculateLifePathNumber } from '@/utils/numerologyUtils';

// export function LifePathCalculator() {
//   const [birth, setBirth] = useState({
//     day: '',
//     month: '',
//     year: '',
//   });

//   const [lifePath, setLifePath] = useState<number | null>(null);

//   const revealLifePath = () => {
//     const values = [birth.day, birth.month, birth.year].map(Number);

//     if (values.every((value) => value > 0)) {
//       setLifePath(
//         calculateLifePathNumber(
//           values[0],
//           values[1],
//           values[2]
//         )
//       );
//     }
//   };

//   return (
//     <section
//       id="calculator"
//       className="
//         relative
//         overflow-hidden
//         bg-[#FDFBF7]
//         pt-[120px]
//         pb-[125px]
//         border-b
//         border-[#C5934D]/20
//       "
//     >

//       {/* =====================================================
//           BACKGROUND DECORATION
//           ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[280px]
//           top-[50%]
//           -translate-y-1/2
//           h-[650px]
//           w-[650px]
//           rounded-full
//           border
//           border-[#C5934D]/10
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[220px]
//           top-[50%]
//           -translate-y-1/2
//           h-[520px]
//           w-[520px]
//           rounded-full
//           border
//           border-dashed
//           border-[#C5934D]/10
//         "
//       />

//       {/* Decorative diamonds */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[6%]
//           top-[18%]
//           h-[7px]
//           w-[7px]
//           rotate-45
//           bg-[#87533E]
//           opacity-60
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[7%]
//           bottom-[18%]
//           h-[7px]
//           w-[7px]
//           rotate-45
//           bg-[#87533E]
//           opacity-50
//         "
//       />


//       {/* =====================================================
//           MAIN CONTENT
//           ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           grid
//           grid-cols-[0.95fr_1.05fr]
//           max-md:grid-cols-1
//           gap-[10%]
//           max-md:gap-[65px]
//           max-w-[1240px]
//           mx-auto
//           px-[clamp(24px,5vw,80px)]
//         "
//       >

//         {/* =================================================
//             CALCULATOR CARD
//             ================================================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             self-center
//             overflow-hidden
//             border
//             border-[#C5934D]/35
//             bg-[#f8f1e7]
//             shadow-[0_20px_60px_rgba(92,60,30,0.10)]
//           "
//         >

//           {/* =================================================
//               BACKGROUND IMAGE
//               ================================================= */}

//           <div
//             className="
//               absolute
//               inset-0
//               z-0
//               bg-cover
//               bg-center
//               bg-no-repeat
//               opacity-[0.35]
//             "
//             style={{
//               backgroundImage: `url(${lifepathBg})`,
//             }}
//           />

//           {/* Warm overlay */}
//           <div
//             className="
//               absolute
//               inset-0
//               z-0
//               bg-[#FDFBF7]/75
//               backdrop-blur-[1px]
//             "
//           />

//           {/* Subtle inner border */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-[10px]
//               z-10
//               border
//               border-[#C5934D]/15
//             "
//           />

//           {/* Architectural corners */}

//           <div
//             className="
//               absolute
//               left-4
//               top-4
//               z-20
//               h-4
//               w-4
//               border-l
//               border-t
//               border-[#C5934D]/60
//             "
//           />

//           <div
//             className="
//               absolute
//               right-4
//               top-4
//               z-20
//               h-4
//               w-4
//               border-r
//               border-t
//               border-[#C5934D]/60
//             "
//           />

//           <div
//             className="
//               absolute
//               bottom-4
//               left-4
//               z-20
//               h-4
//               w-4
//               border-b
//               border-l
//               border-[#C5934D]/60
//             "
//           />

//           <div
//             className="
//               absolute
//               bottom-4
//               right-4
//               z-20
//               h-4
//               w-4
//               border-b
//               border-r
//               border-[#C5934D]/60
//             "
//           />


//           {/* =================================================
//               CALCULATOR CONTENT
//               ================================================= */}

//           {!lifePath ? (

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="
//                 relative
//                 z-20
//                 p-[clamp(30px,4vw,52px)]
//               "
//             >

//               {/* Small label */}

//               <div
//                 className="
//                   mb-7
//                   flex
//                   items-center
//                   gap-3
//                 "
//               >

//                 <div
//                   className="
//                     h-[1px]
//                     w-[35px]
//                     bg-[#C5934D]
//                   "
//                 />

//                 <span
//                   className="
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#87533E]
//                   "
//                 >
//                   Life Path Calculator
//                 </span>

//               </div>


//               {/* Intro */}

//               <h3
//                 className="
//                   font-serif
//                   text-[34px]
//                   sm:text-[38px]
//                   leading-[1.05]
//                   tracking-[-0.02em]
//                   text-[#363637]
//                 "
//               >
//                 Enter your
//                 <br />
//                 date of birth.
//               </h3>

//               <p
//                 className="
//                   mt-4
//                   max-w-[390px]
//                   text-[13px]
//                   leading-[1.7]
//                   text-[#363637]
//                 "
//               >
//                 Discover the traditional numerology interpretation
//                 associated with your Life Path number.
//               </p>


//               {/* =================================================
//                   DATE INPUTS
//                   ================================================= */}

//               <div
//                 className="
//                   mt-9
//                   grid
//                   grid-cols-3
//                   gap-[14px]
//                   max-sm:gap-[9px]
//                 "
//               >

//                 {/* Day */}

//                 <label
//                   className="
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.18em]
//                     text-[#765c48]
//                   "
//                 >
//                   Day

//                   <input
//                     className="
//                       mt-3
//                       block
//                       w-full
//                       border-0
//                       border-b
//                       border-[#C5934D]/45
//                       bg-transparent
//                       pb-3
//                       pt-1
//                       font-serif
//                       text-[30px]
//                       text-[#363637]
//                       outline-none
//                       transition-colors
//                       placeholder:text-[#8a6f5a]/25
//                       focus:border-[#87533E]
//                       max-sm:text-[24px]
//                     "
//                     type="number"
//                     min={1}
//                     max={31}
//                     placeholder="14"
//                     value={birth.day}
//                     onChange={(e) =>
//                       setBirth({
//                         ...birth,
//                         day: e.target.value,
//                       })
//                     }
//                   />
//                 </label>


//                 {/* Month */}

//                 <label
//                   className="
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.18em]
//                     text-[#765c48]
//                   "
//                 >
//                   Month

//                   <input
//                     className="
//                       mt-3
//                       block
//                       w-full
//                       border-0
//                       border-b
//                       border-[#C5934D]/45
//                       bg-transparent
//                       pb-3
//                       pt-1
//                       font-serif
//                       text-[30px]
//                       text-[#363637]
//                       outline-none
//                       transition-colors
//                       placeholder:text-[#8a6f5a]/25
//                       focus:border-[#87533E]
//                       max-sm:text-[24px]
//                     "
//                     type="number"
//                     min={1}
//                     max={12}
//                     placeholder="08"
//                     value={birth.month}
//                     onChange={(e) =>
//                       setBirth({
//                         ...birth,
//                         month: e.target.value,
//                       })
//                     }
//                   />
//                 </label>


//                 {/* Year */}

//                 <label
//                   className="
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.18em]
//                     text-[#765c48]
//                   "
//                 >
//                   Year

//                   <input
//                     className="
//                       mt-3
//                       block
//                       w-full
//                       border-0
//                       border-b
//                       border-[#C5934D]/45
//                       bg-transparent
//                       pb-3
//                       pt-1
//                       font-serif
//                       text-[30px]
//                       text-[#363637]
//                       outline-none
//                       transition-colors
//                       placeholder:text-[#8a6f5a]/25
//                       focus:border-[#87533E]
//                       max-sm:text-[24px]
//                     "
//                     type="number"
//                     min={1900}
//                     max={2100}
//                     placeholder="1998"
//                     value={birth.year}
//                     onChange={(e) =>
//                       setBirth({
//                         ...birth,
//                         year: e.target.value,
//                       })
//                     }
//                   />
//                 </label>

//               </div>


//               {/* =================================================
//                   REVEAL BUTTON
//                   ================================================= */}

//               <button
//                 onClick={revealLifePath}
//                 className="
//                   group
//                   mt-9
//                   inline-flex
//                   min-h-[50px]
//                   items-center
//                   justify-center
//                   gap-3
//                   rounded-full
//                   bg-[#87533E]
//                   px-7
//                   text-[11px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.14em]
//                   text-[#FDFBF7]
//                   shadow-[0_8px_22px_rgba(169,79,47,0.22)]
//                   transition-all
//                   duration-300
//                   hover:-translate-y-[2px]
//                   hover:bg-[#963f24]
//                   hover:shadow-[0_12px_28px_rgba(169,79,47,0.30)]
//                 "
//               >
//                 <span>
//                   Reveal my number
//                 </span>

//                 <ArrowRight
//                   size={15}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 />
//               </button>

//             </motion.div>

//           ) : (

//             /* =================================================
//                RESULT
//                ================================================= */

//             <motion.div
//               className="
//                 relative
//                 z-20
//                 p-[clamp(30px,4vw,52px)]
//               "
//               initial={{
//                 opacity: 0,
//                 y: 12,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               aria-live="polite"
//             >

//               {/* Back */}

//               <button
//                 onClick={() => setLifePath(null)}
//                 className="
//                   group
//                   mb-8
//                   flex
//                   items-center
//                   gap-2
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.15em]
//                   text-[#765c48]
//                   transition-colors
//                   hover:text-[#87533E]
//                 "
//               >
//                 <ArrowLeft
//                   size={14}
//                   className="
//                     transition-transform
//                     group-hover:-translate-x-1
//                   "
//                 />

//                 Back
//               </button>


//               {/* Result */}

//               <div
//                 className="
//                   flex
//                   flex-col
//                   items-center
//                   gap-6
//                   text-center
//                 "
//               >

//                 <NumberRing
//                   number={lifePath}
//                   label="LIFE PATH"
//                   small
//                 />


//                 <div
//                   className="
//                     flex
//                     flex-col
//                     items-center
//                   "
//                 >

//                   <span
//                     className="
//                       block
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-[0.23em]
//                       leading-[1.5]
//                       text-[#87533E]
//                     "
//                   >
//                     Your Life Path number
//                   </span>


//                   <h3
//                     className="
//                       my-[10px]
//                       mb-[7px]
//                       font-serif
//                       text-[38px]
//                       font-medium
//                       leading-none
//                       tracking-[-0.02em]
//                       text-[#363637]
//                       max-sm:text-[32px]
//                     "
//                   >
//                     {getInterpretation(lifePath).title}
//                   </h3>


//                   <p
//                     className="
//                       m-0
//                       mb-5
//                       max-w-[400px]
//                       text-[13px]
//                       leading-[1.7]
//                       text-[#363637]
//                     "
//                   >
//                     {getInterpretation(lifePath).summary}
//                   </p>


//                   <BookingButton
//                     label="Explore a personal reading"
//                     variant="text"
//                   />

//                 </div>

//               </div>

//             </motion.div>

//           )}

//         </motion.div>


//         {/* =====================================================
//             RIGHT CONTENT
//             ===================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             x: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             self-center
//             [&_h2]:text-[clamp(46px,5vw,70px)]
//           "
//         >

//           <SectionHeading
//             eyebrow="Your first step"
//             title="Discover your Life Path number."
//             text="Begin with your date of birth and explore the traditional numerology interpretation associated with your Life Path Number."
//           />

//           <div className="mt-8">
//             <OrnamentalDivider />
//           </div>


//           {/* Supporting statement */}

//           <div
//             className="
//               mt-7
//               flex
//               items-start
//               gap-4
//             "
//           >

//             <div
//               className="
//                 mt-[7px]
//                 h-[7px]
//                 w-[7px]
//                 shrink-0
//                 rotate-45
//                 bg-[#87533E]
//               "
//             />

//             <span
//               className="
//                 block
//                 max-w-[500px]
//                 text-[14px]
//                 leading-[1.7]
//                 text-[#8a6f5a]
//               "
//             >
//               Your result is a starting point for reflection,
//               offering a different way to look at the patterns
//               associated with your birth date.
//             </span>

//           </div>

//         </motion.div>

//       </div>

//     </section>
//   );
// }


import { useState } from 'react';
import lifepathBg from '@/assets/lifepathbg.png';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/SectionHeading';
import { OrnamentalDivider } from '@/components/OrnamentalDivider';
import { NumberRing } from '@/components/NumberRing';
import { BookingButton } from '@/components/BookingButton';

import { getInterpretation } from '@/data/numerologyInterpretations';
import { calculateLifePathNumber } from '@/utils/numerologyUtils';

export function LifePathCalculator() {
  const [birth, setBirth] = useState({
    day: '',
    month: '',
    year: '',
  });

  const [lifePath, setLifePath] = useState<number | null>(null);

  const revealLifePath = () => {
    const values = [birth.day, birth.month, birth.year].map(Number);

    if (values.every((value) => value > 0)) {
      setLifePath(
        calculateLifePathNumber(
          values[0],
          values[1],
          values[2]
        )
      );
    }
  };

  return (
    <section
      id="calculator"
      className="
        relative
        overflow-hidden
        bg-[#FDFBF7]
        pt-[120px]
        pb-[125px]
        border-b
        border-[#C5934D]/20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
          ===================================================== */}

      {/* Large circle */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          top-[50%]
          -translate-y-1/2
          h-[650px]
          w-[650px]
          rounded-full
          border
          border-[#C5934D]/10
        "
      />

      {/* Dashed circle */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          top-[50%]
          -translate-y-1/2
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-dashed
          border-[#C5934D]/10
        "
      />

      {/* Terracotta decorative diamond */}
      <div
        className="
          pointer-events-none
          absolute
          left-[6%]
          top-[18%]
          h-[7px]
          w-[7px]
          rotate-45
          bg-[#87533E]
          opacity-60
        "
      />

      {/* Terracotta decorative diamond */}
      <div
        className="
          pointer-events-none
          absolute
          right-[7%]
          bottom-[18%]
          h-[7px]
          w-[7px]
          rotate-45
          bg-[#87533E]
          opacity-50
        "
      />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          grid
          grid-cols-[0.95fr_1.05fr]
          max-md:grid-cols-1
          gap-[10%]
          max-md:gap-[65px]
          max-w-[1240px]
          mx-auto
          px-[clamp(24px,5vw,80px)]
        "
      >

        {/* =================================================
            CALCULATOR CARD
            ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            self-center
            overflow-hidden
            border
            border-[#C5934D]/40
            bg-[#FDFBF7]
            shadow-[0_20px_60px_rgba(9,9,9,0.08)]
          "
        >

          {/* =================================================
              BACKGROUND IMAGE
              ================================================= */}

          <div
            className="
              absolute
              inset-0
              z-0
              bg-cover
              bg-center
              bg-no-repeat
              opacity-[0.30]
            "
            style={{
              backgroundImage: `url(${lifepathBg})`,
            }}
          />

          {/* Warm ivory overlay */}
          <div
            className="
              absolute
              inset-0
              z-0
              bg-[#FDFBF7]/80
              backdrop-blur-[1px]
            "
          />

          {/* Subtle inner border */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[10px]
              z-10
              border
              border-[#C5934D]/20
            "
          />

          {/* Architectural corners */}

          <div
            className="
              absolute
              left-4
              top-4
              z-20
              h-4
              w-4
              border-l
              border-t
              border-[#C5934D]/70
            "
          />

          <div
            className="
              absolute
              right-4
              top-4
              z-20
              h-4
              w-4
              border-r
              border-t
              border-[#C5934D]/70
            "
          />

          <div
            className="
              absolute
              bottom-4
              left-4
              z-20
              h-4
              w-4
              border-b
              border-l
              border-[#C5934D]/70
            "
          />

          <div
            className="
              absolute
              bottom-4
              right-4
              z-20
              h-4
              w-4
              border-b
              border-r
              border-[#C5934D]/70
            "
          />

          {/* =================================================
              CALCULATOR CONTENT
              ================================================= */}

          {!lifePath ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                relative
                z-20
                p-[clamp(30px,4vw,52px)]
              "
            >

              {/* Small label */}

              <div
                className="
                  mb-7
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    h-[1px]
                    w-[35px]
                    bg-[#C5934D]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#87533E]
                  "
                >
                  Life Path Calculator
                </span>
              </div>

              {/* Intro */}

              <h3
                className="
                  font-serif
                  text-[34px]
                  sm:text-[38px]
                  leading-[1.05]
                  tracking-[-0.02em]
                  text-[#363637]
                "
              >
                Enter your
                <br />
                date of birth.
              </h3>

              <p
                className="
                  mt-4
                  max-w-[390px]
                  text-[13px]
                  leading-[1.7]
                  text-[#363637]/75
                "
              >
                Discover the traditional numerology interpretation
                associated with your Life Path number.
              </p>

              {/* =================================================
                  DATE INPUTS
                  ================================================= */}

              <div
                className="
                  mt-9
                  grid
                  grid-cols-3
                  gap-[14px]
                  max-sm:gap-[9px]
                "
              >

                {/* Day */}

                <label
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#363637]/70
                  "
                >
                  Day

                  <input
                    className="
                      mt-3
                      block
                      w-full
                      border-0
                      border-b
                      border-[#C5934D]/50
                      bg-transparent
                      pb-3
                      pt-1
                      font-serif
                      text-[30px]
                      text-[#363637]
                      outline-none
                      transition-colors
                      placeholder:text-[#363637]/20
                      focus:border-[#87533E]
                      max-sm:text-[24px]
                    "
                    type="number"
                    min={1}
                    max={31}
                    placeholder="14"
                    value={birth.day}
                    onChange={(e) =>
                      setBirth({
                        ...birth,
                        day: e.target.value,
                      })
                    }
                  />
                </label>

                {/* Month */}

                <label
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#363637]/70
                  "
                >
                  Month

                  <input
                    className="
                      mt-3
                      block
                      w-full
                      border-0
                      border-b
                      border-[#C5934D]/50
                      bg-transparent
                      pb-3
                      pt-1
                      font-serif
                      text-[30px]
                      text-[#363637]
                      outline-none
                      transition-colors
                      placeholder:text-[#363637]/20
                      focus:border-[#87533E]
                      max-sm:text-[24px]
                    "
                    type="number"
                    min={1}
                    max={12}
                    placeholder="08"
                    value={birth.month}
                    onChange={(e) =>
                      setBirth({
                        ...birth,
                        month: e.target.value,
                      })
                    }
                  />
                </label>

                {/* Year */}

                <label
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#363637]/70
                  "
                >
                  Year

                  <input
                    className="
                      mt-3
                      block
                      w-full
                      border-0
                      border-b
                      border-[#C5934D]/50
                      bg-transparent
                      pb-3
                      pt-1
                      font-serif
                      text-[30px]
                      text-[#363637]
                      outline-none
                      transition-colors
                      placeholder:text-[#363637]/20
                      focus:border-[#87533E]
                      max-sm:text-[24px]
                    "
                    type="number"
                    min={1900}
                    max={2100}
                    placeholder="1998"
                    value={birth.year}
                    onChange={(e) =>
                      setBirth({
                        ...birth,
                        year: e.target.value,
                      })
                    }
                  />
                </label>
              </div>

              {/* =================================================
                  REVEAL BUTTON
                  ================================================= */}

              <button
                onClick={revealLifePath}
                className="
                  group
                  mt-9
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#87533E]
                  px-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#FDFBF7]
                  shadow-[0_8px_22px_rgba(168,80,48,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#060606]
                  hover:shadow-[0_12px_28px_rgba(9,9,9,0.20)]
                "
              >
                <span>
                  Reveal my number
                </span>

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </motion.div>

          ) : (

            /* =================================================
               RESULT
               ================================================= */

            <motion.div
              className="
                relative
                z-20
                p-[clamp(30px,4vw,52px)]
              "
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              aria-live="polite"
            >

              {/* Back */}

              <button
                onClick={() => setLifePath(null)}
                className="
                  group
                  mb-8
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#363637]/70
                  transition-colors
                  hover:text-[#87533E]
                "
              >
                <ArrowLeft
                  size={14}
                  className="
                    transition-transform
                    group-hover:-translate-x-1
                  "
                />

                Back
              </button>

              {/* Result */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  gap-6
                  text-center
                "
              >

                <NumberRing
                  number={lifePath}
                  label="LIFE PATH"
                  small
                />

                <div
                  className="
                    flex
                    flex-col
                    items-center
                  "
                >

                  <span
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.23em]
                      leading-[1.5]
                      text-[#87533E]
                    "
                  >
                    Your Life Path number
                  </span>

                  <h3
                    className="
                      my-[10px]
                      mb-[7px]
                      font-serif
                      text-[38px]
                      font-medium
                      leading-none
                      tracking-[-0.02em]
                      text-[#363637]
                      max-sm:text-[32px]
                    "
                  >
                    {getInterpretation(lifePath).title}
                  </h3>

                  <p
                    className="
                      m-0
                      mb-5
                      max-w-[400px]
                      text-[13px]
                      leading-[1.7]
                      text-[#363637]/75
                    "
                  >
                    {getInterpretation(lifePath).summary}
                  </p>

                  <BookingButton
                    label="Explore a personal reading"
                    variant="text"
                  />

                </div>
              </div>

            </motion.div>
          )}

        </motion.div>

        {/* =====================================================
            RIGHT CONTENT
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            self-center
            [&_h2]:text-[clamp(46px,5vw,70px)]
          "
        >

          <SectionHeading
            eyebrow="Your first step"
            title="Discover your Life Path number."
            text="Begin with your date of birth and explore the traditional numerology interpretation associated with your Life Path Number."
          />

          <div className="mt-8">
            <OrnamentalDivider />
          </div>

          {/* Supporting statement */}

          <div
            className="
              mt-7
              flex
              items-start
              gap-4
            "
          >

            <div
              className="
                mt-[7px]
                h-[7px]
                w-[7px]
                shrink-0
                rotate-45
                bg-[#87533E]
              "
            />

            <span
              className="
                block
                max-w-[500px]
                text-[14px]
                leading-[1.7]
                text-[#363637]/70
              "
            >
              Your result is a starting point for reflection,
              offering a different way to look at the patterns
              associated with your birth date.
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}