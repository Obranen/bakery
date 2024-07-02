'use client'

// import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { sliderPromotion } from '../../../data/sliderPromotion.data'
import './SliderPromotion.css'
// import SliderPromotionItem from './SliderPromotionItem'

const SliderPromotion = () => {
  return (
    <section className='relative z-10 mt-4 md:mx-auto md:w-[659px] md:rounded-none lg:mt-0 lg:w-[467px] lg:translate-x-[-128px] lg:translate-y-[170px] xl:w-[560px] xl:translate-y-[230px] xl:translate-x-[-165px] 2xl:translate-y-[286px] 3xl:translate-y-[378px] 3xl:translate-x-[-350px] 3xl:w-[661px]'>
      {/* <h2
        aria-label='Акции и новости'
        tabIndex={0}
        className='text-center font-semibold -translate-x-1 -translate-y-2.5 font-caveatRegular text-[26px] hidden lg:block lg:translate-y-0.5 3xl:-translate-y-2.5'
      >
        Акції Та Новинки
      </h2>
      <div className='relative'>
        <Swiper
          className='slider-promotion'
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={4}
          slidesPerView={1}
          loop={true}
          cssMode={true}
          a11y={{
            enabled: false,
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{
            // clickable: true,
            dynamicBullets: true,
            type: 'bullets',
            // renderBullet: function (index, className) {
            //   return (
            //     '<button class="' + className + '">' + (index + 1) + '</button>'
            //   )
            // },
          }}
          // autoplay={{pauseOnMouseEnter: true, delay: 5000}}
          tabIndex={0}
          aria-label={'Всего ' + sliderPromotion.length + 'акции'}
        >
          {sliderPromotion.map((item, index) => (
            <SwiperSlide
              key={item.id}
              virtualIndex={index}
              aria-label={index + 1 + ' акция - ' + item.alt + '.'}
              tabIndex={0}
            >
              <SliderPromotionItem sliderItem={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          tabIndex={-1}
          role='presentation'
          aria-hidden
          className='btn btn-link p-0 swiper-prev cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute hidden lg:top-[calc(50%-20px)] lg:left-[-30px] lg:block xl:top-[calc(50%-25px)] xl:left-[-40px]'
        >
          <MdArrowBackIos
            className={
              'text-highlightLight text-[50px] lg:text-[40px] 3xl:text-[50px]'
            }
          />
        </button>

        <button
          tabIndex={-1}
          role='presentation'
          aria-hidden
          className='swiper-next btn btn-link p-0 cursor-pointer opacity-[.3] hover:opacity-[1] transition-all select-none absolute hidden lg:block lg:top-[calc(50%-20px)] lg:right-[-40px] xl:top-[calc(50%-25px)] xl:right-[-50px]'
        >
          <MdArrowForwardIos
            className={
              'text-highlightLight text-[50px] lg:text-[40px] 3xl:text-[50px]'
            }
          />
        </button>
      </div> */}
    </section>
  )
}

export default SliderPromotion
