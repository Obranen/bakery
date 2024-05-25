import React, { FC } from 'react'

interface IErrorMessage {
  message: string
}

const ErrorMessage: FC<IErrorMessage> = ({ message }) => {
  return (
    <div className='toast toast-bottom toast-end'>
      <div className='alert alert-error'>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ErrorMessage
