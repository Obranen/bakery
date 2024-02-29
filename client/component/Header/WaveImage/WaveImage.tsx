'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const WaveImage = () => {
  const pathname = usePathname()

  if (pathname !== '/') {
    return <></>
  }

  return (
    <Image
    src='/image/wave.jpg'
    width={1920}
    height={60}
    alt='wave'
    className={
      'w-[1920px] h-[60px] absolute bottom-[-60px] left-[0px]'
    }
  />
  )
}

export default WaveImage