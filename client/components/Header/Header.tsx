import Brand from './Brand/Brand'
import FindSite from './FindSite/FindSite'
import NavigationList from './Navigation/Navigation'
import SliderPromotion from './SliderPromotion/SliderPromotion'
import Image from 'next/legacy/image'

const Header = () => {
  return (
    <div className='relative h-[952px]'>
      <div className='container relative z-10 flex'>
        <Brand />
        <FindSite />
        <NavigationList />
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
      />
    </div>
  )
}

export default Header
