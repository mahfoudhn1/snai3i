/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}"
  ],
  theme: {
    extend: {
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
      'tahiti': '#3ab7bf',
      'dim-grey': '#696969',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [],
}

