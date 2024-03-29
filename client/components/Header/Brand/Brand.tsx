'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Brand = () => {
  const pathname = usePathname()

  return pathname === '/' ? (
    <div className='hidden w-4/12 lg:mt-[55px] font-abrilFatface md:block'>
      <Link href='/' className='relative inline-block'>
        <Image
          src='/images/bread.png'
          width={42}
          height={48}
          alt='bread'
          className={
            'absolute bottom-[39px] left-[calc(50%-23px)] w-[42px] h-[48px] hidden lg:block'
          }
        />
        <div className='hidden w-full h-[2px] translate-y-[6px] bg-gradient-to-r from-highlightLight via-brandViaLight to-highlightLight lg:block'></div>
        <span className='inline-block text-3xl text-transparent uppercase translate-x-[-1px] translate-y-[5px] bg-clip-text bg-gradient-to-r from-highlightLight via-brandViaLight to-highlightLight'>
          Bakery
        </span>
      </Link>
    </div>
  ) : (
    <div className='hidden w-4/12 font-abrilFatface md:block'>
      <Link href='/' className='inline-block'>
        <span className='inline-block text-3xl text-transparent uppercase translate-x-[-1px] translate-y-[5px] bg-clip-text bg-gradient-to-r from-highlightLight via-brandViaLight to-highlightLight'>
          Bakery
        </span>
      </Link>
    </div>
  )
}

export default Brand
