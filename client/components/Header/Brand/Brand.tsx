'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Brand = () => {
  const pathname = usePathname()

  return pathname === '/' ? (
    <div className='w-4/12 mt-[55px] font-abrilFatface hidden sm:block'>
      <Link href='/' className='relative inline-block'>
        <Image
          src='/images/bread.png'
          width={42}
          height={48}
          alt='bread'
          className={
            'absolute bottom-[39px] left-[calc(50%-23px)] w-[42px] h-[48px]'
          }
        />
        <div className='w-full h-[2px] translate-y-[6px] bg-gradient-to-r from-highlightLight via-brandViaLight to-highlightLight'></div>
        <span className='inline-block text-3xl text-transparent uppercase translate-x-[-1px] translate-y-[5px] bg-clip-text bg-gradient-to-r from-highlightLight via-brandViaLight to-highlightLight'>
          Bakery
        </span>
      </Link>
    </div>
  ) : (
    <div className='w-4/12 font-abrilFatface hidden sm:block'>
      <Link href='/' className='inline-block'>
        <span className='inline-block text-3xl text-transparent uppercase translate-x-[-1px] translate-y-[5px] bg-clip-text bg-gradient-to-r from-highlightLight via-brandViaLight to-highlightLight'>
          Bakery
        </span>
      </Link>
    </div>
  )
}

export default Brand
