/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 1px 9px -3px rgba(0,0,0,0.6)', 
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      backgroundImage: (theme) => ({
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8))',
        'hero-pattern': "url('./images/team.jpg')",
      }),
    },
    fontFamily:{
      lora: "'lora', serif",
      roboto : "'Roboto', sans-serif",
      Lugrasimo: "'Lugrasimo', cursive"

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'night': '#2b2b2b',
      'metal': '#565584',
      'grey': '#404145',
      'dim-grey': '#696969',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
}

