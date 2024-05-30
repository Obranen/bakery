import Link from 'next/link'

const DashboardMenu = () => {
  return (
    <ul className='menu bg-base-200 w-[250px] rounded-box'>
      <li>
        <Link
          href={'/dashboard/edit-user'}
          className='block [&>div]:hover:opacity-100'
        >
          <span className='text-lg font-semibold'>Персональные данные</span>
        </Link>
      </li>
    </ul>
  )
}

export default DashboardMenu
