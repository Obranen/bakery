import Brand from './Brand/Brand'
import FindSite from './FindSite/FindSite'
import Navigation from './Navigation/Navigation'
import SliderPromotion from './SliderPromotion/SliderPromotion'
import Image from 'next/legacy/image'

const Header = () => {
  return (
    <header className='relative h-[952px]'>
      <div className='container relative z-10 flex'>
        <Brand />
        <FindSite />
        <Navigation />
      </div>
      <div className='container'>
        <SliderPromotion />
      </div>
      <Image
        src='/images/main-header.webp'
        alt='main-header'
        priority
        layout='fill'
        objectFit='cover'
        quality={100}
        className='opacity-90'
      />
    </header>
  )
}

export default Header
