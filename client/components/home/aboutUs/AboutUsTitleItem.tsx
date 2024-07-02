import { IBlockState } from '@/interface/homePage.interface'
import { FC } from 'react'
import { GrDeliver } from 'react-icons/gr'
import { MdImportContacts } from 'react-icons/md'

interface IAboutUsTitleItemProps {
  item: IBlockState
}

const AboutUsTitleItem: FC<IAboutUsTitleItemProps> = ({ item }) => {
  const { icon } = item

  const currentIcon = () => {
    switch (icon) {
      case 'MdImportContacts':
        return (
          <MdImportContacts className='inline-block text-3xl text-highlightLight' />
        )
      case 'GrDeliver':
        return (
          <GrDeliver className='inline-block text-3xl text-highlightLight' />
        )
      default:
        return <></>
    }
  }

  return (
    <>
      {currentIcon()}
      {item.title}
    </>
  )
}

export default AboutUsTitleItem
