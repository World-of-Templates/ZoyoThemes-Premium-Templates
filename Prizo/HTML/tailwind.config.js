const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
  ],
  important: true,
  theme: {
    
    fontFamily: {
      poppins: ['"Poppins", sans-serif'],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '3rem',
        '2xl': '8rem',
      },
    },
    extend: {
      colors: {
        'primary': "#2D504B",
        'primary-light': "#dae5d9",
        'dark': "#010110",
        'secondary': "#060426",
        'light': "#f5f4f1",
        'light-muted': '#8492a6',
        'black': "#000000",
        'muted': '#707070'
      },

      boxShadow: {
        DEFAULT: '0 0 10px rgb(0 0 0 / 0.10)',
        sm: '0px 2px 6px 0px rgba(60, 72, 88, 0.15)',
      },

      spacing: {
        0.75: "0.1875rem",
        3.25: "0.8125rem",
      },
      
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        999: "999",
      },
    },
  },
  plugins: [
    require("preline/plugin"),
  ],
};
