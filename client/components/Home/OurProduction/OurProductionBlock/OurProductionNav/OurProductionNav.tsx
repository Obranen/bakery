'use client'

import { category } from '@/data/category.data'
import { useRef } from 'react'
import OurProductionNavItem from './OurProductionNavItem/OurProductionNavItem'

const OurProductionNav = () => {
  const listRef = useRef<HTMLUListElement>(null)

  return (
    <nav tabIndex={0} aria-label='Продукция'>
      <ul
        ref={listRef}
        className='flex items-center font-medium font-robotoRegular'
      >
        {category.map((item) =>
          <OurProductionNavItem key={item.id} category={item} listRef={listRef} />
        )}
      </ul>
    </nav>
  )
}

export default OurProductionNav
