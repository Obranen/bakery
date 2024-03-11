import Image from 'next/image'
import { BsClock } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdImportContacts, MdPhoneInTalk } from 'react-icons/md'

const Contacts = () => {
  return (
    <section className='relative flex flex-col items-center w-6/12'>
      <div className='flex items-center justify-center mt-6 text-center rounded-3xl w-28 h-28 bg-primaryLight'>
        <h2 className='text-2xl font-semibold font-caveatRegular'>
          <MdImportContacts className='inline-block text-3xl text-highlightLight' />
          Контакти
        </h2>
      </div>
      <div className='flex justify-around w-full mt-10 font-robotoRegular'>
        <div className='flex items-center'>
          <BsClock className='mr-4 text-4xl' />
          <div className='flex flex-col'>
            <span>Працюємо</span>
            <b className='text-lg'>09:00-21:00</b>
            <span>Щоденно</span>
          </div>
        </div>
        <div className='flex items-center'>
          <MdPhoneInTalk className='mr-1 text-3xl' />
          <span>097-123-45-67</span>
        </div>
        <div className='flex items-center'>
          <FaMapMarkerAlt className='mr-1 text-3xl' />
          <span>Вулиця Валентинівська 108 </span>
        </div>
      </div>

      <Image
        src='/images/map.webp'
        width={801}
        height={432}
        alt='map'
        className={
          'mt-10 w-[801px] h-[432px] opacity-85 border-4 border-primaryLight'
        }
      />
    </section>
  )
}

export default Contacts
