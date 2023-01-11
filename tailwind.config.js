const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    extend: {
      colors: {
        'light-primary-0': '#dcdad7',
        'light-primary-1': '#dcaaab',
        'light-primary-2': '#36C1D6',
        'light-primary-3': '#36C1D6',
        'light-primary-4': '#D6C960',
        'light-primary-5': '#8A2254',
        'light-primary-6': '#ED47EA',
        'light-primary-7': '#B944E3',
        'light-primary-8': '#ED4847',
        'light-primary-9': '#E35C44',
        'light-primary-success': '#67D640',
        'light-primary-start': '#d54b8e',
        'light-primary-end': '#d64c59',
      },
      fontFamily: {
        raleway: ['var(--raleway-font)', ...fontFamily.sans],
        merriweather: ['var(--merriweather-font)', ...fontFamily.serif],
        lato: ['var(--lato-font)', ...fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
