import { Sparkles, CircleDashed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroCards } from './HeroCards';

export function Hero() {
  return (
    <section
      className="
        relative
        min-h-[720px]
        overflow-hidden
        bg-gradient-to-br from-ivory to-cream
        px-[clamp(24px,6vw,80px)]
        py-[100px]
        flex
        items-center
        max-md:min-h-[900px]
        max-md:py-[130px]
        max-md:items-start
      "
    >
      {/* Background Subtle Wheel Element */}
      <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border-[1px] border-[#E8E2D9] pointer-events-none flex items-center justify-center opacity-40">
        <div className="w-[85%] h-[85%] rounded-full border-[1px] border-dashed border-[#E8E2D9] flex items-center justify-center">
          <div className="w-[70%] h-[70%] rounded-full border-[1px] border-[#E8E2D9]" />
        </div>
      </div>

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1240px]
          mx-auto
          grid
          grid-cols-[1fr_1fr]
          items-center
          gap-10
          max-md:grid-cols-1
        "
      >
        {/* =======================================================
            LEFT CONTENT
            ======================================================= */}
        <div className="relative z-20 max-w-[600px] pt-10">
          {/* Small pill */}
          <div
            className="
              inline-flex
              items-center
              gap-[8px]
              px-[14px]
              py-[6px]
              rounded-full
              bg-cream/50
              border
              border-gold/30
              text-brown
              text-[11px]
              font-medium
              tracking-wide
              mb-[28px]
            "
          >
            <Sparkles size={13} className="text-gold" />
            Personalized Numerology Experience
          </div>

          {/* Main heading */}
          <h1
            className="
              font-sans
              font-normal
              text-dark
              tracking-[-0.03em]
              leading-[1.08]
              text-[clamp(46px,4.5vw,64px)]
              max-w-[580px]
            "
          >
            Guided by numbers, empowered by inner insight
          </h1>

          {/* Description */}
          <p
            className="
              mt-[24px]
              max-w-[480px]
              text-brown/80
              text-[16px]
              leading-[1.6]
            "
          >
            At The Golden Numeralist, connect with a gifted numerologist and receive intuitive guidance illuminated by your unique patterns.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-[16px] mt-[40px] flex-wrap">
            <Link
              to="/sessions"
              className="
                h-[50px]
                px-[30px]
                rounded-full
                bg-[#a88143]
                text-ivory
                text-[14px]
                font-medium
                shadow-lg shadow-dark/25
                transition-all
                hover:-translate-y-[2px]
                hover:shadow-xl hover:shadow-dark/35
                flex
                items-center
                justify-center
              "
            >
              Book a Session
            </Link>

            <Link
              to="/about"
              className="
                h-[50px]
                px-[30px]
                rounded-full
                bg-transparent
                border
                border-brown/30
                text-dark
                text-[14px]
                font-medium
                transition-colors
                hover:bg-cream
                flex
                items-center
                justify-center
              "
            >
              Explore Sessions
            </Link>
          </div>
        </div>

        {/* =======================================================
            RIGHT VISUAL (CARDS)
            ======================================================= */}
        <HeroCards />
      </div>
    </section>
  );
}