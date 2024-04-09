import { IProduct } from '@/interface/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IOurProductionItem {
  product: IProduct
}

const OurProductionItem: FC<IOurProductionItem> = ({ product }) => {
  return (
    <div className='p-1 rounded-md border-[1px] border-primaryLight lg:bg-secondaryLight '>
      <div className='px-0 border-primaryLight lg:border-b-2 lg:px-2'>
        <Image
          src={product.src}
          alt={product.alt}
          width={238}
          height={205}
          className='m-auto pt-3 w-[50%]'
        />
        <h3 className='mt-2 text-base font-semibold text-center uppercase font-caveatRegular '>
          <Link href='' className='hover:underline'>
            {product.title}
          </Link>
        </h3>
        <p className='text-xs font-robotoSerifRegular indent-2 line-clamp-3'>
          {product.description}
        </p>
      </div>
      <button className='w-full h-[60px] text-base font-bold rounded-t-none btn btn-ghost font-robotoRegular hover:bg-opacity-5 hover:bg-tertiaryLight rounded-b-xl hidden lg:display'>
        Детальніше...
      </button>
    </div>
  )
}

export default OurProductionItem
