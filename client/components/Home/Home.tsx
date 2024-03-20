import FindSite from '../Header/FindSite/FindSite'
import AboutUs from './AboutUs/AboutUs'
import MainImg from './MainImg/MainImg'
import OurProduction from './OurProduction/OurProduction'
import SliderPromotion from './SliderPromotion/SliderPromotion'

const Home = () => {
  return (
    <main>
      <div className='relative sm:h-[952px] mt-[-93px]'>
        <div className='container'>
          <SliderPromotion />
          <div className='sm:hidden'>
            <FindSite />
          </div>
        </div>
        <div className='hidden sm:block'>
          <MainImg />
        </div>
      </div>
      <OurProduction />
      <AboutUs />
    </main>
  )
}

export default Home
