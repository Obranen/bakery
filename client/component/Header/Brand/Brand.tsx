'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Brand.module.css'
import { usePathname } from 'next/navigation'

const Brand = () => {
  const pathname = usePathname()

  return pathname === '/' ? (
    <div className='w-4/12 mt-[55px] font-abrilFatface'>
      <Link href='/' className='relative inline-block'>
        <Image
          src='/image/bread.png'
          width={42}
          height={48}
          alt='bread'
          className={'absolute top-[0px] left-[calc(50%-42px)] w-[42px] h-[48px]'}
        />
        <div className='w-full border-t-2 border-myHighlightLight translate-y-[6px]'></div>
        <span className={styles.textGradient}>Bakery</span>
      </Link>
    </div>
  ) : (
    <div className='w-4/12 font-abrilFatface'>
      <Link href='/' className='inline-block'>
        <span className={styles.textGradient}>Bakery</span>
      </Link>
    </div>
  )
}

export default Brand
