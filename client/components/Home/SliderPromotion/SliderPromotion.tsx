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
    <section className='relative z-10 mt-4 md:mx-auto lg:mt-0 md:h-[384px] md:w-[659px] lg:w-[657px] lg:h-[382px] lg:translate-y-[286px] lg:translate-x-[140px]'>
      <h2 className='font-semibold text-center -translate-x-1 -translate-y-2.5 font-caveatRegular text-[26px] hidden lg:block'>
        Акції Та Новинки
      </h2>
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

        <button className='btn btn-link p-0 swiper-prev cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute top-[calc(50%-25px)] left-[-40px] hidden lg:block'>
          <MdArrowBackIos className={'text-highlightLight text-[50px]'} />
        </button>

        <button className='btn btn-link p-0 swiper-next cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute top-[calc(50%-25px)] right-[-50px] hidden lg:block'>
          <MdArrowForwardIos className={'text-highlightLight text-[50px]'} />
        </button>
      </div>
    </section>
  )
}

export default SliderPromotion
