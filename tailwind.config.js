/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'dark-primary': '#605CFF',
      'dark-secondary': '#FF69B4',
      'dark-accent': '#2FE5A7',
      'dark-neutral': '#FFFFFF',
      'dark-grey': '#364153',
      'dark-bg': '#1A202C',
      'light-primary': '#3A36DB',
      'light-secondary': '#FF69B4',
      'light-accent': '#03A89E',
      'light-text': '#06152B',
      'light-text-light': '#99B2C6',
      'light-neutral': '#FFFFFF',
      'light-bg': '#F1F4FA',
      transparent: 'transparent'
    },
    fontFamily: {
      DMSans: ['DMSans', 'sans-serif']
    },
    spacing: {
      0: '0rem',
      1: '0.313rem',
      2: '0.625rem',
      3: '0.938rem',
      4: '1.25rem',
      5: '1.563rem',
      6: '1.875rem',
      7: '2.5rem',
      8: '3.125rem',
      9: '3.75rem'
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
