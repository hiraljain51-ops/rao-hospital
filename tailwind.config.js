/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#776492',
          light: '#9b84b0',
          dark: '#5a4d6f',
          50: '#f4f1f7',
          100: '#e8e1f0',
        },
        pink: {
          DEFAULT: '#f26b77',
          light: '#f5909a',
          50: '#fef2f3',
        },
        gray: {
          light: '#d9d9d9',
          mid: '#545454',
          soft: '#f8f7fa',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
