export interface PageSEO {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noindex?: boolean;
  breadcrumbs?: Array<{ name: string; path: string }>;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const BASE_URL = 'https://namrattalal.com';
export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export const staticPageSEO: Record<string, PageSEO> = {
  '/': {
    title: 'Namratta Lal - The Golden Numeralist | Online Numerology Readings Worldwide',
    description: 'Online numerology readings worldwide with Namratta Lal (The Golden Numeralist). Discover your Life Path, Lo Shu Grid, and name vibrations for personal clarity.',
    canonicalPath: '/',
    keywords: [
      'Namratta Lal',
      'The Golden Numeralist',
      'Online Numerology Readings Worldwide',
      'Online numerology reading',
      'Numerologist in India',
      'Numerologist in UAE',
      'Numerology consultation',
      'Personal numerology reading',
      'Name numerology analysis',
      'Numerology expert',
      'Lo Shu Grid numerology consultation'
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' }
    ],
  },
  '/about': {
    title: 'About Namrattaa Lal | Master Numerologist — The Golden Numeralist',
    description: 'Learn about Namrattaa Lal, founder of The Golden Numeralist. Explore a grounded, human approach to numerology, Lo Shu Grid analysis, and conscious personal guidance.',
    canonicalPath: '/about',
    keywords: [
      'About Namrattaa Lal',
      'Master Numerologist',
      'Numerology expert India',
      'Numerologist UAE',
      'The Golden Numeralist founder',
      'Numerology philosophy'
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ],
  },
  '/sessions': {
    title: 'Personal Numerology Consultations & Packages | The Golden Numeralist',
    description: 'Book 1-on-1 private numerology consultations with Namrattaa Lal. Choose from Basic, Detailed, and Comprehensive packages for career, relationships, and life alignment.',
    canonicalPath: '/sessions',
    keywords: [
      'Numerology consultation packages',
      'Online numerology reading',
      'Career numerology session',
      'Personal numerology packages',
      'Lo Shu Grid consultation',
      'Namrattaa Lal sessions'
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Sessions', path: '/sessions' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Numerology Consultation Packages',
      'description': 'Consultation tiers offered by Namrattaa Lal at The Golden Numeralist.',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'Service',
            'name': 'Basic Package',
            'url': `${BASE_URL}/sessions/basic-package`,
            'description': 'Core foundations: Personality Number, Destiny Number, latent talents, and basic remedies.',
            'offers': {
              '@type': 'Offer',
              'price': '150',
              'priceCurrency': 'AED'
            }
          }
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'Service',
            'name': 'Detailed Package',
            'url': `${BASE_URL}/sessions/detailed-package`,
            'description': 'Essential life pillars: Career & Financial outlook, Lo Shu Grid yogas, key health tendencies, and advanced remedies.',
            'offers': {
              '@type': 'Offer',
              'price': '300',
              'priceCurrency': 'AED'
            }
          }
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'Service',
            'name': 'Comprehensive Package',
            'url': `${BASE_URL}/sessions/comprehensive-package`,
            'description': 'Complete personal alignment: Full name spelling analysis & correction, mobile & vehicle compatibility, and personal year forecast.',
            'offers': {
              '@type': 'Offer',
              'price': '500',
              'priceCurrency': 'AED'
            }
          }
        }
      ]
    }
  },
  '/numerology-tools': {
    title: 'Numerology Tools, Calculators & Archive | The Golden Numeralist',
    description: 'Free numerology calculators and comprehensive knowledge archive. Calculate your Personality, Destiny, Kua/Aura, Name, and Personal Year numbers in Lo Shu Numerology.',
    canonicalPath: '/numerology-tools',
    keywords: [
      'Numerology calculators',
      'Personality number calculator',
      'Destiny number calculator',
      'Lo Shu Grid calculator',
      'Kua number calculator',
      'Name numerology calculator',
      'Personal year numerology',
      'Lo Shu numerology guide'
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Numerology Tools', path: '/numerology-tools' }
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is The Golden Numeralist and how is it different from fortune-telling?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The Golden Numeralist is a personal numerology practice founded by Namrattaa Lal. Rather than deterministic fortune-telling, we approach numerology as a grounded, reflective language for personal clarity and self-awareness, conversation over prediction, and curiosity over certainty.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does a personal consultation work from start to finish?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Consultations are conducted online via 1-on-1 private video calls. Prior to your session, you complete a confidential client assessment form. Namrattaa prepares your comprehensive Lo Shu Grid and number synthesis in advance.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is the difference between my Personality (Driver) and Destiny (Conductor) numbers?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Your Personality Number (Driver or Mulank) is derived from your day of birth and governs your conscious identity and outer vibration. Your Destiny Number (Conductor or Bhagyank) is the sum of your full birth date and represents your life purpose and karmic trajectory.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does Name Numerology work, and can spelling corrections help?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Each letter in your name carries a numerical vibration. If your name compound conflicts with your birth numbers, subtle spelling adjustments can harmoniously balance missing elements, supporting smoother career recognition and confidence.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What kind of remedies and guidance are recommended?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'All remedies provided are practical and non-superstitious. Recommendations involve elemental balance (wood, metal, water, earth, fire), favorable compass directions via your Kua number, lifestyle alignments, and customized name vibrations.'
          }
        }
      ]
    }
  },
  '/stories': {
    title: 'Client Stories & Verified Reviews | The Golden Numeralist — Namrattaa Lal',
    description: 'Read real testimonials from clients across India, UAE, and worldwide who found clarity, career direction, and self-alignment through numerology with Namrattaa Lal.',
    canonicalPath: '/stories',
    keywords: [
      'Namrattaa Lal reviews',
      'The Golden Numeralist testimonials',
      'Numerology client reviews',
      'Numerology session feedback',
      'Verified numerology testimonials'
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Stories', path: '/stories' }
    ],
  },
  '/contact': {
    title: 'Contact Namrattaa Lal | Book a Numerology Consultation — UAE & India',
    description: 'Get in touch with Namrattaa Lal. Book a private online numerology consultation via WhatsApp (+971 58 563 6156 / +91 98107 89604) or email (Info@Namrattaa.com).',
    canonicalPath: '/contact',
    keywords: [
      'Contact Namrattaa Lal',
      'Book numerology session',
      'The Golden Numeralist contact',
      'Numerology consultation WhatsApp',
      'Numerologist phone number UAE India'
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ],
  }
};

