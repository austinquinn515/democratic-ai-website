/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1726',
        coral: '#FF6B57',
        'coral-lt': '#FF8C7A',
        'brand-blue': '#2D5BFF',
        'brand-blue-lt': '#6E8BFF',
        mute: '#5B6677',
        paper: '#F4F6FA',
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'Arial', 'sans-serif'],
      },
      opacity: {
        '4': '0.04',
        '8': '0.08',
        '16': '0.16',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        eyebrow: '0.15em',
      },
      lineHeight: {
        body: '1.7',
        heading: '1.08',
      },
    },
  },
  plugins: [],
};
