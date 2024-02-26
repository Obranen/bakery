import { navigation } from '@/data/navigation.data'
import NavigationDropdown from './NavigationDropdown/NavigationDropdown'
import NavigationItem from './NavigationItem/NavigationItem'
import ToggleTheme from './ToggleTheme/ToggleTheme'

const Navigation = () => {
  return (
    <nav className='w-4/12 flex items-start justify-end mt-[5px]'>
      <ToggleTheme />
      <NavigationDropdown />
      {navigation.map((navItem, index) => (
        <NavigationItem
          key={navItem.id}
          navItem={navItem}
          lastIndex={navigation.length}
          index={index}
        />
      ))}
    </nav>
  )
}

export default Navigation