export const packageSEO: Record<string, { title: string; description: string; price: string }> = {
  'basic-package': {
    title: 'Basic Numerology Package | Personality & Destiny Reading — Namrattaa Lal',
    description: 'Explore your core numerology foundations: Personality Number (Driver), Destiny Number (Conductor), latent strengths, and personalized basic remedies.',
    price: '150'
  },
  'detailed-package': {
    title: 'Detailed Numerology Package | Career, Finance & Life Pillars — Namrattaa Lal',
    description: 'In-depth consultation covering career direction, financial outlook, Lo Shu Grid yogas, key health indicators, and advanced numerology remedies.',
    price: '300'
  },
  'comprehensive-package': {
    title: 'Comprehensive Numerology Package | Complete Life Alignment & Name Correction',
    description: 'Complete personal alignment consultation: in-depth Lo Shu Grid, full name spelling correction, mobile/vehicle number compatibility, and 9-year cycle forecasting.',
    price: '500'
  }
};

export const toolSEO: Record<string, { title: string; description: string }> = {
  'personality-number': {
    title: 'Personality Number (Driver / Mulank) Guide | Lo Shu Numerology',
    description: 'Understand your Personality Number (Driver/Mulank). Calculate your core behavioral instincts, leadership frequency, and outer vibration in Lo Shu Numerology.'
  },
  'destiny-number': {
    title: 'Destiny Number (Conductor / Bhagyank) Guide | Lo Shu Numerology',
    description: 'Calculate your Destiny Number (Conductor/Bhagyank). Uncover your life purpose, career trajectory, and karmic mission from your complete date of birth.'
  },
  'aura-kua-number': {
    title: 'Aura & Kua Number Calculator | Feng Shui Compass Energy — Namrattaa Lal',
    description: 'Calculate your Kua/Aura Number in Chinese Lo Shu tradition. Discover your auspicious compass directions for prosperity, health, vitality, and relationships.'
  },
  'name-numerology': {
    title: 'Name Numerology Analysis & Harmonic Alignment | The Golden Numeralist',
    description: 'Discover the compound vibration of your name letters. Learn how Name Numerology bridges harmony with your Driver and Conductor birth numbers.'
  },
  'personal-year-numerology': {
    title: 'Personal Year Numerology Calculator | 9-Year Life Cycle Forecast',
    description: 'Forecast the evolutionary energy of your current 12-month transit within the 9-year Lo Shu cycle. Plan major career moves, relationships, and new beginnings.'
  }
};
