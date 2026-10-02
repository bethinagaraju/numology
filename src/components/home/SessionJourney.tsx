// // import { SectionHeading } from '@/components/SectionHeading';
// // import { journeySteps } from '@/data/siteData';

// // export function SessionJourney() {
// //   return (
// //     <section className="pt-[130px] pb-[90px] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
// //       <SectionHeading eyebrow="The experience" title="Your session, reimagined." text="A thoughtful process, from first detail to the insight you take with you." align="center" />
// //       <div className="grid grid-cols-4 max-sm:grid-cols-1 mt-[80px] gap-[30px] max-sm:gap-[45px]">
// //         {journeySteps.map((item, i) => (
// //           <div className="flex flex-col text-center" key={item.step}>
// //             <span className="font-serif text-[32px] text-bronze leading-none">0{i + 1}</span>
// //             <i className="w-[1px] h-[35px] bg-muted-gold mx-auto my-[15px]" />
// //             <h3 className="font-sans font-semibold text-[11px] uppercase tracking-[0.15em] m-0 mb-[10px]">{item.step}</h3>
// //             <p className="text-[#363637] text-[12px] max-w-[210px] mx-auto my-0 leading-[1.6]">{item.text}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// import { journeySteps } from '@/data/siteData';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// import step1 from '@/assets/step1.png';
// import step2 from '@/assets/step2.png';
// import step3 from '@/assets/step3.png';
// import step4 from '@/assets/step4.png';

// const journeyImages = [
//   {
//     src: step1,
//     alt: 'Personal details and reflection',
//   },
//   {
//     src: step2,
//     alt: 'Numerology number analysis',
//   },
//   {
//     src: step3,
//     alt: 'Personal numerology consultation',
//   },
//   {
//     src: step4,
//     alt: 'Personal guidance and next steps',
//   },
// ];

// export function SessionJourney() {
//   const [activeCard, setActiveCard] = useState<number>(0);
//   const [isHovered, setIsHovered] = useState<boolean>(false);

//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(() => {
//       setActiveCard((prev) => (prev + 1) % 4);
//     }, 2500);
//     return () => clearInterval(timer);
//   }, [isHovered]);

//   return (
//     <section className="relative overflow-hidden bg-[#F8F3E8] py-16 md:py-20">

//       {/* =========================================================
//           BACKGROUND DECORATION
//       ========================================================= */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">

//         {/* Top-left sun */}
//         <div className="absolute -left-[80px] -top-[100px] hidden h-[250px] w-[250px] rounded-full border border-[#C5A267]/25 md:block">
//           <div className="absolute left-1/2 top-1/2 h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C5A267]/40" />

//           {Array.from({ length: 18 }).map((_, i) => (
//             <span
//               key={i}
//               className="absolute left-1/2 top-1/2 h-[115px] w-px origin-bottom bg-[#C5A267]/25"
//               style={{
//                 transform: `translate(-50%, -100%) rotate(${i * 10}deg)`,
//               }}
//             />
//           ))}
//         </div>

//         {/* Bottom left organic shape */}
//         <div className="absolute -bottom-[180px] -left-[150px] h-[420px] w-[420px] rounded-full border border-[#C5A267]/15" />
//         <div className="absolute -bottom-[130px] -left-[100px] h-[300px] w-[300px] rounded-full border border-[#C5A267]/10" />

//         {/* Right decorative circles */}
//         <div className="absolute -right-[180px] top-[120px] h-[420px] w-[420px] rounded-full border border-[#C5A267]/15" />
//         <div className="absolute -right-[130px] top-[170px] h-[300px] w-[300px] rounded-full border border-[#C5A267]/10" />

//         {/* Small stars */}
//         <span className="absolute left-[7%] top-[42%] text-[#A98243]/60">
//           ✦
//         </span>

//         <span className="absolute right-[8%] top-[32%] text-[#A98243]/60">
//           ✦
//         </span>
//       </div>


//       {/* =========================================================
//           CONTENT
//       ========================================================= */}

//       <div className="relative mx-auto max-w-[1450px] px-[clamp(20px,4vw,70px)]">

//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-[760px] text-center"
//         >

//           <div className="mb-5 flex items-center justify-center gap-4">

//             <span className="h-px w-[45px] bg-[#C5A267]/70" />

//             <span className="text-[20px] font-medium uppercase tracking-[0.35em] text-[#A98243]">
//               The experience
//             </span>

//             <span className="h-px w-[45px] bg-[#C5A267]/70" />

//           </div>

