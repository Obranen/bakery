import localFont from 'next/font/local'

const abrilFatface = localFont({
  src: [
    {
      path: '../public/fonts/AbrilFatface-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-abrilFatface',
})

const robotoSerifRegular = localFont({
  src: [
    {
      path: '../public/fonts/RobotoSerif-Regular.ttf',
      weight: '500',
    },
  ],
  variable: '--font-robotoSerifRegular',
})

const caveatRegular = localFont({
  src: [
    {
      path: '../public/fonts/Caveat-Regular.ttf',
      weight: '500',
    },
  ],
  variable: '--font-caveatRegular',
})

const robotoRegular = localFont({
  src: [
    {
      path: '../public/fonts/Roboto-Regular.ttf',
      weight: '500',
    },
  ],
  variable: '--font-robotoRegular',
})

export const useFontHook = () => {
  return { abrilFatface, robotoSerifRegular, caveatRegular, robotoRegular }
}
