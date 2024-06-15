import Product from '@/components/product/Product'
import { productGet } from '@/routes/product.route'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product',
  description: 'Product page',
}

const ProductPage = async () => {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery({
    queryKey: ['product'],
    queryFn: productGet,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Product />
    </HydrationBoundary>
  )
}

export default ProductPage
