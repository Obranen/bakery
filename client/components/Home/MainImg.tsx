import Image from 'next/legacy/image'

const MainImg = () => {
  return (
    <Image
      src='/images/main-header.webp'
      alt='main-header'
      priority
      layout='fill'
      objectFit='contain'
      quality={100}
      className='opacity-90 !hidden lg:!block'
    />
  )
}

export default MainImg
