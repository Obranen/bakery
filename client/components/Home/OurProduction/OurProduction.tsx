import { product } from '@/data/product.data'
import OurProductionItem from './OurProductionItem/OurProductionItem'
import OurProductionNav from './OurProductionNav/OurProductionNav'
import Link from 'next/link'

const OurProduction = () => {
  return (
    <section className='container hidden lg:block lg:mt-6'>
      <h2 className='text-2xl font-semibold translate-x-12 -translate-y-3 font-caveatRegular'>
        Наша продукція
      </h2>

      <OurProductionNav />

      <div className='flex mt-2.5 lg:space-x-2 xl:space-x-10'>
        {product.map((item) => (
          <OurProductionItem product={item} key={item.id} />
        ))}
      </div>
      <div className='text-right lg:mt-2 xl:mt-4 xl:mr-16'>
        <Link
          href=''
          className='inline-block text-xl font-caveatRegular underline underline-offset-[6px] decoration-tertiaryLight decoration-1 transition ease-linear duration-150 hover:text-highlightLight hover:decoration-highlightLight'
        >
          Дивитись все...
        </Link>
      </div>
    </section>
  )
}

export default OurProduction
