/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1320px',
    },
    extend: {
      fontFamily: {
        azeret: ['"Azeret Mono"', 'monospace'],
        sanstc: ['"Noto Sans TC"', 'sans-serif'],
      },
      colors: {
        black: '#000',
        white: '#fff',
        'ct-dark': '#1C1C1C',
        'ct-dark-light': '#2D2D2D',
        'ct-blue': '#09ACF5',
        'ct-green': '#62DB54',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
      },
    },
  },
  plugins: [],
};
