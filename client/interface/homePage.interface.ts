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
  section: ISectionState[]
  image: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export interface ISectionState {
  id: string
  icon: string
  subHeading: string
}