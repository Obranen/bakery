'use client'

import MagnifyingGlassSVG from '@/public/images/svg/MagnifyingGlassSVG'
import { ChangeEvent, useState } from 'react'

const FindSite = () => {
  const [textFind, setTextFind] = useState('')

  const findChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextFind(e.currentTarget.value)
  }

  return (
    <div className='flex items-center text-xs input input-bordered p-0 !outline-1 !outline-offset-0 !outline-primaryLight border-primaryLight focus:border-primaryLight focus:!outline-tertiaryLight focus-within:border-tertiaryLight md:text-sm md:w-[91.8%] md:m-auto h-8 md:h-10 mt-4 md:mt-2  md:!outline-gray-500 md:rounded-sm lg:w-[240px] lg:h-5 lg:rounded-md lg:text-xs 2xl:w-[300px] 3xl:w-[408px] 3xl:translate-x-[111px]'>
      <MagnifyingGlassSVG className='w-6 h-6 ml-1 md:ml-1 md:opacity-30 fill-gray-600 lg:w-4 lg:h-4' />
      <input
        onChange={findChange}
        value={textFind}
        type='text'
        className='pl-1 grow font-robotoRegular focus:opacity-100 text-tertiaryLight placeholder:text-tertiaryLight md:border-transparent md:opacity-50'
        placeholder='Я шукаю...'
        aria-label='Поиск по сайту'
      />
    </div>
  )
}

export default FindSite
