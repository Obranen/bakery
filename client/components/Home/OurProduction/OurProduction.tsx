import Link from 'next/link'
import Image from 'next/image'
import OurProductionNav from './OurProductionNav/OurProductionNav'

const OurProduction = () => {
  return (
    <article className='container'>
    <h2 className='text-2xl font-semibold translate-x-12 -translate-y-3 font-caveatRegular'>
      Наша продукція
    </h2>

    <OurProductionNav />

    <div className='flex space-x-10 mt-2.5'>
      <section className='w-3/12 bg-secondaryLight rounded-xl'>
        <div className='px-8 pb-2 border-b-2 border-primaryLight'>
          <Image
            src='/images/product-example-main.jpg'
            alt='product-example-main'
            width={238}
            height={205}
            className='m-auto mt-3'
          />
          <h3 className='mt-2 text-base font-semibold text-center uppercase font-caveatRegular '>
            <Link href='' className='hover:underline'>
              Житній хліб
            </Link>
          </h3>
          <p className='text-xs font-robotoSerifRegular indent-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
            aliquam modi corrupti qui earum voluptas dignissimos possimus
            mollitia voluptatibus. Dolorum labore, corporis nisi.
          </p>
        </div>
        <button className='w-full text-base font-bold rounded-t-none btn btn-ghost font-robotoRegular hover:bg-opacity-5 hover:bg-tertiaryLight rounded-b-xl'>
          Детальніше...
        </button>
      </section>
    </div>
  </article>
  )
}

export default OurProduction