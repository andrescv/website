/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        wave: 'wave 2.5s infinite',
      },
      backgroundImage: {
        'acv-linear': 'linear-gradient(98.41deg, #4568DC 0%, #B06AB3 100%)',
      },
      colors: {
        acv: {
          black: '#090E16',
          white: '#FAFAFA',
          purple: '#6366F1',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '5%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      maxWidth: {
        'sm': '40rem',
        'md': '48rem',
        'lg': '64rem',
        'xl': '80rem',
        '2xl': '90rem',
      },
      screens: {
        'sm': '40em',
        'md': '48em',
        'lg': '64em',
        'xl': '80em',
        '2xl': '90em',
      },
    },
  },
  plugins: [],
};
