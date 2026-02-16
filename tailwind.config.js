/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#13ec6a',
        'primary-dark': '#0da84b',
        'primary-hover': '#0fb852',
        'background-light': '#f6f8f7',
        'background-dark': '#102217',
        'text-main': '#111814',
        'text-secondary': '#618971',
        'surface-light': '#ffffff',
        'surface-dark': '#1c2e24',
        'dark-green': '#0b3d20',
      },
      fontFamily: {
        display: ['Public Sans', 'sans-serif'],
        body: ['Public Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(19, 236, 106, 0.3)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
