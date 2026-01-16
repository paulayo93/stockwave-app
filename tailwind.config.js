/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter_400Regular'],
        'inter-bold': ['Inter_700Bold'],
      },
      colors: {
        primary: '#4C6FFF',
        success: '#00C48C',
        danger: '#FF4D4D',
      },
    },
  },
  plugins: [],
};
