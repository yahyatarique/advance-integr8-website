module.exports = {
  content: [
  "./build/**/*.{html,js}"
  ],
  theme: {
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '425px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1728px',
      // => @media (min-width: 1728px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Eurostile', 'sans-serif'],
      },
      // Custom Colors
      colors: {
        'primary': '#0B0D17',
        'secondary': '#D0D6F9',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#C1C1C1',
        'primary-red': '#E6222F',
        'primary-faded-blue': '#406BCA',
        'primary-blue': '#102054',
        'secondary-dark': '#232323',
        'secondary-grey': '#C1C1C1',
      }
    },
  },
  plugins: [
  ],
}