import { useState } from 'react';
import lifepathBg from '@/assets/lifepathbg.png';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/SectionHeading';
import { OrnamentalDivider } from '@/components/OrnamentalDivider';
import { BookingButton } from '@/components/BookingButton';

interface GridResult {
  driver: number;
  conductor: number;
  grid: Record<number, string>;
  driverTrait: string;
}

const driverTraits: Record<number, string> = {
  1: "your core energy revolves around leadership, independence, and pioneering new paths",
  2: "your core energy revolves around intuition, emotional harmony, and diplomatic connection",
  3: "your core energy revolves around wisdom, creative self-expression, and inspiring guidance",
  4: "your core energy revolves around discipline, practical structure, and methodical organization",
  5: "your core energy revolves around adaptability, dynamic communication, and versatile exploration",
  6: "your core energy revolves around nurturing, harmony, and a strong sense of responsibility",
  7: "your core energy revolves around deep introspection, spiritual wisdom, and analytical inquiry",
  8: "your core energy revolves around perseverance, grounded authority, and long-term mastery",
  9: "your core energy revolves around courageous action, humanitarian purpose, and passionate vitality",
};

function calculateLoShuGrid(day: number, month: number, year: number): GridResult {
  // 1. Calculate Driver (Mulank) from day: sum digits of day to 1-9
  let driver = String(day)
    .split('')
    .reduce((sum, d) => sum + Number(d), 0);
  while (driver > 9) {
    driver = String(driver)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }

  // 2. Calculate Conductor (Bhagyank) from day + month + year: sum all digits to 1-9
  const allDobStr = `${day}${month}${year}`;
  let conductor = allDobStr
    .split('')
    .reduce((sum, d) => sum + Number(d), 0);
  while (conductor > 9) {
    conductor = String(conductor)
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }

  // 3. Collect digits for grid:
  const digits: number[] = [];
  for (const char of allDobStr) {
    const num = Number(char);
    if (num >= 1 && num <= 9) {
      digits.push(num);
    }
  }

  // Add Driver and Conductor
  digits.push(driver);
  digits.push(conductor);

  // 4. Build frequency map for 1 to 9
  const counts: Record<number, number> = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
  };
  for (const d of digits) {
    if (counts[d] !== undefined) {
      counts[d]++;
    }
  }

  const grid: Record<number, string> = {
    1: counts[1] > 0 ? '1'.repeat(counts[1]) : '',
    2: counts[2] > 0 ? '2'.repeat(counts[2]) : '',
    3: counts[3] > 0 ? '3'.repeat(counts[3]) : '',
    4: counts[4] > 0 ? '4'.repeat(counts[4]) : '',
    5: counts[5] > 0 ? '5'.repeat(counts[5]) : '',
    6: counts[6] > 0 ? '6'.repeat(counts[6]) : '',
    7: counts[7] > 0 ? '7'.repeat(counts[7]) : '',
    8: counts[8] > 0 ? '8'.repeat(counts[8]) : '',
    9: counts[9] > 0 ? '9'.repeat(counts[9]) : '',
  };

  return {
    driver,
    conductor,
    grid,
    driverTrait: driverTraits[driver] || driverTraits[1],
  };
}

const loShuLayout = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

