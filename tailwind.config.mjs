/** @type {import('tailwindcss').Config} */
import { screens as _screens, fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
export const theme = {
  screens: {
    'xs': '425px',
    ..._screens,
  },
  fontFamily: {
    'serif': _fontFamily.serif,
    'sans': ['"Rosario"', ..._fontFamily.sans],
    'mono': _fontFamily.mono
  },
  extend: {
    width: {
      'underfull': 'calc(100% - 1rem)',
    },
    colors: {
      buff: {
        100: '#c8b599',
        200: '#ffe9c8',
        300: '#ffefd8',
        400: '#fffbf5',
        500: '#fffdfa'
      },
      burgundy: {
        100: '#1a0006',
        200: '#400010',
        500: '#800020'
      }
    },
  },
}
export const plugins = [
  require('@tailwindcss/typography'),
]
