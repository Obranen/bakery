import { ICategory } from '@/interface/category.interface'
import { MdBakeryDining } from 'react-icons/md'
import { GiSlicedBread, GiCakeSlice } from 'react-icons/gi'

export const category: ICategory[] = [
  {
    id: '1',
    src: '',
    title: 'Випічка',
    slug: '',
    icon: MdBakeryDining,
    classesIcon: 'text-3xl',
    classesBorder: 'translate-y-[-2px]',
  },
  {
    id: '2',
    src: '',
    title: 'Хліб',
    slug: '',
    icon: GiSlicedBread,
    classesIcon: 'text-xl mr-1',
    classesBorder: 'translate-y-[2px]',
  },
  {
    id: '3',
    src: '',
    title: 'Десерт',
    slug: '',
    icon: GiCakeSlice,
    classesIcon: 'text-xl mr-1',
    classesBorder: 'translate-y-[2px]',
  },
]
