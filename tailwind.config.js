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
        'light-primary-0': '#F37C9D',
        'light-primary-1': '#A36CD9',
        'light-primary-2': '#D7F0EE',
        'light-primary-3': '#80F0E4',
        'light-primary-4': '#FFCF7A',
        'light-primary-start': '#D7F0EE',
        'light-primary-end': '#E9E0F8',
        'light-sec-start': '#F7779F',
        'light-sec-mid': '#DBA386',
        'light-sec-end': '#BAC686',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
