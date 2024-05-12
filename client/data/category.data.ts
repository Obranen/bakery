import { ICategoryState } from '@/interface/category.interface'
import { MdBakeryDining } from 'react-icons/md'
import { GiSlicedBread, GiCakeSlice } from 'react-icons/gi'

export const category: ICategoryState[] = [
  {
    id: '1',
    title: 'Випічка',
    slug: '',
    icon: MdBakeryDining,
    classesIcon: 'text-3xl',
    classesBorder: 'translate-y-[-2px]',
  },
  {
    id: '2',
    title: 'Хліб',
    slug: '',
    icon: GiSlicedBread,
    classesIcon: 'text-xl mr-1',
    classesBorder: 'translate-y-[2px]',
  },
  {
    id: '3',
    title: 'Десерт',
    slug: '',
    icon: GiCakeSlice,
    classesIcon: 'text-xl mr-1',
    classesBorder: 'translate-y-[2px]',
  },
]
