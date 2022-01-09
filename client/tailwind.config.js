module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'sajat': {
        100: '#ffbb6c',
        200: '#d4896a',
        300: '#9f6c66',
        400: '#503c52',
        500: '#262335',
      },
    },
    screens: {
      'sm': {'min': '180', 'max': '767px'},
      // => @media (min-width: 180px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}