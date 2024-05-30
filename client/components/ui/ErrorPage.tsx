import React, { FC } from 'react'

interface IErrorPage {
  message: string
}

const ErrorPage: FC<IErrorPage> = ({ message }) => {
  return (
    <div className='toast toast-bottom toast-end'>
      <div className='alert alert-error'>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ErrorPage
