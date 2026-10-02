// import { Check } from 'lucide-react';
// import { SectionHeading } from '@/components/SectionHeading';
// import { BookingButton } from '@/components/BookingButton';
// import { packageData } from '@/data/siteData';

// export function Packages() {
//   return (
//     <section className="pt-[140px] pb-[145px] border-t border-gold max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
//       <SectionHeading eyebrow="Signature sessions" title="Choose your journey." text="Three ways to begin. Select your package inside the client assessment form after following the button below." align="center" />
//       <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-[18px] mt-[70px]">
//         {packageData.map((pkg, i) => (
//           <article className={`border border-gold p-[30px] min-h-[430px] flex flex-col relative bg-[rgba(242,231,213,0.3)] max-sm:min-h-[390px] ${i === 1 ? 'bg-cream border-bronze -translate-y-[15px] max-sm:translate-y-0' : ''}`} key={pkg.name}>
//             {i === 1 && <span className="absolute top-0 right-0 bg-bronze text-ivory px-[12px] py-[8px] uppercase text-[8px] tracking-[0.14em]">Most popular</span>}
//             <span className="text-bronze text-[10px] tracking-[0.15em]">0{i + 1}</span>
//             <h3 className="font-serif font-medium text-[37px] leading-[0.95] mt-[40px] mb-[15px]">{pkg.name}</h3>
//             <strong className="font-serif font-medium text-[31px]">{pkg.price}</strong>
//             <span className="text-bronze text-[10px] uppercase tracking-[0.12em] my-[12px] mb-[22px]">{pkg.focus}</span>
//             <ul className="list-none py-[15px] m-0 border-t border-gold flex-1">
//               {pkg.items.map((item) => (
//                 <li key={item} className="flex items-center gap-[8px] text-[11px] py-[7px]"><Check size={13} className="text-bronze" />{item}</li>
//               ))}
//             </ul>
//             <BookingButton label="Continue to client form" variant="text" />
//             <small className="mt-[18px] text-muted-gold text-[9px] leading-[1.5]">You will select your package in the client assessment form.</small>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }




import { Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingButton } from '@/components/BookingButton';
import { packageData } from '@/data/siteData';

