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
      className={'h-[384px] w-[659px] border-[4px] border-myDefaultLight'}
    />
  )
}

export default SliderPromotionItem
