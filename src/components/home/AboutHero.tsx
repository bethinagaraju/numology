import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import IMAGE_URL from "../../assets/founder-about.png";
import { GOOGLE_FORM_URL } from "@/components/BookingButton";

const circleText =
  "NUMEROLOGY IS A LANGUAGE OF REFLECTION • DISCOVER THE STORY WITHIN • ";

function HeadingAndName() {
  return (
    <>
      {/* Heading */}
      <h2
        className="
          max-w-[650px]
          font-sans
          text-[34px]
          xs:text-[40px]
          sm:text-[48px]
          md:text-[54px]
          lg:text-[54px]
          xl:text-[62px]
          font-medium
          leading-[1.04]
          sm:leading-[0.98]
          tracking-[-0.04em]
          text-[#87533E]
        "
      >
        THE PERSON
        <br />
        BEHIND NUMBERS
      </h2>

      {/* Name */}
      <p
        className="
          mt-4
          sm:mt-6
          flex
          flex-wrap
          items-center
          gap-2.5
          sm:gap-3
          text-[15px]
          xs:text-[17px]
          sm:text-[20px]
          lg:text-[21px]
          font-semibold
          uppercase
          tracking-[0.14em]
          sm:tracking-[0.17em]
          text-[#c08b38]
        "
      >
        <span>NAMRATTAA LAL</span>

        <span className="text-[#87533E]">—</span>

        <span
          className="
            text-[11px]
            sm:text-[12px]
            md:text-[13px]
            font-medium
            tracking-[0.16em]
            sm:tracking-[0.18em]
            text-[#8a5b3c]
          "
        >
          NUMEROLOGIST
        </span>
      </p>
    </>
  );
}

export function AboutHero() {
  return (
    <section
      id="about-us"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FDFBF7]
        py-14
        sm:py-18
        md:py-22
        lg:py-28
        xl:py-32
        border-b
        border-[#C5934D]/15
      "
    >
      {/* Background subtle geometry */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[40%]
          -translate-y-1/2
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-[#C5934D]/10
          hidden
          md:block
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-4
          sm:px-8
          md:px-12
          lg:px-[6vw]
          xl:px-[8vw]
        "
      >
        {/* =====================================================
            MOBILE & TABLET HEADER (Displayed on top for < lg)
            ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            block
            lg:hidden
            w-full
            max-w-[650px]
            mx-auto
            mb-6
            sm:mb-8
          "
        >
          <HeadingAndName />
        </motion.div>

        {/* =====================================================
            TWO-COLUMN GRID (Side-by-side on desktop)
            ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-8
            sm:gap-10
            md:gap-12
            lg:gap-8
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT (Desktop Header + Story & CTA)
              ====================================================== */}
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
              z-30
              w-full
              max-w-[650px]
              mx-auto
              lg:mx-0
              order-2
              lg:order-1
            "
          >
            {/* Desktop-only Header (Header stays in left col on desktop) */}
            <div className="hidden lg:block">
              <HeadingAndName />
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="
                mt-0
                lg:mt-8
                max-w-[600px]
                text-[14.5px]
                xs:text-[15px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[1.7]
                text-[#5b4639]
              "
            >
              <p>
                My path into numerology began quietly — a fascination, a
                curiosity, then a calling. For many years it was a hobby, a
                private inquiry I kept on the margins of an ordinary life. The
                turning point arrived through my own name: a single change of
                spelling, made on instinct, opened a current of clarity I had not
                known to look for. From that moment, I understood numbers were
                not symbols. They were instruments of healing.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="
                mt-7
                sm:mt-9
                lg:mt-10
                flex
                flex-col
                sm:flex-row
                items-stretch
                sm:items-center
                gap-4
                sm:gap-6
                w-full
                sm:w-auto
              "
            >
              {/* Primary Button */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#87533E]
                  px-8
                  py-[14px]
                  sm:py-[15px]
                  text-[14px]
                  sm:text-[15px]
                  font-medium
                  text-[#FDFBF7]
                  shadow-[0_4px_14px_rgba(169,79,47,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_22px_rgba(169,79,47,0.28)]
                  w-full
                  sm:w-auto
                "
              >
                <span>Book Session</span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL (Gold Ring + Rotating Text + Portrait)
              order-1 on mobile/tablet (under header), order-2 on desktop
              ====================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              w-full
              flex
              items-end
              justify-center
              lg:justify-end
              min-h-[340px]
              xs:min-h-[380px]
              sm:min-h-[440px]
              md:min-h-[500px]
              lg:min-h-[580px]
              xl:min-h-[640px]
              order-1
              lg:order-2
            "
          >
            {/* =================================================
                GOLD RING WITH ROTATING CIRCULAR TEXT
                ================================================= */}
            <div
              className="
                absolute
                aspect-square
                w-[260px]
                xs:w-[290px]
                sm:w-[340px]
                md:w-[400px]
                lg:w-[440px]
                xl:w-[500px]
                rounded-full
                bg-[#C5934D]
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                lg:left-auto
                lg:right-[4%]
                lg:top-[12%]
                lg:translate-x-0
                lg:translate-y-0
                shadow-[0_12px_36px_rgba(197,147,77,0.28)]
              "
            >
              {/* Inner white/ivory cutout */}
              <div
                className="
                  absolute
                  inset-[11%]
                  rounded-full
                  bg-[#FDFBF7]
                "
              />

              {/* Circular Text */}
              <svg
                viewBox="0 0 500 500"
                className="
                  absolute
                  inset-[-4%]
                  h-[108%]
                  w-[108%]
                  overflow-visible
                "
              >
                <defs>
                  <path
                    id="aboutCirclePathResponsive"
                    d="
                      M250,250
                      m-205,0
                      a205,205 0 1,1 410,0
                      a205,205 0 1,1 -410,0
                    "
                  />
                </defs>

                <text
                  fill="#61371f"
                  className="
                    font-sans
                    text-[15px]
                    font-medium
                    tracking-[0.02em]
                  "
                >
                  <textPath href="#aboutCirclePathResponsive">
                    {circleText}
                    <animate
                      attributeName="startOffset"
                      from="0%"
                      to="-100%"
                      dur="22s"
                      repeatCount="indefinite"
                    />
                  </textPath>
                </text>

                <text
                  fill="#61371f"
                  className="
                    font-sans
                    text-[15px]
                    font-medium
                    tracking-[0.02em]
                  "
                >
                  <textPath href="#aboutCirclePathResponsive">
                    {circleText}
                    <animate
                      attributeName="startOffset"
                      from="100%"
                      to="0%"
                      dur="22s"
                      repeatCount="indefinite"
                    />
                  </textPath>
                </text>
              </svg>
            </div>

            {/* =================================================
                FOUNDER PORTRAIT (Namrattaa Lal)
                ================================================= */}
            <motion.img
              src={IMAGE_URL}
              alt="Namrattaa Lal - Master Numerologist and Founder of The Golden Numeralist"
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                h-[330px]
                xs:h-[370px]
                sm:h-[430px]
                md:h-[490px]
                lg:h-[560px]
                xl:h-[620px]
                w-auto
                max-w-[95%]
                object-contain
                object-bottom
                pointer-events-none
                drop-shadow-[0_12px_28px_rgba(0,0,0,0.12)]
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}