/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryy: '#ff6347',
        lightGrey: '#FCF8FF',
        grey: '#EEE9F0',
        medium: '#9F9AA1',
        green: '#437919',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
