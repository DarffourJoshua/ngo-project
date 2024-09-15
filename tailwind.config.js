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
        fadeInLeft: {
          '0%' : {
            opacity: '0',
            webkitTransform: 'translate3d(-100%, 0, 0)',
            transform: 'translate3d(-100%, 0, 0)',
          },
          '100%' : {
            opacity: '1',
            webkitTransform: 'none',
            transform: 'none',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            webkitTransform: 'translate3d(100%, 0, 0)',
            transform: 'translate3d(100%, 0, 0)',
          },
          '100%': {
            opacity: '1',
            webkitTransform: 'none',
            transform: 'none',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            webkitTransform: 'translate3d(0, -100%, 0)',
            transform: 'translate3d(0, -100%, 0)',
          },
          '100%': {
            opacity: '1',
            webkitTransform: 'none',
            transform: 'none',
          },
        },
        fadeInUp: {
          '0%' : {
            opacity: 0,
            webkitTransform: 'translate3d(0, 100%, 0)',
            transform: 'translate(0, 100%, 0)'
          }
        }
      },
      animation: {
        slidein: 'slidein 2s linear 2s normal',
        slideup: 'slideup 2s cubic-bezier(0.7, 0, 0.84, 0) 3s 1 normal none',
        fadeInLeft: 'fadeInLeft 2s both',
        fadeInRight: 'fadeInRight 2s both',
        fadeInDown: 'fadeInDown 2s both',
        fadeInUp: 'fadeInDown 2s both'
      },
    },
  },
  plugins: [],
}

