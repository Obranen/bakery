import ProviderLayout from '@/library/ProviderLayout'
import './globals.css'
import { useFontHook } from '@/hooks/useFont.hook'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { abrilFatface, caveatRegular, robotoRegular, robotoSerifRegular } =
    useFontHook()

  return (
    <html
      lang='en'
      className={`${robotoSerifRegular.variable} ${abrilFatface.variable} ${caveatRegular.variable} ${robotoRegular.variable}`}
    >
      <ProviderLayout>
        <Header />
        {children}
        <Footer />
      </ProviderLayout>
    </html>
  )
}
