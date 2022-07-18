/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './js/**/*.{html,js}',
    './*.html'
  ],
  theme: {
    fontSize: {
      'bw-logo-size': '4rem'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        colourAqua1: 'hsl(189,90%,73%)',
        colourAqua2: 'hsl(210,51%,44%)',
        colourWhitish: 'hsl(211,78%,95%)',
      },
    },
  plugins: [],
  }
}