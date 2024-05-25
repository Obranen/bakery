import React, { FC } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'

interface IAuthProps {
  nameModal: string
}

const Auth: FC<IAuthProps> = ({ nameModal }) => {
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

export default Auth
