import Link from 'next/link'
import { GiSlicedBread } from 'react-icons/gi'
import { MdBakeryDining } from 'react-icons/md'
import { GiCakeSlice } from 'react-icons/gi'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <article className='container'>
        <h2 className='text-2xl font-semibold translate-x-12 -translate-y-3 font-caveatRegular'>
          Наша продукція
        </h2>

        <nav>
          <ul className='flex items-center font-medium font-robotoRegular'>
            <li className='ml-11'>
              <Link href='' className='[&>div]:hover:opacity-100'>
                <MdBakeryDining className='inline-block text-3xl ' />
                Випічка
                <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight translate-y-[-2px]'></div>
              </Link>
            </li>
            <li className='ml-8'>
              <Link href='' className='[&>div]:hover:opacity-100'>
                <GiSlicedBread className='inline-block text-xl' />
                <span className='ml-0.5'>Хліб</span>
                <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight translate-y-0.5'></div>
              </Link>
            </li>
            <li className='ml-8'>
              <Link href='' className='[&>div]:hover:opacity-100'>
                <GiCakeSlice className='inline-block text-xl' />
                <span className='ml-1'>Десерт</span>
                <div className='opacity-0 transition ease-linear duration-150 w-full h-0.5 bg-highlightLight translate-y-0.5'></div>
              </Link>
            </li>
          </ul>
        </nav>

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
              <h3 className='text-center mt-2 text-base font-semibold uppercase font-caveatRegular '>
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
            <button className='w-full text-base font-bold btn btn-ghost font-robotoRegular hover:rounded-b-xl hover:rounded-t-none hover:bg-opacity-5 hover:bg-tertiaryLight hover:text-highlightLight'>
              Детальніше...
            </button>
          </section>
        </div>
      </article>

      <article className='container'>
        <section className='mt-6'></section>
      </article>
    </>
  )
}

export default Home
