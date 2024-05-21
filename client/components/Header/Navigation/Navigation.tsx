import ErrorMessage from '@/components/ui/ErrorMessage/ErrorMessage'
import { navigationGetAll } from '@/fetch/navigation.fetch'
import { INavigationState } from '@/interface/navigation.interface'
import { FC } from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import { navigation } from '@/data/navigation.data'
import { log } from 'console'

interface INavigation {
  dropdownPosition?: string
  activeEntry?: boolean
}

const Navigation: FC<INavigation> = async ({ dropdownPosition = '', activeEntry = true }) => {
  const navigation: INavigationState = await navigationGetAll()
  
  if (!navigation) {
    return <ErrorMessage message={'Навигация не загрузилась!'} />
  }

  const navigationSort = navigation.data.sort(
    (a, b) => a.attributes.position - b.attributes.position
  )

  return (
    <ul className='m-[-3px]'>
      {navigationSort.map((data, index) => (
        <NavigationItem
          key={data.id}
          navItem={data.attributes}
          lastIndex={navigation.data.length}
          index={index}
          dropdownPosition={dropdownPosition}
          activeEntry={activeEntry}
        />
      ))}
    </ul>
  )
}

export default Navigation
