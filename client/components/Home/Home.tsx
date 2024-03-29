import FindSite from '../Header/FindSite/FindSite'
import AboutUs from './AboutUs/AboutUs'
import MainImg from './MainImg/MainImg'
import OurProduction from './OurProduction/OurProduction'
import SliderPromotion from './SliderPromotion/SliderPromotion'

const Home = () => {
  return (
    <main>
      <div className='relative lg:h-[952px] lg:mt-[-93px]'>
        <div className='container'>
          <SliderPromotion />
          <div className='md:mt-6 lg:hidden'>
            <FindSite />
          </div>
        </div>
        <div className='hidden lg:block'>
          <MainImg />
        </div>
      </div>
      <OurProduction />
      <AboutUs />
    </main>
  )
}

export default Home