export function LifePathCalculator() {
  const [birth, setBirth] = useState({
    day: '',
    month: '',
    year: '',
  });

  const [gridResult, setGridResult] = useState<GridResult | null>(null);

  const revealGrid = () => {
    const d = parseInt(birth.day, 10);
    const m = parseInt(birth.month, 10);
    const y = parseInt(birth.year, 10);

    if (d > 0 && d <= 31 && m > 0 && m <= 12 && y >= 1900 && y <= 2100) {
      setGridResult(calculateLoShuGrid(d, m, y));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      revealGrid();
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
            w-full
            h-[500px]
            sm:h-[520px]
            overflow-hidden
            border
            border-[#C5934D]/40
            bg-[#FDFBF7]
            shadow-[0_20px_60px_rgba(9,9,9,0.08)]
          "
        >
          {/* Background Image Layer */}
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
          <div className="absolute left-4 top-4 z-20 h-4 w-4 border-l border-t border-[#C5934D]/70" />
          <div className="absolute right-4 top-4 z-20 h-4 w-4 border-r border-t border-[#C5934D]/70" />
          <div className="absolute bottom-4 left-4 z-20 h-4 w-4 border-b border-l border-[#C5934D]/70" />
          <div className="absolute bottom-4 right-4 z-20 h-4 w-4 border-b border-r border-[#C5934D]/70" />

          {/* =================================================
              CALCULATOR CONTENT (INPUT FORM)
              ================================================= */}

          {!gridResult ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                relative
                z-20
                h-full
                overflow-y-auto
                flex
                flex-col
                justify-center
                p-[clamp(30px,4vw,52px)]
                [scrollbar-width:thin]
                [scrollbar-color:#C5934D_transparent]
              "
            >
              {/* Eyebrow Label */}
              <div className="mb-7 flex items-center gap-3">
                <div className="h-[1px] w-[35px] bg-[#C5934D]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#87533E]">
                  LO SHU CALCULATOR
                </span>
              </div>

              {/* Heading */}
              <h3
                className="
                  font-serif
                  text-[34px]
                  sm:text-[38px]
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-[#363637]
                "
              >
                Enter your
                <br />
                date of birth.
              </h3>

              {/* Date Inputs */}
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
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#87533E]">
                  DAY
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
                      placeholder:text-[#363637]/25
                      focus:border-[#87533E]
                      max-sm:text-[24px]
                    "
                    type="number"
                    min={1}
                    max={31}
                    placeholder="DD"
                    value={birth.day}
                    onKeyDown={handleKeyDown}
                    onChange={(e) =>
                      setBirth({
                        ...birth,
                        day: e.target.value,
                      })
                    }
                  />
                </label>

                {/* Month */}
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#87533E]">
                  MONTH
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
                      placeholder:text-[#363637]/25
                      focus:border-[#87533E]
                      max-sm:text-[24px]
                    "
                    type="number"
                    min={1}
                    max={12}
                    placeholder="MM"
                    value={birth.month}
                    onKeyDown={handleKeyDown}
                    onChange={(e) =>
                      setBirth({
                        ...birth,
                        month: e.target.value,
                      })
                    }
                  />
                </label>

                {/* Year */}
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#87533E]">
                  YEAR
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
                      placeholder:text-[#363637]/25
                      focus:border-[#87533E]
                      max-sm:text-[24px]
                    "
                    type="number"
                    min={1900}
                    max={2100}
                    placeholder="YYYY"
                    value={birth.year}
                    onKeyDown={handleKeyDown}
                    onChange={(e) =>
                      setBirth({
                        ...birth,
                        year: e.target.value,
                      })
                    }
                  />
                </label>
              </div>

              {/* Reveal Button */}
              <button
                onClick={revealGrid}
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
                  px-8
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#FDFBF7]
                  shadow-[0_8px_22px_rgba(135,83,62,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:bg-[#724330]
                "
              >
                <span>REVEAL MY GRID</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          ) : (
            /* =================================================
               RESULT VIEW (LO SHU GRID & PATH GLIMPSE)
               ================================================= */
            <motion.div
              className="
                relative
                z-20
                h-full
                overflow-y-auto
                p-[clamp(24px,4vw,44px)]
                pb-12
                [scrollbar-width:thin]
                [scrollbar-color:#C5934D_transparent]
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-[#C5934D]/40
                [&::-webkit-scrollbar-thumb]:rounded-full
                hover:[&::-webkit-scrollbar-thumb]:bg-[#87533E]/70
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
              {/* Back Button (Sticky) */}
              <div className="sticky -top-[clamp(24px,4vw,44px)] z-30 -mx-3 mb-4 px-3 pt-2 pb-2 bg-[#FDFBF7]/90 backdrop-blur-sm">
                <button
                  onClick={() => setGridResult(null)}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#87533E]
                    transition-colors
                    hover:text-[#C5934D]
                  "
                >
                  <ArrowLeft
                    size={13}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                  <span>BACK</span>
                </button>
              </div>

              {/* Eyebrow */}
              <div className="mb-6 text-center">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#87533E]">
                  YOUR LO SHU GRID
                </span>
              </div>

              {/* 3x3 Lo Shu Grid */}
              <div className="relative mx-auto aspect-square w-[230px] sm:w-[250px]">
                {/* Subtle warm glow behind grid */}
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[#C5934D]/15 blur-xl" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full border-2 border-[#634030] grid grid-cols-3 grid-rows-3 bg-white/60 shadow-[0_10px_30px_rgba(99,64,48,0.08)] overflow-hidden"
                >
                  {loShuLayout.flat().map((num, idx) => {
                    const value = gridResult.grid[num];
                    const hasValue = Boolean(value);

                    return (
                      <motion.div
                        key={num}
                        initial={{ opacity: 0, scale: 0.5, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 340,
                          damping: 24,
                          delay: 0.1 + idx * 0.05,
                        }}
                        whileHover={{
                          scale: 1.04,
                          backgroundColor: hasValue
                            ? "rgba(247, 241, 229, 0.95)"
                            : "rgba(197, 147, 77, 0.06)",
                        }}
                        className={`
                          relative
                          flex
                          items-center
                          justify-center
                          font-serif
                          text-[26px]
                          sm:text-[30px]
                          tracking-wider
                          select-none
                          transition-colors
                          duration-300
                          ${hasValue ? 'bg-[#F7F1E5]/80 text-[#553422] font-medium' : 'bg-transparent text-transparent'}
                          ${idx % 3 !== 2 ? 'border-r border-[#634030]' : ''}
                          ${idx < 6 ? 'border-b border-[#634030]' : ''}
                        `}
                      >
                        {hasValue ? (
                          <motion.span
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                              delay: 0.15 + idx * 0.05,
                            }}
                          >
                            {value}
                          </motion.span>
                        ) : (
                          <span className="text-transparent">·</span>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.6 }}
                className="my-7 h-px w-full bg-[#C5934D]/35 origin-center"
              />

              {/* Driver & Conductor numbers */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="grid grid-cols-2 text-center"
              >
                <div>
                  <p className="text-[13px] sm:text-[14px] text-[#4A3222] font-normal">
                    Driver Number:
                  </p>
                  <motion.p
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.8 }}
                    className="mt-0.5 font-serif text-[32px] sm:text-[36px] text-[#4A3222] font-normal leading-tight"
                  >
                    {gridResult.driver}
                  </motion.p>
                </div>

                <div>
                  <p className="text-[13px] sm:text-[14px] text-[#4A3222] font-normal">
                    Conductor Number:
                  </p>
                  <motion.p
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.9 }}
                    className="mt-0.5 font-serif text-[32px] sm:text-[36px] text-[#4A3222] font-normal leading-tight"
                  >
                    {gridResult.conductor}
                  </motion.p>
                </div>
              </motion.div>

              {/* A Glimpse into Your Path */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-9 text-center"
              >
                <h4 className="font-serif text-[24px] sm:text-[26px] text-[#87533E] font-medium mb-3">
                  A Glimpse into Your Path
                </h4>
                <p className="mx-auto max-w-[450px] text-[13px] sm:text-[14px] leading-[1.75] text-[#4A3222]/85">
                  With a Driver of <strong className="font-bold text-[#4A3222]">{gridResult.driver}</strong> and a Conductor of <strong className="font-bold text-[#4A3222]">{gridResult.conductor}</strong>, {gridResult.driverTrait}. The presence of these particular numbers in your grid offers a starting point for reflection on the energetic patterns associated with your birth.
                </p>

                <div className="mt-6 flex justify-center">
                  <BookingButton
                    label="Explore a personal reading"
                    variant="text"
                  />
                </div>
              </motion.div>
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
            title="Discover your Lo Shu Grid."
            text="Begin with your date of birth and explore the sacred 3x3 Lo Shu Grid patterns, Driver number, and Conductor number."
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
              Your Lo Shu Grid maps the elements and vibrations present in your birth date,
              offering a starting point for reflection on the energetic patterns associated with your birth.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}