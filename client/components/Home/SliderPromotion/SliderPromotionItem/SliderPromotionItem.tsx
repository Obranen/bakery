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
      className={'h-40 rounded-md border-[2px] border-primaryLight md:border-[4px] sm:w-full sm:h-full'}
      priority
    />
  )
}

export default SliderPromotionItem
