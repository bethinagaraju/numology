import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { PageIntro } from '@/components/PageIntro';
import { BookingButton } from '@/components/BookingButton';

// Animation variants for smooth luxury staggered entrance
const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -14, y: 4 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

// ============================================================================
// EDIT SESSION PACKAGES CONTENT DIRECTLY HERE
// You can easily modify titles, prices, descriptions, and included items below.
// ============================================================================

export interface SessionPackage {
  slug: string;
  title: string;
  price?: string;
  text: string;
  focus?: string;
  items: string[];
}

export const sessionPackages: Record<string, SessionPackage> = {
  'basic-package': {
    slug: 'basic-package',
    title: 'Basic Package',

    text: 'A focused beginning for exploring your core numerology foundations.',
    focus: 'Core Foundations',
    items: [
      // 'Personality Number',
      // 'Destiny Number',
      // 'Strengths and weaknesses',
      // 'Latent talents',
      // 'Basic Remedies'
      'Personality Number',
      'Destiny Number',
      'Strengths and weaknesses',
      'Latent talents',
      'Basic Remedies'

    ],
  },
  'detailed-package': {
    slug: 'detailed-package',
    title: 'Detailed Package',

    text: 'A deeper conversation across the essential pillars of your personal map.',
    focus: 'Essential Life Pillars',
    items: [
      'Personality Number',
      'Destiny Number',
      'Strengths and weaknesses',
      'Latent talents',
      'Basic Remedies',
      'Career & Financial Outlook',
      'Know your Yogas in numerology',
      'Key Health Concerns',
      'Advanced Remedies',
    ],
  },
  'comprehensive-package': {
    slug: 'comprehensive-package',
    title: 'Comprehensive Package',

    text: 'A complete alignment session for a fuller, more considered perspective.',
    focus: 'Complete Personal Alignment',
    items: [
      'Personality Number',
      'Destiny Number',
      'Strengths and weaknesses',
      'Latent talents',
      'Basic Remedies',
      'Career & Financial Outlook',
      'Know your Yogas in numerology',
      'Key Health Concerns',
      'Advanced Remedies',
      'Complete Name Spelling Analysis & Correction',
      'Mobile & Vehicle Number Compatibility',
      'Upcoming personal year calculation'
    ],
  },
};

export function SessionDetail() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const location = useLocation();

  // Support /sessions/:slug, /:slug, and direct slug lookups
  const pathParts = location.pathname.split('/').filter(Boolean);
  const pathSlug = pathParts[pathParts.length - 1];
  const slug = paramSlug || pathSlug || 'detailed-package';

  const pkg = sessionPackages[slug] || sessionPackages['detailed-package'];

  return (
    <>
      <PageIntro eyebrow="Session Detail" title={pkg.title} text={pkg.text} />
      <section className="pb-[140px] max-w-[800px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="mb-[60px]">
          <Link
            to="/sessions"
            className="text-bronze uppercase text-[10px] font-semibold tracking-[0.12em] inline-flex items-center gap-[8px] hover:text-[#363637] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Sessions
          </Link>
        </div>

        <div className="border border-gold p-[40px] md:p-[60px] bg-[#FEFCF8]">
          <h2 className="font-serif text-[32px] mb-[20px] text-[#363637]">What is included</h2>
          <motion.ul
            key={slug}
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
            className="mb-[40px] space-y-[15px]"
          >
            {pkg.items.map((item, i) => (
              <motion.li
                key={i}
                variants={listItemVariants}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group flex items-center gap-[15px] text-[#363637] text-[15px] leading-[1.6] cursor-default transition-colors hover:text-[#2B211B]"
              >
                <span className="text-bronze shrink-0 leading-none transition-transform duration-300 group-hover:scale-125 group-hover:rotate-45 group-hover:text-[#A98243]">
                  ✦
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <div className="pt-[40px] border-t border-muted-gold flex items-center justify-end">
            <BookingButton label="Book this session" />
          </div>
        </div>
      </section>
    </>
  );
}