//           <h2 className="font-serif text-[clamp(48px,6vw,78px)] font-normal leading-[0.95] tracking-[-0.045em] text-[#2B211B]">
//             Your session, <span className="italic text-[#A98243]">Reimagined.</span>
//           </h2>

//           <p className="mx-auto mt-7 max-w-[610px] text-[14px] leading-[1.8] text-[#665447]">
//             A thoughtful process, from first detail to the insight you
//             take with you.
//           </p>

//         </motion.div>


//         {/* =========================================================
//             JOURNEY AREA
//         ========================================================= */}

//         <div className="relative mt-[80px] md:mt-[105px]">

//           {/* =====================================================
//               DESKTOP FLOWING CONNECTION
//           ===================================================== */}

//           <svg
//             className="pointer-events-none absolute left-[12.5%] top-[105px] hidden h-[150px] w-[75%] overflow-visible md:block"
//             viewBox="0 0 1200 150"
//             fill="none"
//             preserveAspectRatio="none"
//           >
//             <motion.path
//               initial={{ pathLength: 0, opacity: 0 }}
//               whileInView={{ pathLength: 1, opacity: 0.65 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
//               d="
//                 M 0 40
//                 C 100 40, 100 125, 200 125
//                 C 300 125, 300 40, 400 40
//                 C 500 40, 500 125, 600 125
//                 C 700 125, 700 40, 800 40
//                 C 900 40, 900 125, 1000 125
//                 C 1100 125, 1100 40, 1200 40
//               "
//               stroke="#C5A267"
//               strokeWidth="1.2"
//               vectorEffect="non-scaling-stroke"
//             />

//             {/* Decorative points */}
//             <circle cx="0" cy="40" r="3" fill="#A98243" />
//             <circle cx="400" cy="40" r="3" fill="#A98243" />
//             <circle cx="800" cy="40" r="3" fill="#A98243" />
//             <circle cx="1200" cy="40" r="3" fill="#A98243" />
//           </svg>


//           {/* =====================================================
//               JOURNEY GRID
//           ===================================================== */}

//           <div className="grid gap-[65px] md:grid-cols-4 md:gap-[25px]">

//             {journeySteps.map((item, i) => {

//               const image = journeyImages[i];

//               return (
//                 <motion.div
//                   key={item.step}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
//                   className="group relative flex flex-col items-center text-center"
//                   data-active={activeCard === i}
//                 >

//                   {/* =================================================
//                       IMAGE ARCH
//                   ================================================= */}

//                   <div
//                     className="relative h-[250px] w-[190px] sm:h-[270px] sm:w-[205px] md:h-[275px] md:w-[205px] transition-all duration-700 group-data-[active=true]:-translate-y-4 group-data-[active=true]:scale-105 cursor-pointer"
//                     onMouseEnter={() => { setIsHovered(true); setActiveCard(i); }}
//                     onMouseLeave={() => setIsHovered(false)}
//                     onClick={() => { setIsHovered(true); setActiveCard(i); }}
//                   >

//                     {/* Outer arch border */}

//                     <div
//                       className="
//                         absolute
//                         inset-0
//                         rounded-t-[110px]
//                         rounded-b-[4px]
//                         border
//                         border-[#C5A267]/60
//                         bg-[#EEE3D0]
//                         p-[7px]
//                         transition-all
//                         duration-700
//                         group-data-[active=true]:border-[#A98243]
//                       "
//                     >

//                       {/* Image */}

//                       <div className="relative h-full w-full overflow-hidden rounded-t-[100px] rounded-b-[2px]">

//                         <img
//                           src={image.src}
//                           alt={image.alt}
//                           className="
//                             h-full
//                             w-full
//                             object-cover
//                             transition-transform
//                             duration-700
//                             group-data-[active=true]:scale-105
//                           "
//                         />

//                         {/* Warm overlay */}

//                         <div className="absolute inset-0 bg-[#6B4826]/10 mix-blend-multiply" />

//                         {/* Soft highlight */}

//                         <div className="absolute inset-0 bg-gradient-to-t from-[#3A291A]/25 via-transparent to-[#FDFBF7]/10" />

//                       </div>
//                     </div>


//                     {/* Top star */}

//                     <div className="absolute -top-[20px] left-1/2 z-20 -translate-x-1/2">

//                       <div className="relative flex h-[32px] w-[32px] items-center justify-center">

//                         <span className="absolute h-[26px] w-[1px] rotate-45 bg-[#A98243]" />
//                         <span className="absolute h-[26px] w-[1px] -rotate-45 bg-[#A98243]" />

//                         <span className="relative text-[14px] text-[#A98243]">
//                           ✦
//                         </span>

