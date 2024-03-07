import { navigation } from '@/data/navigation.data'
import NavigationItem from './NavigationItem/NavigationItem'
import ToggleTheme from './ToggleTheme/ToggleTheme'

const Navigation = () => {
  return (
    <nav className='flex items-start justify-end w-4/12 mt-[6px] font-robotoRegular'>
      <ToggleTheme />
      <ul className='m-[-3px]'>
        {navigation.map((navItem, index) => (
          <NavigationItem
            key={navItem.id}
            navItem={navItem}
            lastIndex={navigation.length}
            index={index}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
