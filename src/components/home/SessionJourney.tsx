import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { journeySteps } from '@/data/siteData';

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

const shortStepLabels = ['Details', 'Analysis', 'Session', 'Guidance'];

export function SessionJourney() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(0);

  // Auto-advance through the steps when not hovered/interacting
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveCard((prev) => (prev + 1) % journeySteps.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isHovered]);

  const paginate = (newDirection: number) => {
    setIsHovered(true);
    setDirection(newDirection);
    setActiveCard((prev) => (prev + newDirection + journeySteps.length) % journeySteps.length);
  };

  const goToStep = (index: number) => {
    setIsHovered(true);
    setDirection(index > activeCard ? 1 : -1);
    setActiveCard(index);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FDFBF7]
        py-12
        xs:py-14
        sm:py-20
        md:py-[125px]
        lg:py-[135px]
        border-b
        border-[#C5934D]/20
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION (Subtle sacred geometry)
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large top-left circle - hidden on small mobile to prevent clutter */}
        <div className="absolute -left-[180px] -top-[150px] hidden h-[430px] w-[430px] rounded-full border border-[#C5934D]/10 md:block" />

        {/* Inner dashed circle */}
        <div className="absolute left-[45px] top-[75px] hidden h-[250px] w-[250px] rounded-full border border-dashed border-[#C5934D]/10 md:block" />

        {/* Bottom-left circles */}
        <div className="absolute -bottom-[200px] -left-[160px] h-[340px] w-[340px] sm:h-[450px] sm:w-[450px] rounded-full border border-[#C5934D]/10" />
        <div className="absolute -bottom-[145px] -left-[105px] h-[250px] w-[250px] sm:h-[330px] sm:w-[330px] rounded-full border border-dashed border-[#C5934D]/10" />

        {/* Right circles */}
        <div className="absolute -right-[220px] top-[180px] h-[380px] w-[380px] sm:h-[500px] sm:w-[500px] rounded-full border border-[#C5934D]/10" />
        <div className="absolute -right-[160px] top-[240px] h-[280px] w-[280px] sm:h-[370px] sm:w-[370px] rounded-full border border-dashed border-[#C5934D]/10" />

        {/* Small terracotta accent diamonds */}
        <span className="absolute left-[5%] sm:left-[7%] top-[45%] h-[6px] w-[6px] sm:h-[7px] sm:w-[7px] rotate-45 bg-[#87533E] opacity-50" />
        <span className="absolute right-[6%] sm:right-[8%] top-[35%] h-[6px] w-[6px] sm:h-[7px] sm:w-[7px] rotate-45 bg-[#87533E] opacity-50" />
      </div>

      {/* =========================================================
          CONTENT CONTAINER
      ========================================================= */}
      <div className="relative mx-auto max-w-[1450px] px-4 xs:px-6 sm:px-8 md:px-10 lg:px-14">
        {/* =========================================================
            SECTION HEADING
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[780px] text-center"
        >
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-[28px] sm:w-[45px] bg-[#C5934D]" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.30em] text-[#87533E]">
              The experience
            </span>
            <span className="h-px w-[28px] sm:w-[45px] bg-[#C5934D]" />
          </div>

          {/* Title */}
          <h2 className="font-serif text-[32px] xs:text-[40px] sm:text-[52px] md:text-[66px] lg:text-[76px] font-normal leading-[1.08] sm:leading-[1.0] md:leading-[0.95] tracking-[-0.035em] sm:tracking-[-0.045em] text-[#363637]">
            Your session,{' '}
            <span className="block sm:inline sm:ml-2 md:ml-4 italic text-[#87533E]">
              Reimagined.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 sm:mt-6 md:mt-7 max-w-[610px] text-[13px] sm:text-[14px] leading-[1.7] sm:leading-[1.8] text-[#363637]/85 px-2">
            A thoughtful process, from first detail to the insight you take with you.
          </p>
        </motion.div>

        {/* =========================================================
            JOURNEY AREA
        ========================================================= */}
        <div className="relative mt-10 xs:mt-12 sm:mt-16 md:mt-[105px]">
          {/* =======================================================
              DESKTOP VIEW (≥ 768px): Flowing wave & 4-card grid
          ======================================================= */}
          <div className="hidden md:block">
            {/* Desktop Flowing Connection Curve */}
            <svg
              className="pointer-events-none absolute left-[12.5%] top-[105px] h-[150px] w-[75%] overflow-visible"
              viewBox="0 0 1200 150"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.55 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
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

              {/* Connection points on the curve */}
              <circle cx="0" cy="40" r="3" fill="#87533E" />
              <circle cx="400" cy="40" r="3" fill="#87533E" />
              <circle cx="800" cy="40" r="3" fill="#87533E" />
              <circle cx="1200" cy="40" r="3" fill="#87533E" />
            </svg>

            {/* Desktop 4-Column Grid */}
            <div className="grid grid-cols-4 gap-[20px] lg:gap-[25px] xl:gap-[32px]">
              {journeySteps.map((item, i) => {
                const image = journeyImages[i];
                const isActive = activeCard === i;

                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.15 + 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex flex-col items-center text-center"
                    data-active={isActive}
                  >
                    {/* Arch image container */}
                    <div
                      className="
                        relative
                        h-[265px]
                        w-[195px]
                        lg:h-[275px]
                        lg:w-[205px]
                        cursor-pointer
                        transition-all
                        duration-700
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
                      {/* Outer arch border */}
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
                          group-data-[active=true]:shadow-[0_20px_50px_rgba(169,79,47,0.14)]
                        "
                      >
                        {/* Inner image */}
                        <div className="relative h-full w-full overflow-hidden rounded-t-[100px] rounded-b-[2px]">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition-transform duration-700 group-data-[active=true]:scale-105"
                          />
                          <div className="absolute inset-0 bg-[#8b4d32]/10 mix-blend-multiply" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#363637]/20 via-transparent to-[#FDFBF7]/10" />
                        </div>
                      </div>

                      {/* Top star ornament */}
                      <div className="absolute -top-[20px] left-1/2 z-20 -translate-x-1/2">
                        <div className="relative flex h-[32px] w-[32px] items-center justify-center">
                          <span className="absolute h-[25px] w-[1px] rotate-45 bg-[#C5934D]" />
                          <span className="absolute h-[25px] w-[1px] -rotate-45 bg-[#C5934D]" />
                          <span className="relative text-[13px] text-[#87533E]">✦</span>
                        </div>
                      </div>

                      {/* Number badge */}
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
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#C5934D]/35">
                          <span className="font-serif text-[24px] text-[#87533E]">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative divider */}
                    <div className="mt-[52px] flex items-center justify-center gap-3">
                      <span className="h-px w-[30px] bg-[#C5934D]/45" />
                      <span className="h-[5px] w-[5px] rotate-45 bg-[#87533E]" />
                      <span className="h-px w-[30px] bg-[#C5934D]/45" />
                    </div>

                    {/* Step label */}
                    <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a98243]">
                      Step {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Step title */}
                    <h3 className="mt-2 max-w-[270px] font-serif text-[22px] lg:text-[24px] font-normal leading-[1.15] tracking-[-0.02em] text-[#363637] transition-colors duration-300 group-data-[active=true]:text-[#87533E]">
                      {item.step}
                    </h3>

                    {/* Description */}
                    <p className="mx-auto mt-4 max-w-[230px] text-[13px] leading-[1.75] text-[#705d4e]">
                      {item.text}
                    </p>

                    {/* Small bottom gold line with dot */}
                    <div className="mt-5 flex flex-col items-center">
                      <span className="h-[25px] w-px bg-[#C5934D]/45" />
                      <span className="h-[5px] w-[5px] rounded-full bg-[#87533E]" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =======================================================
              MOBILE & TABLET VIEW (< 768px):
              Interactive Carousel with Step Progress Indicator
          ======================================================= */}
          <div className="block md:hidden">
            {/* Step Progress Bar Tracker */}
            <div className="mb-8 xs:mb-10 max-w-[380px] mx-auto px-2">
              <div className="relative flex items-center justify-between">
                {/* Background Track Line */}
                <div className="absolute left-[20px] right-[20px] top-[18px] h-[1px] bg-[#C5934D]/25" />

                {/* Active Progress Fill Line */}
                <div
                  className="absolute left-[20px] top-[18px] h-[1.5px] bg-[#87533E] transition-all duration-500 ease-out"
                  style={{
                    width: `${(activeCard / (journeySteps.length - 1)) * 100}%`,
                    maxWidth: 'calc(100% - 40px)',
                  }}
                />

                {/* 4 Step Number Buttons */}
                {journeySteps.map((step, idx) => {
                  const isActive = activeCard === idx;
                  const isPast = activeCard > idx;

                  return (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => goToStep(idx)}
                      className="relative z-10 flex flex-col items-center group focus:outline-none"
                      aria-label={`Step ${idx + 1}: ${step.step}`}
                    >
                      <div
                        className={`
                          flex h-[36px] w-[36px] items-center justify-center rounded-full border transition-all duration-300
                          ${
                            isActive
                              ? 'border-[#87533E] bg-[#87533E] text-[#FDFBF7] shadow-[0_4px_14px_rgba(135,83,62,0.28)] scale-110 ring-4 ring-[#87533E]/10'
                              : isPast
                              ? 'border-[#C5934D] bg-[#FDFBF7] text-[#87533E]'
                              : 'border-[#C5934D]/40 bg-[#FDFBF7] text-[#87533E]/50 group-hover:border-[#C5934D]'
                          }
                        `}
                      >
                        <span className="font-serif text-[14px] font-semibold leading-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <span
                        className={`
                          mt-2 text-[10px] font-medium tracking-[0.05em] uppercase transition-colors duration-300
                          ${isActive ? 'text-[#87533E] font-semibold' : 'text-[#87533E]/60'}
                        `}
                      >
                        {shortStepLabels[idx]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Card Carousel with Gesture Swiping */}
            <div
              className="relative mx-auto max-w-[340px] px-1"
              onTouchStart={() => setIsHovered(true)}
            >
              <div className="relative overflow-visible pt-4 pb-1 min-h-[430px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeCard}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({
                        x: dir > 0 ? 60 : -60,
                        opacity: 0,
                        scale: 0.96,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.38,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                      exit: (dir: number) => ({
                        x: dir < 0 ? 60 : -60,
                        opacity: 0,
                        scale: 0.96,
                        transition: {
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -60 || offset.x < -45) {
                        paginate(1);
                      } else if (swipe > 60 || offset.x > 45) {
                        paginate(-1);
                      }
                    }}
                    className="flex flex-col items-center text-center cursor-grab active:cursor-grabbing select-none"
                  >
                    {/* Arch image */}
                    <div className="relative h-[250px] w-[190px] xs:h-[265px] xs:w-[200px] transition-transform duration-300">
                      <div className="absolute inset-0 rounded-t-[110px] rounded-b-[4px] border border-[#C5934D]/60 bg-[#f4e9d9] p-[7px] shadow-[0_15px_35px_rgba(75,52,30,0.1)]">
                        <div className="relative h-full w-full overflow-hidden rounded-t-[100px] rounded-b-[2px]">
                          <img
                            src={journeyImages[activeCard].src}
                            alt={journeyImages[activeCard].alt}
                            className="h-full w-full object-cover"
                            draggable={false}
                          />
                          <div className="absolute inset-0 bg-[#8b4d32]/10 mix-blend-multiply" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#363637]/20 via-transparent to-[#FDFBF7]/10" />
                        </div>
                      </div>

                      {/* Top star ornament */}
                      <div className="absolute -top-[18px] left-1/2 z-20 -translate-x-1/2">
                        <div className="relative flex h-[30px] w-[30px] items-center justify-center">
                          <span className="absolute h-[24px] w-[1px] rotate-45 bg-[#C5934D]" />
                          <span className="absolute h-[24px] w-[1px] -rotate-45 bg-[#C5934D]" />
                          <span className="relative text-[13px] text-[#87533E]">✦</span>
                        </div>
                      </div>

                      {/* Number badge */}
                      <div className="absolute -bottom-[26px] left-1/2 z-30 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full border border-[#C5934D] bg-[#FDFBF7] shadow-[0_8px_20px_rgba(71,49,25,0.12)]">
                        <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#C5934D]/40">
                          <span className="font-serif text-[22px] font-semibold text-[#87533E]">
                            {String(activeCard + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative divider */}
                    <div className="mt-[46px] flex items-center justify-center gap-3">
                      <span className="h-px w-[30px] bg-[#C5934D]/45" />
                      <span className="h-[5px] w-[5px] rotate-45 bg-[#87533E]" />
                      <span className="h-px w-[30px] bg-[#C5934D]/45" />
                    </div>

                    {/* Step label */}
                    <p className="mt-3.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a98243]">
                      Step {String(activeCard + 1).padStart(2, '0')}
                    </p>

                    {/* Step title */}
                    <h3 className="mt-1.5 max-w-[280px] font-serif text-[22px] xs:text-[24px] font-normal leading-[1.18] tracking-[-0.015em] text-[#363637]">
                      {journeySteps[activeCard].step}
                    </h3>

                    {/* Description */}
                    <p className="mx-auto mt-2.5 max-w-[260px] text-[13px] leading-[1.7] text-[#705d4e]">
                      {journeySteps[activeCard].text}
                    </p>

                    {/* Small gold line */}
                    <div className="mt-4 flex flex-col items-center">
                      <span className="h-[20px] w-px bg-[#C5934D]/45" />
                      <span className="h-[4px] w-[4px] rounded-full bg-[#87533E]" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls: Previous, Indicators, Next */}
              <div className="mt-4 flex items-center justify-between px-3">
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={() => paginate(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5934D]/50 bg-[#FDFBF7] text-[#87533E] shadow-sm transition-all duration-200 active:scale-95 hover:border-[#87533E] hover:bg-[#87533E] hover:text-[#FDFBF7] focus:outline-none"
                  aria-label="Previous journey step"
                >
                  <ChevronLeft size={18} strokeWidth={2} />
                </button>

                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5">
                  {journeySteps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goToStep(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                        activeCard === i
                          ? 'w-6 bg-[#87533E]'
                          : 'w-1.5 bg-[#C5934D]/40 hover:bg-[#C5934D]/70'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => paginate(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C5934D]/50 bg-[#FDFBF7] text-[#87533E] shadow-sm transition-all duration-200 active:scale-95 hover:border-[#87533E] hover:bg-[#87533E] hover:text-[#FDFBF7] focus:outline-none"
                  aria-label="Next journey step"
                >
                  <ChevronRight size={18} strokeWidth={2} />
                </button>
              </div>

              {/* Swipe instruction hint */}
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.18em] text-[#87533E]/50">
                Swipe or tap to explore steps
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM CELESTIAL ORNAMENT
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 md:mt-[75px] flex items-center justify-center"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="h-px w-[35px] sm:w-[65px] bg-[#C5934D]/45" />
            <span className="text-[12px] sm:text-[13px] tracking-[0.15em] text-[#87533E] select-none">
              ☾ · ✦ · ◐ · ✦ · ☽
            </span>
            <span className="h-px w-[35px] sm:w-[65px] bg-[#C5934D]/45" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}