import { IMetaState } from './meta.interface'

export interface IProductState {
  data: [
    {
      id: number
      attributes: IProductAttrState
    }
  ],
  meta: IMetaState
}

export interface IProductAttrState {
  id: string
  src?: string
  alt?: string
  price: number
  stock: number
  description: string
  // currency: number
  title: string
  slug: string
  code: number
}
