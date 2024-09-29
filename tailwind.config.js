/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      screens : {
        "tablet" : "768px",
        "laptop" :"1024px",
        "desktop":"1366px",
        "desktop2":"1442px",
      },
      fontSize:{
        "11": "0.6875rem" ,
        "14":"0.875rem",
        "16":"1rem",
        "18" : "1.125rem",
        "20" : "1.250rem",
        "23" :"1.4375rem",
        "26" :"1.625rem",
        "29":"1.812rem",
        "32":"2rem",
        "41":"2.562rem",
        "48":"3rem",
      },
      boxShadow:{
        "inner_hero" :"inset 0px 100px 25px 0px rgba(0,0,0,0.5)",
        "search" : "0px 2px 8px 0px rgba(0,0,0,0.2)",
        "input" : " inset 0px 0px 4px 0px rgba(0,0,0,0.15)",
        "input_hover_red_50" : "inset 0px 0px 0px 1px rgba(254,226,226,1)",
        "input_active_red_50" : "inset 0px 0px 0px 1px rgba(64,64,64,1)",
      },
      colors : {
        whit : "#F8F7F4",
      },
      fontFamily:{
        metro : ['Metropolis', 'sans-serif']
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
}

