'use client'

import { productGetClient } from '@/fetch/product.fetch'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ErrorMessage from '../ui/ErrorMessage/ErrorMessage'
import LoadingMessage from '../ui/LoadingMessage/LoadingMessage'

const Product = () => {
  const [pageIndex, setPageIndex] = useState(1)

  const products = useQuery({
    queryKey: ['product', pageIndex],
    queryFn: () => productGetClient(pageIndex)
  })

  if (products.isLoading) {
    return <LoadingMessage />
  }

  if (products.error) {
    return <ErrorMessage message={'Error product'} />
  }

  return (
    <main>
      {products.data?.data.map((product) => (
        <div key={product.id} className='border-b-2 mb-4 border-red-500'>
          <h2>{product.attributes.title}</h2>
          <p>{product.attributes.description}</p>
          <p>{product.attributes.price}</p>
        </div>
      ))}

      <div className='join'>
        <button
          className='join-item btn'
          disabled={pageIndex === 1}
          onClick={() => pageIndex > 1 && setPageIndex((prev) => prev - 1)}
        >
          «
        </button>
        <button className='join-item btn'>{pageIndex}</button>
        <button
          className='join-item btn'
          disabled={pageIndex === products.data?.meta.pagination.pageCount}
          onClick={() =>
            // @ts-ignore
            pageIndex < products.data?.meta.pagination.pageCount &&
            setPageIndex((prev) => prev + 1)
          }
        >
          »
        </button>
      </div>
      {/* <div>
        Всего <b>{products.data?.meta.pagination.total}</b> товара
      </div> */}
    </main>
  )
}

export default Product
