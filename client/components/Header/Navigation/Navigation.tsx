import NavigationItem from './NavigationItem/NavigationItem'
import { FC } from 'react'
import { navigationGetAll } from '@/fetch/navigation.fetch'
import { INavigationState } from '@/interface/navigation.interface'

interface INavigation {
  dropdownPosition?: string
}

const Navigation: FC<INavigation> = async ({ dropdownPosition = '' }) => {
  const navigation = await navigationGetAll()

  return (
    <ul className='m-[-3px]'>
      {navigation.data.map((data: INavigationState, index: number) => (
        <NavigationItem
          key={data.id}
          navItem={data.attributes}
          lastIndex={navigation.length}
          index={index}
          dropdownPosition={dropdownPosition}
        />
      ))}
    </ul>
  )
}

export default Navigation
