// // import { motion } from "framer-motion";
// // import {
// //   ArrowUpRight,
// //   Sparkles,
// //   BriefcaseBusiness,
// //   Heart,
// //   Grid3X3,
// //   WandSparkles,
// //   ScrollText,
// // } from "lucide-react";

// // const services = [
// //   {
// //     number: "01",
// //     title: "Personal Numerology",
// //     description:
// //       "Understand your core numbers, personality, destiny and the patterns that shape your personal journey.",
// //     icon: Sparkles,
// //   },
// //   {
// //     number: "02",
// //     title: "Career & Business Numerology",
// //     description:
// //       "Explore numerology insights related to career direction, professional strengths and business suitability.",
// //     icon: BriefcaseBusiness,
// //   },
// //   {
// //     number: "03",
// //     title: "Name Numerology",
// //     description:
// //       "Analyze the numerical vibration of your name and explore possible name adjustments.",
// //     icon: WandSparkles,
// //   },
// //   {
// //     number: "04",
// //     title: "Lo Shu Grid Analysis",
// //     description:
// //       "Understand the numbers present and missing in your Lo Shu Grid and the patterns they represent.",
// //     icon: Grid3X3,
// //   },
// //   {
// //     number: "05",
// //     title: "Remedies & Guidance",
// //     description:
// //       "Receive personalized suggestions based on your numerology analysis and missing numbers.",
// //     icon: Heart,
// //   },
// //   {
// //     number: "06",
// //     title: "Comprehensive Numerology Report",
// //     description:
// //       "A detailed personalized report bringing together your core numbers, combinations, career and business insights, Lo Shu Grid, name analysis, remedies and final guidance.",
// //     icon: ScrollText,
// //   },
// // ];

// // export default function NumerologyServices() {
// //   return (
// //     <section
// //       id="services"
// //       className="relative overflow-hidden bg-[#F8F3E8] py-24 md:py-32"
// //     >
// //       {/* Decorative background elements */}
// //       <div className="pointer-events-none absolute inset-0">
// //         <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full border border-[#C5A267]/20" />
// //         <div className="absolute right-[-150px] bottom-10 h-96 w-96 rounded-full border border-[#C5A267]/20" />

// //         <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-[#C5A267]/30" />
// //       </div>

// //       <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
// //         {/* Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 35 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.25 }}
// //           transition={{ duration: 0.7 }}
// //           className="mx-auto mb-16 max-w-4xl text-center"
// //         >
// //           {/* Eyebrow */}
// //           <div className="mb-5 flex items-center justify-center gap-4">
// //             <span className="h-px w-12 bg-[#C5A267]" />

// //             <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#A98243]">
// //               Numerology Consultations
// //             </span>

// //             <span className="h-px w-12 bg-[#C5A267]" />
// //           </div>

// //           {/* Main heading */}
// //           <h2 className="font-serif text-5xl font-normal leading-[0.98] tracking-[-0.035em] text-[#2B211B] sm:text-6xl md:text-7xl">
// //             Understand the numbers
// //             <br />
// //             <span className="italic text-[#A98243]">
// //               behind your life's patterns.
// //             </span>
// //           </h2>

// //           <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#5B4A3D] md:text-base">
// //             Discover a deeper perspective through personalized numerology
// //             consultations designed to help you understand your numbers,
// //             patterns and possibilities.
// //           </p>
// //         </motion.div>

// //         {/* Services grid */}
// //         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
// //           {services.map((service, index) => {
// //             const Icon = service.icon;

// //             return (
// //               <motion.article
// //                 key={service.number}
// //                 initial={{ opacity: 0, y: 45 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, amount: 0.15 }}
// //                 transition={{
// //                   duration: 0.65,
// //                   delay: index * 0.08,
// //                 }}
// //                 whileHover={{ y: -8 }}
// //                 className="group relative"
// //               >
// //                 {/* Card */}
// //                 <div className="relative flex h-full min-h-[380px] flex-col overflow-hidden border border-[#C5A267]/45 bg-[#FBF7ED] p-7 transition-all duration-500 group-hover:border-[#A98243]/80 group-hover:shadow-[0_18px_50px_rgba(76,54,30,0.10)] md:p-8">
// //                   {/* Top line */}
// //                   <div className="absolute left-0 top-0 h-px w-0 bg-[#A98243] transition-all duration-700 group-hover:w-full" />

