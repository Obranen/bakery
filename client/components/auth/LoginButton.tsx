'use client'

import Link from 'next/link'
import { FaRegUser } from 'react-icons/fa'

const LoginButton = () => {
  return (
    <li className='inline-block text-sm font-semibold text-tertiaryLight dark:text-tertiaryDark font-robotoRegular'>
      <Link
        href={'/dashboard/edit-user'}
        className='block [&>div]:hover:opacity-100 mr-2'
      >
        <div
          className='tooltip tooltip-bottom hover:text-highlightLight'
          data-tip='Кабинет'
        >
          <FaRegUser className='inline-block text-md' />
        </div>
      </Link>
    </li>
  )
}

export default LoginButton
