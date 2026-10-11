// Lo Shu Grid Numerology Data and Calculation Utilities

export interface PersonalityInfo {
  number: number;
  planet: string;
  element: string;
  gridPosition: string;
  title: string;
  tagline: string;
  traits: string[];
  strengths: string;
  challenges: string;
  luckyColors: string[];
  luckyDays: string[];
}

export interface DestinyInfo {
  number: number;
  planet: string;
  title: string;
  purpose: string;
  mission: string;
  careerFields: string[];
  karmicLesson: string;
}

export interface KuaInfo {
  number: number;
  gender: 'male' | 'female';
  group: 'East Group' | 'West Group';
  trigram: string;
  element: string;
  nature: string;
  shengChi: string; // Success / Wealth
  tienYi: string;   // Health
  nienYen: string;  // Love / Harmony
  fuWei: string;    // Growth / Wisdom
  avoidDirections: string[];
  advice: string;
}

export interface PersonalYearInfo {
  yearNumber: number;
  theme: string;
  summary: string;
  opportunities: string[];
  cautions: string[];
  affirmation: string;
}

// 1. PERSONALITY NUMBER (Driver / Mulank) 1 - 9
export const personalityData: Record<number, PersonalityInfo> = {
  1: {
    number: 1,
    planet: 'Sun (Surya)',
    element: 'Water (North in Lo Shu)',
    gridPosition: 'Bottom Center (Box 1)',
    title: 'The Pioneering Leader',
    tagline: 'Independent, ambitious, and visionary initiator',
    traits: ['Strong leadership', 'Original thinker', 'High self-respect', 'Action-oriented'],
    strengths: 'Natural authority, boundless willpower, courage to walk uncharted paths, self-reliance.',
    challenges: 'Can tilt into ego, intolerance of delays, difficulty taking orders or delegating.',
    luckyColors: ['Gold', 'Orange', 'Yellow'],
    luckyDays: ['Sunday', 'Monday']
  },
  2: {
    number: 2,
    planet: 'Moon (Chandra)',
    element: 'Earth (South-West in Lo Shu)',
    gridPosition: 'Top Right (Box 2)',
    title: 'The Intuitive Diplomat',
    tagline: 'Gentle, emotionally perceptive, and relationship-builder',
    traits: ['Empathetic', 'Peacemaker', 'Artistic sensibility', 'Cooperative'],
    strengths: 'Profound emotional intelligence, mediation skills, sensitivity to environments, loyalty.',
    challenges: 'Prone to mood fluctuations, oversensitivity, hesitation, dependency on validation.',
    luckyColors: ['White', 'Cream', 'Silver'],
    luckyDays: ['Monday', 'Friday']
  },
  3: {
    number: 3,
    planet: 'Jupiter (Guru)',
    element: 'Wood (East in Lo Shu)',
    gridPosition: 'Middle Left (Box 3)',
    title: 'The Creative Mentor',
    tagline: 'Wise, articulate, inspiring, and expressive guide',
    traits: ['Knowledgeable', 'Optimistic', 'Charismatic speaker', 'Generous'],
    strengths: 'Deep thirst for wisdom, natural teaching gift, expansive imagination, social magnetism.',
    challenges: 'Scattering mental energy, overcommitting, occasional preachiness or restlessness.',
    luckyColors: ['Yellow', 'Saffron', 'Amber'],
    luckyDays: ['Thursday']
  },
  4: {
    number: 4,
    planet: 'Rahu (North Node) / Wood',
    element: 'Wood (South-East in Lo Shu)',
    gridPosition: 'Top Left (Box 4)',
    title: 'The Practical Architect',
    tagline: 'Disciplined, methodical, organized, and realistic builder',
    traits: ['Structured', 'Analytical mind', 'Tenacious', 'Systematic'],
    strengths: 'Mastery over systems, rock-solid reliability, attention to detail, persistence.',
    challenges: 'Rigidity in opinions, sudden reversals of fortune, suspicion, stubbornness.',
    luckyColors: ['Blue', 'Grey', 'Earth Tones'],
    luckyDays: ['Saturday', 'Wednesday']
  },
  5: {
    number: 5,
    planet: 'Mercury (Budh)',
    element: 'Earth (Center in Lo Shu - Core Anchor)',
    gridPosition: 'Sacred Center (Box 5)',
    title: 'The Dynamic Catalyst',
    tagline: 'Adaptable, versatile, commercial genius, and free spirit',
    traits: ['Quick wit', 'Business acumen', 'Love for freedom', 'Resourceful'],
    strengths: 'Instant adaptability, balance of mind, extraordinary commercial instincts, networking.',
    challenges: 'Impatience, boredom with routine, restlessness, difficulty with long-term stillness.',
    luckyColors: ['Green', 'Emerald', 'Turquoise'],
    luckyDays: ['Wednesday', 'Friday']
  },
  6: {
    number: 6,
    planet: 'Venus (Shukra)',
    element: 'Metal (North-West in Lo Shu)',
    gridPosition: 'Bottom Right (Box 6)',
    title: 'The Harmonizer & Benefactor',
    tagline: 'Loving, aesthetic, magnetic, and protective guardian',
    traits: ['Aesthetic eye', 'Compassionate', 'Charismatic', 'Family-centric'],
    strengths: 'Refinement, natural luxury attraction, emotional warmth, protective instinct, art appreciation.',
    challenges: 'Tendency to overindulge, perfectionism in others, burdening oneself with family worries.',
    luckyColors: ['Light Blue', 'Rose', 'Silver-White'],
    luckyDays: ['Friday']
  },
  7: {
    number: 7,
    planet: 'Ketu (South Node) / Metal',
    element: 'Metal (West in Lo Shu)',
    gridPosition: 'Middle Right (Box 7)',
    title: 'The Spiritual Seeker',
    tagline: 'Introspective, intuitive, analytical, and truth-focused',
    traits: ['Philosophical', 'Independent researcher', 'Mystical insight', 'Discerning'],
    strengths: 'Profound technical or esoteric depth, high intuition, ability to see beyond illusions.',
    challenges: 'Emotional detachment, over-skepticism, aloofness, feelings of isolation or misunderstanding.',
    luckyColors: ['Smoky White', 'Pastel Green', 'Light Grey'],
    luckyDays: ['Tuesday', 'Sunday']
  },
  8: {
    number: 8,
    planet: 'Saturn (Shani)',
    element: 'Earth (North-East in Lo Shu)',
    gridPosition: 'Bottom Left (Box 8)',
    title: 'The Master of Karma & Mastery',
    tagline: 'Resilient, authoritative, grounded, and long-term strategist',
    traits: ['Steadfast', 'Fair-minded', 'Strong perseverance', 'Pragmatic'],
    strengths: 'Immense stamina, fairness, ability to manifest substantial real-world outcomes through hard work.',
    challenges: 'Early-life friction and delays, perceived harshness, tendency to bottle up emotions.',
    luckyColors: ['Dark Blue', 'Black', 'Steel Grey'],
    luckyDays: ['Saturday']
  },
  9: {
    number: 9,
    planet: 'Mars (Mangal)',
    element: 'Fire (South in Lo Shu)',
    gridPosition: 'Top Center (Box 9)',
    title: 'The Humanitarian Warrior',
    tagline: 'Energetic, passionate, courageous, and protective visionary',
    traits: ['Courageous', 'Generous', 'Strong willpower', 'Dynamic drive'],
    strengths: 'Fierce loyalty, humanitarian heart, boundless physical vitality, readiness to champion causes.',
    challenges: 'Quick temper, impatience, impulsive choices, difficulty with cooling down after conflicts.',
    luckyColors: ['Red', 'Crimson', 'Coral'],
    luckyDays: ['Tuesday']
  }
};

