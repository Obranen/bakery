'use client'

import { product } from '@/data/product.data'
import 'swiper/css'
import { A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import OurProductionItem from './OurProductionItem'

const OurProductionCarousel = () => {
  return (
    <div className='relative overflow-hidden'>
      <Swiper
        className='our-production-carousel w-[120%] [&>.swiper-wrapper]:w-[83%]'
        modules={[A11y]}
        spaceBetween={10}
        slidesPerView={3}
        loop={false}
        cssMode={true}
        navigation={{
          nextEl: '.swiper-next-carousel',
          prevEl: '.swiper-prev-carousel',
        }}
      >
        {product.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <OurProductionItem product={item} key={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default OurProductionCarousel
