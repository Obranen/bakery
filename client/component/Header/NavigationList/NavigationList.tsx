import { navItems } from '@/data/navItems.data'
import NavigationDropdown from './NavigationDropdown/NavigationDropdown'
import NavigationItem from './NavigationItem/NavigationItem'
import ToggleTheme from './ToggleTheme/ToggleTheme'

const NavigationList = () => {
  return (
    <nav className='w-4/12 flex items-start justify-end mt-[5px]'>
      <ToggleTheme />
      <NavigationDropdown />
      {navItems.map((navItem, index) => (
        <NavigationItem
          key={navItem.id}
          navItem={navItem}
          lastIndex={navItems.length}
          index={index}
        />
      ))}
    </nav>
  )
}

export default NavigationList