// 2. DESTINY NUMBER (Conductor / Bhagyank) 1 - 9
export const destinyData: Record<number, DestinyInfo> = {
  1: {
    number: 1,
    planet: 'Sun',
    title: 'Destiny of Leadership & Autonomy',
    purpose: 'To spearhead new pathways, inspire courage in others, and hold autonomous executive responsibility.',
    mission: 'Step out of dependency. You are destined to initiate ventures, lead teams, and leave a distinguished legacy of self-determination.',
    careerFields: ['Entrepreneurship', 'Executive Management', 'Politics', 'Pioneering Technology', 'Administration'],
    karmicLesson: 'Learn to lead with humility and foster growth in others rather than commanding.'
  },
  2: {
    number: 2,
    planet: 'Moon',
    title: 'Destiny of Harmony & Bridge-Building',
    purpose: 'To heal divisions, nurture emotional resonance, and create lasting alliances.',
    mission: 'Cultivate deep collaboration and intuition. Your path is to facilitate diplomacy, counseling, artistic expression, and supportive wisdom.',
    careerFields: ['Psychology & Counseling', 'Diplomacy', 'Art & Design', 'Human Resources', 'Healthcare'],
    karmicLesson: 'Overcome self-doubt and maintain emotional boundaries without absorbing others’ turbulence.'
  },
  3: {
    number: 3,
    planet: 'Jupiter',
    title: 'Destiny of Wisdom, Teaching & Expression',
    purpose: 'To uplift humanity through knowledge, creative enlightenment, and ethical guidance.',
    mission: 'Express knowledge that frees minds. You are meant to be an educator, thought leader, writer, or creative visionary who expands consciousness.',
    careerFields: ['Education & Mentorship', 'Writing & Publishing', 'Law & Philosophy', 'Creative Arts', 'Public Speaking'],
    karmicLesson: 'Channel broad brilliance into steady discipline rather than scattered hobbies.'
  },
  4: {
    number: 4,
    planet: 'Rahu',
    title: 'Destiny of Real-World Structural Order',
    purpose: 'To construct enduring frameworks, manage complex real-world systems, and introduce practical innovation.',
    mission: 'Build foundations that withstand time. Your destiny demands thoroughness, systemization, and resilience against sudden changes.',
    careerFields: ['Architecture & Civil Works', 'IT & Data Systems', 'Finance & Accounting', 'Research Science', 'Logistics'],
    karmicLesson: 'Cultivate flexibility and adaptability when plans face unexpected realignments.'
  },
  5: {
    number: 5,
    planet: 'Mercury',
    title: 'Destiny of Communication & Commerce',
    purpose: 'To bridge disparate worlds, adapt to rapid transformation, and foster global exchange.',
    mission: 'Live as a catalyst for dynamic progress. Your life invites travel, multi-disciplinary ventures, storytelling, and high-frequency commerce.',
    careerFields: ['International Business', 'Marketing & Media', 'Travel & Hospitality', 'Trading & Commerce', 'Journalism'],
    karmicLesson: 'Ground your versatile curiosity with steady commitment to seeing long journeys to completion.'
  },
  6: {
    number: 6,
    planet: 'Venus',
    title: 'Destiny of Service, Beauty & Community Nurturing',
    purpose: 'To create beauty, protect harmony, and elevate the standard of living for family and community.',
    mission: 'Manifest harmony, elegance, and humanitarian stewardship. You are destined to provide counsel, design graceful environments, and foster wellness.',
    careerFields: ['Design & Aesthetics', 'Hospitality & Luxury', 'Family Law & Counseling', 'Healing Arts', 'Entertainment'],
    karmicLesson: 'Release the urge to control or over-fix loved ones; allow others their own life lessons.'
  },
  7: {
    number: 7,
    planet: 'Ketu',
    title: 'Destiny of Esoteric & Scientific Inquiry',
    purpose: 'To uncover the hidden truths of existence, master specialized knowledge, and bridge science with spirituality.',
    mission: 'Look behind the surface of things. Your destiny is that of the analyst, researcher, spiritual seeker, and solitary philosopher.',
    careerFields: ['Advanced Research & R&D', 'Spiritual Philosophy', 'Data Science & Coding', 'Investigation', 'Holistic Healing'],
    karmicLesson: 'Balance solitary introspection with open heart connections in everyday human society.'
  },
  8: {
    number: 8,
    planet: 'Saturn',
    title: 'Destiny of Material Mastery & Karmic Balance',
    purpose: 'To manage great power, build organizational wealth, and enforce ethical justice in worldly affairs.',
    mission: 'Transform perseverance into immense authority. Your life purpose is to master the physical and financial realms with unbending integrity.',
    careerFields: ['Judiciary & Law', 'Real Estate & Infrastructure', 'Corporate Governance', 'Heavy Industry', 'Financial Institutions'],
    karmicLesson: 'Understand that true authority is rooted in fairness and compassion, not mere control.'
  },
  9: {
    number: 9,
    planet: 'Mars',
    title: 'Destiny of Global Impact & Compassionate Action',
    purpose: 'To champion the underprivileged, lead courageous missions, and close karmic cycles with grace.',
    mission: 'Channel high vitality into selfless and courageous endeavors. You are destined for broad social influence, reform, and transformative deeds.',
    careerFields: ['Humanitarian Leadership', 'Defense & Protective Services', 'Medical Surgery', 'Sports & Athletics', 'Environmental Advocacy'],
    karmicLesson: 'Transmute reactive anger into calm, enduring determination and forgive past hurts.'
  }
};

