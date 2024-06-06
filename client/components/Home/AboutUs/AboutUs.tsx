'use client'

import ErrorPage from '@/components/ui/ErrorPage'
import LoadingPage from '@/components/ui/LoadingPage'
import { homePageSectionGet } from '@/fetch/homePage.fetch'
import { IBlockState, IFeatureState } from '@/interface/homePage.interface'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { MdImportContacts } from 'react-icons/md'
import AboutUsItem from './AboutUsItem'

const AboutUs = async () => {
  const {
    data: homePageData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['feature'],
    queryFn: () => homePageSectionGet(),
  })

  if (isLoading) {
    return <LoadingPage />
  }

  if (error) {
    return <ErrorPage message={'Error product'} />
  }

  return (
    <div className='relative bg-secondaryLight hidden md:block'>
      <div className='container relative z-10 pb-10'>
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
                    <AboutUsItem key={item.id} section={item} />
                  ))}
                </div>

                <div className='flex justify-center'>
                  {item.image.data?.attributes.url && (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        item.image.data?.attributes.url
                      }
                      width={801}
                      height={432}
                      alt='map'
                      className={
                        'mt-10 opacity-85 border-4 border-primaryLight lg:w-full lg:h-full lg:mt-6 2xl:w-[801px] 2xl:h-[432px]'
                      }
                    />
                  )}
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
