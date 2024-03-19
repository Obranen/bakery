'use client'

import Image from 'next/legacy/image'
import { usePathname } from 'next/navigation'

const MainImg = () => {
  const pathname = usePathname()

  return pathname === '/' ? (
    <Image
      src='/images/main-header.webp'
      alt='main-header'
      priority
      layout='fill'
      objectFit='cover'
      quality={100}
      className='opacity-90'
    />
  ) : (
    <></>
  )
}

export default MainImg
