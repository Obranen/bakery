import { product } from '@/data/product.data'
import OurProductionItem from './OurProductionItem/OurProductionItem'
import OurProductionNav from './OurProductionNav/OurProductionNav'
import Link from 'next/link'

const OurProduction = () => {
  return (
    <section className='container hidden sm:block'>
      <h2 className='text-2xl font-semibold translate-x-12 -translate-y-3 font-caveatRegular'>
        Наша продукція
      </h2>

      <OurProductionNav />

      <div className='flex space-x-10 mt-2.5'>
        {product.map((item) => (
          <OurProductionItem product={item} key={item.id} />
        ))}
      </div>
      <div className='text-right mt-4 mr-16'>
        <Link
          href=''
          className='inline-block text-xl font-caveatRegular font-bold underline underline-offset-4 decoration-tertiaryLight decoration-2 transition ease-linear duration-150 hover:text-highlightLight hover:decoration-highlightLight'
        >
          Дивитись все...
        </Link>
      </div>
    </section>
  )
}

export default OurProduction
