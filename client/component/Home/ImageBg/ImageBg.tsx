import Image from 'next/image'

const ImageBg = () => {
  return (
    <>
      <Image
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
        className={'absolute right-[295px] top-[65px] h-[83px] w-[74px]'}
      />
      <Image
        src='/image/bread.webp'
        width={666}
        height={747}
        alt='bread'
        className={'absolute right-[137px] top-[125px] h-[747px] w-[666px]'}
      />
      <Image
        src='/image/egg.jpg'
        width={74}
        height={88}
        alt='egg'
        className={'absolute right-[706px] top-[769px] h-[88px] w-[74px]'}
      />
    </>
  )
}

export default ImageBg
