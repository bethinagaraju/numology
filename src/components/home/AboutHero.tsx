import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const IMAGE_URL =
    "https://static.wixstatic.com/media/67c604_41f9aa4077fe4b589fd91da0dc832aaa~mv2.png/v1/fill/w_843,h_870,fp_0.43_0.35,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/satyasubhamrout.png";

const circleText =
    "NUMEROLOGY IS A LANGUAGE OF REFLECTION • DISCOVER THE STORY WITHIN • ";

export function AboutHero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-ivory">
            {/* Main content container */}
            <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-8 sm:px-12 lg:px-[9.5vw]">

                {/* =========================
            LEFT CONTENT
        ========================== */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="
            relative z-20
            w-full
            max-w-[650px]
            pb-20
            pt-20
            lg:w-[52%]
            lg:pb-0
          "
                >
                    {/* Heading */}
                    <h1
                        className="
              max-w-[650px]
              font-sans
              text-[42px]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-dark
              sm:text-[54px]
              md:text-[62px]
              lg:text-[60px]
              xl:text-[66px]
            "
                    >
                        THE PERSON
                        <br />
                        BEHIND NUMBERS
                    </h1>

                    {/* Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.7 }}
                        className="
              mt-6
              text-[20px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#c4a063]
              sm:text-[26px]
            "
                    >
                        NAMRATTAA LAL <span className="text-gold mx-1">—</span> <span className="font-medium text-dark text-sm">NUMEROLOGIST</span>
                    </motion.p>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="
              mt-8
              max-w-[590px]
              text-[15px]
              leading-[1.65]
              text-brown
              sm:text-[17px]
              flex
              flex-col
              gap-5
            "
                    >
                        <p>
                            My path into numerology began quietly — a fascination, a curiosity, then a calling. For nearly two decades it was a hobby, a private inquiry I kept on the margins of an ordinary life. The turning point arrived through my own name: a single change of spelling, made on instinct, opened a current of clarity I had not known to look for. From that moment, I understood numbers were not symbols. They were instruments of healing.
                        </p>

                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.7 }}
                        className="mt-12 flex items-center gap-10"
                    >
                        {/* Primary */}
                        <a
                            href="#contact"
                            className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#a88143]
                px-7
                py-4
                text-[15px]
                font-medium
                text-ivory
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
                        >
                            Book a Reading

                            <ArrowUpRight
                                size={19}
                                strokeWidth={1.7}
                                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                            />
                        </a>

                        {/* Secondary */}
                        <a
                            href="#about"
                            className="
                group
                inline-flex
                items-center
                gap-2
                text-[15px]
                font-medium
                text-[#362312]
              "
                        >
                            Know More

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

                {/* =========================
            RIGHT IMAGE AREA
        ========================== */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.1,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
            pointer-events-none
            absolute
            bottom-0
            right-[-5%]
            z-10
            hidden
            h-[100%]
            w-[55%]
            lg:block
            xl:right-[-2%]
            xl:w-[53%]
          "
                >
                    {/* =========================
              GOLD CIRCULAR TEXT
          ========================== */}
                    <div
                        className="
              absolute
              right-[12%]
              top-[15%]
              aspect-square
              w-[62%]
              rounded-full
              bg-gold
            "
                    >
                        {/* Inner cutout */}
                        <div
                            className="
                absolute
                inset-[11%]
                rounded-full
                bg-ivory
              "
                        />

                        {/* SVG circular text */}
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
                                    id="aboutCirclePath"
                                    d="
                    M250,250
                    m-205,0
                    a205,205 0 1,1 410,0
                    a205,205 0 1,1 -410,0
                  "
                                />
                            </defs>

                            <text
                                fill="#2e1b0b"
                                className="
                  font-sans
                  text-[16px]
                  font-medium
                "
                            >
                                <textPath href="#aboutCirclePath">
                                    {circleText}
                                    <animate
                                        attributeName="startOffset"
                                        from="0%"
                                        to="-100%"
                                        dur="20s"
                                        repeatCount="indefinite"
                                    />
                                </textPath>
                            </text>

                            <text
                                fill="#2e1b0b"
                                className="
                  font-sans
                  text-[16px]
                  font-medium
                "
                            >
                                <textPath href="#aboutCirclePath">
                                    {circleText}
                                    <animate
                                        attributeName="startOffset"
                                        from="100%"
                                        to="0%"
                                        dur="20s"
                                        repeatCount="indefinite"
                                    />
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* =========================
              PORTRAIT
          ========================== */}
                    <motion.img
                        src={IMAGE_URL}
                        alt="Namrattaa Lal"
                        initial={{ y: 40 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1.2,
                            delay: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
              absolute
              bottom-[-3%]
              right-[0%]
              h-[95%]
              w-[80%]
              object-contain
              object-bottom
            "
                    />
                </motion.div>

                {/* =========================
            MOBILE IMAGE
        ========================== */}
                <div
                    className="
            absolute
            bottom-0
            right-[-12%]
            z-0
            block
            h-[42vh]
            w-[90%]
            opacity-40
            lg:hidden
          "
                >
                    <img
                        src={IMAGE_URL}
                        alt="Namrattaa Lal"
                        className="
              h-full
              w-full
              object-contain
              object-bottom
            "
                    />
                </div>
            </div>
        </section>
    );
}