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
    <div className='dropdown dropdown-hover'>
      <div
        tabIndex={0}
        role='button'
        className='p-0 font-semibold text-[15px] font-robotoRegular'
      >
        {navItem.title}
        {lastIndex - 1 !== index ? (
          <span className='inline-block w-0.5 h-[16px] translate-y-[3px] bg-gray-500 mx-2'></span>
        ) : (
          <></>
        )}
      </div>
      <ul
        tabIndex={0}
        className='p-2 shadow dropdown-content menu bg-base-100 rounded-box min-w-48'
      >
        <li>
          <a>Випічка</a>
        </li>
        <li>
          <a>Хліб</a>
        </li>
        <li>
          <a>Десерт</a>
        </li>
      </ul>
    </div>
  ) : (
    <span className='inline-block text-sm font-semibold  font-robotoRegular'>
      <Link
        href={navItem.href}
        className={
          pathname == navItem.href ? 'text-highlightLight' : 'hover:underline'
        }
      >
        <div className='bg-yellow-500 dark:bg-slate-800'>{navItem.title}</div>
      </Link>
      {lastIndex - 1 !== index ? (
        <span className='inline-block w-0.5 h-[16px] translate-y-[3px] bg-gray-500 mx-2'></span>
      ) : (
        <></>
      )}
    </span>
  )
}

export default NavigationItem
