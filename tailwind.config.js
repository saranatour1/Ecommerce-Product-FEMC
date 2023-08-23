/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-orange':'hsl(26, 100%, 55%)',
        'primary-pale-orange':'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue':'hsl(219, 9%, 45%)',
        'grayish-blue':'hsl(220, 14%, 75%)',
        'light-grayish-blue':'hsl(223, 64%, 98%)',
        'white':'hsl(0, 0%, 100%)',
        'black':'hsl(0, 0%, 0%)',
      },
      fontSize:{
        'p-small':'16px',

      },
      fontFamily:{
        'kumbh':['Kumbh Sans', 'sans-serif'],
      },
      fontWeight:{
        'c-normal':'400',
        'c-bold':'700',
      },
      screens:{
        'xs':'375px',
        'c-xl':'1440px',
      }
    },
  },
  plugins: [],
}

