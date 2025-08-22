/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui'],
      },
      colors: {
        pastel: {
          mint: '#CDE7E2',
          lavender: '#E6E6FA',
          peach: '#FFD9C9',
          sky: '#CFE8FF',
          lilac: '#E5D4EF',
        }
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      }
    },
  },
  plugins: [],
}
