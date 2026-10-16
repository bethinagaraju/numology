export const navItems: [string, string][] = [
  ['About', '/#about-us'],
  ['Sessions', '/sessions'],
  ['Numerology Tools', '/numerology-tools'],
  ['Stories', '/stories'],
];

export const mapItems = [
  { label: 'LIFE PATH', text: 'The journey and patterns traditionally associated with your date of birth.', calc: 'Date of birth', session: 'Personal Numerology' },
  { label: 'DESTINY', text: 'The expression of your name and the qualities it is often read to reflect.', calc: 'Full name', session: 'Name Analysis' },
  { label: 'SOUL URGE', text: 'An inward-facing lens on motivations, desires and what feels meaningful.', calc: 'Vowels in your name', session: 'Personal Numerology' },
  { label: 'PERSONALITY', text: 'The outward impression traditionally associated with the consonants in your name.', calc: 'Consonants in your name', session: 'Name Analysis' },
  { label: 'PERSONAL YEAR', text: 'A reflective annual theme calculated from your birth date and the current year.', calc: 'Birth date + calendar year', session: 'Personal Numerology' },
];

export const interests: Record<string, string> = {
  MYSELF: 'Begin with the patterns traditionally connected to your core numbers and personal rhythm.',
  'MY CAREER': 'Explore traditional numerology perspectives around professional direction, strengths and working patterns.',
  'MY RELATIONSHIP': 'Consider the ways numerology practitioners explore shared rhythms, communication and complementarity.',
  'MY BUSINESS': 'Explore a name, direction or decision through a traditional numerology lens.',
  'MY NAME': 'Understand the symbolic language practitioners associate with the letters in your name.',
  'MY FAMILY': 'Reflect on the dynamics and individual patterns that make a family system unique.',
  'MY NEXT CHAPTER': 'Use the language of numbers as a prompt for thoughtful reflection on what comes next.',
};

export const journeySteps = [
  { step: 'YOUR DETAILS', text: 'Share what is on your mind.' },
  { step: 'NUMBER ANALYSIS', text: 'A considered look at your numbers.' },
  { step: 'PERSONAL CONSULTATION', text: 'A conversation shaped around you.' },
  { step: 'INSIGHTS & GUIDANCE', text: 'Leave with prompts for your next step.' },
];

export const packageData = [
  {
    name: 'Basic Package',
    price: 'AED 150',
    focus: 'Core Foundations',
    items: [
      'Personality Number',
      'Destiny Number',
      'Strengths and weaknesses',
      'Latent talents',
      'Basic Remedies'
    ]
  },
  {
    name: 'Detailed Package',
    price: 'AED 300',
    focus: 'Essential Life Pillars',
    items: [
      // 'Personality Number',
      // 'Destiny Number',
      // 'Strengths and weaknesses',
      // 'Latent talents',
      // 'Basic Remedies',
      'All topics in Basic',
      'Career & Financial Outlook',
      'Know your Yogas in numerology',
      'Key Health Concerns',
      'Advanced Remedies'
    ]
  },
  {
    name: 'Comprehensive Package',
    price: 'AED 500',
    focus: 'Complete Personal Alignment',
    items: [
      // 'Personality Number',
      // 'Destiny Number',
      // 'Strengths and weaknesses',
      // 'Latent talents',
      // 'Basic Remedies',
      // 'Career & Financial Outlook',
      // 'Know your Yogas in numerology',
      // 'Key Health Concerns',
      // 'Advanced Remedies',
      'All topics in Detailed',
      'Complete Name Spelling Analysis & Correction',
      'Mobile & Vehicle Number Compatibility',
      'Upcoming personal year calculation'
    ]
  },
];

export const packages = [
  { slug: 'basic-package', title: 'Basic Package', text: 'A focused beginning for exploring your core numerology foundations.' },
  { slug: 'detailed-package', title: 'Detailed Package', text: 'A deeper conversation across the essential pillars of your personal map.' },
  { slug: 'comprehensive-package', title: 'Comprehensive Package', text: 'A complete alignment session for a fuller, more considered perspective.' },
];

