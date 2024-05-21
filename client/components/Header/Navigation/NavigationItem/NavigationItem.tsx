import { INavigationAttrState } from '@/interface/navigation.interface'
import { FC } from 'react'
import NavigationDropdown from './NavigationItemDropdown/NavigationItemDropdown'
import NavigationLink from './NavigationItemLink/NavigationItemLink'
import NavigationModal from './NavigationItemModal/NavigationItemModal'

interface INavigationItem {
  navItem: INavigationAttrState
  lastIndex: number
  index: number
  dropdownPosition?: string
  activeEntry?: boolean
}

const NavigationItem: FC<INavigationItem> = ({
  navItem,
  lastIndex,
  index,
  dropdownPosition = '',
  activeEntry
}) => {
  if (navItem.dropdowns.data.length) {
    return (
      <NavigationDropdown
        navItem={navItem}
        lastIndex={lastIndex}
        index={index}
        dropdownPosition={dropdownPosition}
      />
    )
  } else if (navItem.modals.data.length && activeEntry) {
    return navItem.modals.data.map((data) => (
      <NavigationModal key={data.id} modals={data.attributes} navItem={navItem} lastIndex={lastIndex} index={index} />
    ))
  } else {
    return (
      <NavigationLink navItem={navItem} lastIndex={lastIndex} index={index} />
    )
  }
}

export default NavigationItem
