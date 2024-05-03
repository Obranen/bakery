import { INavigationDropdown } from './navigationDropdown'

export interface INavigation {
  id: string
  href: string
  title: string
  isDropdown: boolean
  dropdown?: INavigationDropdown[]
  isModal: boolean
  modalId?: string
}