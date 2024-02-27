import Brand from './Brand/Brand'
import FindSite from './FindSite/FindSite'
import NavigationList from './Navigation/Navigation'
import Image from 'next/image'
import SliderPromotion from './SliderPromotion/SliderPromotion'

const Header = () => {
  return (
    <div className='relative bg-myPrimaryLight'>
      <div className={'container relative z-10 flex'}>
        <Brand />
        <FindSite />
        <NavigationList />
      </div>
      <div className='container'>
        <SliderPromotion />
      </div>
      {/* <Image
          src='/image/wave.jpg'
          width={1920}
          height={60}
          alt='wave'
          className={
            'w-[1920px] h-[60px] absolute bottom-[-60px] left-[0px]'
          }
        /> */}
    </div>
  )
}

export default Header
