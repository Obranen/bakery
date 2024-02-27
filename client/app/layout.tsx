import ProviderLayout from '@/library/ProviderLayout'
import './globals.css'
import { useFontHook } from '@/hook/useFont.hook'
import Footer from '@/component/Footer/Footer'
import Header from '@/component/Header/Header'

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
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </ProviderLayout>
    </html>
  )
}
