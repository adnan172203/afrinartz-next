/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 20s linear infinite reverse',
        'open-up':
          'transform ease-in-out transition-opacity opacity-100 duration-500 translate-x-0',
      },
      fontFamily: {
        gallient: ['var(--font-gallient)'],
        inter: ['var(--font-inter)'],
      },
    },
    screens: {
      xxl: { max: '1599px' },
      // => @media (max-width: 1599px) { ... }

      xl: { max: '1399px' },
      // => @media (max-width: 1399px) { ... }

      lg: { max: '1199px' },
      // => @media (max-width: 1199px) { ... }

      md: { max: '991px' },
      // => @media (max-width: 991px) { ... }

      sm: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      xs: { max: '575px' },
      // => @media (max-width: 575px) { ... }

      xxs: { max: '479px' },
      // => @media (max-width: 479px) { ... }

      xxxs: { max: '350px' },
      // => @media (max-width: 350px) { ... }
    },
  },
  plugins: [],
};
