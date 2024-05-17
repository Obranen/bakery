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
  price: number
  stock: number
  description: string
  title: string
  slug: string
  code: number
  image: IProductImageState
}

export interface IProductImageState {
  data: {
    id: number
    attributes: IProductImageAttrState
  }
}

export interface IProductImageAttrState {
  name: string
  url: string
  alternativeText: string
}
