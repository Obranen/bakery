import Image from 'next/image'
import Delivery from './Delivery/Delivery'
import Contacts from './Contacts/Contacts'

const AboutUs = () => {
  return (
    <div className='relative bg-secondaryLight hidden md:block'>
      <div className='container relative z-10 pb-10 lg:flex md:mt-6 lg:mt-12'>
        <div className='lg:w-6/12'>
          <Delivery />
        </div>
        <div className='lg:w-6/12'>
          <Contacts />
        </div>
      </div>

      <Image
        src='/images/croissant.webp'
        width={760}
        height={521}
        alt='croissant'
        className={'absolute bottom-0 left-0 w-[760px] h-[521px] opacity-90 hidden lg:block'}
      />
    </div>
  )
}

export default AboutUs
