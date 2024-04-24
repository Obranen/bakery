'use client'

import { INavigation } from '@/interface/navigation.interface'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface INavigationItem {
  navItem: INavigation
  lastIndex: number
  index: number
  dropdownPosition?: string
}

const NavigationItem: FC<INavigationItem> = ({
  navItem,
  lastIndex,
  index,
  dropdownPosition = '',
}) => {
  const pathname = usePathname()

  return navItem.dropdown === true ? (
    <li className={classNames('dropdown dropdown-hover', dropdownPosition)}>
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
        aria-label='Список категории - продукция.'
        className='p-2 shadow dropdown-content menu rounded-box min-w-48 bg-primaryLight z-10'
      >
        <li>
          <Link
            href=''
            aria-label='Випічка: категория - продукция.'
            className='hover:bg-highlightLight hover:text-secondaryLight'
          >
            Випічка
          </Link>
        </li>
        <li>
          <Link
            href=''
            aria-label='Хліб: категория - продукция.'
            className='hover:bg-highlightLight hover:text-secondaryLight'
          >
            Хліб
          </Link>
        </li>
        <li>
          <Link
            href=''
            aria-label='Десерт: категория - продукция.'
            className='hover:bg-highlightLight hover:text-secondaryLight'
          >
            Десерт
          </Link>
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