// //                   {/* Number */}
// //                   <div className="flex items-start justify-between">
// //                     <span className="font-serif text-5xl font-normal text-[#C5A267]/45 transition-colors duration-500 group-hover:text-[#A98243]/70">
// //                       {service.number}
// //                     </span>

// //                     <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A267]/50 text-[#A98243] transition-all duration-500 group-hover:border-[#A98243] group-hover:bg-[#A98243] group-hover:text-[#F8F3E8]">
// //                       <Icon size={18} strokeWidth={1.4} />
// //                     </div>
// //                   </div>

// //                   {/* Decorative divider */}
// //                   <div className="my-8 flex items-center gap-3">
// //                     <span className="h-px flex-1 bg-[#C5A267]/40" />
// //                     <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A267]" />
// //                     <span className="h-px w-8 bg-[#C5A267]/40" />
// //                   </div>

// //                   {/* Content */}
// //                   <div>
// //                     <h3 className="font-serif text-3xl leading-tight text-[#2B211B]">
// //                       {service.title}
// //                     </h3>

// //                     <p className="mt-5 text-[14px] leading-6 text-[#655448]">
// //                       {service.description}
// //                     </p>
// //                   </div>

// //                   {/* Bottom CTA */}
// //                   <div className="mt-auto pt-10">
// //                     <button className="group/link inline-flex items-center gap-3 border-b border-[#C5A267] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A2A20] transition-colors hover:text-[#A98243]">
// //                       Explore

// //                       <ArrowUpRight
// //                         size={14}
// //                         strokeWidth={1.5}
// //                         className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
// //                       />
// //                     </button>
// //                   </div>

// //                   {/* Bottom decorative corner */}
// //                   <div className="absolute bottom-0 right-0 h-20 w-20 border-l border-t border-[#C5A267]/20" />
// //                 </div>
// //               </motion.article>
// //             );
// //           })}
// //         </div>

// //         {/* Bottom CTA */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 25 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.7, delay: 0.2 }}
// //           className="mt-16 text-center"
// //         >
// //           <p className="mb-5 font-serif text-lg italic text-[#655448]">
// //             Your numbers tell a story. Let's understand yours.
// //           </p>

// //           <a
// //             href="#booking"
// //             className="group inline-flex items-center gap-3 bg-[#A98243] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F8F3E8] transition-all duration-300 hover:bg-[#A98243]/90"
// //           >
// //             Book a Consultation

// //             <ArrowUpRight
// //               size={16}
// //               strokeWidth={1.5}
// //               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
// //             />
// //           </a>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }












// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Sparkles,
//   BriefcaseBusiness,
//   Heart,
//   Grid3X3,
//   WandSparkles,
//   ScrollText,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     title: "Personal Numerology",
//     description:
//       "Understand your core numbers, personality, destiny and the patterns that shape your personal journey.",
//     icon: Sparkles,
//   },
//   {
//     number: "02",
//     title: "Career & Business Numerology",
//     description:
//       "Explore numerology insights related to career direction, professional strengths and business suitability.",
//     icon: BriefcaseBusiness,
//   },
//   {
//     number: "03",
//     title: "Name Numerology",
//     description:
//       "Analyze the numerical vibration of your name and explore possible name adjustments.",
//     icon: WandSparkles,
//   },
//   {
//     number: "04",
//     title: "Lo Shu Grid Analysis",
//     description:
//       "Understand the numbers present and missing in your Lo Shu Grid and the patterns they represent.",
//     icon: Grid3X3,
//   },
//   {
//     number: "05",
//     title: "Remedies & Guidance",
//     description:
//       "Receive personalized suggestions based on your numerology analysis and missing numbers.",
//     icon: Heart,
//   },
//   {
//     number: "06",
//     title: "Comprehensive Numerology Report",
//     description:
//       "A detailed personalized report bringing together your core numbers, combinations, career and business insights, Lo Shu Grid, name analysis, remedies and final guidance.",
//     icon: ScrollText,
//   },
// ];

// export default function NumerologyServices() {
//   return (
//     <section
//       id="services"
//       className="
//         relative
//         overflow-hidden
//         bg-[#FDFBF7]
//         py-[120px]
//         md:py-[140px]
//         border-b
//         border-[#C5934D]/20
//       "
//     >

//       {/* =====================================================
//           BACKGROUND DECORATION
//           ===================================================== */}

