import { navigation } from '@/data/navigation.data'
import NavigationItem from './NavigationItem/NavigationItem'
import { FC } from 'react'

interface INavigation {
  dropdownPosition?: string
}

const Navigation: FC<INavigation> = ({ dropdownPosition = '' }) => {
  return (
    <ul className='m-[-3px]'>
      {navigation.map((navItem, index) => (
        <NavigationItem
          key={navItem.id}
          navItem={navItem}
          lastIndex={navigation.length}
          index={index}
          dropdownPosition={dropdownPosition}
        />
      ))}
    </ul>
  )
}

export default Navigation
