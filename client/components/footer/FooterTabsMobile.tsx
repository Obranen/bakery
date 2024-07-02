import CartSVG from '@/public/images/svg/CartSVG'
import HomeSVG from '@/public/images/svg/HomeSVG'
import MenuSVG from '@/public/images/svg/MenuSVG'
import VectorSVG from '@/public/images/svg/VectorSVG'
import Link from 'next/link'

const FooterTabsMobile = () => {
  return (
    <nav className='bg-primaryLight md:hidden'>
      <ul className='container flex justify-between pt-1'>
        <li className='flex flex-col items-center justify-center hover:text-highlightLight [&>svg]:hover:fill-highlightLight'>
          <HomeSVG className='inline-block w-5 h-5' />
          <Link href='' className='inline-block text-xs font-robotoRegular'>
            Головна
          </Link>
        </li>
        <li className='flex flex-col items-center justify-center hover:text-highlightLight [&>svg]:hover:fill-highlightLight'>
          <VectorSVG className='inline-block w-5 h-5' />
          <Link href='' className='inline-block text-xs font-robotoRegular'>
            Продукція
          </Link>
        </li>
        <li className='flex flex-col items-center justify-center hover:text-highlightLight [&>svg]:hover:fill-highlightLight'>
          <CartSVG className='inline-block w-5 h-5' />
          <Link href='' className='inline-block text-xs font-robotoRegular'>
            Кошик
          </Link>
        </li>
        <li className='flex flex-col items-center justify-center hover:text-highlightLight [&>svg]:hover:fill-highlightLight'>
          <MenuSVG className='inline-block w-5 h-5' />
          <Link href='' className='inline-block text-xs font-robotoRegular'>
            Ще
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default FooterTabsMobile
