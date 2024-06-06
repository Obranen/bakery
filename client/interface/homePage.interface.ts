export interface IHomePageState {
  data: {
    id: number
    attributes: IHomePageAttrState
  }
}

export interface IHomePageAttrState {
  id: string
  title: string
  description: string
  blocks: IBlockState[]
}

export interface IBlockState {
  id: string
  title: string
  icon: string
  feature: IFeatureState[]
  image: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export interface IFeatureState {
  id: string
  icon: string
  subHeading: string
}