// 3. AURA / KUA NUMBER (Feng Shui & Lo Shu Grid)
export function calculateLoShuKua(year: number, gender: 'male' | 'female'): KuaInfo {
  // Sum digits of year
  let ySum = String(year).split('').reduce((acc, digit) => acc + Number(digit), 0);
  while (ySum > 9) {
    ySum = String(ySum).split('').reduce((acc, digit) => acc + Number(digit), 0);
  }

  const isPost2000 = year >= 2000;
  let rawKua = 0;

  if (gender === 'male') {
    rawKua = isPost2000 ? 9 - ySum : 10 - ySum;
    if (rawKua <= 0) rawKua += 9;
  } else {
    rawKua = isPost2000 ? 6 + ySum : 5 + ySum;
    while (rawKua > 9) {
      rawKua = String(rawKua).split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
  }

  // Classical Lo Shu rule for center 5: Male -> 2, Female -> 8
  let finalKua = rawKua;
  if (finalKua === 5) {
    finalKua = gender === 'male' ? 2 : 8;
  }

  const isEast = [1, 3, 4, 9].includes(finalKua);

  const kuaMappings: Record<number, {
    trigram: string;
    element: string;
    nature: string;
    shengChi: string;
    tienYi: string;
    nienYen: string;
    fuWei: string;
    avoid: string[];
    advice: string;
  }> = {
    1: {
      trigram: 'Kan ☵',
      element: 'Water',
      nature: 'Fluid, deeply reflective, highly adaptable',
      shengChi: 'South-East (Wealth & Success)',
      tienYi: 'East (Health & Vitality)',
      nienYen: 'South (Love & Relationships)',
      fuWei: 'North (Focus & Personal Growth)',
      avoid: ['West', 'North-East', 'North-West', 'South-West'],
      advice: 'Face North or South-East during critical business meetings and creative work to amplify your magnetic aura.'
    },
    2: {
      trigram: 'Kun ☷',
      element: 'Earth',
      nature: 'Nurturing, supportive, steady, receptive',
      shengChi: 'North-East (Wealth & Success)',
      tienYi: 'West (Health & Vitality)',
      nienYen: 'North-West (Love & Relationships)',
      fuWei: 'South-West (Focus & Personal Growth)',
      avoid: ['North', 'South', 'East', 'South-East'],
      advice: 'Anchor your bedhead or workstation toward North-East or South-West to absorb grounding earth stability.'
    },
    3: {
      trigram: 'Zhen ☳',
      element: 'Wood',
      nature: 'Dynamic, expansive, visionary, regenerative',
      shengChi: 'South (Wealth & Success)',
      tienYi: 'North (Health & Vitality)',
      nienYen: 'South-East (Love & Relationships)',
      fuWei: 'East (Focus & Personal Growth)',
      avoid: ['West', 'North-West', 'South-West', 'North-East'],
      advice: 'Face South to invigorate career momentum, and align sleep toward North for cellular regeneration.'
    },
    4: {
      trigram: 'Xun ☴',
      element: 'Wood',
      nature: 'Flexible, gentle, intellectual, persistent',
      shengChi: 'North (Wealth & Success)',
      tienYi: 'South (Health & Vitality)',
      nienYen: 'East (Love & Relationships)',
      fuWei: 'South-East (Focus & Personal Growth)',
      avoid: ['North-East', 'South-West', 'West', 'North-West'],
      advice: 'Face North for major prosperity decisions and South-East for sustained concentration and academic pursuits.'
    },
    6: {
      trigram: 'Qian ☰',
      element: 'Metal',
      nature: 'Authoritative, noble, executive, clear-minded',
      shengChi: 'West (Wealth & Success)',
      tienYi: 'North-East (Health & Vitality)',
      nienYen: 'South-West (Love & Relationships)',
      fuWei: 'North-West (Focus & Personal Growth)',
      avoid: ['South', 'East', 'North', 'South-East'],
      advice: 'Utilize West and North-West facing desks to invoke senior executive authority and clear commercial instinct.'
    },
    7: {
      trigram: 'Dui ☱',
      element: 'Metal',
      nature: 'Communicative, joyful, charming, precise',
      shengChi: 'North-West (Wealth & Success)',
      tienYi: 'South-West (Health & Vitality)',
      nienYen: 'North-East (Love & Relationships)',
      fuWei: 'West (Focus & Personal Growth)',
      avoid: ['East', 'South-East', 'South', 'North'],
      advice: 'Face North-West to boost financial returns and West to cultivate peaceful reflection and inner alignment.'
    },
    8: {
      trigram: 'Gen ☶',
      element: 'Earth',
      nature: 'Mountain-like, steadfast, meditative, resolute',
      shengChi: 'South-West (Wealth & Success)',
      tienYi: 'North-West (Health & Vitality)',
      nienYen: 'West (Love & Relationships)',
      fuWei: 'North-East (Focus & Personal Growth)',
      avoid: ['South-East', 'East', 'North', 'South'],
      advice: 'Face South-West for commercial breakthroughs and keep your study aligned to North-East for profound wisdom.'
    },
    9: {
      trigram: 'Li ☲',
      element: 'Fire',
      nature: 'Illuminating, passionate, radiant, perceptive',
      shengChi: 'East (Wealth & Success)',
      tienYi: 'South-East (Health & Vitality)',
      nienYen: 'North (Love & Relationships)',
      fuWei: 'South (Focus & Personal Growth)',
      avoid: ['North-West', 'West', 'North-East', 'South-West'],
      advice: 'Harness the fiery East and South vectors for public recognition, visibility, and vibrant vital health.'
    }
  };

  const details = kuaMappings[finalKua] || kuaMappings[1];

  return {
    number: finalKua,
    gender,
    group: isEast ? 'East Group' : 'West Group',
    trigram: details.trigram,
    element: details.element,
    nature: details.nature,
    shengChi: details.shengChi,
    tienYi: details.tienYi,
    nienYen: details.nienYen,
    fuWei: details.fuWei,
    avoidDirections: details.avoid,
    advice: details.advice
  };
}

// 4. NAME NUMEROLOGY (Chaldean & Harmonic Analysis)
export const chaldeanValues: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export const pythagoreanValues: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

export function analyzeNameNumerology(fullName: string) {
  const clean = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  if (!clean) {
    return {
      clean: '',
      chaldeanCompound: 0,
      chaldeanSingle: 0,
      pythagoreanCompound: 0,
      pythagoreanSingle: 0,
      breakdown: [] as Array<{ char: string; chaldean: number; pythagorean: number }>
    };
  }

  let chaldeanCompound = 0;
  let pythagoreanCompound = 0;
  const breakdown: Array<{ char: string; chaldean: number; pythagorean: number }> = [];

  for (const char of clean) {
    const cVal = chaldeanValues[char] || 0;
    const pVal = pythagoreanValues[char] || 0;
    chaldeanCompound += cVal;
    pythagoreanCompound += pVal;
    breakdown.push({ char, chaldean: cVal, pythagorean: pVal });
  }

  const reduceToSingle = (val: number): number => {
    let curr = val;
    while (curr > 9) {
      curr = String(curr).split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return curr;
  };

  return {
    clean,
    chaldeanCompound,
    chaldeanSingle: reduceToSingle(chaldeanCompound),
    pythagoreanCompound,
    pythagoreanSingle: reduceToSingle(pythagoreanCompound),
    breakdown
  };
}

// 5. PERSONAL YEAR NUMEROLOGY 1 - 9
export const personalYearData: Record<number, PersonalYearInfo> = {
  1: {
    yearNumber: 1,
    theme: 'New Beginnings, Seeds & Pioneer Energy',
    summary: 'The dawn of a new 9-year cycle. A powerful year for initiating projects, launching ventures, and asserting your personal independence.',
    opportunities: ['Take calculated risks and launch long-held ambitions', 'Adopt decisive leadership and independent action', 'Set the tone for the entire upcoming 9-year cycle'],
    cautions: ['Avoid waiting for others or procrastinating', 'Watch out for impatience or aggressive self-assertion'],
    affirmation: 'I courageously plant the seeds of my future with clarity and decisive momentum.'
  },
  2: {
    yearNumber: 2,
    theme: 'Patience, Partnerships & Emotional Incubation',
    summary: 'A year of gentle cultivation, diplomatic cooperation, and nurturing the seeds planted in Year 1. Collaboration yields the greatest rewards.',
    opportunities: ['Foster strong romantic and professional alliances', 'Deepen emotional intuition and active listening', 'Allow projects to germinate naturally without forcing outcomes'],
    cautions: ['Do not rush or force premature results', 'Guard against oversensitivity and feelings of vulnerability'],
    affirmation: 'I trust divine timing, honoring harmony, patience, and mutual collaboration.'
  },
  3: {
    yearNumber: 3,
    theme: 'Self-Expression, Creativity & Social Expansion',
    summary: 'A vibrant, expressive year filled with social connections, creative projects, networking, and joyful communication.',
    opportunities: ['Showcase your artistic and speaking talents', 'Expand your social circles and collaborative networks', 'Infuse optimism and vitality into your daily routine'],
    cautions: ['Avoid scattering energy across too many frivolous projects', 'Be mindful of superficial promises or gossip'],
    affirmation: 'My authentic voice and joyful creativity radiate magnetic opportunities.'
  },
  4: {
    yearNumber: 4,
    theme: 'Hard Work, Foundations & Structural Discipline',
    summary: 'A year dedicated to building solid ground. Focus on health, financial stability, organization, and methodical progress.',
    opportunities: ['Establish dependable daily systems and budgets', 'Consolidate property, career structures, and health foundations', 'Turn creative inspirations into durable practical reality'],
    cautions: ['Do not look for get-rich-quick shortcuts', 'Guard against burnout, rigidity, or stubborn resistance to necessary change'],
    affirmation: 'I build lasting foundations with steady discipline, patience, and practical focus.'
  },
  5: {
    yearNumber: 5,
    theme: 'Dynamic Freedom, Pivots & Transformational Change',
    summary: 'The midpoint of the cycle brings brisk winds of change, unexpected travel, new perspectives, and sudden breakthroughs.',
    opportunities: ['Embrace fresh horizons, new ventures, and travel', 'Adapt quickly to market shifts and unexpected offers', 'Break free from stagnant patterns and restrictive routines'],
    cautions: ['Avoid impulsive or reckless overindulgences', 'Stay anchored so freedom does not devolve into scattered chaos'],
    affirmation: 'I welcome positive transformation and dance gracefully with the currents of change.'
  },
  6: {
    yearNumber: 6,
    theme: 'Home, Duty, Relationships & Sacred Harmony',
    summary: 'A heart-centered year emphasizing family responsibilities, community service, marriage, and aesthetic beautification of your surroundings.',
    opportunities: ['Nurture home environment and strengthen family bonds', 'Harmonize close relationships and resolve past conflicts', 'Invest in home comforts, art, and holistic well-being'],
    cautions: ['Do not martyr yourself by carrying everyone else’s emotional load', 'Avoid perfectionist control over family members'],
    affirmation: 'I cultivate beauty, unconditional love, and protective harmony in my sacred space.'
  },
  7: {
    yearNumber: 7,
    theme: 'Introspection, Spiritual Study & Inner Alignment',
    summary: 'A sabbatical for the soul. This is a quieter, contemplative year ideal for meditation, specialized research, skill mastery, and deep self-inquiry.',
    opportunities: ['Deepen esoteric, philosophical, or spiritual studies', 'Allow time for rest, nature retreats, and solitude', 'Master a specialized technical or artistic craft'],
    cautions: ['Avoid reckless high-risk material speculation', 'Guard against chronic cynicism, cold aloofness, or mental gloom'],
    affirmation: 'In the stillness of my soul, I discover profound truth, clarity, and inner peace.'
  },
  8: {
    yearNumber: 8,
    theme: 'Harvest, Material Manifestation & Executive Power',
    summary: 'The major power year of the cycle. Dedicated work from previous years yields substantial career elevation, financial gains, and karmic justice.',
    opportunities: ['Step into executive leadership and negotiate high-value contracts', 'Expand business operations and command authority', 'Reap the material fruits of past disciplined efforts'],
    cautions: ['Ensure all dealings are handled with absolute ethical integrity', 'Beware of greed, ruthlessness, or neglecting your health'],
    affirmation: 'I align material abundance with ethical integrity, manifesting lasting prosperity.'
  },
  9: {
    yearNumber: 9,
    theme: 'Completion, Release & Universal Wisdom',
    summary: 'The culmination of the 9-year evolutionary cycle. A year for tying up loose ends, letting go of what no longer serves you, and clearing space for rebirth.',
    opportunities: ['Forgive past resentments and bring major projects to completion', 'Engage in philanthropy, mentorship, and selfless service', 'Release outdated jobs, relationships, and habits with gratitude'],
    cautions: ['Do not cling anxiously to fading chapters', 'Avoid starting vast 10-year commitments; focus instead on closure'],
    affirmation: 'I release the past with peace and gratitude, clearing sacred space for my next chapter.'
  }
};
