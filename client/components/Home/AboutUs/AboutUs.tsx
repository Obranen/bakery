import Image from 'next/image'
import Delivery from './Delivery/Delivery'
import Contacts from './Contacts/Contacts'

const AboutUs = () => {
  return (
    <div className='relative bg-secondaryLight'>
      <div className='container relative z-10 flex mt-12 pb-10'>
        <Delivery />
        <Contacts />
      </div>

      <Image
        src='/images/croissant.webp'
        width={760}
        height={521}
        alt='croissant'
        className={'absolute bottom-0 left-0 w-[760px] h-[521px] opacity-90'}
      />
    </div>
  )
}

export default AboutUs
