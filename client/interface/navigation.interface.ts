export interface INavigationState {
  data: [
    {
      id: number
      attributes: INavigationAttrState
    }
  ]
}

export interface INavigationAttrState {
  href: string
  title: string
  position: number
  dropdowns: INavigationDropdownState
  modals: INavigationModalState
}

export interface INavigationDropdownState {
  data: [
    {
      id: number
      attributes: INavigationDropdownAttrState
    }
  ]
}

export interface INavigationDropdownAttrState {
  href: string
  title: string
}

export interface INavigationModalState {
  data: [
    {
      id: number
      attributes: INavigationModalAttrState
    }
  ]
}

export interface INavigationModalAttrState {
  modalId: string
}
