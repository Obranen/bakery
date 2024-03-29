'use client'

import MagnifyingGlassSVG from '@/public/images/svg/MagnifyingGlassSVG'
import { ChangeEvent, useState } from 'react'

const FindSite = () => {
  const [textFind, setTextFind] = useState('')

  const findChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextFind(e.currentTarget.value)
  }

  return (
    <div className='flex items-center text-xs lg:w-[74%] md:w-[92%] md:m-auto md:h-5 h-8 md:mt-2 mt-4 input input-bordered p-0 !outline-1 !outline-offset-0 md:!outline-gray-500 !outline-primaryLight border-primaryLight focus:border-primaryLight focus:!outline-tertiaryLight  focus-within:border-tertiaryLight'>
      <MagnifyingGlassSVG className='md:w-4 md:h-4 w-6 h-6 ml-1 md:ml-0 md:opacity-30 fill-gray-600' />
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
