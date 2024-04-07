import { product } from '@/data/product.data'
import OurProductionItem from './OurProductionItem/OurProductionItem'
import OurProductionNav from './OurProductionNav/OurProductionNav'
import Link from 'next/link'
import OurProductionCarousel from './OurProductionCarousel/OurProductionCarousel'

const OurProduction = () => {
  return (
    <section className='container lg:mt-6 3xl:-mt-6'>
      <h2 className='text-2xl font-semibold translate-x-12 -translate-y-3 font-caveatRegular'>
        Наша продукція
      </h2>

      <OurProductionNav />

      <div className='hidden mt-2.5 lg:flex lg:space-x-2 2xl:space-x-4 3xl:space-x-10'>
        {product.map((item) => (
          <OurProductionItem product={item} key={item.id} />
        ))}
      </div>

      <div className='lg:hidden'>
        <OurProductionCarousel />
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
