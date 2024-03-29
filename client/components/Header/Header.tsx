import Brand from './Brand/Brand'
import FindSite from './FindSite/FindSite'
import Navigation from './Navigation/Navigation'
import ToggleTheme from './ToggleTheme/ToggleTheme'

const Header = () => {
  return (
    <header>
      <div className='container relative z-10 flex'>
        <Brand />
        <div className='hidden lg:flex lg:justify-center lg:w-4/12'>
          <FindSite />
        </div>
        <div className='items-center justify-end hidden lg:items-start lg:w-4/12 md:w-8/12 mt-[6px] font-robotoRegular md:flex'>
          <ToggleTheme />
          <nav>
            <Navigation />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
