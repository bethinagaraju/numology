export type Interpretation = { title: string; summary: string; themes: string[] };

export const numerologyInterpretations: Record<number, Interpretation> = {
  1: { title: 'The Initiator', summary: 'Traditionally associated with independence, beginnings and the courage to shape a distinct path.', themes: ['Initiative', 'Self-definition', 'Original thinking'] },
  2: { title: 'The Harmoniser', summary: 'Within numerology, 2 is often read through the lens of partnership, sensitivity and thoughtful balance.', themes: ['Collaboration', 'Intuition', 'Diplomacy'] },
  3: { title: 'The Storyteller', summary: 'Numerology interpretations often describe 3 as expressive, social and connected to creative communication.', themes: ['Expression', 'Optimism', 'Creativity'] },
  4: { title: 'The Builder', summary: 'Traditionally associated with structure, practical progress and the patient craft of making ideas real.', themes: ['Stability', 'Discipline', 'Craft'] },
  5: { title: 'The Explorer', summary: 'Within numerology, 5 is often interpreted as curious, adaptable and drawn to meaningful movement.', themes: ['Freedom', 'Adaptability', 'Discovery'] },
  6: { title: 'The Nurturer', summary: 'Some practitioners associate 6 with care, responsibility and a desire to create harmony around it.', themes: ['Care', 'Beauty', 'Responsibility'] },
  7: { title: 'The Seeker', summary: 'Traditionally read as introspective and analytical, 7 invites a closer look beneath the obvious.', themes: ['Introspection', 'Analysis', 'Knowledge'] },
  8: { title: 'The Strategist', summary: 'Within numerology, 8 is often connected with stewardship, ambition and the responsible use of influence.', themes: ['Authority', 'Strategy', 'Resourcefulness'] },
  9: { title: 'The Humanitarian', summary: 'Numerology interpretations often describe 9 through compassion, perspective and a generous sense of completion.', themes: ['Wisdom', 'Perspective', 'Service'] },
  11: { title: 'The Illuminator', summary: 'Often treated as a master number, 11 is traditionally associated with heightened awareness and inspired vision.', themes: ['Vision', 'Awareness', 'Inspiration'] },
  22: { title: 'The Architect', summary: 'Within numerology, 22 is often interpreted as the meeting point of vision and grounded execution.', themes: ['Scale', 'Purpose', 'Execution'] },
  33: { title: 'The Guide', summary: 'Some numerology traditions read 33 through compassion, teaching and the wish to uplift others.', themes: ['Teaching', 'Compassion', 'Influence'] },
};

export const getInterpretation = (number: number): Interpretation => numerologyInterpretations[number] ?? numerologyInterpretations[1];
