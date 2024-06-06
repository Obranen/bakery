'use client'

import Image from 'next/image'
import Delivery from './Delivery'
import Contacts from './Contacts'
import LoadingPage from '@/components/ui/LoadingPage'
import ErrorPage from '@/components/ui/ErrorPage'
import { homePageFeatureGet } from '@/fetch/homePage.fetch'
import { useQuery } from '@tanstack/react-query'
import { MdImportContacts } from 'react-icons/md'
import ContactsItem from './ContactsItem'
import { IBlockState, IFeatureState } from '@/interface/homePage.interface'

const AboutUs = async () => {
  const {
    data: homePageData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['feature'],
    queryFn: () => homePageFeatureGet(),
  })

  if (isLoading) {
    return <LoadingPage />
  }

  if (error) {
    return <ErrorPage message={'Error product'} />
  }

  // console.log('homePageData',homePageData)

  return (
    <div className='relative bg-secondaryLight hidden md:block'>
      <div className='container relative z-10 pb-10'>
        {/* <div className='xl:w-6/12'>
          <Delivery />
        </div>
        <div className='xl:w-6/12'>
          <Contacts />
        </div> */}

        <section className='relative mt-6 xl:mt-0'>
          <div className='flex'>
            {homePageData.data.attributes.blocks.map((item: IBlockState) => (
              <div className='items-center w-6/12'>
                <div className='flex justify-center mb-5'>
                  <div className='flex items-center text-center rounded-3xl w-28 h-28 bg-primaryLight xl:mt-6'>
                    <h2 className='text-2xl font-semibold font-caveatRegular'>
                      {item.icon === 'MdImportContacts' && (
                        <MdImportContacts className='inline-block text-3xl text-highlightLight' />
                      )}
                      {item.title}
                    </h2>
                  </div>
                </div>

                <div className='flex justify-between'>
                  {item.feature.map((item: IFeatureState) => (
                    <ContactsItem key={item.id} section={item} />
                  ))}
                </div>

                <div className='flex justify-center'>
                {item.image.data?.attributes.url && <Image
                    src={process.env.NEXT_PUBLIC_STRAPI_URL + item.image.data?.attributes.url}
                    width={801}
                    height={432}
                    alt='map'
                    className={
                      'mt-10 opacity-85 border-4 border-primaryLight lg:w-full lg:h-full lg:mt-6 2xl:w-[801px] 2xl:h-[432px]'
                    }
                  />}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Image
        src='/images/croissant.webp'
        width={760}
        height={521}
        alt='croissant'
        className={
          'absolute bottom-0 left-0 w-[760px] h-[521px] opacity-90 hidden xl:block xl:w-[590px] xl:h-[390px]'
        }
      />
    </div>
  )
}

export default AboutUs
