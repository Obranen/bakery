import Image from 'next/image'
import Delivery from './Delivery'
import Contacts from './Contacts'

const AboutUs = async () => {
  return (
    <div className='relative bg-secondaryLight hidden md:block'>
      <div className='container relative z-10 pb-10 xl:flex md:mt-10 lg:pt-4 lg:pb-6'>
        <div className='xl:w-6/12'>
          <Delivery />
        </div>
        <div className='xl:w-6/12'>
          <Contacts />
        </div>
      </div>
      <Image
        src='/images/croissant.webp'
        width={760}
        height={521}
        alt='croissant'
        className={'absolute bottom-0 left-0 w-[760px] h-[521px] opacity-90 hidden xl:block xl:w-[590px] xl:h-[390px]'}
      />
    </div>
  )
}

export default AboutUs
