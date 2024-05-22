import EmailSVG from '@/public/images/svg/EmailSVG'
import KeySVG from '@/public/images/svg/KeySVG'
import UserSVG from '@/public/images/svg/UserSVG'

const Registration = () => {
  return (
    <div role='form'>
      <label className='input input-bordered flex items-center gap-2 mt-2'>
        <UserSVG className='w-4 h-4 opacity-70' />
        <input type='text' className='grow' placeholder='Username' />
      </label>
      <label className='input input-bordered flex items-center gap-2 mt-2'>
        <EmailSVG className='w-4 h-4 opacity-70' />
        <input type='text' className='grow' placeholder='Email' />
      </label>
      <label className='input input-bordered flex items-center gap-2 mt-2'>
        <KeySVG className='w-4 h-4 opacity-70' />
        <input type='password' className='grow' placeholder='Password'/>
      </label>
      <label className='input input-bordered flex items-center gap-2 mt-2'>
        <KeySVG className='w-4 h-4 opacity-70' />
        <input type='password' className='grow' placeholder='Repeat password' />
      </label>
      <div className='flex justify-between mt-4'>
        <form method='dialog'>
          <button className='btn'>Close</button>
        </form>
        <button className='btn join-item'>Зарегистрироваться</button>
      </div>
    </div>
  )
}

export default Registration
