import { Link } from 'react-router-dom';
import { HeroCards } from './HeroCards';
import { GOOGLE_FORM_URL } from '@/components/BookingButton';

export function Hero() {
  return (
    <section
      className="
        relative
        min-h-[calc(100vh-84px)]
        lg:min-h-[720px]
        xl:min-h-[780px]
        overflow-hidden
        bg-[#FDFBF7]
        px-4
        sm:px-6
        md:px-10
        lg:px-12
        xl:px-16
        2xl:px-20
        pt-[92px]
        sm:pt-[100px]
        md:pt-[110px]
        lg:pt-[96px]
        pb-12
        sm:pb-16
        md:pb-20
        lg:pb-16
        flex
        items-center
      "
    >
      {/* =======================================================
          BACKGROUND SUBTLE SACRED GEOMETRY
          ======================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-25%]
          sm:right-[-15%]
          lg:right-[-8%]
          xl:right-[-4%]
          top-1/2
          -translate-y-1/2
          w-[520px]
          sm:w-[680px]
          lg:w-[800px]
          xl:w-[860px]
          h-[520px]
          sm:h-[680px]
          lg:h-[800px]
          xl:h-[860px]
          rounded-full
          border
          border-[#C5934D]/15
          flex
          items-center
          justify-center
          opacity-50
        "
      >
        <div className="w-[84%] h-[84%] rounded-full border border-dashed border-[#C5934D]/15 flex items-center justify-center">
          <div className="w-[72%] h-[72%] rounded-full border border-[#C5934D]/10" />
        </div>
      </div>

      {/* =======================================================
          MAIN CONTAINER
          ======================================================= */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1400px]
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          gap-8
          sm:gap-10
          md:gap-12
          lg:gap-8
          xl:gap-14
        "
      >
        {/* =====================================================
            LEFT CONTENT
            ===================================================== */}
        <div
          className="
            relative
            z-20
            w-full
            max-w-[650px]
            mx-auto
            lg:mx-0
            pt-2
            sm:pt-4
            lg:pt-0
            lg:pl-2
            xl:pl-4
            order-2
            lg:order-1
          "
        >
          {/* =================================================
              BRAND LOCKUP
              ================================================= */}
          <div className="flex flex-col items-start mb-6 sm:mb-7">
            {/* Top ornamental divider */}
            <div
              className="
                flex
                items-center
                gap-3
                w-full
                max-w-[260px]
                sm:max-w-[320px]
                md:max-w-[350px]
                mb-3
                sm:mb-4
              "
            >
              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />

              <div className="flex items-center gap-1.5 text-[#C5934D]">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
                </svg>

                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
                </svg>
              </div>

              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />
            </div>

            {/* Brand */}
            <p
              className="
                font-serif
                text-[#363637]
                text-[13px]
                xs:text-[15px]
                sm:text-[17px]
                md:text-[19px]
                lg:text-[20px]
                tracking-[0.2em]
                sm:tracking-[0.24em]
                uppercase
                font-normal
              "
            >
              THE GOLDEN NUMERALIST
            </p>

            {/* Name */}
            <h1
              className="
                mt-1.5
                sm:mt-2
                font-serif
                font-normal
                text-[46px]
                xs:text-[54px]
                sm:text-[66px]
                md:text-[76px]
                lg:text-[78px]
                xl:text-[86px]
                leading-[0.96]
                tracking-[-0.02em]
                bg-gradient-to-b
                from-[#C5934D]
                via-[#C5934D]
                to-[#C5934D]
                bg-clip-text
                text-transparent
                select-none
                pb-1.5
                sm:pb-2
              "
            >
              Namrattaa Lal
            </h1>

            {/* Bottom ornamental divider */}
            <div
              className="
                flex
                items-center
                gap-3
                w-full
                max-w-[220px]
                sm:max-w-[270px]
                md:max-w-[300px]
                mt-2
                sm:mt-3
              "
            >
              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />

              <div className="text-[#C5934D]">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0 C12 7.5 16.5 12 24 12 C16.5 12 12 16.5 12 24 C12 16.5 7.5 12 0 12 C7.5 12 12 7.5 12 0 Z" />
                </svg>
              </div>

              <div
                className="
                  h-[1px]
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  via-[#CDA66F]/50
                  to-[#C5934D]
                "
              />
            </div>
          </div>

          {/* =================================================
              MAIN HEADLINE
              ================================================= */}
          <h2
            className="
              !font-sans
              font-normal
              text-[#87533E]
              tracking-[-0.03em]
              leading-[1.14]
              sm:leading-[1.1]
              text-[25px]
              xs:text-[29px]
              sm:text-[35px]
              md:text-[40px]
              lg:text-[42px]
              xl:text-[48px]
              max-w-[580px]
            "
          >
            Guided by numbers,{' '}
            <br className="hidden sm:inline" />
            empowered by inner insight.
          </h2>

          {/* =================================================
              DESCRIPTION
              ================================================= */}
          <p
            className="
              !font-sans
              mt-4
              sm:mt-5
              max-w-[515px]
              text-[#363637]
              text-[14px]
              xs:text-[14.5px]
              sm:text-[15.5px]
              md:text-[16px]
              leading-[1.65]
              sm:leading-[1.7]
            "
          >
            Connect with Namrattaa Lal, The Golden Numeralist,
            and receive intuitive guidance illuminated by your
            unique patterns.
          </p>

          {/* =================================================
              BUTTONS
              ================================================= */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-stretch
              sm:items-center
              gap-3.5
              sm:gap-4
              mt-7
              sm:mt-9
              w-full
              sm:w-auto
            "
          >
            {/* Primary CTA */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                h-[48px]
                sm:h-[52px]
                px-7
                sm:px-8
                rounded-full
                bg-[#87533E]
                hover:bg-[#963f24]
                text-[#FDFBF7]
                text-[13.5px]
                sm:text-[14px]
                font-medium
                shadow-[0_8px_22px_rgba(169,79,47,0.22)]
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:shadow-[0_12px_28px_rgba(169,79,47,0.30)]
                flex
                items-center
                justify-center
                gap-2.5
                sm:gap-3
                w-full
                sm:w-auto
                shrink-0
              "
            >
              <span>Book a Session</span>
              <span
                className="
                  text-[16px]
                  sm:text-[17px]
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>

            {/* Secondary CTA */}
            <Link
              to="/sessions"
              className="
                group
                h-[48px]
                sm:h-[52px]
                px-6
                sm:px-7
                rounded-full
                bg-transparent
                border
                border-[#87533E]/35
                hover:border-[#87533E]
                text-[#87533E]
                text-[13.5px]
                sm:text-[14px]
                font-medium
                transition-all
                duration-300
                hover:bg-[#87533E]/5
                flex
                items-center
                justify-center
                gap-2
                w-full
                sm:w-auto
                shrink-0
              "
            >
              <span>Explore Sessions</span>
              <span
                className="
                  text-[15px]
                  sm:text-[16px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            RIGHT VISUAL (CARDS)
            ===================================================== */}
        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            w-full
            min-h-[360px]
            xs:min-h-[390px]
            sm:min-h-[440px]
            md:min-h-[480px]
            lg:min-h-[540px]
            xl:min-h-[580px]
            mt-2
            sm:mt-4
            lg:mt-0
            order-1
            lg:order-2
          "
        >
          <HeroCards />
        </div>
      </div>
    </section>
  );
}