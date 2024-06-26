import React, { FC } from 'react'

interface ILoadingSkeletonProps {}

const LoadingSkeleton: FC<ILoadingSkeletonProps> = ({}) => {
  return (
    <div className='flex flex-col gap-4 w-52'>
      <div className='skeleton h-32 w-full'></div>
      <div className='skeleton h-4 w-28'></div>
      <div className='skeleton h-4 w-full'></div>
      <div className='skeleton h-4 w-full'></div>
    </div>
  )
}

export default LoadingSkeleton
