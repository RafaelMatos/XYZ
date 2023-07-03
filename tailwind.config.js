/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        bounceOpacited: {
          '0%': {
            content: 'var(--tw-content)',
            transform: 'translateY(-25%)',
            opacity: '0.2',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            content: 'var(--tw-content)',
            transform: 'none',
            opacity: '0.9',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
          '100%': {
            content: 'var(--tw-content)',
            transform: 'translateY(-25%)',
            opacity: '0.2',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'bounce-opacited': 'bounceOpacited 2s infinite',
      },
    },
  },
  plugins: [],
}
