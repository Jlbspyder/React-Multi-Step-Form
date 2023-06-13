/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '967px',
      xl: '1440px'
    },
    extend: {
      colors: {
        MarineBlue: 'hsl(213, 96%, 18%)',
        PurplishBlue: 'hsl(243, 100%, 62%)',
        PastelBlue: 'hsl(228, 100%, 84%)',
        LightBlue: 'hsl(206, 94%, 87%)',
        StrawberryRed: 'hsl(354, 84%, 57%)',
        CoolGray: 'hsl(231, 11%, 63%)',
        LightGray: 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        White: 'hsl(0, 0%, 100%)',
        Hover: 'hsl(243, 100%, 20%)' 
      }
    },
  },
  plugins: [],
}

