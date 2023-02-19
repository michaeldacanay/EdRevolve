// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#B2B2B2',
          500: '#8F8F8F',
          600: '#7D7D7D',
          700: '#6A6A6A',
          800: '#585858',
          900: '#474747',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


