/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],

  theme: {
    extend: {
      colors: {
        darkColor: '#8D493A',
        lightColor: '#F8EDE3',
      },
      fontSize: {
        bigNormal: '14px',
        normal: '12px',
      },
      screens: {
        xxl: '1440px',
        xl: '1200px',
        lg: '991px',
        md: '768px',
        sm: '640px',
        xs: '390px',
      },
    },
  },
  plugins: [],
};
