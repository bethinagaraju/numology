// import { motion } from 'framer-motion';
// import { SectionHeading } from '@/components/SectionHeading';
// import { reveal } from '@/data/siteData';

// export function Intro() {
//   return (
//     <section className="relative pt-[146px] pb-[130px] border-b border-gold/30">
//       <div className="grid grid-cols-[2fr_1fr] max-md:grid-cols-1 gap-[12%] max-w-[1240px] mx-auto px-[clamp(24px,5vw,80px)]">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
//           <SectionHeading eyebrow="The practice" title="Numbers have a language." text="Numerology is a traditional system that interprets numbers associated with names and dates. At The Golden Numeralist, that language becomes a considered space for reflection — a way to look at your patterns with fresh eyes." />
//         </motion.div>
//         <div className="self-end relative pl-[40px] max-md:mt-[50px] max-md:pl-[30px]">
//           {/* Aesthetic border line */}
//           <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#C5934D]">
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[40px] bg-[#C5934D]" />
//           </div>

//           <span className="text-[#C5934D] font-serif text-[68px] leading-[0.5] block mb-[16px]">∴</span>
//           <p className="font-serif text-[26px] text-dark leading-[1.2]">Not a prediction.<br /><span className="italic text-brown/80">A new perspective.</span></p>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { reveal } from '@/data/siteData';

export function Intro() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FDFBF7]
        pt-[120px]
        pb-[120px]
        border-b
        border-[#C5934D]/20
      "
    >

      {/* =====================================================
          SUBTLE DECORATIVE CIRCLE
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          top-[50%]
          -translate-y-1/2
          h-[620px]
          w-[620px]
          rounded-full
          border
          border-[#C5934D]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[50%]
          -translate-y-1/2
          h-[500px]
          w-[500px]
          rounded-full
          border
          border-dashed
          border-[#C5934D]/10
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
          grid-cols-[2fr_1fr]
          max-md:grid-cols-1
          gap-[12%]
          max-w-[1240px]
          mx-auto
          px-[clamp(24px,5vw,80px)]
        "
      >

        {/* =================================================
            LEFT CONTENT
            ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="relative"
        >
          <SectionHeading
            eyebrow="The practice"
            title="Numbers have a language."
            text="Numerology is a traditional system that interprets numbers associated with names and dates. At The Golden Numeralist, that language becomes a considered space for reflection — a way to look at your patterns with fresh eyes."
          />
        </motion.div>


        {/* =================================================
            RIGHT STATEMENT
            ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            self-end
            relative
            pl-[40px]
            max-md:mt-[60px]
            max-md:pl-[30px]
          "
        >

          {/* Vertical accent line */}
          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-[1px]
              bg-[#C5934D]/50
            "
          >

            {/* Gold highlight */}
            <div
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-[3px]
                h-[42px]
                bg-[#C5934D]
              "
            />

          </div>


          {/* Decorative symbol */}
          <span
            className="
              block
              mb-[18px]
              font-serif
              text-[60px]
              leading-[0.5]
              text-[#87533E]
            "
          >
            ∴
          </span>


          {/* Main statement */}
          <p
            className="
              font-serif
              text-[27px]
              sm:text-[29px]
              text-[#363637]
              leading-[1.18]
              tracking-[-0.015em]
            "
          >
            Not a prediction.
            <br />

            <span
              className="
                italic
                text-[#8a6651]
              "
            >
              A new perspective.
            </span>
          </p>


          {/* Small decorative divider */}
          <div
            className="
              mt-[28px]
              h-[1px]
              w-[70px]
              bg-gradient-to-r
              from-[#C5934D]
              to-transparent
            "
          />

        </motion.div>

      </div>

    </section>
  );
}