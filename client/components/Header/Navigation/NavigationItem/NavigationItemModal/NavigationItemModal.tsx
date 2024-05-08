import {
  INavigationAttrState,
  INavigationModalAttrState,
} from '@/interface/navigation.interface'
import { FC } from 'react'
import NavigationLink from '../NavigationItemLink/NavigationItemLink'

interface INavigationItemModal {
  modals: INavigationModalAttrState
  navItem: INavigationAttrState
  lastIndex: number
  index: number
}

const NavigationItemModal: FC<INavigationItemModal> = ({
  modals,
  navItem,
  index,
  lastIndex,
}) => {
  return (
    <>
      <NavigationLink modals={modals} navItem={navItem} lastIndex={lastIndex} index={index} />

      <dialog id={modals.modalId} className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>
            Press ESC key or click the button below to close
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default NavigationItemModal