export function Packages() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FEFCF8]
        border-t
        border-[#C5934D]/20
        pt-[120px]
        pb-[130px]
      "
    >

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Left circle */}
        <div
          className="
            absolute
            -left-[220px]
            top-[18%]
            h-[520px]
            w-[520px]
            rounded-full
            border
            border-[#C5934D]/10
          "
        />

        {/* Right circle */}
        <div
          className="
            absolute
            -right-[250px]
            bottom-[5%]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-[#C5934D]/10
          "
        />

        {/* Dashed inner circle */}
        <div
          className="
            absolute
            -right-[180px]
            bottom-[12%]
            h-[450px]
            w-[450px]
            rounded-full
            border
            border-dashed
            border-[#C5934D]/10
          "
        />

        {/* Decorative diamonds */}

        <span
          className="
            absolute
            left-[7%]
            top-[30%]
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
            right-[7%]
            top-[20%]
            h-[7px]
            w-[7px]
            rotate-45
            bg-[#87533E]
            opacity-50
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
          max-w-[1240px]
          px-[clamp(24px,5vw,80px)]
        "
      >

        {/* =================================================
            SECTION HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SectionHeading
            eyebrow="Signature sessions"
            title="Choose your journey."
            text="Three ways to begin. Select your package inside the client assessment form after following the button below."
            align="center"
          />
        </motion.div>


        {/* =================================================
            PACKAGE GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-3
            gap-[20px]
            mt-[65px]
            max-md:grid-cols-2
            max-sm:grid-cols-1
          "
        >

          {packageData.map((pkg, i) => {

            const isFeatured = i === 1;

            return (
              <motion.article
                key={pkg.name}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                className={`
                  group
                  relative
                  flex
                  min-h-[450px]
                  flex-col
                  overflow-hidden
                  border
                  p-[30px]
                  transition-all
                  duration-500
                  max-sm:min-h-[410px]

                  ${isFeatured
                    ? `
                        border-[#87533E]/55
                        bg-[#FEFCF8]
                        shadow-[0_18px_50px_rgba(169,79,47,0.10)]
                        md:-translate-y-[15px]
                        max-md:translate-y-0
                      `
                    : `
                        border-[#C5934D]/30
                        bg-[#FEFCF8]
                        hover:border-[#87533E]/40
                        hover:bg-[#FEFCF8]
                        hover:shadow-[0_18px_45px_rgba(76,54,30,0.08)]
                      `
                  }
                `}
              >

                {/* =================================================
                    TOP ACCENT
                ================================================= */}

                <div
                  className={`
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    transition-all
                    duration-700

                    ${isFeatured
                      ? 'w-full bg-[#87533E]'
                      : 'w-0 bg-[#87533E] group-hover:w-full'
                    }
                  `}
                />


                {/* =================================================
                    FEATURED BADGE
                ================================================= */}

                {isFeatured && (
                  <span
                    className="
                      absolute
                      right-0
                      top-0
                      bg-[#87533E]
                      px-[13px]
                      py-[8px]
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#FDFBF7]
                    "
                  >
                    Most popular
                  </span>
                )}


                {/* =================================================
                    PACKAGE NUMBER
                ================================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className={`
                      font-serif
                      text-[48px]
                      leading-none
                      transition-colors
                      duration-500

                      ${isFeatured
                        ? 'text-[#87533E]/65'
                        : 'text-[#C5934D]/50 group-hover:text-[#87533E]/60'
                      }
                    `}
                  >
                    0{i + 1}
                  </span>


                  {/* Decorative diamond */}

                  <span
                    className={`
                      h-[8px]
                      w-[8px]
                      rotate-45
                      ${isFeatured
                        ? 'bg-[#87533E]'
                        : 'bg-[#C5934D]'
                      }
                    `}
                  />

                </div>


                {/* =================================================
                    PACKAGE TITLE
                ================================================= */}

                <h3
                  className="
                    mt-[38px]
                    mb-[15px]
                    font-serif
                    text-[36px]
                    font-medium
                    leading-[0.98]
                    tracking-[-0.02em]
                    text-[#363637]
                  "
                >
                  {pkg.name}
                </h3>


                {/* =================================================
                    PRICE
                ================================================= */}

                {/* <strong
                  className="
                    font-serif
                    text-[31px]
                    font-medium
                    tracking-[-0.02em]
                    text-[#363637]
                  "
                >
                  {pkg.price}
                </strong> */}


                {/* =================================================
                    FOCUS
                ================================================= */}

                <span
                  className="
                    my-[12px]
                    mb-[22px]
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#87533E]
                  "
                >
                  {pkg.focus}
                </span>


                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div
                  className="
                    mb-2
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-px
                      flex-1
                      bg-[#C5934D]/25
                    "
                  />

                  <span
                    className="
                      h-[5px]
                      w-[5px]
                      rotate-45
                      bg-[#C5934D]
                    "
                  />

                  <span
                    className="
                      h-px
                      w-[25px]
                      bg-[#C5934D]/25
                    "
                  />
                </div>


                {/* =================================================
                    PACKAGE ITEMS
                ================================================= */}

                <div
                  className="
                    mt-2
                    mb-1
                    text-center
                    font-serif
                    text-[15px]
                    text-[#363637]
                  "
                >
                  Topics Covered:
                </div>

                <ul
                  className="
                    m-0
                    flex-1
                    list-none
                    pb-[12px]
                  "
                >

                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-[9px]
                        py-[7px]
                        text-sm
                        leading-[1.5]
                        text-[#363637]
                      "
                    >

                      <span
                        className="
                          mt-[2px]
                          flex
                          h-[15px]
                          w-[15px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#C5934D]/50
                        "
                      >
                        <Check
                          size={9}
                          strokeWidth={2}
                          className="
                            text-[#87533E]
                          "
                        />
                      </span>

                      <span>
                        {item}
                      </span>

                    </li>
                  ))}

                </ul>


                {/* =================================================
                    BOOKING BUTTON
                ================================================= */}

                <div className="mt-5">
                  <BookingButton
                    label="Continue to client form"
                    variant="text"
                  />
                </div>


                {/* =================================================
                    NOTE
                ================================================= */}

                <small
                  className="
                    mt-[16px]
                    text-[9px]
                    leading-[1.5]
                    text-gray
                  "
                >
                  You will select your package in the client
                  assessment form.
                </small>


                {/* =================================================
                    CORNER DETAIL
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-[70px]
                    w-[70px]
                    border-l
                    border-t

                    ${isFeatured
                      ? 'border-[#87533E]/15'
                      : 'border-[#C5934D]/15'
                    }
                  `}
                />

              </motion.article>
            );
          })}

        </div>


        {/* =================================================
            BOTTOM ORNAMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.35,
          }}
          className="
            mt-[65px]
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
                w-[55px]
                bg-[#C5934D]/40
              "
            />

            <span
              className="
                text-[12px]
                tracking-[0.15em]
                text-[#87533E]
              "
            >
              ✦ · ◐ · ✦
            </span>

            <span
              className="
                h-px
                w-[55px]
                bg-[#C5934D]/40
              "
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}