export const serviceTypes = [
  'Personality & Destiny',
  'Career & Business',
  'Marriage Compatibility',
  'Family & Relationships',
  'Name Analysis',
  'Upcoming Personal Year',
];

export const toolMeta: Record<string, { title: string; subtitle?: string; description: string; guideDescription?: string; category?: string; placeholder: string }> = {
  'personality-number': {
    title: 'Personality Number',
    subtitle: 'Driver / Mulank • Core Nature',
    description: "Calculated from your birth day, the Personality Number reveals your inherent character, behavioral instincts, and outer vibration in Lo Shu Numerology.",
    guideDescription: "In Lo Shu Numerology, the Personality Number (also revered as the Driver, Mulank, or Basic Number) is determined strictly by the day of your birth reduced to a single digit (1–9). It governs your core self-identity, instinctive reactions, leadership style, and the primary frequency you radiate into your environment.",
    category: 'LoShu Numerology',
    placeholder: 'Day of birth (e.g. 14)'
  },
  'destiny-number': {
    title: 'Destiny Number',
    subtitle: 'Conductor / Bhagyank • Life Purpose',
    description: "Derived from your complete date of birth, the Destiny Number maps your ultimate life mission, career potential, and karmic destiny.",
    guideDescription: "The Destiny Number (known as the Conductor or Bhagyank in Lo Shu Numerology) is calculated by adding every digit in your full date of birth (Day + Month + Year) down to a single digit (1–9). While the Personality Number dictates who you are and how you act, the Destiny Number reveals what you have come here to achieve and where your life events will guide you.",
    category: 'LoShu Numerology',
    placeholder: 'Full date of birth (DD/MM/YYYY)'
  },
  'aura-kua-number': {
    title: 'Aura/Kua Number',
    subtitle: 'Energy Shield • Cosmic Directions',
    description: "Calculated from your birth year and gender, the Aura/Kua number reveals your magnetic frequency, protective aura, and auspicious Feng Shui directions.",
    guideDescription: "In Lo Shu Grid and Chinese energetic tradition, the Kua (or Gua) Number—frequently known as your Aura Number—reveals your magnetic resonance and cosmic orientation. Calculated from your solar birth year and gender, it categorizes you into either the East or West group, unlocking your four most auspicious compass directions for prosperity, vitality, harmonious relationships, and personal growth.",
    category: 'LoShu Numerology',
    placeholder: 'Birth year & gender'
  },
  'name-numerology': {
    title: 'Name Numerology',
    subtitle: 'Harmonic Frequency • Compound Power',
    description: "Analyzes your full name vibration to ensure complete harmony with your Lo Shu Driver (Personality) and Conductor (Destiny) numbers.",
    guideDescription: "In Lo Shu Numerology, your name is your active living sound vibration. Every character carries numerical weight that combines into both a compound number and a single-digit root frequency. Name Numerology reveals whether your current name creates a harmonic bridge or destructive tension with your Driver and Conductor numbers, offering guidance for auspicious spelling alignment.",
    category: 'LoShu Numerology',
    placeholder: 'Full name'
  },
  'personal-year-numerology': {
    title: 'Personal Year Numerology',
    subtitle: '9-Year Cycle • Annual Transit Energy',
    description: "Forecasts the energetic theme, opportunities, and evolutionary focus of your current year within the 9-year Lo Shu cycle.",
    guideDescription: "Lo Shu Numerology charts your life rhythm across repeating 9-year cycles. By combining your birth day and birth month with the current year, the Personal Year Number reveals the unique climate of your current twelve months—empowering you to know when to start fresh, build patiently, expand dynamically, or consolidate your wisdom.",
    category: 'LoShu Numerology',
    placeholder: 'Date of birth'
  },
};

