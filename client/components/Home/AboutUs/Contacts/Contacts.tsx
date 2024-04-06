import Image from 'next/image'
import { BsClock } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdImportContacts, MdPhoneInTalk } from 'react-icons/md'

const Contacts = () => {
  return (
    <section className='relative mt-6 xl:mt-0'>
      <div className='flex items-center xl:flex-col'>
        <div className='w-6/12 flex justify-center'>
          <div className='flex items-center text-center rounded-3xl w-28 h-28 bg-primaryLight xl:mt-6'>
            <h2 className='text-2xl font-semibold font-caveatRegular'>
              <MdImportContacts className='inline-block text-3xl text-highlightLight' />
              Контакти
            </h2>
          </div>
        </div>
        <div className='w-6/12 xl:w-full'>
          <div className='flex flex-col font-robotoRegular xl:justify-around xl:mt-10 xl:w-full xl:flex-row'>
            <div className='flex items-center'>
              <BsClock className='mr-4 text-4xl' />
              <div className='flex flex-col'>
                <span>Працюємо</span>
                <b className='text-lg'>09:00-21:00</b>
                <span>Щоденно</span>
              </div>
            </div>
            <div className='flex items-center mt-2'>
              <MdPhoneInTalk className='mr-1 text-3xl' />
              <span>097-123-45-67</span>
            </div>
            <div className='flex items-center mt-2'>
              <FaMapMarkerAlt className='mr-1 text-3xl' />
              <span>Вулиця Валентинівська 108 </span>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <Image
          src='/images/map.webp'
          width={801}
          height={432}
          alt='map'
          className={
            'mt-10 opacity-85 border-4 border-primaryLight lg:w-full lg:h-full lg:mt-6 2xl:w-[801px] 2xl:h-[432px]'
          }
        />
      </div>
    </section>
  )
}

export default Contacts
