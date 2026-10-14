import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Clock, Calendar, Heart, Eye, CheckCircle2, ChevronRight, Lock, SlidersHorizontal, RefreshCw } from 'lucide-react';
import { LAUNCH_CONFIG } from '@/config/launchConfig';
import { LaunchConfetti } from './LaunchConfetti';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

export function LaunchPopup() {
  // Developer override state for testing ('auto' | 'countdown' | 'live')
  const [testOverride, setTestOverride] = useState<'auto' | 'countdown' | 'live'>('auto');
  const [customTargetTime, setCustomTargetTime] = useState<string | null>(null);
  const [showTestControls, setShowTestControls] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Target launch date/time
  const activeTargetTime = useMemo(() => {
    if (customTargetTime) return new Date(customTargetTime);
    return new Date(LAUNCH_CONFIG.targetLaunchTime);
  }, [customTargetTime]);

  // Calculate remaining time
  const calculateTimeLeft = useCallback((): TimeLeft => {
    if (testOverride === 'live') {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
    }
    if (testOverride === 'countdown') {
      // Simulate 5 minutes remaining
      return { days: 0, hours: 0, minutes: 4, seconds: 59, totalMs: 299000 };
    }

    const difference = activeTargetTime.getTime() - Date.now();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, totalMs: difference };
  }, [activeTargetTime, testOverride]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  // Is website live?
  const isLive = testOverride === 'live' || (testOverride === 'auto' && timeLeft.totalMs <= 0);

  // Has the user unlocked and entered the website after it became live?
  const [hasEntered, setHasEntered] = useState<boolean>(() => {
    // If not live yet, user CANNOT have entered
    const entered = sessionStorage.getItem('website_launched_entered') === 'true';
    const difference = new Date(LAUNCH_CONFIG.targetLaunchTime).getTime() - Date.now();
    if (difference > 0) return false;
    return entered;
  });

  // Re-open modal state (when site is live and user wants to view card again)
  const [reopenModal, setReopenModal] = useState(false);

  // Lock body scroll when launch gate is active
  const isGateActive = !hasEntered;
  useEffect(() => {
    if (isGateActive || reopenModal || isImageZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isGateActive, reopenModal, isImageZoomed]);

  // Flower shower trigger state & key for clean 25-second cycle
  const [showFlowers, setShowFlowers] = useState(false);
  const [flowerKey, setFlowerKey] = useState(0);
  const FLOWER_DURATION_MS = 25000; // 25 seconds

  const triggerFlowers = useCallback(() => {
    setShowFlowers(true);
    setFlowerKey((prev) => prev + 1);
  }, []);

  const handleShowerComplete = useCallback(() => {
    setShowFlowers(false);
  }, []);

  // Track if countdown to 0 was already triggered
  const hasTriggeredOnZeroRef = useRef(false);

  // Real-time countdown clock (ticks every 1s)
  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      // EXACT MOMENT COUNTDOWN HITS ZERO: trigger flowers for 25 seconds!
      if (updated.totalMs <= 0) {
        if (!hasTriggeredOnZeroRef.current) {
          hasTriggeredOnZeroRef.current = true;
          triggerFlowers();
        }
      } else {
        // Reset flag if time is set into the future
        hasTriggeredOnZeroRef.current = false;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, triggerFlowers]);

  // Initial trigger if the user opens the page and site is ALREADY live on first visit
  useEffect(() => {
    if (isLive && !hasEntered && !hasTriggeredOnZeroRef.current) {
      hasTriggeredOnZeroRef.current = true;
      triggerFlowers();
    }
  }, [isLive, hasEntered, triggerFlowers]);

  // Action: Enter website (only allowed when isLive is true)
  const handleEnterWebsite = () => {
    if (!isLive) return;
    setHasEntered(true);
    setReopenModal(false);
    sessionStorage.setItem('website_launched_entered', 'true');

    // Trigger flower shower across the website for 25 seconds
    triggerFlowers();
  };

  // Helper for quick testing buttons
  const setTestInMinutes = (mins: number) => {
    const target = new Date(Date.now() + mins * 60 * 1000);
    setCustomTargetTime(target.toISOString());
    setTestOverride('auto');
    hasTriggeredOnZeroRef.current = false;
    setShowFlowers(false);
    setHasEntered(false);
  };

  const resetToConfig = () => {
    setCustomTargetTime(null);
    setTestOverride('auto');
    hasTriggeredOnZeroRef.current = false;
    setShowFlowers(false);
    setHasEntered(false);
  };

  const formattedTargetTime = useMemo(() => {
    return activeTargetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, [activeTargetTime]);

  return (
    <>
      {/* Divine Radiant Golden Beams glowing at top of screen */}
      <div
        className="fixed top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#F4D068]/25 via-[#C5934D]/10 to-transparent pointer-events-none z-[99999] blur-2xl animate-pulse"
        style={{ animationDuration: '3.5s' }}
      />

      {/* Floating Re-open Button (Visible ONLY when the website is live & user has entered) */}
      <AnimatePresence>
        {hasEntered && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[9999]"
          >
            <button
              onClick={() => {
                setReopenModal(true);
                triggerFlowers();
              }}
              aria-label="View Launch Invitation Card"
              className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#1A1612] via-[#2A221B] to-[#1A1612] text-[#F4D068] border border-[#C5934D]/50 shadow-[0_8px_30px_rgba(197,147,77,0.35)] hover:shadow-[0_12px_40px_rgba(197,147,77,0.55)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>

              <span className="font-serif text-lg tracking-wide text-[#FDFBF7] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#F4D068] animate-pulse" />
                Launch Invitation
              </span>

              <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#C5934D]/20 border border-[#C5934D]/40 text-[#ECC880]">
                LIVE
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN LAUNCH GATE (Completely blocks website if not entered) OR Reopened Modal */}
      <AnimatePresence>
        {(isGateActive || reopenModal) && (
          <div className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto bg-[#0C0A08]/90 backdrop-blur-xl">
            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-gradient-to-b from-[#FDFBF7] via-[#FAF6ED] to-[#F5EFE3] text-[#363637] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_80px_rgba(197,147,77,0.4)] border-2 border-[#C5934D]/70 my-auto z-10"
            >
              {/* Ornate Gold Filigree Corners */}
              <div className="pointer-events-none absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#C5934D] rounded-tl-3xl opacity-80" />
              <div className="pointer-events-none absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#C5934D] rounded-tr-3xl opacity-80" />
              <div className="pointer-events-none absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#C5934D] rounded-bl-3xl opacity-80" />
              <div className="pointer-events-none absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-[#C5934D] rounded-br-3xl opacity-80" />

              {/* Close Button: ONLY rendered if the site is already LIVE or opened via re-open button */}
              {(isLive && hasEntered && reopenModal) && (
                <button
                  onClick={() => setReopenModal(false)}
                  aria-label="Close Launch Popup"
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#1A1612]/80 text-[#ECC880] hover:text-white hover:bg-[#1A1612] transition-colors border border-[#C5934D]/40 backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Top Banner Ribbon */}
              <div className="relative py-3.5 px-6 text-center bg-gradient-to-r from-[#1A1612] via-[#36271A] to-[#1A1612] text-[#FDFBF7] border-b border-[#C5934D]/40">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-[#ECC880] font-medium">
                  <Sparkles className="w-4 h-4 text-[#F4D068] animate-spin" style={{ animationDuration: '8s' }} />
                  <span>
                    {isLive ? '✨ Website Is Officially Live! ✨' : '🕉️ Auspicious Launch Announcement 🕉️'}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#F4D068] animate-spin" style={{ animationDuration: '8s' }} />
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-5 sm:p-7 md:p-9 grid grid-cols-1 md:grid-cols-12 gap-7 items-center">

                {/* Left Column: Official Invitation Card Image */}
                <div className="md:col-span-5 flex flex-col items-center">
                  <div
                    onClick={() => setIsImageZoomed(true)}
                    className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-[0_12px_35px_rgba(197,147,77,0.35)] border-2 border-[#C5934D] transition-transform duration-300 hover:scale-[1.02] bg-[#FAF6ED]"
                  >
                    <img
                      src={LAUNCH_CONFIG.cardImage}
                      alt="Auspicious Launch Card - The Golden Numeralist"
                      className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-none h-auto object-contain block"
                    />

                    {/* Hover overlay hint */}
                    <div className="absolute inset-0 bg-[#0C0A08]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 backdrop-blur-[2px]">
                      <Eye className="w-8 h-8 text-[#F4D068]" />
                      <span className="text-xs uppercase tracking-wider font-semibold bg-[#1A1612]/80 px-3 py-1 rounded-full border border-[#C5934D]/60">
                        Click to Enlarge
                      </span>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs text-[#87533E] font-medium flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-[#C5934D] fill-[#C5934D]" />
                    <span>In Loving Memory of Mother</span>
                  </p>
                </div>

                {/* Right Column: Auspicious Details & Locked Countdown / Live Unlock */}
                <div className="md:col-span-7 flex flex-col text-center md:text-left">

                  {/* Om & Sacred Intro */}
                  <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
                    <span className="text-3xl text-[#C5934D] font-serif font-bold drop-shadow-sm select-none">
                      ॐ
                    </span>
                    <span className="h-px w-10 bg-gradient-to-r from-[#C5934D] to-transparent" />
                    <span className="text-xs uppercase tracking-widest text-[#87533E] font-semibold">
                      {LAUNCH_CONFIG.founderName} Presents
                    </span>
                  </div>

                  {/* Main Headings */}
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1612] font-semibold leading-tight">
                    {LAUNCH_CONFIG.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#87533E] font-medium tracking-wide mt-1">
                    {LAUNCH_CONFIG.heading}
                  </p>

                  {/* Auspicious Day Badge */}
                  <div className="my-4 p-3.5 rounded-xl bg-[#FAF0E1] border border-[#C5934D]/35 shadow-sm">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-1 gap-x-3 text-xs sm:text-sm text-[#36271A]">
                      <span className="flex items-center gap-1.5 font-semibold text-[#87533E]">
                        <Calendar className="w-4 h-4 text-[#C5934D]" />
                        {LAUNCH_CONFIG.tithi}
                      </span>
                      <span className="hidden sm:inline text-[#C5934D]">•</span>
                      <span className="font-medium text-[#5A4A3E]">
                        {LAUNCH_CONFIG.auspiciousDate}
                      </span>
                    </div>

                    {/* Auspicious Muhurat Times from Card */}
                    <div className="mt-2.5 pt-2.5 border-t border-[#C5934D]/20 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-[#363637]">
                      <span className="flex items-center gap-1 font-semibold text-[#1A1612]">
                        <Clock className="w-3.5 h-3.5 text-[#C5934D]" />
                        Dubai Time: <span className="text-[#87533E]">{LAUNCH_CONFIG.dubaiTime}</span>
                      </span>
                      <span className="text-[#C5934D]">|</span>
                      <span className="flex items-center gap-1 font-semibold text-[#1A1612]">
                        <Clock className="w-3.5 h-3.5 text-[#C5934D]" />
                        India Time: <span className="text-[#87533E]">{LAUNCH_CONFIG.indiaTime}</span>
                      </span>
                    </div>
                  </div>

                  {/* DYNAMIC SECTION: BEFORE LAUNCH (LOCKED COUNTDOWN) vs AFTER LAUNCH (UNLOCKED) */}
                  {isLive ? (
                    /* ====== AFTER LAUNCH (SITE IS LIVE) ====== */
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#1A1612] via-[#2A1F16] to-[#1A1612] text-[#FDFBF7] border-2 border-[#C5934D] shadow-[0_8px_30px_rgba(197,147,77,0.35)] text-center my-2"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5934D]/25 border border-[#F4D068]/50 text-[#F4D068] text-xs font-semibold uppercase tracking-wider mb-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Website is Officially Live!
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#ECC880] mb-1">
                        ✨ Auspicious Launch Celebrations ✨
                      </h3>
                      <p className="text-xs sm:text-sm text-[#FEFCF8]/90 max-w-md mx-auto mb-4">
                        Welcome to a sacred sanctuary of numbers, alignment, and transformative wisdom.
                      </p>

                      {/* ENTER WEBSITE CTA BUTTON */}
                      <button
                        onClick={handleEnterWebsite}
                        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium tracking-wide text-[#1A1612] bg-gradient-to-r from-[#F4D068] via-[#C5934D] to-[#ECC880] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_6px_25px_rgba(197,147,77,0.5)] font-serif text-lg font-bold"
                      >
                        <Sparkles className="w-5 h-5 text-[#1A1612]" />
                        <span>Enter Website & Begin Journey</span>
                        <ChevronRight className="w-5 h-5 text-[#1A1612]" />
                      </button>
                    </motion.div>
                  ) : (
                    /* ====== BEFORE LAUNCH (LOCKED COUNTDOWN - NO ENTER BUTTON) ====== */
                    <div className="my-2 p-4 rounded-2xl bg-[#FAF0E1]/80 border-2 border-[#C5934D]/50 shadow-inner">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs uppercase tracking-widest font-semibold text-[#87533E] flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[#C5934D] animate-spin" style={{ animationDuration: '6s' }} />
                          Website Launches In
                        </span>
                        <span className="text-xs font-semibold text-[#1A1612] bg-white/80 px-2.5 py-1 rounded-full border border-[#C5934D]/30 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-[#C5934D]" />
                          Launch Time: {formattedTargetTime}
                        </span>
                      </div>

                      {/* 4-Box Countdown Timer Grid */}
                      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                        {[
                          { label: 'Days', value: timeLeft.days },
                          { label: 'Hours', value: timeLeft.hours },
                          { label: 'Mins', value: timeLeft.minutes },
                          { label: 'Secs', value: timeLeft.seconds },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-b from-[#1A1612] to-[#2B2117] rounded-xl p-2.5 sm:p-3 border border-[#C5934D]/70 shadow-md flex flex-col items-center justify-center"
                          >
                            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#F4D068] tracking-tight">
                              {String(item.value).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FDFBF7]/70 font-sans mt-0.5">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Explicit Locking Notice */}
                      <div className="mt-3 text-center text-xs font-medium text-[#87533E] flex items-center justify-center gap-1.5 bg-[#FAF6ED] py-2 px-3 rounded-lg border border-[#C5934D]/25">
                        <Lock className="w-3.5 h-3.5 text-[#C5934D]" />
                        <span>The website will automatically unlock when the countdown reaches zero.</span>
                      </div>
                    </div>
                  )}

                  {/* Sacred Motto */}
                  <div className="mt-3 text-center md:text-left text-xs italic text-[#87533E] font-serif">
                    &ldquo;{LAUNCH_CONFIG.tagline}&rdquo;
                  </div>

                  {/* Mother's Dedication Footnote */}
                  <div className="mt-4 pt-3 border-t border-[#C5934D]/25 flex items-center justify-center md:justify-start gap-1.5 text-xs text-[#87533E]">
                    <span className="text-[#C5934D]">✨</span>
                    <span>{LAUNCH_CONFIG.dedication}</span>
                  </div>
                </div>
              </div>

              {/* Developer / Testing Toolbar */}
              <div className="bg-[#FAF0E1] border-t border-[#C5934D]/30 px-5 py-2.5 rounded-b-3xl text-xs text-[#5A4A3E]">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setShowTestControls(!showTestControls)}
                    className="flex items-center gap-1.5 font-medium text-[#87533E] hover:text-[#1A1612] transition-colors"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5934D]" />
                    <span>Developer Test Controls {showTestControls ? '▲' : '▼'}</span>
                  </button>

                  <span className="text-[11px] text-[#87533E]/90">
                    Config Launch Time: {formattedTargetTime} ({activeTargetTime.toLocaleDateString()})
                  </span>
                </div>

                {showTestControls && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-2.5 border-t border-[#C5934D]/20 flex flex-wrap items-center gap-2"
                  >
                    <span className="font-semibold text-[#1A1612] mr-1">Test Modes:</span>

                    <button
                      onClick={() => {
                        setTestOverride('countdown');
                        setHasEntered(false);
                      }}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${testOverride === 'countdown'
                        ? 'bg-[#87533E] text-white'
                        : 'bg-white/80 text-[#87533E] hover:bg-white border border-[#C5934D]/40'
                        }`}
                    >
                      Simulate Locked Countdown
                    </button>

                    <button
                      onClick={() => {
                        setTestOverride('live');
                        triggerFlowers();
                      }}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${testOverride === 'live'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white/80 text-emerald-700 hover:bg-white border border-emerald-400'
                        }`}
                    >
                      Simulate Live (Unlock)
                    </button>

                    <button
                      onClick={() => setTestInMinutes(1)}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/80 text-[#87533E] hover:bg-white border border-[#C5934D]/40"
                    >
                      Countdown (+1 Min)
                    </button>

                    <button
                      onClick={() => {
                        // 1:19 PM IST
                        setCustomTargetTime('2026-10-15T13:19:00+05:30');
                        setTestOverride('auto');
                        setHasEntered(false);
                      }}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/80 text-[#87533E] hover:bg-white border border-[#C5934D]/40"
                    >
                      Actual Muhurat (1:19 PM IST)
                    </button>

                    <button
                      onClick={resetToConfig}
                      className="ml-auto px-2 py-1 rounded-md text-[11px] font-medium bg-[#1A1612] text-[#ECC880] hover:bg-black flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Reset to launchConfig.ts
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Zoom for Invitation Card */}
      <AnimatePresence>
        {isImageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageZoomed(false)}
            className="fixed inset-0 z-[200000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setIsImageZoomed(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              src={LAUNCH_CONFIG.cardImage}
              alt="The Golden Numeralist Official Launch Invitation Card"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border-2 border-[#C5934D]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auspicious Flower Petals Shower (Rendered on topmost layer z-[9999999] for exactly 25s) */}
      {showFlowers && (
        <LaunchConfetti
          key={flowerKey}
          active={showFlowers}
          duration={FLOWER_DURATION_MS}
          density="rich"
          onComplete={handleShowerComplete}
        />
      )}
    </>
  );
}
