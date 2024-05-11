import NavigationItem from './NavigationItem/NavigationItem'
import { FC } from 'react'
import { navigationGetAll } from '@/fetch/navigation.fetch'
import { INavigationState } from '@/interface/navigation.interface'
import ErrorMessage from '@/components/ui/ErrorMessage/ErrorMessage'

interface INavigation {
  dropdownPosition?: string
}

const Navigation: FC<INavigation> = async ({ dropdownPosition = '' }) => {
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
        />
      ))}
    </ul>
  )
}

export default Navigation
