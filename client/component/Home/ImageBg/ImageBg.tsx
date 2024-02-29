import Image from 'next/image'

const ImageBg = () => {
  return (
    <>
      <Image
        src='/image/main-header.webp'
        // width={1920}
        // height={946}
        alt='main-header'
        // className={'absolute top-0 left-0 h-[946px] w-[1920px]'}
        priority
        layout='fill'
        objectFit='cover'
        quality={100}
      />

      {/* <Image
        src='/image/spikelet.jpg'
        width={608}
        height={327}
        alt='spikelet'
        className={'absolute top-0 left-0 h-[327px] w-[608px]'}
      />

      <Image
        src='/image/cake.jpg'
        width={74}
        height={83}
        alt='cake'
        className={'absolute right-[295px] top-[65px] h-[83px] w-[74px] z-[1]'}
      />
      <Image
        src='/image/bread.webp'
        width={666}
        height={747}
        alt='bread'
        className={'absolute right-[137px] top-[125px] h-[747px] w-[666px] z-[0]'}
      />
      <Image
        src='/image/egg.jpg'
        width={74}
        height={88}
        alt='egg'
        className={'absolute right-[706px] top-[769px] h-[88px] w-[74px]'}
      />
      <Image
        src='/image/sugar.webp'
        width={150}
        height={140}
        alt='egg'
        className={'absolute left-[747px] top-[156px] h-[140px] w-[150px]'}
      /> */}
    </>
  )
}

export default ImageBg
