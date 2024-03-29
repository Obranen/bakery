'use client'

import MagnifyingGlassSVG from '@/public/images/svg/MagnifyingGlassSVG'
import { ChangeEvent, useState } from 'react'

const FindSite = () => {
  const [textFind, setTextFind] = useState('')

  const findChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextFind(e.currentTarget.value)
  }

  return (
    <div className='flex items-center text-xs md:text-sm lg:w-[74%] md:w-[91.8%] md:m-auto h-8 md:h-10 mt-4 md:mt-2 input input-bordered p-0 !outline-1 !outline-offset-0 md:!outline-gray-500 !outline-primaryLight border-primaryLight focus:border-primaryLight focus:!outline-tertiaryLight  focus-within:border-tertiaryLight md:rounded-sm'>
      <MagnifyingGlassSVG className='w-6 h-6 ml-1 md:ml-1 md:opacity-30 fill-gray-600' />
      <input
        onChange={findChange}
        value={textFind}
        type='text'
        className='pl-1 md:border-transparent md:opacity-50 grow font-robotoRegular focus:opacity-100 text-tertiaryLight placeholder:text-tertiaryLight'
        placeholder='Я шукаю...'
      />
    </div>
  )
}

export default FindSite
