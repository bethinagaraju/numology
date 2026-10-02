// import { Sparkles, CircleDashed } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { HeroCards } from './HeroCards';

// export function Hero() {
//   return (
//     <section
//       className="
//         relative
//         min-h-[720px]
//         overflow-hidden
//         bg-gradient-to-br from-ivory to-cream
//         px-[clamp(24px,6vw,80px)]
//         py-[100px]
//         flex
//         items-center
//         max-md:min-h-[900px]
//         max-md:py-[130px]
//         max-md:items-start
//       "
//     >
//       {/* Background Subtle Wheel Element */}
//       <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[1px] border-[#E8E2D9] pointer-events-none flex items-center justify-center opacity-40">
//         <div className="w-[85%] h-[85%] rounded-full border-[1px] border-dashed border-[#E8E2D9] flex items-center justify-center">
//           <div className="w-[70%] h-[70%] rounded-full border-[1px] border-[#E8E2D9]" />
//         </div>
//       </div>

//       <div
//         className="
//           relative
//           z-10
//           w-full
//           max-w-[1240px]
//           mx-auto
//           grid
//           grid-cols-[1fr_1fr]
//           items-center
//           gap-10
//           max-md:grid-cols-1
//         "
//       >
//         {/* =======================================================
//             LEFT CONTENT
//             ======================================================= */}
//         {/* =======================================================
//             LEFT CONTENT
//             ======================================================= */}
//         <div className="relative z-20 max-w-[640px] pt-4 md:pt-8">
//           {/* Small pill */}
//           {/* <div
//             className="
//               inline-flex
//               items-center
//               gap-[9px]
//               px-[15px]
//               py-[6px]
//               rounded-full
//               bg-[#FAF6F0]/90
//               border
//               border-[#DEC9A6]
//               text-[#5A4532]
//               text-[12px]
//               font-medium
//               tracking-wide
//               shadow-[0_2px_8px_rgba(206,177,130,0.12)]
//               mb-[22px]
//             "
//           >
//             <svg
//               width="12"
//               height="12"
//               viewBox="0 0 24 24"
//               fill="#C49B45"
//               className="shrink-0"
//             >
//               <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
//             </svg>
//             Personalized Numerology Experience
//           </div> */}

//           {/* Branded Title Lockup */}
//           <div className="flex flex-col items-start mb-6">
//             {/* Top Ornamental Divider */}
//             <div className="flex items-center gap-3 w-full max-w-[360px] my-1.5 opacity-90">
//               <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CDA66F]/60 to-[#C5934D]" />
//               <div className="flex items-center gap-1.5 text-[#C5934D]">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
//                 </svg>
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
//                 </svg>
//               </div>
//               <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#CDA66F]/60 to-[#C5934D]" />
//             </div>

//             {/* Eyebrow */}
//             <h2 className="font-serif text-[#363637] text-[19px] sm:text-[22px] md:text-[24px] tracking-[0.22em] uppercase font-normal mt-1 mb-0.5">
//               THE GOLDEN NUMERALIST
//             </h2>

//             {/* Display Name */}
//             <h1 className="font-serif font-normal text-[54px] sm:text-[72px] md:text-[84px] lg:text-[92px] leading-[0.98] tracking-[-0.01em] bg-gradient-to-b from-[#CDA66F] via-[#C5934D] to-[#C5934D] bg-clip-text text-transparent select-none my-1 pb-1">
//               Namrattaa Lal
//             </h1>

//             {/* Bottom Ornamental Divider */}
//             <div className="flex items-center gap-3 w-full max-w-[300px] my-1.5 opacity-90">
//               <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#CDA66F]/60 to-[#C5934D]" />
//               <div className="text-[#C5934D]">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
//                 </svg>
//               </div>
//               <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#CDA66F]/60 to-[#C5934D]" />
//             </div>
//           </div>

//           {/* Subheading / Value Proposition */}
//           <h3
//             className="
//               !font-sans
//               font-normal
//               text-[#362312]
//               tracking-[-0.025em]
//               leading-[1.14]
//               text-[clamp(32px,3.2vw,46px)]
//               max-w-[560px]
//             "
//           >
//             Guided by numbers, empowered by inner insight
//           </h3>

//           {/* Description */}
//           <p
//             className="
//               !font-sans
//               mt-[18px]
//               max-w-[500px]
//               text-[#363637]
//               text-[15px]
//               sm:text-[16px]
//               leading-[1.65]
//             "
//           >
//             Connect with Namrattaa Lal, The Golden Numeralist, and receive intuitive guidance illuminated by your unique patterns.
//           </p>

//           {/* Buttons */}
//           <div className="flex items-center gap-[16px] mt-[34px] flex-wrap">
//             <Link
//               to="/sessions"
//               className="
//                 h-[52px]
//                 px-[32px]
//                 rounded-full
//                 bg-[#A37735]
//                 hover:bg-[#92662A]
//                 text-[#FCFAF6]
//                 text-[14px]
//                 font-medium
//                 shadow-[0_10px_24px_rgba(163,119,53,0.34)]
//                 transition-all
//                 hover:-translate-y-[2px]
//                 hover:shadow-[0_14px_30px_rgba(163,119,53,0.44)]
//                 flex
//                 items-center
//                 justify-center
//                 gap-2
//               "
//             >
//               <span>Book a Session</span>
//               <span className="text-base leading-none">&rarr;</span>
//             </Link>

