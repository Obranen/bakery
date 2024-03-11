import NavigationList from './NavigationList/NavigationList'
import ToggleTheme from './ToggleTheme/ToggleTheme'

const Navigation = () => {
  return (
    <nav className='flex items-start justify-end w-4/12 mt-[6px] font-robotoRegular'>
      <ToggleTheme />
      <NavigationList />
    </nav>
  )
}

export default Navigation
