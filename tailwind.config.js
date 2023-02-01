/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077C0',
        secondary: '#7A61FF',
        lightSky: '#C7EEFF',
        customBlack: '#0A2942',
        lightGray: '#f8f8f8',
        defaultGray: '#636B78',
      },
    },
  },
  plugins: [],
};
