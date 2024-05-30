import { INavigationAttrState } from '@/interface/navigation.interface'
import { FC } from 'react'
import NavigationDropdown from './NavigationItemDropdown'
import NavigationLink from './NavigationItemLink'
import NavigationModal from './NavigationItemModal'

interface INavigationItem {
  navItem: INavigationAttrState
  lastIndex: number
  index: number
  dropdownPosition?: string
  nameModal: string
}

const NavigationItem: FC<INavigationItem> = ({
  navItem,
  lastIndex,
  index,
  dropdownPosition = '',
  nameModal
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
  } else if (navItem.modals.data.length) {
    return navItem.modals.data.map((data) => (
      <NavigationModal
        key={data.id}
        modals={data.attributes}
        navItem={navItem}
        lastIndex={lastIndex}
        index={index}
        nameModal={nameModal}
      />
    ))
  } else {
    return (
      <NavigationLink navItem={navItem} lastIndex={lastIndex} index={index} />
    )
  }
}

export default NavigationItem
