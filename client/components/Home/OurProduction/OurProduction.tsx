import OurProductBlock from './OurProductionBlock/OurProductionBlock'
import OurProductionCarousel from './OurProductionCarousel/OurProductionCarousel'

const OurProduction = () => {
  return (
    <section className='container lg:mt-6 3xl:-mt-6'>
      <h2 className='text-xl font-semibold font-caveatRegular lg:translate-x-12 lg:-translate-y-3 lg:text-2xl'>
        Наша продукція
      </h2>

      <div className='hidden lg:block'>
        <OurProductBlock />
      </div>

      <div className='lg:hidden'>
        <OurProductionCarousel />
      </div>
    </section>
  )
}

export default OurProduction
