import Image from 'next/legacy/image'

const MainImg = () => {
  return (
    <Image
      src='/images/main-header.webp'
      alt='main-header'
      priority
      layout='fill'
      objectFit='contain'
      // placeholder='blur'
      // sizes='(min-width: 1400px) 1400px, 100vw'
      // quality={100}
      className='opacity-90 !hidden lg:!block'
    />
  )
}

export default MainImg
