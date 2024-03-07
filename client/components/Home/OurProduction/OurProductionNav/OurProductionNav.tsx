'use client'

import Link from 'next/link'
import { GiCakeSlice, GiSlicedBread } from 'react-icons/gi'
import { MdBakeryDining } from 'react-icons/md'
import { MouseEvent, useRef } from 'react'

const OurProductionNav = () => {
  const listRef = useRef<HTMLUListElement>(null)

  const activeLink = ($element: HTMLElement) => {
    const $arrLink = listRef.current?.querySelectorAll('a.text-highlightLight')
    if ($arrLink) {
      $arrLink.forEach((element: any) => {
        element.classList.remove('text-highlightLight')
      })
      $element.classList.add('text-highlightLight')
    }
  }

  const linkClick = (e: MouseEvent<HTMLElement>) => {
    activeLink(e.currentTarget)
  }

  return (
    <nav>
      <ul
        ref={listRef}
        className='flex items-center font-medium font-robotoRegular'
      >
        <li className='ml-11'>
          <Link
            href=''
            onClick={linkClick}
            className='block [&>div]:hover:opacity-100'
          >
            <MdBakeryDining className='inline-block text-3xl' />
            Випічка
            <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight translate-y-[-2px]'></div>
          </Link>
        </li>
        <li className='ml-8'>
          <Link
            href=''
            onClick={linkClick}
            className='block [&>div]:hover:opacity-100'
          >
            <GiSlicedBread className='inline-block text-xl' />
            <span className='ml-0.5'>Хліб</span>
            <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight translate-y-0.5'></div>
          </Link>
        </li>
        <li className='ml-8'>
          <Link
            href=''
            onClick={linkClick}
            className='block [&>div]:hover:opacity-100'
          >
            <GiCakeSlice className='inline-block text-xl' />
            <span className='ml-1'>Десерт</span>
            <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight translate-y-0.5'></div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default OurProductionNav
