'use client'

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './OurProductionCarousel.css'
import { product } from '@/data/product.data'
import OurProductionItem from '../OurProductionItem/OurProductionItem'

const OurProductionCarousel = () => {
  return (
    <div className='relative'>
      <Swiper
        className='our-production-carousel'
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={false}
        cssMode={true}
        navigation={{
          nextEl: '.swiper-next-carousel',
          prevEl: '.swiper-prev-carousel',
        }}
        pagination={{
          dynamicBullets: true,
          type: 'bullets',
        }}
        // autoplay={{pauseOnMouseEnter: true, delay: 5000}}
      >
        {product.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <OurProductionItem product={item} key={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className='swiper-prev-carousel btn btn-link p-0 cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute hidden lg:top-[calc(50%-20px)] lg:left-[-30px] lg:block xl:top-[calc(50%-25px)] xl:left-[-40px]'>
        <MdArrowBackIos
          className={
            'text-highlightLight text-[50px] lg:text-[40px] 3xl:text-[50px]'
          }
        />
      </button>

      <button className='swiper-next-carousel btn btn-link p-0 cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute hidden lg:block lg:top-[calc(50%-20px)] lg:right-[-40px] xl:top-[calc(50%-25px)] xl:right-[-50px]'>
        <MdArrowForwardIos
          className={
            'text-highlightLight text-[50px] lg:text-[40px] 3xl:text-[50px]'
          }
        />
      </button>
    </div>
  )
}

export default OurProductionCarousel
