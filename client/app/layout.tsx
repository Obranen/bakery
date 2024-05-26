import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ToastMessage from '@/components/ui/ToastMessage'
import { useFontHook } from '@/hooks/useFont.hook'
import ProviderLayout from '@/library/ProviderLayout'
import './globals.css'

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
        <ToastMessage />
        <Footer />
      </ProviderLayout>
    </html>
  )
}
