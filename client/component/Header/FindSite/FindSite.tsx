'use client'

import { ChangeEvent, useState } from 'react'

const FindSite = () => {
  const [textFind, setTextFind] = useState('')

  const findChange = (e: ChangeEvent<HTMLInputElement>) => {
    const $target = e.currentTarget.value
    setTextFind($target)
  }

  return (
    <div className='flex justify-center w-4/12'>
      <label className='flex items-center text-xs w-[74%] h-5 mt-2 input input-bordered p-0 !outline-1 !outline-offset-0 !outline-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='w-4 h-4 opacity-30'
        >
          <path
            fillRule='evenodd'
            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
            clipRule='evenodd'
          />
        </svg>
        <input
          onChange={findChange}
          value={textFind}
          type='text'
          className='pl-1 border-transparent opacity-50 grow font-robotoRegular focus:opacity-100'
          placeholder='Я шукаю...'
        />
      </label>
    </div>
  )
}

export default FindSite
