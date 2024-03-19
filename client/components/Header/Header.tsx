import Brand from './Brand/Brand'
import FindSite from './FindSite/FindSite'
import MainImg from './MainImg/MainImg'
import Navigation from './Navigation/Navigation'
import SliderPromotion from './SliderPromotion/SliderPromotion'

const Header = () => {
  return (
    <header className='relative sm:h-[952px]'>
      <div className='container relative z-10 flex'>
        <Brand />
        <div className='hidden sm:flex sm:justify-center sm:w-4/12'>
          <FindSite />
        </div>
        <Navigation />
      </div>
      <div className='container'>
        <SliderPromotion />
        <div className='sm:hidden'>
          <FindSite />
        </div>
      </div>
      <div className='hidden sm:block'>
        <MainImg />
      </div>
    </header>
  )
}

export default Header
