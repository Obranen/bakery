import { IProductState } from '@/interface/product.interface'
import axios from 'axios'

export const productGetServer = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`,
      {
        method: 'GET',
        cache: 'no-store',
      }
    )
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const productGetClient = async (page: number) => {
  try {
    const response = await axios.get<IProductState>(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*&pagination[page]=${page}&pagination[pageSize]=1`
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}