//       <div className="pointer-events-none absolute inset-0">

//         {/* Large left circle */}
//         <div
//           className="
//             absolute
//             -left-[220px]
//             top-[12%]
//             h-[520px]
//             w-[520px]
//             rounded-full
//             border
//             border-[#C5934D]/10
//           "
//         />

//         {/* Dashed left circle */}
//         <div
//           className="
//             absolute
//             -left-[160px]
//             top-[18%]
//             h-[400px]
//             w-[400px]
//             rounded-full
//             border
//             border-dashed
//             border-[#C5934D]/10
//           "
//         />

//         {/* Right circle */}
//         <div
//           className="
//             absolute
//             -right-[220px]
//             bottom-[8%]
//             h-[600px]
//             w-[600px]
//             rounded-full
//             border
//             border-[#C5934D]/10
//           "
//         />

//         {/* Top divider */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-0
//             h-px
//             w-[80%]
//             -translate-x-1/2
//             bg-gradient-to-r
//             from-transparent
//             via-[#C5934D]/30
//             to-transparent
//           "
//         />

//         {/* Decorative diamonds */}

//         <div
//           className="
//             absolute
//             left-[7%]
//             top-[24%]
//             h-[7px]
//             w-[7px]
//             rotate-45
//             bg-[#87533E]
//             opacity-60
//           "
//         />

//         <div
//           className="
//             absolute
//             right-[8%]
//             bottom-[24%]
//             h-[7px]
//             w-[7px]
//             rotate-45
//             bg-[#87533E]
//             opacity-50
//           "
//         />

//       </div>


//       {/* =====================================================
//           CONTENT
//           ===================================================== */}

//       <div
//         className="
//           relative
//           mx-auto
//           max-w-7xl
//           px-6
//           lg:px-10
//         "
//       >

//         {/* =================================================
//             HEADING
//             ================================================= */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mx-auto
//             mb-16
//             max-w-4xl
//             text-center
//           "
//         >

//           {/* Eyebrow */}

//           <div
//             className="
//               mb-6
//               flex
//               items-center
//               justify-center
//               gap-4
//             "
//           >

//             <span
//               className="
//                 h-px
//                 w-12
//                 bg-[#C5934D]
//               "
//             />

//             <span
//               className="
//                 text-[10px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.30em]
//                 text-[#87533E]
//               "
//             >
//               Numerology Consultations
//             </span>

//             <span
//               className="
//                 h-px
//                 w-12
//                 bg-[#C5934D]
//               "
//             />

//           </div>


//           {/* Heading */}

//           <h2
//             className="
//               font-serif
//               text-5xl
//               font-normal
//               leading-[0.98]
//               tracking-[-0.035em]
//               text-[#363637]
//               sm:text-6xl
//               md:text-7xl
//             "
//           >
//             Understand the numbers
//             <br />

//             <span
//               className="
//                 italic
//                 text-[#87533E]
//               "
//             >
//               behind your life's patterns.
//             </span>
//           </h2>


//           {/* Description */}

//           <p
//             className="
//               mx-auto
//               mt-7
//               max-w-2xl
//               text-[15px]
//               leading-7
//               text-[#363637]
//               md:text-base
//             "
//           >
//             Discover a deeper perspective through personalized numerology
//             consultations designed to help you understand your numbers,
//             patterns and possibilities.
//           </p>

//         </motion.div>


//         {/* =================================================
//             SERVICES GRID
//             ================================================= */}

//         <div
//           className="
//             grid
//             gap-5
//             md:grid-cols-2
//             lg:grid-cols-3
//           "
//         >

//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.article
//                 key={service.number}
//                 initial={{
//                   opacity: 0,
//                   y: 45,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.15,
//                 }}
//                 transition={{
//                   duration: 0.65,
//                   delay: index * 0.08,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 whileHover={{
//                   y: -7,
//                 }}
//                 className="
//                   group
//                   relative
//                 "
//               >

//                 {/* =================================================
//                     CARD
//                     ================================================= */}

//                 <div
//                   className="
//                     relative
//                     flex
//                     h-full
//                     min-h-[380px]
//                     flex-col
//                     overflow-hidden
//                     border
//                     border-[#C5934D]/30
//                     bg-[#FDFBF7]
//                     p-7
//                     transition-all
//                     duration-500
//                     group-hover:border-[#87533E]/45
//                     group-hover:bg-[#FDFBF7]
//                     group-hover:shadow-[0_20px_55px_rgba(76,54,30,0.09)]
//                     md:p-8
//                   "
//                 >

