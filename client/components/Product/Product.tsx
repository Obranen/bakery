'use client'

import { productGet } from '@/fetch/product.fetch'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ErrorMessage from '../ui/ErrorPage'
import LoadingMessage from '../ui/LoadingPage'
import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
  const [pageIndex, setPageIndex] = useState(1)
  let pages = []

  const products = useQuery({
    queryKey: ['product', pageIndex],
    queryFn: () => productGet(pageIndex),
  })

  if (products.isLoading) {
    return <LoadingMessage />
  }

  if (products.error) {
    return <ErrorMessage message={'Error product'} />
  }

  if (products.data?.meta.pagination.pageCount) {
    for (let i = 1; i <= products.data?.meta.pagination.pageCount; i++) {
      pages.push(i)
    }
  }

  return (
    <main>
      {products.data?.data.map((product) => (
        <div key={product.id} className='border-b-2 mb-4 border-red-500'>
          <h2>
            <Link href={'/product/' + product.attributes.slug}>
              {product.attributes.title}
            </Link>
          </h2>
          {product.attributes.image.data !== null && (
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                product.attributes.image.data.attributes.url
              }
              width={238}
              height={205}
              alt={product.attributes.image.data.attributes.alternativeText}
              className={''}
              priority
            />
          )}
          <p>{product.attributes.description}</p>
          <p>{product.attributes.price}</p>
        </div>
      ))}

      <div className='flex justify-around'>
        {/* Pagination variant one */}
        <div className='join'>
          <button
            className='join-item btn btn-xs'
            disabled={pageIndex === 1}
            onClick={() => pageIndex > 1 && setPageIndex((prev) => prev - 1)}
          >
            «
          </button>
          <button className='join-item btn btn-xs'>{pageIndex}</button>
          <button
            className='join-item btn btn-xs'
            disabled={pageIndex === products.data?.meta.pagination.pageCount}
            onClick={() =>
              // @ts-ignore 
              pageIndex < products.data?.meta.pagination.pageCount &&
              setPageIndex((prev) => prev + 1)
            }
          >
            »
          </button>
          <button className='join-item btn btn-xs btn-disabled'>...</button>
          <button className='join-item btn btn-xs'>
            {products.data?.meta.pagination.total}
          </button>
        </div>

        {/* Pagination variant two */}
        <div className='join'>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setPageIndex(page)}
              className={
                pageIndex === page
                  ? 'join-item btn btn-xs btn-active'
                  : 'join-item btn btn-xs'
              }
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Product
