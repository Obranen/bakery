import Image from 'next/legacy/image'

const MainImg = () => {
  return (
    <>
      <div className='hidden lg:block xl:hidden'>
        <Image
          src='/images/main-header-lg.webp'
          alt='main-header'
          priority
          layout='fill'
          quality={100}
          className='opacity-90'
        />
      </div>
      <div className='hidden xl:block'>
        <Image
          src='/images/main-header.webp'
          alt='main-header'
          priority
          layout='fill'
          objectFit='cover'
          quality={100}
          className='opacity-90'
        />
      </div>
    </>
  )
}

export default MainImg
