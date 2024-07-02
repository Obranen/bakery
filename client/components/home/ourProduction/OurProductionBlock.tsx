import { product } from '@/data/product.data'
import OurProductionItem from './OurProductionItem'
import Link from 'next/link'
import OurProductionNav from './OurProductionNav'

const OurProductBlock = () => {
  return (
    <>
      <OurProductionNav />

      <div className='mt-2.5 lg:flex lg:space-x-2 2xl:space-x-4 3xl:space-x-10'>
        {product.map(
          (item, index) =>
            index < 4 && <OurProductionItem product={item} key={item.id} />
        )}
      </div>

      <div className='text-right lg:mt-2 xl:mt-4 xl:mr-16'>
        <Link
          href=''
          className='inline-block text-xl font-caveatRegular underline underline-offset-[6px] decoration-tertiaryLight decoration-1 transition ease-linear duration-150 hover:text-highlightLight hover:decoration-highlightLight'
        >
          Дивитись все...
        </Link>
      </div>
    </>
  )
}

export default OurProductBlock
