// import { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Promotion',
//   description: 'Promotion page',
// }

'use client'

import { useEffect, useState } from 'react'

const PromotionPage = () => {
  const [file, setFile] = useState<File | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file!)

    console.log('formData', formData.get("file"))
  }

  return (
    <main>
      <form onSubmit={onSubmit}>
        <div>{file && file.name}</div>
        <input
          type='file'
          name='file'
          className='file-input w-full max-w-xs'
          accept='.webp, .jpg, .jpeg, .png'
          onChange={(event) => {
            setFile(event.target.files?.[0] || null)
          }}
        />
        <div className='flex justify-between mt-4'>
          <button
            className='btn join-item mx-auto'
            type='submit'
          >
            Редактировать
          </button>
        </div>
      </form>
    </main>
  )
}

export default PromotionPage
