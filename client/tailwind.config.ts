import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '3xl': '1640px',
      },
      colors: {
        myDefaultLight: '#fcfcfc',
        myPrimaryLight: '#f5efe6',
        mySecondaryLight: '#000000',
        myHighlightLight: '#e05810',

        myDefaultDark: '#fcfcfc',
        myPrimaryDark: '#f5efe6',
        mySecondaryDark: '#000000',
        myHighlightDark: '#e05810',
      },
      fontFamily: {
        abrilFatface: ['var(--font-abrilFatface)'],
        robotoSerifRegular: ['var(--font-robotoSerifRegular)'],
        caveatRegular: ['var(--font-caveatRegular)'],
        robotoRegular: ['var(--font-robotoRegular)'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#a991f7',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          "--bg-primary": "red",
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#00d9ff',
          secondary: '#7c0025',
          accent: '#3942c7',
          neutral: '#a5abb6',
          'base-100': '#000',
        },
      },
    ],
  },
}
export default config
