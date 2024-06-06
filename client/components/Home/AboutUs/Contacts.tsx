import { IHomePageState } from '@/interface/homePage.interface'
import Image from 'next/image'
import { MdImportContacts } from 'react-icons/md'
import ContactsItem from './ContactsItem'
import { homePageFeatureGet } from '@/fetch/homePage.fetch'

const Contacts = async () => {
  const contacts: IHomePageState = await homePageFeatureGet()

  return (
    <section className='relative mt-6 xl:mt-0'>
      <div className='flex items-center xl:flex-col'>
        {contacts.data.attributes.blocks.map((item) => (
          <>
            <div className='w-6/12 flex justify-center'>
              <div className='flex items-center text-center rounded-3xl w-28 h-28 bg-primaryLight xl:mt-6'>
                <h2 className='text-2xl font-semibold font-caveatRegular'>
                  {item.icon === 'MdImportContacts' && (
                    <MdImportContacts className='inline-block text-3xl text-highlightLight' />
                  )}
                  {item.title}
                </h2>
              </div>
            </div>

            <div className='w-6/12 xl:w-full'>
              <div className='flex flex-col font-robotoRegular xl:justify-around xl:mt-10 xl:w-full xl:flex-row'>
                {item.feature.map((item) => (
                  <ContactsItem key={item.id} section={item} />
                ))}
              </div>
            </div>
          </>
        ))}
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
