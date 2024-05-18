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
}

export interface IFeatureState {
  id: string
  icon: string
  subHeading: ISubHeadingState[]
}

export interface ISubHeadingState {
  children: IChildrenState[]
}

export interface IChildrenState {
  text: string
}