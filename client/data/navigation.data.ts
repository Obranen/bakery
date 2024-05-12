import { INavigation } from '@/interface/navigation.interface'

export const navigation: INavigation[] = [
  {
    id: '1',
    href: '#',
    title: 'Увійти',
    isDropdown: false,
    isModal: true,
    modalId: 'my_modal_1',
  },
  {
    id: '2',
    href: '',
    title: 'Продукція',
    isDropdown: true,
    dropdown: [
      {
        id: '1',
        href: 'baking',
        title: 'Випічка',
      },
      {
        id: '2',
        href: 'bread',
        title: 'Хліб',
      },
      {
        id: '3',
        href: 'dessert',
        title: 'Десерт',
      },
    ],
    isModal: false,
  },
  {
    id: '3',
    href: '/contact',
    title: 'Контакти',
    isDropdown: false,
    isModal: false,
  },
  {
    id: '4',
    href: '/promotion',
    title: 'Акції',
    isDropdown: false,
    isModal: false,
  },
  {
    id: '5',
    href: '#',
    title: 'Кошик',
    isDropdown: false,
    isModal: false,
  },
]
