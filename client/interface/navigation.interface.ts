export interface INavigationState {
  id: number
  attributes: INavigationAttrState
}

export interface INavigationAttrState {
  href: string
  title: string
  isDropdown: boolean
  isModal: boolean
  modalId?: string
}
