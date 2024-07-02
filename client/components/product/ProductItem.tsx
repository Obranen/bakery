import { IProductAttrState } from '../../interface/product.interface'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IProductItemProps {
  product: IProductAttrState & {
    price: string
  }
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
  const { price, stock, description, title, slug, image, code } = product

  const imageBlur =
    'data:image/jpeg;base64,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'

  return (
    <div className='border-b-2 mb-4 border-red-500'>
      <h2>
        <Link href={`/product/${slug}`}>{title}</Link>
      </h2>
      {image.data !== null && (
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.data.attributes.url}`}
          width={238}
          height={205}
          alt={image.data.attributes.alternativeText}
          className=''
          placeholder='blur'
          blurDataURL={imageBlur}
        />
      )}
      {description && <div className='prose'><BlocksRenderer content={description} /></div>}
      <p>{price}</p>
    </div>
  )
}

export default ProductItem
