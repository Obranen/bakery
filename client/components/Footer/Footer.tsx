import { FaInstagram, FaTelegramPlane, FaViber } from 'react-icons/fa'
import { MdPhoneInTalk } from 'react-icons/md'
import NavigationList from '../Header/Navigation/NavigationList/NavigationList'

const Footer = () => {
  return (
    <footer className='bg-secondaryLight border-t-2 border-primaryLight'>
      <div className='container flex py-3'>
        <nav className='w-4/12'>
          <NavigationList dropdownPosition='dropdown-top' />
        </nav>
        <div className='w-4/12'>
          <div className='flex items-center justify-center'>
            <MdPhoneInTalk className='mr-1 text-base' />
            <b>097-123-45-67</b>
          </div>
        </div>
        <div className='w-4/12 flex justify-end text-2xl'>
          <div className='tooltip ml-5' data-tip='Viber'>
            <FaViber className='hover:text-highlightLight transition ease-linear duration-150 cursor-pointer' />
          </div>
          <div className='tooltip ml-5' data-tip='Telegram'>
            <FaTelegramPlane className='hover:text-highlightLight transition ease-linear duration-150 cursor-pointer' />
          </div>
          <div className='tooltip ml-5' data-tip='Instagram'>
            <FaInstagram className='hover:text-highlightLight transition ease-linear duration-150 cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
