'use client'

import ErrorMessage from '@/components/ui/ErrorPage'
import { navigationGet } from '@/fetch/navigation.fetch'
import { useAuthStore } from '@/store/useAuth.store'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import NavigationItem from './NavigationItem'

interface INavigation {
  dropdownPosition?: string
  nameModal?: string
}

const Navigation: FC<INavigation> = ({
  dropdownPosition = '',
  nameModal = 'my_tabs_1',
}) => {
  const isSignedIn = useAuthStore((state) => state.isSignedIn)

  const navigations = useQuery({
    queryKey: ['navigation', isSignedIn],
    queryFn: () => navigationGet(),
  })

  if (navigations.error) {
    return <ErrorMessage message={'Не удалось получить данные навигации!'} />
  }

  const navigationSort = navigations?.data?.data.sort(
    (a, b) => a.attributes.position - b.attributes.position
  )

  return (
    <ul className='m-[-3px]'>
      {navigationSort?.map((data, index) => (
        <NavigationItem
          key={data.id}
          navItem={data.attributes}
          lastIndex={navigationSort.length}
          index={index}
          dropdownPosition={dropdownPosition}
          nameModal={nameModal}
        />
      ))}
    </ul>
  )
}

export default Navigation
