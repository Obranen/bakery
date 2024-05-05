import { INavigationAttrState } from '@/interface/navigation.interface'
import { FC } from 'react'

interface INavigationItemModal {
  navItem: INavigationAttrState
}

const NavigationItemModal: FC<INavigationItemModal> = ({ navItem }) => {
  return (
    <dialog id={navItem.modalId} className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Hello!</h3>
        <p className='py-4'>Press ESC key or click the button below to close</p>
        <div className='modal-action'>
          <form method='dialog'>
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default NavigationItemModal
