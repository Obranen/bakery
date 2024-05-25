import React, { FC } from 'react'

interface ILoadingMessage {
  message?: string
}

const LoadingMessage: FC<ILoadingMessage> = ({ message = 'Loading... ' }) => {
  return (
    <main className='flex items-center justify-center'>
      <span className='text-success text-2xl'>{message}</span>
      <span className='loading loading-spinner text-success'></span>
    </main>
  )
}

export default LoadingMessage