//                       </div>

//                     </div>


//                     {/* Number badge */}

//                     <div
//                       className="
//                         absolute
//                         -bottom-[28px]
//                         left-1/2
//                         z-30
//                         flex
//                         h-[62px]
//                         w-[62px]
//                         -translate-x-1/2
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-[#C5A267]
//                         bg-[#F8F3E8]
//                         shadow-[0_8px_25px_rgba(71,49,25,0.08)]
//                         transition-all
//                         duration-500
//                         group-data-[active=true]:scale-105
//                         group-data-[active=true]:border-[#A98243]
//                       "
//                     >

//                       <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#C5A267]/40">

//                         <span className="font-serif text-[24px] text-[#8F6B36]">
//                           {String(i + 1).padStart(2, '0')}
//                         </span>

//                       </div>

//                     </div>

//                   </div>


//                   {/* =================================================
//                       DECORATIVE DIVIDER
//                   ================================================= */}

//                   <div className="mt-[52px] flex items-center justify-center gap-3">

//                     <span className="h-px w-[30px] bg-[#C5A267]/50" />

//                     <span className="h-[5px] w-[5px] rotate-45 bg-[#A98243]" />

//                     <span className="h-px w-[30px] bg-[#C5A267]/50" />

//                   </div>


//                   {/* =================================================
//                       STEP TITLE
//                   ================================================= */}

//                   <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.3em] text-[#8F6B36]">
//                     Step {String(i + 1).padStart(2, '0')}
//                   </p>

//                   <h3 className="mt-2 max-w-[270px] font-serif text-[24px] font-normal leading-[1.15] tracking-[-0.02em] text-[#2B211B] transition-colors duration-300 group-data-[active=true]:text-[#A98243]">
//                     {item.step}
//                   </h3>


//                   {/* =================================================
//                       DESCRIPTION
//                   ================================================= */}

//                   <p className="mx-auto mt-4 max-w-[230px] text-[13px] leading-[1.75] text-[#705D4E]">
//                     {item.text}
//                   </p>


//                   {/* =================================================
//                       SMALL GOLD LINE
//                   ================================================= */}

//                   <div className="mt-5 flex flex-col items-center">

//                     <span className="h-[25px] w-px bg-[#C5A267]/50" />

//                     <span className="h-[5px] w-[5px] rounded-full bg-[#A98243]" />

//                   </div>

//                 </motion.div>
//               );
//             })}

//           </div>
//         </div>


//         {/* =========================================================
//             BOTTOM ORNAMENT
//         ========================================================= */}

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-[75px] flex items-center justify-center"
//         >

//           <div className="flex items-center gap-3">

//             <span className="h-px w-[65px] bg-[#C5A267]/50" />

//             <span className="text-[13px] tracking-[0.15em] text-[#A98243]">
//               ☾ · ✦ · ◐ · ✦ · ☽
//             </span>

//             <span className="h-px w-[65px] bg-[#C5A267]/50" />

//           </div>

//         </motion.div>

//       </div>
//     </section>
//   );
// }









import { journeySteps } from '@/data/siteData';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import step1 from '@/assets/step1.png';
import step2 from '@/assets/step2.png';
import step3 from '@/assets/step3.png';
import step4 from '@/assets/step4.png';

const journeyImages = [
  {
    src: step1,
    alt: 'Personal details and reflection',
  },
  {
    src: step2,
    alt: 'Numerology number analysis',
  },
  {
    src: step3,
    alt: 'Personal numerology consultation',
  },
  {
    src: step4,
    alt: 'Personal guidance and next steps',
  },
];

export function SessionJourney() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FDFBF7]
        py-[80px]
        md:py-[135px]
        border-b
        border-[#C5934D]/20
      "
    >

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large top-left circle */}
        <div
          className="
            absolute
            -left-[180px]
            -top-[150px]
            hidden
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-[#C5934D]/10
            md:block
          "
        />

        {/* Inner circle */}
        <div
          className="
            absolute
            left-[45px]
            top-[75px]
            hidden
            h-[250px]
            w-[250px]
            rounded-full
            border
            border-dashed
            border-[#C5934D]/10
            md:block
          "
        />

        {/* Bottom-left circles */}
        <div
          className="
            absolute
            -bottom-[200px]
            -left-[160px]
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-[#C5934D]/10
          "
        />

        <div
          className="
            absolute
            -bottom-[145px]
            -left-[105px]
            h-[330px]
            w-[330px]
            rounded-full
            border
            border-dashed
            border-[#C5934D]/10
          "
        />

        {/* Right circles */}
        <div
          className="
            absolute
            -right-[220px]
            top-[180px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#C5934D]/10
          "
        />

        <div
          className="
            absolute
            -right-[160px]
            top-[240px]
            h-[370px]
            w-[370px]
            rounded-full
            border
            border-dashed
            border-[#C5934D]/10
          "
        />

        {/* Small terracotta diamonds */}
        <span
          className="
            absolute
            left-[7%]
            top-[45%]
            h-[7px]
            w-[7px]
            rotate-45
            bg-[#87533E]
            opacity-50
          "
        />

        <span
          className="
            absolute
            right-[8%]
            top-[35%]
            h-[7px]
            w-[7px]
            rotate-45
            bg-[#87533E]
            opacity-50
          "
        />

      </div>


      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-[1450px]
          px-[clamp(20px,4vw,70px)]
        "
      >

        {/* =========================================================
            HEADING
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[780px]
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
                w-[45px]
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
              The experience
            </span>

            <span
              className="
                h-px
                w-[45px]
                bg-[#C5934D]
              "
            />

          </div>


          {/* Heading */}

          <h2
            className="
              font-serif
              text-[clamp(48px,6vw,78px)]
              font-normal
              leading-[0.95]
              tracking-[-0.045em]
              text-[#363637]
            "
          >
            Your session,
            {/* <br /> */}

            <span
              className="
                italic
                text-[#87533E]
                ml-4
              "
            >
              Reimagined.
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-[610px]
              text-[14px]
              leading-[1.8]
              text-[#363637]
            "
          >
            A thoughtful process, from first detail to the insight
            you take with you.
          </p>

        </motion.div>


        {/* =========================================================
            JOURNEY AREA
        ========================================================= */}

        <div
          className="
            relative
            mt-[75px]
            md:mt-[105px]
          "
        >

          {/* =====================================================
              DESKTOP FLOWING CONNECTION
          ===================================================== */}

          <svg
            className="
              pointer-events-none
              absolute
              left-[12.5%]
              top-[105px]
              hidden
              h-[150px]
              w-[75%]
              overflow-visible
              md:block
            "
            viewBox="0 0 1200 150"
            fill="none"
            preserveAspectRatio="none"
          >

            <motion.path
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              whileInView={{
                pathLength: 1,
                opacity: 0.55,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: 'easeInOut',
              }}
              d="
                M 0 40
                C 100 40, 100 125, 200 125
                C 300 125, 300 40, 400 40
                C 500 40, 500 125, 600 125
                C 700 125, 700 40, 800 40
                C 900 40, 900 125, 1000 125
                C 1100 125, 1100 40, 1200 40
              "
              stroke="#C5934D"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Connection points */}

            <circle
              cx="0"
              cy="40"
              r="3"
              fill="#87533E"
            />

            <circle
              cx="400"
              cy="40"
              r="3"
              fill="#87533E"
            />

            <circle
              cx="800"
              cy="40"
              r="3"
              fill="#87533E"
            />

            <circle
              cx="1200"
              cy="40"
              r="3"
              fill="#87533E"
            />

          </svg>


          {/* =====================================================
              JOURNEY GRID
          ===================================================== */}

          <div
            className="
              grid
              gap-[70px]
              md:grid-cols-4
              md:gap-[25px]
            "
          >

            {journeySteps.map((item, i) => {

              const image = journeyImages[i];

              return (
                <motion.div
                  key={item.step}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15 + 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                  data-active={activeCard === i}
                >

                  {/* =================================================
                      IMAGE ARCH
                  ================================================= */}

                  <div
                    className="
                      relative
                      h-[250px]
                      w-[190px]
                      cursor-pointer
                      transition-all
                      duration-700
                      sm:h-[270px]
                      sm:w-[205px]
                      md:h-[275px]
                      md:w-[205px]
                      group-data-[active=true]:-translate-y-4
                      group-data-[active=true]:scale-105
                    "
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setActiveCard(i);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                    }}
                    onClick={() => {
                      setIsHovered(true);
                      setActiveCard(i);
                    }}
                  >

                    {/* Outer arch */}

                    <div
                      className="
                        absolute
                        inset-0
                        rounded-t-[110px]
                        rounded-b-[4px]
                        border
                        border-[#C5934D]/55
                        bg-[#f4e9d9]
                        p-[7px]
                        shadow-[0_15px_40px_rgba(75,52,30,0.08)]
                        transition-all
                        duration-700
                        group-data-[active=true]:border-[#87533E]/70
                        group-data-[active=true]:shadow-[0_20px_50px_rgba(169,79,47,0.12)]
                      "
                    >

                      {/* Image */}

                      <div
                        className="
                          relative
                          h-full
                          w-full
                          overflow-hidden
                          rounded-t-[100px]
                          rounded-b-[2px]
                        "
                      >

                        <img
                          src={image.src}
                          alt={image.alt}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-data-[active=true]:scale-105
                          "
                        />

                        {/* Warm image overlay */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-[#8b4d32]/10
                            mix-blend-multiply
                          "
                        />

                        {/* Soft highlight */}

                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#363637]/20
                            via-transparent
                            to-[#FDFBF7]/10
                          "
                        />

                      </div>

                    </div>


                    {/* =================================================
                        TOP ORNAMENT
                    ================================================= */}

                    <div
                      className="
                        absolute
                        -top-[20px]
                        left-1/2
                        z-20
                        -translate-x-1/2
                      "
                    >

                      <div
                        className="
                          relative
                          flex
                          h-[32px]
                          w-[32px]
                          items-center
                          justify-center
                        "
                      >

                        <span
                          className="
                            absolute
                            h-[25px]
                            w-[1px]
                            rotate-45
                            bg-[#C5934D]
                          "
                        />

                        <span
                          className="
                            absolute
                            h-[25px]
                            w-[1px]
                            -rotate-45
                            bg-[#C5934D]
                          "
                        />

                        <span
                          className="
                            relative
                            text-[13px]
                            text-[#87533E]
                          "
                        >
                          ✦
                        </span>

                      </div>

                    </div>


                    {/* =================================================
                        NUMBER BADGE
                    ================================================= */}

                    <div
                      className="
                        absolute
                        -bottom-[28px]
                        left-1/2
                        z-30
                        flex
                        h-[62px]
                        w-[62px]
                        -translate-x-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C5934D]
                        bg-[#FDFBF7]
                        shadow-[0_8px_25px_rgba(71,49,25,0.08)]
                        transition-all
                        duration-500
                        group-data-[active=true]:scale-105
                        group-data-[active=true]:border-[#87533E]
                      "
                    >

                      <div
                        className="
                          flex
                          h-[50px]
                          w-[50px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#C5934D]/35
                        "
                      >

                        <span
                          className="
                            font-serif
                            text-[24px]
                            text-[#87533E]
                          "
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* =================================================
                      DECORATIVE DIVIDER
                  ================================================= */}

                  <div
                    className="
                      mt-[52px]
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >

                    <span
                      className="
                        h-px
                        w-[30px]
                        bg-[#C5934D]/45
                      "
                    />

                    <span
                      className="
                        h-[5px]
                        w-[5px]
                        rotate-45
                        bg-[#87533E]
                      "
                    />

                    <span
                      className="
                        h-px
                        w-[30px]
                        bg-[#C5934D]/45
                      "
                    />

                  </div>


                  {/* =================================================
                      STEP NUMBER
                  ================================================= */}

                  <p
                    className="
                      mt-4
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-[#a98243]
                    "
                  >
                    Step {String(i + 1).padStart(2, '0')}
                  </p>


                  {/* =================================================
                      STEP TITLE
                  ================================================= */}

                  <h3
                    className="
                      mt-2
                      max-w-[270px]
                      font-serif
                      text-[24px]
                      font-normal
                      leading-[1.15]
                      tracking-[-0.02em]
                      text-[#363637]
                      transition-colors
                      duration-300
                      group-data-[active=true]:text-[#87533E]
                    "
                  >
                    {item.step}
                  </h3>


                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className="
                      mx-auto
                      mt-4
                      max-w-[230px]
                      text-[13px]
                      leading-[1.75]
                      text-[#705d4e]
                    "
                  >
                    {item.text}
                  </p>


                  {/* =================================================
                      SMALL GOLD LINE
                  ================================================= */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-col
                      items-center
                    "
                  >

                    <span
                      className="
                        h-[25px]
                        w-px
                        bg-[#C5934D]/45
                      "
                    />

                    <span
                      className="
                        h-[5px]
                        w-[5px]
                        rounded-full
                        bg-[#87533E]
                      "
                    />

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* =========================================================
            BOTTOM ORNAMENT
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-[75px]
            flex
            items-center
            justify-center
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-px
                w-[65px]
                bg-[#C5934D]/45
              "
            />

            <span
              className="
                text-[13px]
                tracking-[0.15em]
                text-[#87533E]
              "
            >
              ☾ · ✦ · ◐ · ✦ · ☽
            </span>

            <span
              className="
                h-px
                w-[65px]
                bg-[#C5934D]/45
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}