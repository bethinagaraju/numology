/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFF0',
        cream: '#FCF5E5',
        champagne: '#F1E9D2',
        gold: '#CFB53B',
        'muted-gold': '#B09A32',
        bronze: '#8C7423',
        brown: '#4B382A',
        dark: '#362312',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
