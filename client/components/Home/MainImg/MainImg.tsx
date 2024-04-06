import Image from 'next/legacy/image'

const MainImg = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <Image
          src='/images/main-header.webp'
          alt='main-header'
          priority
          layout='fill'
          objectFit='contain'
          quality={100}
          className='opacity-90'
        />
      </div>
    </>
  )
}

export default MainImg
