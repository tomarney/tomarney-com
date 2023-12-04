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
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      ...defaultTheme.fontFamily
    },
    extend: {
      width: {
        'underfull': 'calc(100% - 1rem)',
      },
      colors: {
        primary: {
          light: '#33BBBB',
          DEFAULT: '#339999',
          dark: '#227777'
        },
        black: {
          DEFAULT: '#111111'
        },
      },
    },
  },
	plugins: [
		require('@tailwindcss/typography'),
	],
}