//                   {/* =================================================
//                       TOP ACCENT LINE
//                       ================================================= */}

//                   <div
//                     className="
//                       absolute
//                       left-0
//                       top-0
//                       h-[2px]
//                       w-0
//                       bg-[#87533E]
//                       transition-all
//                       duration-700
//                       group-hover:w-full
//                     "
//                   />


//                   {/* =================================================
//                       NUMBER + ICON
//                       ================================================= */}

//                   <div
//                     className="
//                       flex
//                       items-start
//                       justify-between
//                     "
//                   >

//                     <span
//                       className="
//                         font-serif
//                         text-5xl
//                         font-normal
//                         text-[#C5934D]/45
//                         transition-colors
//                         duration-500
//                         group-hover:text-[#87533E]/65
//                       "
//                     >
//                       {service.number}
//                     </span>


//                     <div
//                       className="
//                         flex
//                         h-11
//                         w-11
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-[#C5934D]/45
//                         text-[#87533E]
//                         transition-all
//                         duration-500
//                         group-hover:border-[#87533E]
//                         group-hover:bg-[#87533E]
//                         group-hover:text-[#FDFBF7]
//                       "
//                     >
//                       <Icon
//                         size={18}
//                         strokeWidth={1.4}
//                       />
//                     </div>

//                   </div>


//                   {/* =================================================
//                       DIVIDER
//                       ================================================= */}

//                   <div
//                     className="
//                       my-8
//                       flex
//                       items-center
//                       gap-3
//                     "
//                   >

//                     <span
//                       className="
//                         h-px
//                         flex-1
//                         bg-[#C5934D]/30
//                       "
//                     />

//                     <span
//                       className="
//                         h-1.5
//                         w-1.5
//                         rotate-45
//                         bg-[#C5934D]
//                       "
//                     />

//                     <span
//                       className="
//                         h-px
//                         w-8
//                         bg-[#C5934D]/30
//                       "
//                     />

//                   </div>


//                   {/* =================================================
//                       CONTENT
//                       ================================================= */}

//                   <div>

//                     <h3
//                       className="
//                         font-serif
//                         text-3xl
//                         leading-tight
//                         tracking-[-0.015em]
//                         text-[#363637]
//                       "
//                     >
//                       {service.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-5
//                         text-[14px]
//                         leading-6
//                         text-[#363637]
//                       "
//                     >
//                       {service.description}
//                     </p>

//                   </div>


//                   {/* =================================================
//                       CARD CTA
//                       ================================================= */}

//                   <div
//                     className="
//                       mt-auto
//                       pt-10
//                     "
//                   >

//                     <button
//                       className="
//                         group/link
//                         inline-flex
//                         items-center
//                         gap-3
//                         border-b
//                         border-[#C5934D]
//                         pb-2
//                         text-[10px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.20em]
//                         text-[#363637]
//                         transition-colors
//                         hover:text-[#87533E]
//                       "
//                     >

//                       Explore

//                       <ArrowUpRight
//                         size={14}
//                         strokeWidth={1.5}
//                         className="
//                           transition-transform
//                           duration-300
//                           group-hover/link:translate-x-1
//                           group-hover/link:-translate-y-1
//                         "
//                       />

//                     </button>

//                   </div>


//                   {/* =================================================
//                       DECORATIVE CORNER
//                       ================================================= */}

//                   <div
//                     className="
//                       absolute
//                       bottom-0
//                       right-0
//                       h-20
//                       w-20
//                       border-l
//                       border-t
//                       border-[#C5934D]/15
//                     "
//                   />

//                 </div>

//               </motion.article>
//             );
//           })}

//         </div>


//         {/* =================================================
//             BOTTOM CTA
//             ================================================= */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.2,
//           }}
//           className="
//             mt-16
//             text-center
//           "
//         >

//           <p
//             className="
//               mb-6
//               font-serif
//               text-lg
//               italic
//               text-[#363637]
//             "
//           >
//             Your numbers tell a story.
//             <br className="sm:hidden" />
//             {" "}Let's understand yours.
//           </p>


//           <a
//             href="#booking"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-3
//               rounded-full
//               bg-[#87533E]
//               px-8
//               py-4
//               text-[11px]
//               font-medium
//               uppercase
//               tracking-[0.20em]
//               text-[#FDFBF7]
//               shadow-[0_8px_22px_rgba(169,79,47,0.20)]
//               transition-all
//               duration-300
//               hover:-translate-y-[2px]
//               hover:bg-[#963f24]
//               hover:shadow-[0_12px_28px_rgba(169,79,47,0.28)]
//             "
//           >

//             Book a Consultation

//             <ArrowUpRight
//               size={16}
//               strokeWidth={1.5}
//               className="
//                 transition-transform
//                 duration-300
//                 group-hover:translate-x-1
//                 group-hover:-translate-y-1
//               "
//             />

//           </a>

//         </motion.div>

//       </div>

//     </section>
//   );
// }










import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  BriefcaseBusiness,
  Heart,
  Grid3X3,
  WandSparkles,
  ScrollText,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Personal Numerology",
    description:
      "Understand your core numbers, personality, destiny and the patterns that shape your personal journey.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Career & Business Numerology",
    description:
      "Explore numerology insights related to career direction, professional strengths and business suitability.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Name Numerology",
    description:
      "Analyze the numerical vibration of your name and explore possible name adjustments.",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "Lo Shu Grid Analysis",
    description:
      "Understand the numbers present and missing in your Lo Shu Grid and the patterns they represent.",
    icon: Grid3X3,
  },
  {
    number: "05",
    title: "Remedies & Guidance",
    description:
      "Receive personalized suggestions based on your numerology analysis and missing numbers.",
    icon: Heart,
  },
  {
    number: "06",
    title: "Comprehensive Numerology Report",
    description:
      "A detailed personalized report bringing together your core numbers, combinations, career and business insights, Lo Shu Grid, name analysis, remedies and final guidance.",
    icon: ScrollText,
  },
];

