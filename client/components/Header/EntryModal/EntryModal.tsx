import React, { FC } from 'react'
import Registration from './Registration/Registration'
import Login from './Login/Login'

interface IEntryModalProps {
  nameModal: string
}

const EntryModal: FC<IEntryModalProps> = ({ nameModal }) => {
  return (
    <div className='modal-box'>
      <div role='tablist' className='tabs tabs-bordered'>
        <input
          type='radio'
          name={nameModal}
          role='tab'
          className='tab'
          aria-label='Login'
          defaultChecked
        />
        <div role='tabpanel' className='tab-content col-span-2'>
          <Login />
        </div>

        <input
          type='radio'
          name={nameModal}
          role='tab'
          className='tab'
          aria-label='Registration'
        />
        <div role='tabpanel' className='tab-content col-span-2'>
          <Registration />
        </div>
      </div>

    </div>
  )
}

export default EntryModal
