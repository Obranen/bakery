import { IProduct } from '@/interface/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface IOurProductionItem {
  product: IProduct
}

const OurProductionItem: FC<IOurProductionItem> = ({ product }) => {
  return (
    <section className='w-3/12 bg-secondaryLight rounded-xl'>
      <div className='px-8 pb-2 border-b-2 border-primaryLight'>
        <Image
          src={product.src}
          alt={product.alt}
          width={238}
          height={205}
          className='m-auto mt-3'
        />
        <h3 className='mt-2 text-base font-semibold text-center uppercase font-caveatRegular '>
          <Link href='' className='hover:underline'>
            {product.title}
          </Link>
        </h3>
        <p className='text-xs font-robotoSerifRegular indent-2'>
          lore
          {product.description}
        </p>
      </div>
      <button className='w-full h-[60px] text-base font-bold rounded-t-none btn btn-ghost font-robotoRegular hover:bg-opacity-5 hover:bg-tertiaryLight rounded-b-xl'>
        Детальніше...
      </button>
    </section>
  )
}

export default OurProductionItem
