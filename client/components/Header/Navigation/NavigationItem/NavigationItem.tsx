'use client'

import { INavigation } from '@/interface/navigation.interface'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface INavigationItem {
  navItem: INavigation
  lastIndex: number
  index: number
}

const NavigationItem: FC<INavigationItem> = ({ navItem, lastIndex, index }) => {
  const pathname = usePathname()

  return navItem.dropdown === true ? (
    <li className='dropdown dropdown-hover'>
      <div
        tabIndex={0}
        role='button'
        className='p-0 font-semibold text-[15px] font-robotoRegular text-tertiaryLight dark:text-tertiaryDark'
      >
        {navItem.title}
        {lastIndex - 1 !== index ? (
          <span className='inline-block w-0.5 h-[16px] translate-y-[3px] bg-tertiaryLight dark:bg-tertiaryDark mx-2'></span>
        ) : (
          <></>
        )}
      </div>
      <ul
        tabIndex={0}
        className='p-2 shadow dropdown-content menu rounded-box min-w-48 bg-primaryLight'
      >
        <li>
          <Link href='' className='hover:bg-highlightLight hover:text-secondaryLight'>Випічка</Link>
        </li>
        <li>
          <Link href='' className='hover:bg-highlightLight hover:text-secondaryLight'>Хліб</Link>
        </li>
        <li>
          <Link href='' className='hover:bg-highlightLight hover:text-secondaryLight'>Десерт</Link>
        </li>
      </ul>
    </li>
  ) : (
    <>
      <li className='inline-block text-sm font-semibold text-tertiaryLight dark:text-tertiaryDark font-robotoRegular'>
        <Link
          href={navItem.href}
          className={
            pathname == navItem.href
              ? 'block text-highlightLight'
              : 'block [&>div]:hover:opacity-100'
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

export default NavigationItem
