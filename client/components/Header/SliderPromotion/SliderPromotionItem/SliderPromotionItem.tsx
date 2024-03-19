import { ISliderPromotion } from '@/interface/sliderPromotion.interface'
import Image from 'next/image'
import { FC } from 'react'

interface ISliderPromotionItem {
  sliderItem: ISliderPromotion
}

const SliderPromotionItem: FC<ISliderPromotionItem> = ({ sliderItem }) => {
  return (
    <Image
      src={sliderItem.src}
      width={657}
      height={382}
      alt={sliderItem.alt}
      className={'h-40 rounded-md sm:h-[384px] sm:w-[659px] sm:border-[4px] border-[2px] border-primaryLight sm:rounded-none'}
      priority
    />
  )
}

export default SliderPromotionItem
