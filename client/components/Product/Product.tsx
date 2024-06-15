'use client'

import { productGet, productGetId } from '@/routes/product.route'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ErrorMessage from '../ui/ErrorPage'
import LoadingSkeleton from '../ui/LoadingSkeleton'
import ProductItem from './ProductItem'
import LoadingMessage from '../ui/LoadingPage'

const Product = () => {
// const Product = async () => {
  // const [pageIndex, setPageIndex] = useState(8)
  // let pages = []

  // const products = await productGet()

  const products = useQuery({
    queryKey: ['product'],
    queryFn: productGet,
  })

  // const products = useQuery({
  //   queryKey: ['product', pageIndex],
  //   queryFn: () => productGetId(pageIndex),
  // })

  if (products.isLoading) {
    return <LoadingMessage />
  }

  if (products.error) {
    return <ErrorMessage message={'Error product'} />
  }

  // console.log('products',products.data)

  // if (products.data?.meta.pagination.pageCount) {
  //   for (let i = 1; i <= products.data?.meta.pagination.pageCount; i++) {
  //     pages.push(i)
  //   }
  // }

  return (
    <>
      {/* {products.data.map((product: any) => ( */}
       {products.data?.data.map((product: any) => (
        <ProductItem key={product.id} product={product.attributes} />
        // <></>
      ))}

      <div className='flex justify-around'>
        {/* Pagination variant one */}
        {/* <div className='join'>
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
        </div> */}

        {/* Pagination variant two */}
        {/* <div className='join'>
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
        </div> */}
      </div>
    </>
  )
}

export default Product
