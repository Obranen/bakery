import WaveSVG from '@/public/images/svg/WaveSVG'
import FindSite from '../header/FindSite'
import AboutUs from './aboutUs/AboutUs'
import MainImg from './MainImg'
import OurProduction from './OurProduction/OurProduction'
import SliderPromotion from './SliderPromotion/SliderPromotion'

const Home = () => {
  return (
    <div className='lg:bg-primaryLight'>
      <div className='relative lg:h-[459px] lg:-mt-10 xl:h-[555px] lg:bg-secondaryLight 2xl:h-[650px] 2xl:mt-[-30px] 3xl:h-[886px] 3xl:mt-[-93px]'>
        <div className='container'>
          <SliderPromotion />
          <div className='md:mt-6 lg:hidden'>
            <FindSite />
          </div>
        </div>
        <MainImg />
      </div>
      <WaveSVG className='w-full xl:-m-0.5' fill='#f6eee8' />
      <OurProduction />
      <AboutUs />
    </div>
  )
}

export default Home
