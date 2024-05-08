'use client'

import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import { INavigationAttrState, INavigationModalAttrState } from '@/interface/navigation.interface'
import Link from 'next/link'

interface INavigationItemLink {
  navItem: INavigationAttrState
  lastIndex: number
  index: number
  modals?: INavigationModalAttrState
}

const NavigationItemLink: FC<INavigationItemLink> = ({ navItem, index, lastIndex, modals }) => {
  const pathname = usePathname()

  return (
    <>
      <li className='inline-block text-sm font-semibold text-tertiaryLight dark:text-tertiaryDark font-robotoRegular'>
        <Link
          href={navItem.href}
          className={
            pathname == navItem.href
              ? 'block text-highlightLight'
              : 'block [&>div]:hover:opacity-100'
          }
          onClick={() =>
            navItem.modals.data.length &&
            document.getElementById(modals.modalId).showModal()
          }
        >
          {navItem.title}
          <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight'></div>
        </Link>
      </li>
      {lastIndex - 1 !== index ? (
        <span className='w-0.5 h-[16px] translate-y-[3px] mx-2 bg-tertiaryLight inline-block dark:bg-tertiaryDark'></span>
      ) : (
        <></>
      )}
    </>
  )
}

export default NavigationItemLink
