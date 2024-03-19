'use client'

import MagnifyingGlassSVG from '@/public/images/svg/MagnifyingGlassSVG'
import { ChangeEvent, useState } from 'react'

const FindSite = () => {
  const [textFind, setTextFind] = useState('')

  const findChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextFind(e.currentTarget.value)
  }

  return (
    <div className='flex items-center text-xs sm:w-[74%] sm:h-5 h-8 sm:mt-2 mt-4 input input-bordered p-0 !outline-1 !outline-offset-0 sm:!outline-gray-500 !outline-primaryLight border-primaryLight focus:border-primaryLight focus:!outline-tertiaryLight  focus-within:border-tertiaryLight'>
      <MagnifyingGlassSVG className='sm:w-4 sm:h-4 w-6 h-6 ml-1 sm-ml-0 sm:opacity-30 fill-gray-600' />
      <input
        onChange={findChange}
        value={textFind}
        type='text'
        className='pl-1 sm:border-transparent sm:opacity-50 grow font-robotoRegular focus:opacity-100 text-tertiaryLight placeholder:text-tertiaryLight'
        placeholder='Я шукаю...'
      />
    </div>
  )
}

export default FindSite
