import Image from 'next/image'
import { MdImportContacts } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const AboutUs = () => {
  return (
    <div className='relative min-w-[782px] min-h-[516px] bg-secondaryLight'>
      <div className='container relative z-10 flex mt-[15px]'>
        <div className='w-3/12'></div>

        <section className='w-3/12 flex justify-center'>
          <div className='flex items-center justify-center mt-4 text-center rounded-full w-28 h-28 bg-primaryLight'>
            <div className=''>
              <TbTruckDelivery className='inline-block text-3xl' />
              <h2 className='text-2xl font-semibold font-caveatRegular'>
                Доставка
              </h2>
            </div>
          </div>
        </section>

        <section className='w-6/12 flex justify-center'>
          <div className='flex items-center justify-center mt-4 text-center rounded-full w-28 h-28 bg-primaryLight'>
            <div className=''>
              <MdImportContacts className='inline-block text-3xl' />
              <h2 className='text-2xl font-semibold font-caveatRegular'>
                Контакти
              </h2>
            </div>
          </div>
        </section>
      </div>

      <Image
        src='/images/croissant.webp'
        width={760}
        height={521}
        alt='croissant'
        className={'absolute top-[94px] left-0 w-[760px] h-[521px] opacity-95'}
      />
    </div>
  )
}

export default AboutUs
