import React, { FC } from 'react'

interface IProductIDProps {
  params: {
    id: string
  }
}

const ProductID: FC<IProductIDProps> = ({ params }) => {
  const { id } = params
  return <main>id: {id}</main>
}

export default ProductID
