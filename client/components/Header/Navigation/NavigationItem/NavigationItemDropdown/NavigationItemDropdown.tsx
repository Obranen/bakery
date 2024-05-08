import { navigationDropdownGetAll } from '@/fetch/navigationDropdown.fetch'
import { INavigationAttrState } from '@/interface/navigation.interface'
import { INavigationDropdownState } from '@/interface/navigationDropdown.interface'
import classNames from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

interface INavigationItemDropdown {
  navItem: INavigationAttrState
  lastIndex: number
  index: number
  dropdownPosition: string
}

const NavigationItemDropdown: FC<INavigationItemDropdown> = async ({
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
        {navItem.dropdowns.data.map((data: INavigationDropdownState) => (
          <li key={data.id}>
            <Link
              href={data.attributes.href}
              aria-label={
                data.attributes.title + ': категория - ' + data.attributes.title + '.'
              }
              className='hover:bg-highlightLight hover:text-secondaryLight'
            >
              {data.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default NavigationItemDropdown
