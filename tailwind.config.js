/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'charcoal': '#1F1F1F',
      'sidebar': '#171717',
      'white': '#FFFFFF',
      'black': '#000000',
      'primary': '#436981',
      'primary-dark': '#29404E',
      'secondary': '#B2E2F3',
      'accent': '#F9E8AF',
    },
    extend: {
      fontFamily: {
        onest: ['Onest','sans-serif'],
        playfair: ['Playfair', 'serif'],
      }
    },
  },
  plugins: [],
}

