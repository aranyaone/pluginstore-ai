// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // Violet 600
        accent: '#F472B6',  // Pink 400
        background: '#F8FAFC', // Slate 50
        surface: '#FFFFFF',
        text: '#1E293B', // Slate 800
        subtle: '#64748B', // Slate 400
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};