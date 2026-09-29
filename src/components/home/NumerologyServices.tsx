import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  BriefcaseBusiness,
  Heart,
  Grid3X3,
  WandSparkles,
  ScrollText,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Personal Numerology",
    description:
      "Understand your core numbers, personality, destiny and the patterns that shape your personal journey.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Career & Business Numerology",
    description:
      "Explore numerology insights related to career direction, professional strengths and business suitability.",
    icon: BriefcaseBusiness,
  },
  {
    number: "03",
    title: "Name Numerology",
    description:
      "Analyze the numerical vibration of your name and explore possible name adjustments.",
    icon: WandSparkles,
  },
  {
    number: "04",
    title: "Lo Shu Grid Analysis",
    description:
      "Understand the numbers present and missing in your Lo Shu Grid and the patterns they represent.",
    icon: Grid3X3,
  },
  {
    number: "05",
    title: "Remedies & Guidance",
    description:
      "Receive personalized suggestions based on your numerology analysis and missing numbers.",
    icon: Heart,
  },
  {
    number: "06",
    title: "Comprehensive Numerology Report",
    description:
      "A detailed personalized report bringing together your core numbers, combinations, career and business insights, Lo Shu Grid, name analysis, remedies and final guidance.",
    icon: ScrollText,
  },
];

export default function NumerologyServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8F3E8] py-24 md:py-32"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full border border-[#C5A267]/20" />
        <div className="absolute right-[-150px] bottom-10 h-96 w-96 rounded-full border border-[#C5A267]/20" />

        <div className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-[#C5A267]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#C5A267]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#A98243]">
              Numerology Consultations
            </span>

            <span className="h-px w-12 bg-[#C5A267]" />
          </div>

          {/* Main heading */}
          <h2 className="font-serif text-5xl font-normal leading-[0.98] tracking-[-0.035em] text-[#2B211B] sm:text-6xl md:text-7xl">
            Understand the numbers
            <br />
            <span className="italic text-[#A98243]">
              behind your life's patterns.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-[#5B4A3D] md:text-base">
            Discover a deeper perspective through personalized numerology
            consultations designed to help you understand your numbers,
            patterns and possibilities.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative flex h-full min-h-[380px] flex-col overflow-hidden border border-[#C5A267]/45 bg-[#FBF7ED] p-7 transition-all duration-500 group-hover:border-[#A98243]/80 group-hover:shadow-[0_18px_50px_rgba(76,54,30,0.10)] md:p-8">
                  {/* Top line */}
                  <div className="absolute left-0 top-0 h-px w-0 bg-[#A98243] transition-all duration-700 group-hover:w-full" />

                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-5xl font-normal text-[#C5A267]/45 transition-colors duration-500 group-hover:text-[#A98243]/70">
                      {service.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C5A267]/50 text-[#A98243] transition-all duration-500 group-hover:border-[#A98243] group-hover:bg-[#A98243] group-hover:text-[#F8F3E8]">
                      <Icon size={18} strokeWidth={1.4} />
                    </div>
                  </div>

                  {/* Decorative divider */}
                  <div className="my-8 flex items-center gap-3">
                    <span className="h-px flex-1 bg-[#C5A267]/40" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#C5A267]" />
                    <span className="h-px w-8 bg-[#C5A267]/40" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif text-3xl leading-tight text-[#2B211B]">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-[14px] leading-6 text-[#655448]">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-auto pt-10">
                    <button className="group/link inline-flex items-center gap-3 border-b border-[#C5A267] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A2A20] transition-colors hover:text-[#A98243]">
                      Explore

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </button>
                  </div>

                  {/* Bottom decorative corner */}
                  <div className="absolute bottom-0 right-0 h-20 w-20 border-l border-t border-[#C5A267]/20" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 font-serif text-lg italic text-[#655448]">
            Your numbers tell a story. Let's understand yours.
          </p>

          <a
            href="#booking"
            className="group inline-flex items-center gap-3 bg-[#A98243] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F8F3E8] transition-all duration-300 hover:bg-[#A98243]/90"
          >
            Book a Consultation

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}