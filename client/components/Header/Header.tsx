import Brand from './Brand/Brand'
import FindSite from './FindSite/FindSite'
import Navigation from './Navigation/Navigation'
import ToggleTheme from './ToggleTheme/ToggleTheme'

const Header = () => {
  return (
    <header>
      <div className='container relative z-10 flex'>
        <Brand />
        <div className='hidden sm:flex sm:justify-center sm:w-4/12'>
          <FindSite />
        </div>
        <div className='items-start justify-end w-4/12 mt-[6px] font-robotoRegular hidden sm:flex'>
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
