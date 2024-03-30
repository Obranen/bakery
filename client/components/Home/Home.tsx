import FindSite from '../Header/FindSite/FindSite'
import AboutUs from './AboutUs/AboutUs'
import MainImg from './MainImg/MainImg'
import OurProduction from './OurProduction/OurProduction'
import SliderPromotion from './SliderPromotion/SliderPromotion'

const Home = () => {
  return (
    <main className='lg:bg-primaryLight'>
      <div className='relative xl:h-[952px] lg:h-[492px] lg:-mt-10 xl:mt-[-93px]'>
        <div className='container'>
          <SliderPromotion />
          <div className='md:mt-6 lg:hidden'>
            <FindSite />
          </div>
        </div>
        <MainImg />
      </div>
      <OurProduction />
      <AboutUs />
    </main>
  )
}

export default Home
