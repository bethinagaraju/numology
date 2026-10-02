

import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import founderImg from '../../assets/founder.png';

const numberData: Record<number, { title: string; subtitle: string; dates: string }> = {
  0: { title: "NEELEMA", subtitle: "FOUNDER", dates: "MASTER NUMEROLOGIST" },
  1: { title: "THE LEADER", subtitle: "INDEPENDENCE • INNOVATION", dates: "01 • 10 • 19" },
  2: { title: "THE PEACEMAKER", subtitle: "HARMONY • INTUITION", dates: "02 • 11 • 20" },
  3: { title: "THE CREATOR", subtitle: "CREATIVITY • EXPRESSION", dates: "03 • 12 • 21" },
  4: { title: "THE BUILDER", subtitle: "STABILITY • DISCIPLINE", dates: "04 • 13 • 22" },
  5: { title: "THE VISIONARY", subtitle: "FREEDOM • ADVENTURE", dates: "05 • 14 • 23" },
  6: { title: "THE NURTURER", subtitle: "COMPASSION • HEALING", dates: "06 • 15 • 24" },
  7: { title: "THE SEEKER", subtitle: "WISDOM • TRUTH", dates: "07 • 16 • 25" },
  8: { title: "THE ACHIEVER", subtitle: "POWER • AMBITION", dates: "08 • 17 • 26" },
  9: { title: "THE HUMANITARIAN", subtitle: "WISDOM • COMPLETION", dates: "09 • 18 • 27" },
};
export function HeroCards() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => (prev + 1) % 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextNum = (num + 1) % 10;

  return (
    <div
      className="
        relative
        min-h-[560px]
        flex
        items-center
        justify-center
        max-md:min-h-[470px]
        max-md:mt-[40px]
        [perspective:1400px]
      "
    >

      {/* =========================================================
          BACK CARD
          ========================================================= */}

      <AnimatePresence mode="sync">
        <motion.div
          key={`back-${nextNum}`}
          initial={{
            opacity: 0,
            x: 80,
            y: 15,
            rotate: 25,
            scale: 0.96,
          }}
          animate={{
            opacity: 0.8,
            x: 40,
            y: 0,
            rotate: 18,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 10,
            y: -5,
            rotate: 10,
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            bounce: 0.35,
            duration: 1.2,
          }}
          className="
            absolute
            w-[280px]
            h-[420px]
            rounded-[16px]
            bg-gradient-to-b from-[#3D2B1F] to-[#241710]
            shadow-[0_20px_50px_rgba(61,43,31,0.6),inset_0_2px_0_rgba(255,255,255,0.05)]
            border-[1.5px]
            border-[#C5934D]/40
            p-[14px]
            flex
            items-center
            justify-center
            origin-bottom
            max-sm:w-[240px]
            max-sm:h-[360px]
          "
        >
          <div
            className="
              w-full
              h-full
              rounded-[10px]
              border-[3px]
              border-[#C5934D]/80
              relative
              overflow-hidden
              flex
              items-center
              justify-center
              shadow-[inset_0_0_30px_rgba(197,160,89,0.15)]
            "
          >

            {/* =================================================
                FOUNDER BACKGROUND (nextNum === 0)
                ================================================= */}
            {nextNum === 0 && (
              <>
                <img
                  src={founderImg}
                  alt="Founder"
                  className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#3D2B1F]/90 via-[#3D2B1F]/30 to-[#241710]/95 z-0" />
              </>
            )}

            {/* =================================================
                ARCHITECTURAL GRID BORDERS
                ================================================= */}
            {/* Horizontal Lines */}
            <div className="absolute inset-x-2 top-4 border-t-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-x-2 bottom-4 border-b-[1.5px] border-[#C5934D]/40" />

            {/* Vertical Lines */}
            <div className="absolute inset-y-2 left-4 border-l-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-y-2 right-4 border-r-[1.5px] border-[#C5934D]/40" />

            {/* =================================================
                INTERSECTION DIAMONDS
                ================================================= */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#C5934D] rotate-45 translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#C5934D] rotate-45 translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />

            {/* =================================================
                SUBTLE CENTER SPARKLES
                ================================================= */}
            <Sparkles className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C5934D]" size={14} />
            <Sparkles className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 text-[#C5934D]" size={14} />

            {/* =================================================
                TOP TEXT
                ================================================= */}
            {nextNum !== 0 && (
              <div className="absolute top-[36px] w-full flex flex-col items-center gap-1 z-20">
                <span className="text-[#C5934D] text-[11px] font-serif tracking-[0.3em] uppercase text-center font-medium">
                  The Golden Numeralist
                </span>
                <div className="w-24 h-[1px] bg-[#C5934D]/40 mt-1" />
              </div>
            )}

            {/* =================================================
                NUMBER
                ================================================= */}
            {nextNum !== 0 && (
              <span
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  text-[#F0E6D2]
                  text-[160px]
                  font-serif
                  leading-none
                  tracking-tighter
                  select-none
                  z-20
                "
              >
                {nextNum}
              </span>
            )}

            {/* =================================================
                BOTTOM TEXT
                ================================================= */}
            <div className="absolute bottom-[40px] w-full flex flex-col items-center gap-[6px] z-20">
              <div className="w-28 h-[1px] bg-[#C5934D]/40 mb-1" />
              <span className="text-[#C5934D] text-[16px] font-serif tracking-[0.25em] uppercase text-center font-medium">
                {numberData[nextNum].title}
              </span>
              <span className="text-[#C5934D]/80 text-[9px] font-sans tracking-[0.35em] uppercase text-center">
                {numberData[nextNum].subtitle}
              </span>
              <span className="text-[#C5934D]/70 text-[10px] font-serif tracking-[0.25em] mt-1 text-center">
                {numberData[nextNum].dates}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* =========================================================
          FRONT CARD
          ========================================================= */}

      <AnimatePresence mode="sync">
        <motion.div
          key={`front-${num}`}
          initial={{
            opacity: 0,
            x: 70,
            y: 30,
            rotate: 12,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: -20,
            y: -20,
            rotate: -6,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -95,
            y: -35,
            rotate: -18,
            scale: 0.94,
          }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1.4,
          }}
          className="
            absolute
            w-[290px]
            h-[440px]
            rounded-[16px]
            bg-gradient-to-b from-[#3D2B1F] to-[#241710]
            shadow-[0_25px_60px_rgba(61,43,31,0.7),inset_0_2px_0_rgba(255,255,255,0.05)]
            border-[1.5px]
            border-[#C5934D]/40
            p-[14px]
            flex
            items-center
            justify-center
            origin-bottom
            z-10
            max-sm:w-[250px]
            max-sm:h-[380px]
          "
        >
          <div
            className="
              w-full
              h-full
              rounded-[10px]
              border-[3px]
              border-[#C5934D]/80
              relative
              overflow-hidden
              flex
              items-center
              justify-center
              shadow-[inset_0_0_30px_rgba(197,160,89,0.15)]
            "
          >
            {/* =================================================
                FOUNDER BACKGROUND (num === 0)
                ================================================= */}
            {num === 0 && (
              <>
                <img
                  src={founderImg}
                  alt="Founder"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#3D2B1F]/10 via-[#3D2B1F]/30 to-[#241710]/95 z-0" />
              </>
            )}

            {/* =================================================
                ARCHITECTURAL GRID BORDERS
                ================================================= */}
            {/* Horizontal Lines */}
            <div className="absolute inset-x-2 top-4 border-t-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-x-2 bottom-4 border-b-[1.5px] border-[#C5934D]/40" />

            {/* Vertical Lines */}
            <div className="absolute inset-y-2 left-4 border-l-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-y-2 right-4 border-r-[1.5px] border-[#C5934D]/40" />

            {/* =================================================
                INTERSECTION DIAMONDS
                ================================================= */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#C5934D] rotate-45 translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#C5934D] rotate-45 translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />

            {/* =================================================
                SUBTLE CENTER SPARKLES
                ================================================= */}
            <Sparkles className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C5934D]" size={14} />
            <Sparkles className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 text-[#C5934D]" size={14} />

            {/* =================================================
                TOP TEXT
                ================================================= */}
            {num !== 0 && (
              <div className="absolute top-[36px] w-full flex flex-col items-center gap-1 z-20">
                <span className="text-[#C5934D] text-[11px] font-serif tracking-[0.3em] uppercase text-center font-medium">
                  The Golden Numeralist
                </span>
                <div className="w-24 h-[1px] bg-[#C5934D]/40 mt-1" />
              </div>
            )}

            {/* =================================================
                NUMBER
                ================================================= */}
            {num !== 0 && (
              <span
                className="
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  text-[#F0E6D2]
                  text-[160px]
                  font-serif
                  leading-none
                  tracking-tighter
                  select-none
                  z-20
                "
              >
                {num}
              </span>
            )}

            {/* =================================================
                BOTTOM TEXT
                ================================================= */}
            <div className="absolute bottom-[40px] w-full flex flex-col items-center gap-[6px] z-20">
              <div className="w-28 h-[1px] bg-[#C5934D]/40 mb-1" />
              <span className="text-[#C5934D] text-[16px] font-serif tracking-[0.25em] uppercase text-center font-medium">
                {numberData[num].title}
              </span>
              <span className="text-[#C5934D]/80 text-[9px] font-sans tracking-[0.35em] uppercase text-center">
                {numberData[num].subtitle}
              </span>
              <span className="text-[#C5934D]/70 text-[10px] font-serif tracking-[0.25em] mt-1 text-center">
                {numberData[num].dates}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}