/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter_400Regular'],
        'inter-semibold': ['Inter_600SemiBold'],
        'inter-bold': ['Inter_700Bold'],
      },
      colors: {
        primary: '#4C6FFF',
        success: '#00C48C',
        danger: '#FF4D4D',
        brand: {
          indigo: '#4f46e5', // Indigo-600
          slate: '#0f172a', // Slate-900
        },
      },
    },
  },
  plugins: [],
};
