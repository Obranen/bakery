'use client'

import { useAuthStore } from '@/store/useAuth.store'
import { deleteCookie } from 'cookies-next'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'

const Logout = () => {
  const setIsSignedIn = useAuthStore((state) => state.setIsSignedIn)
  const userLogout = () => {
    deleteCookie('jwt')
    setIsSignedIn(false)
  }
  return (
    <li className='inline-block text-sm font-semibold text-tertiaryLight dark:text-tertiaryDark font-robotoRegular'>
      <Link
        onClick={userLogout}
        href={'/'}
        className='block [&>div]:hover:opacity-100 mr-2'
      >
        <div className='tooltip tooltip-bottom hover:text-highlightLight' data-tip='Выход'>
          <FiLogOut className='inline-block text-base ' />
        </div>
      </Link>
    </li>
  )
}

export default Logout
