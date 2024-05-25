import { IFeatureState } from '@/interface/homePage.interface'
import { FC } from 'react'
import { BsClock } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'

interface IContactsItemProps {
  section: IFeatureState
}

const ContactsItem: FC<IContactsItemProps> = ({ section }) => {
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
      <div className='flex flex-col'>
        {
          subHeading.map((item) => (
            <span>{item.children[0].text}</span>
          ))
        }
      </div>
    </div>
  )
}

export default ContactsItem
