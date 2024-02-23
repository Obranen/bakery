'use client'

import Image from 'next/image'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Slider from 'react-slick'

function SampleNextArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className='cursor-pointer opacity-[.3] hover:opacity-[1] transition-all'
    >
      <MdArrowForwardIos
        className={
          'text-myHighlightLight text-[50px] absolute top-[calc(50%-25px)] right-[-50px]'
        }
      />
    </div>
  )
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <div
      onClick={onClick}
      className='cursor-pointer opacity-[.3] hover:opacity-[1] transition-all'
    >
      <MdArrowBackIos
        className={
          'text-myHighlightLight text-[50px] absolute top-[calc(50%-25px)] left-[-40px]'
        }
      />
    </div>
  )
}

const SliderHome = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className='relative z-10 h-[382px] w-[657px] mb-[121px] ml-[142px] mt-[274px]'>
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />

      <h4 className='text-black text-center font-caveatRegular text-[28px] translate-y-[-7px] capitalize'>
        Акції та Новинки
      </h4>

      <Slider className='' {...settings}>
        <Image
          src='/image/main/slide-main-1.webp'
          width={657}
          height={382}
          alt='slide-main-1'
          className={'h-[384px] w-[659px] border-[4px] border-myDefaultLight'}
        />
        <Image
          src='/image/main/slide-main-1.webp'
          width={657}
          height={382}
          alt='slide-main-1'
          className={'h-[384px] w-[659px] border-[4px] border-myDefaultLight'}
        />
        <Image
          src='/image/main/slide-main-1.webp'
          width={657}
          height={382}
          alt='slide-main-1'
          className={'h-[384px] w-[659px] border-[4px] border-myDefaultLight'}
        />
      </Slider>
    </div>
  )
}

export default SliderHome
