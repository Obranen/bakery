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
    <section className='relative z-10 mt-4 md:mx-auto md:w-[659px] md:rounded-none lg:mt-0 lg:w-[467px] lg:translate-x-[-128px] lg:translate-y-[170px] xl:translate-y-[286px]'>
      <h2 className='text-center font-semibold -translate-x-1 -translate-y-2.5 font-caveatRegular text-[26px] hidden lg:block lg:translate-y-0.5'>
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

        <button className='btn btn-link p-0 swiper-prev cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute hidden lg:top-[calc(50%-20px)] lg:left-[-30px] lg:block xl:top-[calc(50%-25px)] xl:left-[-40px]'>
          <MdArrowBackIos className={'text-highlightLight text-[50px] lg:text-[40px]'} />
        </button>

        <button className='swiper-next btn btn-link p-0 cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute hidden lg:block lg:top-[calc(50%-20px)] lg:right-[-40px] xl:top-[calc(50%-25px)] xl:right-[-50px]'>
          <MdArrowForwardIos className={'text-highlightLight text-[50px] lg:text-[40px]'} />
        </button>
      </div>
    </section>
  )
}

export default SliderPromotion
