export const navItems: [string, string][] = [
  ['About', '/about'],
  ['Sessions', '/sessions'],
  ['Numerology Tools', '/numerology-tools'],
  ['Journal', '/journal'],
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
      'Life Path Number – Core Life Purpose',
      'Destiny Number – Latent Talents',
      'Current Personal Year Forecast',
      'Basic Remedies'
    ]
  },
  {
    name: 'Detailed Package',
    price: 'AED 300',
    focus: 'Essential Life Pillars',
    items: [
      'All topics in Basic Package',
      'Career & Financial Outlook',
      'Yogas in Numerology',
      'Key Health Concerns',
      'Advanced Remedies'
    ]
  },
  {
    name: 'Comprehensive Package',
    price: 'AED 500',
    focus: 'Complete Personal Alignment',
    items: [
      'All topics from Detailed Package',
      'Complete Name Spelling Analysis & Correction',
      'Marriage Compatibility',
      'Mobile & Vehicle Number Compatibility'
    ]
  },
];

export const packages = [
  { slug: 'basic-package', title: 'Basic Package', price: 'AED 150', text: 'A focused beginning for exploring your core numerology foundations.' },
  { slug: 'detailed-package', title: 'Detailed Package', price: 'AED 300', text: 'A deeper conversation across the essential pillars of your personal map.' },
  { slug: 'comprehensive-package', title: 'Comprehensive Package', price: 'AED 500', text: 'A complete alignment session for a fuller, more considered perspective.' },
];

export const serviceTypes = [
  'Personal Numerology',
  'Career Numerology',
  'Relationship Compatibility',
  'Business Numerology',
  'Name Analysis',
  'Mobile & Vehicle Analysis',
];

export const toolMeta: Record<string, { title: string; subtitle?: string; description: string; guideDescription?: string; category?: string; placeholder: string }> = {
  'life-path': {
    title: 'Life Path Number',
    subtitle: 'The path you walk',
    description: "Your Life Path Number is traditionally associated with the themes, tendencies and lessons that shape your life's journey.",
    guideDescription: "The Life Path Number is one of the central numbers traditionally explored in numerology. It is associated with the themes, tendencies and lessons that may accompany a person's life journey.",
    category: 'Core Numbers',
    placeholder: 'Date of birth'
  },
  destiny: {
    title: 'Destiny / Expression Number',
    subtitle: 'Your expression',
    description: "The Destiny, or Expression, Number is traditionally connected with your abilities, natural tendencies and the way you express yourself in the world.",
    guideDescription: "The Destiny Number (sometimes called the Expression Number) is drawn from the letters of your full birth name. In traditional numerology, it is thought to represent the natural talents, abilities, and potential you brought into the world. While the Life Path indicates your journey, the Destiny Number indicates the tools and inherent characteristics you use to walk that path.",
    category: 'Core Numbers',
    placeholder: 'Full name'
  },
  'soul-urge': {
    title: 'Soul Urge Number',
    subtitle: 'What moves you',
    description: "The Soul Urge Number explores the inner motivations, desires and values traditionally associated with the vowels in your name.",
    guideDescription: "Calculated entirely from the vowels in your name, the Soul Urge (or Heart's Desire) Number speaks to your innermost motivations, private dreams, and the deep emotional drives that guide your decisions. It represents what you truly value and crave on a soul level, often beneath the surface of what others might see.",
    category: 'Core Numbers',
    placeholder: 'Full name'
  },
  personality: {
    title: 'Personality Number',
    subtitle: 'How you are seen',
    description: "The Personality Number is traditionally associated with the qualities you reveal outwardly and the impression you may create on others.",
    guideDescription: "Derived from the consonants in your name, the Personality Number acts as a filter or an outer persona. It describes the traits you project to the world and the first impressions you give to others before they get to know you deeply. In numerology, it is considered the protective shield or gateway to your inner self.",
    category: 'Core Numbers',
    placeholder: 'Full name'
  },
  'personal-year': {
    title: 'Personal Year Number',
    subtitle: 'The theme of your year',
    description: "A traditional numerology concept used to explore the symbolic theme associated with a particular year of your life.",
    guideDescription: "Numerology views life in 9-year cycles, with each year bringing its own specific energy and focus. The Personal Year Number helps you understand the current rhythm of your life, highlighting the themes, opportunities, and challenges you might face during this 12-month period. It can be a powerful tool for planning and reflection.",
    category: 'Personal Cycles',
    placeholder: 'Date of birth'
  },
  'name-number': {
    title: 'Name Number',
    subtitle: 'The energy of your name',
    description: "Explore the traditional numerological symbolism associated with the letters and numbers within a name.",
    guideDescription: "Every letter carries a numerical vibration. The overall Name Number represents the energetic signature of the name you currently use. Many practitioners look at the Name Number to see if it harmonizes well with your core birth numbers, and to understand the everyday frequency you project into your personal and professional life.",
    category: 'Everyday Numerology',
    placeholder: 'Full name'
  },
  compatibility: {
    title: 'Relationship Compatibility',
    subtitle: 'Two numbers, one connection',
    description: "Explore how two Life Path Numbers are traditionally compared within numerology.",
    guideDescription: "Numerology compatibility involves looking at the interplay between two distinct sets of core numbers. While no two numbers are entirely 'incompatible', some combinations naturally harmonize, while others require conscious effort and understanding. Analyzing relationship numbers can provide deep insight into communication styles, shared goals, and mutual growth.",
    category: 'Everyday Numerology',
    placeholder: 'Two dates of birth'
  },
  'business-name': {
    title: 'Business Name Number',
    subtitle: 'The name of your business',
    description: "Discover the traditional numerological themes associated with the name of a business.",
    guideDescription: "Just like a person, a business has a numerical identity. The Business Name Number is traditionally used to gauge the outward energy, public perception, and overall success potential of an enterprise. A supportive business name should ideally resonate with the nature of the industry and the core numbers of the founders.",
    category: 'Everyday Numerology',
    placeholder: 'Business name'
  },
  mobile: {
    title: 'Mobile Number Analysis',
    subtitle: 'The number you carry',
    description: "Explore traditional numerological interpretations associated with the digits within a mobile number.",
    guideDescription: "In modern numerology, the numbers we carry with us daily—like a mobile phone number—are seen as a subtle frequency that interacts with our lives. Practitioners often analyze mobile numbers to identify patterns related to communication, social connectivity, and the kinds of interactions that number might attract.",
    category: 'Everyday Numerology',
    placeholder: 'Mobile number'
  },
  vehicle: {
    title: 'Vehicle Number Analysis',
    subtitle: 'The number on your journey',
    description: "Explore traditional numerological interpretations associated with a vehicle registration number.",
    guideDescription: "A vehicle's registration number is often explored in everyday numerology to understand the energetic 'vibe' of the car. Some numbers are traditionally associated with steady, reliable journeys, while others might suggest speed, frequent movement, or the need for more careful attention on the road.",
    category: 'Everyday Numerology',
    placeholder: 'Registration number'
  },
};

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
  ['Instagram', '@thegoldennumeralist', 'Instagram'],
  ['YouTube', 'The Golden Numeralist', 'Youtube'],
  ['WhatsApp', 'Available for online sessions', 'Play'],
];

export const footerLinkGroups: [string, string[]][] = [
  ['Explore', ['About', 'Sessions', 'Numerology Tools']],
  ['Read', ['Journal', 'Stories', 'Contact']],
  ['Follow', ['Instagram', 'YouTube', 'WhatsApp']],
];

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
