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
}

const NavigationItem: FC<INavigationItem> = ({
  navItem,
  lastIndex,
  index,
  dropdownPosition = '',
}) => {
  if (navItem.isDropdown === true) {
    return (
      <NavigationDropdown
        navItem={navItem}
        lastIndex={lastIndex}
        index={index}
        dropdownPosition={dropdownPosition}
      />
    )
  } else if (navItem.isModal === true) {
    return (
      <>
        <NavigationLink navItem={navItem} lastIndex={lastIndex} index={index} />
        <NavigationModal navItem={navItem} />
      </>
    )
  } else {
    return (
      <NavigationLink navItem={navItem} lastIndex={lastIndex} index={index} />
    )
  }
}

export default NavigationItem
