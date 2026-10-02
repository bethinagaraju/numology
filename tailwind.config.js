/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FDFBF7',
        ivory: '#FDFBF7',
        'soft-ivory': '#FEFCF8',
        terracotta: '#87533E',
        gold: '#C5934D',
        'secondary-gold': '#CDA66F',
        'deep-charcoal': '#060606',
        'dark-brown-charcoal': '#363637',
        'warm-gray': '#363637',
        'soft-gray': '#F2EFEB',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
