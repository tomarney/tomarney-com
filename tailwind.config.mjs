/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '425px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'serif': ['"Roboto Serif"', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      'sans' : defaultTheme.fontFamily.sans,
      'mono' : defaultTheme.fontFamily.mono
    },
    extend: {
      width: {
        'underfull': 'calc(100% - 1rem)',
      },
      colors: {
        buff: {
          100: '#c8b599',
          200: '#ffe9c8',
          500: '#fffdfa'
        },
        burgundy: {
          100: '#1a0006',
          200: '#400010',
          500: '#800020'
        }
      },
    },
  },
	plugins: [
		require('@tailwindcss/typography'),
	],
}