// Aliases for compatibility
toolMeta['personality'] = toolMeta['personality-number'];
toolMeta['destiny'] = toolMeta['destiny-number'];
toolMeta['kua-number'] = toolMeta['aura-kua-number'];
toolMeta['name-number'] = toolMeta['name-numerology'];
toolMeta['personal-year'] = toolMeta['personal-year-numerology'];


export const articles = [
  {
    slug: 'life-path-number',
    category: 'Numerology basics',
    title: 'What is a Life Path Number?',
    text: 'A gentle introduction to one of the most familiar starting points in a numerology conversation.',
    content: [
      { type: 'p', text: 'The Life Path Number is often considered the foundation of a numerology chart. Calculated from your complete date of birth, it is traditionally seen as the unchangeable blueprint of your life.' },
      { type: 'h2', text: 'The core theme' },
      { type: 'p', text: 'Unlike other numbers which might change with a name or a location, your date of birth is fixed. Practitioners read this number to understand the central themes, inherent talents, and recurring challenges a person might encounter on their journey.' },
      { type: 'p', text: 'It is important to remember that this number does not dictate your destiny. Instead, it offers a symbolic language to reflect upon your natural tendencies and how you choose to navigate the path ahead.' }
    ]
  },
  {
    slug: 'name-numbers',
    category: 'Names',
    title: 'Understanding Name Numbers',
    text: 'How practitioners traditionally explore the letters in a name as a symbolic pattern.',
    content: [
      { type: 'p', text: 'While your birth date is fixed, your name represents the evolving expression of who you are. In numerology, every letter is assigned a numerical vibration, creating a unique pattern when combined.' },
      { type: 'h2', text: 'The outer expression' },
      { type: 'p', text: 'Your Destiny or Expression Number, derived from your full birth name, speaks to your natural abilities and the tools you use to interact with the world. Over time, as people change their names through marriage or preference, numerologists suggest this shifts the subtle frequency they project.' },
      { type: 'p', text: 'Exploring your name numbers is an invitation to consider how you present yourself and the qualities you naturally bring into a room.' }
    ]
  },
  {
    slug: 'how-a-session-works',
    category: 'Guidance',
    title: 'How does a numerology session work?',
    text: 'A look at the questions, details and conversation that shape a personal session.',
    content: [
      { type: 'p', text: 'A numerology session is not about predicting the future. Instead, it is a structured, collaborative conversation designed to give you a fresh perspective on your life\'s patterns.' },
      { type: 'h2', text: 'A collaborative dialogue' },
      { type: 'p', text: 'During a session, we look at your core numbers—such as your Life Path, Destiny, and Soul Urge—as a starting point. We discuss what these traditional symbols mean and explore how they might resonate with your current experiences or challenges.' },
      { type: 'p', text: 'The goal is to provide a thoughtful pause. You leave with a clearer framework for self-reflection, helping you to name patterns and approach your next steps with renewed clarity.' }
    ]
  },
];

export const previewArticles = [
  { cat: 'Numerology basics', title: 'What is a Life Path Number?', slug: 'life-path-number' },
  { cat: 'Names', title: 'Understanding Name Numbers', slug: 'name-numbers' },
  { cat: 'Guidance', title: 'How does a numerology session work?', slug: 'how-a-session-works' },
];

export const stories = [
  { title: 'A new way to frame an old question.', city: 'Mumbai', type: 'Personal Numerology' },
  { title: 'A thoughtful pause in a busy season.', city: 'Dubai', type: 'Career Numerology' },
  { title: 'A conversation that stayed with me.', city: 'London', type: 'Name Analysis' },
];

export const contactChannels: [string, string, string][] = [
  ['Instagram', '@thegoldennumeralist009', 'Instagram'],
  ['WhatsApp', '+971 58 563 6156', 'Play'],
];

export const footerLinkGroups: [string, string[]][] = [
  ['Explore', ['About', 'Sessions', 'Numerology Tools']],
  ['Read', ['Stories', 'Contact']],
  ['Follow', ['Instagram', 'WhatsApp']],
];

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
