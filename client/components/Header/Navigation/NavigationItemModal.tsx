import {
  INavigationAttrState,
  INavigationModalAttrState,
} from '@/interface/navigation.interface'
import { FC } from 'react'
import NavigationLink from './NavigationItemLink'
import Auth from '@/components/Header/Auth/Auth'

interface INavigationItemModal {
  modals: INavigationModalAttrState
  navItem: INavigationAttrState
  lastIndex: number
  index: number
  nameModal: string
}

const NavigationItemModal: FC<INavigationItemModal> = ({
  modals,
  navItem,
  index,
  lastIndex,
  nameModal,
}) => {
  return (
    <>
      <NavigationLink modals={modals} navItem={navItem} lastIndex={lastIndex} index={index} />

      <dialog id={modals.modalId} className='modal'>
        <Auth nameModal={nameModal} />
      </dialog>
    </>
  )
}

export default NavigationItemModal
