import { product } from '@/data/product.data'
import OurProductionItem from './OurProductionItem/OurProductionItem'
import OurProductionNav from './OurProductionNav/OurProductionNav'

const OurProduction = () => {
  return (
    <article className='container'>
      <h2 className='text-2xl font-semibold translate-x-12 -translate-y-3 font-caveatRegular'>
        Наша продукція
      </h2>

      <OurProductionNav />

      <div className='flex space-x-10 mt-2.5'>
        {product.map((item) => (
          <OurProductionItem product={item} key={item.id} />
        ))}
      </div>
    </article>
  )
}

export default OurProduction
