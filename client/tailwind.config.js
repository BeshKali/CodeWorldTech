const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          '3xl': '1536px',
        },
        padding: {
          DEFAULT: '0.2rem',
          sm: '0.2rem',
          md: '0.3rem',
          lg: '0.4rem',
          xl: '0.5rem',
          '2xl': '0.6rem',
          '3xl': '0.7rem',
        },
      },
      colors: {
        'primary-teal': "#23B6AE",
        'secondary-teal': "#e9f8f8",
        'secondary-blue': "#1D5CCD",
        'light-teal': "#e9f8f8",
        'body': "#848484",
        'primary-black': '#142441',
        'dark-blue': '#06194B',
      },
      fontFamily: {
        'barlow': "Barlow",
        'open-sans': "Open Sans",
      },
      backgroundImage: {
        'testimonial-bg': "url('')",
        'clinical-services-bg': "url('https://i.ibb.co/zQNV0DJ/funfact-1.jpg')",
        'header-bg': "url('https://i.ibb.co/b1L2S0v/page-title.jpg')",
      },
    },
  },
  plugins: [
    require("daisyui"), // Ensure this is correctly imported
  ],
  
});