import { ICategory } from '@/interface/category.interface'
import classNames from 'classnames'
import Link from 'next/link'
import { FC, MouseEvent, RefObject } from 'react'

interface IOurProductionNavItem {
  category: ICategory
  listRef: RefObject<HTMLUListElement>
}

const OurProductionNavItem: FC<IOurProductionNavItem> = ({
  category,
  listRef,
}) => {
  const activeLink = (
    $element: HTMLElement,
    $ref: RefObject<HTMLUListElement>
  ) => {
    const $links = $ref.current?.querySelectorAll('a.text-highlightLight')
    if ($links) {
      $links.forEach((element: any) => {
        element.classList.remove('text-highlightLight')
      })
      $element.classList.add('text-highlightLight')
    }
  }

  const linkClick = (e: MouseEvent<HTMLElement>) => {
    activeLink(e.currentTarget, listRef)
  }
  return (
    <>
      <li className='first:ml-11 ml-8'>
        <Link
          href={category.src}
          onClick={linkClick}
          className='block [&>div]:hover:opacity-100'
        >
          <category.icon
            className={classNames('inline-block', category.classesIcon)}
          />
          {category.title}
          <div className={classNames('opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight', category.classesBorder)}></div>
        </Link>
      </li>
    </>
  )
}

export default OurProductionNavItem
