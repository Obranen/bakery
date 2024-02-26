import { INavigation } from '@/interface/navigation.interface'
import Link from 'next/link'
import { FC } from 'react'

interface INavigationItem {
  navItem: INavigation
  lastIndex: number
  index: number
}

const NavigationItem: FC<INavigationItem> = ({ navItem, lastIndex, index }) => {
  return (
    <Link
      href={navItem.href}
      className='font-robotoRegular font-black text-[14px] pr-[4px]'
    >
      {navItem.title}
      {lastIndex - 1 !== index ? (
        <span className='after:content-["_|_"] ml-[2px]'></span>
      ) : (
        <></>
      )}
    </Link>
  )
}

export default NavigationItem
