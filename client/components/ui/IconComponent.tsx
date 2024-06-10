import loadable from '@loadable/component'
import { IconType } from 'react-icons'

interface IIconComponent {
  iconName: string
  size?: number
}

export const IconComponent: React.FC<IIconComponent> = ({ iconName, size }) => {
  let icon = iconName
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')[0]
    .toLowerCase()

  if (icon === 'ai') {
    const DynamicIconComponent = loadable(() => import('react-icons/ai'), {
      resolveComponent: (el: any) => el[iconName],
    }) as IconType

    return <DynamicIconComponent size={size} />
  } else if (icon === 'bi') {
    const DynamicIconComponent = loadable(() => import('react-icons/bi'), {
      resolveComponent: (el: any) => el[iconName],
    }) as IconType

    return <DynamicIconComponent size={size} />
  } else if (icon === 'fa') {
    const DynamicIconComponent = loadable(() => import('react-icons/fa'), {
      resolveComponent: (el: any) => el[iconName],
    }) as IconType

    return <DynamicIconComponent size={size} />
  }
}
