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
  { name: 'Basic package', price: 'AED 150', focus: 'Core Foundations', items: ['Life Path Number', 'Destiny Number', 'Current Personal Year'] },
  { name: 'Detailed package', price: 'AED 300', focus: 'Essential Life Pillars', items: ['Everything in Basic', 'Career & financial outlook', 'Key personal themes'] },
  { name: 'Comprehensive package', price: 'AED 500', focus: 'Complete Personal Alignment', items: ['Everything in Detailed', 'Complete name analysis', 'Mobile & vehicle analysis'] },
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

export const toolMeta: Record<string, { title: string; description: string; placeholder: string }> = {
  'life-path': { title: 'Life Path Number', description: 'Explore the traditional interpretation associated with your date of birth.', placeholder: 'Date of birth' },
  destiny: { title: 'Destiny / Expression Number', description: 'Explore the symbolic language practitioners associate with your full name.', placeholder: 'Full name' },
  'soul-urge': { title: 'Soul Urge Number', description: 'A traditional lens on the vowels and inward motivations in your name.', placeholder: 'Full name' },
  personality: { title: 'Personality Number', description: 'Explore the outward-facing qualities traditionally connected to your consonants.', placeholder: 'Full name' },
  'name-number': { title: 'Name Number', description: 'Calculate the traditional Pythagorean name number.', placeholder: 'Full name' },
  'personal-year': { title: 'Personal Year Number', description: 'A reflective annual theme based on your birth date and the calendar year.', placeholder: 'Date of birth' },
  compatibility: { title: 'Relationship Compatibility', description: 'Compare two Life Path numbers through a traditional numerology lens.', placeholder: 'Two dates of birth' },
  'business-name': { title: 'Business Name Number', description: 'Explore traditional themes associated with a business name.', placeholder: 'Business name' },
  mobile: { title: 'Mobile Number Analysis', description: 'Reduce a mobile number for a traditional numerology interpretation.', placeholder: 'Mobile number' },
  vehicle: { title: 'Vehicle Number Analysis', description: 'Explore traditional themes associated with letters and numbers in a registration.', placeholder: 'Registration number' },
};

export const articles = [
  { slug: 'life-path-number', category: 'Numerology basics', title: 'What is a Life Path Number?', text: 'A gentle introduction to one of the most familiar starting points in a numerology conversation.' },
  { slug: 'name-numbers', category: 'Names', title: 'Understanding Name Numbers', text: 'How practitioners traditionally explore the letters in a name as a symbolic pattern.' },
  { slug: 'how-a-session-works', category: 'Guidance', title: 'How does a numerology session work?', text: 'A look at the questions, details and conversation that shape a personal session.' },
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
