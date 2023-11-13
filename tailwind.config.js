module.exports = {
  content: [
  "./build/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'],
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