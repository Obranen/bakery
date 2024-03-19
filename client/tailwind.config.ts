import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '1.5rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1686px',
      },
      colors: {
        primaryLight: '#fcfcfc',
        secondaryLight: '#f5efe6',
        tertiaryLight: '#000000',
        highlightLight: '#e05810',
        brandViaLight: '#ff955c',

        primaryDark: '#fcfcfc',
        secondaryDark: '#f5efe6',
        tertiaryDark: '#ffffff',
        highlightDark: '#eb7333',
        brandViaDark: '#ff955c',
      },
      fontFamily: {
        abrilFatface: ['var(--font-abrilFatface)'],
        robotoSerifRegular: ['var(--font-robotoSerifRegular)'],
        caveatRegular: ['var(--font-caveatRegular)'],
        robotoRegular: ['var(--font-robotoRegular)'],
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          // primary: '#a991f7',
          // secondary: '#f6d860',
          // accent: '#37cdbe',
          // neutral: '#3d4451',
          // ghost: '#f5efe6',
          'base-100': '#fcfcfc', //bg

          // "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          // "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          // "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          // "--animation-btn": "0.25s", // duration of animation when you click on button
          // "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          // "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          // "--border-btn": "1px", // border width of buttons
          // "--tab-border": "1px", // border width of tabs
          // "--tab-radius": "0.5rem", // border radius of tabs
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          // primary: '#00d9ff',
          // secondary: '#7c0025',
          // accent: '#3942c7',
          // neutral: '#a5abb6',
          'base-100': '#353535',
        },
      },
    ],
  },
}
export default config
