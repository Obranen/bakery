import Brand from './Brand/Brand'
import FindSite from './FindSite/FindSite'
import NavigationList from './Navigation/Navigation'
import SliderPromotion from './SliderPromotion/SliderPromotion'
import WaveImage from './WaveImage/WaveImage'

const Header = () => {
  return (
    <div className='relative pb-[117px]'>
      <div className={'container relative z-10 flex'}>
        <Brand />
        <FindSite />
        <NavigationList />
      </div>
      <div className='container'>
        <SliderPromotion />
      </div>
      {/* <WaveImage /> */}
    </div>
  )
}

export default Header
