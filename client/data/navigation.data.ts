import { INavigation } from '@/interface/navigation.interface'

export const navigation: INavigation[] = [
  {
    id: '1',
    href: '#',
    title: 'Увійти',
    dropdown: false
  },
  {
    id: '2',
    href: '',
    title: 'Продукція',
    dropdown: true
  },
  {
    id: '3',
    href: '/contact',
    title: 'Контакти',
    dropdown: false
  },
  {
    id: '4',
    href: '/promotion',
    title: 'Акції',
    dropdown: false
  },
  {
    id: '5',
    href: '#',
    title: 'Кошик',
    dropdown: false
  },
]
