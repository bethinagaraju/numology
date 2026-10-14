import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import founderImg from '../../assets/founder.png';
import card1Img from '../../assets/card1.png';
import card2Img from '../../assets/card2.png';
import card3Img from '../../assets/card3.png';
import card4Img from '../../assets/card4.png';
import card5Img from '../../assets/card5.png';
import card6Img from '../../assets/card6.png';
import card7Img from '../../assets/card7.png';
import card8Img from '../../assets/card8.png';
import card9Img from '../../assets/card9.png';

const cardImages: Record<number, string> = {
  1: card1Img,
  2: card2Img,
  3: card3Img,
  4: card4Img,
  5: card5Img,
  6: card6Img,
  7: card7Img,
  8: card8Img,
  9: card9Img,
};

const numberData: Record<number, { title: string; subtitle: string; dates: string }> = {
  0: { title: "NAMRATA LAL", subtitle: "FOUNDER", dates: "MASTER NUMEROLOGIST" },
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
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        w-full
        flex
        items-center
        justify-center
        min-h-[360px]
        xs:min-h-[390px]
        sm:min-h-[440px]
        md:min-h-[480px]
        lg:min-h-[540px]
        xl:min-h-[580px]
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
            x: isCompact ? 48 : 80,
            y: isCompact ? 10 : 15,
            rotate: isCompact ? 16 : 25,
            scale: 0.96,
          }}
          animate={{
            opacity: 0.8,
            x: isCompact ? 22 : 40,
            y: 0,
            rotate: isCompact ? 12 : 18,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: isCompact ? 6 : 10,
            y: -5,
            rotate: isCompact ? 6 : 10,
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            bounce: 0.35,
            duration: 1.2,
          }}
          className="
            absolute
            w-[210px]
            h-[315px]
            xs:w-[230px]
            xs:h-[345px]
            sm:w-[250px]
            sm:h-[375px]
            md:w-[270px]
            md:h-[405px]
            lg:w-[275px]
            lg:h-[415px]
            xl:w-[280px]
            xl:h-[420px]
            rounded-[14px]
            sm:rounded-[16px]
            bg-gradient-to-b from-[#3D2B1F] to-[#241710]
            shadow-[0_16px_40px_rgba(61,43,31,0.55),inset_0_2px_0_rgba(255,255,255,0.05)]
            sm:shadow-[0_20px_50px_rgba(61,43,31,0.6),inset_0_2px_0_rgba(255,255,255,0.05)]
            border-[1.5px]
            border-[#C5934D]/40
            p-2.5
            xs:p-3
            sm:p-[14px]
            flex
            items-center
            justify-center
            origin-bottom
          "
        >
          <div
            className="
              w-full
              h-full
              rounded-[9px]
              sm:rounded-[10px]
              border-[2px]
              sm:border-[3px]
              border-[#C5934D]/80
              relative
              overflow-hidden
              flex
              items-center
              justify-center
              shadow-[inset_0_0_30px_rgba(197,160,89,0.15)]
            "
          >
            {/* FOUNDER BACKGROUND (nextNum === 0) */}
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

            {/* ARCHITECTURAL GRID BORDERS */}
            <div className="absolute inset-x-2 top-3 sm:top-4 border-t-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-x-2 bottom-3 sm:bottom-4 border-b-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-y-2 left-3 sm:left-4 border-l-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-y-2 right-3 sm:right-4 border-r-[1.5px] border-[#C5934D]/40" />

            {/* INTERSECTION DIAMONDS */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />

            {/* SUBTLE CENTER SPARKLES */}
            <Sparkles className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C5934D]" size={12} />
            <Sparkles className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 text-[#C5934D]" size={12} />

            {/* TOP TEXT */}
            {nextNum !== 0 && (
              <div className="absolute top-[24px] xs:top-[28px] sm:top-[34px] w-full flex flex-col items-center gap-1 z-20 px-2">
                <span className="text-[#C5934D] text-[9px] sm:text-[11px] font-serif tracking-[0.25em] sm:tracking-[0.3em] uppercase text-center font-medium">
                  The Golden Numeralist
                </span>
                <div className="w-16 sm:w-24 h-[1px] bg-[#C5934D]/40 mt-0.5" />
              </div>
            )}

            {/* NUMBER / CARD ARTWORK */}
            {nextNum !== 0 && (
              cardImages[nextNum] ? (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] xs:w-[135px] xs:h-[135px] sm:w-[155px] sm:h-[155px] md:w-[165px] md:h-[165px] flex items-center justify-center z-20 pointer-events-none">
                  <img
                    src={cardImages[nextNum]}
                    alt={`Card ${nextNum}`}
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(197,147,77,0.30)] select-none"
                  />
                </div>
              ) : (
                <span
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-[#F0E6D2]
                    text-[100px]
                    xs:text-[115px]
                    sm:text-[140px]
                    md:text-[160px]
                    font-serif
                    leading-none
                    tracking-tighter
                    select-none
                    z-20
                  "
                >
                  {nextNum}
                </span>
              )
            )}

            {/* BOTTOM TEXT */}
            <div className="absolute bottom-[24px] xs:bottom-[28px] sm:bottom-[36px] w-full flex flex-col items-center gap-[4px] sm:gap-[6px] z-20 px-2">
              <div className="w-20 sm:w-28 h-[1px] bg-[#C5934D]/40 mb-0.5" />
              <span className="text-[#C5934D] text-[13px] xs:text-[14px] sm:text-[16px] font-serif tracking-[0.2em] sm:tracking-[0.25em] uppercase text-center font-medium">
                {numberData[nextNum].title}
              </span>
              <span className="text-[#C5934D]/80 text-[7.5px] xs:text-[8px] sm:text-[9px] font-sans tracking-[0.25em] sm:tracking-[0.35em] uppercase text-center">
                {numberData[nextNum].subtitle}
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
            x: isCompact ? 40 : 70,
            y: isCompact ? 15 : 30,
            rotate: isCompact ? 8 : 12,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: isCompact ? -12 : -20,
            y: isCompact ? -10 : -20,
            rotate: isCompact ? -4 : -6,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: isCompact ? -50 : -95,
            y: isCompact ? -20 : -35,
            rotate: isCompact ? -10 : -18,
            scale: 0.94,
          }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 1.4,
          }}
          className="
            absolute
            w-[220px]
            h-[330px]
            xs:w-[240px]
            xs:h-[360px]
            sm:w-[260px]
            sm:h-[390px]
            md:w-[280px]
            md:h-[420px]
            lg:w-[285px]
            lg:h-[430px]
            xl:w-[290px]
            xl:h-[440px]
            rounded-[14px]
            sm:rounded-[16px]
            bg-gradient-to-b from-[#3D2B1F] to-[#241710]
            shadow-[0_18px_45px_rgba(61,43,31,0.6),inset_0_2px_0_rgba(255,255,255,0.05)]
            sm:shadow-[0_25px_60px_rgba(61,43,31,0.7),inset_0_2px_0_rgba(255,255,255,0.05)]
            border-[1.5px]
            border-[#C5934D]/40
            p-2.5
            xs:p-3
            sm:p-[14px]
            flex
            items-center
            justify-center
            origin-bottom
            z-10
          "
        >
          <div
            className="
              w-full
              h-full
              rounded-[9px]
              sm:rounded-[10px]
              border-[2px]
              sm:border-[3px]
              border-[#C5934D]/80
              relative
              overflow-hidden
              flex
              items-center
              justify-center
              shadow-[inset_0_0_30px_rgba(197,160,89,0.15)]
            "
          >
            {/* FOUNDER BACKGROUND (num === 0) */}
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

            {/* ARCHITECTURAL GRID BORDERS */}
            <div className="absolute inset-x-2 top-3 sm:top-4 border-t-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-x-2 bottom-3 sm:bottom-4 border-b-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-y-2 left-3 sm:left-4 border-l-[1.5px] border-[#C5934D]/40" />
            <div className="absolute inset-y-2 right-3 sm:right-4 border-r-[1.5px] border-[#C5934D]/40" />

            {/* INTERSECTION DIAMONDS */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 translate-x-1/2 -translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 -translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C5934D] rotate-45 translate-x-1/2 translate-y-1/2 shadow-[0_0_6px_rgba(197,160,89,0.8)]" />

            {/* SUBTLE CENTER SPARKLES */}
            <Sparkles className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C5934D]" size={12} />
            <Sparkles className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 translate-y-1/2 text-[#C5934D]" size={12} />

            {/* TOP TEXT */}
            {num !== 0 && (
              <div className="absolute top-[24px] xs:top-[28px] sm:top-[34px] w-full flex flex-col items-center gap-1 z-20 px-2">
                <span className="text-[#C5934D] text-[9px] sm:text-[11px] font-serif tracking-[0.25em] sm:tracking-[0.3em] uppercase text-center font-medium">
                  The Golden Numeralist
                </span>
                <div className="w-16 sm:w-24 h-[1px] bg-[#C5934D]/40 mt-0.5" />
              </div>
            )}

            {/* NUMBER / CARD ARTWORK */}
            {num !== 0 && (
              cardImages[num] ? (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] xs:w-[145px] xs:h-[145px] sm:w-[165px] sm:h-[165px] md:w-[175px] md:h-[175px] flex items-center justify-center z-20 pointer-events-none">
                  <img
                    src={cardImages[num]}
                    alt={`Card ${num}`}
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(197,147,77,0.35)] select-none transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ) : (
                <span
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    text-[#F0E6D2]
                    text-[100px]
                    xs:text-[115px]
                    sm:text-[140px]
                    md:text-[160px]
                    font-serif
                    leading-none
                    tracking-tighter
                    select-none
                    z-20
                  "
                >
                  {num}
                </span>
              )
            )}

            {/* BOTTOM TEXT */}
            <div className="absolute bottom-[24px] xs:bottom-[28px] sm:bottom-[36px] w-full flex flex-col items-center gap-[4px] sm:gap-[6px] z-20 px-2">
              <div className="w-20 sm:w-28 h-[1px] bg-[#C5934D]/40 mb-0.5" />
              <span className="text-[#FFFFFF] text-[13px] xs:text-[14px] sm:text-[16px] font-serif tracking-[0.2em] sm:tracking-[0.25em] uppercase text-center font-medium">
                {numberData[num].title}
              </span>
              <span className="text-[#C5934D]/80 text-[7.5px] xs:text-[8px] sm:text-[9px] font-sans tracking-[0.25em] sm:tracking-[0.35em] uppercase text-center">
                {numberData[num].subtitle}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}