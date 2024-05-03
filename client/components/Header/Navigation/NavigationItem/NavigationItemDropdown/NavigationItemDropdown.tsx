import { INavigation } from '@/interface/navigation.interface'
import React, { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface INavigationItemDropdown {
  navItem: INavigation
  lastIndex: number
  index: number
  dropdownPosition: string
}

const NavigationItemDropdown: FC<INavigationItemDropdown> = ({
  navItem,
  lastIndex,
  index,
  dropdownPosition,
}) => {
  return (
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
        {navItem.dropdown?.map((dropdownItem) => (
          <li key={dropdownItem.id}>
            <Link
              href={dropdownItem.href}
              aria-label={
                dropdownItem.title + ': категория - ' + navItem.title + '.'
              }
              className='hover:bg-highlightLight hover:text-secondaryLight'
            >
              {dropdownItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default NavigationItemDropdown
