import Product from '@/components/Product/Product'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product',
  description: 'Product page',
}

const ProductPage = () => {
  return (
    <Product />
  )
}

export default ProductPage