const { transform } = require('next/dist/build/swc');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        slidein: {
          "0%": {
            transform: "translateX(-100px)",
          },
          
          "50%" :{
            transform: "translateX(-50px)"
          },

          "100%" :{
            transform: "translateX(0)"
          },
        },
        slideup : {
          '0%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-45px)'
          },
          // '75%': {
          //   transform: 'translateY(-75px)'
          // },
        },
      },
      animation: {
        slidein: 'slidein 4s linear 3s 1 normal none',
        slideup: 'slideup 5s cubic-bezier(0.7, 0, 0.84, 0) 3s 1 normal none',
      },
    },
  },
  plugins: [],
};
