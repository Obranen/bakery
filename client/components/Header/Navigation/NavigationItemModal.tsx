import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'
import {
  INavigationAttrState,
  INavigationModalAttrState,
} from '@/interface/navigation.interface'
import Logout from '@/components/auth/Logout'
import { hasCookie } from 'cookies-next'
import { FC } from 'react'
import NavigationLink from './NavigationItemLink'

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
  if (hasCookie('jwt')) return <Logout />
  return (
    <>
      <NavigationLink
        modals={modals}
        navItem={navItem}
        lastIndex={lastIndex}
        index={index}
      />
      <dialog id={modals.modalId} className='modal'>
        <div className='modal-box'>
          <div role='tablist' className='tabs tabs-bordered'>
            <input
              type='radio'
              name={nameModal}
              role='tab'
              className='tab'
              aria-label='SignIn'
              defaultChecked
            />
            <div role='tabpanel' className='tab-content col-span-2'>
              <SignIn />
            </div>

            <input
              type='radio'
              name={nameModal}
              role='tab'
              className='tab'
              aria-label='SignUp'
            />
            <div role='tabpanel' className='tab-content col-span-2'>
              <SignUp />
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default NavigationItemModal