//             <Link
//               to="/about"
//               className="
//                 h-[52px]
//                 px-[30px]
//                 rounded-full
//                 bg-[#FEFCF8]/80
//                 hover:bg-cream
//                 border
//                 border-[#7D6652]/35
//                 hover:border-[#7D6652]/70
//                 text-[#362312]
//                 text-[14px]
//                 font-medium
//                 transition-colors
//                 flex
//                 items-center
//                 justify-center
//               "
//             >
//               Explore Sessions
//             </Link>
//           </div>
//         </div>

//         {/* =======================================================
//             RIGHT VISUAL (CARDS)
//             ======================================================= */}
//         <HeroCards />
//       </div>
//     </section>
//   );
// }











import { Link } from 'react-router-dom';
import { HeroCards } from './HeroCards';

export function Hero() {
  return (
    <section
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-[#FDFBF7]
        px-[clamp(24px,6vw,80px)]
        py-[90px]
        flex
        items-center
        max-md:min-h-[900px]
        max-md:py-[110px]
        max-md:items-start
      "
    >



      {/* =======================================================
          MAIN CONTAINER
          ======================================================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1400px]
          mx-auto
          grid
          grid-cols-[1fr_1fr]
          items-center
          gap-8
          lg:gap-12
          max-md:grid-cols-1
        "
      >

        {/* =====================================================
            LEFT CONTENT
            ===================================================== */}

        <div
          className="
            relative
            z-20
            w-full
            max-w-[650px]
            pt-4
            md:pt-8
            lg:pl-[2vw]
          "
        >

          {/* =================================================
              BRAND LOCKUP
              ================================================= */}

          <div className="flex flex-col items-start mb-7">

            {/* Top ornamental divider */}
            <div
              className="
                flex
                items-center
                gap-3
                w-full
                max-w-[350px]
                mb-4
              "
            >

              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />

              <div className="flex items-center gap-1.5 text-[#C5934D]">

                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
                </svg>

                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
                </svg>

              </div>

              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />

            </div>


            {/* Brand */}
            <h2
              className="
                font-serif
                text-[#363637]
                text-[16px]
                sm:text-[18px]
                md:text-[20px]
                tracking-[0.24em]
                uppercase
                font-normal
              "
            >
              THE GOLDEN NUMERALIST
            </h2>


            {/* Name */}
            <h1
              className="
                mt-2
                font-serif
                font-normal
                text-[56px]
                sm:text-[70px]
                md:text-[78px]
                lg:text-[86px]
                leading-[0.95]
                tracking-[-0.02em]
                bg-gradient-to-b
                from-[#C5934D]
                via-[#C5934D]
                to-[#C5934D]
                bg-clip-text
                text-transparent
                select-none
                pb-2
              "
            >
              Namrattaa Lal
            </h1>


            {/* Bottom ornamental divider */}
            <div
              className="
                flex
                items-center
                gap-3
                w-full
                max-w-[300px]
                mt-3
              "
            >

              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />

              <div className="text-[#C5934D]">

                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
                </svg>

              </div>

              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />

            </div>

          </div>


          {/* =================================================
              MAIN HEADLINE
              ================================================= */}

          <h3
            className="
              !font-sans
              font-normal
              text-[#87533E]
              tracking-[-0.035em]
              leading-[1.08]
              text-[clamp(34px,3.4vw,48px)]
              
            "
          >
            Guided by numbers,
            <br />
            empowered by inner insight.
          </h3>


          {/* =================================================
              DESCRIPTION
              ================================================= */}

          <p
            className="
              !font-sans
              mt-5
              max-w-[515px]
              text-[#363637]
              text-[15px]
              sm:text-[16px]
              leading-[1.7]
            "
          >
            Connect with Namrattaa Lal, The Golden Numeralist,
            and receive intuitive guidance illuminated by your
            unique patterns.
          </p>


          {/* =================================================
              BUTTONS
              ================================================= */}

          <div
            className="
              flex
              items-center
              gap-5
              mt-9
              flex-wrap
            "
          >

            {/* Primary CTA */}
            <Link
              to="/sessions"
              className="
                group
                h-[52px]
                px-[30px]
                rounded-full
                bg-[#87533E]
                hover:bg-[#963f24]
                text-[#FDFBF7]
                text-[14px]
                font-medium
                shadow-[0_8px_22px_rgba(169,79,47,0.22)]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_12px_28px_rgba(169,79,47,0.30)]
                flex
                items-center
                justify-center
                gap-3
              "
            >

              <span>
                Book a Session
              </span>

              <span
                className="
                  text-[17px]
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>

            </Link>


            {/* Secondary CTA */}
            <Link
              to="/about"
              className="
                group
                h-[52px]
                px-[28px]
                rounded-full
                bg-transparent
                border
                border-[#87533E]/35
                hover:border-[#87533E]
                text-[#87533E]
                text-[14px]
                font-medium
                transition-all
                duration-300
                hover:bg-[#87533E]/5
                flex
                items-center
                justify-center
                gap-2
              "
            >

              <span>
                Explore Sessions
              </span>

              <span
                className="
                  text-[16px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>

            </Link>

          </div>

        </div>


        {/* =====================================================
            RIGHT VISUAL
            ===================================================== */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            min-h-[560px]
            lg:min-h-[620px]
            max-md:min-h-[480px]
            max-md:mt-[-10px]
          "
        >



          <HeroCards />

        </div>

      </div>

    </section>
  );
}