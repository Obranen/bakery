import React, { FC } from 'react'

interface ILoadingPage {
  message?: string
}

const LoadingMessage: FC<ILoadingPage> = ({ message = 'Loading... ' }) => {
  return (
    <main className='flex items-center justify-center'>
      <span className='text-success text-2xl'>{message}</span>
      <span className='loading loading-spinner text-success'></span>
    </main>
  )
}

export default LoadingMessage