export default function NumerologyServices() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#FDFBF7]
        py-[120px]
        md:py-[145px]
        border-b
        border-[#C5934D]/20
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Large left circle */}
        <div
          className="
            absolute
            -left-[250px]
            top-[10%]
            h-[540px]
            w-[540px]
            rounded-full
            border
            border-[#C5934D]/10
          "
        />

        {/* Dashed left circle */}
        <div
          className="
            absolute
            -left-[185px]
            top-[16%]
            h-[410px]
            w-[410px]
            rounded-full
            border
            border-dashed
            border-[#87533E]/10
          "
        />

        {/* Right circle */}
        <div
          className="
            absolute
            -right-[260px]
            bottom-[6%]
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-[#C5934D]/10
          "
        />

        {/* Inner right dashed circle */}
        <div
          className="
            absolute
            -right-[195px]
            bottom-[12%]
            h-[480px]
            w-[480px]
            rounded-full
            border
            border-dashed
            border-[#87533E]/10
          "
        />

        {/* Top gold divider */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-[80%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-[#C5934D]/35
            to-transparent
          "
        />

        {/* Terracotta diamond */}
        <motion.div
          className="
            absolute
            left-[7%]
            top-[24%]
            h-[7px]
            w-[7px]
            rotate-45
            bg-[#87533E]
            opacity-60
          "
          animate={{
            rotate: [45, 135, 45],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Second terracotta diamond */}
        <motion.div
          className="
            absolute
            right-[8%]
            bottom-[24%]
            h-[7px]
            w-[7px]
            rotate-45
            bg-[#87533E]
            opacity-50
          "
          animate={{
            rotate: [45, -45, 45],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tiny gold ornament */}
        <div
          className="
            absolute
            right-[12%]
            top-[15%]
            h-[5px]
            w-[5px]
            rotate-45
            bg-[#C5934D]
            opacity-60
          "
        />
      </div>

      {/* =====================================================
          CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >

        {/* =================================================
            HEADING
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-16
            max-w-4xl
            text-center
          "
        >
          {/* Eyebrow */}

          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-12
                bg-[#C5934D]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.30em]
                text-[#87533E]
              "
            >
              Numerology Consultations
            </span>

            <span
              className="
                h-px
                w-12
                bg-[#C5934D]
              "
            />
          </div>

          {/* Heading */}

          <h2
            className="
              font-serif
              text-5xl
              font-normal
              leading-[0.98]
              tracking-[-0.035em]
              text-[#363637]
              sm:text-6xl
              md:text-7xl
            "
          >
            Understand the numbers
            <br />

            <span className="italic text-[#87533E]">
              behind your life's patterns.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-[15px]
              leading-7
              text-[#363637]/70
              md:text-base
            "
          >
            Discover a deeper perspective through personalized numerology
            consultations designed to help you understand your numbers,
            patterns and possibilities.
          </p>
        </motion.div>

        {/* =================================================
            SERVICES GRID
            ================================================= */}

        <div
          className="
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative"
              >

                {/* =================================================
                    CARD
                    ================================================= */}

                <div
                  className="
                    relative
                    flex
                    h-full
                    min-h-[380px]
                    flex-col
                    overflow-hidden
                    border
                    border-[#C5934D]/30
                    bg-[#FEFCF8]
                    p-7
                    transition-all
                    duration-500
                    group-hover:border-[#c4924d]
                    group-hover:shadow-[0_22px_55px_rgba(9,9,9,0.09)]
                    md:p-8
                  "
                >

                  {/* Top accent line */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[3px]
                      w-0
                      bg-[#c4924d]
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />

                  {/* =================================================
                      NUMBER + ICON
                      ================================================= */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-5xl
                        font-normal
                        text-[#C5934D]/50
                        transition-colors
                        duration-500
                        group-hover:text-[#c4924d]
                      "
                    >
                      {service.number}
                    </span>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C5934D]/50
                        bg-[#FDFBF7]
                        text-[#87533E]
                        transition-all
                        duration-500
                        group-hover:border-[#c4924d]
                        group-hover:bg-[#c4924d]
                        group-hover:text-[#FDFBF7]
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                      />
                    </div>
                  </div>

                  {/* =================================================
                      DIVIDER
                      ================================================= */}

                  <div
                    className="
                      my-8
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        h-px
                        flex-1
                        bg-[#C5934D]/30
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rotate-45
                        bg-[#C5934D]
                      "
                    />

                    <span
                      className="
                        h-px
                        w-8
                        bg-[#C5934D]/30
                      "
                    />
                  </div>

                  {/* =================================================
                      CONTENT
                      ================================================= */}

                  <div>
                    <h3
                      className="
                        font-serif
                        text-3xl
                        leading-tight
                        tracking-[-0.015em]
                        text-[#363637]
                        transition-colors
                        duration-300
                        group-hover:text-[#060606]
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[14px]
                        leading-6
                        text-[#363637]/70
                      "
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* =================================================
                      CARD CTA
                      ================================================= */}

                  <div
                    className="
                      mt-auto
                      pt-10
                    "
                  >
                    <button
                      className="
                        group/link
                        inline-flex
                        items-center
                        gap-3
                        border-b
                        border-[#87533E]
                        pb-2
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.20em]
                        text-[#956755]
                        transition-colors
                        duration-300
                        hover:text-[#c4924d]
                        hover:border-[#c4924d]
                      "
                    >
                      Explore

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="
                          text-[#87533E]
                          transition-transform
                          duration-300
                          group-hover/link:text-[#c4924d]
                          group-hover/link:translate-x-1
                          group-hover/link:-translate-y-1
                        "
                      />
                    </button>
                  </div>

                  {/* =================================================
                      DECORATIVE CORNER
                      ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      right-0
                      h-20
                      w-20
                      border-l
                      border-t
                      border-[#C5934D]/15
                      transition-colors
                      duration-500
                      group-hover:border-[#c4924d]/50
                    "
                  />

                  {/* Small corner diamond */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[13px]
                      right-[13px]
                      h-[5px]
                      w-[5px]
                      rotate-45
                      bg-[#C5934D]/50
                      transition-all
                      duration-500
                      group-hover:bg-[#c4924d]
                    "
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =================================================
            BOTTOM CTA
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-16
            text-center
          "
        >
          <p
            className="
              mb-6
              font-serif
              text-lg
              italic
              text-[#363637]/75
            "
          >
            Your numbers tell a story.
            <br className="sm:hidden" />
            {" "}Let's understand yours.
          </p>

          <a
            href="#booking"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#87533E]
              px-8
              py-4
              text-[11px]
              font-medium
              uppercase
              tracking-[0.20em]
              text-[#FDFBF7]
              shadow-[0_8px_22px_rgba(168,80,48,0.22)]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-[#060606]
              hover:shadow-[0_12px_28px_rgba(9,9,9,0.18)]
            "
          >
            Book a Consultation

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}