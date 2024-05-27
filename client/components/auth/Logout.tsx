'use client'

import { deleteCookie } from 'cookies-next'
import Link from 'next/link'

const Logout = () => {
  const userLogout = () => {
    deleteCookie('jwt')
  }
  return (
    <>
      <li className='inline-block text-sm font-semibold text-tertiaryLight dark:text-tertiaryDark font-robotoRegular'>
        <Link
          onClick={userLogout}
          href={'/'}
          className='block [&>div]:hover:opacity-100'
        >
          Выйти
          <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight'></div>
        </Link>
      </li>
      <span className='w-0.5 h-[16px] translate-y-[3px] mx-2 bg-tertiaryLight inline-block dark:bg-tertiaryDark'></span>
    </>
  )
}

export default Logout
