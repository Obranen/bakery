'use client'

import { usePathname } from 'next/navigation'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderPromotion } from '../../../data/sliderPromotion.data'
import SliderPromotionItem from './SliderPromotionItem/SliderPromotionItem'

const SliderPromotion = () => {
  const pathname = usePathname()

  if (pathname !== '/') {
    return <></>
  }

  return (
    <div className='w-[657px] h-[382px] relative'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {sliderPromotion.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <SliderPromotionItem sliderItem={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='swiper-next cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none'>
        <MdArrowForwardIos
          className={
            'text-myHighlightLight text-[50px] absolute top-[calc(50%-25px)] right-[-50px]'
          }
        />
      </div>

      <div className='swiper-prev cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none'>
        <MdArrowBackIos
          className={
            'text-myHighlightLight text-[50px] absolute top-[calc(50%-25px)] left-[-40px]'
          }
        />
      </div>
    </div>
  )
}

export default SliderPromotion
