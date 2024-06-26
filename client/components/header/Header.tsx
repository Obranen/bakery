import Brand from './Brand'
import FindSite from './FindSite'
import Navigation from '../navigation/Navigation'
import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <header className='bg-secondaryLight pb-2'>
      <div className='container relative z-10 flex justify-between lg:justify-around 3xl:justify-between'>
        <Brand />
        <div className='hidden lg:flex lg:justify-center'>
          <FindSite />
        </div>
        <div className='items-center justify-end hidden lg:items-start mt-[6px] font-robotoRegular md:flex'>
          <ToggleTheme />
          <nav tabIndex={0} aria-label='Основная.'>
            <Navigation />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
