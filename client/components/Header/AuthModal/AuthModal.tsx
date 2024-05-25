import React, { FC } from 'react'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'

interface IAuthModalProps {
  nameModal: string
}

const AuthModal: FC<IAuthModalProps> = ({ nameModal }) => {
  return (
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
  )
}

export default AuthModal
