import { IFeatureState } from '@/interface/homePage.interface'
import { FC } from 'react'
import { BsClock } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'

interface IAboutUsItemProps {
  section: IFeatureState
}

const AboutUsItem: FC<IAboutUsItemProps> = ({ section }) => {
  const { icon, subHeading } = section

  const currentIcon = () => {
    switch (icon) {
      case 'FaMapMarkerAlt':
        return <FaMapMarkerAlt className='mr-1 text-3xl' />
      case 'MdPhoneInTalk':
        return <MdPhoneInTalk className='mr-1 text-3xl' />
      default:
        return <BsClock className='mr-4 text-4xl' />
    }
  }

  return (
    <div className='flex items-center'>
      {currentIcon()}
      <div className='flex flex-col'>{subHeading}</div>
    </div>
  )
}

export default AboutUsItem
