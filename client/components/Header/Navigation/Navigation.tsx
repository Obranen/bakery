import NavigationList from './NavigationList/NavigationList'
import ToggleTheme from './ToggleTheme/ToggleTheme'

const Navigation = () => {
  return (
    <nav className='items-start justify-end w-4/12 mt-[6px] font-robotoRegular hidden sm:flex'>
      <ToggleTheme />
      <NavigationList />
    </nav>
  )
}

export default Navigation
