import React, {FC} from 'react'
import Image from 'next/image'
import { getBlurData } from '@/library/blurDataGenerator.library'

interface IGalleryItemProps {
  item: any
}

const GalleryItem: FC<IGalleryItemProps> = async ({item})  => {
  const { url, alternativeText} = item

  const { base64 } = await getBlurData(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`
  )

  return (
     <>
       <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
          width={238}
          height={205}
          alt={'gallery'}
          className={`${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`}
          placeholder='blur'
          blurDataURL={base64}
        />
     </>
  )
}

export default GalleryItem