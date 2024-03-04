'use client'

import { usePathname } from 'next/navigation'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './SliderPromotion.css'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderPromotion } from '../../../data/sliderPromotion.data'
import SliderPromotionItem from './SliderPromotionItem/SliderPromotionItem'

const SliderPromotion = () => {
  const pathname = usePathname()

  if (pathname !== '/') {
    return <></>
  }

  return (
    <div className='w-[657px] h-[382px] mt-[277px] ml-[142px] relative z-10'>
      <h3 className='font-semibold text-center -translate-x-1 -translate-y-2.5 font-caveatRegular text-[26px]'>
        Акції Та Новинки
      </h3>
      <div className='relative'>
        <Swiper
          className='slider-promotion'
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          cssMode={true}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{
            dynamicBullets: true,
            type: 'bullets',
          }}
          // autoplay={{pauseOnMouseEnter: true, delay: 5000}}
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
    </div>
  )
}

export default SliderPromotion
