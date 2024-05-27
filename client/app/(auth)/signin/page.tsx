import SignIn from '@/components/auth/SignIn'

const SignInPage = () => {
  return (
    <main className='bg-secondaryLight'>
    <div className='flex justify-center items-center h-[85vh]'>
    <div className='font-robotoSerifRegular'>
      <h1 className='text-xl font-bold text-center font-robotoRegular'>Вход</h1>
      <SignIn isShowCloseButton={false} />
    </div>
    </div>
  </main>
  )
}

export default SignInPage